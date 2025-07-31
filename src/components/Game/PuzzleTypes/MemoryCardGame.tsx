import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { MemoryCardPuzzle } from '../../../data/puzzleTypes';
import { Clock, Lightbulb, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { formatTime, getDifficultyColor } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MemoryCardGameProps {
  puzzle: MemoryCardPuzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function MemoryCardGame({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: MemoryCardGameProps) {
  const [cards, setCards] = useState(puzzle.cards.map(card => ({ ...card, flipped: false })));
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
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

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      if (firstCard && secondCard && firstCard.content === secondCard.content) {
        // Match found
        setMatchedPairs(prev => [...prev, firstCard.content]);
        setCards(prev => prev.map(card => 
          card.id === first || card.id === second 
            ? { ...card, matched: true, flipped: true }
            : card
        ));
        setFlippedCards([]);
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, flipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    // Check if game is complete
    if (matchedPairs.length === puzzle.cards.length / 2 && matchedPairs.length > 0) {
      setTimeout(() => handleSubmit(), 500);
    }
  }, [matchedPairs]);

  const handleCardClick = (cardId: string) => {
    if (showResult || flippedCards.length >= 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.flipped || card.matched) return;

    setCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, flipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isComplete = matchedPairs.length === puzzle.cards.length / 2;
    onAnswer(isComplete ? 'complete' : 'incomplete', timeSpent);
  };

  const handleHintRequest = () => {
    const hint = onHint();
    if (hint) {
      setHints(prev => [...prev, hint]);
    }
  };

  const resetGame = () => {
    setCards(puzzle.cards.map(card => ({ ...card, flipped: false, matched: false })));
    setFlippedCards([]);
    setMatchedPairs([]);
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

        {/* Game Stats */}
        <div className="flex items-center justify-between text-sm">
          <span>Moves: {moves}</span>
          <span>Pairs Found: {matchedPairs.length}/{puzzle.cards.length / 2}</span>
        </div>

        {/* Memory Card Grid */}
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square"
            >
              <div
                className={`
                  w-full h-full rounded-lg border-2 cursor-pointer transition-all duration-300
                  flex items-center justify-center text-2xl font-bold
                  ${card.flipped || card.matched
                    ? 'bg-white border-blue-300 shadow-md'
                    : 'bg-blue-500 border-blue-600 hover:bg-blue-400'
                  }
                  ${card.matched ? 'bg-green-100 border-green-300' : ''}
                `}
                onClick={() => handleCardClick(card.id)}
              >
                {card.flipped || card.matched ? card.content : '?'}
              </div>
            </motion.div>
          ))}
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
              onClick={resetGame}
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
                  {isCorrect ? 'Excellent memory!' : `Good effort! Found ${matchedPairs.length}/${puzzle.cards.length / 2} pairs`}
                </p>
                <p className="text-sm text-muted-foreground">
                  Completed in {moves} moves. {puzzle.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}