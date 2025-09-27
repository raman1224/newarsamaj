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
  condition: () => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    icon: 'Trophy',
    title: "First Steps",
    description: "Completed your first lesson",
    unlocked: false,
    xpReward: 50,
    unlockDate: null,
    rarity: "common",
    condition: () => {
      const completedLessons = JSON.parse(localStorage.getItem('completed-lessons') || '[]');
      return completedLessons.length >= 1;
    }
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
    condition: () => {
      const userStats = JSON.parse(localStorage.getItem('user-stats') || '{}');
      return userStats.wordsLearned >= 100;
    }
  },
  // Add more achievements...
];

export const checkAchievements = (): Achievement[] => {
  const achievements = JSON.parse(localStorage.getItem('achievements') || JSON.stringify(ACHIEVEMENTS));
  
  const updatedAchievements = achievements.map((achievement: Achievement) => {
    if (!achievement.unlocked && achievement.condition()) {
      return {
        ...achievement,
        unlocked: true,
        unlockDate: new Date().toISOString()
      };
    }
    return achievement;
  });
  
  localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
  return updatedAchievements;
};

export const getUnlockedAchievements = (): Achievement[] => {
  const achievements = JSON.parse(localStorage.getItem('achievements') || JSON.stringify(ACHIEVEMENTS));
  return achievements.filter((a: Achievement) => a.unlocked);
};

export const getTotalXP = (): number => {
  const achievements = JSON.parse(localStorage.getItem('achievements') || JSON.stringify(ACHIEVEMENTS));
  return achievements
    .filter((a: Achievement) => a.unlocked)
    .reduce((sum: number, achievement: Achievement) => sum + achievement.xpReward, 0);
};