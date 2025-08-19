'use client'

import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, AlertTriangle, Activity } from 'lucide-react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString())
    
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live Market Data</span>
        </div>
        <div className="text-sm text-gray-500">
          Last Updated: {currentTime}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Active Events</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">12</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-green-600">+23%</span>
                <span className="text-xs text-gray-500">vs yesterday</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-blue-600 shadow-sm">
              <Activity className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">High Impact Events</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">3</p>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-red-600 shadow-sm">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Global Coverage</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">127</p>
              <span className="text-xs text-gray-500">regions monitored</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-green-600 shadow-sm">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Processing Latency</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">1.2s</p>
              <span className="text-xs text-gray-500">avg response time</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-purple-600 shadow-sm">
              <Activity className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Risk Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex justify-center shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="180" height="180" className="transform -rotate-90">
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  strokeDasharray="377"
                  strokeDashoffset="94.25"
                  strokeLinecap="round"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="10"
                  strokeDasharray="377"
                  strokeDashoffset="218.85"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-gray-900 text-3xl">67</span>
                <span className="text-xs text-gray-500 mt-1">MEDIUM</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Sentiment Risk</h3>
              <p className="text-sm text-gray-500 mt-1">Short-term market fear</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 flex justify-center shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="180" height="180" className="transform -rotate-90">
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  strokeDasharray="377"
                  strokeDashoffset="94.25"
                  strokeLinecap="round"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="80"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeDasharray="377"
                  strokeDashoffset="346.82"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-gray-900 text-3xl">34</span>
                <span className="text-xs text-gray-500 mt-1">LOW</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Structural Risk</h3>
              <p className="text-sm text-gray-500 mt-1">Long-term systemic risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* News Events */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Top Market Events</h3>
          <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-gray-900 font-medium text-sm flex-1">Fed Signals Potential Rate Hike Acceleration</h4>
              <div className="ml-3 bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">92</div>
            </div>
            <p className="text-gray-600 text-xs mb-3">Federal Reserve officials hint at faster pace of interest rate increases amid persistent inflation concerns.</p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Reuters</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">10:30 AM</span>
              </div>
              <span className="px-2 py-0.5 rounded font-medium bg-red-100 text-red-700">negative</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-gray-900 font-medium text-sm flex-1">China Announces Major Infrastructure Stimulus Package</h4>
              <div className="ml-3 bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">88</div>
            </div>
            <p className="text-gray-600 text-xs mb-3">$500B infrastructure program targeting renewable energy and transportation networks.</p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Bloomberg</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">8:15 AM</span>
              </div>
              <span className="px-2 py-0.5 rounded font-medium bg-green-100 text-green-700">positive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}