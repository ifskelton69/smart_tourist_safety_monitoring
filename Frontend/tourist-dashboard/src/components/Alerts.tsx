

import { Eye,MapPin } from 'lucide-react';

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

export default Alerts;
