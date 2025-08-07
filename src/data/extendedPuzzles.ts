import { CrosswordPuzzle, ImageScramblePuzzle, RiddlePuzzle, PatternPuzzle, MemoryCardPuzzle } from './puzzleTypes';

// Image Scramble Puzzles based on uploaded images
export const imageScramblePuzzles: ImageScramblePuzzle[] = [
  // Level 1 - Easy (3x3 grids)
  {
    id: 'img-scramble-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Cat Face Puzzle',
    description: 'Rearrange the pieces to complete the cat image',
    question: 'Can you put the cat picture back together?',
    explanation: 'Great job! You successfully assembled the cute cat face.',
    hints: ['Look for the cat\'s eyes to help orient the pieces', 'The nose is usually in the center', 'Match the fur patterns between adjacent pieces'],
    timeLimit: 120,
    points: 15,
    tags: ['animals', 'cats', 'visual'],
    originalImageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    pieces: [
      { id: '0', correctPosition: 0, currentPosition: 2 },
      { id: '1', correctPosition: 1, currentPosition: 7 },
      { id: '2', correctPosition: 2, currentPosition: 4 },
      { id: '3', correctPosition: 3, currentPosition: 1 },
      { id: '4', correctPosition: 4, currentPosition: 8 },
      { id: '5', correctPosition: 5, currentPosition: 0 },
      { id: '6', correctPosition: 6, currentPosition: 3 },
      { id: '7', correctPosition: 7, currentPosition: 6 },
      { id: '8', correctPosition: 8, currentPosition: 5 }
    ],
    gridSize: { rows: 3, cols: 3 },
    theme: 'animals'
  },
  {
    id: 'img-scramble-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Flower Garden',
    description: 'Arrange the flower pieces correctly',
    question: 'Can you complete this beautiful flower?',
    explanation: 'Wonderful! You created a beautiful flower arrangement.',
    hints: ['Find the flower center first', 'Petals usually radiate outward', 'Look for color continuity'],
    timeLimit: 120,
    points: 15,
    tags: ['nature', 'flowers', 'visual'],
    originalImageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    pieces: [
      { id: '0', correctPosition: 0, currentPosition: 6 },
      { id: '1', correctPosition: 1, currentPosition: 3 },
      { id: '2', correctPosition: 2, currentPosition: 0 },
      { id: '3', correctPosition: 3, currentPosition: 7 },
      { id: '4', correctPosition: 4, currentPosition: 1 },
      { id: '5', correctPosition: 5, currentPosition: 8 },
      { id: '6', correctPosition: 6, currentPosition: 2 },
      { id: '7', correctPosition: 7, currentPosition: 5 },
      { id: '8', correctPosition: 8, currentPosition: 4 }
    ],
    gridSize: { rows: 3, cols: 3 },
    theme: 'nature'
  },

  // Level 2 - Medium (3x3 grids with more complex images)
  {
    id: 'img-scramble-003',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Space Exploration',
    description: 'Assemble the space scene with planets and spacecraft',
    question: 'Can you complete this space adventure scene?',
    explanation: 'Excellent! You\'ve assembled a fantastic space exploration scene.',
    hints: ['Look for the spacecraft parts', 'Planets are usually round', 'Stars help connect the background'],
    timeLimit: 180,
    points: 20,
    tags: ['space', 'planets', 'science'],
    originalImageUrl: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    pieces: [
      { id: '0', correctPosition: 0, currentPosition: 4 },
      { id: '1', correctPosition: 1, currentPosition: 8 },
      { id: '2', correctPosition: 2, currentPosition: 1 },
      { id: '3', correctPosition: 3, currentPosition: 6 },
      { id: '4', correctPosition: 4, currentPosition: 2 },
      { id: '5', correctPosition: 5, currentPosition: 0 },
      { id: '6', correctPosition: 6, currentPosition: 7 },
      { id: '7', correctPosition: 7, currentPosition: 3 },
      { id: '8', correctPosition: 8, currentPosition: 5 }
    ],
    gridSize: { rows: 3, cols: 3 },
    theme: 'space'
  },
  {
    id: 'img-scramble-004',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Eiffel Tower',
    description: 'Reconstruct the famous Eiffel Tower',
    question: 'Can you rebuild this iconic landmark?',
    explanation: 'Magnifique! You\'ve successfully reconstructed the Eiffel Tower.',
    hints: ['The tower base is wider than the top', 'Look for the distinctive iron lattice pattern', 'The sky pieces are usually blue'],
    timeLimit: 200,
    points: 25,
    tags: ['landmarks', 'architecture', 'france'],
    originalImageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    pieces: [
      { id: '0', correctPosition: 0, currentPosition: 5 },
      { id: '1', correctPosition: 1, currentPosition: 2 },
      { id: '2', correctPosition: 2, currentPosition: 8 },
      { id: '3', correctPosition: 3, currentPosition: 0 },
      { id: '4', correctPosition: 4, currentPosition: 6 },
      { id: '5', correctPosition: 5, currentPosition: 3 },
      { id: '6', correctPosition: 6, currentPosition: 1 },
      { id: '7', correctPosition: 7, currentPosition: 4 },
      { id: '8', correctPosition: 8, currentPosition: 7 }
    ],
    gridSize: { rows: 3, cols: 3 },
    theme: 'landmarks'
  },

  // Level 3 - Hard (3x3 grids with complex patterns)
  {
    id: 'img-scramble-005',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Solar System',
    description: 'Arrange the planets in their cosmic dance',
    question: 'Can you organize this solar system scene?',
    explanation: 'Outstanding! You\'ve created a beautiful representation of our solar system.',
    hints: ['Larger planets are usually gas giants', 'Look for Saturn\'s distinctive rings', 'The sun is the brightest object'],
    timeLimit: 240,
    points: 30,
    tags: ['space', 'planets', 'astronomy'],
    originalImageUrl: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    pieces: [
      { id: '0', correctPosition: 0, currentPosition: 7 },
      { id: '1', correctPosition: 1, currentPosition: 3 },
      { id: '2', correctPosition: 2, currentPosition: 5 },
      { id: '3', correctPosition: 3, currentPosition: 1 },
      { id: '4', correctPosition: 4, currentPosition: 8 },
      { id: '5', correctPosition: 5, currentPosition: 0 },
      { id: '6', correctPosition: 6, currentPosition: 4 },
      { id: '7', correctPosition: 7, currentPosition: 2 },
      { id: '8', correctPosition: 8, currentPosition: 6 }
    ],
    gridSize: { rows: 3, cols: 3 },
    theme: 'space'
  }
];

// Crossword Puzzles based on uploaded images
export const crosswordPuzzles: CrosswordPuzzle[] = [
  // Level 1 - Easy crosswords
  {
    id: 'crossword-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
    title: 'Days of the Week',
    description: 'Complete the crossword using the word bank',
    question: 'Fill in the crossword grid using the words provided below',
    explanation: 'Great job! You completed the days of the week crossword.',
    hints: ['SEVEN has 5 letters', 'Look for intersecting letters', 'Count the boxes to match word length'],
    timeLimit: 300,
    points: 25,
    tags: ['time', 'calendar', 'basic'],
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, 'S', 'E', 'V', 'E', 'N'],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    clues: [
      {
        number: 1,
        clue: 'The number of days in a week',
        answer: 'SEVEN',
        direction: 'across',
        startRow: 1,
        startCol: 2
      }
    ],
    availableWords: ['SEVEN'],
    wordBank: ['SEVEN', 'MONDAY', 'FRIDAY', 'SUNDAY']
  },
  {
    id: 'crossword-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
    title: 'Simple Animals',
    description: 'Animal-themed crossword puzzle',
    question: 'Use the word bank to complete this animal crossword',
    explanation: 'Excellent! You know your animals well.',
    hints: ['CAT has 3 letters', 'DOG has 3 letters', 'Look for the starting positions'],
    timeLimit: 240,
    points: 20,
    tags: ['animals', 'pets', 'basic'],
    grid: [
      [null, null, 'C', 'A', 'T'],
      [null, null, null, null, null],
      ['D', 'O', 'G', null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ],
    clues: [
      {
        number: 1,
        clue: 'Furry pet that meows',
        answer: 'CAT',
        direction: 'across',
        startRow: 0,
        startCol: 2
      },
      {
        number: 2,
        clue: 'Pet that barks and wags its tail',
        answer: 'DOG',
        direction: 'across',
        startRow: 2,
        startCol: 0
      }
    ],
    availableWords: ['CAT', 'DOG'],
    wordBank: ['CAT', 'DOG', 'BIRD', 'FISH']
  },

  // Level 2 - Medium crosswords
  {
    id: 'crossword-003',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'Time and Joy',
    description: 'Complete this crossword about time and emotions',
    question: 'Fill the grid using the provided word bank',
    explanation: 'Wonderful! You understand time concepts and emotions.',
    hints: ['JOY is a short word for happiness', 'RESOLUTION is a long word', 'Look for crossing points'],
    timeLimit: 400,
    points: 35,
    tags: ['time', 'emotions', 'vocabulary'],
    grid: [
      [null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null],
      ['R', 'E', 'S', 'O', 'L', 'U', 'T', 'I', 'O', 'N', null],
      [null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, 'J', 'O', 'Y', null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null]
    ],
    clues: [
      {
        number: 1,
        clue: 'A firm decision to do something',
        answer: 'RESOLUTION',
        direction: 'across',
        startRow: 3,
        startCol: 0
      },
      {
        number: 2,
        clue: 'Feeling of great pleasure and happiness',
        answer: 'JOY',
        direction: 'across',
        startRow: 5,
        startCol: 3
      }
    ],
    availableWords: ['RESOLUTION', 'JOY'],
    wordBank: ['RESOLUTION', 'JOY', 'HAPPINESS', 'DECISION', 'GOAL']
  },

  // Level 3 - Hard crosswords
  {
    id: 'crossword-004',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Millennium Challenge',
    description: 'Advanced crossword with complex words',
    question: 'Complete this challenging crossword puzzle',
    explanation: 'Impressive! You have excellent vocabulary skills.',
    hints: ['MILLENNIUM means 1000 years', 'Look for the longest words first', 'Use crossing letters as clues'],
    timeLimit: 600,
    points: 50,
    tags: ['time', 'advanced', 'vocabulary'],
    grid: [
      [null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null],
      ['M', 'I', 'L', 'L', 'E', 'N', 'N', 'I', 'U', 'M', null],
      [null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null]
    ],
    clues: [
      {
        number: 1,
        clue: 'One thousand years',
        answer: 'MILLENNIUM',
        direction: 'across',
        startRow: 2,
        startCol: 0
      }
    ],
    availableWords: ['MILLENNIUM'],
    wordBank: ['MILLENNIUM', 'CENTURY', 'DECADE', 'YEAR']
  }
];

// Export combined puzzle database
export const extendedPuzzleDatabase = [
  ...imageScramblePuzzles,
  ...crosswordPuzzles
];