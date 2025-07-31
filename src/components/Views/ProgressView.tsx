import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, Award, Target, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

interface ProgressViewProps {
  onViewChange: (view: string) => void;
}

export function ProgressView({ onViewChange }: ProgressViewProps) {
  const { currentUser } = useGameStore();
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'year'>('week');

  if (!currentUser) return null;

  const stats = currentUser.stats;
  const skillLevels = Object.entries(stats.skillLevels);
  
  // Mock progress data for demonstration
  const progressData = {
    week: [
      { day: 'Mon', score: 85, puzzles: 5 },
      { day: 'Tue', score: 92, puzzles: 7 },
      { day: 'Wed', score: 78, puzzles: 4 },
      { day: 'Thu', score: 95, puzzles: 8 },
      { day: 'Fri', score: 88, puzzles: 6 },
      { day: 'Sat', score: 91, puzzles: 9 },
      { day: 'Sun', score: 87, puzzles: 5 }
    ],
    month: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      score: Math.floor(Math.random() * 40) + 60,
      puzzles: Math.floor(Math.random() * 10) + 1
    })),
    year: Array.from({ length: 12 }, (_, i) => ({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
      score: Math.floor(Math.random() * 30) + 70,
      puzzles: Math.floor(Math.random() * 50) + 20
    }))
  };

  const achievements = [
    { id: '1', title: 'First Steps', description: 'Complete your first puzzle', icon: '🎯', unlocked: true },
    { id: '2', title: 'Quick Thinker', description: 'Solve 5 puzzles in under 30 seconds each', icon: '⚡', unlocked: true },
    { id: '3', title: 'Math Wizard', description: 'Master 10 math puzzles', icon: '🧮', unlocked: stats.skillLevels.mathematics >= 3 },
    { id: '4', title: 'Streak Master', description: 'Maintain a 7-day streak', icon: '🔥', unlocked: stats.currentStreak >= 7 },
    { id: '5', title: 'Logic Master', description: 'Reach level 5 in logic puzzles', icon: '🧩', unlocked: stats.skillLevels.logic >= 5 },
    { id: '6', title: 'Perfectionist', description: 'Get 100% accuracy in a session', icon: '💯', unlocked: false }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your learning journey and celebrate achievements
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.totalPuzzlesSolved}</p>
                <p className="text-sm text-muted-foreground">Puzzles Solved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{Math.round(stats.averageScore)}</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.currentStreak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{Math.round(stats.totalPlayTime / 60)}</p>
                <p className="text-sm text-muted-foreground">Minutes Played</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Skill Levels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillLevels.map(([skill, level]) => (
              <div key={skill} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium capitalize">{skill}</span>
                  <Badge variant="outline">Level {level}</Badge>
                </div>
                <Progress value={(level / 10) * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {Math.round((level / 10) * 100)}% to next level
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Performance Over Time</CardTitle>
            <div className="flex gap-2">
              {(['week', 'month', 'year'] as const).map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-3 py-1 rounded text-sm ${
                    selectedTimeframe === timeframe
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-2">
            {progressData[selectedTimeframe].slice(0, 7).map((data, index) => {
              const height = (data.score / 100) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-primary rounded-t transition-all duration-300 hover:bg-primary/80"
                    style={{ height: `${height}%` }}
                    title={`Score: ${data.score}, Puzzles: ${data.puzzles}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {typeof data.day === 'string' ? data.day : data.day}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  achievement.unlocked
                    ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
                    : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${achievement.unlocked ? 'text-green-800 dark:text-green-200' : 'text-gray-600'}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    <Badge 
                      variant={achievement.unlocked ? 'default' : 'outline'}
                      className="mt-2"
                    >
                      {achievement.unlocked ? 'Unlocked' : 'Locked'}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}