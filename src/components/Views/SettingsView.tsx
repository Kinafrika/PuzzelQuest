import React, { useState } from 'react';
import { Settings, Palette, Volume2, Eye, Globe, Accessibility } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

interface SettingsViewProps {
  onViewChange: (view: string) => void;
}

export function SettingsView({ onViewChange }: SettingsViewProps) {
  const { currentUser, updateUserPreferences } = useGameStore();
  const [activeTab, setActiveTab] = useState<'appearance' | 'accessibility' | 'gameplay' | 'account'>('appearance');

  if (!currentUser) return null;

  const preferences = currentUser.preferences;

  const handlePreferenceChange = (key: string, value: any) => {
    updateUserPreferences({ [key]: value });
  };

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
    { id: 'gameplay', label: 'Gameplay', icon: Settings },
    { id: 'account', label: 'Account', icon: Globe }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['light', 'dark', 'system'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => {
                          handlePreferenceChange('theme', theme);
                          useGameStore.getState().setTheme(theme);
                        }}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          preferences.theme === theme
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-8 h-8 mx-auto mb-2 rounded-full ${
                            theme === 'light' ? 'bg-gradient-to-br from-yellow-200 to-yellow-400' :
                            theme === 'dark' ? 'bg-gradient-to-br from-gray-700 to-gray-900' :
                            'bg-gradient-to-br from-blue-200 to-purple-400'
                          }`} />
                          <span className="text-sm font-medium capitalize">{theme}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Font Size</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          handlePreferenceChange('fontSize', size);
                          // Apply font size to document
                          const root = document.documentElement;
                          root.classList.remove('text-sm', 'text-base', 'text-lg');
                          if (size === 'small') root.classList.add('text-sm');
                          else if (size === 'large') root.classList.add('text-lg');
                          else root.classList.add('text-base');
                        }}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          preferences.fontSize === size
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className={`font-medium capitalize ${
                          size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'
                        }`}>
                          {size}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => {
                      handlePreferenceChange('language', e.target.value);
                      // Apply language to document
                      document.documentElement.lang = e.target.value;
                    }}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                    <option value="pt">Português</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'accessibility' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5" />
                  Accessibility Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">High Contrast Mode</h3>
                    <p className="text-sm text-muted-foreground">
                      Increase contrast for better visibility
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('highContrast', !preferences.highContrast)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.highContrast ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Reduced Motion</h3>
                    <p className="text-sm text-muted-foreground">
                      Minimize animations and transitions
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('reducedMotion', !preferences.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.reducedMotion ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Screen Reader Support */}
                <div>
                  <h3 className="font-medium mb-2">Screen Reader Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhanced compatibility with screen readers and assistive technologies
                  </p>
                  <Badge variant="outline">Always Enabled</Badge>
                </div>

                {/* Keyboard Navigation */}
                <div>
                  <h3 className="font-medium mb-2">Keyboard Navigation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Full keyboard support for all game features
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Tab</kbd>
                      <span className="ml-2">Navigate elements</span>
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Enter</kbd>
                      <span className="ml-2">Select/Submit</span>
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Esc</kbd>
                      <span className="ml-2">Cancel/Close</span>
                    </div>
                    <div>
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Space</kbd>
                      <span className="ml-2">Activate buttons</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'gameplay' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Gameplay Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sound Effects */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Sound Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Play sounds for interactions and feedback
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('soundEnabled', !preferences.soundEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.soundEnabled ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive reminders and achievement notifications
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('notifications', !preferences.notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.notifications ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Auto-Save Progress */}
                <div>
                  <h3 className="font-medium mb-2">Auto-Save Progress</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatically save your progress across devices
                  </p>
                  <Badge variant="default">Always Enabled</Badge>
                </div>

                {/* Difficulty Adaptation */}
                <div>
                  <h3 className="font-medium mb-2">Adaptive Difficulty</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatically adjust puzzle difficulty based on performance
                  </p>
                  <Badge variant="default">Enabled</Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Information */}
                <div>
                  <h3 className="font-medium mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <input
                        type="text"
                        value={currentUser.name}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Age</label>
                      <input
                        type="number"
                        value={currentUser.age}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Age Group</label>
                      <Badge variant="outline" className="capitalize">
                        {currentUser.ageGroup}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Data Management */}
                <div>
                  <h3 className="font-medium mb-4">Data Management</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Export Progress Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Reset All Progress
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      Delete Account
                    </Button>
                  </div>
                </div>

                {/* Privacy */}
                <div>
                  <h3 className="font-medium mb-4">Privacy</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Your data is stored locally on your device. We don't collect personal information
                      or share your progress with third parties.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="link" className="p-0 h-auto">
                        Privacy Policy
                      </Button>
                      <Button variant="link" className="p-0 h-auto">
                        Terms of Service
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </motion.div>
  );
}