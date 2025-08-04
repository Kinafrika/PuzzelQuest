import { ExtendedPuzzle, CrosswordPuzzle, WordSearchPuzzle, RiddlePuzzle, PatternPuzzle, MemoryCardPuzzle } from './puzzleTypes';
import { ImageScramblePuzzle } from './puzzleTypes';
import { Subject } from '../types';

export const extendedPuzzleDatabase: ExtendedPuzzle[] = [
  // Crossword Puzzles
  {
    id: 'crossword-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
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
    difficulty: 1,
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
    difficulty: 2,
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
    difficulty: 1,
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
    difficulty: 1,
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
    difficulty: 2,
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
    difficulty: 2,
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
    difficulty: 1,
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
    difficulty: 2,
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
    difficulty: 1,
    title: 'Story Starter',
    description: 'Complete this creative writing prompt',
    question: 'Continue this story in exactly 50 words: "The old key turned easily in the lock, but what I found inside the chest was not what I expected..."',
    correctAnswer: 'creative-response',
    explanation: 'Creative writing helps develop imagination and language skills. There\'s no single correct answer!',
    hints: ['Use descriptive words', 'Think about what would be surprising to find'],
    timeLimit: 300,
    points: 25,
    tags: ['creative-writing', 'storytelling', 'imagination']
  },

  // Add more crossword puzzles
  {
    id: 'crossword-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'Science Terms',
    description: 'Complete this crossword about scientific concepts',
    question: 'Fill in the crossword puzzle using the science clues provided',
    grid: [
      ['', '', '', 'A', '', ''],
      ['', '', '', 'T', '', ''],
      ['E', 'L', 'E', 'C', 'T', 'R', 'O', 'N'],
      ['', '', '', 'M', '', ''],
      ['', '', '', '', '', '']
    ],
    solution: [
      ['', '', '', 'A', '', ''],
      ['', '', '', 'T', '', ''],
      ['E', 'L', 'E', 'C', 'T', 'R', 'O', 'N'],
      ['', '', '', 'M', '', ''],
      ['', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Negatively charged particle', answer: 'ELECTRON', direction: 'across', startRow: 2, startCol: 0 },
      { number: 2, clue: 'Basic unit of matter', answer: 'ATOM', direction: 'down', startRow: 0, startCol: 3 }
    ],
    explanation: 'This crossword focuses on basic chemistry and physics concepts',
    hints: ['Think about the smallest parts of matter', 'One has a negative charge'],
    timeLimit: 240,
    points: 35,
    tags: ['crossword', 'science', 'chemistry', 'physics']
  } as CrosswordPuzzle,

  // Image Scramble Puzzles
  {
    id: 'image-scramble-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Solar System Puzzle',
    description: 'Rearrange the pieces to complete the solar system image',
    question: 'Put the scrambled pieces in the correct order to reveal the solar system',
    originalImageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 2 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 0 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 2, currentPosition: 3 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 3, currentPosition: 1 }
    ],
    gridSize: { rows: 2, cols: 2 },
    explanation: 'Image puzzles help develop spatial reasoning and visual processing skills',
    hints: ['Look for edge pieces first', 'Match colors and patterns between adjacent pieces'],
    timeLimit: 180,
    points: 25,
    tags: ['image-puzzle', 'spatial-reasoning', 'visual']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Mathematical Diagram',
    description: 'Reconstruct the mathematical diagram by arranging the pieces',
    question: 'Arrange the scrambled pieces to complete the geometry diagram',
    originalImageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,133,133', correctPosition: 0, currentPosition: 5 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=133,0,133,133', correctPosition: 1, currentPosition: 2 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=266,0,133,133', correctPosition: 2, currentPosition: 4 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,133,133,133', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=133,133,133,133', correctPosition: 4, currentPosition: 0 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=266,133,133,133', correctPosition: 5, currentPosition: 3 }
    ],
    gridSize: { rows: 2, cols: 3 },
    explanation: 'Mathematical diagrams help visualize complex concepts and relationships',
    hints: ['Look for mathematical symbols and equations', 'Connect related formulas and diagrams'],
    timeLimit: 240,
    points: 30,
    tags: ['image-puzzle', 'mathematics', 'geometry']
  } as ImageScramblePuzzle,

  // Level 3 (Hard) Puzzles
  {
    id: 'crossword-003',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Advanced Mathematics',
    description: 'Complete this challenging crossword about advanced math concepts',
    question: 'Fill in the crossword puzzle using the mathematical clues provided',
    grid: [
      ['', '', '', 'C', 'A', 'L', 'C', 'U', 'L', 'U', 'S'],
      ['', '', '', 'O', '', '', '', '', '', '', ''],
      ['A', 'L', 'G', 'E', 'B', 'R', 'A', '', '', '', ''],
      ['', '', '', 'F', '', '', '', '', '', '', ''],
      ['', '', '', 'F', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', ''],
      ['', '', '', 'C', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', ''],
      ['', '', '', 'E', '', '', '', '', '', '', ''],
      ['', '', '', 'N', '', '', '', '', '', '', ''],
      ['', '', '', 'T', '', '', '', '', '', '', '']
    ],
    solution: [
      ['', '', '', 'C', 'A', 'L', 'C', 'U', 'L', 'U', 'S'],
      ['', '', '', 'O', '', '', '', '', '', '', ''],
      ['A', 'L', 'G', 'E', 'B', 'R', 'A', '', '', '', ''],
      ['', '', '', 'F', '', '', '', '', '', '', ''],
      ['', '', '', 'F', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', ''],
      ['', '', '', 'C', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', ''],
      ['', '', '', 'E', '', '', '', '', '', '', ''],
      ['', '', '', 'N', '', '', '', '', '', '', ''],
      ['', '', '', 'T', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Branch of mathematics dealing with derivatives and integrals', answer: 'CALCULUS', direction: 'across', startRow: 0, startCol: 3 },
      { number: 2, clue: 'Mathematical system using letters to represent numbers', answer: 'ALGEBRA', direction: 'across', startRow: 2, startCol: 0 },
      { number: 3, clue: 'A numerical factor in a term', answer: 'COEFFICIENT', direction: 'down', startRow: 0, startCol: 3 }
    ],
    explanation: 'This crossword focuses on advanced mathematical concepts and terminology',
    hints: ['Think about higher-level math courses', 'Consider mathematical operations and systems'],
    timeLimit: 300,
    points: 50,
    tags: ['crossword', 'mathematics', 'advanced']
  } as CrosswordPuzzle,

  {
    id: 'image-scramble-003',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Complex Circuit Diagram',
    description: 'Reconstruct the electronic circuit diagram',
    question: 'Arrange the scrambled pieces to complete the circuit diagram',
    originalImageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 8 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 3 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 6 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 7 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 2 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 4 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 5 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 0 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Complex mechanical systems require understanding of interconnected components',
    hints: ['Look for gear connections and mechanical linkages', 'Start with corner pieces and work inward'],
    timeLimit: 360,
    points: 40,
    tags: ['image-puzzle', 'engineering', 'complex']
  } as ImageScramblePuzzle,

  // Level 4 (Expert) Puzzles
  {
    id: 'crossword-004',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 4,
    title: 'Scientific Terminology',
    description: 'Master-level crossword with advanced scientific terms',
    question: 'Complete this expert-level crossword about scientific concepts',
    grid: [
      ['P', 'H', 'O', 'T', 'O', 'S', 'Y', 'N', 'T', 'H', 'E', 'S', 'I', 'S'],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    solution: [
      ['P', 'H', 'O', 'T', 'O', 'S', 'Y', 'N', 'T', 'H', 'E', 'S', 'I', 'S'],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Process by which plants convert light energy into chemical energy', answer: 'PHOTOSYNTHESIS', direction: 'across', startRow: 0, startCol: 0 }
    ],
    explanation: 'Expert-level scientific terminology requires deep understanding of complex processes',
    hints: ['Think about biological processes involving light', 'Consider how plants make their own food'],
    timeLimit: 420,
    points: 75,
    tags: ['crossword', 'science', 'expert', 'biology']
  } as CrosswordPuzzle,

  {
    id: 'image-scramble-004',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 4,
    title: 'Molecular Structure',
    description: 'Reconstruct the complex molecular diagram',
    question: 'Arrange the pieces to complete the molecular structure',
    originalImageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=0,0,80,80', correctPosition: 0, currentPosition: 15 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=80,0,80,80', correctPosition: 1, currentPosition: 8 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=160,0,80,80', correctPosition: 2, currentPosition: 11 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=240,0,80,80', correctPosition: 3, currentPosition: 4 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=0,80,80,80', correctPosition: 4, currentPosition: 12 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=80,80,80,80', correctPosition: 5, currentPosition: 7 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=160,80,80,80', correctPosition: 6, currentPosition: 2 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=240,80,80,80', correctPosition: 7, currentPosition: 14 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=0,160,80,80', correctPosition: 8, currentPosition: 9 },
      { id: '10', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=80,160,80,80', correctPosition: 9, currentPosition: 1 },
      { id: '11', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=160,160,80,80', correctPosition: 10, currentPosition: 6 },
      { id: '12', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=240,160,80,80', correctPosition: 11, currentPosition: 13 },
      { id: '13', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=0,240,80,80', correctPosition: 12, currentPosition: 3 },
      { id: '14', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=80,240,80,80', correctPosition: 13, currentPosition: 10 },
      { id: '15', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=160,240,80,80', correctPosition: 14, currentPosition: 5 },
      { id: '16', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=240,240,80,80', correctPosition: 15, currentPosition: 0 }
    ],
    gridSize: { rows: 4, cols: 4 },
    explanation: 'Molecular structures require precise understanding of atomic arrangements and chemical bonds',
    hints: ['Look for molecular bonds and atomic connections', 'Consider symmetry in molecular structures'],
    timeLimit: 480,
    points: 60,
    tags: ['image-puzzle', 'chemistry', 'expert', 'molecular']
  } as ImageScramblePuzzle
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