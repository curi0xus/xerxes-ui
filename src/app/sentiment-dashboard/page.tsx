'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, AlertTriangle, Shield, Activity, Zap } from 'lucide-react'

export default function SentimentDashboard() {
  const [timeframe, setTimeframe] = useState('1D')
  
  const sentimentScore = 67
  const structuralScore = 34
  
  const sentimentFactors = [
    { name: 'VIX Level', value: 28.4, weight: 25, impact: 'negative' },
    { name: 'Social Sentiment', value: -0.15, weight: 20, impact: 'negative' },
    { name: 'Credit Spreads', value: 180, weight: 20, impact: 'neutral' },
    { name: 'News Tone', value: -0.32, weight: 15, impact: 'negative' },
    { name: 'Options Flow', value: 0.8, weight: 20, impact: 'positive' }
  ]

  const structuralFactors = [
    { name: 'Credit-to-GDP', value: 285, weight: 30, impact: 'negative' },
    { name: 'Policy Cycle', value: 'Late', weight: 25, impact: 'neutral' },
    { name: 'Liquidity Metrics', value: 0.65, weight: 20, impact: 'positive' },
    { name: 'Yield Curve', value: -0.45, weight: 15, impact: 'negative' },
    { name: 'Inflation Trend', value: 3.2, weight: 10, impact: 'neutral' }
  ]

  const recommendations = {
    sentiment: {
      level: 'Medium Risk',
      color: 'yellow',
      actions: [
        'Consider defensive positioning',
        'Monitor volatility closely',
        'Reduce leverage exposure',
        'Hedge tail risks'
      ]
    },
    structural: {
      level: 'Low Risk',
      color: 'green',
      actions: [
        'Maintain strategic positions',
        'Focus on quality assets',
        'Monitor policy changes',
        'Prepare for cycle shifts'
      ]
    }
  }

  const getRiskColor = (score: number) => {
    if (score <= 40) return { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-800' }
    if (score <= 70) return { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-800' }
    return { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-800' }
  }

  const getGaugeColor = (score: number) => {
    if (score <= 40) return '#10B981'
    if (score <= 70) return '#F59E0B'
    return '#EF4444'
  }

  const renderGauge = (score: number, title: string, subtitle: string) => {
    const circumference = 2 * Math.PI * 80
    const strokeDasharray = circumference * 0.75 // 270 degrees
    const strokeDashoffset = strokeDasharray - (strokeDasharray * score) / 100

    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg width="200" height="200" className="transform -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="12"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={circumference * 0.125}
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke={getGaugeColor(score)}
              strokeWidth="12"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset + (circumference * 0.125)}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-bold text-gray-900 text-4xl">{score}</span>
            <span className="text-sm text-gray-500 mt-1">
              {score <= 40 ? 'LOW' : score <= 70 ? 'MEDIUM' : 'HIGH'}
            </span>
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sentiment & Structural Dashboard</h1>
          <p className="text-gray-600 mt-1">Track current fear (short-term) and systemic risk (long-term)</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">Live Scoring</span>
          </div>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="1D">1 Day</option>
            <option value="1W">1 Week</option>
            <option value="1M">1 Month</option>
            <option value="3M">3 Months</option>
          </select>
        </div>
      </div>

      {/* Risk Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex justify-center">
          {renderGauge(sentimentScore, 'Sentiment Risk', 'Short-term market fear')}
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex justify-center">
          {renderGauge(structuralScore, 'Structural Risk', 'Long-term systemic risk')}
        </div>
      </div>

      {/* Factor Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Factors */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sentiment Factors</h3>
          <div className="space-y-4">
            {sentimentFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{factor.name}</span>
                    <span className="text-sm text-gray-600">{factor.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        factor.impact === 'positive' ? 'bg-green-500' :
                        factor.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${factor.weight * 4}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  {factor.impact === 'positive' ? 
                    <TrendingUp className="w-4 h-4 text-green-600" /> :
                    factor.impact === 'negative' ?
                    <TrendingDown className="w-4 h-4 text-red-600" /> :
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  }
                  <span className="text-sm font-medium text-gray-900">
                    {typeof factor.value === 'number' ? factor.value.toFixed(2) : factor.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Factors */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Structural Factors</h3>
          <div className="space-y-4">
            {structuralFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{factor.name}</span>
                    <span className="text-sm text-gray-600">{factor.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        factor.impact === 'positive' ? 'bg-green-500' :
                        factor.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${factor.weight * 4}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  {factor.impact === 'positive' ? 
                    <TrendingUp className="w-4 h-4 text-green-600" /> :
                    factor.impact === 'negative' ?
                    <TrendingDown className="w-4 h-4 text-red-600" /> :
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  }
                  <span className="text-sm font-medium text-gray-900">
                    {typeof factor.value === 'number' ? factor.value.toFixed(2) : factor.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Recommendations */}
        <div className={`rounded-xl border-2 p-6 ${getRiskColor(sentimentScore).bg} ${getRiskColor(sentimentScore).border}`}>
          <div className="flex items-center space-x-3 mb-4">
            <Zap className={`w-6 h-6 ${getRiskColor(sentimentScore).text}`} />
            <div>
              <h3 className={`text-lg font-bold ${getRiskColor(sentimentScore).text}`}>
                Sentiment Risk: {recommendations.sentiment.level}
              </h3>
              <p className="text-sm opacity-75">Recommended Actions</p>
            </div>
          </div>
          <ul className="space-y-2">
            {recommendations.sentiment.actions.map((action, index) => (
              <li key={index} className={`text-sm ${getRiskColor(sentimentScore).text} flex items-center space-x-2`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Structural Recommendations */}
        <div className={`rounded-xl border-2 p-6 ${getRiskColor(structuralScore).bg} ${getRiskColor(structuralScore).border}`}>
          <div className="flex items-center space-x-3 mb-4">
            <Shield className={`w-6 h-6 ${getRiskColor(structuralScore).text}`} />
            <div>
              <h3 className={`text-lg font-bold ${getRiskColor(structuralScore).text}`}>
                Structural Risk: {recommendations.structural.level}
              </h3>
              <p className="text-sm opacity-75">Recommended Actions</p>
            </div>
          </div>
          <ul className="space-y-2">
            {recommendations.structural.actions.map((action, index) => (
              <li key={index} className={`text-sm ${getRiskColor(structuralScore).text} flex items-center space-x-2`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Score Evolution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Score Evolution</h3>
        <div className="h-64 bg-gray-50 rounded-lg p-4 relative">
          <svg width="100%" height="100%" className="absolute inset-0">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y, i) => (
              <line
                key={i}
                x1="10%"
                y1={`${100 - y}%`}
                x2="90%"
                y2={`${100 - y}%`}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}
            
            {/* Sentiment line */}
            <polyline
              points="10%,33% 20%,40% 30%,35% 40%,45% 50%,38% 60%,42% 70%,33% 80%,30% 90%,33%"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3"
            />
            
            {/* Structural line */}
            <polyline
              points="10%,66% 20%,68% 30%,65% 40%,70% 50%,67% 60%,65% 70%,68% 80%,66% 90%,66%"
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
            />
          </svg>
          
          {/* Legend */}
          <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-sm border">
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-1 bg-yellow-500"></div>
                <span>Sentiment Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-1 bg-green-500"></div>
                <span>Structural Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}