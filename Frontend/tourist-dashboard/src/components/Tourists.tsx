

import { Filter,User,Eye } from 'lucide-react';

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

export default Tourists;
