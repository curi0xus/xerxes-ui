import React from 'react';
import { CausalNode } from './types';

interface ConnectionLinesProps {
  nodes: Record<string, CausalNode>;
}

const getProbabilityColor = (probability: number): string => {
  if (probability >= 70) return '#10B981';
  if (probability >= 40) return '#F59E0B';
  return '#EF4444';
};

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ nodes }) => {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#9CA3AF"
          />
        </marker>
      </defs>
      
      {Object.values(nodes).map(node =>
        node.outcomes.flatMap(outcome =>
          outcome.children.map(childId => {
            const childNode = nodes[childId];
            if (!childNode) return null;

            const startX = node.position.x;
            const startY = node.position.y + 3;
            const endX = childNode.position.x;
            const endY = childNode.position.y - 3;

            return (
              <g key={`${node.id}-${outcome.id}-${childId}`}>
                <line
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke={getProbabilityColor(outcome.probability)}
                  strokeWidth="2"
                  strokeOpacity={outcome.probability / 100}
                  markerEnd="url(#arrowhead)"
                />
                <circle
                  cx={`${(startX + endX) / 2}%`}
                  cy={`${(startY + endY) / 2}%`}
                  r="3"
                  fill={getProbabilityColor(outcome.probability)}
                />
                {/* Probability label on connection */}
                <text
                  x={`${(startX + endX) / 2}%`}
                  y={`${(startY + endY) / 2 - 2}%`}
                  textAnchor="middle"
                  className="text-xs font-bold fill-gray-700"
                  style={{ fontSize: '10px' }}
                >
                  {outcome.probability}%
                </text>
              </g>
            );
          })
        )
      )}
    </svg>
  );
};

export default ConnectionLines;