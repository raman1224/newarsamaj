'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import PageLayout from '@/components/layout/page-layout'
import Link from 'next/link'

// Types
interface NewsItem {
  id: string
  title: string
  description: string
  fullContent: string
  category: "community" | "event" | "culture" | "member" | "opportunity" | "national" | "international"
  date: string
  image?: string
  author: string
  readTime: number
  isFeatured: boolean
  reactions: {
    likes: number
    celebrations: number
    hearts: number
    userReaction?: string
  }
  comments: Comment[]
  hasAISummary: boolean
  aiSummary?: string
  tags: string[]
  link?: string
}

interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  content: string
  date: string
  likes: number
  replies: Comment[]
}

interface NewsFilters {
  category: string | null
  dateRange: { start: string | null; end: string | null }
  searchQuery: string
  tags: string[]
  sortBy: 'newest' | 'oldest' | 'mostPopular'
}

// Mock Data
const mockNewsData: NewsItem[] = [
  {
    id: '1',
    title: 'Newar Samaj Annual Cultural Festival 2024 - Preserving Our Heritage',
    description: 'Join us for the biggest cultural celebration of the year featuring traditional music, dance, cuisine, and cultural exhibitions that showcase the rich Newar heritage.',
    fullContent: 'The Newar Samaj Annual Cultural Festival 2024 promises to be an unforgettable experience...',
    category: 'event',
    date: new Date().toISOString(),
    image: '/lakhe.jpeg',
    author: 'Cultural Committee',
    readTime: 5,
    isFeatured: true,
    reactions: { likes: 124, celebrations: 89, hearts: 45 },
    comments: [
      {
        id: 'c1',
        userId: 'u1',
        userName: 'Ramesh Shrestha',
        content: 'Can\'t wait for this event! Bringing my whole family.',
        date: new Date(Date.now() - 3600000).toISOString(),
        likes: 12,
        replies: []
      }
    ],
    hasAISummary: true,
    aiSummary: 'Annual cultural festival featuring traditional Newar performances, food stalls, cultural exhibitions, and community gatherings. Expected attendance: 2000+ people.',
    tags: ['festival', 'culture', 'community'],
    link: '/culture'
  },
  {
    id: '2',
    title: 'Newari Language Learning Program - Beginner Classes Starting Soon',
    description: 'New interactive language courses designed to help younger generations connect with their roots. Register now for limited seats!',
    fullContent: 'Our new language program focuses on practical conversation skills...',
    category: 'opportunity',
    date: new Date(Date.now() - 86400000).toISOString(),
    author: 'Education Wing',
    readTime: 3,
    isFeatured: false,
    reactions: { likes: 87, celebrations: 34, hearts: 23 },
    comments: [],
    hasAISummary: true,
    aiSummary: '12-week beginner course focusing on basic conversation, writing, and cultural context. Classes every Saturday.',
    tags: ['language', 'education', 'heritage'],
    link: '/language/learn'
  },
  {
    id: '3',
    title: 'Community Health Camp - Free Medical Checkups This Weekend',
    description: 'Free health checkups, blood tests, and consultations with qualified doctors for all community members.',
    fullContent: 'In collaboration with local hospitals, we are organizing...',
    category: 'community',
    date: new Date(Date.now() - 172800000).toISOString(),
    image: '/images/health-camp.jpg',
    author: 'Health Committee',
    readTime: 4,
    isFeatured: true,
    reactions: { likes: 156, celebrations: 67, hearts: 89 },
    comments: [],
    hasAISummary: false,
    tags: ['health', 'community-service', 'wellness']
  },
  {
    id: '4',
    title: 'AI-Powered Newar Language Tutor Now Available',
    description: 'Our new AI tutor helps community members learn Newar language with personalized lessons and real-time feedback.',
    fullContent: 'The AI tutor uses advanced machine learning algorithms...',
    category: 'opportunity',
    date: new Date(Date.now() - 259200000).toISOString(),
    image: '/neptonew.png',
    author: 'Technology Team',
    readTime: 6,
    isFeatured: false,
    reactions: { likes: 234, celebrations: 145, hearts: 178 },
    comments: [],
    hasAISummary: true,
    aiSummary: 'AI tutor provides personalized language lessons, pronunciation feedback, and cultural context. Available 24/7.',
    tags: ['ai', 'language', 'technology'],
    link: '/language/ai-tutor'
  },
  {
    id: '5',
    title: 'Traditional Cooking Workshop - Learn Authentic Newar Recipes',
    description: 'Hands-on cooking classes teaching traditional Newar dishes passed down through generations.',
    fullContent: 'Learn to cook authentic Newar cuisine from expert chefs...',
    category: 'culture',
    date: new Date(Date.now() - 345600000).toISOString(),
    author: 'Cultural Wing',
    readTime: 4,
    isFeatured: false,
    reactions: { likes: 98, celebrations: 45, hearts: 67 },
    comments: [],
    hasAISummary: false,
    tags: ['cooking', 'tradition', 'workshop']
  },
  {
    id: '6',
    title: 'Annual Newar Festivals Calendar 2024 Released',
    description: 'Complete schedule of all major Newar festivals and cultural events for the coming year.',
    fullContent: 'The calendar includes detailed information about each festival...',
    category: 'event',
    date: new Date(Date.now() - 432000000).toISOString(),
    author: 'Cultural Committee',
    readTime: 5,
    isFeatured: false,
    reactions: { likes: 187, celebrations: 76, hearts: 54 },
    comments: [],
    hasAISummary: true,
    aiSummary: 'Calendar includes 25+ festivals with dates, locations, and special events.',
    tags: ['festivals', 'calendar', 'events'],
    link: '/culture/festivals'
  }
];

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading community news...</p>
    </div>
  </div>
);

const NewsHeader = ({ todayNews, t }: { todayNews: NewsItem[], t: any }) => {
  const router = useRouter();
  const featuredNews = todayNews.find(item => item.isFeatured) || todayNews[0];

  const handleFeaturedClick = () => {
    if (featuredNews?.link) {
      router.push(featuredNews.link);
    }
  };

  return (
    <div className="relative mb-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          {t('news.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('news.subtitle')}
        </p>
      </div>
      
      {featuredNews && (
        <div 
          className={`relative group cursor-pointer transform hover:scale-[1.02] transition-transform duration-500 ${
            featuredNews.link ? 'cursor-pointer' : ''
          }`}
          onClick={handleFeaturedClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 opacity-60"></div>
          
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
              {featuredNews.image && (
                <div className="lg:w-2/5">
                  <div className="relative overflow-hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              )}
              
              <div className="lg:flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-sm font-bold shadow-lg">
                      {t('news.todaysHighlight')}
                    </span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm border border-secondary/30">
                      {t(`news.categories.${featuredNews.category}`)}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {featuredNews.readTime} min read
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {featuredNews.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredNews.description}
                  </p>
                  
                  {featuredNews.hasAISummary && featuredNews.aiSummary && (
                    <div 
                      className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl mb-6 border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/language/ai-tutor');
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                        <span className="font-semibold text-foreground flex items-center gap-2">
                          <span>🤖</span> {t('news.aiSummary')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {featuredNews.aiSummary}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>By {featuredNews.author}</span>
                    <span>•</span>
                    <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (featuredNews.link) {
                          router.push(featuredNews.link);
                        }
                      }}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                    >
                      {featuredNews.link ? 'Learn More' : t('news.readFullStory')}
                    </button>
                    <button className="p-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-colors">
                      <span className="text-lg">📖</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NewsCard = ({ 
  item, 
  t, 
  index,
  onReaction,
  onCommentClick 
}: { 
  item: NewsItem
  t: any
  index: number
  onReaction: (itemId: string, type: string) => void
  onCommentClick: (itemId: string) => void
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localReactions, setLocalReactions] = useState(item.reactions);
  const router = useRouter();

  const handleCardClick = () => {
    if (item.link) {
      router.push(item.link);
    }
  };

  const handleAISummaryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.hasAISummary) {
      router.push('/language/ai-tutor');
    }
  };

  const handleReaction = (type: 'likes' | 'celebrations' | 'hearts', e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1,
      userReaction: type
    }));
    onReaction(item.id, type);
  };

  const getReactionIcon = (type: string) => {
    switch (type) {
      case 'likes': return '👍';
      case 'celebrations': return '🎉';
      case 'hearts': return '❤️';
      default: return '👍';
    }
  };

  return (
    <div 
      className={`relative group transition-all duration-500 ${
        isHovered ? 'transform -translate-y-3' : ''
      } ${item.link ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl transform transition-all duration-700 ${
        isHovered ? 'scale-110 opacity-100 rotate-1' : 'scale-100 opacity-0'
      }`}></div>
      
      <div className={`relative bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-border/50 transform transition-all duration-500 overflow-hidden ${
        isHovered ? 'shadow-2xl scale-105 border-primary/30' : 'hover:shadow-lg'
      }`}>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-semibold border border-secondary/30">
              {t(`news.categories.${item.category}`)}
            </span>
            {item.isFeatured && (
              <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-semibold">
                🔥 Featured
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date(item.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        {item.image && (
          <div className="mb-4 overflow-hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-500">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {item.description}
          </p>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {item.hasAISummary && (
          <div 
            onClick={handleAISummaryClick}
            className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-foreground">
                {t('news.aiSummaryAvailable')}
              </span>
            </div>
            <span className="text-xs text-muted-foreground ml-auto">
              🤖 AI Powered
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {(['likes', 'celebrations', 'hearts'] as const).map(type => (
              <button
                key={type}
                onClick={(e) => handleReaction(type, e)}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                  localReactions.userReaction === type 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                <span className="text-sm">{getReactionIcon(type)}</span>
                <span className="text-xs font-medium">{localReactions[type]}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onCommentClick(item.id);
            }}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>💬</span>
            <span>{item.comments.length} {t('news.comments')}</span>
          </button>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>👤 {item.author}</span>
            <span>•</span>
            <span>⏱️ {item.readTime} min</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => e.stopPropagation()} 
              className="p-2 hover:bg-muted rounded-xl transition-colors" 
              title="Share"
            >
              <span className="text-lg">📤</span>
            </button>
            <button 
              onClick={(e) => e.stopPropagation()} 
              className="p-2 hover:bg-muted rounded-xl transition-colors" 
              title="Bookmark"
            >
              <span className="text-lg">🔖</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (item.link) {
                  router.push(item.link);
                }
              }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors text-sm font-medium"
            >
              {item.link ? 'Explore' : t('news.readMore')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsGrid = ({ 
  news, 
  t,
  onReaction,
  onCommentClick 
}: { 
  news: NewsItem[]
  t: any
  onReaction: (itemId: string, type: string) => void
  onCommentClick: (itemId: string) => void
}) => {
  if (news.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📰</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t('news.noNewsFound')}
        </h3>
        <p className="text-muted-foreground">
          {t('news.tryChangingFilters')}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          {t('news.latestUpdates')}
          <span className="text-muted-foreground ml-2 text-lg">({news.length})</span>
        </h2>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>📊 {news.length} articles</span>
          <span>•</span>
          <span>🔥 {news.filter(item => item.isFeatured).length} featured</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <NewsCard 
            key={item.id} 
            item={item} 
            t={t} 
            index={index}
            onReaction={onReaction}
            onCommentClick={onCommentClick}
          />
        ))}
      </div>
    </div>
  );
};

const NewsFilters = ({ 
  filters, 
  setFilters, 
  t,
  allTags 
}: { 
  filters: any
  setFilters: any
  t: any
  allTags: string[]
}) => {
  const categories = ['community', 'event', 'culture', 'member', 'opportunity', 'national', 'international'] as const;

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-border/50 sticky top-24">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span>🔍</span> {t('news.filters')}
      </h3>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={t('news.searchPlaceholder')}
            value={filters.searchQuery}
            onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          />
          <span className="absolute right-3 top-3 text-muted-foreground">🔎</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t('news.categories')}
        </label>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilters({
                ...filters, 
                category: filters.category === category ? null : category
              })}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                filters.category === category 
                  ? 'bg-primary text-primary-foreground shadow-lg transform scale-105' 
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              {t(`news.categories.${category}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t('news.sortBy')}
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
        >
          <option value="newest">{t('news.newest')}</option>
          <option value="oldest">{t('news.oldest')}</option>
          <option value="mostPopular">{t('news.mostPopular')}</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t('news.popularTags')}
        </label>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 10).map(tag => (
            <button
              key={tag}
              onClick={() => setFilters({
                ...filters,
                tags: filters.tags.includes(tag) 
                  ? filters.tags.filter((t: string) => t !== tag)
                  : [...filters.tags, tag]
              })}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                filters.tags.includes(tag)
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setFilters({
          category: null,
          dateRange: { start: null, end: null },
          searchQuery: '',
          tags: [],
          sortBy: 'newest'
        })}
        className="w-full px-4 py-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-all duration-300 font-semibold transform hover:scale-105"
      >
        {t('news.resetFilters')}
      </button>
    </div>
  );
};

const EmailSubscription = ({ t }: { t: any }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 shadow-xl border border-primary/20">
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">📧</div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          {t('news.stayUpdated')}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t('news.subscriptionDescription')}
        </p>
      </div>
      
      {isSubscribed ? (
        <div className="text-center py-4">
          <div className="text-green-600 font-semibold text-lg mb-2">
            🎉 {t('news.subscriptionSuccess')}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('news.welcomeMessage')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('news.emailPlaceholder')}
            required
            className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          >
            {t('news.subscribeNow')}
          </button>
        </form>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-3">
        {t('news.privacyNotice')}
      </div>
    </div>
  );
};

const NewsArchive = ({ news, t }: { news: NewsItem[], t: any }) => {
  const archivedNews = news.filter(item => {
    const newsDate = new Date(item.date);
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return newsDate < sevenDaysAgo;
  });

  if (archivedNews.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-border/50">
      <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
        <span>📚</span> {t('news.newsArchive')}
        <span className="text-lg text-muted-foreground">({archivedNews.length})</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {archivedNews.slice(0, 4).map((item, index) => (
          <div key={item.id} className="bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                {t(`news.categories.${item.category}`)}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
            <h4 className="font-semibold text-foreground line-clamp-2 mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
      {archivedNews.length > 4 && (
        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-colors font-semibold">
            {t('news.viewFullArchive')} ({archivedNews.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default function NewsPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [filters, setFilters] = useState<NewsFilters>({
    category: null,
    dateRange: { start: null, end: null },
    searchQuery: '',
    tags: [],
    sortBy: 'newest'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNews(mockNewsData);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let result = [...news];

    if (filters.category) {
      result = result.filter(item => item.category === filters.category);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        item.author.toLowerCase().includes(query)
      );
    }

    if (filters.tags.length > 0) {
      result = result.filter(item =>
        item.tags.some(tag => filters.tags.includes(tag))
      );
    }

    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'mostPopular':
        result.sort((a, b) => {
          const aPopularity = a.reactions.likes + a.reactions.hearts + a.reactions.celebrations;
          const bPopularity = b.reactions.likes + b.reactions.hearts + b.reactions.celebrations;
          return bPopularity - aPopularity;
        });
        break;
    }

    setFilteredNews(result);
  }, [filters, news]);

  const todayNews = useMemo(() => {
    const today = new Date().toDateString();
    return filteredNews.filter(item => 
      new Date(item.date).toDateString() === today
    );
  }, [filteredNews]);

  const allTags = useMemo(() => {
    const tags = news.flatMap(item => item.tags);
    return Array.from(new Set(tags));
  }, [news]);

  const handleReaction = (itemId: string, type: string) => {
    console.log(`Reaction: ${type} for item ${itemId}`);
  };

  const handleCommentClick = (itemId: string) => {
    console.log(`View comments for item ${itemId}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <NewsHeader todayNews={todayNews} t={t} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            <div className="lg:col-span-3">
              <NewsGrid 
                news={filteredNews} 
                t={t}
                onReaction={handleReaction}
                onCommentClick={handleCommentClick}
              />
              <NewsArchive news={filteredNews} t={t} />
            </div>

            <div className="lg:col-span-1 space-y-8">
              <NewsFilters 
                filters={filters}
                setFilters={setFilters}
                t={t}
                allTags={allTags}
              />
              
              <EmailSubscription t={t} />
              
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-border/50">
                <h4 className="font-semibold text-foreground mb-4">📊 {t('news.communityStats')}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('news.totalArticles')}</span>
                    <span className="font-semibold">{news.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('news.thisMonth')}</span>
                    <span className="font-semibold">{todayNews.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('news.activeUsers')}</span>
                    <span className="font-semibold">1.2k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}