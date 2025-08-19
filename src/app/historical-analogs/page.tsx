'use client'

import { useState } from 'react'
import { Search, Filter, Calendar, TrendingUp, TrendingDown, BarChart3, Clock } from 'lucide-react'

export default function HistoricalAnalogs() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const historicalEvents = [
    {
      id: 'oil-shock-1973',
      title: '1973 Oil Crisis',
      date: 'October 1973',
      category: 'Energy Crisis',
      similarity: 87,
      description: 'OPEC oil embargo leads to 400% price increase',
      maxDrawdown: -48,
      recoveryDays: 630,
      keyMetrics: {
        vix: 45,
        creditSpread: 280,
        gdpImpact: -2.5
      },
      trajectory: [0, -5, -12, -25, -35, -48, -42, -38, -30, -20, -10, 5]
    },
    {
      id: 'dot-com-crash-2000',
      title: 'Dot-Com Bubble Burst',
      date: 'March 2000',
      category: 'Tech Bubble',
      similarity: 72,
      description: 'Technology stock bubble collapse',
      maxDrawdown: -78,
      recoveryDays: 2520,
      keyMetrics: {
        vix: 58,
        creditSpread: 180,
        gdpImpact: -1.1
      },
      trajectory: [0, -8, -18, -35, -50, -65, -78, -70, -60, -45, -30, -15]
    },
    {
      id: 'financial-crisis-2008',
      title: '2008 Financial Crisis',
      date: 'September 2008',
      category: 'Financial Crisis',
      similarity: 94,
      description: 'Subprime mortgage crisis triggers global recession',
      maxDrawdown: -57,
      recoveryDays: 1825,
      keyMetrics: {
        vix: 80,
        creditSpread: 630,
        gdpImpact: -5.1
      },
      trajectory: [0, -10, -22, -35, -45, -57, -52, -48, -40, -25, -10, 8]
    },
    {
      id: 'covid-crash-2020',
      title: 'COVID-19 Pandemic',
      date: 'March 2020',
      category: 'Health Crisis',
      similarity: 68,
      description: 'Global pandemic triggers market crash and recovery',
      maxDrawdown: -34,
      recoveryDays: 148,
      keyMetrics: {
        vix: 82,
        creditSpread: 380,
        gdpImpact: -3.4
      },
      trajectory: [0, -12, -25, -34, -28, -20, -10, 5, 15, 25, 35, 45]
    }
  ]

  const currentEvent = {
    title: 'Current Market Conditions',
    trajectory: [0, -3, -7, -12, -8, -5, -2, 1, 4, 7, 10, 13]
  }

  const filteredEvents = historicalEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || event.category.toLowerCase().includes(filterCategory.toLowerCase())
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Historical Analog Library</h1>
          <p className="text-gray-600 mt-1">Match current events to similar past crises with quantified similarity</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Analysis
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, keywords, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="energy">Energy Crisis</option>
                <option value="tech">Tech Bubble</option>
                <option value="financial">Financial Crisis</option>
                <option value="health">Health Crisis</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Event List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Historical Events</h3>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-md ${
                selectedEvent === event.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => setSelectedEvent(event.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                </div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {event.similarity}%
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-3">{event.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2 py-1 rounded font-medium ${
                  event.category === 'Energy Crisis' ? 'bg-orange-100 text-orange-700' :
                  event.category === 'Tech Bubble' ? 'bg-purple-100 text-purple-700' :
                  event.category === 'Financial Crisis' ? 'bg-red-100 text-red-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {event.category}
                </span>
                <div className="flex items-center space-x-1">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <span className="text-red-600">{event.maxDrawdown}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Comparison</h3>
          {selectedEvent ? (
            <div className="space-y-6">
              {/* Chart Area */}
              <div className="h-64 bg-gray-50 rounded-lg p-4 relative">
                <svg width="100%" height="100%" className="absolute inset-0">
                  {/* Grid lines */}
                  {[-60, -40, -20, 0, 20, 40].map((y, i) => (
                    <line
                      key={i}
                      x1="10%"
                      y1={`${50 - (y * 0.8)}%`}
                      x2="90%"
                      y2={`${50 - (y * 0.8)}%`}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Historical trajectory */}
                  <polyline
                    points={historicalEvents.find(e => e.id === selectedEvent)?.trajectory.map((val, i) => 
                      `${10 + (i * 7)}%,${50 - (val * 0.8)}%`
                    ).join(' ')}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Current trajectory */}
                  <polyline
                    points={currentEvent.trajectory.map((val, i) => 
                      `${10 + (i * 7)}%,${50 - (val * 0.8)}%`
                    ).join(' ')}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                </svg>
                
                {/* Legend */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-sm border">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-blue-600"></div>
                      <span>Current Event</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-red-500 border-dashed border-t-2"></div>
                      <span>Historical Analog</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              {selectedEvent && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(() => {
                    const event = historicalEvents.find(e => e.id === selectedEvent)!
                    return (
                      <>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingDown className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-gray-700">Max Drawdown</span>
                          </div>
                          <p className="text-2xl font-bold text-red-600">{event.maxDrawdown}%</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">Recovery Time</span>
                          </div>
                          <p className="text-2xl font-bold text-blue-600">{Math.round(event.recoveryDays / 30)}mo</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <BarChart3 className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-gray-700">VIX Peak</span>
                          </div>
                          <p className="text-2xl font-bold text-purple-600">{event.keyMetrics.vix}</p>
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-16">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Select a historical event to view comparison</p>
            </div>
          )}
        </div>
      </div>

      {/* Playbook Summary */}
      {selectedEvent && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Crisis Playbook</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Common Reactions</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Flight to quality assets (bonds, gold)</li>
                <li>• Defensive sector rotation</li>
                <li>• Credit spread widening</li>
                <li>• Currency volatility spike</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Recovery Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Central bank intervention</li>
                <li>• Fiscal stimulus measures</li>
                <li>• Gradual risk-on sentiment</li>
                <li>• Sector leadership rotation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Key Indicators</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• VIX normalization below 30</li>
                <li>• Credit spreads compression</li>
                <li>• Economic data stabilization</li>
                <li>• Policy clarity emergence</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}