export interface NewsEvent {
  id: string;
  title: string;
  summary: string;
  timestamp: Date;
  source: string;
  category: 'geopolitical' | 'monetary' | 'trade' | 'energy' | 'tech' | 'regulatory';
  impactScore: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  regions: string[];
  sectors: string[];
}

export interface CausalNode {
  id: string;
  label: string;
  type: 'event' | 'sector' | 'asset';
  impact: number;
  confidence: number;
  x: number;
  y: number;
}

export interface CausalEdge {
  source: string;
  target: string;
  strength: number;
  type: 'causation' | 'correlation';
  delay: number;
}

export interface HistoricalAnalogy {
  id: string;
  title: string;
  date: string;
  similarity: number;
  description: string;
  outcome: string;
  duration: number;
  maxDrawdown: number;
  recovery: number;
}

export interface RiskScore {
  sentiment: number;
  structural: number;
  lastUpdated: Date;
  factors: {
    vix: number;
    creditSpreads: number;
    newsFlow: number;
    socialSentiment: number;
    liquidityMetrics: number;
    policyUncertainty: number;
  };
}

export interface Asset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  riskLevel: 'low' | 'medium' | 'high';
  alerts: Alert[];
}

export interface Alert {
  id: string;
  type: 'risk' | 'opportunity' | 'info';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}