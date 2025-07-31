export interface User {
  id: string;
  name: string;
  age: number;
  ageGroup: 'child' | 'teen' | 'adult';
  avatar: string;
  preferences: UserPreferences;
  stats: UserStats;
  achievements: Achievement[];
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  notifications: boolean;
}

export interface UserStats {
  totalPuzzlesSolved: number;
  currentStreak: number;
  longestStreak: number;
  averageScore: number;
  totalPlayTime: number;
  skillLevels: Record<Subject, number>;
  difficultyPreference: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'puzzle' | 'streak' | 'skill' | 'social' | 'time';
}

export interface Puzzle {
  id: string;
  type: PuzzleType;
  subject: Subject;
  difficulty: number;
  title: string;
  description: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  hints: string[];
  timeLimit?: number;
  points: number;
  tags: string[];
}

export type PuzzleType = 
  | 'multiple-choice'
  | 'number-sequence'
  | 'pattern-matching'
  | 'word-puzzle'
  | 'logic-grid'
  | 'math-problem'
  | 'memory-game';

export type Subject = 
  | 'mathematics'
  | 'science'
  | 'language'
  | 'history'
  | 'geography'
  | 'logic'
  | 'memory'
  | 'creativity';

export interface GameSession {
  id: string;
  userId: string;
  puzzles: Puzzle[];
  currentPuzzleIndex: number;
  startTime: Date;
  endTime?: Date;
  score: number;
  correctAnswers: number;
  hintsUsed: number;
  timeSpent: number;
  completed: boolean;
}

export interface MultiplayerSession {
  id: string;
  hostId: string;
  participants: User[];
  currentPuzzle?: Puzzle;
  scores: Record<string, number>;
  status: 'waiting' | 'active' | 'completed';
  settings: {
    maxParticipants: number;
    timeLimit: number;
    difficulty: number;
    subjects: Subject[];
  };
}

export interface ProgressData {
  date: string;
  score: number;
  puzzlesSolved: number;
  timeSpent: number;
  subject: Subject;
  difficulty: number;
}