'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, TrendingUp, AlertTriangle, Database, Search, Activity, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Overview', icon: BarChart3 },
  { path: '/causal-chain', label: 'Causal Chain', icon: TrendingUp },
  { path: '/timeline', label: 'Timeline', icon: Activity },
  { path: '/risk-dashboard', label: 'Risk Dashboard', icon: AlertTriangle },
  { path: '/asset-monitor', label: 'Asset Monitor', icon: Database },
  { path: '/historical', label: 'Historical Library', icon: Search }
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5 text-gray-600" />
        ) : (
          <Menu className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation sidebar */}
      <nav className={`
        bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-sm
        fixed lg:static inset-y-0 left-0 z-40 w-64
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">QuanFusion</h1>
            <p className="text-xs text-gray-500">Institutional Intelligence</p>
          </div>
        </div>
      </div>

      <div className="flex-1 py-6">
        <div className="px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">SYSTEM STATUS</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-700">All systems operational</p>
          <p className="text-xs text-gray-500 mt-1">Last sync: 2 min ago</p>
        </div>
      </div>
    </nav>
    </>
  );
};