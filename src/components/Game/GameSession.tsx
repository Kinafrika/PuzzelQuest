import React, { useState, useEffect } from 'react';
import { ArrowRight, Home, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { PuzzleCard } from './PuzzleCard';
import { PuzzleRenderer } from './PuzzleRenderer';
import { useGameStore } from '../../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';

interface GameSessionProps {
  onExit: () => void;
}

export function GameSession({ onExit }: GameSessionProps) {
  const { 
    currentSession, 
    submitAnswer, 
    useHint, 
    nextPuzzle, 
    endSession 
  } = useGameStore();

  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  if (!currentSession) {
    return null;
  }

  const currentPuzzle = currentSession.puzzles[currentSession.currentPuzzleIndex];
  const progress = ((currentSession.currentPuzzleIndex + 1) / currentSession.puzzles.length) * 100;
  const isLastPuzzle = currentSession.currentPuzzleIndex === currentSession.puzzles.length - 1;

  const handleAnswer = (answer: string | number, timeSpent: number) => {
    const correct = submitAnswer(answer, timeSpent);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastPuzzle) {
      setShowSummary(true);
      endSession();
    } else {
      setShowResult(false);
      nextPuzzle();
    }
  };

  const handleRestart = () => {
    // This would restart the session with the same puzzles
    onExit();
  };

  if (showSummary) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Session Complete! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">{currentSession.score}</p>
                <p className="text-sm text-muted-foreground">Total Score</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <p className="text-2xl font-bold text-green-600">
                  {currentSession.correctAnswers}/{currentSession.puzzles.length}
                </p>
                <p className="text-sm text-muted-foreground">Correct Answers</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span>{Math.round((currentSession.correctAnswers / currentSession.puzzles.length) * 100)}%</span>
              </div>
              <Progress value={(currentSession.correctAnswers / currentSession.puzzles.length) * 100} />
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={handleRestart} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Play Again
              </Button>
              <Button onClick={onExit}>
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Question {currentSession.currentPuzzleIndex + 1} of {currentSession.puzzles.length}
            </span>
            <span className="text-sm text-muted-foreground">
              Score: {currentSession.score}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Current Puzzle */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSession.currentPuzzleIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PuzzleRenderer
            puzzle={currentPuzzle}
            onAnswer={handleAnswer}
            onHint={useHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <Button onClick={handleNext} size="lg">
              {isLastPuzzle ? 'Finish Session' : 'Next Question'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}