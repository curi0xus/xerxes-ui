'use client'

import { Zap } from 'lucide-react'

export default function PageHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Causal Chain Explorer</h1>
        <p className="text-gray-600 mt-1">Visualize how events trigger ripple effects across markets with probability analysis</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-600">Live Analysis</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Export Graph
        </button>
      </div>
    </div>
  )
}