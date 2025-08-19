import { NodeColors } from './types'

export const getNodeColor = (type: string): NodeColors => {
  switch (type) {
    case 'policy': return { bg: '#3B82F6', border: '#1D4ED8', text: '#FFFFFF' }
    case 'market': return { bg: '#10B981', border: '#047857', text: '#FFFFFF' }
    case 'commodity': return { bg: '#F59E0B', border: '#D97706', text: '#FFFFFF' }
    case 'geopolitical': return { bg: '#EF4444', border: '#DC2626', text: '#FFFFFF' }
    case 'currency': return { bg: '#8B5CF6', border: '#7C3AED', text: '#FFFFFF' }
    default: return { bg: '#6B7280', border: '#4B5563', text: '#FFFFFF' }
  }
}