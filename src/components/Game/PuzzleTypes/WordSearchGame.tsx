import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { WordSearchPuzzle } from '../../../data/puzzleTypes';
import { Clock, Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import { formatTime, getDifficultyColor } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface WordSearchGameProps {
  puzzle: WordSearchPuzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function WordSearchGame({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: WordSearchGameProps) {
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<{row: number, col: number}[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
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

  const handleMouseDown = (row: number, col: number) => {
    setIsSelecting(true);
    setSelectedCells([{row, col}]);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!isSelecting) return;
    
    const start = selectedCells[0];
    if (!start) return;

    // Check if it's a valid line (horizontal, vertical, or diagonal)
    const rowDiff = row - start.row;
    const colDiff = col - start.col;
    
    if (rowDiff === 0 || colDiff === 0 || Math.abs(rowDiff) === Math.abs(colDiff)) {
      const cells = getLineCells(start, {row, col});
      setSelectedCells(cells);
    }
  };

  const handleMouseUp = () => {
    if (selectedCells.length > 1) {
      checkForWord();
    }
    setIsSelecting(false);
    setSelectedCells([]);
  };

  const getLineCells = (start: {row: number, col: number}, end: {row: number, col: number}) => {
    const cells = [];
    const rowStep = end.row === start.row ? 0 : (end.row > start.row ? 1 : -1);
    const colStep = end.col === start.col ? 0 : (end.col > start.col ? 1 : -1);
    
    let currentRow = start.row;
    let currentCol = start.col;
    
    while (true) {
      cells.push({row: currentRow, col: currentCol});
      
      if (currentRow === end.row && currentCol === end.col) break;
      
      currentRow += rowStep;
      currentCol += colStep;
    }
    
    return cells;
  };

  const checkForWord = () => {
    const word = selectedCells.map(cell => puzzle.grid[cell.row][cell.col]).join('');
    const reverseWord = word.split('').reverse().join('');
    
    const foundWord = puzzle.words.find(w => 
      w === word || w === reverseWord
    );
    
    if (foundWord && !foundWords.includes(foundWord)) {
      setFoundWords(prev => [...prev, foundWord]);
    }
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isComplete = foundWords.length === puzzle.words.length;
    onAnswer(isComplete ? 'complete' : 'incomplete', timeSpent);
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  const isCellSelected = (row: number, col: number) => {
    return selectedCells.some(cell => cell.row === row && cell.col === col);
  };

  const isCellInFoundWord = (row: number, col: number) => {
    // This would require storing the positions of found words
    // For simplicity, we'll just highlight selected cells
    return false;
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

        {/* Word Search Grid */}
        <div className="flex justify-center">
          <div 
            className="inline-block select-none"
            onMouseLeave={() => setIsSelecting(false)}
          >
            {puzzle.grid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`
                      w-8 h-8 border border-gray-300 flex items-center justify-center
                      text-sm font-bold cursor-pointer hover:bg-blue-100
                      ${isCellSelected(rowIndex, colIndex) ? 'bg-blue-200' : 'bg-white'}
                      ${isCellInFoundWord(rowIndex, colIndex) ? 'bg-green-200' : ''}
                    `}
                    onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                    onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                    onMouseUp={handleMouseUp}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Words to Find */}
        <div>
          <h4 className="font-semibold mb-2">Words to Find ({foundWords.length}/{puzzle.words.length})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {puzzle.words.map(word => (
              <div
                key={word}
                className={`p-2 rounded text-sm text-center ${
                  foundWords.includes(word)
                    ? 'bg-green-100 text-green-800 line-through'
                    : 'bg-gray-100'
                }`}
              >
                {word}
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
                  {isCorrect ? 'All words found!' : `Found ${foundWords.length}/${puzzle.words.length} words`}
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