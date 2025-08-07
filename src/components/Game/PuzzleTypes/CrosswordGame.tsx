import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { AudioPlayer } from '../../ui/AudioPlayer';
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
  const [userGrid, setUserGrid] = useState<(string | null)[][]>(
    puzzle.grid.map(row => row.map(cell => cell === null ? null : ''))
  );
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [selectedClue, setSelectedClue] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(puzzle.timeLimit || 0);
  const [startTime] = useState(Date.now());
  const [hints, setHints] = useState<string[]>([]);
  const [usedWords, setUsedWords] = useState<string[]>([]);

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

  const handleWordSelect = (word: string) => {
    if (usedWords.includes(word)) return;
    setSelectedWord(word);
  };

  const handleClueSelect = (clueNumber: number) => {
    setSelectedClue(clueNumber);
  };

  const handlePlaceWord = () => {
    if (!selectedWord || selectedClue === null) return;

    const clue = puzzle.clues.find(c => c.number === selectedClue);
    if (!clue || clue.answer !== selectedWord) return;

    // Place the word in the grid
    const newGrid = [...userGrid];
    const { startRow, startCol, direction, answer } = clue;

    for (let i = 0; i < answer.length; i++) {
      const row = direction === 'down' ? startRow + i : startRow;
      const col = direction === 'across' ? startCol + i : startCol;
      if (newGrid[row] && newGrid[row][col] !== null) {
        newGrid[row][col] = answer[i];
      }
    }

    setUserGrid(newGrid);
    setUsedWords(prev => [...prev, selectedWord]);
    setSelectedWord('');
    setSelectedClue(null);
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
    const isActive = puzzle.grid[row][col] !== null;
    const hasValue = userGrid[row][col] && userGrid[row][col] !== '';
    
    return `
      w-8 h-8 border border-gray-300 text-center text-sm font-bold flex items-center justify-center
      ${!isActive ? 'bg-gray-800' : 'bg-white dark:bg-gray-100'}
      ${!isActive ? 'cursor-not-allowed' : 'cursor-pointer'}
      ${hasValue ? 'text-blue-600' : 'text-gray-400'}
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
          <div className="mt-2">
            <AudioPlayer text={puzzle.question} />
          </div>
        </div>

        {/* Crossword Grid */}
        <div className="flex justify-center">
          <div className="inline-block">
            {puzzle.grid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div key={`${rowIndex}-${colIndex}`} className="relative">
                    <div className={getCellClass(rowIndex, colIndex)}>
                      {userGrid[rowIndex][colIndex] || ''}
                    </div>
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

        {/* Word Bank */}
        <div>
          <h4 className="font-semibold mb-2">Word Bank:</h4>
          <div className="flex flex-wrap gap-2">
            {puzzle.wordBank.map((word) => (
              <button
                key={word}
                onClick={() => handleWordSelect(word)}
                disabled={usedWords.includes(word)}
                className={`px-3 py-2 rounded border text-sm font-medium transition-colors ${
                  usedWords.includes(word)
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : selectedWord === word
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white border-gray-300 hover:border-blue-300'
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Clues */}
        <div>
          <h4 className="font-semibold mb-2">Clues:</h4>
          <div className="space-y-2">
            {puzzle.clues.map(clue => (
              <button
                key={clue.number}
                onClick={() => handleClueSelect(clue.number)}
                className={`w-full text-left p-3 rounded border transition-colors ${
                  selectedClue === clue.number
                    ? 'bg-blue-50 border-blue-300'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    <span className="font-medium">{clue.number}. {clue.direction}</span> - {clue.clue}
                  </span>
                  <span className="text-xs text-gray-500">({clue.answer.length} letters)</span>
                </div>
                <div className="mt-1">
                  <AudioPlayer text={clue.clue} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Place Word Button */}
        {selectedWord && selectedClue && (
          <div className="text-center">
            <Button onClick={handlePlaceWord} className="px-6">
              Place "{selectedWord}" in position {selectedClue}
            </Button>
          </div>
        )}

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
                  <div className="mt-2">
                    <AudioPlayer text={hint} />
                  </div>
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
                <div className="mt-2">
                  <AudioPlayer text={puzzle.explanation} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}