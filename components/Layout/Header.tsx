import React from 'react';
import { Bell, Search, User, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 lg:space-x-4 ml-12 lg:ml-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live Market Data</span>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Last Updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, assets, alerts..."
              className="bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-40 sm:w-60 lg:w-80"
            />
          </div>

          <div className="flex items-center space-x-1 lg:space-x-3">
            <button className="relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </button>
            
            <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 hidden sm:block">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex items-center space-x-2 lg:space-x-3 pl-2 lg:pl-3 border-l border-gray-300">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm hidden md:block">
                <p className="text-gray-900 font-medium">John Morgan</p>
                <p className="text-gray-500">Senior Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};