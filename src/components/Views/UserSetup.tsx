import React, { useState } from 'react';
import { User, Calendar, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

export function UserSetup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(10);
  const { createUser } = useGameStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && age > 0) {
      createUser(name.trim(), age);
    }
  };

  const ageGroups = [
    { range: '6-12', label: 'Child', description: 'Fun, visual puzzles with gentle guidance', color: 'bg-green-100 text-green-800' },
    { range: '13-17', label: 'Teen', description: 'Challenging problems with real-world applications', color: 'bg-blue-100 text-blue-800' },
    { range: '18+', label: 'Adult', description: 'Complex reasoning and professional skill development', color: 'bg-purple-100 text-purple-800' },
  ];

  const getCurrentAgeGroup = () => {
    if (age <= 12) return ageGroups[0];
    if (age <= 17) return ageGroups[1];
    return ageGroups[2];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Adaptive Puzzle Academy
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Let's personalize your learning experience
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  What's your name?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              {/* Age Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  How old are you?
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                  min="1"
                  max="120"
                  required
                />
              </motion.div>

              {/* Age Group Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border"
              >
                <h3 className="font-medium mb-3">Your Learning Experience:</h3>
                <div className="space-y-3">
                  {ageGroups.map((group, index) => {
                    const isSelected = group === getCurrentAgeGroup();
                    return (
                      <motion.div
                        key={group.range}
                        initial={{ opacity: 0.5, scale: 0.95 }}
                        animate={{ 
                          opacity: isSelected ? 1 : 0.5, 
                          scale: isSelected ? 1 : 0.95 
                        }}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/10' 
                            : 'border-transparent bg-gray-50 dark:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${group.color}`}>
                                {group.label} ({group.range})
                              </span>
                              {isSelected && (
                                <span className="text-primary text-sm">← You are here</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {group.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center pt-4"
              >
                <Button
                  type="submit"
                  size="lg"
                  className="px-12 py-3 text-lg"
                  disabled={!name.trim() || age <= 0}
                >
                  Start My Journey
                  <Sparkles className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}