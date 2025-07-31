import { ExtendedPuzzle, CrosswordPuzzle, WordSearchPuzzle, RiddlePuzzle, PatternPuzzle, MemoryCardPuzzle } from './puzzleTypes';
import { Subject } from '../types';

export const extendedPuzzleDatabase: ExtendedPuzzle[] = [
  // Crossword Puzzles
  {
    id: 'crossword-001',
    type: 'crossword',
    subject: 'language',
    difficulty: 2,
    title: 'Animal Kingdom',
    description: 'Complete this crossword about animals',
    question: 'Fill in the crossword puzzle using the clues provided',
    grid: [
      ['', '', 'C', '', ''],
      ['', '', 'A', '', ''],
      ['D', 'O', 'G', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['', '', 'C', '', ''],
      ['', '', 'A', '', ''],
      ['D', 'O', 'G', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Man\'s best friend', answer: 'DOG', direction: 'across', startRow: 2, startCol: 0 },
      { number: 2, clue: 'Feline pet', answer: 'CAT', direction: 'down', startRow: 0, startCol: 2 }
    ],
    explanation: 'This crossword focuses on common household pets',
    hints: ['Think about pets you might have at home', 'One barks, one meows'],
    timeLimit: 180,
    points: 30,
    tags: ['crossword', 'animals', 'vocabulary']
  } as CrosswordPuzzle,

  // Word Search Puzzles
  {
    id: 'wordsearch-001',
    type: 'word-search',
    subject: 'science',
    difficulty: 2,
    title: 'Solar System',
    description: 'Find all the planets in our solar system',
    question: 'Locate all 8 planets hidden in the grid',
    grid: [
      ['M', 'E', 'R', 'C', 'U', 'R', 'Y', 'X'],
      ['A', 'V', 'E', 'N', 'U', 'S', 'Z', 'Q'],
      ['R', 'T', 'H', 'G', 'F', 'D', 'S', 'A'],
      ['S', 'A', 'T', 'U', 'R', 'N', 'M', 'W'],
      ['E', 'A', 'R', 'T', 'H', 'J', 'K', 'L'],
      ['J', 'U', 'P', 'I', 'T', 'E', 'R', 'P'],
      ['N', 'E', 'P', 'T', 'U', 'N', 'E', 'O'],
      ['U', 'R', 'A', 'N', 'U', 'S', 'I', 'M']
    ],
    words: ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'],
    foundWords: [],
    explanation: 'Our solar system has 8 planets, each with unique characteristics',
    hints: ['Look horizontally, vertically, and diagonally', 'Start with the shortest planet names'],
    timeLimit: 300,
    points: 25,
    tags: ['word-search', 'planets', 'astronomy']
  } as WordSearchPuzzle,

  // Riddle Puzzles
  {
    id: 'riddle-001',
    type: 'riddle',
    subject: 'logic',
    difficulty: 3,
    title: 'Classic Riddle',
    description: 'Solve this brain teaser',
    question: 'I have keys but no locks. I have space but no room. You can enter, but you can\'t go outside. What am I?',
    riddle: 'I have keys but no locks. I have space but no room. You can enter, but you can\'t go outside. What am I?',
    correctAnswer: 'keyboard',
    acceptableAnswers: ['keyboard', 'computer keyboard', 'a keyboard'],
    explanation: 'A keyboard has keys (letter/number keys), space (spacebar), and you can enter (enter key), but you can\'t physically go outside of it.',
    hints: ['Think about something you use with a computer', 'It has many keys but they don\'t open doors'],
    timeLimit: 120,
    points: 20,
    tags: ['riddle', 'wordplay', 'logic']
  } as RiddlePuzzle,

  // Pattern Recognition
  {
    id: 'pattern-001',
    type: 'pattern-sequence',
    subject: 'logic',
    difficulty: 2,
    title: 'Shape Sequence',
    description: 'Complete the pattern',
    question: 'What comes next in this sequence?',
    sequence: ['🔴', '🔵', '🟡', '🔴', '🔵', '?'],
    missingIndex: 5,
    options: ['🟡', '🔴', '🔵', '🟢'],
    explanation: 'The pattern repeats every 3 shapes: red circle, blue circle, yellow circle',
    hints: ['Look for a repeating pattern', 'Count how many shapes before it repeats'],
    timeLimit: 60,
    points: 15,
    tags: ['pattern', 'sequence', 'shapes']
  } as PatternPuzzle,

  // Memory Card Game
  {
    id: 'memory-001',
    type: 'memory-cards',
    subject: 'memory',
    difficulty: 2,
    title: 'Animal Pairs',
    description: 'Match the animal pairs',
    question: 'Find all matching pairs of animals',
    cards: [
      { id: '1', content: '🐶', matched: false },
      { id: '2', content: '🐱', matched: false },
      { id: '3', content: '🐶', matched: false },
      { id: '4', content: '🐱', matched: false },
      { id: '5', content: '🐰', matched: false },
      { id: '6', content: '🐰', matched: false },
      { id: '7', content: '🐸', matched: false },
      { id: '8', content: '🐸', matched: false }
    ],
    maxFlipped: 2,
    explanation: 'Memory games help improve concentration and recall abilities',
    hints: ['Try to remember where you saw each animal', 'Start with corners and edges'],
    timeLimit: 180,
    points: 20,
    tags: ['memory', 'matching', 'animals']
  } as MemoryCardPuzzle,

  // Math Word Problems
  {
    id: 'math-word-001',
    type: 'math-problem',
    subject: 'mathematics',
    difficulty: 3,
    title: 'Shopping Math',
    description: 'Solve this real-world math problem',
    question: 'Sarah bought 3 apples for $0.75 each and 2 oranges for $0.50 each. How much did she spend in total?',
    correctAnswer: 3.25,
    explanation: '3 apples × $0.75 = $2.25, 2 oranges × $0.50 = $1.00, Total = $2.25 + $1.00 = $3.25',
    hints: ['Calculate the cost of apples first', 'Then calculate the cost of oranges', 'Add both amounts together'],
    timeLimit: 90,
    points: 25,
    tags: ['math', 'word-problem', 'money']
  },

  // Science Experiments
  {
    id: 'science-exp-001',
    type: 'science-experiment',
    subject: 'science',
    difficulty: 3,
    title: 'Density Experiment',
    description: 'Predict the outcome of this density experiment',
    question: 'If you put oil, water, and honey in a glass, what order will they settle in from bottom to top?',
    materials: ['Honey', 'Water', 'Vegetable Oil', 'Clear Glass'],
    steps: [
      'Pour honey into the glass first',
      'Slowly pour water over a spoon into the glass',
      'Slowly pour oil over a spoon into the glass',
      'Observe the layers'
    ],
    expectedOutcome: 'Honey (bottom), Water (middle), Oil (top)',
    options: [
      'Honey, Water, Oil',
      'Oil, Water, Honey', 
      'Water, Honey, Oil',
      'Oil, Honey, Water'
    ],
    correctAnswer: 'Honey, Water, Oil',
    explanation: 'Liquids separate by density. Honey is densest (bottom), water is medium density (middle), oil is least dense (top).',
    hints: ['Think about which liquid is thickest', 'Denser liquids sink below less dense ones'],
    timeLimit: 120,
    points: 30,
    tags: ['science', 'density', 'experiment']
  },

  // Geography Puzzles
  {
    id: 'geo-001',
    type: 'geography',
    subject: 'geography',
    difficulty: 2,
    title: 'World Capitals',
    description: 'Match countries with their capitals',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
    explanation: 'Paris has been the capital of France since 987 AD and is known for landmarks like the Eiffel Tower.',
    hints: ['Think of the city of love', 'Home to the Eiffel Tower'],
    timeLimit: 45,
    points: 15,
    tags: ['geography', 'capitals', 'countries']
  },

  // History Puzzles
  {
    id: 'history-001',
    type: 'multiple-choice',
    subject: 'history',
    difficulty: 3,
    title: 'Ancient Civilizations',
    description: 'Test your knowledge of ancient history',
    question: 'Which ancient wonder of the world was located in Alexandria, Egypt?',
    options: [
      'The Hanging Gardens',
      'The Lighthouse of Alexandria', 
      'The Colossus of Rhodes',
      'The Temple of Artemis'
    ],
    correctAnswer: 'The Lighthouse of Alexandria',
    explanation: 'The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World, built around 280 BC.',
    hints: ['It helped ships navigate safely to shore', 'It was built to guide sailors'],
    timeLimit: 60,
    points: 20,
    tags: ['history', 'ancient-world', 'wonders']
  },

  // Creative Writing Prompts
  {
    id: 'creative-001',
    type: 'word-puzzle',
    subject: 'creativity',
    difficulty: 2,
    title: 'Story Starter',
    description: 'Complete this creative writing prompt',
    question: 'Continue this story in exactly 50 words: "The old key turned easily in the lock, but what I found inside the chest was not what I expected..."',
    correctAnswer: 'creative-response',
    explanation: 'Creative writing helps develop imagination and language skills. There\'s no single correct answer!',
    hints: ['Use descriptive words', 'Think about what would be surprising to find'],
    timeLimit: 300,
    points: 25,
    tags: ['creative-writing', 'storytelling', 'imagination']
  }
];

export function getExtendedPuzzlesByType(type: string, count: number = 5): ExtendedPuzzle[] {
  return extendedPuzzleDatabase.filter(p => p.type === type).slice(0, count);
}

export function getExtendedPuzzlesBySubject(subject: Subject, count: number = 5): ExtendedPuzzle[] {
  return extendedPuzzleDatabase.filter(p => p.subject === subject).slice(0, count);
}

export function getExtendedPuzzlesByDifficulty(difficulty: number, count: number = 5): ExtendedPuzzle[] {
  return extendedPuzzleDatabase.filter(p => p.difficulty === difficulty).slice(0, count);
}

export function getAllExtendedPuzzles(): ExtendedPuzzle[] {
  return extendedPuzzleDatabase;
}