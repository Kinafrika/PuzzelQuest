import { ExtendedPuzzle, CrosswordPuzzle, WordSearchPuzzle, RiddlePuzzle, PatternPuzzle, MemoryCardPuzzle } from './puzzleTypes';
import { ImageScramblePuzzle } from './puzzleTypes';
import { Subject } from '../types';

export const extendedPuzzleDatabase: ExtendedPuzzle[] = [
  // LEVEL 1 (EASY) - Crossword Puzzles
  {
    id: 'crossword-easy-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
    title: 'Simple Words',
    description: 'Complete this easy crossword with simple words',
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
      { number: 1, clue: 'Pet that barks', answer: 'DOG', direction: 'across', startRow: 2, startCol: 0 },
      { number: 2, clue: 'Pet that meows', answer: 'CAT', direction: 'down', startRow: 0, startCol: 2 }
    ],
    explanation: 'These are common household pets that children know well',
    hints: ['Think about animals you might have at home', 'One says woof, one says meow'],
    timeLimit: 180,
    points: 15,
    tags: ['crossword', 'animals', 'easy']
  } as CrosswordPuzzle,

  {
    id: 'crossword-easy-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
    title: 'Colors and Shapes',
    description: 'Basic crossword about colors and shapes',
    question: 'Fill in the crossword with color and shape words',
    grid: [
      ['R', 'E', 'D', '', ''],
      ['', '', '', '', ''],
      ['B', 'L', 'U', 'E', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['R', 'E', 'D', '', ''],
      ['', '', '', '', ''],
      ['B', 'L', 'U', 'E', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Color of fire trucks', answer: 'RED', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Color of the sky', answer: 'BLUE', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'Basic colors that are easy to recognize and remember',
    hints: ['Think about bright colors you see every day', 'Look at the sky and fire trucks'],
    timeLimit: 120,
    points: 15,
    tags: ['crossword', 'colors', 'easy']
  } as CrosswordPuzzle,

  {
    id: 'crossword-easy-003',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 1,
    title: 'Family Words',
    description: 'Simple crossword about family members',
    question: 'Complete the crossword with family member names',
    grid: [
      ['M', 'O', 'M', '', ''],
      ['', '', '', '', ''],
      ['D', 'A', 'D', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['M', 'O', 'M', '', ''],
      ['', '', '', '', ''],
      ['D', 'A', 'D', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Female parent', answer: 'MOM', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Male parent', answer: 'DAD', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'Family members are the first words children learn',
    hints: ['Think about your parents', 'Who takes care of you at home?'],
    timeLimit: 90,
    points: 10,
    tags: ['crossword', 'family', 'easy']
  } as CrosswordPuzzle,

  // LEVEL 2 (MEDIUM) - Crossword Puzzles
  {
    id: 'crossword-medium-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'School Subjects',
    description: 'Crossword about different school subjects',
    question: 'Fill in the crossword with school subject names',
    grid: [
      ['M', 'A', 'T', 'H', ''],
      ['', '', '', '', ''],
      ['A', 'R', 'T', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['M', 'A', 'T', 'H', ''],
      ['', '', '', '', ''],
      ['A', 'R', 'T', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Subject with numbers and equations', answer: 'MATH', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Subject where you draw and paint', answer: 'ART', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are common subjects taught in schools',
    hints: ['Think about what you learn in school', 'One involves numbers, one involves creativity'],
    timeLimit: 150,
    points: 20,
    tags: ['crossword', 'education', 'medium']
  } as CrosswordPuzzle,

  {
    id: 'crossword-medium-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'Nature Words',
    description: 'Crossword about nature and environment',
    question: 'Complete the crossword with nature-related words',
    grid: [
      ['T', 'R', 'E', 'E', ''],
      ['', '', '', '', ''],
      ['S', 'U', 'N', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['T', 'R', 'E', 'E', ''],
      ['', '', '', '', ''],
      ['S', 'U', 'N', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Tall plant with branches and leaves', answer: 'TREE', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Bright star that gives us light', answer: 'SUN', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are important elements of our natural environment',
    hints: ['Think about what you see in a forest', 'What shines in the sky during the day?'],
    timeLimit: 120,
    points: 20,
    tags: ['crossword', 'nature', 'medium']
  } as CrosswordPuzzle,

  {
    id: 'crossword-medium-003',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'Food Items',
    description: 'Crossword about common foods',
    question: 'Fill in the crossword with food names',
    grid: [
      ['B', 'R', 'E', 'A', 'D'],
      ['', '', '', '', ''],
      ['M', 'I', 'L', 'K', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['B', 'R', 'E', 'A', 'D'],
      ['', '', '', '', ''],
      ['M', 'I', 'L', 'K', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Food made from flour, eaten with butter', answer: 'BREAD', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'White drink that comes from cows', answer: 'MILK', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are basic foods that are part of a healthy diet',
    hints: ['Think about breakfast foods', 'What do you drink with cereal?'],
    timeLimit: 140,
    points: 25,
    tags: ['crossword', 'food', 'medium']
  } as CrosswordPuzzle,

  {
    id: 'crossword-medium-004',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 2,
    title: 'Transportation',
    description: 'Crossword about vehicles and transportation',
    question: 'Complete the crossword with transportation words',
    grid: [
      ['C', 'A', 'R', '', ''],
      ['', '', '', '', ''],
      ['B', 'U', 'S', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['C', 'A', 'R', '', ''],
      ['', '', '', '', ''],
      ['B', 'U', 'S', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Vehicle with four wheels for personal transport', answer: 'CAR', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Large vehicle that carries many passengers', answer: 'BUS', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are common ways people travel from place to place',
    hints: ['Think about how you get to school', 'What vehicles do you see on the road?'],
    timeLimit: 130,
    points: 25,
    tags: ['crossword', 'transportation', 'medium']
  } as CrosswordPuzzle,

  // LEVEL 3 (HARD) - Crossword Puzzles
  {
    id: 'crossword-hard-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Science Terms',
    description: 'Challenging crossword about scientific concepts',
    question: 'Fill in the crossword with science-related terms',
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
      { number: 1, clue: 'Negatively charged particle in an atom', answer: 'ELECTRON', direction: 'across', startRow: 2, startCol: 0 },
      { number: 2, clue: 'Basic unit of matter', answer: 'ATOM', direction: 'down', startRow: 0, startCol: 3 }
    ],
    explanation: 'These are fundamental concepts in chemistry and physics',
    hints: ['Think about the smallest parts of matter', 'What orbits around the nucleus?'],
    timeLimit: 200,
    points: 35,
    tags: ['crossword', 'science', 'hard']
  } as CrosswordPuzzle,

  {
    id: 'crossword-hard-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Geography Challenge',
    description: 'Advanced crossword about world geography',
    question: 'Complete the crossword with geographical terms',
    grid: [
      ['O', 'C', 'E', 'A', 'N'],
      ['', '', '', '', ''],
      ['R', 'I', 'V', 'E', 'R'],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    solution: [
      ['O', 'C', 'E', 'A', 'N'],
      ['', '', '', '', ''],
      ['R', 'I', 'V', 'E', 'R'],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Large body of salt water', answer: 'OCEAN', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Flowing body of fresh water', answer: 'RIVER', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are major geographical features of our planet',
    hints: ['Think about large bodies of water', 'One is salty, one flows to the sea'],
    timeLimit: 180,
    points: 30,
    tags: ['crossword', 'geography', 'hard']
  } as CrosswordPuzzle,

  {
    id: 'crossword-hard-003',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Advanced Vocabulary',
    description: 'Crossword with challenging vocabulary words',
    question: 'Fill in the crossword with advanced vocabulary',
    grid: [
      ['W', 'I', 'S', 'D', 'O', 'M'],
      ['', '', '', '', '', ''],
      ['K', 'N', 'O', 'W', 'L', 'E', 'D', 'G', 'E'],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    solution: [
      ['W', 'I', 'S', 'D', 'O', 'M'],
      ['', '', '', '', '', ''],
      ['K', 'N', 'O', 'W', 'L', 'E', 'D', 'G', 'E'],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Good judgment and understanding', answer: 'WISDOM', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Information and understanding gained through learning', answer: 'KNOWLEDGE', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These words represent important concepts in learning and education',
    hints: ['Think about what you gain from experience', 'What do you acquire through study?'],
    timeLimit: 220,
    points: 40,
    tags: ['crossword', 'vocabulary', 'hard']
  } as CrosswordPuzzle,

  {
    id: 'crossword-hard-004',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Mathematical Terms',
    description: 'Crossword featuring mathematical vocabulary',
    question: 'Complete the crossword with math-related terms',
    grid: [
      ['F', 'R', 'A', 'C', 'T', 'I', 'O', 'N'],
      ['', '', '', '', '', '', '', ''],
      ['A', 'L', 'G', 'E', 'B', 'R', 'A', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '']
    ],
    solution: [
      ['F', 'R', 'A', 'C', 'T', 'I', 'O', 'N'],
      ['', '', '', '', '', '', '', ''],
      ['A', 'L', 'G', 'E', 'B', 'R', 'A', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Number representing part of a whole', answer: 'FRACTION', direction: 'across', startRow: 0, startCol: 0 },
      { number: 2, clue: 'Branch of math using letters for numbers', answer: 'ALGEBRA', direction: 'across', startRow: 2, startCol: 0 }
    ],
    explanation: 'These are important mathematical concepts learned in school',
    hints: ['Think about parts of a whole', 'What math uses x and y?'],
    timeLimit: 240,
    points: 45,
    tags: ['crossword', 'mathematics', 'hard']
  } as CrosswordPuzzle,

  {
    id: 'crossword-hard-005',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 3,
    title: 'Time and Calendar',
    description: 'Crossword about time-related concepts',
    question: 'Fill in the crossword with time and calendar words',
    grid: [
      ['', '', '', 'F', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'R', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'E', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'W', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'O', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'R', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'K', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'S', '', '', '', '', '', '', '', '', '', ''],
      ['R', 'E', 'S', 'O', 'L', 'U', 'T', 'I', 'O', 'N', '', '', '', ''],
      ['', '', '', 'U', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'N', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'D', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    solution: [
      ['', '', '', 'F', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'I', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'R', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'E', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'W', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'O', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'R', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'K', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'S', '', '', '', '', '', '', '', '', '', ''],
      ['R', 'E', 'S', 'O', 'L', 'U', 'T', 'I', 'O', 'N', '', '', '', ''],
      ['', '', '', 'U', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'N', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'D', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'Promise made at the start of a new year', answer: 'RESOLUTION', direction: 'across', startRow: 9, startCol: 0 },
      { number: 2, clue: 'Colorful display in the sky on special occasions', answer: 'FIREWORKS', direction: 'down', startRow: 0, startCol: 3 }
    ],
    explanation: 'These words relate to New Year celebrations and traditions',
    hints: ['Think about New Year traditions', 'What do people promise to do better?'],
    timeLimit: 300,
    points: 50,
    tags: ['crossword', 'calendar', 'hard']
  } as CrosswordPuzzle,

  // LEVEL 4 (EXPERT) - Crossword Puzzles
  {
    id: 'crossword-expert-001',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 4,
    title: 'Advanced Science',
    description: 'Expert-level crossword with complex scientific terms',
    question: 'Complete this challenging crossword about advanced science',
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
    explanation: 'This is a fundamental biological process that sustains life on Earth',
    hints: ['Think about how plants make their own food', 'This process requires sunlight and carbon dioxide'],
    timeLimit: 300,
    points: 75,
    tags: ['crossword', 'biology', 'expert']
  } as CrosswordPuzzle,

  {
    id: 'crossword-expert-002',
    type: 'crossword',
    subject: 'crossword',
    difficulty: 4,
    title: 'Millennium Puzzle',
    description: 'Expert crossword about time periods',
    question: 'Complete this challenging crossword about time measurements',
    grid: [
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['R', 'U', 'L', 'M', 'E', 'N', '', '', '', '', '', '', '', '', '', ''],
      ['M', 'G', 'N', 'I', 'I', 'V', 'E', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    solution: [
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['R', 'U', 'L', 'M', 'E', 'N', '', '', '', '', '', '', '', '', '', ''],
      ['M', 'G', 'N', 'I', 'I', 'V', 'E', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
    clues: [
      { number: 1, clue: 'One thousand years', answer: 'MILLENNIUM', direction: 'down', startRow: 0, startCol: 3 }
    ],
    explanation: 'A millennium represents one thousand years, a significant time period in history',
    hints: ['Think about very long periods of time', 'What comes after a century?'],
    timeLimit: 400,
    points: 80,
    tags: ['crossword', 'time', 'expert']
  } as CrosswordPuzzle,

  // LEVEL 1 (EASY) - Image Scramble Puzzles
  {
    id: 'image-scramble-easy-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Simple Animal Picture',
    description: 'Rearrange the pieces to complete the animal picture',
    question: 'Put the scrambled pieces in the correct order to reveal the animal',
    originalImageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=200',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 1 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 0 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 2, currentPosition: 3 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 3, currentPosition: 2 }
    ],
    gridSize: { rows: 2, cols: 2 },
    explanation: 'Image puzzles help develop spatial reasoning and visual processing skills',
    hints: ['Look for the cat\'s face and ears', 'Match the fur patterns between pieces'],
    timeLimit: 120,
    points: 15,
    tags: ['image-puzzle', 'animals', 'easy']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-easy-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Colorful Flowers',
    description: 'Arrange the pieces to complete the flower picture',
    question: 'Rearrange the pieces to show the beautiful flowers',
    originalImageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 2 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 3 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 2, currentPosition: 0 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 3, currentPosition: 1 }
    ],
    gridSize: { rows: 2, cols: 2 },
    explanation: 'Flower puzzles help recognize natural patterns and colors',
    hints: ['Look for the flower petals and stems', 'Match the colors between adjacent pieces'],
    timeLimit: 100,
    points: 15,
    tags: ['image-puzzle', 'nature', 'easy']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-easy-003',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 1,
    title: 'Fruit Bowl',
    description: 'Complete the fruit picture by arranging the pieces',
    question: 'Put the pieces together to show the delicious fruits',
    originalImageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=200',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 3 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 2 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 2, currentPosition: 1 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 3, currentPosition: 0 }
    ],
    gridSize: { rows: 2, cols: 2 },
    explanation: 'Food puzzles help learn about healthy eating and nutrition',
    hints: ['Look for the different fruit shapes and colors', 'Find the bowl edges to guide placement'],
    timeLimit: 110,
    points: 15,
    tags: ['image-puzzle', 'food', 'easy']
  } as ImageScramblePuzzle,

  // LEVEL 2 (MEDIUM) - Image Scramble Puzzles
  {
    id: 'image-scramble-medium-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Beach Landscape',
    description: 'Reconstruct the beautiful beach scene',
    question: 'Arrange the pieces to complete the beach landscape',
    originalImageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 4 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 2 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 5 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 3 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 0 }
    ],
    gridSize: { rows: 2, cols: 3 },
    explanation: 'Landscape puzzles help understand natural environments and geography',
    hints: ['Look for the horizon line between sky and water', 'Match the wave patterns and sand textures'],
    timeLimit: 180,
    points: 25,
    tags: ['image-puzzle', 'landscape', 'medium']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-medium-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'City Skyline',
    description: 'Piece together the urban cityscape',
    question: 'Arrange the pieces to show the city skyline',
    originalImageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 3 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 5 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 1 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 4 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 0 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 2 }
    ],
    gridSize: { rows: 2, cols: 3 },
    explanation: 'Urban puzzles help understand city planning and architecture',
    hints: ['Look for building edges and windows', 'Match the sky and building silhouettes'],
    timeLimit: 200,
    points: 30,
    tags: ['image-puzzle', 'urban', 'medium']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-medium-003',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Forest Path',
    description: 'Complete the peaceful forest scene',
    question: 'Arrange the pieces to show the forest pathway',
    originalImageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 2 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 4 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 1 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 5 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 0 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 3 }
    ],
    gridSize: { rows: 2, cols: 3 },
    explanation: 'Nature puzzles help appreciate natural environments and ecosystems',
    hints: ['Look for tree branches and mountain outlines', 'Match the lighting and shadow patterns'],
    timeLimit: 190,
    points: 25,
    tags: ['image-puzzle', 'nature', 'medium']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-medium-004',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 2,
    title: 'Butterfly Garden',
    description: 'Reconstruct the colorful butterfly scene',
    question: 'Put the pieces together to show the beautiful butterfly',
    originalImageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 1 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 3 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 5 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 0 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 2 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 4 }
    ],
    gridSize: { rows: 2, cols: 3 },
    explanation: 'Butterfly puzzles help learn about insects and their role in nature',
    hints: ['Look for the butterfly wing patterns', 'Match the flower colors and shapes'],
    timeLimit: 170,
    points: 30,
    tags: ['image-puzzle', 'insects', 'medium']
  } as ImageScramblePuzzle,

  // LEVEL 3 (HARD) - Image Scramble Puzzles
  {
    id: 'image-scramble-hard-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Solar System',
    description: 'Reconstruct the solar system diagram',
    question: 'Arrange the pieces to complete the solar system image',
    originalImageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 6 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 3 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 8 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 7 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 2 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 4 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 5 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 0 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Space puzzles help understand astronomy and our place in the universe',
    hints: ['Look for the Earth\'s continents and oceans', 'Match the planet\'s curvature and atmosphere'],
    timeLimit: 300,
    points: 40,
    tags: ['image-puzzle', 'space', 'hard']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-hard-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Mathematical Diagram',
    description: 'Reconstruct the mathematical diagram',
    question: 'Arrange the pieces to complete the geometry diagram',
    originalImageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 5 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 2 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 7 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 8 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 3 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 0 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 6 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 4 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Mathematical diagrams help visualize complex concepts and relationships',
    hints: ['Look for mathematical symbols and equations', 'Connect related formulas and diagrams'],
    timeLimit: 280,
    points: 45,
    tags: ['image-puzzle', 'mathematics', 'hard']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-hard-003',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Ancient Architecture',
    description: 'Reconstruct the historical building',
    question: 'Arrange the pieces to show the ancient structure',
    originalImageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 4 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 7 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 1 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 8 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 2 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 6 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 0 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 3 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/161815/architecture-building-amsterdam-historic-161815.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 5 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Architecture puzzles help understand historical building techniques and cultural heritage',
    hints: ['Look for building edges and architectural details', 'Match window patterns and structural elements'],
    timeLimit: 320,
    points: 50,
    tags: ['image-puzzle', 'architecture', 'hard']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-hard-004',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Underwater Scene',
    description: 'Complete the marine life puzzle',
    question: 'Arrange the pieces to show the underwater world',
    originalImageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 3 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 6 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 1 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 8 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 2 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 7 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 4 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 0 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/920161/pexels-photo-920161.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 5 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Marine puzzles help learn about ocean ecosystems and aquatic life',
    hints: ['Look for fish shapes and coral formations', 'Match the water colors and lighting effects'],
    timeLimit: 290,
    points: 45,
    tags: ['image-puzzle', 'marine', 'hard']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-hard-005',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 3,
    title: 'Mountain Landscape',
    description: 'Reconstruct the majestic mountain view',
    question: 'Arrange the pieces to complete the mountain scenery',
    originalImageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 7 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 2 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 5 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 3, currentPosition: 1 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 4, currentPosition: 8 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 5, currentPosition: 3 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 6, currentPosition: 0 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 7, currentPosition: 6 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 8, currentPosition: 4 }
    ],
    gridSize: { rows: 3, cols: 3 },
    explanation: 'Mountain puzzles help understand geological formations and natural landscapes',
    hints: ['Look for mountain peaks and ridgelines', 'Match the sky gradients and cloud formations'],
    timeLimit: 310,
    points: 50,
    tags: ['image-puzzle', 'mountains', 'hard']
  } as ImageScramblePuzzle,

  // LEVEL 4 (EXPERT) - Image Scramble Puzzles
  {
    id: 'image-scramble-expert-001',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 4,
    title: 'Complex Circuit Diagram',
    description: 'Reconstruct the electronic circuit diagram',
    question: 'Arrange the pieces to complete the circuit diagram',
    originalImageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 15 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 8 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 11 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,0,100,100', correctPosition: 3, currentPosition: 4 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 4, currentPosition: 12 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 5, currentPosition: 7 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 6, currentPosition: 2 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,100,100,100', correctPosition: 7, currentPosition: 14 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 8, currentPosition: 9 },
      { id: '10', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 9, currentPosition: 1 },
      { id: '11', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 10, currentPosition: 6 },
      { id: '12', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,200,100,100', correctPosition: 11, currentPosition: 13 },
      { id: '13', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,300,100,100', correctPosition: 12, currentPosition: 3 },
      { id: '14', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,300,100,100', correctPosition: 13, currentPosition: 10 },
      { id: '15', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,300,100,100', correctPosition: 14, currentPosition: 5 },
      { id: '16', imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,300,100,100', correctPosition: 15, currentPosition: 0 }
    ],
    gridSize: { rows: 4, cols: 4 },
    explanation: 'Complex mechanical systems require understanding of interconnected components',
    hints: ['Look for gear connections and mechanical linkages', 'Start with corner pieces and work inward'],
    timeLimit: 480,
    points: 80,
    tags: ['image-puzzle', 'engineering', 'expert']
  } as ImageScramblePuzzle,

  {
    id: 'image-scramble-expert-002',
    type: 'image-scramble',
    subject: 'image-puzzle',
    difficulty: 4,
    title: 'Molecular Structure',
    description: 'Reconstruct the complex molecular diagram',
    question: 'Arrange the pieces to complete the molecular structure',
    originalImageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
    scrambledPieces: [
      { id: '1', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,0,100,100', correctPosition: 0, currentPosition: 9 },
      { id: '2', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,0,100,100', correctPosition: 1, currentPosition: 14 },
      { id: '3', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,0,100,100', correctPosition: 2, currentPosition: 3 },
      { id: '4', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,0,100,100', correctPosition: 3, currentPosition: 12 },
      { id: '5', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,100,100,100', correctPosition: 4, currentPosition: 7 },
      { id: '6', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,100,100,100', correctPosition: 5, currentPosition: 1 },
      { id: '7', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,100,100,100', correctPosition: 6, currentPosition: 15 },
      { id: '8', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,100,100,100', correctPosition: 7, currentPosition: 5 },
      { id: '9', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,200,100,100', correctPosition: 8, currentPosition: 11 },
      { id: '10', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,200,100,100', correctPosition: 9, currentPosition: 2 },
      { id: '11', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,200,100,100', correctPosition: 10, currentPosition: 8 },
      { id: '12', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,200,100,100', correctPosition: 11, currentPosition: 6 },
      { id: '13', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=0,300,100,100', correctPosition: 12, currentPosition: 13 },
      { id: '14', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=100,300,100,100', correctPosition: 13, currentPosition: 4 },
      { id: '15', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=200,300,100,100', correctPosition: 14, currentPosition: 10 },
      { id: '16', imageUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=300,300,100,100', correctPosition: 15, currentPosition: 0 }
    ],
    gridSize: { rows: 4, cols: 4 },
    explanation: 'Molecular structures require precise understanding of atomic arrangements and chemical bonds',
    hints: ['Look for molecular bonds and atomic connections', 'Consider symmetry in molecular structures'],
    timeLimit: 500,
    points: 100,
    tags: ['image-puzzle', 'chemistry', 'expert']
  } as ImageScramblePuzzle,

  // Additional puzzles for other subjects to complete the required numbers
  {
    id: 'math-easy-001',
    type: 'multiple-choice',
    subject: 'mathematics',
    difficulty: 1,
    title: 'Simple Addition',
    description: 'Basic addition with single digits',
    question: 'What is 2 + 3?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: '2 + 3 = 5. When we add 2 and 3 together, we get 5.',
    hints: ['Try counting on your fingers!', 'Start with 2 and count up 3 more'],
    timeLimit: 30,
    points: 10,
    tags: ['addition', 'basic-math'],
  },

  {
    id: 'math-easy-002',
    type: 'multiple-choice',
    subject: 'mathematics',
    difficulty: 1,
    title: 'Simple Subtraction',
    description: 'Basic subtraction with single digits',
    question: 'What is 8 - 3?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: '8 - 3 = 5. When we take away 3 from 8, we get 5.',
    hints: ['Try counting backwards from 8', 'Take away 3 from 8'],
    timeLimit: 30,
    points: 10,
    tags: ['subtraction', 'basic-math'],
  },

  {
    id: 'math-easy-003',
    type: 'multiple-choice',
    subject: 'mathematics',
    difficulty: 1,
    title: 'Counting Objects',
    description: 'Count the number of objects',
    question: 'How many apples are there: 🍎🍎🍎🍎?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'There are 4 apples. Count them one by one: 1, 2, 3, 4.',
    hints: ['Count each apple one by one', 'Point to each apple as you count'],
    timeLimit: 45,
    points: 10,
    tags: ['counting', 'basic-math'],
  },

  // Add more puzzles for each subject and difficulty level...
  // (Continue with similar patterns for science, logic, creativity, etc.)
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