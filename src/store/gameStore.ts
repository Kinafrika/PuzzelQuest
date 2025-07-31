import { create } from 'zustand';
import { User, GameSession, Puzzle, UserPreferences, UserStats, Achievement } from '../types';
import { getAgeGroup, generateId } from '../lib/utils';

interface GameState {
  // User management
  currentUser: User | null;
  users: User[];
  
  // Game session
  currentSession: GameSession | null;
  isPlaying: boolean;
  
  // UI state
  showSettings: boolean;
  showProfile: boolean;
  showLeaderboard: boolean;
  
  // Actions
  setCurrentUser: (user: User) => void;
  createUser: (name: string, age: number) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  updateUserStats: (stats: Partial<UserStats>) => void;
  addAchievement: (achievement: Achievement) => void;
  
  startSession: (puzzles: Puzzle[]) => void;
  endSession: () => void;
  nextPuzzle: () => void;
  submitAnswer: (answer: string | number, timeSpent: number) => boolean;
  useHint: () => string | null;
  
  setShowSettings: (show: boolean) => void;
  setShowProfile: (show: boolean) => void;
  setShowLeaderboard: (show: boolean) => void;
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  language: 'en',
  fontSize: 'medium',
  highContrast: false,
  reducedMotion: false,
  soundEnabled: true,
  notifications: true,
};

const defaultStats: UserStats = {
  totalPuzzlesSolved: 0,
  currentStreak: 0,
  longestStreak: 0,
  averageScore: 0,
  totalPlayTime: 0,
  skillLevels: {
    mathematics: 1,
    science: 1,
    language: 1,
    history: 1,
    geography: 1,
    logic: 1,
    memory: 1,
    creativity: 1,
  },
  difficultyPreference: 3,
};

export const useGameStore = create<GameState>((set, get) => ({
  currentUser: null,
  users: [],
  currentSession: null,
  isPlaying: false,
  showSettings: false,
  showProfile: false,
  showLeaderboard: false,

  setCurrentUser: (user) => set({ currentUser: user }),

  createUser: (name, age) => {
    const user: User = {
      id: generateId(),
      name,
      age,
      ageGroup: getAgeGroup(age),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      preferences: defaultPreferences,
      stats: defaultStats,
      achievements: [],
    };
    
    set((state) => ({
      users: [...state.users, user],
      currentUser: user,
    }));
  },

  updateUserPreferences: (preferences) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      preferences: { ...currentUser.preferences, ...preferences },
    };

    set((state) => ({
      currentUser: updatedUser,
      users: state.users.map((u) => (u.id === currentUser.id ? updatedUser : u)),
    }));
  },

  updateUserStats: (stats) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      stats: { ...currentUser.stats, ...stats },
    };

    set((state) => ({
      currentUser: updatedUser,
      users: state.users.map((u) => (u.id === currentUser.id ? updatedUser : u)),
    }));
  },

  addAchievement: (achievement) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      achievements: [...currentUser.achievements, achievement],
    };

    set((state) => ({
      currentUser: updatedUser,
      users: state.users.map((u) => (u.id === currentUser.id ? updatedUser : u)),
    }));
  },

  startSession: (puzzles) => {
    const { currentUser } = get();
    if (!currentUser) return;

    const session: GameSession = {
      id: generateId(),
      userId: currentUser.id,
      puzzles,
      currentPuzzleIndex: 0,
      startTime: new Date(),
      score: 0,
      correctAnswers: 0,
      hintsUsed: 0,
      timeSpent: 0,
      completed: false,
    };

    set({ currentSession: session, isPlaying: true });
  },

  endSession: () => {
    const { currentSession, currentUser } = get();
    if (!currentSession || !currentUser) return;

    const completedSession = {
      ...currentSession,
      endTime: new Date(),
      completed: true,
    };

    // Update user stats
    const newStats: Partial<UserStats> = {
      totalPuzzlesSolved: currentUser.stats.totalPuzzlesSolved + completedSession.correctAnswers,
      totalPlayTime: currentUser.stats.totalPlayTime + completedSession.timeSpent,
      averageScore: Math.round(
        (currentUser.stats.averageScore + completedSession.score) / 2
      ),
    };

    get().updateUserStats(newStats);
    set({ currentSession: null, isPlaying: false });
  },

  nextPuzzle: () => {
    const { currentSession } = get();
    if (!currentSession) return;

    const nextIndex = currentSession.currentPuzzleIndex + 1;
    if (nextIndex >= currentSession.puzzles.length) {
      get().endSession();
      return;
    }

    set({
      currentSession: {
        ...currentSession,
        currentPuzzleIndex: nextIndex,
      },
    });
  },

  submitAnswer: (answer, timeSpent) => {
    const { currentSession } = get();
    if (!currentSession) return false;

    const currentPuzzle = currentSession.puzzles[currentSession.currentPuzzleIndex];
    const isCorrect = answer === currentPuzzle.correctAnswer;

    const updatedSession = {
      ...currentSession,
      score: currentSession.score + (isCorrect ? currentPuzzle.points : 0),
      correctAnswers: currentSession.correctAnswers + (isCorrect ? 1 : 0),
      timeSpent: currentSession.timeSpent + timeSpent,
    };

    set({ currentSession: updatedSession });
    return isCorrect;
  },

  useHint: () => {
    const { currentSession } = get();
    if (!currentSession) return null;

    const currentPuzzle = currentSession.puzzles[currentSession.currentPuzzleIndex];
    const hintIndex = currentSession.hintsUsed;
    
    if (hintIndex >= currentPuzzle.hints.length) return null;

    set({
      currentSession: {
        ...currentSession,
        hintsUsed: currentSession.hintsUsed + 1,
        score: Math.max(0, currentSession.score - 10), // Penalty for using hints
      },
    });

    return currentPuzzle.hints[hintIndex];
  },

  setShowSettings: (show) => set({ showSettings: show }),
  setShowProfile: (show) => set({ showProfile: show }),
  setShowLeaderboard: (show) => set({ showLeaderboard: show }),
}));