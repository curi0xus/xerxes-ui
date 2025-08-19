export interface CausalNode {
  id: string
  title: string
  type: 'policy' | 'market' | 'commodity' | 'geopolitical' | 'currency'
  confidence: number
  impact: number
  position: { x: number; y: number }
  outcomes: CausalOutcome[]
}

export interface CausalOutcome {
  id: string
  probability: number
  description: string
  children: string[]
  impact: number
}

export interface NodeColors {
  bg: string
  border: string
  text: string
}