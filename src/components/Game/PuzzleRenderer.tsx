import React from 'react';
import { ExtendedPuzzle, CrosswordPuzzle, WordSearchPuzzle, RiddlePuzzle, PatternPuzzle, MemoryCardPuzzle } from '../../data/puzzleTypes';
import { ImageScramblePuzzle } from '../../data/puzzleTypes';
import { Puzzle } from '../../types';
import { CrosswordGame } from './PuzzleTypes/CrosswordGame';
import { WordSearchGame } from './PuzzleTypes/WordSearchGame';
import { RiddleGame } from './PuzzleTypes/RiddleGame';
import { PatternGame } from './PuzzleTypes/PatternGame';
import { MemoryCardGame } from './PuzzleTypes/MemoryCardGame';
import { ImageScrambleGame } from './PuzzleTypes/ImageScrambleGame';
import { PuzzleCard } from './PuzzleCard';

interface PuzzleRendererProps {
  puzzle: ExtendedPuzzle | Puzzle;
  onAnswer: (answer: string | number, timeSpent: number) => void;
  onHint: () => string | null;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function PuzzleRenderer({ 
  puzzle, 
  onAnswer, 
  onHint, 
  showResult = false, 
  isCorrect = false 
}: PuzzleRendererProps) {
  
  // Safety check for undefined puzzle
  if (!puzzle || !puzzle.type) {
    console.error('PuzzleRenderer: Invalid puzzle data received', puzzle);
    return (
      <div className="p-8 text-center">
        <h3 className="text-lg font-semibold text-red-600 mb-2">Puzzle Loading Error</h3>
        <p className="text-muted-foreground">Unable to load puzzle. Please try again.</p>
      </div>
    );
  }
  
  const renderSpecializedPuzzle = () => {
    switch (puzzle.type) {
      case 'crossword':
        return (
          <CrosswordGame
            puzzle={puzzle as CrosswordPuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      case 'word-search':
        return (
          <WordSearchGame
            puzzle={puzzle as WordSearchPuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      case 'riddle':
        return (
          <RiddleGame
            puzzle={puzzle as RiddlePuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      case 'pattern-sequence':
        return (
          <PatternGame
            puzzle={puzzle as PatternPuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      case 'memory-cards':
        return (
          <MemoryCardGame
            puzzle={puzzle as MemoryCardPuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      case 'image-scramble':
        return (
          <ImageScrambleGame
            puzzle={puzzle as ImageScramblePuzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
      
      default:
        // Fall back to the standard puzzle card for basic puzzle types
        return (
          <PuzzleCard
            puzzle={puzzle}
            onAnswer={onAnswer}
            onHint={onHint}
            showResult={showResult}
            isCorrect={isCorrect}
          />
        );
    }
  };

  return renderSpecializedPuzzle();
}