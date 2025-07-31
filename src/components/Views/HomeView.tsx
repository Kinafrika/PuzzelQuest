import React from 'react';
import { Play, Users, BarChart3, Trophy, Brain, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

interface HomeViewProps {
  onViewChange: (view: string) => void;
}

export function HomeView({ onViewChange }: HomeViewProps) {
  const { currentUser } = useGameStore();

  const quickActions = [
    {
      id: 'play',
      title: 'Start Playing',
      description: 'Begin your adaptive learning journey',
      icon: Play,
      color: 'bg-blue-500',
      action: () => onViewChange('play'),
    },
    {
      id: 'multiplayer',
      title: 'Play with Friends',
      description: 'Collaborative puzzle solving',
      icon: Users,
      color: 'bg-green-500',
      action: () => onViewChange('multiplayer'),
    },
    {
      id: 'progress',
      title: 'View Progress',
      description: 'Track your learning journey',
      icon: BarChart3,
      color: 'bg-purple-500',
      action: () => onViewChange('progress'),
    },
    {
      id: 'achievements',
      title: 'Achievements',
      description: 'See what you\'ve accomplished',
      icon: Trophy,
      color: 'bg-yellow-500',
      action: () => onViewChange('achievements'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome back, {currentUser?.name || 'Learner'}! 
                </h1>
                <p className="text-muted-foreground">
                  Ready to challenge your mind with adaptive puzzles?
                </p>
              </div>
            </div>
            
            {currentUser && (
              <div className="flex items-center gap-4 mt-6">
                <Badge variant="secondary" className="text-sm">
                  Level {Math.floor(currentUser.stats.averageScore / 100) + 1}
                </Badge>
                <Badge variant="outline" className="text-sm capitalize">
                  {currentUser.ageGroup} Mode
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  {currentUser.stats.totalPuzzlesSolved} puzzles solved
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={action.action}
                >
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
      {currentUser && currentUser.stats.totalPuzzlesSolved > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">Your Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600">
                  {currentUser.stats.currentStreak}
                </p>
                <p className="text-sm text-muted-foreground">days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">
                  {Math.round(currentUser.stats.averageScore)}
                </p>
                <p className="text-sm text-muted-foreground">points</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">
                  {Math.round(currentUser.stats.totalPlayTime / 60)}
                </p>
                <p className="text-sm text-muted-foreground">minutes</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Ready for a Challenge?</h3>
            <p className="text-muted-foreground mb-6">
              Our AI adapts to your skill level, ensuring you're always learning at the perfect pace.
            </p>
            <Button size="lg" onClick={() => onViewChange('play')}>
              <Play className="h-5 w-5 mr-2" />
              Start Your First Puzzle
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}