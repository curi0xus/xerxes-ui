'use client'

import { TrendingUp } from 'lucide-react'

export default function GraphLegend() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Graph Legend</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-blue-800"></div>
          <span className="text-sm text-gray-700">Policy Events</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-green-800"></div>
          <span className="text-sm text-gray-700">Market Events</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-600 rounded-full border-2 border-orange-800"></div>
          <span className="text-sm text-gray-700">Commodity Events</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-red-800"></div>
          <span className="text-sm text-gray-700">Geopolitical Events</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-purple-600 rounded-full border-2 border-purple-800"></div>
          <span className="text-sm text-gray-700">Currency Events</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">92</span>
            </div>
            <span>Confidence Score</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-green-500 rounded"></div>
            <span>Probability Ring (dashed border)</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span>Impact Direction</span>
          </div>
        </div>
      </div>
    </div>
  )
}