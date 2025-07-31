import { Puzzle, Subject, PuzzleType } from '../types';

export const samplePuzzles: Puzzle[] = [
  // Mathematics - Child Level
  {
    id: 'math-001',
    type: 'multiple-choice',
    subject: 'mathematics',
    difficulty: 1,
    title: 'Simple Addition',
    description: 'Basic addition with single digits',
    question: 'What is 3 + 5?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: '3 + 5 = 8. When we add 3 and 5 together, we get 8.',
    hints: ['Try counting on your fingers!', 'Start with 3 and count up 5 more'],
    timeLimit: 30,
    points: 10,
    tags: ['addition', 'basic-math'],
  },
  {
    id: 'math-002',
    type: 'number-sequence',
    subject: 'mathematics',
    difficulty: 2,
    title: 'Number Pattern',
    description: 'Find the next number in the sequence',
    question: 'What comes next in this sequence: 2, 4, 6, 8, ?',
    correctAnswer: 10,
    explanation: 'This is a sequence of even numbers, increasing by 2 each time.',
    hints: ['Look at the difference between each number', 'These are all even numbers'],
    timeLimit: 45,
    points: 15,
    tags: ['patterns', 'sequences'],
  },

  // Mathematics - Teen Level
  {
    id: 'math-003',
    type: 'math-problem',
    subject: 'mathematics',
    difficulty: 4,
    title: 'Algebraic Expression',
    description: 'Solve for x',
    question: 'If 2x + 5 = 13, what is x?',
    correctAnswer: 4,
    explanation: '2x + 5 = 13, so 2x = 8, therefore x = 4',
    hints: ['Subtract 5 from both sides first', 'Then divide by 2'],
    timeLimit: 60,
    points: 25,
    tags: ['algebra', 'equations'],
  },

  // Science - Child Level
  {
    id: 'science-001',
    type: 'multiple-choice',
    subject: 'science',
    difficulty: 1,
    title: 'Animal Homes',
    description: 'Where do different animals live?',
    question: 'Where do bees live?',
    options: ['In a nest', 'In a hive', 'In a den', 'In a cave'],
    correctAnswer: 'In a hive',
    explanation: 'Bees live in hives, which they build to store honey and raise their young.',
    hints: ['Think about where honey comes from', 'It rhymes with "five"'],
    timeLimit: 30,
    points: 10,
    tags: ['animals', 'habitats'],
  },

  // Logic Puzzles
  {
    id: 'logic-001',
    type: 'logic-grid',
    subject: 'logic',
    difficulty: 3,
    title: 'Color Logic',
    description: 'Use logical reasoning to solve',
    question: 'If all roses are red, and this flower is red, is it definitely a rose?',
    options: ['Yes', 'No', 'Maybe', 'Cannot determine'],
    correctAnswer: 'No',
    explanation: 'Just because all roses are red doesn\'t mean all red flowers are roses. Other flowers can be red too!',
    hints: ['Think about other red flowers', 'The statement only goes one way'],
    timeLimit: 90,
    points: 20,
    tags: ['logic', 'reasoning'],
  },

  // Language Arts
  {
    id: 'language-001',
    type: 'word-puzzle',
    subject: 'language',
    difficulty: 2,
    title: 'Rhyming Words',
    description: 'Find words that rhyme',
    question: 'Which word rhymes with "cat"?',
    options: ['dog', 'hat', 'bird', 'fish'],
    correctAnswer: 'hat',
    explanation: 'Hat rhymes with cat because they both end with the same sound: -at',
    hints: ['Listen to the ending sounds', 'Both words end with -at'],
    timeLimit: 30,
    points: 10,
    tags: ['rhyming', 'phonics'],
  },

  // Memory Game
  {
    id: 'memory-001',
    type: 'memory-game',
    subject: 'memory',
    difficulty: 2,
    title: 'Sequence Memory',
    description: 'Remember the sequence of colors',
    question: 'What was the third color in the sequence: Red, Blue, Green, Yellow, Purple?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correctAnswer: 'Green',
    explanation: 'The sequence was Red (1st), Blue (2nd), Green (3rd), Yellow (4th), Purple (5th)',
    hints: ['Count carefully from the beginning', 'Red is first, Blue is second...'],
    timeLimit: 45,
    points: 15,
    tags: ['memory', 'sequences'],
  },

  // Advanced Mathematics
  {
    id: 'math-004',
    type: 'math-problem',
    subject: 'mathematics',
    difficulty: 6,
    title: 'Quadratic Equation',
    description: 'Solve the quadratic equation',
    question: 'Find the positive solution to x² - 5x + 6 = 0',
    correctAnswer: 3,
    explanation: 'Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3. The positive solutions are both 2 and 3, but 3 is the larger one.',
    hints: ['Try factoring the equation', 'Look for two numbers that multiply to 6 and add to 5'],
    timeLimit: 120,
    points: 40,
    tags: ['quadratic', 'factoring'],
  },

  // Pattern Matching
  {
    id: 'pattern-001',
    type: 'pattern-matching',
    subject: 'logic',
    difficulty: 3,
    title: 'Shape Patterns',
    description: 'Complete the pattern',
    question: 'What shape comes next: Circle, Square, Triangle, Circle, Square, ?',
    options: ['Circle', 'Square', 'Triangle', 'Diamond'],
    correctAnswer: 'Triangle',
    explanation: 'The pattern repeats every 3 shapes: Circle, Square, Triangle',
    hints: ['Look for a repeating pattern', 'Count how many shapes before it repeats'],
    timeLimit: 60,
    points: 20,
    tags: ['patterns', 'shapes'],
  },
];

export function getPuzzlesByDifficulty(difficulty: number, count: number = 5): Puzzle[] {
  const filtered = samplePuzzles.filter(p => p.difficulty === difficulty);
  return filtered.slice(0, count);
}

export function getPuzzlesBySubject(subject: Subject, count: number = 5): Puzzle[] {
  const filtered = samplePuzzles.filter(p => p.subject === subject);
  return filtered.slice(0, count);
}

export function getAdaptivePuzzles(
  userLevel: number,
  subjects: Subject[],
  count: number = 5
): Puzzle[] {
  const targetDifficulty = Math.max(1, Math.min(7, userLevel));
  const difficultyRange = [targetDifficulty - 1, targetDifficulty, targetDifficulty + 1];
  
  const filtered = samplePuzzles.filter(p => 
    difficultyRange.includes(p.difficulty) && 
    subjects.includes(p.subject)
  );
  
  // Shuffle and return requested count
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}