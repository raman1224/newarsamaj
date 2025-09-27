"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Youtube, ExternalLink, ChevronDown, List, Clock } from "lucide-react"

// Define types for our data structure
interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  duration: string;
}

interface Chapter {
  id: string;
  title: string;
  videos: Video[];
}

// Complete data structure with all chapters and videos
const videoChapters: Chapter[] = [
  {
    id: "chapter1",
    title: "Chapter 1: Conversational Newar",
    videos: [
      {
        id: "c1l1",
        title: "Newar Basics",
        description: "Learn the Newar alphabet and proper pronunciation",
        videoId: "IGkfv6_ZbeI",
        thumbnail: "https://img.youtube.com/vi/IGkfv6_ZbeI/mqdefault.jpg",
        duration: "3:58"
      },
      {
        id: "c1l2",
        title: "Hospital Conversations",
        description: "Common phrases for hospital visits in Newar",
        videoId: "ZxVY-5PQOfw",
  thumbnail: "https://img.youtube.com/vi/ZxVY-5PQOfw/mqdefault.jpg",
  duration: "6:07"
      },
      {
        id: "c1l3",
        title: "Numbers 1-50",
        description: "Learn to count from 1 to 50 in Newar",
       videoId: "Jk-nzlIj0w8",
  thumbnail: "https://img.youtube.com/vi/Jk-nzlIj0w8/mqdefault.jpg",
  duration: "6:07"
      },
     {
    id: "c1l4",  
    title: "Title of video at index 4",  
    description: "Short description for video 4",  
    videoId: "nFxasPbTcwA",  
    thumbnail: "https://img.youtube.com/vi/nFxasPbTcwA/mqdefault.jpg",  
    duration: "8:25"  // fill actual duration
  },
  {
    id: "c1l5",  
    title: "Title of video at index 5",  
    description: "Short description for video 5",  
    videoId: "z-eTpxBH7UM",  
    thumbnail: "https://img.youtube.com/vi/z-eTpxBH7UM/mqdefault.jpg",  
    duration: "4:41" 
  },
      {
        id: "c1l6",
        title: "Days of the Week",
        description: "Names of days and time expressions in Newar",
       videoId: "dThh2aJOORc",
    thumbnail: "https://img.youtube.com/vi/dThh2aJOORc/mqdefault.jpg",
        duration: "4:42"
      },
      {
        id: "c1l7",
        title: "Family Members",
        description: "Vocabulary for family relationships in Newar",
         videoId: "zga-85uNddc",
    thumbnail: "https://img.youtube.com/vi/zga-85uNddc/mqdefault.jpg",
        duration: "4:23"
      },
      {
        id: "c1l8",
        title: "Colors and Shapes",
        description: "Names of colors and basic shapes in Newar",
        videoId: "2ZF2T9IfIjc",
  thumbnail: "https://img.youtube.com/vi/2ZF2T9IfIjc/mqdefault.jpg",
        duration: "3:39"
      },
      {
        id: "c1l9",
        title: "Talking with Grandparents",
        description: "Common phrases for talking with grandparents in Newar",
        videoId: "Cusg4qs0rRQ",
        thumbnail: "https://img.youtube.com/vi/Cusg4qs0rRQ/mqdefault.jpg",
        duration: "7:03"
      },
      {
        id: "c1l10",
        title: "Counting  money 1 to 50",
        description: "Essential action words and verbs in Newar",
        videoId: "wdSSj4M_C6s",
        thumbnail: "https://img.youtube.com/vi/wdSSj4M_C6s/mqdefault.jpg",
        duration: "3:47"
      },
       {
        id: "c1l11",
        title: "Counting  money 50 to 100",
        description: "Essential action words and verbs in Newar",
        videoId: "fkPY4veGroU",
        thumbnail: "https://img.youtube.com/vi/fkPY```4veGroU/mqdefault.jpg",
        duration: "7:16"
      },
    ]
  },
  {
    id: "chapter2",
    title: "Chapter 2: Everyday Conversations",
    videos: [
  {
    id: "c2l11",
    "title": "Everyday Newar Expressions",
  "description": "Common phrases and expressions used in daily conversations in Newar.",
  "videoId": "6g3Ap7xjtEA",
  "thumbnail": "https://img.youtube.com/vi/6g3Ap7xjtEA/mqdefault.jpg",
  "duration": "6:03"
  },
  {
    id: "c2l12",
    title: "Newari Words G",
    description: "Video 12 content",
    videoId: "lmLGsYgeLLk",
    thumbnail: "https://img.youtube.com/vi/lmLGsYgeLLk/mqdefault.jpg",
    duration: "3:50"
  },
  {
    id: "c2l13",
    title: "Newari Words H",
    description: "Video 13 content",
    videoId: "Rj3_FhYhHt8",
    thumbnail: "https://img.youtube.com/vi/Rj3_FhYhHt8/mqdefault.jpg",
    duration: "3:09"
  },
  {
    id: "c2l14",
    title: "Newari Words L",
    description: "Video 14 content",
    videoId: "Rj3_FhYhHt8",
    thumbnail: "https://img.youtube.com/vi/Rj3_FhYhHt8/mqdefault.jpg",
    duration: "3:03"
  },
  {
    id: "c2l15",
    title: "Newari Words M",
    description: "Video 15 content",
    videoId: "DDyeYJTUgTM",
    thumbnail: "https://img.youtube.com/vi/DDyeYJTUgTM/mqdefault.jpg",
    duration: "3:10"
  },
  {
    id: "c2l16",
    title: "Newari Words P",
    description: "Video 16 content",
    videoId: "lBGDT0HCOZI",
    thumbnail: "https://img.youtube.com/vi/lBGDT0HCOZI/mqdefault.jpg",
    duration: "3:10"
  },
  {
    id: "c2l17",
    title: "Newari Words S",
    description: "Video 17 content",
    videoId: "241GxAgnpH4",
    thumbnail: "https://img.youtube.com/vi/241GxAgnpH4/mqdefault.jpg",
    duration: "6:37"
  },
  {
    id: "c2l18",
    title: "Newari Words T",
    description: "Video 18 content",
    videoId: "UWzGDR-2vEA",
    thumbnail: "https://img.youtube.com/vi/UWzGDR-2vEA/mqdefault.jpg",
    duration: "3:33"
  },
  {
    id: "c2l19",
    title: "Animal Names",
    description: "Video 19 content",
    videoId: "XJS2XlYTDls",
    thumbnail: "https://img.youtube.com/vi/XJS2XlYTDls/mqdefault.jpg",
    duration: "3:04"
  },
  {
    id: "c2l20",
    title: "Birth Message",
    description: "Video 20 content",
    videoId: "lDdVqLvV2nU",
    thumbnail: "https://img.youtube.com/vi/lDdVqLvV2nU/mqdefault.jpg",
    duration: "2:45"
  },
  {
    id: "c2l21",
    title: "Nickname for Friends",
    description: "Video 21 content",
    videoId: "2_bk3LWRwWg",
    thumbnail: "https://img.youtube.com/vi/2_bk3LWRwWg/mqdefault.jpg",
    duration: "4:07"
  }
]

  },
  {
  id: "chapter3",
  title: "Chapter 3: Communication in Daily Life",
  videos: [
    {
      id: "c3l22",
      title: "Stock Market",
      description: "Video about stock market",
      videoId: "_e6gzakkbik",
      thumbnail: "https://img.youtube.com/vi/_e6gzakkbik/mqdefault.jpg",
      duration: "5:36"
    },
    {
      id: "c3l23",
      title: "Thank You",
      description: "Video on expressing gratitude",
      videoId: "JhXm9w7To7w",
      thumbnail: "https://img.youtube.com/vi/JhXm9w7To7w/mqdefault.jpg",
      duration: "1:46"
    },
    {
      id: "c3l24",
      title: "K Gardai",
      description: "Video explaining K Gardai",
      videoId: "AS9wtk4BIpQ",
      thumbnail: "https://img.youtube.com/vi/AS9wtk4BIpQ/mqdefault.jpg",
      duration: "3:33"
    },
    {
      id: "c3l25",
      title: "Bhat Khayo",
      description: "Video teaching 'Bhat Khayo'",
      videoId: "J5V-tqlDm0Q",
      thumbnail: "https://img.youtube.com/vi/J5V-tqlDm0Q/mqdefault.jpg",
      duration: "6:08"
    },
    {
      id: "c3l26",
      title: "How to Say Bhat Tatau",
      description: "Video teaching how to say Bhat Tatau",
      videoId: "FAyjmH72BIE",
      thumbnail: "https://img.youtube.com/vi/FAyjmH72BIE/mqdefault.jpg",
      duration: "6:04"
    },
    {
      id: "c3l27",
      title: "Bhat Kha Na Auu",
      description: "Video teaching Bhat Kha Na Auu",
      videoId: "cscYCp3Fb9o",
      thumbnail: "https://img.youtube.com/vi/cscYCp3Fb9o/mqdefault.jpg",
      duration: "6:53"
    },
    {
      id: "c3l28",
      title: "Conversation with Dad",
      description: "Daily conversation with father",
      videoId: "XVXq3QsoVbs",
      thumbnail: "https://img.youtube.com/vi/XVXq3QsoVbs/mqdefault.jpg",
      duration: "7:39"
    },
    {
      id: "c3l29",
      title: "Nepal to Newari",
      description: "Translating from Nepal language to Newari",
      videoId: "SKj2liK1lwg",
      thumbnail: "https://img.youtube.com/vi/SKj2liK1lwg/mqdefault.jpg",
      duration: "8:30"
    },
    {
      id: "c3l30",
      title: "Conversation on Garmi",
      description: "Discussion about summer",
      videoId: "DTXCw-jf2bA",
      thumbnail: "https://img.youtube.com/vi/DTXCw-jf2bA/mqdefault.jpg",
      duration: "7:27"
    },
    {
      id: "c3l31",
      title: "Conversation Between Friends",
      description: "Daily conversation among friends",
      videoId: "ocw6RXS-BMY",
      thumbnail: "https://img.youtube.com/vi/ocw6RXS-BMY/mqdefault.jpg",
      duration: "9:11"
    }
  ]
},
 {
  id: "chapter4",
  title: "Chapter 4: Intermediate Grammar",
  videos: [
    {
      id: "c4l32",
      title: "Conversation on Chor",
      description: "Video discussing chor",
      videoId: "9h1mIMqqkEU",
      thumbnail: "https://img.youtube.com/vi/9h1mIMqqkEU/mqdefault.jpg",
      duration: "10:40"
    },
    {
      id: "c4l33",
      title: "Pagal",
      description: "Video about Pagal",
      videoId: "1L-rG1bUiDo",
      thumbnail: "https://img.youtube.com/vi/1L-rG1bUiDo/mqdefault.jpg",
      duration: "8:24"
    },
    {
      id: "c4l34",
      title: "Malai Bhok Lagyo",
      description: "Video expressing hunger",
      videoId: "uluEi7i8k0c",
      thumbnail: "https://img.youtube.com/vi/uluEi7i8k0c/mqdefault.jpg",
      duration: "7:04"
    },
    {
      id: "c4l35",
      title: "Junior School Teacher",
      description: "Video about a junior school teacher",
      videoId: "spBd5Y0chi0",
      thumbnail: "https://img.youtube.com/vi/spBd5Y0chi0/mqdefault.jpg",
      duration: "14:54"
    },
    {
      id: "c4l36",
      title: "Happy Dashain",
      description: "Video celebrating Dashain",
      videoId: "W8ZXAUZi1OI",
      thumbnail: "https://img.youtube.com/vi/W8ZXAUZi1OI/mqdefault.jpg",
      duration: "14:00"
    },
    {
      id: "c4l37",
      title: "Newari Idioms",
      description: "Video explaining Newari idioms",
      videoId: "PgweFsrdfWE",
      thumbnail: "https://img.youtube.com/vi/PgweFsrdfWE/mqdefault.jpg",
      duration: "17:47"
    },
    {
      id: "c4l38",
      title: "Marriage Sentence",
      description: "Video covering marriage-related sentences",
      videoId: "N87zNC9IrrI",
      thumbnail: "https://img.youtube.com/vi/N87zNC9IrrI/mqdefault.jpg",
      duration: "21:10"
    },
    {
      id: "c4l39",
      title: "Maicha Meaning",
      description: "Video explaining the meaning of Maicha",
      videoId: "R6nd-wPteb4",
      thumbnail: "https://img.youtube.com/vi/R6nd-wPteb4/mqdefault.jpg",
      duration: "12:16"
    },
    {
      id: "c4l40",
      title: "Bala Meaning",
      description: "Video explaining the meaning of Bala",
      videoId: "NTzl6UrTaDc",
      thumbnail: "https://img.youtube.com/vi/NTzl6UrTaDc/mqdefault.jpg",
      duration: "19:00"
    }
  ]
}

];

export default function VideoResources() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string>(videoChapters[0].id);
  const [showLessonList, setShowLessonList] = useState(false);
  
  // Get the current chapter based on selection
  const currentChapter = videoChapters.find(chapter => chapter.id === selectedChapter) || videoChapters[0];
  
  // Function to handle video selection
  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setShowLessonList(false); // Close lesson list on mobile after selection
  };

  return (
    <Card className="glass border-0 mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="h-5 w-5 text-red-600" />
          Video Learning Resources
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Watch tutorials to improve your Newar language skills. {videoChapters.reduce((total, chapter) => total + chapter.videos.length, 0)} lessons available!
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Video Player Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-black rounded-lg overflow-hidden aspect-video shadow-lg">
              {selectedVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center text-white p-4">
                    <Youtube className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Select a lesson to start learning</p>
                    <p className="text-sm text-gray-300 mt-2">Choose from the list on the right</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Info */}
            {selectedVideo && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                <p className="text-muted-foreground mt-1">{selectedVideo.description}</p>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Duration: {selectedVideo.duration}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Lesson List Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-muted p-4 rounded-lg shadow-inner">
              {/* Chapter Selector */}
              <div className="mb-4">
                <label htmlFor="chapter-select" className="block text-sm font-medium mb-1">
                  Select Chapter
                </label>
                <select
                  id="chapter-select"
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="w-full p-2 border rounded-md bg-background focus:ring-2 focus:ring-primary"
                >
                  {videoChapters.map(chapter => (
                    <option key={chapter.id} value={chapter.id}>
                      {chapter.title} ({chapter.videos.length} lessons)
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Lesson List Toggle for Mobile */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                  onClick={() => setShowLessonList(!showLessonList)}
                >
                  <span>Lessons ({currentChapter.videos.length})</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showLessonList ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              {/* Lesson List */}
              <div className={`${showLessonList ? 'block' : 'hidden'} lg:block`}>
                <h3 className="font-semibold mb-3 flex items-center">
                  <List className="h-4 w-4 mr-2" />
                  Lessons
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                  {currentChapter.videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`p-3 rounded-md cursor-pointer transition-all duration-200 ${
                        selectedVideo?.id === video.id 
                          ? 'bg-primary text-primary-foreground shadow-md' 
                          : 'bg-background hover:bg-accent hover:shadow-sm'
                      }`}
                      onClick={() => handleVideoSelect(video)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 relative">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-16 h-10 object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <Play className="h-3 w-3 text-white" />
                          </div>
                          <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-xs px-1 rounded-tl">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2">
                            Lesson {index + 1}: {video.title}
                          </h4>
                          <p className={`text-xs mt-1 line-clamp-1 ${selectedVideo?.id === video.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <a 
              href="https://www.youtube.com/playlist?list=PLMK0BcxcUWMLLoK1-ZrFgrqXoGyBaEKoq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center"
            >
              <Youtube className="h-5 w-5 text-red-600" />
              View Full Playlist on YouTube
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}