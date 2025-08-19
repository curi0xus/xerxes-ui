import React, { useEffect, useState } from 'react';
import CausalNode from './CausalNode';
import ConnectionLines from './ConnectionLines';
import { CausalNode as CausalNodeType } from './types';

interface CausalGraphProps {
  nodes: Record<string, CausalNodeType>;
  selectedNode: string | null;
  hoveredNode: string | null;
  onSelectNode: (nodeId: string) => void;
  onHoverNode: (nodeId: string | null) => void;
}

// Custom force-directed layout algorithm
const calculateLayout = (nodes: Record<string, CausalNodeType>) => {
  const nodeArray = Object.values(nodes);
  const layoutNodes = { ...nodes };
  
  // Initialize positions randomly if not set
  nodeArray.forEach((node, index) => {
    if (!node.position || (node.position.x === 0 && node.position.y === 0)) {
      layoutNodes[node.id] = {
        ...node,
        position: {
          x: 20 + (index % 4) * 20 + Math.random() * 10,
          y: 20 + Math.floor(index / 4) * 25 + Math.random() * 10
        }
      };
    }
  });

  // Simple force-directed positioning
  for (let iteration = 0; iteration < 50; iteration++) {
    const forces: Record<string, { x: number; y: number }> = {};
    
    // Initialize forces
    Object.keys(layoutNodes).forEach(id => {
      forces[id] = { x: 0, y: 0 };
    });

    // Repulsion forces (prevent overlap)
    Object.values(layoutNodes).forEach(nodeA => {
      Object.values(layoutNodes).forEach(nodeB => {
        if (nodeA.id !== nodeB.id) {
          const dx = nodeA.position.x - nodeB.position.x;
          const dy = nodeA.position.y - nodeB.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          
          if (distance < 15) { // Minimum distance
            const force = 200 / (distance * distance);
            forces[nodeA.id].x += (dx / distance) * force;
            forces[nodeA.id].y += (dy / distance) * force;
          }
        }
      });
    });

    // Attraction forces (connected nodes)
    Object.values(layoutNodes).forEach(node => {
      node.outcomes.forEach(outcome => {
        outcome.children.forEach(childId => {
          const childNode = layoutNodes[childId];
          if (childNode) {
            const dx = childNode.position.x - node.position.x;
            const dy = childNode.position.y - node.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            
            const idealDistance = 25;
            const force = (distance - idealDistance) * 0.1;
            
            forces[node.id].x += (dx / distance) * force;
            forces[node.id].y += (dy / distance) * force;
            forces[childId].x -= (dx / distance) * force;
            forces[childId].y -= (dy / distance) * force;
          }
        });
      });
    });

    // Apply forces with damping
    Object.keys(layoutNodes).forEach(id => {
      const damping = 0.8;
      layoutNodes[id].position.x += forces[id].x * 0.01 * damping;
      layoutNodes[id].position.y += forces[id].y * 0.01 * damping;
      
      // Keep nodes within bounds
      layoutNodes[id].position.x = Math.max(10, Math.min(90, layoutNodes[id].position.x));
      layoutNodes[id].position.y = Math.max(10, Math.min(90, layoutNodes[id].position.y));
    });
  }

  return layoutNodes;
};

export const CausalGraph: React.FC<CausalGraphProps> = ({
  nodes,
  selectedNode,
  hoveredNode,
  onSelectNode,
  onHoverNode,
}) => {
  const [layoutNodes, setLayoutNodes] = useState<Record<string, CausalNodeType>>(nodes);

  // Calculate layout on mount and when nodes change
  useEffect(() => {
    const calculatedLayout = calculateLayout(nodes);
    setLayoutNodes(calculatedLayout);
  }, [nodes]);

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
      <div className="relative w-full h-full">
        {/* Connection lines */}
        <ConnectionLines nodes={layoutNodes} />
        
        {/* Nodes */}
        <div className="relative w-full h-full">
          {Object.values(layoutNodes).map((node) => (
            <CausalNode
              key={node.id}
              node={node}
              isSelected={selectedNode === node.id}
              isHovered={hoveredNode === node.id}
              onSelect={() => onSelectNode(node.id)}
              onHover={() => onHoverNode(node.id)}
              onLeave={() => onHoverNode(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CausalGraph;