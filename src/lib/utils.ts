import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function calculateScore(
  correctAnswers: number,
  totalQuestions: number,
  timeBonus: number = 0
): number {
  const accuracy = correctAnswers / totalQuestions;
  const baseScore = Math.round(accuracy * 1000);
  return Math.max(0, baseScore + timeBonus);
}

export function getAgeGroup(age: number): 'child' | 'teen' | 'adult' {
  if (age <= 12) return 'child';
  if (age <= 17) return 'teen';
  return 'adult';
}

export function getDifficultyColor(difficulty: number): string {
  if (difficulty <= 2) return 'text-green-600';
  if (difficulty <= 4) return 'text-yellow-600';
  if (difficulty <= 6) return 'text-orange-600';
  return 'text-red-600';
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}