import { Puzzle, Subject, PuzzleType } from '../types';

// Crossword puzzle data structure
export interface CrosswordClue {
  number: number;
  clue: string;
  answer: string;
  direction: 'across' | 'down';
  startRow: number;
  startCol: number;
}

export interface CrosswordPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'crossword';
  grid: string[][];
  clues: CrosswordClue[];
  solution: string[][];
}

// Word search puzzle
export interface WordSearchPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'word-search';
  grid: string[][];
  words: string[];
  foundWords: string[];
}

// Sudoku puzzle
export interface SudokuPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'sudoku';
  initialGrid: number[][];
  solution: number[][];
  difficulty: 'easy' | 'medium' | 'hard';
}

// Memory card game
export interface MemoryCardPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'memory-cards';
  cards: { id: string; content: string; matched: boolean }[];
  maxFlipped: number;
}

// Pattern sequence puzzle
export interface PatternPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'pattern-sequence';
  sequence: string[];
  missingIndex: number;
  options: string[];
}

// Riddle puzzle
export interface RiddlePuzzle extends Omit<Puzzle, 'type' | 'options'> {
  type: 'riddle';
  riddle: string;
  correctAnswer: string;
  acceptableAnswers: string[];
}

// Geography puzzle
export interface GeographyPuzzle extends Omit<Puzzle, 'type'> {
  type: 'geography';
  mapData?: any;
  coordinates?: { lat: number; lng: number };
}

// Science experiment puzzle
export interface SciencePuzzle extends Omit<Puzzle, 'type'> {
  type: 'science-experiment';
  materials: string[];
  steps: string[];
  expectedOutcome: string;
}

// Code puzzle for logic/programming
export interface CodePuzzle extends Omit<Puzzle, 'type'> {
  type: 'code-puzzle';
  language: 'javascript' | 'python' | 'scratch';
  startingCode: string;
  expectedOutput: string;
  testCases: { input: any; output: any }[];
}

// Jigsaw puzzle
export interface JigsawPuzzle extends Omit<Puzzle, 'type' | 'options' | 'correctAnswer'> {
  type: 'jigsaw';
  imageUrl: string;
  pieces: { id: string; x: number; y: number; correctX: number; correctY: number }[];
  gridSize: { rows: number; cols: number };
}

export type ExtendedPuzzle = 
  | Puzzle 
  | CrosswordPuzzle 
  | WordSearchPuzzle 
  | SudokuPuzzle 
  | MemoryCardPuzzle 
  | PatternPuzzle 
  | RiddlePuzzle 
  | GeographyPuzzle 
  | SciencePuzzle 
  | CodePuzzle 
  | JigsawPuzzle;