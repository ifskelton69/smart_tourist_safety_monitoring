import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Tourists from './components/Tourists';
import Alerts from './components/Alerts';
import MapAnalysis from './components/MapAnalysis';
import Analytics from './components/Analytics';
import EFir from './components/EFir';
import SettingsPage from './components/SettingsPage';

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