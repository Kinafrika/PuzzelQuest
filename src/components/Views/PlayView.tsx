import React, { useState } from 'react';
import { Play, Settings, Brain, Clock, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GameSession } from '../Game/GameSession';
import { useGameStore } from '../../store/gameStore';
import { getAdaptivePuzzles } from '../../data/puzzles';
import { Subject } from '../../types';
import { motion } from 'framer-motion';

interface PlayViewProps {
  onViewChange: (view: string) => void;
}

export function PlayView({ onViewChange }: PlayViewProps) {
  const { currentUser, startSession, isPlaying } = useGameStore();
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(['mathematics', 'logic']);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(1);
  const [puzzleCount, setPuzzleCount] = useState<number>(3);

  const subjects: { id: Subject; label: string; icon: string }[] = [
    { id: 'mathematics', label: 'Mathematics', icon: '🔢' },
    { id: 'science', label: 'Science', icon: '🔬' },
    { id: 'logic', label: 'Logic', icon: '🧩' },
    { id: 'creativity', label: 'Creativity', icon: '🎨' },
    { id: 'crossword', label: 'Crossword Puzzles', icon: '📝' },
    { id: 'image-puzzle', label: 'Image Scramble', icon: '🖼️' },
  ];

  const difficultyLevels = [
    { level: 1, label: 'Easy', puzzleCounts: [3, 5, 7] },
    { level: 2, label: 'Medium', puzzleCounts: [4, 6, 8] },
    { level: 3, label: 'Hard', puzzleCounts: [5, 7] },
    { level: 4, label: 'Expert', puzzleCounts: [2, 5, 10] },
  ];

  const currentDifficultyData = difficultyLevels.find(d => d.level === selectedDifficulty);

  const handleSubjectToggle = (subject: Subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const handleDifficultyChange = (level: number) => {
    setSelectedDifficulty(level);
    const diffData = difficultyLevels.find(d => d.level === level);
    if (diffData) {
      setPuzzleCount(diffData.puzzleCounts[0]); // Set to first available count
    }
  };
  const handleStartGame = () => {
    if (selectedSubjects.length === 0) return;
    
    const puzzles = getAdaptivePuzzles(
      selectedDifficulty,
      selectedSubjects,
      puzzleCount
    );
    
    startSession(puzzles);
  };

  if (isPlaying) {
    return <GameSession onExit={() => onViewChange('home')} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Solo Play</h1>
        <p className="text-muted-foreground">
          Customize your learning experience with adaptive puzzles
        </p>
      </div>

      {/* Game Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Selection */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Choose Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {subjects.map((subject) => (
                <motion.button
                  key={subject.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSubjectToggle(subject.id)}
                  className={`p-4 rounded-lg border-2 transition-colors text-center ${
                    selectedSubjects.includes(subject.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{subject.icon}</div>
                  <div className="text-sm font-medium">{subject.label}</div>
                </motion.button>
              ))}
            </div>
            {selectedSubjects.length === 0 && (
              <p className="text-sm text-red-500 mt-2">
                Please select at least one subject
              </p>
            )}
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Difficulty */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Difficulty Level
              </label>
              <div className="space-y-2">
                {difficultyLevels.map((diffData) => (
                  <button
                    key={diffData.level}
                    onClick={() => handleDifficultyChange(diffData.level)}
                    className={`w-full p-2 text-left rounded border ${
                      selectedDifficulty === diffData.level
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Level {diffData.level}</span>
                      <Badge 
                        variant={selectedDifficulty === diffData.level ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {diffData.label}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Puzzle Count */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Number of Puzzles
              </label>
              <div className="grid grid-cols-3 gap-2">
                {currentDifficultyData?.puzzleCounts.map((count) => (
                  <button
                    key={count}
                    onClick={() => setPuzzleCount(count)}
                    className={`p-2 text-center rounded border ${
                      puzzleCount === count
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Settings */}
      {currentUser && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Recommended for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Optimal Difficulty</p>
                  <p className="text-xs text-muted-foreground">
                    Level {currentUser.stats.difficultyPreference}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Session Length</p>
                  <p className="text-xs text-muted-foreground">
                    {puzzleCount} puzzles (~{puzzleCount * 2} min)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded">
                  <Brain className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Focus Areas</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedSubjects.length} subjects selected
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Start Button */}
      <div className="text-center">
        <Button
          size="lg"
          onClick={handleStartGame}
          disabled={selectedSubjects.length === 0}
          className="px-8"
        >
          <Play className="h-5 w-5 mr-2" />
          Start Playing
        </Button>
      </div>
    </motion.div>
  );
}