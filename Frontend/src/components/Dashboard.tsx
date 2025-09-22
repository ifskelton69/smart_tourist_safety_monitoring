

import {  Users, AlertTriangle, Map,MapPin,Activity, BarChart3,  Settings } from 'lucide-react';


const Dashboard = ({ setActiveTab  } :{ setActiveTab: (tab: string) => void }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tourist Heatmap</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Active Tourists</div>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">1,234</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Alerts Today</div>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">High-Risk Areas</div>
            <MapPin className="h-4 w-4 text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">3</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Pending Incidents</div>
            <Activity className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-gray-900">5</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="h-96 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {/* Simulate tourist icons */}
              {[...Array(15)].map((_, i) => (
                <Users 
                  key={i}
                  className="absolute h-4 w-4 text-gray-800"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`
                  }}
                />
              ))}
            </div>
            <div className="text-center z-10">
              <Map className="h-16 w-16 text-white mx-auto mb-4" />
              <p className="text-white text-lg font-semibold">Interactive Tourist Heatmap</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveTab('alerts')}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <AlertTriangle className="h-6 w-6 text-red-500 mb-2" />
              <span className="text-sm font-medium">Alerts</span>
            </button>
            
            <button
              onClick={() => setActiveTab('tourists')}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Users className="h-6 w-6 text-blue-500 mb-2" />
              <span className="text-sm font-medium">Tourists</span>
            </button>
            
            <button
              onClick={() => setActiveTab('analytics')}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BarChart3 className="h-6 w-6 text-green-500 mb-2" />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-6 w-6 text-gray-500 mb-2" />
              <span className="text-sm font-medium">Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
