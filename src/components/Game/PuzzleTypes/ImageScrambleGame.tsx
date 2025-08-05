import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { AudioPlayer } from '../../ui/AudioPlayer';
import { ImageScramblePuzzle } from '../../../data/puzzleTypes';
import { Clock, Lightbulb, CheckCircle, XCircle, RotateCcw, Shuffle } from 'lucide-react';
import { formatTime, getDifficultyColor } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageScrambleGameProps {
  puzzle: ImageScramblePuzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function ImageScrambleGame({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: ImageScrambleGameProps) {
  const [pieces, setPieces] = useState(puzzle.scrambledPieces);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(puzzle.timeLimit || 0);
  const [startTime] = useState(Date.now());
  const [hints, setHints] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

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

  const handlePieceClick = (pieceId: string) => {
    if (showResult) return;

    if (!selectedPiece) {
      setSelectedPiece(pieceId);
    } else if (selectedPiece === pieceId) {
      setSelectedPiece(null);
    } else {
      // Swap pieces
      const piece1Index = pieces.findIndex(p => p.id === selectedPiece);
      const piece2Index = pieces.findIndex(p => p.id === pieceId);
      
      const newPieces = [...pieces];
      const temp = newPieces[piece1Index].currentPosition;
      newPieces[piece1Index].currentPosition = newPieces[piece2Index].currentPosition;
      newPieces[piece2Index].currentPosition = temp;
      
      setPieces(newPieces);
      setSelectedPiece(null);
      setMoves(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isComplete = checkCompletion();
    onAnswer(isComplete ? 'complete' : 'incomplete', timeSpent);
  };

  const checkCompletion = () => {
    return pieces.every(piece => piece.currentPosition === piece.correctPosition);
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  const shufflePieces = () => {
    const shuffled = [...pieces];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i].currentPosition;
      shuffled[i].currentPosition = shuffled[j].currentPosition;
      shuffled[j].currentPosition = temp;
    }
    setPieces(shuffled);
    setMoves(prev => prev + 1);
  };

  const resetPuzzle = () => {
    setPieces(puzzle.scrambledPieces);
    setSelectedPiece(null);
    setMoves(0);
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

        {/* Original Image Preview */}
        <div className="text-center">
          <h4 className="font-medium mb-2">Target Image:</h4>
          <img
            src={puzzle.originalImageUrl}
            alt="Target"
            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300 mx-auto"
          />
        </div>

        {/* Game Stats */}
        <div className="flex items-center justify-between text-sm">
          <span>Moves: {moves}</span>
          <span>Progress: {pieces.filter(p => p.currentPosition === p.correctPosition).length}/{pieces.length} pieces</span>
        </div>

        {/* Puzzle Grid */}
        <div className="max-w-md mx-auto">
          <div 
            className="grid gap-2"
            style={{ 
              gridTemplateColumns: `repeat(${puzzle.gridSize.cols}, 1fr)`,
              gridTemplateRows: `repeat(${puzzle.gridSize.rows}, 1fr)`
            }}
          >
            {Array.from({ length: puzzle.gridSize.rows * puzzle.gridSize.cols }).map((_, index) => {
              const piece = pieces.find(p => p.currentPosition === index);
              const isSelected = selectedPiece === piece?.id;
              const isCorrect = piece?.correctPosition === piece?.currentPosition;
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    aspect-square border-2 rounded-lg cursor-pointer transition-all
                    ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}
                    ${isCorrect ? 'border-green-500' : ''}
                    ${!piece ? 'bg-gray-100' : ''}
                  `}
                  onClick={() => piece && handlePieceClick(piece.id)}
                >
                  {piece && (
                    <img
                      src={piece.imageUrl}
                      alt={`Piece ${piece.id}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
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
              variant="outline"
              onClick={shufflePieces}
              disabled={showResult}
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Shuffle
            </Button>

            <Button
              variant="outline"
              onClick={resetPuzzle}
              disabled={showResult}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={showResult}
            className="flex items-center gap-2"
          >
            Submit
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
                  {isCorrect ? 'Perfect! Image completed!' : `Good effort! ${pieces.filter(p => p.currentPosition === p.correctPosition).length}/${pieces.length} pieces correct`}
                </p>
                <p className="text-sm text-muted-foreground">
                  Completed in {moves} moves. {puzzle.explanation}
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