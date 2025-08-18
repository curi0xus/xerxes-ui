import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { mockTimelineData, mockHistoricalAnalogies } from '../../data/mockData';

export const MarketResponseTimeline: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Market Response Timeline</h2>
            <p className="text-gray-600 text-sm">Current vs Historical Event Performance</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-700">Similarity: </span>
            <span className="text-lg font-bold text-blue-600">94%</span>
          </div>
        </div>

        <div className="h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="day" 
                stroke="#6B7280"
                label={{ value: 'Days Since Event', position: 'insideBottom', offset: -5, style: { fill: '#6B7280' } }}
              />
              <YAxis 
                stroke="#6B7280"
                label={{ value: 'Performance (%)', angle: -90, position: 'insideLeft', style: { fill: '#6B7280' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  color: '#1F2937',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Current Event"
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="historical" 
                stroke="#10B981" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Historical Analog (Mar 2022)"
                dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {mockHistoricalAnalogies.map((analogy) => (
          <div key={analogy.id} className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{analogy.title}</h3>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                {analogy.similarity}%
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{analogy.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Max Drawdown</p>
                <p className="text-red-600 font-bold">{analogy.maxDrawdown}%</p>
              </div>
              <div>
                <p className="text-gray-500">Recovery Time</p>
                <p className="text-green-600 font-bold">{analogy.recovery} days</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">{analogy.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};