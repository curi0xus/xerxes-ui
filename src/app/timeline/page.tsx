'use client'

import { Clock, TrendingUp, AlertTriangle, BarChart3, Globe, Calendar } from 'lucide-react'

export default function Timeline() {
  const events = [
    {
      id: 1,
      time: '10:30 AM',
      date: 'Today',
      type: 'market',
      title: 'Fed Signals Rate Hike Acceleration',
      description: 'Federal Reserve officials hint at faster pace of interest rate increases amid persistent inflation concerns.',
      impact: 92,
      sentiment: 'negative',
      source: 'Reuters',
      category: 'Monetary Policy'
    },
    {
      id: 2,
      time: '9:15 AM',
      date: 'Today',
      type: 'earnings',
      title: 'Apple Reports Q4 Earnings Beat',
      description: 'Apple Inc. reports quarterly earnings of $1.64 per share, beating analyst estimates of $1.60.',
      impact: 78,
      sentiment: 'positive',
      source: 'Bloomberg',
      category: 'Earnings'
    },
    {
      id: 3,
      time: '8:45 AM',
      date: 'Today',
      type: 'geopolitical',
      title: 'China Infrastructure Stimulus Package',
      description: '$500B infrastructure program targeting renewable energy and transportation networks announced.',
      impact: 88,
      sentiment: 'positive',
      source: 'Financial Times',
      category: 'Fiscal Policy'
    },
    {
      id: 4,
      time: '4:20 PM',
      date: 'Yesterday',
      type: 'market',
      title: 'Oil Prices Surge on Supply Concerns',
      description: 'Crude oil futures jump 4.2% following reports of production cuts from major oil producers.',
      impact: 71,
      sentiment: 'neutral',
      source: 'WSJ',
      category: 'Commodities'
    },
    {
      id: 5,
      time: '2:15 PM',
      date: 'Yesterday',
      type: 'regulatory',
      title: 'SEC Proposes New Crypto Regulations',
      description: 'Securities and Exchange Commission unveils comprehensive framework for cryptocurrency oversight.',
      impact: 65,
      sentiment: 'negative',
      source: 'CNBC',
      category: 'Regulation'
    }
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'market': return <TrendingUp className="w-5 h-5" />
      case 'earnings': return <BarChart3 className="w-5 h-5" />
      case 'geopolitical': return <Globe className="w-5 h-5" />
      case 'regulatory': return <AlertTriangle className="w-5 h-5" />
      default: return <Clock className="w-5 h-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case 'market': return 'bg-blue-100 text-blue-600 border-blue-200'
      case 'earnings': return 'bg-green-100 text-green-600 border-green-200'
      case 'geopolitical': return 'bg-purple-100 text-purple-600 border-purple-200'
      case 'regulatory': return 'bg-orange-100 text-orange-600 border-orange-200'
      default: return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Event Timeline</h1>
          <p className="text-gray-600 mt-1">Chronological view of market-moving events and their impact</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Timeline
          </button>
        </div>
      </div>

      {/* Timeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Total Events</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">47</p>
              <span className="text-xs text-gray-500">last 24 hours</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-blue-600">
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">High Impact</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">8</p>
              <span className="text-xs text-gray-500">score &gt; 80</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-red-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Positive Events</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">23</p>
              <span className="text-xs text-gray-500">bullish sentiment</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-green-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-medium mb-1">Avg Impact</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">67</p>
              <span className="text-xs text-gray-500">impact score</span>
            </div>
            <div className="p-2 rounded-lg bg-white/70 text-purple-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Event Timeline</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${getEventColor(event.type)}`}>
                  {getEventIcon(event.type)}
                </div>
                
                {/* Event content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-500">{event.time}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{event.date}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.type === 'market' ? 'bg-blue-100 text-blue-700' :
                          event.type === 'earnings' ? 'bg-green-100 text-green-700' :
                          event.type === 'geopolitical' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                          {event.impact}
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                          event.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {event.sentiment}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Source: {event.source}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          Load More Events
        </button>
      </div>
    </div>
  )
}