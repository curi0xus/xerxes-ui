'use client'

import { TrendingUp, TrendingDown, DollarSign, BarChart3, Eye, Star } from 'lucide-react'

export default function AssetMonitor() {
  const assets = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.42, change: 2.34, changePercent: 1.28, volume: '52.3M', status: 'bullish' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.91, change: -4.12, changePercent: -1.07, volume: '28.7M', status: 'bearish' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 1.89, changePercent: 1.34, volume: '31.2M', status: 'bullish' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.73, change: -8.45, changePercent: -3.28, volume: '89.4M', status: 'bearish' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 456.78, change: 12.34, changePercent: 2.78, volume: '45.6M', status: 'bullish' },
    { symbol: 'META', name: 'Meta Platforms', price: 334.21, change: -2.67, changePercent: -0.79, volume: '22.1M', status: 'neutral' }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Asset Monitor</h1>
          <p className="text-gray-600 mt-1">Real-time asset tracking and performance analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live Data</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Add Watchlist
          </button>
        </div>
      </div>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Market Cap</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">$2.4T</p>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">+2.1%</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-green-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Volume</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">847M</p>
              <span className="text-xs text-gray-500">shares traded</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-blue-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Volatility</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">18.4%</p>
              <span className="text-xs text-gray-500">30-day average</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-purple-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Watchlist</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">24</p>
              <span className="text-xs text-gray-500">assets tracked</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-orange-600">
              <Eye className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Asset Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Top Assets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map((asset) => (
                <tr key={asset.symbol} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{asset.symbol}</div>
                      <div className="text-sm text-gray-500">{asset.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${asset.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center space-x-1 ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {asset.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">{asset.change >= 0 ? '+' : ''}{asset.change}</span>
                      <span className="text-sm">({asset.changePercent >= 0 ? '+' : ''}{asset.changePercent}%)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{asset.volume}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      asset.status === 'bullish' ? 'bg-green-100 text-green-800' :
                      asset.status === 'bearish' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Star className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sector Performance</h3>
          <div className="space-y-3">
            {[
              { sector: 'Technology', performance: 12.4, color: 'bg-green-500' },
              { sector: 'Healthcare', performance: 8.7, color: 'bg-green-400' },
              { sector: 'Finance', performance: -2.1, color: 'bg-red-400' },
              { sector: 'Energy', performance: -5.8, color: 'bg-red-500' },
              { sector: 'Consumer', performance: 3.2, color: 'bg-green-300' }
            ].map((item) => (
              <div key={item.sector} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.sector}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${Math.abs(item.performance) * 5}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${item.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.performance >= 0 ? '+' : ''}{item.performance}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Top Movers</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-green-600 mb-2">Gainers</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">NVDA</span>
                  <span className="text-sm font-medium text-green-600">+2.78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">GOOGL</span>
                  <span className="text-sm font-medium text-green-600">+1.34%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-red-600 mb-2">Losers</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">TSLA</span>
                  <span className="text-sm font-medium text-red-600">-3.28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">MSFT</span>
                  <span className="text-sm font-medium text-red-600">-1.07%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}