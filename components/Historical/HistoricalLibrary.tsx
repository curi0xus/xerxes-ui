import React, { useState } from 'react';
import { Search, Filter, Calendar, TrendingUp } from 'lucide-react';
import { mockHistoricalAnalogies } from '../../data/mockData';

export const HistoricalLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Historical Analog Library</h2>
            <p className="text-gray-600 text-sm">Search and analyze similar market events</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, crises, policy changes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="monetary">Monetary Policy</option>
              <option value="geopolitical">Geopolitical</option>
              <option value="trade">Trade Wars</option>
              <option value="energy">Energy Crises</option>
            </select>
            
            <button className="flex items-center space-x-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-900 hover:bg-gray-100 transition-colors">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {mockHistoricalAnalogies.map((analogy) => (
            <div key={analogy.id} className="bg-gray-50 rounded-lg border border-gray-200 p-4 lg:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {analogy.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="h-3 w-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{analogy.date}</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {analogy.similarity}%
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{analogy.description}</p>
              
              <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                <div className="text-center">
                  <p className="text-gray-500">Duration</p>
                  <p className="text-gray-900 font-semibold">{analogy.duration}d</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Max DD</p>
                  <p className="text-red-600 font-semibold">{analogy.maxDrawdown}%</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Recovery</p>
                  <p className="text-green-600 font-semibold">{analogy.recovery}d</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Market Outcome</span>
                  <TrendingUp className="h-3 w-3 text-green-600" />
                </div>
                <p className="text-xs text-gray-700 mt-1">{analogy.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Tool */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-professional">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Event Comparison Tool</h3>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm text-center py-8">
            Select multiple events to compare their market impact trajectories and outcomes.
            <br />
            <span className="text-blue-600">Drag and drop events here to begin comparison</span>
          </p>
        </div>
      </div>
    </div>
  );
};