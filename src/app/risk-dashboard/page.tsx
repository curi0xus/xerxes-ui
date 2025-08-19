'use client'

import { AlertTriangle, TrendingDown, TrendingUp, Activity, Shield, Zap } from 'lucide-react'

export default function RiskDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Risk Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor and analyze portfolio risk exposure</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">High Risk Alert Active</span>
        </div>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Portfolio VaR</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">$2.4M</p>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">+15%</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-red-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Beta Exposure</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">1.34</p>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-600">+0.12</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-orange-600">
              <Activity className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Correlation Risk</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">0.78</p>
              <div className="flex items-center space-x-1">
                <TrendingDown className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">-0.05</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-yellow-600">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Stress Test</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">-18%</p>
              <span className="text-xs text-gray-500">worst case scenario</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-blue-600">
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Risk Heatmap */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Risk Heatmap by Sector</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { sector: 'Technology', risk: 'high', value: 85 },
            { sector: 'Healthcare', risk: 'medium', value: 62 },
            { sector: 'Finance', risk: 'high', value: 78 },
            { sector: 'Energy', risk: 'critical', value: 92 },
            { sector: 'Consumer', risk: 'low', value: 34 },
            { sector: 'Industrial', risk: 'medium', value: 56 },
            { sector: 'Materials', risk: 'high', value: 71 },
            { sector: 'Utilities', risk: 'low', value: 28 }
          ].map((item) => (
            <div key={item.sector} className={`p-4 rounded-lg border-2 ${
              item.risk === 'critical' ? 'bg-red-100 border-red-300' :
              item.risk === 'high' ? 'bg-orange-100 border-orange-300' :
              item.risk === 'medium' ? 'bg-yellow-100 border-yellow-300' :
              'bg-green-100 border-green-300'
            }`}>
              <div className="text-sm font-medium text-gray-900">{item.sector}</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{item.value}</div>
              <div className={`text-xs font-medium mt-1 ${
                item.risk === 'critical' ? 'text-red-700' :
                item.risk === 'high' ? 'text-orange-700' :
                item.risk === 'medium' ? 'text-yellow-700' :
                'text-green-700'
              }`}>
                {item.risk.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Alerts */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Active Risk Alerts</h3>
        <div className="space-y-3">
          {[
            { type: 'critical', message: 'Energy sector correlation spike detected', time: '2 min ago' },
            { type: 'warning', message: 'Portfolio beta exceeding target range', time: '15 min ago' },
            { type: 'info', message: 'New stress test results available', time: '1 hour ago' }
          ].map((alert, index) => (
            <div key={index} className={`flex items-center p-3 rounded-lg border ${
              alert.type === 'critical' ? 'bg-red-50 border-red-200' :
              alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
              'bg-blue-50 border-blue-200'
            }`}>
              <AlertTriangle className={`w-5 h-5 mr-3 ${
                alert.type === 'critical' ? 'text-red-600' :
                alert.type === 'warning' ? 'text-yellow-600' :
                'text-blue-600'
              }`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}