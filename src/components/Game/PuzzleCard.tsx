import React, { useState, useEffect } from 'react';
import { Clock, Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Badge } from '../ui/Badge';
import { Puzzle } from '../../types';
import { formatTime, getDifficultyColor } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PuzzleCardProps {
  puzzle: Puzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
  className?: string;
}

export function PuzzleCard({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false,
  className 
}: PuzzleCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(puzzle.timeLimit || 0);
  const [startTime] = useState(Date.now());
  const [hints, setHints] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (!puzzle.timeLimit) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [puzzle.timeLimit]);

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const answer = puzzle.type === 'multiple-choice' ? selectedAnswer : selectedAnswer;
    onAnswer(answer, timeSpent);
    setShowExplanation(true);
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  const renderAnswerInput = () => {
    if (puzzle.type === 'multiple-choice' && puzzle.options) {
      return (
        <div className="space-y-2">
          {puzzle.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-3 text-left rounded-lg border transition-colors ${
                selectedAnswer === option
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedAnswer(option)}
              disabled={showResult}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </motion.button>
          ))}
        </div>
      );
    }

    return (
      <input
        type={puzzle.type === 'math-problem' ? 'number' : 'text'}
        value={selectedAnswer}
        onChange={(e) => setSelectedAnswer(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Enter your answer..."
        disabled={showResult}
      />
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{puzzle.title}</CardTitle>
            <Badge 
              variant="outline" 
              className={getDifficultyColor(puzzle.difficulty)}
            >
              Level {puzzle.difficulty}
            </Badge>
          </div>
          
          {puzzle.timeLimit && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span className={timeLeft <= 10 ? 'text-red-500 font-bold' : ''}>
                {formatTime(timeLeft)}
              </span>
            </div>
          )}
        </div>
        
        {puzzle.timeLimit && (
          <Progress 
            value={(timeLeft / puzzle.timeLimit) * 100} 
            className="h-2"
          />
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{puzzle.description}</p>
          <p className="text-lg font-medium">{puzzle.question}</p>
        </div>

        {renderAnswerInput()}

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleHintRequest}
            disabled={showResult}
            className="flex items-center gap-2"
          >
            <Lightbulb className="h-4 w-4" />
            Hint ({puzzle.hints.length - hints.length} left)
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer || showResult}
            className="flex items-center gap-2"
          >
            Submit Answer
          </Button>
        </div>

        <AnimatePresence>
          {hints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              <h4 className="font-medium text-sm">Hints:</h4>
              {hints.map((hint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg text-sm"
                >
                  💡 {hint}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-start gap-3 ${
                isCorrect 
                  ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800'
              }`}
            >
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="font-medium mb-2">
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                {showExplanation && (
                  <p className="text-sm text-muted-foreground">
                    {puzzle.explanation}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}