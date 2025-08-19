'use client'

import { BarChart3, AlertTriangle, TrendingUp, Activity, GitBranch, Clock, Gauge, Eye } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Overview', icon: BarChart3 },
    { href: '/risk-dashboard', label: 'Risk Dashboard', icon: AlertTriangle },
    { href: '/asset-monitor', label: 'Asset Monitor', icon: TrendingUp },
    { href: '/timeline', label: 'Timeline', icon: Activity },
    { href: '/causal-explorer', label: 'Causal Explorer', icon: GitBranch },
    { href: '/historical-analogs', label: 'Historical Analogs', icon: Clock },
    { href: '/sentiment-dashboard', label: 'Sentiment Dashboard', icon: Gauge }
  ]

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen shadow-sm">
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">SYSTEM STATUS</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-700">All systems operational</p>
          <p className="text-xs text-gray-500 mt-1">Last sync: 2 min ago</p>
        </div>

        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}