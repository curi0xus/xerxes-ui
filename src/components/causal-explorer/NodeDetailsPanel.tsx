'use client'

import { Info, Target, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'
import { CausalNode } from './types'

interface NodeDetailsPanelProps {
  selectedNode: string | null
  nodes: Record<string, CausalNode>
  onSelectNode: (id: string) => void
}

const getProbabilityColor = (probability: number): string => {
  if (probability >= 70) return '#10B981'
  if (probability >= 40) return '#F59E0B'
  return '#EF4444'
}

export default function NodeDetailsPanel({ 
  selectedNode, 
  nodes, 
  onSelectNode 
}: NodeDetailsPanelProps) {
  const getImpactIcon = (impact: number) => {
    if (impact > 0) return <TrendingUp className="w-4 h-4 text-green-600" />
    if (impact < 0) return <TrendingDown className="w-4 h-4 text-red-600" />
    return <AlertTriangle className="w-4 h-4 text-yellow-600" />
  }

  if (!selectedNode || !nodes[selectedNode]) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Node Analysis</h3>
        <div className="text-center text-gray-500 py-8">
          <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>Click on a node to view detailed analysis</p>
        </div>
      </div>
    )
  }

  const node = nodes[selectedNode]
  const primaryOutcome = node.outcomes.reduce((max, outcome) => 
    outcome.probability > max.probability ? outcome : max
  )

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Node Analysis</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">
            {node.title}
          </h4>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Type:</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                node.type === 'policy' ? 'bg-blue-100 text-blue-800' :
                node.type === 'market' ? 'bg-green-100 text-green-800' :
                node.type === 'commodity' ? 'bg-orange-100 text-orange-800' :
                node.type === 'geopolitical' ? 'bg-red-100 text-red-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {node.type}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Confidence:</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${node.confidence}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{node.confidence}%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Primary Impact:</span>
              <div className="flex items-center space-x-1">
                {getImpactIcon(primaryOutcome.impact)}
                <span className={`text-sm font-medium ${
                  primaryOutcome.impact > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {primaryOutcome.impact}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Probability Outcomes */}
        <div className="space-y-3">
          <h5 className="font-medium text-gray-900">Probability Outcomes</h5>
          <div className="space-y-3">
            {node.outcomes
              .sort((a, b) => b.probability - a.probability)
              .map((outcome) => (
                <div key={outcome.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {outcome.probability}% Probability
                    </span>
                    <div className="flex items-center space-x-1">
                      {getImpactIcon(outcome.impact)}
                      <span className={`text-xs font-medium ${
                        outcome.impact > 0 ? 'text-green-600' : 
                        outcome.impact < 0 ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {outcome.impact > 0 ? '+' : ''}{outcome.impact}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{outcome.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full"
                      style={{ 
                        width: `${outcome.probability}%`,
                        backgroundColor: getProbabilityColor(outcome.probability)
                      }}
                    ></div>
                  </div>
                  {outcome.children.length > 0 && (
                    <div className="mt-2 text-xs text-gray-500">
                      Leads to: {outcome.children.length} event(s)
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="font-medium text-gray-900">All Connected Events</h5>
          <div className="space-y-2">
            {Array.from(new Set(node.outcomes.flatMap(outcome => outcome.children)))
              .map((childId: string) => {
                const childNode = nodes[childId]
                if (!childNode) return null
                
                // Find the outcome with highest probability that leads to this child
                const relevantOutcome = node.outcomes
                  .filter(outcome => outcome.children.includes(childId))
                  .reduce((max, outcome) => outcome.probability > max.probability ? outcome : max)
                
                return (
                  <div 
                    key={childId}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                    onClick={() => onSelectNode(childId)}
                  >
                    <span className="text-sm text-gray-700">{childNode.title}</span>
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getProbabilityColor(relevantOutcome.probability) }}
                      ></div>
                      <span className="text-xs text-gray-500">{relevantOutcome.probability}%</span>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="w-4 h-4 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Causal Chain Analysis</p>
              <p>This event has {node.outcomes.length} possible outcomes with varying probabilities. The most likely scenario ({primaryOutcome.probability}%) is: {primaryOutcome.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}