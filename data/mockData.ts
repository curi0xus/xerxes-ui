import { NewsEvent, CausalNode, CausalEdge, HistoricalAnalogy, RiskScore, Asset } from '../types';

export const mockNewsEvents: NewsEvent[] = [
  {
    id: '1',
    title: 'Fed Signals Potential Rate Hike Acceleration',
    summary: 'Federal Reserve officials hint at faster pace of interest rate increases amid persistent inflation concerns.',
    timestamp: new Date('2025-01-15T10:30:00Z'),
    source: 'Reuters',
    category: 'monetary',
    impactScore: 92,
    sentiment: 'negative',
    regions: ['North America', 'Global'],
    sectors: ['Banking', 'Real Estate', 'Technology']
  },
  {
    id: '2',
    title: 'China Announces Major Infrastructure Stimulus Package',
    summary: '$500B infrastructure program targeting renewable energy and transportation networks.',
    timestamp: new Date('2025-01-15T08:15:00Z'),
    source: 'Bloomberg',
    category: 'monetary',
    impactScore: 88,
    sentiment: 'positive',
    regions: ['Asia Pacific', 'Global'],
    sectors: ['Materials', 'Energy', 'Infrastructure']
  },
  {
    id: '3',
    title: 'Geopolitical Tensions Rise in Middle East',
    summary: 'Escalating diplomatic crisis threatens regional stability and energy supply chains.',
    timestamp: new Date('2025-01-15T06:45:00Z'),
    source: 'Financial Times',
    category: 'geopolitical',
    impactScore: 76,
    sentiment: 'negative',
    regions: ['Middle East', 'Europe'],
    sectors: ['Energy', 'Defense', 'Transportation']
  }
];

export const mockCausalNodes: CausalNode[] = [
  { id: 'fed-rate-hike', label: 'Fed Rate Hike', type: 'event', impact: 92, confidence: 85, x: 100, y: 100 },
  { id: 'banking', label: 'Banking Sector', type: 'sector', impact: 78, confidence: 90, x: 250, y: 50 },
  { id: 'real-estate', label: 'Real Estate', type: 'sector', impact: -65, confidence: 82, x: 250, y: 150 },
  { id: 'tech-stocks', label: 'Tech Stocks', type: 'sector', impact: -45, confidence: 75, x: 400, y: 100 },
  { id: 'usd', label: 'USD Strength', type: 'asset', impact: 55, confidence: 88, x: 400, y: 50 },
  { id: 'bonds', label: 'Treasury Bonds', type: 'asset', impact: -35, confidence: 92, x: 400, y: 150 }
];

export const mockCausalEdges: CausalEdge[] = [
  { source: 'fed-rate-hike', target: 'banking', strength: 0.8, type: 'causation', delay: 1 },
  { source: 'fed-rate-hike', target: 'real-estate', strength: 0.7, type: 'causation', delay: 2 },
  { source: 'fed-rate-hike', target: 'tech-stocks', strength: 0.6, type: 'correlation', delay: 1 },
  { source: 'fed-rate-hike', target: 'usd', strength: 0.9, type: 'causation', delay: 0 },
  { source: 'fed-rate-hike', target: 'bonds', strength: 0.8, type: 'causation', delay: 0 }
];

export const mockHistoricalAnalogies: HistoricalAnalogy[] = [
  {
    id: '1',
    title: 'March 2022 Fed Rate Cycle',
    date: '2022-03-16',
    similarity: 94,
    description: 'Similar inflation-driven rate hiking cycle with 75bp moves',
    outcome: 'Tech selloff, banking sector strength, USD rally',
    duration: 180,
    maxDrawdown: -28,
    recovery: 45
  },
  {
    id: '2',
    title: 'December 2015 Rate Liftoff',
    date: '2015-12-16',
    similarity: 87,
    description: 'First rate hike after extended zero-rate period',
    outcome: 'Initial volatility, gradual market adaptation',
    duration: 90,
    maxDrawdown: -12,
    recovery: 30
  },
  {
    id: '3',
    title: 'June 2004 Rate Cycle Begin',
    date: '2004-06-30',
    similarity: 78,
    description: 'Measured pace rate increases in strong economy',
    outcome: 'Steady market climb, sector rotation to value',
    duration: 120,
    maxDrawdown: -8,
    recovery: 15
  }
];

export const mockRiskScore: RiskScore = {
  sentiment: 67,
  structural: 34,
  lastUpdated: new Date(),
  factors: {
    vix: 28.5,
    creditSpreads: 145,
    newsFlow: 72,
    socialSentiment: 45,
    liquidityMetrics: 38,
    policyUncertainty: 52
  }
};

export const mockAssets: Asset[] = [
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF',
    price: 456.78,
    change: -5.23,
    changePercent: -1.13,
    riskLevel: 'medium',
    alerts: [
      { id: '1', type: 'risk', message: 'Fed policy shift may pressure growth stocks', timestamp: new Date(), severity: 'medium' }
    ]
  },
  {
    symbol: 'XLF',
    name: 'Financial Select Sector SPDR',
    price: 42.15,
    change: 1.87,
    changePercent: 4.64,
    riskLevel: 'low',
    alerts: [
      { id: '2', type: 'opportunity', message: 'Rate hike cycle benefits banking margins', timestamp: new Date(), severity: 'low' }
    ]
  },
  {
    symbol: 'QQQ',
    name: 'Invesco QQQ Trust',
    price: 387.92,
    change: -8.45,
    changePercent: -2.13,
    riskLevel: 'high',
    alerts: [
      { id: '3', type: 'risk', message: 'Tech sector vulnerable to rate increases', timestamp: new Date(), severity: 'high' }
    ]
  },
  {
    symbol: 'GLD',
    name: 'SPDR Gold Shares',
    price: 185.67,
    change: -2.34,
    changePercent: -1.24,
    riskLevel: 'medium',
    alerts: []
  }
];

export const mockTimelineData = [
  { day: 0, current: 0, historical: 0, similarity: 94 },
  { day: 1, current: -1.2, historical: -0.8, similarity: 94 },
  { day: 2, current: -2.1, historical: -1.5, similarity: 93 },
  { day: 3, current: -1.8, historical: -2.2, similarity: 91 },
  { day: 5, current: -3.2, historical: -2.8, similarity: 89 },
  { day: 7, current: -2.9, historical: -3.1, similarity: 87 },
  { day: 10, current: -1.5, historical: -2.0, similarity: 85 },
  { day: 14, current: -0.8, historical: -1.2, similarity: 82 },
  { day: 21, current: 0.5, historical: -0.5, similarity: 78 },
  { day: 30, current: 1.2, historical: 0.8, similarity: 75 }
];