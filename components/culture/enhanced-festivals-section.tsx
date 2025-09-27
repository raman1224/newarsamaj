// components/culture/enhanced-festivals-section.tsx
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Sparkles, Play, Heart, Video, Utensils, X, ExternalLink, Star, Landmark, Music, Drum } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"

interface Festival {
  id: number
  name: string
  nameNewa: string
  nameNepali: string
  date: string
  nepaliDate: string
  duration: string
  location: string
  description: string
  significance: string
  image: string
  category: "religious" | "cultural" | "seasonal" | "agricultural"
  activities: string[]
  traditions: string[]
  godsWorshipped: string[]
  food: string[]
  isUpcoming: boolean
  videoUrl?: string
  historicalOrigin: string
  rituals: string[]
  culturalImpact: string
  month: string
  highlights: string[]
  bestTimeToVisit: string
  visitorsInfo: string
  relatedFestivals: string[]
}

// Complete festival data based on research
const festivals: Festival[] = [
  {
    id: 1,
    name: "Indra Jatra",
    nameNewa: "इन्द्र जात्रा",
    nameNepali: "इन्द्र जात्रा",
    date: "September 26-28, 2024",
    nepaliDate: "असोज १०-१२, २०८१",
    duration: "8 days",
    location: "Kathmandu Durbar Square and surrounding areas",
    description: "One of the most spectacular festivals of Kathmandu Valley, honoring Lord Indra, the king of heaven and god of rain. The festival features magnificent chariot processions, traditional dances, and the living goddess Kumari.",
    significance: "Marks the end of monsoon season and honors Indra for providing rain. Also celebrates the victory of gods over demons.",
    image: "/indra-jatra.jpg",
    category: "religious",
    activities: ["Chariot Procession", "Kumari Jatra", "Lakhe Dance", "Pulukisi Dance", "Cultural Programs", "Mask Dances"],
    traditions: ["Kumari Jatra", "Lakhe Dance", "Pulukisi Dance", "Traditional Music", "Oil Lamp Lighting", "Indra Dhwaja Raising"],
    godsWorshipped: ["Indra", "Kumari", "Bhairav", "Ganesh"],
    food: ["Samay Baji", "Yomari", "Chatamari", "Aila", "Bara"],
    isUpcoming: true,
    videoUrl: "https://www.youtube.com/watch?v=FWxVcEVBW7c",
    historicalOrigin: "Started during the reign of King Gunakamadeva in the 10th century to commemorate the founding of Kathmandu. The festival has been celebrated continuously for over a thousand years.",
    rituals: ["Indra Dhwaja Raising", "Kumari Procession", "Bhairav Mask Display", "Chariot Pulling", "Traditional Dances"],
    culturalImpact: "Showcases Newar unity and preserves ancient traditions. Recognized as UNESCO Intangible Cultural Heritage.",
    month: "August/September",
    highlights: ["Kumari's chariot procession", "Lakhe dance performances", "Giant mask of Bhairav display", "Evening cultural programs"],
    bestTimeToVisit: "Evening for cultural performances, daytime for processions",
    visitorsInfo: "Crowded but safe. Wear comfortable shoes. Photography allowed but respect rituals.",
    relatedFestivals: ["Dashain", "Tihar", "Gai Jatra"]
  },
  {
    id: 2,
    name: "Bisket Jatra",
    nameNewa: "बिस्केत जात्रा",
    nameNepali: "बिस्केत जात्रा",
    date: "April 13-17, 2024",
    nepaliDate: "बैशाख १-५, २०८१",
    duration: "5 days",
    location: "Bhaktapur Durbar Square",
    description: "The New Year festival of Bhaktapur featuring the pulling of massive chariots and dramatic tug-of-war between different communities.",
    significance: "Celebrates the Nepali New Year and commemorates the victory over a serpent demon.",
    image: "/bisketjatra.jpg",
    category: "cultural",
    activities: ["Chariot Pulling", "Tug-of-War", "Pole Raising", "Cultural Shows"],
    traditions: ["Chariot Procession", "Sindur Jatra", "Tug-of-War between communities"],
    godsWorshipped: ["Bhairav", "Bhadrakali"],
    food: ["Juju Dhau", "Bara", "Chatamari", "Yomari"],
    isUpcoming: false,
    historicalOrigin: "Dating back to the Malla period, this festival marks the beginning of the solar new year in Bhaktapur.",
    rituals: ["Pole raising ceremony", "Chariot pulling", "Sindur playing"],
    culturalImpact: "Major tourist attraction and important community bonding event",
    month: "April",
    highlights: ["Giant chariot pulling", "Vibrant sindur (vermilion) celebration", "Traditional music and dance"],
    bestTimeToVisit: "Early morning for pole raising, evening for cultural events",
    visitorsInfo: "Very crowded. Wear clothes you don't mind getting colored. Stay hydrated.",
    relatedFestivals: ["Nepal New Year", "Sithi Nakha"]
  },
  {
    id: 3,
    name: "Rato Machhindranath Jatra",
    nameNewa: "रातो मच्छिन्द्रनाथ जात्रा",
    nameNepali: "रातो मच्छिन्द्रनाथ जात्रा",
    date: "April 25 - May 25, 2024",
    nepaliDate: "बैशाख १२ - जेठ ११, २०८१",
    duration: "1 month",
    location: "Patan and surrounding areas",
    description: "The longest and one of the most important chariot festivals honoring Rato Machhindranath, the god of rain and harvest.",
    significance: "Ensures good rainfall and abundant harvest for the coming year.",
    image: "/ratomachin-jatra.jpg",
    category: "religious",
    activities: ["Chariot Construction", "Procession", "Bhoto Jatra", "Cultural Events"],
    traditions: ["Chariot building", "Month-long procession", "Bhoto display ceremony"],
    godsWorshipped: ["Machhindranath", "Bunga Dyah"],
    food: ["Kwati", "Wo", "Bara", "Juju Dhau"],
    isUpcoming: false,
    historicalOrigin: "Started during the reign of King Narendra Deva in the 6th century to end a prolonged drought.",
    rituals: ["Chariot construction", "Daily procession", "Bhoto Jatra final ceremony"],
    culturalImpact: "Unites people from Patan and surrounding villages. Important for agricultural community.",
    month: "April/May",
    highlights: ["50-foot tall chariot", "Bhoto Jatra (vest display)", "Month-long celebrations"],
    bestTimeToVisit: "Weekends for larger crowds and events",
    visitorsInfo: "Long festival - choose specific events to attend. Bhoto Jatra is the climax.",
    relatedFestivals: ["Seto Machhindranath Jatra", "Bunga Dyah Jatra"]
  },
  {
    id: 4,
    name: "Gai Jatra",
    nameNewa: "गाई जात्रा",
    nameNepali: "गाई जात्रा",
    date: "August 15-18, 2024",
    nepaliDate: "श्रावण ३० - भाद्र २, २०८१",
    duration: "3 days",
    location: "Kathmandu Valley",
    description: "The festival of cows commemorating family members who died during the past year. Features humorous performances and social satire.",
    significance: "Helps families cope with loss and provides social commentary through humor.",
    image: "/lakhe.jpeg",
    category: "cultural",
    activities: ["Cow Procession", "Satire Performances", "Comedy Shows", "Cultural Programs"],
    traditions: ["Children dressed as cows", "Satirical performances", "Comedy and humor"],
    godsWorshipped: ["Yama", "Ancestors"],
    food: ["Samay Baji", "Kwati", "Yomari", "Aila"],
    isUpcoming: true,
    historicalOrigin: "Started by King Pratap Malla in the 17th century to comfort his queen after their son's death.",
    rituals: ["Cow procession", "Satire performances", "Remembering departed souls"],
    culturalImpact: "Unique festival combining mourning with humor and social commentary.",
    month: "August",
    highlights: ["Children dressed as cows", "Humorous performances", "Social and political satire"],
    bestTimeToVisit: "Morning processions, evening cultural programs",
    visitorsInfo: "Respectful but humorous atmosphere. Good for photography.",
    relatedFestivals: ["Tij", "Krishna Janmashtami"]
  },
  {
    id: 5,
    name: "Yomari Punhi",
    nameNewa: "योमरी पुन्हि",
    nameNepali: "योमरी पुन्हि",
    date: "December 21-22, 2024",
    nepaliDate: "पुष ६-७, २०८१",
    duration: "2 days",
    location: "Throughout Kathmandu Valley",
    description: "Harvest festival dedicated to the goddess Annapurna, featuring the making and sharing of Yomari (rice flour dumplings with sweet fillings).",
    significance: "Thanksgiving for the rice harvest and prayers for abundance.",
    image: "/yomari.jpg",
    category: "agricultural",
    activities: ["Yomari Making", "Family Gatherings", "Offerings", "Community Feasts"],
    traditions: ["Making yomari", "Family prayers", "Sharing with neighbors"],
    godsWorshipped: ["Annapurna", "Kubera"],
    food: ["Yomari", "Chaku", "Sesame sweets", "Rice dishes"],
    isUpcoming: false,
    historicalOrigin: "Ancient harvest festival dating back to the Licchavi period, celebrating the rice harvest.",
    rituals: ["Yomari preparation", "Offerings to gods", "Family celebrations"],
    culturalImpact: "Preserves traditional food culture and strengthens community bonds.",
    month: "November/December",
    highlights: ["Yomari making demonstrations", "Family gatherings", "Traditional sweets"],
    bestTimeToVisit: "Homes and local communities for authentic experience",
    visitorsInfo: "Participate in yomari making. Many families welcome visitors.",
    relatedFestivals: ["Mha Puja", "New Year"]
  },
  {
    id: 6,
    name: "Mha Puja",
    nameNewa: "म्हपूजा",
    nameNepali: "म्हपूजा",
    date: "November 2, 2024",
    nepaliDate: "कार्तिक १७, २०८१",
    duration: "1 day",
    location: "Newar households throughout Nepal",
    description: "Newar New Year celebration involving the worship of one's own body and soul for purification and renewal.",
    significance: "Celebrates the Newar New Year and emphasizes self-purification.",
    image: "/mapuja.jpg",
    category: "religious",
    activities: ["Self Worship", "Family Gatherings", "Feasts", "Rituals"],
    traditions: ["Mandala drawing", "Self-worship ritual", "Family feasting"],
    godsWorshipped: ["Self", "Ancestors", "Household deities"],
    food: ["Samay Baji", "Wo", "Bara", "Aila", "Various meats"],
    isUpcoming: false,
    historicalOrigin: "Ancient Newar tradition celebrating the new year and worshipping the divine within oneself.",
    rituals: ["Mandala creation", "108 offerings", "Self-worship ceremony"],
    culturalImpact: "Unique philosophical festival emphasizing self-worth and purification.",
    month: "October/November",
    highlights: ["Intricate mandala designs", "Family rituals", "Grand feasts"],
    bestTimeToVisit: "Newar households (by invitation)",
    visitorsInfo: "Usually private family events. Respectful observation if invited.",
    relatedFestivals: ["New Year", "Tihar", "Yomari Punhi"]
  },
  {
    id: 7,
    name: "Sithi Nakha",
    nameNewa: "सिथि नखः",
    nameNepali: "सिथि नखा",
    date: "June 5, 2024",
    nepaliDate: "जेठ २३, २०८१",
    duration: "1 day",
    location: "Kathmandu Valley",
    description: "Festival dedicated to cleaning water sources and worshiping Kumar, the god of war and youth.",
    significance: "Environmental festival emphasizing cleanliness and water source preservation.",
    image: "/sithi.jpg",
    category: "seasonal",
    activities: ["Pond Cleaning", "Well Worship", "Family Gatherings", "Traditional Meals"],
    traditions: ["Cleaning water sources", "Kumar worship", "Family feasts"],
    godsWorshipped: ["Kumar", "Nagas", "Water deities"],
    food: ["Wo", "Bara", "Chatamari", "Newari sweets"],
    isUpcoming: false,
    historicalOrigin: "Ancient festival marking the beginning of monsoon and emphasizing environmental cleanliness.",
    rituals: ["Water source cleaning", "Kumar puja", "Family rituals"],
    culturalImpact: "Important environmental conservation tradition.",
    month: "May/June",
    highlights: ["Community cleaning activities", "Traditional rituals", "Family gatherings"],
    bestTimeToVisit: "Early morning at water sources",
    visitorsInfo: "Participate in cleaning activities. Respectful observation of rituals.",
    relatedFestivals: ["Rato Machhindranath Jatra", "Monsoon festivals"]
  }
]

export function EnhancedFestivalsSection() {
  const [selectedFestival, setSelectedFestival] = React.useState<Festival | null>(null)
  const [activeCategory, setActiveCategory] = React.useState<string>("all")
  const { t, locale: language } = useTranslation()

  const filteredFestivals = activeCategory === "all" 
    ? festivals 
    : festivals.filter(festival => festival.category === activeCategory)

  const upcomingFestivals = festivals.filter(f => f.isUpcoming).slice(0, 5)

  const getFestivalName = (festival: Festival) => {
    switch (language) {
      case 'ne': return festival.nameNepali
      case 'new': return festival.nameNewa
      default: return festival.name
    }
  }

  const getDisplayDate = (festival: Festival) => {
    return language === 'ne' ? festival.nepaliDate : festival.date
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'ne' ? 'नेवार पर्वहरू' : language === 'new' ? 'नेवाः जात्रा' : 'Newar Festivals'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ne' 
              ? 'नेपालको सांस्कृतिक राजधानी काठमाडौं उपत्यकामा मनाइने परम्परागत नेवार पर्वहरूको सम्पूर्ण जानकारी'
              : language === 'new'
              ? 'नेपाःया सांस्कृतिक राजधानी येँ उपत्यकाइगु नेवाः जात्रातेतु कथं'
              : 'Discover the rich tapestry of Newar festivals celebrated in the cultural capital of Nepal - Kathmandu Valley'
            }
          </p>
        </div>

        {/* Join Community Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ne' ? 'सामुदायिक सहभागिता' : language === 'new' ? 'समुदाय याये' : 'Join the Community'}
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {language === 'ne' 
              ? 'नेवार संस्कृति र पर्वहरूबारे थप जान्न र सहभागी हुन हाम्रो समुदायमा सामेल हुनुहोस्'
              : language === 'new'
              ? 'नेवाः संस्कृति व जात्रा धंका मलाःगु ख्यःता समुदायस जुये'
              : 'Learn more about Newar culture and festivals by joining our vibrant community'
            }
          </p>
          <Link href="/community/join">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              {language === 'ne' ? 'सामेल हुनुहोस्' : language === 'new' ? 'जुये' : 'Join Community'}
            </Button>
          </Link>
        </div>

        {/* Main Tabs Section */}
        <Tabs defaultValue="calendar" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border">
            <TabsTrigger 
              value="calendar" 
              className="flex items-center gap-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl p-3 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              {language === 'ne' ? 'पात्रो' : language === 'new' ? 'नेपाः पात्रो' : 'Calendar'}
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="flex items-center gap-3 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-xl p-3 transition-all duration-300"
            >
              <Sparkles className="h-5 w-5" />
              {language === 'ne' ? 'आगामी' : language === 'new' ? 'लाःगु' : 'Upcoming'}
            </TabsTrigger>
            <TabsTrigger 
              value="traditions" 
              className="flex items-center gap-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl p-3 transition-all duration-300"
            >
              <Drum className="h-5 w-5" />
              {language === 'ne' ? 'परम्परा' : language === 'new' ? 'परम्परा' : 'Traditions'}
            </TabsTrigger>
            <TabsTrigger 
              value="religious" 
              className="flex items-center gap-3 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-xl p-3 transition-all duration-300"
            >
              <Landmark className="h-5 w-5" />
              {language === 'ne' ? 'धार्मिक' : language === 'new' ? 'धार्मिक' : 'Religious'}
            </TabsTrigger>
          </TabsList>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-8">
            {/* Category Filter */}
            <div className="flex justify-center">
              <div className="flex gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border">
                {["all", "religious", "cultural", "seasonal", "agricultural"].map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`capitalize rounded-lg px-4 py-2 transition-all duration-300 ${
                      activeCategory === category 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category === "all" 
                      ? language === 'ne' ? 'सबै पर्व' : language === 'new' ? 'सबू जात्रा' : 'All Festivals'
                      : category
                    }
                  </Button>
                ))}
              </div>
            </div>

            {/* Festivals Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFestivals.map((festival) => (
                <Card 
                  key={festival.id} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={festival.image} 
                      alt={festival.name} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {festival.isUpcoming && (
                      <Badge variant="default" className="absolute top-3 right-3 bg-green-600 animate-pulse">
                        <Sparkles className="mr-1 h-3 w-3" />
                        {language === 'ne' ? 'आगामी' : language === 'new' ? 'लाःगु' : 'Upcoming'}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-orange-500 text-white">
                      {festival.month}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {getFestivalName(festival)}
                    </h3>
                    <p className="text-sm text-orange-600 mb-3 font-medium">{getDisplayDate(festival)}</p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        {festival.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span className="truncate">{festival.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{festival.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full bg-orange-50 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300 transition-all duration-300 group-hover:scale-105"
                      onClick={() => setSelectedFestival(festival)}
                    >
                      {language === 'ne' ? 'विवरण हेर्नुहोस्' : language === 'new' ? 'विवरण स्वना' : 'View Details'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Upcoming Tab */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="space-y-6">
              {upcomingFestivals.map((festival) => (
                <Card key={festival.id} className="hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-r from-white to-orange-50/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative">
                        <img src={festival.image} alt={festival.name} className="w-24 h-24 object-cover rounded-2xl shadow-lg" />
                        <div className="absolute -top-2 -right-2">
                          <Badge variant="default" className="bg-red-500 animate-pulse">
                            <Sparkles className="mr-1 h-3 w-3" />
                            {language === 'ne' ? 'आगामी' : language === 'new' ? 'लाःगु' : 'Upcoming'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-800">{getFestivalName(festival)}</h3>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 w-fit mx-auto md:mx-0">
                            {getDisplayDate(festival)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{festival.description}</p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {festival.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {festival.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Landmark className="h-4 w-4" />
                            {festival.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <Calendar className="mr-2 h-4 w-4" />
                          {language === 'ne' ? 'पात्रोमा थप्नुहोस्' : language === 'new' ? 'पात्रोस थप' : 'Add to Calendar'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setSelectedFestival(festival)}
                          className="border-orange-300 text-orange-600 hover:bg-orange-50"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          {language === 'ne' ? 'विवरण हेर्नुहोस्' : language === 'new' ? 'विवरण स्वना' : 'Details'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Traditions Tab */}
          <TabsContent value="traditions" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {festivals.filter(f => f.traditions.length > 0).map((festival) => (
                <Card key={festival.id} className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-purple-800">{getFestivalName(festival)}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <Drum className="h-4 w-4" />
                        {language === 'ne' ? 'मुख्य परम्पराहरू' : language === 'new' ? 'मू परम्परा' : 'Key Traditions'}
                      </h4>
                      <ul className="space-y-2">
                        {festival.traditions.slice(0, 3).map((tradition, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-purple-600">
                            <Star className="h-3 w-3 fill-purple-400 text-purple-400" />
                            {tradition}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                      onClick={() => setSelectedFestival(festival)}
                    >
                      {language === 'ne' ? 'सबै परम्परा हेर्नुहोस्' : language === 'new' ? 'सबू परम्परा स्वना' : 'View All Traditions'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Religious Tab */}
          <TabsContent value="religious" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {festivals.filter(f => f.category === 'religious').map((festival) => (
                <Card key={festival.id} className="border-0 bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-xl transition-all duration-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-green-800">{getFestivalName(festival)}</CardTitle>
                    <p className="text-sm text-green-600">{getDisplayDate(festival)}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <Landmark className="h-4 w-4" />
                        {language === 'ne' ? 'पूजा गरिने देवता' : language === 'new' ? 'पूजा यायेगु द्यः' : 'Gods Worshipped'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {festival.godsWorshipped.map((god, index) => (
                          <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                            {god}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-green-300 text-green-600 hover:bg-green-50"
                      onClick={() => setSelectedFestival(festival)}
                    >
                      {language === 'ne' ? 'धार्मिक विवरण हेर्नुहोस्' : language === 'new' ? 'धार्मिक विवरण स्वना' : 'View Religious Details'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Festival Detail Modal */}
        {selectedFestival && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <Card className="max-w-6xl w-full max-h-[95vh] overflow-y-auto border-0 shadow-2xl">
              <CardHeader className="relative p-0">
                <div className="relative">
                  <img src={selectedFestival.image} alt={selectedFestival.name} className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-10 h-10 p-0"
                    onClick={() => setSelectedFestival(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h2 className="text-4xl font-bold mb-2">{getFestivalName(selectedFestival)}</h2>
                    <p className="text-xl opacity-90">{getDisplayDate(selectedFestival)}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Basic Info Grid */}
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <div className="font-semibold text-orange-700">{selectedFestival.duration}</div>
                      <div className="text-sm text-orange-600">{language === 'ne' ? 'अवधि' : language === 'new' ? 'अवधि' : 'Duration'}</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-green-700">{selectedFestival.location}</div>
                      <div className="text-sm text-green-600">{language === 'ne' ? 'स्थान' : language === 'new' ? 'थां' : 'Location'}</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold text-purple-700">{selectedFestival.month}</div>
                      <div className="text-sm text-purple-600">{language === 'ne' ? 'महिना' : language === 'new' ? 'महिना' : 'Month'}</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <Landmark className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-blue-700 capitalize">{selectedFestival.category}</div>
                      <div className="text-sm text-blue-600">{language === 'ne' ? 'प्रकार' : language === 'new' ? 'प्रकार' : 'Category'}</div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'विवरण' : language === 'new' ? 'विवरण' : 'Description'}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedFestival.description}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'सांस्कृतिक महत्व' : language === 'new' ? 'सांस्कृतिक महत्व' : 'Cultural Significance'}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedFestival.significance}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'ऐतिहासिक उत्पत्ति' : language === 'new' ? 'ऐतिहासिक उत्पत्ति' : 'Historical Origin'}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{selectedFestival.historicalOrigin}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'परम्परागत खानाहरू' : language === 'new' ? 'परम्परागत खाना' : 'Traditional Foods'}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedFestival.food.map((food, index) => (
                            <div key={index} className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                              <Utensils className="h-4 w-4 text-amber-600" />
                              <span className="text-sm font-medium text-amber-700">{food}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'मुख्य गतिविधिहरू' : language === 'new' ? 'मू गतिविधि' : 'Key Activities'}
                        </h3>
                        <div className="grid gap-3">
                          {selectedFestival.activities.map((activity, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <Sparkles className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'पूजा गरिने देवता' : language === 'new' ? 'पूजा यायेगु द्यः' : 'Gods Worshipped'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedFestival.godsWorshipped.map((god, index) => (
                            <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                              {god}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'परम्परागत रीतिरिवाज' : language === 'new' ? 'परम्परागत रीतिरिवाज' : 'Traditional Rituals'}
                        </h3>
                        <div className="grid gap-2">
                          {selectedFestival.rituals.map((ritual, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200">
                              <Drum className="h-3 w-3 text-purple-600" />
                              <span className="text-sm text-purple-700">{ritual}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl mb-4 text-gray-800 border-b pb-2">
                          {language === 'ne' ? 'पर्यटकहरूको लागि जानकारी' : language === 'new' ? 'पर्यटक ख्याले मलु' : 'Visitor Information'}
                        </h3>
                        <div className="space-y-3 text-sm text-gray-700">
                          <p><strong>{language === 'ne' ? 'उत्तम समय:' : language === 'new' ? 'मूठु समय:' : 'Best Time:'}</strong> {selectedFestival.bestTimeToVisit}</p>
                          <p><strong>{language === 'ne' ? 'सुझाव:' : language === 'new' ? 'सुझाव:' : 'Tips:'}</strong> {selectedFestival.visitorsInfo}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t">
                    {selectedFestival.videoUrl && (
                      <Button 
                        onClick={() => window.open(selectedFestival.videoUrl, '_blank')}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {language === 'ne' ? 'पर्वको भिडियो हेर्नुहोस्' : language === 'new' ? 'जात्राया भिडियो स्वना' : 'Watch Festival Video'}
                      </Button>
                    )}
                    <Link href="/community/join" className="flex-1">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Users className="mr-2 h-4 w-4" />
                        {language === 'ne' ? 'समुदायमा सामेल हुनुहोस्' : language === 'new' ? 'समुदायस जुये' : 'Join Community'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}