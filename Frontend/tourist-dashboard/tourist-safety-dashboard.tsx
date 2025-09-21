// Settings Page
const SettingsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings & Administration</h1>
        <p className="text-gray-600">Manage system users, define geo-fencing zones, configure language preferences, and set up notifications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Management */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">User ID</label>
              <input
                type="text"
                placeholder="Enter user ID"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Role</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Police Officer</option>
                <option>Administrator</option>
                <option>Supervisor</option>
                <option>Tourist Guide</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Add User
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                View All Users
              </button>
            </div>
          </div>
        </div>

        {/* Geo-fencing & Risk Zones */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-red-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Geo-fencing & Risk Zones</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Zone Name</label>
              <input
                type="text"
                placeholder="Enter zone name (e.g., Beach Area 1)"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Coordinates</label>
              <input
                type="text"
                placeholder="Lat: 28.7041, Lon: 77.1025"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Risk Level</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Medium</option>
                <option>Low</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Zone
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                View Zones on Map
              </button>
            </div>
          </div>
        </div>

        {/* System Language */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Settings className="h-5 w-5 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">System Language</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Display Language</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Enable Multi-language Content</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Update Language
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Email Alerts</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">SMS Alerts</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Push Notifications</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Recipient Email</label>
              <input
                type="email"
                placeholder="admin@guardianview.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
              import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  AlertTriangle, 
  Map, 
  BarChart3, 
  FileText, 
  Settings,
  Search,
  Bell,
  User,
  Filter,
  Eye,
  MapPin,
  Activity
} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: 'dashboard' },
    { icon: Users, label: 'Tourists', path: 'tourists' },
    { icon: AlertTriangle, label: 'Alerts', path: 'alerts' },
    { icon: Map, label: 'Map Analysis', path: 'map-analysis' },
    { icon: BarChart3, label: 'Analytics', path: 'analytics' },
    { icon: FileText, label: 'E-FIR', path: 'e-fir' },
    { icon: Settings, label: 'Settings', path: 'settings' },
  ];

  return (
    <div className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-blue-600">
          ※ logo
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.path;
            
            return (
              <li key={item.path}>
                <button
                  onClick={() => setActiveTab(item.path)}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center text-xs text-gray-500">
          <span>Made with</span>
          <div className="ml-2 w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xs">
            V
          </div>
          <span className="ml-1">Visily</span>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1" />
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-5 w-5" />
          </button>
          
          {/* Profile */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

// Dashboard Page
const Dashboard = ({ setActiveTab }) => {
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

// Tourists Page
const Tourists = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tourist Management</h1>
        <p className="text-gray-600">Monitor and manage tourist activities and locations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Tourists</div>
          <div className="text-2xl font-bold text-gray-900">1,234</div>
          <div className="text-sm text-green-600 mt-2">+12% from yesterday</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Active Now</div>
          <div className="text-2xl font-bold text-gray-900">856</div>
          <div className="text-sm text-blue-600 mt-2">Real-time count</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">In Safe Zones</div>
          <div className="text-2xl font-bold text-green-600">798</div>
          <div className="text-sm text-green-600 mt-2">93.2% of active</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Need Attention</div>
          <div className="text-2xl font-bold text-red-600">58</div>
          <div className="text-sm text-red-600 mt-2">6.8% of active</div>
        </div>
      </div>

      {/* Tourist List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Tourist List</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tourists..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tourist
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Update
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 'T001', name: 'Alice Smith', status: 'Safe', location: 'Central Market', time: '2 min ago', statusColor: 'green' },
                { id: 'T002', name: 'Bob Johnson', status: 'Alert', location: 'Restricted Zone Alpha', time: '5 min ago', statusColor: 'red' },
                { id: 'T003', name: 'Charlie Brown', status: 'Safe', location: 'Hotel Grand', time: '10 min ago', statusColor: 'green' },
                { id: 'T004', name: 'Diana Prince', status: 'Warning', location: 'National Park', time: '15 min ago', statusColor: 'yellow' },
                { id: 'T005', name: 'Eve Adams', status: 'Safe', location: 'Museum District', time: '20 min ago', statusColor: 'green' },
              ].map((tourist) => (
                <tr key={tourist.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tourist.name}</div>
                        <div className="text-sm text-gray-500">{tourist.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      tourist.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                      tourist.statusColor === 'red' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tourist.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tourist.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tourist.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Alerts Page
const Alerts = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Active Alerts</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Eye className="h-4 w-4 mr-2" />
              View All on Map
            </button>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600">Alert Locations</div>
              <div className="mt-8 w-24 h-24 bg-gradient-to-br from-red-100 to-red-300 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Risk Level</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Alert Type</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Panic Button</option>
              <option>Geo-fence Breach</option>
              <option>Inactivity</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Region</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Central Market</option>
              <option>Hotel District</option>
              <option>National Park</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Critical Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Pending Incidents</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search alerts by tourist name or location..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Alert Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tourist Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alert Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  time: '2024-07-26 10:30 AM',
                  name: 'Alice Smith',
                  type: 'Panic Button',
                  location: 'Central Market, Sector 17',
                  status: 'critical',
                  statusText: 'Critical'
                },
                {
                  time: '2024-07-26 10:25 AM',
                  name: 'Bob Johnson',
                  type: 'Geo-fence Breach',
                  location: 'Restricted Zone Alpha',
                  status: 'pending',
                  statusText: 'Pending'
                },
                {
                  time: '2024-07-26 10:15 AM',
                  name: 'Charlie Brown',
                  type: 'Inactivity Alert',
                  location: 'Hotel Grand, Room 402',
                  status: 'pending',
                  statusText: 'Pending'
                },
                {
                  time: '2024-07-26 09:50 AM',
                  name: 'Diana Prince',
                  type: 'Panic Button',
                  location: 'National Park Entrance',
                  status: 'resolved',
                  statusText: 'Resolved'
                },
                {
                  time: '2024-07-26 09:30 AM',
                  name: 'Eve Adams',
                  type: 'Geo-fence Breach',
                  location: 'Museum District Boundary',
                  status: 'pending',
                  statusText: 'Pending'
                }
              ].map((alert, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {alert.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {alert.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {alert.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {alert.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      alert.status === 'critical' ? 'bg-red-100 text-red-800' :
                      alert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {alert.statusText}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
              Previous
            </button>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">2</button>
            </div>
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Map Analysis Page
const MapAnalysis = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Map Analysis</h1>
        <p className="text-gray-600">Analyze tourist movement patterns and zone analytics</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Map Analysis Dashboard</h3>
          <p className="text-gray-600">Advanced mapping tools and analytics coming soon</p>
        </div>
      </div>
    </div>
  );
};

// Analytics Page
const Analytics = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">View detailed analytics and reports on tourist safety metrics</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">Comprehensive analytics and reporting tools</p>
        </div>
      </div>
    </div>
  );
};

// E-FIR Page
const EFir = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">E-FIR</h1>
        <p className="text-gray-600">Electronic First Information Report management system</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">E-FIR System</h3>
          <p className="text-gray-600">Digital incident reporting and case management</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'tourists':
        return <Tourists />;
      case 'alerts':
        return <Alerts />;
      case 'map-analysis':
        return <MapAnalysis />;
      case 'analytics':
        return <Analytics />;
      case 'e-fir':
        return <EFir />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;