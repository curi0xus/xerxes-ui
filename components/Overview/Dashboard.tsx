import React from 'react';
import { MetricCard } from '../Common/MetricCard';
import { RiskGauge } from '../Common/RiskGauge';
import { mockNewsEvents, mockRiskScore, mockAssets } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, AlertTriangle, Globe, Activity, Clock, Eye } from 'lucide-react';

const recentData = [
  { time: '09:00', sentiment: 45, structural: 28 },
  { time: '10:00', sentiment: 52, structural: 30 },
  { time: '11:00', sentiment: 61, structural: 32 },
  { time: '12:00', sentiment: 67, structural: 34 },
  { time: '13:00', sentiment: 64, structural: 35 },
  { time: '14:00', sentiment: 59, structural: 33 }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <MetricCard
          title="Active Events"
          value={mockNewsEvents.length}
          change={23}
          changeLabel="vs yesterday"
          icon={Activity}
          color="blue"
        />
        <MetricCard
          title="High Impact Events"
          value={mockNewsEvents.filter(e => e.impactScore > 80).length}
          icon={AlertTriangle}
          color="red"
        />
        <MetricCard
          title="Global Coverage"
          value="127"
          changeLabel="regions monitored"
          icon={Globe}
          color="green"
        />
        <MetricCard
          title="Processing Latency"
          value="1.2s"
          changeLabel="avg response time"
          icon={Clock}
          color="purple"
        />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Risk Scores */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Current Risk Assessment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <RiskGauge 
              value={mockRiskScore.sentiment}
              title="Sentiment"
              subtitle="Short-term"
              size="sm"
            />
            <RiskGauge 
              value={mockRiskScore.structural}
              title="Structural"
              subtitle="Long-term"
              size="sm"
            />
          </div>
        </div>

        {/* Risk Evolution Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Risk Evolution (Today)</h3>
          <div className="h-48 lg:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={recentData}>
                <XAxis dataKey="time" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Area 
                  type="monotone" 
                  dataKey="sentiment" 
                  stackId="1"
                  stroke="#3B82F6" 
                  fill="#3B82F6"
                  fillOpacity={0.3}
                />
                <Area 
                  type="monotone" 
                  dataKey="structural" 
                  stackId="2"
                  stroke="#10B981" 
                  fill="#10B981"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* News Feed & Asset Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Top Events */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Top Market Events</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {mockNewsEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-gray-900 font-medium text-sm line-clamp-2 flex-1">{event.title}</h4>
                  <div className="ml-3 bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                    {event.impactScore}
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{event.summary}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{event.source}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{event.timestamp.toLocaleTimeString()}</span>
                  </div>
                  <span className={`
                    px-2 py-0.5 rounded font-medium
                    ${event.sentiment === 'positive' ? 'bg-green-100 text-green-700' : ''}
                    ${event.sentiment === 'negative' ? 'bg-red-100 text-red-700' : ''}
                    ${event.sentiment === 'neutral' ? 'bg-gray-100 text-gray-700' : ''}
                  `}>
                    {event.sentiment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Asset Performance</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
              Monitor Assets
            </button>
          </div>
          
          <div className="space-y-3">
            {mockAssets.map((asset) => (
              <div key={asset.symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{asset.symbol}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm">{asset.symbol}</p>
                    <p className="text-gray-600 text-xs">${asset.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className={`text-sm font-medium ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {asset.change >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%
                    </p>
                    <span className={`
                      px-2 py-0.5 rounded text-xs font-medium
                      ${asset.riskLevel === 'low' ? 'bg-green-100 text-green-700' : ''}
                      ${asset.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${asset.riskLevel === 'high' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {asset.riskLevel}
                    </span>
                  </div>
                  <button className="p-1.5 rounded bg-gray-200 hover:bg-gray-300 transition-colors">
                    <Eye className="h-3 w-3 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <h3 className="text-lg font-bold text-gray-900 mb-4">System Health & Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">99.97%</p>
            <p className="text-gray-600 text-sm">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">1.2s</p>
            <p className="text-gray-600 text-sm">Avg Latency</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">15,247</p>
            <p className="text-gray-600 text-sm">Events/Day</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">92.4%</p>
            <p className="text-gray-600 text-sm">Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};