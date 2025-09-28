// utils/achievements.ts
export interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  xpReward: number;
  unlockDate: string | null;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  // Remove the 'condition' function from the interface
}

// Define the condition functions separately, keyed by achievement ID.
const achievementConditions: { [key: number]: () => boolean } = {
  1: () => {
    // Safely check for localStorage in the condition function itself
    if (typeof window === 'undefined') return false;
    const completedLessons = JSON.parse(localStorage.getItem('completed-lessons') || '[]');
    return completedLessons.length >= 1;
  },
  2: () => {
    if (typeof window === 'undefined') return false;
    const userStats = JSON.parse(localStorage.getItem('user-stats') || '{}');
    return userStats.wordsLearned >= 100;
  },
  // ... add conditions for other achievements
};

// Your base achievements data does not include the condition function.
export const ACHIEVEMENTS_DATA: Omit<Achievement, 'condition'>[] = [
  {
    id: 1,
    icon: 'Trophy',
    title: "First Steps",
    description: "Completed your first lesson",
    unlocked: false,
    xpReward: 50,
    unlockDate: null,
    rarity: "common",
    // condition is not defined here
  },
  {
    id: 2,
    icon: 'Target',
    title: "Word Master",
    description: "Learned 100 words",
    unlocked: false,
    xpReward: 100,
    unlockDate: null,
    rarity: "rare",
  },
  // ... other achievements
];

export const checkAchievements = (): Achievement[] => {
  // 1. Always use the base data structure from ACHIEVEMENTS_DATA
  const storedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
  
  // 2. Merge stored unlock status with base data, ensuring all fields are present.
  const achievements: Achievement[] = ACHIEVEMENTS_DATA.map(baseAchievement => {
    const stored = storedAchievements.find((a: Achievement) => a.id === baseAchievement.id);
    return { ...baseAchievement, ...stored }; // Stored data (like `unlocked`) overrides base data.
  });

  // 3. Check conditions and update achievements.
  const updatedAchievements = achievements.map((achievement) => {
    const conditionFn = achievementConditions[achievement.id];
    // Check if the condition exists and if the achievement is not already unlocked.
    if (!achievement.unlocked && conditionFn && conditionFn()) {
      return {
        ...achievement,
        unlocked: true,
        unlockDate: new Date().toISOString()
      };
    }
    return achievement;
  });

  // 4. Save only the data that can be serialized (no functions).
  localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
  return updatedAchievements;
};

// getUnlockedAchievements and getTotalXP functions remain largely the same,
// but ensure they also use the merging logic if you are using ACHIEVEMENTS_DATA as the base.
export const getUnlockedAchievements = (): Achievement[] => {
  const storedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
  const achievements = ACHIEVEMENTS_DATA.map(base => {
    const stored = storedAchievements.find((a: Achievement) => a.id === base.id);
    return { ...base, ...stored };
  });
  return achievements.filter((a) => a.unlocked);
};

export const getTotalXP = (): number => {
  const storedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
  const achievements = ACHIEVEMENTS_DATA.map(base => {
    const stored = storedAchievements.find((a: Achievement) => a.id === base.id);
    return { ...base, ...stored };
  });
  return achievements
    .filter((a) => a.unlocked)
    .reduce((sum, achievement) => sum + achievement.xpReward, 0);
};