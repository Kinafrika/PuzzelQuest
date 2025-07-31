import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { PatternPuzzle } from '../../../data/puzzleTypes';
import { Clock, Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import { formatTime, getDifficultyColor } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PatternGameProps {
  puzzle: PatternPuzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function PatternGame({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: PatternGameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(puzzle.timeLimit || 0);
  const [startTime] = useState(Date.now());
  const [hints, setHints] = useState<string[]>([]);

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
    onAnswer(selectedAnswer, timeSpent);
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{puzzle.title}</CardTitle>
            <Badge variant="outline" className={getDifficultyColor(puzzle.difficulty)}>
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
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{puzzle.description}</p>
          <p className="text-lg font-medium">{puzzle.question}</p>
        </div>

        {/* Pattern Display */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {puzzle.sequence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  w-16 h-16 flex items-center justify-center text-3xl rounded-lg border-2
                  ${index === puzzle.missingIndex 
                    ? 'border-dashed border-gray-400 bg-gray-100 dark:bg-gray-800' 
                    : 'border-solid border-gray-300 bg-white dark:bg-gray-700'
                  }
                `}
              >
                {index === puzzle.missingIndex ? '?' : item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Answer Options */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Choose the missing element:</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {puzzle.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-4 rounded-lg border-2 transition-colors text-center text-2xl
                  ${selectedAnswer === option
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                  }
                `}
                onClick={() => setSelectedAnswer(option)}
                disabled={showResult}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>

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
                  {isCorrect ? 'Perfect pattern recognition!' : 'Pattern not quite right'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {puzzle.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}