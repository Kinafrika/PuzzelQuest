import React from 'react';
import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { HomeView } from './components/Views/HomeView';
import { PlayView } from './components/Views/PlayView';
import { MultiplayerView } from './components/Views/MultiplayerView';
import { ProgressView } from './components/Views/ProgressView';
import { SettingsView } from './components/Views/SettingsView';
import { UserSetup } from './components/Views/UserSetup';
import { useGameStore } from './store/gameStore';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser } = useGameStore();

  // Show user setup if no current user
  if (!currentUser) {
    return <UserSetup />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onViewChange={setCurrentView} />;
      case 'play':
        return <PlayView onViewChange={setCurrentView} />;
      case 'multiplayer':
        return <MultiplayerView onViewChange={setCurrentView} />;
      case 'progress':
        return <ProgressView onViewChange={setCurrentView} />;
      case 'subjects':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Subject Explorer</h2>
            <p className="text-muted-foreground">
              Deep dive into specific subjects and curriculum alignment.
            </p>
          </div>
        );
      case 'games':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Game Types</h2>
            <p className="text-muted-foreground">
              Explore different puzzle types and game mechanics.
            </p>
          </div>
        );
      case 'achievements':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground">
              Your accomplishments and badges will be displayed here.
            </p>
          </div>
        );
      case 'settings':
        return <SettingsView onViewChange={setCurrentView} />;
      default:
        return <HomeView onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentView={currentView}
          onViewChange={setCurrentView}
        />
        
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
