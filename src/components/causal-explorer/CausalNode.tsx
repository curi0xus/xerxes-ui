'use client'

import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'
import { CausalNode as CausalNodeType } from './types'
import { getNodeColor } from './utils'

interface CausalNodeProps {
  node: CausalNodeType
  isSelected: boolean
  isHovered: boolean
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

export default function CausalNode({ 
  node, 
  isSelected, 
  isHovered, 
  onSelect, 
  onHover 
}: CausalNodeProps) {
  const colors = getNodeColor(node.type)
  const scale = isSelected ? 1.1 : isHovered ? 1.05 : 1
  
  // Calculate highest probability outcome for display
  const primaryOutcome = node.outcomes.reduce((max, outcome) => 
    outcome.probability > max.probability ? outcome : max
  )

  const getImpactIcon = (impact: number) => {
    if (impact > 0) return <TrendingUp className="w-3 h-3" />
    if (impact < 0) return <TrendingDown className="w-3 h-3" />
    return <AlertTriangle className="w-3 h-3" />
  }

  const getProbabilityColor = (probability: number): string => {
    if (probability >= 70) return '#10B981'
    if (probability >= 40) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <div
      className="absolute cursor-pointer transition-all duration-300"
      style={{
        left: `${node.position.x}%`,
        top: `${node.position.y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`
      }}
      onClick={() => onSelect(node.id)}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Node Circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center relative border-2 shadow-lg"
        style={{
          backgroundColor: colors.bg,
          borderColor: colors.border,
          borderWidth: isSelected ? '3px' : '2px'
        }}
      >
        {/* Impact Icon */}
        <div className="text-white">
          {getImpactIcon(primaryOutcome.impact)}
        </div>

        {/* Confidence Badge */}
        <div
          className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold border-2"
          style={{ borderColor: colors.border, color: colors.bg }}
        >
          {node.confidence}
        </div>

        {/* Probability Ring */}
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: getProbabilityColor(primaryOutcome.probability),
            borderStyle: 'dashed'
          }}
        />
      </div>

      {/* Node Label */}
      <div className="mt-2 text-center">
        <div className="text-xs font-medium text-gray-800 max-w-20 mx-auto">
          {node.title.length > 15 ? node.title.substring(0, 15) + '...' : node.title}
        </div>
        <div
          className="text-xs font-bold mt-1"
          style={{ color: getProbabilityColor(primaryOutcome.probability) }}
        >
          {primaryOutcome.probability}%
        </div>
      </div>
    </div>
  )
}