
import { Home, Users, AlertTriangle, Map, BarChart3, FileText, Settings,User } from 'lucide-react';

// Sidebar Component - Enhanced Design

const Sidebar = ({ activeTab, setActiveTab } : { activeTab: string; setActiveTab: (tab: string) => void }) => {
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
    <div className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col " style={{marginRight:"1rem"}}
 >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-blue-600">
          ※ logo
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-4 " >
        <ul className="space-y-1 px-3 list-none" style={{marginRight:"20px"}}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.path;
            
            return (
         
              <li key={item.path} style={{marginBottom:"20px"}}>
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

      {/* Footer - Professional Look */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                <User className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Admin User</span>
                <span className="text-xs text-gray-400">Police Officer</span>
            </div>
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">
            &copy; 2024 GuardianView. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;