'use client'

import { useState } from 'react'
import PageHeader from '@/components/causal-explorer/PageHeader'
import CausalGraph from '@/components/causal-explorer/CausalGraph'
import NodeDetailsPanel from '@/components/causal-explorer/NodeDetailsPanel'
import GraphLegend from '@/components/causal-explorer/GraphLegend'
import { causalData } from '@/components/causal-explorer/CausalData'

export default function CausalExplorer() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <PageHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <CausalGraph
            nodes={causalData}
            selectedNode={selectedNode}
            hoveredNode={hoveredNode}
            onSelectNode={setSelectedNode}
            onHoverNode={setHoveredNode}
          />
        </div>

        <NodeDetailsPanel
          selectedNode={selectedNode}
          nodes={causalData}
          onSelectNode={setSelectedNode}
        />
      </div>

      <GraphLegend />
    </div>
  )
}