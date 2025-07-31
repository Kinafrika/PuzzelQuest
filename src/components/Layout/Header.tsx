import React from 'react';
import { Brain, Settings, User, Trophy, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useGameStore } from '../../store/gameStore';
import { cn } from '../../lib/utils';

interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

export function Header({ onMenuClick, className }: HeaderProps) {
  const { 
    currentUser, 
    setShowSettings, 
    setShowProfile, 
    setShowLeaderboard 
  } = useGameStore();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Adaptive Puzzle Academy</h1>
              <p className="text-xs text-muted-foreground">Learn • Play • Grow</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {currentUser && (
            <>
              <div className="hidden sm:flex items-center gap-3 mr-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {currentUser.ageGroup} • Level {Math.floor(currentUser.stats.averageScore / 100) + 1}
                  </p>
                </div>
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-8 w-8 rounded-full"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowLeaderboard(true)}
                aria-label="View leaderboard"
              >
                <Trophy className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowProfile(true)}
                aria-label="View profile"
              >
                <User className="h-5 w-5" />
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSettings(true)}
            aria-label="Open settings"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}