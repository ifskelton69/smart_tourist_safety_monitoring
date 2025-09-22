
import React, { useState } from 'react';
import { Users, MapPin, Settings, Bell, Plus, Trash2, Edit3 } from 'lucide-react';

// Types
interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

interface Zone {
  id: string;
  name: string;
  coordinates: string;
  riskLevel: string;
}

// Custom Components
const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input 
      type="checkbox" 
      className="sr-only peer" 
      checked={checked} 
      onChange={onChange} 
    />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
  </label>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
    {children}
  </div>
);

const SettingsPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [newUser, setNewUser] = useState({ id: '', role: 'Police Officer' });
  const [newZone, setNewZone] = useState({ name: '', coordinates: '', riskLevel: 'Medium' });
  const [language, setLanguage] = useState('English');
  const [multiLanguage, setMultiLanguage] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    recipientEmail: 'admin@guardianview.com'
  });

  const handleAddUser = () => {
    if (!newUser.id) {
      alert('Please enter a user ID');
      return;
    }
    
    setUsers([...users, {
      id: newUser.id,
      name: `User ${users.length + 1}`,
      role: newUser.role,
      email: `${newUser.id.toLowerCase()}@guardianview.com`
    }]);
    
    setNewUser({ id: '', role: 'Police Officer' });
  };

  const handleSaveZone = () => {
    if (!newZone.name || !newZone.coordinates) {
      alert('Please fill all zone details');
      return;
    }
    
    setZones([...zones, {
      id: `zone-${zones.length + 1}`,
      ...newZone
    }]);
    
    setNewZone({ name: '', coordinates: '', riskLevel: 'Medium' });
  };

  const handleNotificationChange = (key: string, value: any) => {
    setNotifications({
      ...notifications,
      [key]: value
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings & Administration</h1>
        <p className="text-gray-600">Manage system users, define geo-fencing zones, configure language preferences, and set up notifications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Management */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
            </div>
            <span className="text-sm text-gray-500">{users.length} users</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">User ID</label>
              <input
                type="text"
                placeholder="Enter user ID"
                value={newUser.id}
                onChange={(e) => setNewUser({...newUser, id: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Role</label>
              <select 
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Police Officer</option>
                <option>Administrator</option>
                <option>Supervisor</option>
                <option>Tourist Guide</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleAddUser}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add User
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                View All Users
              </button>
            </div>

            {users.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Users</h3>
                <div className="space-y-2">
                  {users.slice(-3).map(user => (
                    <div key={user.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">{user.id}</span>
                        <span className="text-gray-500 ml-2">({user.role})</span>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Geo-fencing & Risk Zones */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Geo-fencing & Risk Zones</h2>
            </div>
            <span className="text-sm text-gray-500">{zones.length} zones</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Zone Name</label>
              <input
                type="text"
                placeholder="Enter zone name (e.g., Beach Area 1)"
                value={newZone.name}
                onChange={(e) => setNewZone({...newZone, name: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Coordinates</label>
              <input
                type="text"
                placeholder="Lat: 28.7041, Lon: 77.1025"
                value={newZone.coordinates}
                onChange={(e) => setNewZone({...newZone, coordinates: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Risk Level</label>
              <select 
                value={newZone.riskLevel}
                onChange={(e) => setNewZone({...newZone, riskLevel: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleSaveZone}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Save Zone
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                View Zones on Map
              </button>
            </div>

            {zones.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Zones</h3>
                <div className="space-y-2">
                  {zones.slice(-3).map(zone => (
                    <div key={zone.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">{zone.name}</span>
                        <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
                          zone.riskLevel === 'Critical' ? 'bg-red-100 text-red-800' :
                          zone.riskLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                          zone.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {zone.riskLevel}
                        </span>
                      </div>
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit3 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* System Language */}
        <Card>
          <div className="flex items-center mb-4">
            <Settings className="h-5 w-5 text-green-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">System Language</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Display Language</label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Enable Multi-language Content</label>
              <ToggleSwitch 
                checked={multiLanguage} 
                onChange={() => setMultiLanguage(!multiLanguage)} 
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Update Language
            </button>
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Email Alerts</label>
              <ToggleSwitch 
                checked={notifications.email} 
                onChange={() => handleNotificationChange('email', !notifications.email)} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">SMS Alerts</label>
              <ToggleSwitch 
                checked={notifications.sms} 
                onChange={() => handleNotificationChange('sms', !notifications.sms)} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-700">Push Notifications</label>
              <ToggleSwitch 
                checked={notifications.push} 
                onChange={() => handleNotificationChange('push', !notifications.push)} 
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Recipient Email</label>
              <input
                type="email"
                placeholder="admin@guardianview.com"
                value={notifications.recipientEmail}
                onChange={(e) => handleNotificationChange('recipientEmail', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Preferences
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
