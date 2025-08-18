import React from 'react';
import { RiskGauge } from '../Common/RiskGauge';
import { MetricCard } from '../Common/MetricCard';
import { mockRiskScore } from '../../data/mockData';
import { TrendingUp, TrendingDown, Activity, DollarSign, Globe, AlertTriangle } from 'lucide-react';

export const RiskDashboard: React.FC = () => {
  const { sentiment, structural, factors } = mockRiskScore;

  return (
    <div className="space-y-6">
      {/* Main Risk Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-8 flex justify-center shadow-professional">
          <RiskGauge 
            value={sentiment}
            title="Sentiment Risk"
            subtitle="Short-term market fear"
            size="lg"
          />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-8 flex justify-center shadow-professional">
          <RiskGauge 
            value={structural}
            title="Structural Risk"
            subtitle="Long-term systemic risk"
            size="lg"
          />
        </div>
      </div>

      {/* Risk Factors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <MetricCard
          title="VIX Level"
          value={factors.vix}
          change={12.3}
          changeLabel="vs avg"
          icon={TrendingUp}
          color="red"
        />
        <MetricCard
          title="Credit Spreads"
          value={`${factors.creditSpreads}bp`}
          change={-5.7}
          changeLabel="this week"
          icon={DollarSign}
          color="yellow"
        />
        <MetricCard
          title="News Flow Intensity"
          value={factors.newsFlow}
          change={23.1}
          changeLabel="vs baseline"
          icon={Activity}
          color="blue"
        />
        <MetricCard
          title="Social Sentiment"
          value={factors.socialSentiment}
          change={-8.4}
          changeLabel="24h change"
          icon={TrendingDown}
          color="red"
        />
        <MetricCard
          title="Liquidity Metrics"
          value={factors.liquidityMetrics}
          change={-2.1}
          changeLabel="vs normal"
          icon={Globe}
          color="green"
        />
        <MetricCard
          title="Policy Uncertainty"
          value={factors.policyUncertainty}
          change={15.6}
          changeLabel="this month"
          icon={AlertTriangle}
          color="purple"
        />
      </div>

      {/* Risk Analysis Panel */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Risk Analysis & Recommendations</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="text-yellow-700 font-semibold mb-2">MEDIUM SENTIMENT RISK</h4>
              <p className="text-gray-700 text-sm">
                Elevated VIX and news flow intensity suggest heightened short-term volatility. 
                Current sentiment risk at 67/100 indicates caution warranted but not panic.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-green-700 font-semibold mb-2">LOW STRUCTURAL RISK</h4>
              <p className="text-gray-700 text-sm">
                Strong liquidity metrics and manageable credit spreads suggest underlying 
                financial system remains stable. Structural risk at 34/100 supports tactical positioning.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold">Recommended Actions</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">Increase Hedging</p>
                  <p className="text-gray-600 text-xs">Consider VIX calls or protective puts for large positions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">Selective Opportunities</p>
                  <p className="text-gray-600 text-xs">Look for oversold quality names in defensive sectors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">Monitor Policy</p>
                  <p className="text-gray-600 text-xs">Track Fed communications for sentiment shifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};