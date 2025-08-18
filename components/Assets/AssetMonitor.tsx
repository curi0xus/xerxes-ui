import React from 'react';
import { mockAssets } from '../../data/mockData';
import { TrendingUp, TrendingDown, AlertTriangle, Eye } from 'lucide-react';

export const AssetMonitor: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Asset Monitor</h2>
            <p className="text-gray-600 text-sm">Portfolio-aware risk tracking and alerts</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Add Asset
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Asset</th>
                <th className="text-right py-3 px-4 text-gray-600 font-medium text-sm">Price</th>
                <th className="text-right py-3 px-4 text-gray-600 font-medium text-sm">Change</th>
                <th className="text-center py-3 px-4 text-gray-600 font-medium text-sm">Risk Level</th>
                <th className="text-center py-3 px-4 text-gray-600 font-medium text-sm">Alerts</th>
                <th className="text-center py-3 px-4 text-gray-600 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockAssets.map((asset) => (
                <tr key={asset.symbol} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-gray-900 font-semibold">{asset.symbol}</p>
                      <p className="text-gray-600 text-sm">{asset.name}</p>
                    </div>
                  </td>
                  <td className="text-right py-4 px-4">
                    <p className="text-gray-900 font-medium">${asset.price.toFixed(2)}</p>
                  </td>
                  <td className="text-right py-4 px-4">
                    <div className="flex items-center justify-end space-x-1">
                      {asset.change >= 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`font-medium ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}
                      </span>
                      <span className={`text-sm ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ({asset.changePercent >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${asset.riskLevel === 'low' ? 'bg-green-100 text-green-700' : ''}
                      ${asset.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${asset.riskLevel === 'high' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {asset.riskLevel.toUpperCase()}
                    </span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center space-x-1">
                      {asset.alerts.length > 0 ? (
                        <>
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                          <span className="text-yellow-600 text-sm font-medium">{asset.alerts.length}</span>
                        </>
                      ) : (
                        <span className="text-gray-500 text-sm">None</span>
                      )}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alert Details */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Active Alerts</h3>
        <div className="space-y-3">
          {mockAssets
            .filter(asset => asset.alerts.length > 0)
            .map(asset => 
              asset.alerts.map(alert => (
                <div key={alert.id} className={`
                  p-4 rounded-lg border-l-4 bg-gray-50
                  ${alert.type === 'risk' ? 'border-red-500' : ''}
                  ${alert.type === 'opportunity' ? 'border-green-500' : ''}
                  ${alert.type === 'info' ? 'border-blue-500' : ''}
                `}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-gray-900 font-medium">{asset.symbol}</span>
                        <span className={`
                          px-2 py-0.5 rounded text-xs font-medium
                          ${alert.type === 'risk' ? 'bg-red-100 text-red-700' : ''}
                          ${alert.type === 'opportunity' ? 'bg-green-100 text-green-700' : ''}
                          ${alert.type === 'info' ? 'bg-blue-100 text-blue-700' : ''}
                        `}>
                          {alert.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{alert.message}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {alert.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};