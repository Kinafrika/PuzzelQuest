import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { CrosswordPuzzle } from '../../../data/puzzleTypes';
import { Clock, Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import { formatTime, getDifficultyColor } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface CrosswordGameProps {
  puzzle: CrosswordPuzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function CrosswordGame({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: CrosswordGameProps) {
  const [userGrid, setUserGrid] = useState<string[][]>(
    puzzle.grid.map(row => row.map(cell => cell === '' ? '' : cell))
  );
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
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

  const handleCellChange = (row: number, col: number, value: string) => {
    if (value.length > 1) return;
    
    const newGrid = [...userGrid];
    newGrid[row][col] = value.toUpperCase();
    setUserGrid(newGrid);
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isComplete = checkCompletion();
    onAnswer(isComplete ? 'complete' : 'incomplete', timeSpent);
  };

  const checkCompletion = () => {
    return puzzle.clues.every(clue => {
      const { startRow, startCol, direction, answer } = clue;
      for (let i = 0; i < answer.length; i++) {
        const row = direction === 'down' ? startRow + i : startRow;
        const col = direction === 'across' ? startCol + i : startCol;
        if (userGrid[row]?.[col] !== answer[i]) {
          return false;
        }
      }
      return true;
    });
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  const getCellClass = (row: number, col: number) => {
    const isSelected = selectedCell?.row === row && selectedCell?.col === col;
    const isEmpty = puzzle.grid[row][col] === '';
    
    return `
      w-8 h-8 border border-gray-300 text-center text-sm font-bold
      ${isEmpty ? 'bg-gray-800' : 'bg-white'}
      ${isSelected ? 'ring-2 ring-blue-500' : ''}
      ${isEmpty ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-blue-50'}
    `;
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

        {/* Crossword Grid */}
        <div className="flex justify-center">
          <div className="inline-block">
            {puzzle.grid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div key={`${rowIndex}-${colIndex}`} className="relative">
                    <input
                      type="text"
                      value={userGrid[rowIndex][colIndex]}
                      onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                      onClick={() => setSelectedCell({row: rowIndex, col: colIndex})}
                      className={getCellClass(rowIndex, colIndex)}
                      disabled={puzzle.grid[rowIndex][colIndex] === '' || showResult}
                      maxLength={1}
                    />
                    {/* Number labels for clue starts */}
                    {puzzle.clues.some(clue => 
                      clue.startRow === rowIndex && clue.startCol === colIndex
                    ) && (
                      <span className="absolute top-0 left-0 text-xs font-bold text-blue-600 leading-none">
                        {puzzle.clues.find(clue => 
                          clue.startRow === rowIndex && clue.startCol === colIndex
                        )?.number}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Clues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Across</h4>
            {puzzle.clues.filter(clue => clue.direction === 'across').map(clue => (
              <div key={clue.number} className="text-sm mb-1">
                <span className="font-medium">{clue.number}.</span> {clue.clue}
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-semibold mb-2">Down</h4>
            {puzzle.clues.filter(clue => clue.direction === 'down').map(clue => (
              <div key={clue.number} className="text-sm mb-1">
                <span className="font-medium">{clue.number}.</span> {clue.clue}
              </div>
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
            disabled={showResult}
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
                  {isCorrect ? 'Excellent work!' : 'Keep trying!'}
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