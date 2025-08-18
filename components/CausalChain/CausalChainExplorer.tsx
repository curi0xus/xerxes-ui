'use client'

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { mockCausalNodes, mockCausalEdges } from '../../data/mockData';
import { CausalNode, CausalEdge } from '../../types';

export const CausalChainExplorer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<CausalNode | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 500;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Create simulation
    const simulation = d3.forceSimulation(mockCausalNodes)
      .force('link', d3.forceLink(mockCausalEdges).id((d: any) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Create links
    const links = svg.append('g')
      .selectAll('line')
      .data(mockCausalEdges)
      .enter()
      .append('line')
      .attr('stroke', (d: CausalEdge) => d.type === 'causation' ? '#3B82F6' : '#6B7280')
      .attr('stroke-width', (d: CausalEdge) => Math.max(1, d.strength * 4))
      .attr('stroke-dasharray', (d: CausalEdge) => d.type === 'correlation' ? '5,5' : 'none')
      .attr('opacity', 0.7);

    // Create nodes
    const nodes = svg.append('g')
      .selectAll('g')
      .data(mockCausalNodes)
      .enter()
      .append('g')
      .style('cursor', 'pointer')
      .on('click', (event, d) => setSelectedNode(d));

    // Node circles
    nodes.append('circle')
      .attr('r', (d: CausalNode) => Math.max(20, Math.abs(d.impact) / 2))
      .attr('fill', (d: CausalNode) => {
        if (d.type === 'event') return '#3B82F6';
        if (d.type === 'sector') return d.impact > 0 ? '#10B981' : '#EF4444';
        return '#8B5CF6';
      })
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', 2)
      .style('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))');

    // Node labels
    nodes.append('text')
      .text((d: CausalNode) => d.label)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .style('pointer-events', 'none');

    // Impact indicators
    nodes.append('text')
      .text((d: CausalNode) => d.impact > 0 ? `+${d.impact}%` : `${d.impact}%`)
      .attr('text-anchor', 'middle')
      .attr('dy', '25px')
      .attr('fill', (d: CausalNode) => d.impact > 0 ? '#10B981' : '#EF4444')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold');

    // Update positions
    simulation.on('tick', () => {
      links
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      nodes.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Causal Chain Explorer</h2>
          <p className="text-gray-600 text-sm">Interactive event impact visualization</p>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Event</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Positive Impact</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Negative Impact</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        <div className="flex-1 overflow-x-auto">
          <svg
            ref={svgRef}
            width="100%"
            height={400}
            viewBox="0 0 800 500"
            className="bg-gray-50 rounded-lg border border-gray-200"
          />
        </div>

        {selectedNode && (
          <div className="w-full lg:w-80 bg-gray-50 rounded-lg border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{selectedNode.label}</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="text-gray-900 capitalize">{selectedNode.type}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Impact:</span>
                <span className={`font-bold ${selectedNode.impact > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedNode.impact > 0 ? '+' : ''}{selectedNode.impact}%
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence:</span>
                <span className="text-gray-900">{selectedNode.confidence}%</span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Causal Pathways</h4>
                <div className="space-y-2 text-xs">
                  {mockCausalEdges
                    .filter(edge => edge.source === selectedNode.id || edge.target === selectedNode.id)
                    .map((edge, idx) => (
                      <div key={idx} className="text-gray-700">
                        {edge.source === selectedNode.id ? '→' : '←'} 
                        {edge.type === 'causation' ? ' Direct' : ' Correlated'} 
                        ({Math.round(edge.strength * 100)}% strength)
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};