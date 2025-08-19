import { CausalNode } from './types'

// Remove manual positions - let Regraph handle layout
export const causalData: Record<string, CausalNode> = {
  'us-tariff-evs': {
    id: 'us-tariff-evs',
    title: 'US Tariff on Chinese EVs',
    type: 'policy',
    confidence: 92,
    impact: 85,
    position: { x: 0, y: 0 }, // Will be overridden by layout
    outcomes: [
      {
        id: 'high-tariff-outcome',
        probability: 75,
        description: 'High tariffs implemented (100%+)',
        children: ['chinese-ev-stocks', 'trade-tensions'],
        impact: -25
      },
      {
        id: 'moderate-tariff-outcome',
        probability: 20,
        description: 'Moderate tariffs (25-50%)',
        children: ['us-auto-sector', 'battery-materials'],
        impact: -10
      },
      {
        id: 'no-tariff-outcome',
        probability: 5,
        description: 'No additional tariffs',
        children: [],
        impact: 0
      }
    ]
  },
  'chinese-ev-stocks': {
    id: 'chinese-ev-stocks',
    title: 'Chinese EV Stock Decline',
    type: 'market',
    confidence: 88,
    impact: -15,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'severe-decline',
        probability: 60,
        description: 'Severe decline (-20% to -40%)',
        children: ['byd-stock', 'nio-stock'],
        impact: -30
      },
      {
        id: 'moderate-decline',
        probability: 35,
        description: 'Moderate decline (-5% to -20%)',
        children: ['byd-stock'],
        impact: -12
      },
      {
        id: 'resilient-performance',
        probability: 5,
        description: 'Resilient performance (0% to -5%)',
        children: [],
        impact: -2
      }
    ]
  },
  'us-auto-sector': {
    id: 'us-auto-sector',
    title: 'US Auto Sector Rally',
    type: 'market',
    confidence: 75,
    impact: 8,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'strong-rally',
        probability: 45,
        description: 'Strong rally (+10% to +20%)',
        children: ['tesla-stock', 'ford-stock'],
        impact: 15
      },
      {
        id: 'modest-gains',
        probability: 40,
        description: 'Modest gains (+2% to +10%)',
        children: ['tesla-stock'],
        impact: 6
      },
      {
        id: 'no-impact',
        probability: 15,
        description: 'No significant impact',
        children: [],
        impact: 0
      }
    ]
  },
  'battery-materials': {
    id: 'battery-materials',
    title: 'Battery Materials Volatility',
    type: 'commodity',
    confidence: 82,
    impact: 12,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'supply-disruption',
        probability: 55,
        description: 'Supply chain disruption',
        children: ['lithium-prices'],
        impact: 20
      },
      {
        id: 'price-stability',
        probability: 30,
        description: 'Price stabilization',
        children: [],
        impact: 5
      },
      {
        id: 'oversupply',
        probability: 15,
        description: 'Market oversupply',
        children: [],
        impact: -8
      }
    ]
  },
  'trade-tensions': {
    id: 'trade-tensions',
    title: 'US-China Trade Tensions',
    type: 'geopolitical',
    confidence: 95,
    impact: 22,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'escalation',
        probability: 70,
        description: 'Trade war escalation',
        children: ['yuan-weakness'],
        impact: 25
      },
      {
        id: 'negotiation',
        probability: 25,
        description: 'Diplomatic negotiations',
        children: [],
        impact: 5
      },
      {
        id: 'de-escalation',
        probability: 5,
        description: 'Tension de-escalation',
        children: [],
        impact: -5
      }
    ]
  },
  'byd-stock': {
    id: 'byd-stock',
    title: 'BYD Stock Impact',
    type: 'market',
    confidence: 85,
    impact: -18,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'major-decline',
        probability: 80,
        description: 'Major stock decline',
        children: [],
        impact: -25
      },
      {
        id: 'minor-impact',
        probability: 20,
        description: 'Minor impact',
        children: [],
        impact: -5
      }
    ]
  },
  'nio-stock': {
    id: 'nio-stock',
    title: 'NIO Stock Impact',
    type: 'market',
    confidence: 80,
    impact: -22,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'severe-impact',
        probability: 75,
        description: 'Severe negative impact',
        children: [],
        impact: -30
      },
      {
        id: 'moderate-impact',
        probability: 25,
        description: 'Moderate impact',
        children: [],
        impact: -10
      }
    ]
  },
  'tesla-stock': {
    id: 'tesla-stock',
    title: 'Tesla Competitive Advantage',
    type: 'market',
    confidence: 70,
    impact: 12,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'market-share-gain',
        probability: 65,
        description: 'Market share gains',
        children: [],
        impact: 15
      },
      {
        id: 'status-quo',
        probability: 35,
        description: 'Status quo maintained',
        children: [],
        impact: 3
      }
    ]
  },
  'ford-stock': {
    id: 'ford-stock',
    title: 'Ford Market Share Gain',
    type: 'market',
    confidence: 65,
    impact: 8,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'significant-gain',
        probability: 60,
        description: 'Significant market gains',
        children: [],
        impact: 12
      },
      {
        id: 'limited-benefit',
        probability: 40,
        description: 'Limited benefit',
        children: [],
        impact: 3
      }
    ]
  },
  'lithium-prices': {
    id: 'lithium-prices',
    title: 'Lithium Price Surge',
    type: 'commodity',
    confidence: 88,
    impact: 15,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'price-spike',
        probability: 70,
        description: 'Sharp price increase',
        children: [],
        impact: 25
      },
      {
        id: 'gradual-increase',
        probability: 30,
        description: 'Gradual price rise',
        children: [],
        impact: 8
      }
    ]
  },
  'yuan-weakness': {
    id: 'yuan-weakness',
    title: 'Yuan Depreciation',
    type: 'currency',
    confidence: 90,
    impact: 8,
    position: { x: 0, y: 0 },
    outcomes: [
      {
        id: 'significant-depreciation',
        probability: 85,
        description: 'Significant depreciation',
        children: [],
        impact: 12
      },
      {
        id: 'controlled-decline',
        probability: 15,
        description: 'Controlled decline',
        children: [],
        impact: 3
      }
    ]
  }
}