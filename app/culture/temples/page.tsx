// app/culture/temples/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Landmark, MapPin, Clock, Star, ArrowLeft, Share, Heart, Camera, Info, ExternalLink, Building, History, ZoomIn, Users, Search, Filter, Navigation } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"
import Image from "next/image"
import * as React from "react"

interface Temple {
  id: number
  name: string
  nameNewa: string
  location: string
  district: string
  period: string
  significance: string
  description: string
  detailedHistory: string
  image: string
  gallery: string[]
  rating: number
  visitors: string
  architecture: string
  architectureStyle: string
  architecturalFeatures: string[]
  materials: string[]
  dimensions: string
  festivals: string[]
  coordinates: { lat: number; lng: number }
  timings: string
  entryFee: string
  contact: string
  preservationStatus: string
  architecturalDetails: {
    tiers: number
    height: string
    foundation: string
    specialFeatures: string[]
  }
  bestTimeToVisit: string
  accessibility: string
  website?: string
}

const temples: Temple[] = [
  {
  // Your existing first 3 temples...
 id: 1,
    name: "Pashupatinath Temple",
    nameNewa: "पशुपतिनाथ मन्दिर",
    location: "Gaushala, Kathmandu",
    district: "Kathmandu",
    period: "5th Century BC",
    significance: "UNESCO World Heritage, holiest Shiva temple of Nepal",
    description: "One of the most sacred Hindu temples dedicated to Lord Shiva, featuring traditional Newar architecture and spiritual significance.",
    detailedHistory: "Pashupatinath Temple's history dates back to the 5th century BC. The temple complex served as the seat of national deity, Lord Pashupatinath. It has been a center of Hindu pilgrimage for centuries and features exquisite Newar architecture.",
    image: "/pasupati.jpg",
    gallery: ["/pasupati.jpg", "/images/temples/newar-temples-kathmandu.png", "/images/temples/newar-temples-kathmandu.png"],
    rating: 4.9,
    visitors: "1M+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Pagoda",
    architecturalFeatures: ["Golden roof", "Silver doors", "Intricate wood carvings", "Stone sculptures", "Four-faced Shiva Linga"],
    materials: ["Stone", "Wood", "Gold", "Copper"],
    dimensions: "Main temple: 23.6 meters height",
    festivals: ["Maha Shivaratri", "Teej", "Kartik Purnima", "Shrawan Month"],
    coordinates: { lat: 27.7104, lng: 85.3484 },
    timings: "4:00 AM - 9:00 PM",
    entryFee: "Free for Nepalese, ₹1000 for foreigners",
    contact: "+977-1-447034",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "23.6 meters",
      foundation: "Stone platform",
      specialFeatures: ["Golden pinnacle", "Silver serpents", "Nandi statue"]
    },
    bestTimeToVisit: "September to March",
    accessibility: "Wheelchair accessible with assistance"
  },
  {
    id: 2,
    name: "Swayambhunath Stupa",
    nameNewa: "स्वयम्भूनाथ स्तुप",
    location: "Swayambhu, Kathmandu",
    district: "Kathmandu",
    period: "5th Century",
    significance: "Monkey Temple, UNESCO World Heritage Site",
    description: "Ancient religious complex atop a hill in the Kathmandu Valley, combining Buddhist and Hindu traditions.",
    detailedHistory: "Swayambhunath is one of the oldest religious sites in Nepal, believed to have been established more than 2,000 years ago.",
    image: "/swayambhu.jpg",
    gallery: ["/swayambhu.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.8,
    visitors: "800K+ annually",
    architecture: "Buddhist Stupa",
    architectureStyle: "Mandalic Design",
    architecturalFeatures: ["All-seeing eyes", "Golden spire", "Prayer wheels", "Votive shrines"],
    materials: ["Stone", "Gold", "Copper", "Brick"],
    dimensions: "Stupa height: 15 meters",
    festivals: ["Buddha Jayanti", "Losar", "Gunla"],
    coordinates: { lat: 27.7149, lng: 85.2905 },
    timings: "5:00 AM - 7:00 PM",
    entryFee: "₹200 for foreigners",
    contact: "+977-1-427948",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 1,
      height: "15 meters",
      foundation: "Hilltop platform",
      specialFeatures: ["Buddha's eyes", "13-tier spire"]
    },
    bestTimeToVisit: "October to April",
    accessibility: "365 steps to climb"
  },

  {
    id: 3,
    name: "Boudhanath Stupa",
    nameNewa: "बौद्धनाथ स्तुप",
    location: "Boudha, Kathmandu",
    district: "Kathmandu",
    period: "14th Century",
    significance: "Tibetan Buddhist Center, UNESCO Site",
    description: "One of the largest spherical stupas in Nepal and center of Tibetan Buddhism.",
    detailedHistory: "Built in the 14th century, Boudhanath has been an important pilgrimage site for Tibetan Buddhists.",
    image: "/boudanath.jpg",
    gallery: ["/boudanath.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.7,
    visitors: "600K+ annually",
    architecture: "Mandalic Design",
    architectureStyle: "Tibetan Stupa",
    architecturalFeatures: ["Giant mandala", "All-seeing eyes", "108 Buddha niches"],
    materials: ["Brick", "Gold", "Stone"],
    dimensions: "Diameter: 100 meters",
    festivals: ["Losar", "Saga Dawa", "Tibetan New Year"],
    coordinates: { lat: 27.7218, lng: 85.3621 },
    timings: "24 hours",
    entryFee: "₹400 for foreigners",
    contact: "+977-1-447125",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "36 meters",
      foundation: "Three-tiered platform",
      specialFeatures: ["Largest stupa in Nepal"]
    },
    bestTimeToVisit: "Year-round",
    accessibility: "Fully wheelchair accessible"
  },

  {
    id: 4,
    name: "Guhyeshwari Temple",
    nameNewa: "गुह्येश्वरी मन्दिर",
    location: "Pashupati Area, Kathmandu",
    district: "Kathmandu",
    period: "17th Century",
    significance: "Shakti Peeth near Bagmati, goddess temple tied to Sati legend",
    description: "Sacred Shakti Peeth temple dedicated to Goddess Guhyeshwari, located near Pashupatinath Temple.",
    detailedHistory: "Built in the 17th century by King Pratap Malla, this temple is believed to be where Sati's yoni fell. It's one of the most important Shakti Peeths in Nepal.",
    image: "/gujaisori.jpg",
    gallery: ["/gujaisori.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.6,
    visitors: "500K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Architecture",
    architecturalFeatures: ["Stone lingam", "Sacred pond", "Intricate carvings", "Silver decorations"],
    materials: ["Stone", "Wood", "Silver", "Brick"],
    dimensions: "Main shrine: 12 meters height",
    festivals: ["Navaratri", "Maha Ashtami", "Shivaratri"],
    coordinates: { lat: 27.7100, lng: 85.3490 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-447034",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 1,
      height: "12 meters",
      foundation: "Stone platform",
      specialFeatures: ["Underground chamber", "Sacred yoni pitha"]
    },
    bestTimeToVisit: "October to March",
    accessibility: "Partially wheelchair accessible"
  },
  {
    id: 5,
    name: "Budhanilkantha Temple",
    nameNewa: "बुढानिलकण्ठ मन्दिर",
    location: "Budhanilkantha Municipality, Kathmandu",
    district: "Kathmandu",
    period: "7th Century",
    significance: "Giant reclining Vishnu statue floating in water",
    description: "Home to the magnificent 5-meter long stone statue of Lord Vishnu reclining on a bed of snakes in a pond.",
    detailedHistory: "The temple dates back to the 7th century during the Licchavi period. The massive stone sculpture was discovered by a farmer while plowing his field.",
    image: "/budanilkanth.jpeg",
    gallery: ["/budhanilkanth.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.5,
    visitors: "300K+ annually",
    architecture: "Sculptural Shrine",
    architectureStyle: "Licchavi Period",
    architecturalFeatures: ["Monolithic Vishnu statue", "Serpent bed", "Water tank", "Stone carvings"],
    materials: ["Black stone", "Stone", "Brick"],
    dimensions: "Statue: 5 meters long",
    festivals: ["Haribodhini Ekadashi", "Chhath", "Vishnu Jayanti"],
    coordinates: { lat: 27.7804, lng: 85.3624 },
    timings: "5:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-482109",
    preservationStatus: "National Heritage Site",
    architecturalDetails: {
      tiers: 0,
      height: "N/A",
      foundation: "Pond base",
      specialFeatures: ["Largest stone sculpture in Nepal", "Natural spring water"]
    },
    bestTimeToVisit: "September to April",
    accessibility: "Wheelchair accessible"
  },
  {
    id: 6,
    name: "Kasthamandap Temple",
    nameNewa: "काष्ठमण्डप मन्दिर",
    location: "Basantapur, Kathmandu Metropolitan City",
    district: "Kathmandu",
    period: "12th Century",
    significance: "Wooden shrine that gave Kathmandu its name",
    description: "Historic three-story wooden pavilion built from a single sal tree, believed to be the origin of Kathmandu's name.",
    detailedHistory: "Built in the 12th century during the reign of King Laxmi Narsingha Malla. The temple was reconstructed after the 2015 earthquake.",
    image: "/kasthamandap.jpeg",
    gallery: ["/kasthamandap.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.4,
    visitors: "400K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Architecture",
    architecturalFeatures: ["Three-story structure", "Wooden pillars", "Intricate carvings", "Open pavilion"],
    materials: ["Wood", "Brick", "Tile"],
    dimensions: "Height: 20 meters",
    festivals: ["Indra Jatra", "Dashain", "Tihar"],
    coordinates: { lat: 27.7044, lng: 85.3075 },
    timings: "24 hours",
    entryFee: "Free",
    contact: "+977-1-425690",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "20 meters",
      foundation: "Stone platform",
      specialFeatures: ["Built from single tree", "Ancient rest house"]
    },
    bestTimeToVisit: "Year-round",
    accessibility: "Fully wheelchair accessible"
  },
  {
    id: 7,
    name: "Seto Machhindranath Temple",
    nameNewa: "सेतो मछिन्द्रनाथ मन्दिर",
    location: "Jana Bahal, Kathmandu Metropolitan City",
    district: "Kathmandu",
    period: "10th Century",
    significance: "Rain-bringing deity worshipped during Jana Baha Dyah Jatra",
    description: "Beautiful white-faced deity temple dedicated to Avalokiteshvara, known for bringing timely rains and prosperity.",
    detailedHistory: "Established in the 10th century, this temple hosts the annual Jana Baha Dyah Jatra featuring a magnificent chariot procession.",
    image: "/machindranath.jpg",
    gallery: ["/machindranath.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.3,
    visitors: "200K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Buddhist",
    architecturalFeatures: ["Golden torana", "Silver doors", "Stone lions", "Prayer wheels"],
    materials: ["Wood", "Stone", "Gold", "Silver"],
    dimensions: "Main shrine: 15 meters height",
    festivals: ["Jana Baha Dyah Jatra", "Buddha Jayanti"],
    coordinates: { lat: 27.7036, lng: 85.3092 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-422567",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 2,
      height: "15 meters",
      foundation: "Stone platform",
      specialFeatures: ["White-faced deity", "Annual chariot festival"]
    },
    bestTimeToVisit: "March to May",
    accessibility: "Wheelchair accessible"
  },

  // Continuing with more temples... (I'll show a few more examples and then you can continue the pattern)

  {
    id: 8,
    name: "Taleju Bhawani Temple",
    nameNewa: "तलेजु भवानी मन्दिर",
    location: "Hanuman Dhoka, Kathmandu Metropolitan City",
    district: "Kathmandu",
    period: "16th Century",
    significance: "Royal goddess of the Malla kings",
    description: "Magnificent temple dedicated to Goddess Taleju, the royal deity of the Malla dynasty, with stunning architecture.",
    detailedHistory: "Built in 1564 by King Mahendra Malla, this temple was accessible only to royalty until recent times.",
    image: "/teleju.jpeg",
    gallery: ["/teleju.jpeg", "/teleju.jpeg", "/api/placeholder/400/300"],
    rating: 4.6,
    visitors: "250K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Malla Architecture",
    architecturalFeatures: ["Multi-tiered roof", "Golden pinnacle", "Stone guardians", "Intricate woodwork"],
    materials: ["Wood", "Stone", "Gold", "Brick"],
    dimensions: "Height: 35 meters",
    festivals: ["Dashain", "Taleju Festival", "Navaratri"],
    coordinates: { lat: 27.7042, lng: 85.3078 },
    timings: "9:00 AM - 5:00 PM",
    entryFee: "₹100 for foreigners",
    contact: "+977-1-425690",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 5,
      height: "35 meters",
      foundation: "Elevated platform",
      specialFeatures: ["Royal family access only historically", "Golden kalash"]
    },
    bestTimeToVisit: "September to November",
    accessibility: "Stairs only"
  },

  // I'll continue with a few more to show the pattern...

  {
    id: 9,
    name: "Kumari Ghar",
    nameNewa: "कुमारी घर",
    location: "Basantapur Durbar Square, Kathmandu",
    district: "Kathmandu",
    period: "18th Century",
    significance: "Residence of the Living Goddess Kumari",
    description: "Historic palace serving as the home of the Kumari, the living goddess worshipped by both Hindus and Buddhists.",
    detailedHistory: "Built in 1757 by King Jaya Prakash Malla, this courtyard-style palace has been the Kumari's residence for centuries.",
    image: "/kumari.jpeg",
    gallery: ["/kumari.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.7,
    visitors: "600K+ annually",
    architecture: "Newari Architecture",
    architectureStyle: "Courtyard Palace",
    architecturalFeatures: ["Wooden windows", "Courtyard", "Guardian statues", "Traditional carvings"],
    materials: ["Wood", "Brick", "Stone"],
    dimensions: "Three-story structure",
    festivals: ["Indra Jatra", "Kumari Jatra", "Dashain"],
    coordinates: { lat: 27.7046, lng: 27.7046 },
    timings: "10:00 AM - 4:00 PM",
    entryFee: "₹500 for foreigners",
    contact: "+977-1-425690",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "18 meters",
      foundation: "Stone platform",
      specialFeatures: ["Living goddess residence", "Exquisite woodwork"]
    },
    bestTimeToVisit: "September during Indra Jatra",
    accessibility: "Limited accessibility"
  },

{
    id: 10,
    name: "Maru Ganesh Temple",
    nameNewa: "मरु गणेश मन्दिर",
    location: "Maru Tole, Kathmandu Metropolitan City",
    district: "Kathmandu",
    period: "16th Century",
    significance: "Ganesh shrine guarding Kathmandu city",
    description: "One of the four important Ganesh temples protecting the cardinal directions of Kathmandu, known as the guardian of the city's southern entrance with special powers to remove obstacles and grant success in endeavors.",
    detailedHistory: "Established during the Malla period in the 16th century, Maru Ganesh has been a vital protective deity for Kathmandu. The temple is part of the Asta Ganesh (Eight Ganesh) network that forms a protective circle around the city. It has been a site of royal patronage and public worship for centuries, with many historical accounts mentioning its importance in city protection rituals.",
    image: "/maruganash.jpg",
    gallery: ["/maruganash.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.3,
    visitors: "150K+ annually",
    architecture: "Shikhara Style",
    architectureStyle: "Mixed Hindu Architecture",
    architecturalFeatures: ["Stone Ganesh idol", "Ornate pinnacle", "Bell structure", "Protective boundary walls"],
    materials: ["Stone", "Brass", "Wood", "Copper"],
    dimensions: "Main shrine: 8 meters height",
    festivals: ["Ganesh Chaturthi", "Biska Jatra", "Weekly Tuesday prayers"],
    coordinates: { lat: 27.7050, lng: 85.3080 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-422789",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 1,
      height: "8 meters",
      foundation: "Stone platform",
      specialFeatures: ["One of four directional Ganesh", "Ancient protective deity"]
    },
    bestTimeToVisit: "August-September for Ganesh Chaturthi",
    accessibility: "Street level access"
  },
  {
    id: 11,
    name: "Bhadrakali Temple",
    nameNewa: "भद्रकाली मन्दिर",
    location: "Tundikhel, Kathmandu Metropolitan City",
    district: "Kathmandu",
    period: "17th Century",
    significance: "Fierce goddess temple near army parade ground",
    description: "Historic temple dedicated to Goddess Bhadrakali, the fierce form of Durga, located adjacent to Tundikhel parade ground where it has served as a protective deity for the military and the city for centuries.",
    detailedHistory: "Constructed in the 17th century by King Pratap Malla, this temple has strong associations with Nepal's military history. Soldiers would seek blessings before battles, and the temple continues to be an important site for armed forces ceremonies. The temple survived the 2015 earthquake with minimal damage, reinforcing its reputation as a protective shrine.",
    image: "/Bhadrakali.JPG",
    gallery: ["/Bhadrakali.JPG", "/Bhadrakali.JPG", "/api/placeholder/400/300"],
    rating: 4.2,
    visitors: "120K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Military Architecture",
    architecturalFeatures: ["Fierce deity statue", "Sacrificial platform", "Military insignia", "Stone guardians"],
    materials: ["Stone", "Wood", "Metal", "Brick"],
    dimensions: "Main temple: 10 meters height",
    festivals: ["Dashain", "Navaratri", "Military ceremonies"],
    coordinates: { lat: 27.6986, lng: 85.3158 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-422456",
    preservationStatus: "National Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "10 meters",
      foundation: "Elevated stone base",
      specialFeatures: ["Military association", "Sacrificial rituals"]
    },
    bestTimeToVisit: "During Dashain festival",
    accessibility: "Wheelchair accessible"
  },
  {
    id: 12,
    name: "Dakshinkali Temple",
    nameNewa: "दक्षिणकाली मन्दिर",
    location: "Pharping, Dakshinkali Municipality, Kathmandu",
    district: "Kathmandu",
    period: "17th Century",
    significance: "Renowned Kali temple famous for animal sacrifices",
    description: "One of Nepal's most important and powerful Kali temples where devotees offer animal sacrifices to appease the fierce goddess, located in a scenic river valley setting with strong tantric traditions and spiritual energy.",
    detailedHistory: "The temple gained prominence in the 17th century though local legends suggest it was discovered much earlier. It's believed that the goddess manifested herself at this spot, and the temple became a major pilgrimage site for tantric practitioners. The practice of animal sacrifice, particularly of roosters, goats, and ducks, has been continuous for centuries, especially on Saturdays and Tuesdays.",
    image: "/daxinkali.jpg",
    gallery: ["/daxinkali.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.4,
    visitors: "800K+ annually",
    architecture: "Cave Shrine Style",
    architectureStyle: "Tantric Architecture",
    architecturalFeatures: ["Rock-cut shrine", "Sacrificial area", "River confluence", "Stone steps"],
    materials: ["Stone", "Natural rock", "Metal", "Wood"],
    dimensions: "Natural cave formation",
    festivals: ["Dashain", "Navaratri", "Saturdays special worship"],
    coordinates: { lat: 27.6000, lng: 85.2500 },
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    contact: "+977-1-556789",
    preservationStatus: "Religious Site",
    architecturalDetails: {
      tiers: 0,
      height: "Natural formation",
      foundation: "River bank",
      specialFeatures: ["Animal sacrifice rituals", "Tantric practices"]
    },
    bestTimeToVisit: "Saturdays for special worship",
    accessibility: "Challenging terrain"
  },
  {
    id: 13,
    name: "Ichangu Narayan Temple",
    nameNewa: "इचङ्गु नारायण मन्दिर",
    location: "Ichangu, Nagarjun Municipality, Kathmandu",
    district: "Kathmandu",
    period: "4th Century",
    significance: "One of the four Narayan shrines protecting the Valley",
    description: "Ancient Vishnu temple forming one of the four protective cardinal points around Kathmandu Valley, featuring exquisite Licchavi period stone carvings and peaceful surroundings with panoramic valley views.",
    detailedHistory: "Dating back to the 4th century Licchavi period, Ichangu Narayan is among the oldest continuously operating temples in Nepal. The temple's stone inscriptions and carvings provide valuable historical insights into early Nepalese civilization. It was extensively renovated in the 17th century by King Pratap Malla and has maintained its spiritual significance as a protective guardian of the valley's western approach.",
    image: "/ichangu.jpg",
    gallery: ["/ichangu.jpg", "/ichangu.jpg", "/api/placeholder/400/300"],
    rating: 4.5,
    visitors: "80K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Licchavi Architecture",
    architecturalFeatures: ["Ancient stone carvings", "Vishnu idol", "Bell tower", "Stone water spouts"],
    materials: ["Stone", "Wood", "Gold", "Copper"],
    dimensions: "Main temple: 12 meters height",
    festivals: ["Haribodhini Ekadashi", "Vishnu Jayanti", "Temple anniversary"],
    coordinates: { lat: 27.7500, lng: 85.2667 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-489012",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "12 meters",
      foundation: "Ancient stone platform",
      specialFeatures: ["Four protective Narayan", "Licchavi inscriptions"]
    },
    bestTimeToVisit: "October to March",
    accessibility: "Hilltop location with steps"
  },
  {
    id: 14,
    name: "Gokarneshwor Mahadev",
    nameNewa: "गोकर्णेश्वर महादेव",
    location: "Gokarna, Gokarneshwor Municipality, Kathmandu",
    district: "Kathmandu",
    period: "5th Century",
    significance: "Shiva temple at Bagmati river, popular for ancestor rituals",
    description: "Sacred Shiva temple complex on the banks of Bagmati River renowned for performing Shraddha ceremonies (ancestor worship) with historical importance dating back to ancient times and beautiful natural surroundings.",
    detailedHistory: "The temple's origins trace back to the 5th century, making it one of the oldest Shiva temples in the valley. It gained prominence as a site for Pinda Daan (ancestor offerings) rituals. The temple complex was expanded during the Malla period and continues to be a major center for death anniversary ceremonies and soul purification rituals, attracting devotees from Nepal and India.",
    image: "/gokarnashor.jpeg",
    gallery: ["/gokarnashor.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.4,
    visitors: "300K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Mixed Hindu Architecture",
    architecturalFeatures: ["Riverside location", "Multiple shrines", "Cremation ghats", "Meditation areas"],
    materials: ["Stone", "Wood", "Marble", "Brick"],
    dimensions: "Main temple: 15 meters height",
    festivals: ["Maha Shivaratri", "Puja for ancestors", "Shraddha ceremonies"],
    coordinates: { lat: 27.7333, lng: 85.3833 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-478901",
    preservationStatus: "Protected Religious Site",
    architecturalDetails: {
      tiers: 2,
      height: "15 meters",
      foundation: "River bank platform",
      specialFeatures: ["Ancestor worship center", "River ceremonies"]
    },
    bestTimeToVisit: "Year-round for rituals",
    accessibility: "Partially wheelchair accessible"
  },
  {
    id: 15,
    name: "Rato Machhindranath Temple",
    nameNewa: "रातो मछिन्द्रनाथ मन्दिर",
    location: "Bungamati, Lalitpur Metropolitan City, Lalitpur",
    district: "Lalitpur",
    period: "13th Century",
    significance: "God of rain, central to Nepal's longest chariot festival",
    description: "Historic temple of the red-faced deity Machhindranath, the god of rain and compassion, famous for hosting Nepal's longest and most spectacular chariot festival that ensures timely monsoon rains for agricultural prosperity.",
    detailedHistory: "The temple was established in the 13th century and the deity is believed to have been brought from Assam, India. The annual Rato Machhindranath Jatra lasts for several months and features a massive wooden chariot pulled through the streets of Patan. This festival has been celebrated continuously for over 1300 years, making it one of the world's oldest uninterrupted religious processions.",
    image: "/ratomachinadra.jpg",
    gallery: ["/ratomachinadra.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.7,
    visitors: "500K+ annually",
    architecture: "Newari Style",
    architectureStyle: "Traditional Newar",
    architecturalFeatures: ["Red-faced deity", "Chariot storage", "Courtyard complex", "Wooden carvings"],
    materials: ["Wood", "Brick", "Stone", "Clay"],
    dimensions: "Temple complex: 20x30 meters",
    festivals: ["Rato Machhindranath Jatra", "Bunga Dyah Jatra"],
    coordinates: { lat: 27.6417, lng: 85.3250 },
    timings: "7:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-543210",
    preservationStatus: "National Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "18 meters",
      foundation: "Stone courtyard",
      specialFeatures: ["Chariot festival headquarters", "Rain deity"]
    },
    bestTimeToVisit: "April-June for chariot festival",
    accessibility: "Courtyard access"
  },
  {
    id: 16,
    name: "Krishna Mandir",
    nameNewa: "कृष्ण मन्दिर",
    location: "Patan Durbar Square, Lalitpur",
    district: "Lalitpur",
    period: "17th Century",
    significance: "Stone masterpiece dedicated to Lord Krishna",
    description: "Exquisitely carved stone temple considered one of the finest examples of Nepalese temple architecture, featuring intricate stonework depicting scenes from Hindu epics and dedicated to Lord Krishna with perfect geometric proportions.",
    detailedHistory: "Built in 1637 by King Siddhi Narsingh Malla, the temple is said to have been constructed after the king saw Krishna and Radha in his dream. The temple survived the 2015 earthquake remarkably well due to its superior stone construction. It represents the pinnacle of Shikhara-style architecture in Nepal and has been studied by architects worldwide for its seismic resilience and artistic excellence.",
    image: "/krishnamandir.jpeg",
    gallery: ["/krishnamandir.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.8,
    visitors: "600K+ annually",
    architecture: "Shikhara Style",
    architectureStyle: "Stone Shikhara",
    architecturalFeatures: ["Stone spires", "Mythological carvings", "Geometric precision", "Multi-tiered tower"],
    materials: ["Stone", "Marble", "Gold", "Brass"],
    dimensions: "Height: 21 meters",
    festivals: ["Krishna Janmashtami", "Holi", "Radhashtami"],
    coordinates: { lat: 27.6731, lng: 85.3242 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "₹1000 for foreigners",
    contact: "+977-1-552345",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 5,
      height: "21 meters",
      foundation: "Stone platform",
      specialFeatures: ["Earthquake resistant", "Mythological stone carvings"]
    },
    bestTimeToVisit: "August for Janmashtami",
    accessibility: "Fully accessible"
  },
  {
    id: 17,
    name: "Hiranya Varna Mahavihar",
    nameNewa: "हिरण्य वर्ण महाविहार",
    location: "Patan, Lalitpur",
    district: "Lalitpur",
    period: "12th Century",
    significance: "Famous Buddhist-Hindu fusion temple",
    description: "Magnificent three-story golden temple complex blending Buddhist and Hindu traditions, featuring a stunning golden facade, peaceful courtyards, and ancient manuscripts that represent Nepal's religious syncretism.",
    detailedHistory: "Founded in the 12th century by King Bhaskar Varma, the temple is also known as the Golden Temple due to its extensive gold plating. It serves as both a Buddhist monastery and a Hindu shrine, exemplifying Nepal's unique religious harmony. The temple houses rare Buddhist scriptures and has been maintained by generations of Buddhist priests while welcoming Hindu worshippers.",
    image: "/hiranya.jpg",
    gallery: ["/hiranya.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.6,
    visitors: "400K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Buddhist-Hindu Fusion",
    architecturalFeatures: ["Golden facade", "Prayer wheels", "Courtyard", "Ancient manuscripts"],
    materials: ["Gold", "Copper", "Wood", "Stone"],
    dimensions: "Main building: 15 meters height",
    festivals: ["Buddha Jayanti", "Losar", "Vesak"],
    coordinates: { lat: 27.6742, lng: 85.3258 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free (donations accepted)",
    contact: "+977-1-553456",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "15 meters",
      foundation: "Stone courtyard",
      specialFeatures: ["Gold plating", "Religious syncretism"]
    },
    bestTimeToVisit: "May for Buddha Jayanti",
    accessibility: "Courtyard accessible"
  },
  {
    id: 18,
    name: "Kumbheshwar Temple",
    nameNewa: "कुम्भेश्वर मन्दिर",
    location: "Patan, Lalitpur",
    district: "Lalitpur",
    period: "14th Century",
    significance: "Five-story Shiva temple with sacred pond",
    description: "One of only two five-story pagoda temples in Nepal dedicated to Lord Shiva, featuring a natural spring-fed pond believed to have healing properties and architectural grandeur that represents Malla period excellence.",
    detailedHistory: "Built in 1392 during the reign of King Jayasthiti Malla, Kumbheshwar is one of the oldest Shiva temples in the Kathmandu Valley. The temple's sacred pond, Kumbheshwar Pokhari, is believed to turn into the holy Lake Gosainkunda during Janai Purnima, attracting thousands of devotees. The temple complex has been expanded over centuries while maintaining its original architectural integrity.",
    image: "/kumbheshor.jpg",
    gallery: ["/kumbheshor.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.5,
    visitors: "300K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Malla Period Architecture",
    architecturalFeatures: ["Five-story structure", "Sacred pond", "Stone lingam", "Ornate woodwork"],
    materials: ["Wood", "Stone", "Brick", "Tile"],
    dimensions: "Height: 25 meters",
    festivals: ["Maha Shivaratri", "Janai Purnima", "Shrawan month"],
    coordinates: { lat: 27.6750, lng: 85.3267 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-554567",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 5,
      height: "25 meters",
      foundation: "Stone platform with pond",
      specialFeatures: ["Natural spring pond", "Five-story rarity"]
    },
    bestTimeToVisit: "July-August for holy bath",
    accessibility: "Pond area challenging"
  },
  {
    id: 19,
    name: "Banglamukhi Temple",
    nameNewa: "बंगलामुखी मन्दिर",
    location: "Patan, Lalitpur",
    district: "Lalitpur",
    period: "17th Century",
    significance: "Goddess temple believed to grant wishes",
    description: "Powerful tantric temple dedicated to Goddess Banglamukhi, one of the ten Mahavidyas known for granting wishes and providing protection, with strong tantric traditions and esoteric worship practices.",
    detailedHistory: "Established in the 17th century during the Malla period, the temple became a center for tantric practices and wish-fulfillment rituals. The goddess Banglamukhi is associated with silencing enemies and granting victory in legal matters. The temple has maintained its tantric traditions through generations of specialized priests who perform unique rituals for devotees seeking specific blessings.",
    image: "/bangalmukhi.jpeg",
    gallery: ["/bangalmukhi.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.3,
    visitors: "100K+ annually",
    architecture: "Shikhara Style",
    architectureStyle: "Tantric Architecture",
    architecturalFeatures: ["Yellow-colored deity", "Tantric symbols", "Meditation cells", "Esoteric artwork"],
    materials: ["Stone", "Brass", "Gold paint", "Wood"],
    dimensions: "Main shrine: 8 meters height",
    festivals: ["Navaratri", "Tantric festivals", "Full moon days"],
    coordinates: { lat: 27.6767, lng: 85.3283 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-555678",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "8 meters",
      foundation: "Stone base",
      specialFeatures: ["Tantric practices", "Wish fulfillment"]
    },
    bestTimeToVisit: "During Navaratri",
    accessibility: "Street level access"
  },
  {
    id: 20,
    name: "Santaneshwor Mahadev",
    nameNewa: "सन्तानेश्वर महादेव",
    location: "Lele, Godawari Municipality, Lalitpur",
    district: "Lalitpur",
    period: "18th Century",
    significance: "Popular for blessings of children",
    description: "Sacred Shiva temple renowned for granting children to childless couples, located in a serene river valley setting with strong beliefs in the deity's power to bless families with offspring and ensure healthy progeny.",
    detailedHistory: "The temple gained popularity in the 18th century when local legends emerged of childless couples being blessed with children after worshipping here. The temple's name 'Santaneshwor' literally means 'Lord of Progeny'. Over centuries, it has become a pilgrimage site for couples seeking children, with many returning to offer thanks after successful childbirths.",
    image: "/santaneshor.jpeg",
    gallery: ["/santaneshor.jpeg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.4,
    visitors: "50K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Rural Temple Architecture",
    architecturalFeatures: ["Simple shrine", "River side location", "Bell structure", "Natural surroundings"],
    materials: ["Stone", "Wood", "Thatch", "Clay"],
    dimensions: "Small shrine structure",
    festivals: ["Maha Shivaratri", "Purnima days", "Local village festivals"],
    coordinates: { lat: 27.5667, lng: 85.3333 },
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    contact: "+977-1-556789",
    preservationStatus: "Local Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "6 meters",
      foundation: "River bank",
      specialFeatures: ["Fertility blessings", "Child granting deity"]
    },
    bestTimeToVisit: "Year-round for specific prayers",
    accessibility: "Rural road access"
  },
  {
    id: 21,
    name: "Nyatapola Temple",
    nameNewa: "न्यातपोला मन्दिर",
    location: "Taumadhi Square, Bhaktapur",
    district: "Bhaktapur",
    period: "18th Century",
    significance: "Tallest pagoda temple dedicated to Siddhi Lakshmi",
    description: "Magnificent five-story pagoda temple representing the pinnacle of Newar architecture, famous for its incredible seismic resilience, massive guardian statues, and being the tallest temple of its kind in Nepal.",
    detailedHistory: "Built in 1702 during the reign of King Bhupatindra Malla, Nyatapola survived the 1934 earthquake and 2015 earthquake with minimal damage due to its brilliant engineering. The temple's name means 'five stories' in Newari. The construction involved moving massive stones and creating guardian statues of increasing strength, demonstrating advanced architectural knowledge of earthquake resistance.",
    image: "/nata.jpg",
    gallery: ["/nata.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.9,
    visitors: "700K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Pagoda",
    architecturalFeatures: ["Five-tiered roof", "Guardian statues", "Stepped platform", "Intricate woodwork"],
    materials: ["Wood", "Brick", "Tile", "Stone"],
    dimensions: "Height: 30 meters",
    festivals: ["Bisket Jatra", "Dashain", "Local Bhaktapur festivals"],
    coordinates: { lat: 27.6722, lng: 85.4286 },
    timings: "24 hours",
    entryFee: "₹1500 for foreigners",
    contact: "+977-1-661234",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 5,
      height: "30 meters",
      foundation: "Pyramidal stone base",
      specialFeatures: ["Earthquake resistant design", "Guardian statue hierarchy"]
    },
    bestTimeToVisit: "April for Bisket Jatra",
    accessibility: "Stepped access"
  },
  {
    id: 22,
    name: "Dattatreya Temple",
    nameNewa: "दत्तात्रेय मन्दिर",
    location: "Dattatreya Square, Bhaktapur",
    district: "Bhaktapur",
    period: "15th Century",
    significance: "Unique wooden temple with tantric roots",
    description: "Ancient temple dedicated to the triple deity Dattatreya (combination of Brahma, Vishnu, and Shiva), featuring exceptional wood carvings, tantric symbolism, and architectural elements from a converted monastery.",
    detailedHistory: "Originally built as a Buddhist monastery in 1427, the structure was converted into a Hindu temple dedicated to Dattatreya. The temple is said to be constructed from the wood of a single tree. It represents the syncretic nature of Nepalese religion and has been a center for tantric practices and philosophical discussions for centuries.",
    image: "/datroya.jpg",
    gallery: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.6,
    visitors: "400K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Converted Monastery Architecture",
    architecturalFeatures: ["Intricate wood carvings", "Tantric symbols", "Three-faced deity", "Historical inscriptions"],
    materials: ["Wood", "Brick", "Stone", "Clay"],
    dimensions: "Three-story structure",
    festivals: ["Dattatreya Jayanti", "Full moon days", "Tantric ceremonies"],
    coordinates: { lat: 27.6714, lng: 85.4278 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Included in Bhaktapur entry fee",
    contact: "+977-1-662345",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "18 meters",
      foundation: "Stone platform",
      specialFeatures: ["Single tree construction", "Triple deity worship"]
    },
    bestTimeToVisit: "December for Dattatreya Jayanti",
    accessibility: "Square level access"
  },
  {
    id: 23,
    name: "Changu Narayan Temple",
    nameNewa: "चाँगु नारायण मन्दिर",
    location: "Changu, Changunarayan Municipality, Bhaktapur",
    district: "Bhaktapur",
    period: "4th Century",
    significance: "Oldest Hindu temple in Nepal, UNESCO site",
    description: "Ancient Vishnu temple considered the oldest dated Hindu temple still standing in Nepal, featuring priceless Licchavi period inscriptions, exquisite stone carvings, and panoramic views of the Kathmandu Valley.",
    detailedHistory: "The temple's earliest foundation dates to the 4th century, with the oldest stone inscription in Nepal (464 AD) found here. It was rebuilt after a fire in the 5th century and has been continuously maintained. The temple complex contains some of the finest examples of ancient Nepalese art and architecture, providing a living museum of cultural evolution over 1500 years.",
    image: "/changu-narayan.jpg",
    gallery: ["/changu-narayan.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.8,
    visitors: "300K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Licchavi Architecture",
    architecturalFeatures: ["Ancient inscriptions", "Stone carvings", "Double-roof design", "Historical artifacts"],
    materials: ["Stone", "Wood", "Gold", "Copper"],
    dimensions: "Main temple: 16 meters height",
    festivals: ["Haribodhini Ekadashi", "Vishnu related festivals"],
    coordinates: { lat: 27.7158, lng: 85.4269 },
    timings: "5:00 AM - 7:00 PM",
    entryFee: "₹300 for foreigners",
    contact: "+977-1-663456",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "16 meters",
      foundation: "Ancient stone platform",
      specialFeatures: ["Oldest temple in Nepal", "Licchavi inscriptions"]
    },
    bestTimeToVisit: "October to March",
    accessibility: "Hilltop with steps"
  },
  {
    id: 24,
    name: "Doleshwar Mahadev",
    nameNewa: "डोलेश्वर महादेव",
    location: "Suryabinayak Municipality, Bhaktapur",
    district: "Bhaktapur",
    period: "Unknown (Ancient)",
    significance: "Believed to be head part of Kedarnath, India",
    description: "Sacred Shiva temple believed to represent the head portion of the Kedarnath jyotirlinga in India, making it an important pilgrimage site for those unable to travel to the Himalayan shrine.",
    detailedHistory: "According to local legend, when Pandavas sought Lord Shiva after the Mahabharata war, Shiva divided himself into five parts that fell across different locations. Doleshwar is believed to be where the head portion landed. The temple gained prominence in recent decades as an alternative to Kedarnath, especially after the 2013 Uttarakhand floods that damaged the original shrine.",
    image: "/doleshor.png",
    gallery: ["/doleshor.png", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.5,
    visitors: "200K+ annually",
    architecture: "Modern Temple",
    architectureStyle: "Contemporary Hindu",
    architecturalFeatures: ["Shiva lingam", "Prayer hall", "Pilgrim facilities", "Mountain view"],
    materials: ["Marble", "Concrete", "Stone", "Metal"],
    dimensions: "Modern temple complex",
    festivals: ["Maha Shivaratri", "Shrawan month", "Mondays"],
    coordinates: { lat: 27.6500, lng: 85.4167 },
    timings: "4:00 AM - 9:00 PM",
    entryFee: "Free",
    contact: "+977-1-664567",
    preservationStatus: "Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "12 meters",
      foundation: "Hill slope",
      specialFeatures: ["Kedarnath counterpart", "Head portion belief"]
    },
    bestTimeToVisit: "July-August for Shrawan",
    accessibility: "Road access available"
  },
  {
    id: 25,
    name: "Siddhi Lakshmi Temple",
    nameNewa: "सिद्धि लक्ष्मी मन्दिर",
    location: "Bhaktapur Durbar Square, Bhaktapur",
    district: "Bhaktapur",
    period: "17th Century",
    significance: "Temple with intricate stone carvings",
    description: "Exquisitely carved stone temple dedicated to Goddess Lakshmi, famous for its detailed stone sculptures depicting various aspects of daily life, mythological scenes, and intricate artistic work.",
    detailedHistory: "Built in the 17th century during the reign of King Jitamitra Malla, the temple is renowned for its stone staircase flanked by detailed carvings of humans, animals, and deities. Each sculpture tells a story from Hindu mythology or depicts scenes from contemporary life. The temple survived multiple earthquakes due to its robust stone construction.",
    image: "/siddhilaxmi.jpg",
    gallery: ["/siddhilaxmi.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.4,
    visitors: "350K+ annually",
    architecture: "Shikhara Style",
    architectureStyle: "Stone Carving Architecture",
    architecturalFeatures: ["Stone sculptures", "Ornate staircase", "Guardian animals", "Mythological panels"],
    materials: ["Stone", "Marble", "Brass", "Wood"],
    dimensions: "Medium-sized stone temple",
    festivals: ["Laxmi Puja", "Dashain", "Tihar"],
    coordinates: { lat: 27.6720, lng: 85.4280 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Included in Bhaktapur entry fee",
    contact: "+977-1-665678",
    preservationStatus: "UNESCO World Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "14 meters",
      foundation: "Stone platform",
      specialFeatures: ["Narrative stone carvings", "Life scene depictions"]
    },
    bestTimeToVisit: "October for festivals",
    accessibility: "Stone steps access"
  },
  {
    id: 26,
    name: "Balkumari Temple",
    nameNewa: "बालकुमारी मन्दिर",
    location: "Madhyapur Thimi Municipality, Bhaktapur",
    district: "Bhaktapur",
    period: "16th Century",
    significance: "Goddess temple central to Bisket Jatra festival",
    description: "Important temple of Goddess Balkumari, the protective deity of Thimi town, renowned for its association with the vibrant Bisket Jatra festival and unique cultural traditions.",
    detailedHistory: "Established in the 16th century, the temple became the center of Thimi's cultural and religious life. The goddess Balkumari is considered the town's protector. The temple is famous for its role in the Bisket Jatra where a massive chariot procession takes place. The temple's traditions include unique mask dances and cultural performances that have been preserved for centuries.",
    image: "/balkumari.jpg",
    gallery: ["/balkumari.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.3,
    visitors: "150K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Local Newar Architecture",
    architecturalFeatures: ["Traditional facade", "Courtyard", "Festival chariot", "Cultural artifacts"],
    materials: ["Wood", "Brick", "Tile", "Stone"],
    dimensions: "Community temple size",
    festivals: ["Bisket Jatra", "Dashain", "Local festivals"],
    coordinates: { lat: 27.6783, lng: 85.3833 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-1-666789",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 2,
      height: "10 meters",
      foundation: "Town center location",
      specialFeatures: ["Bisket Jatra center", "Community protector"]
    },
    bestTimeToVisit: "April for Bisket Jatra",
    accessibility: "Town square access"
  },

  // Continuing with more temples... (I'll show a few more and then you can see the pattern)

  {
    id: 27,
    name: "Manakamana Temple",
    nameNewa: "मनकामना मन्दिर",
    location: "Kurintar, Gorkha Municipality, Gorkha",
    district: "Gorkha",
    period: "17th Century",
    significance: "Wish-fulfilling goddess temple accessible by cable car",
    description: "Famous wish-fulfilling temple of Goddess Bhagwati located on a hilltop, accessible via Nepal's first cable car system, attracting millions of devotees seeking blessings for their wishes.",
    detailedHistory: "The temple's history dates back to the 17th century during the reign of King Ram Shah. The legend tells of a queen who was an incarnation of the goddess and her faithful servant who continued worship after her death. The temple gained modern popularity with the installation of the cable car in 1998, making it accessible to elderly and disabled pilgrims.",
    image: "/manakamana.jpg",
    gallery: ["/manakamana.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.7,
    visitors: "2M+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Hill Temple Architecture",
    architecturalFeatures: ["Hilltop location", "Cable car access", "Sacred pond", "Pilgrim facilities"],
    materials: ["Stone", "Wood", "Metal", "Concrete"],
    dimensions: "Main temple: 12 meters height",
    festivals: ["Dashain", "Navaratri", "Chaitra Dashain"],
    coordinates: { lat: 27.9333, lng: 84.6333 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Cable car fee: ₹1000 round trip",
    contact: "+977-65-420123",
    preservationStatus: "National Pilgrimage Site",
    architecturalDetails: {
      tiers: 2,
      height: "12 meters",
      foundation: "Hilltop platform",
      specialFeatures: ["Cable car access", "Wish fulfillment"]
    },
    bestTimeToVisit: "September to November",
    accessibility: "Cable car accessible"
  },


  {
    id: 28,
    name: "Muktinath Temple",
    nameNewa: "मुक्तिनाथ मन्दिर",
    location: "Ranipauwa, Muktinath Municipality, Mustang",
    district: "Mustang",
    period: "19th Century",
    significance: "Sacred to both Hindus and Buddhists at 3,800m",
    description: "High-altitude temple complex at 3,800 meters where Hindus worship Vishnu as Muktinath and Buddhists worship as Avalokiteshvara, featuring natural gas flames and water springs in one of the world's highest religious sites.",
    detailedHistory: "The temple gained prominence in the 19th century though local worship dates back centuries. It's mentioned in Hindu scriptures as a place where devotees achieve moksha (liberation). The natural elements of earth, water, fire, and air converge here, making it uniquely sacred. The temple represents perfect religious harmony between Hinduism and Buddhism.",
    image: "/muktinath.jpg",
  gallery: ["/muktinath.jpg", "/muktinath.jpg", "/muktinath.jpg"],
   rating: 4.9,
    visitors: "100K+ annually",
    architecture: "Mixed Style",
    architectureStyle: "High-Altitude Architecture",
    architecturalFeatures: ["108 water spouts", "Eternal flame", "Prayer wheels", "Mountain setting"],
    materials: ["Stone", "Metal", "Wood", "Clay"],
    dimensions: "Complex spread over mountainside",
    festivals: ["Muktinath Jatra", "Yartung", "Tiji"],
    coordinates: { lat: 28.8167, lng: 83.8667 },
    timings: "5:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-69-440123",
    preservationStatus: "Protected Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "Adapted to mountain",
      foundation: "Mountain slope",
      specialFeatures: ["Natural gas flames", "108 sacred waterspouts"]
    },
    bestTimeToVisit: "April-October",
    accessibility: "High altitude challenge"
  },
 {
    id: 29,
    name: "Janaki Mandir",
    nameNewa: "जानकी मन्दिर",
    location: "Janakpur Sub-Metropolitan City, Dhanusha",
    district: "Dhanusha",
    period: "20th Century",
    significance: "Magnificent palace-like temple of Goddess Sita",
    description: "Grand temple dedicated to Goddess Sita, built in Mughal-Rajput architecture style, representing one of the largest temples in Nepal and an important pilgrimage site.",
    detailedHistory: "Built in 1910 by Queen Vrisha Bhanu of Tikamgarh, India, the temple stands on the spot where Sita was born according to Hindu mythology. It's a major center for Ramayana studies.",
   image: "/janaki.jpg",
  gallery: ["/janaki.jpg", "/janaki.jpg", "/janaki.jpg"],
    rating: 4.8,
    visitors: "1M+ annually",
    architecture: "Mughal-Rajput Style",
    architectureStyle: "Palace Architecture",
    architecturalFeatures: ["White marble", "Domed structure", "Ornate carvings", "Spacious courtyard"],
    materials: ["Marble", "Stone", "Gold", "Brass"],
    dimensions: "Height: 50 meters",
    festivals: ["Vivah Panchami", "Ram Navami", "Dashain"],
    coordinates: { lat: 26.7280, lng: 85.9250 },
    timings: "5:00 AM - 10:00 PM",
    entryFee: "Free",
    contact: "+977-41-520123",
    preservationStatus: "National Heritage Site",
    architecturalDetails: {
      tiers: 3,
      height: "50 meters",
      foundation: "Marble platform",
      specialFeatures: ["Sita's birthplace", "Ramayana significance"]
    },
    bestTimeToVisit: "November-December for Vivah Panchami",
    accessibility: "Fully wheelchair accessible"
  },
  {
    id: 30,
    name: "Ram Mandir",
    nameNewa: "राम मन्दिर",
    location: "Janakpur, Dhanusha",
    district: "Dhanusha",
    period: "19th Century",
    significance: "Temple dedicated to Lord Ram, tied to the Ramayana",
    description: "Important temple dedicated to Lord Rama located near Janaki Mandir, completing the sacred complex associated with the Ramayana epic and the marriage of Rama and Sita.",
    detailedHistory: "Built in the 19th century to complement the Janaki Mandir, this temple completes the sacred geography of Janakpur as the place where Rama won Sita's hand in marriage.",
    image: "/rammandir.JPG",
  gallery: ["/rammandir.JPG", "/rammandir.JPG", "/rammandir.JPG"], 
    rating: 4.6,
    visitors: "800K+ annually",
    architecture: "Nagara Style",
    architectureStyle: "North Indian Temple Architecture",
    architecturalFeatures: ["Shikhara spire", "Stone carvings", "Mandapa hall", "Sacred pond"],
    materials: ["Stone", "Marble", "Wood", "Brass"],
    dimensions: "Height: 25 meters",
    festivals: ["Vivah Panchami", "Ram Navami", "Diwali"],
    coordinates: { lat: 26.7290, lng: 85.9260 },
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free",
    contact: "+977-41-520124",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 1,
      height: "25 meters",
      foundation: "Stone platform",
      specialFeatures: ["Rama worship", "Ramayana completion"]
    },
    bestTimeToVisit: "November for Vivah Panchami",
    accessibility: "Fully accessible"
  },

  {
    id: 31,
    name: "Dolakha Bhimsen Temple",
    nameNewa: "दोलखा भीमसेन मन्दिर",
    location: "Bhimsensthan, Dolakha Municipality, Dolakha",
    district: "Dolakha",
    period: "17th Century",
    significance: "Guardian deity of traders and businessmen",
    description: "Important temple dedicated to Bhimsen, one of the Pandava brothers, worshipped as the deity of trade, commerce, and business prosperity.",
    detailedHistory: "Established in the 17th century, the temple became a major pilgrimage site for traders and businesspeople seeking blessings for commercial success. The temple gained prominence during the medieval trade routes between Nepal and Tibet.",
    image: "/dolakha-bhimsen.jpg",
  gallery: ["/dolakha-bhimsen.jpg", "/dolakha-bhimsen.jpg", "/dolakha-bhimsen.jpg"], 
    rating: 4.4,
    visitors: "200K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Trade Route Architecture",
    architecturalFeatures: ["Stone statue of Bhimsen", "Trade route symbols", "Merchant halls", "Ancient bell"],
    materials: ["Stone", "Wood", "Copper", "Brick"],
    dimensions: "Main temple: 8 meters height",
    festivals: ["Bhimsen Jatra", "Dashain", "Tihar"],
    coordinates: { lat: 27.6833, lng: 86.1667 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-49-420123",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 2,
      height: "8 meters",
      foundation: "Stone platform",
      specialFeatures: ["Trader deity", "Commercial blessings"]
    },
    bestTimeToVisit: "October-November",
    accessibility: "Hill station access"
  },
  {
    id: 32,
    name: "Pathibhara Devi Temple",
    nameNewa: "पाथीभरा देवी मन्दिर",
    location: "Taplejung Municipality, Taplejung",
    district: "Taplejung",
    period: "18th Century",
    significance: "High-altitude goddess temple attracting thousands of pilgrims",
    description: "Sacred temple of Goddess Pathibhara located at 3,794 meters, known for granting wishes and providing protection to devotees who undertake the challenging pilgrimage.",
    detailedHistory: "The temple's origins date back to the 18th century when local legends emerged of a goddess appearing to shepherds. It gained popularity as a wish-fulfilling deity and became an important pilgrimage site for Eastern Nepal.",
    image: "/pathibara.jpg",
  gallery: ["/pathibara.jpg", "/pathibara.jpg", "/pathibara.jpg"],
   rating: 4.7,
    visitors: "50K+ annually",
    architecture: "Mountain Shrine Style",
    architectureStyle: "High-Altitude Architecture",
    architecturalFeatures: ["Mountain top location", "Stone shrine", "Prayer flags", "Pilgrim shelter"],
    materials: ["Stone", "Wood", "Metal", "Clay"],
    dimensions: "Small shrine structure",
    festivals: ["Navaratri", "Chaitra Dashain", "Local festivals"],
    coordinates: { lat: 27.3500, lng: 87.8333 },
    timings: "6:00 AM - 5:00 PM",
    entryFee: "Free",
    contact: "+977-24-420123",
    preservationStatus: "Local Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "4 meters",
      foundation: "Mountain rock",
      specialFeatures: ["High-altitude pilgrimage", "Wish fulfillment"]
    },
    bestTimeToVisit: "March-May and September-November",
    accessibility: "Trekking required"
  },
  {
    id: 33,
    name: "Halesi Mahadev Temple",
    nameNewa: "हलेसी महादेव मन्दिर",
    location: "Halesi, Halesi Tuwachung Municipality, Khotang",
    district: "Khotang",
    period: "Ancient (Mythological)",
    significance: "Cave temple called the Pashupatinath of the east",
    description: "Sacred cave temple dedicated to Lord Shiva, featuring natural limestone formations that resemble Shiva lingam and other Hindu deities, worshipped by both Hindus and Buddhists.",
    detailedHistory: "Mentioned in Hindu scriptures as a place where Shiva hid from the demon Bhasmasur. The cave complex has been a pilgrimage site for centuries, with natural formations believed to be self-manifested deities.",
   image: "/haleshi-mahadev.jpeg",
  gallery: ["/haleshi-mahadev.jpeg", "/haleshi-mahadev.jpeg", "/haleshi-mahadev.jpeg"],
   rating: 4.6,
    visitors: "100K+ annually",
    architecture: "Natural Cave",
    architectureStyle: "Cave Temple Architecture",
    architecturalFeatures: ["Natural cave system", "Limestone formations", "Underground streams", "Rock-cut shrines"],
    materials: ["Natural limestone", "Stone", "Metal offerings"],
    dimensions: "Cave system: 100 meters depth",
    festivals: ["Maha Shivaratri", "Shrawan month", "Local festivals"],
    coordinates: { lat: 27.2833, lng: 86.6833 },
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    contact: "+977-36-420123",
    preservationStatus: "Natural Heritage Site",
    architecturalDetails: {
      tiers: 0,
      height: "Natural cave",
      foundation: "Limestone bedrock",
      specialFeatures: ["Natural Shiva lingam", "Cave pilgrimage"]
    },
    bestTimeToVisit: "October-April",
    accessibility: "Cave entry challenging"
  },
  {
    id: 34,
    name: "Baraha Chhetra Temple",
    nameNewa: "बराह क्षेत्र मन्दिर",
    location: "Chatara, Barahachhetra Municipality, Sunsari",
    district: "Sunsari",
    period: "Ancient (Mythological)",
    significance: "Vishnu's Varaha avatar temple at river confluence",
    description: "Sacred temple dedicated to Lord Vishnu's Varaha (boar) avatar, located at the confluence of Saptakoshi and Koka rivers, mentioned in ancient Hindu scriptures.",
    detailedHistory: "Believed to be the place where Vishnu appeared as Varaha to rescue the Earth goddess. The temple has been mentioned in Puranas and has been a pilgrimage site for centuries for salvation rituals.",
 image: "/baraha.jpg",
  gallery: ["/baraha.jpg", "/baraha.jpg", "/baraha.jpg"],  
   rating: 4.5,
    visitors: "150K+ annually",
    architecture: "Nagara Style",
    architectureStyle: "Terai Temple Architecture",
    architecturalFeatures: ["River confluence", "Main shrine", "Ghats", "Pilgrim accommodation"],
    materials: ["Stone", "Marble", "Brick", "Wood"],
    dimensions: "Main temple: 15 meters height",
    festivals: ["Makar Sankranti", "Vishnu related festivals", "River festivals"],
    coordinates: { lat: 26.5833, lng: 87.0833 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-25-420123",
    preservationStatus: "Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "15 meters",
      foundation: "River bank",
      specialFeatures: ["Varaha avatar", "River confluence significance"]
    },
    bestTimeToVisit: "October-March",
    accessibility: "Flat terrain accessible"
  },
  {
    id: 35,
    name: "Budhasubba Temple",
    nameNewa: "बुढासुब्बा मन्दिर",
    location: "Bijayapur, Dharan Sub-Metropolitan City, Sunsari",
    district: "Sunsari",
    period: "18th Century",
    significance: "Wish-fulfilling shrine known for bamboo offerings",
    description: "Unique temple dedicated to Budhasubba, a deity worshipped for wish fulfillment, famous for the tradition of offering bamboo shoots instead of flowers.",
    detailedHistory: "The temple dates back to the 18th century and is associated with the legendary Kiranti king Budhasubba. The unique bamboo offering tradition symbolizes the region's indigenous cultural practices.",
    image: "/budasubbha.jpg",
  gallery: ["/budasubbha.jpg", "/budasubbha.jpg", "/budasubbha.jpg"],
     rating: 4.3,
    visitors: "120K+ annually",
    architecture: "Local Style",
    architectureStyle: "Kiranti Architecture",
    architecturalFeatures: ["Bamboo grove", "Simple shrine", "Offering area", "Natural setting"],
    materials: ["Bamboo", "Thatch", "Wood", "Stone"],
    dimensions: "Small shrine structure",
    festivals: ["Local festivals", "Udauli", "Ubhauli"],
    coordinates: { lat: 26.8167, lng: 87.2833 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-25-520123",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "5 meters",
      foundation: "Natural ground",
      specialFeatures: ["Bamboo offerings", "Indigenous worship"]
    },
    bestTimeToVisit: "Year-round",
    accessibility: "Easy access"
  },
  {
    id: 36,
    name: "Dantakali Temple",
    nameNewa: "दन्तकाली मन्दिर",
    location: "Dharan, Sunsari",
    district: "Sunsari",
    period: "Ancient (Mythological)",
    significance: "Shakti Peeth where Sati's tooth is believed to have fallen",
    description: "Important Shakti Peeth temple dedicated to Goddess Dantakali, believed to be where a tooth of Goddess Sati fell, making it a powerful energy center.",
    detailedHistory: "Mentioned in ancient texts as one of the 51 Shakti Peeths. The temple has been a center of Shakti worship for centuries, attracting tantric practitioners and devotees seeking spiritual power.",
    image: "/dantakali.jpeg",
  gallery: ["/dantakali.jpeg", "/dantakali.jpeg", "/dantakali.jpeg"],
     rating: 4.4,
    visitors: "100K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Shakti Peeth Architecture",
    architecturalFeatures: ["Main shrine", "Sacred pond", "Tantric symbols", "Stone carvings"],
    materials: ["Stone", "Marble", "Metal", "Wood"],
    dimensions: "Main temple: 12 meters height",
    festivals: ["Navaratri", "Dashain", "Shakti festivals"],
    coordinates: { lat: 26.8167, lng: 87.2833 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-25-520124",
    preservationStatus: "Religious Site",
    architecturalDetails: {
      tiers: 2,
      height: "12 meters",
      foundation: "Stone platform",
      specialFeatures: ["Shakti Peeth", "Sati's tooth legend"]
    },
    bestTimeToVisit: "During Navaratri",
    accessibility: "Easy access"
  },
  {
    id: 37,
    name: "Bindhyabasini Temple",
    nameNewa: "बिन्ध्यबासिनी मन्दिर",
    location: "Pokhara Metropolitan City, Kaski",
    district: "Kaski",
    period: "17th Century",
    significance: "Durga temple overlooking Pokhara valley",
    description: "Important temple of Goddess Bindhyabasini (Durga) located on a small hill overlooking Pokhara city, serving as the city's protective deity.",
    detailedHistory: "Established in the 17th century by King Kulmandan Shah, the temple has been the protective deity of Pokhara. It was an important site during the unification of Nepal.",
     image: "/bindhabasini.jpeg",
  gallery: ["/bindhabasini.jpeg", "/bindhabasini.jpeg", "/bindhabasini.jpeg"],
 rating: 4.6,
    visitors: "500K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Hill Temple Architecture",
    architecturalFeatures: ["Hilltop location", "City views", "Bell tower", "Sacred trees"],
    materials: ["Stone", "Wood", "Copper", "Brick"],
    dimensions: "Main temple: 10 meters height",
    festivals: ["Dashain", "Navaratri", "Local festivals"],
    coordinates: { lat: 28.2167, lng: 83.9833 },
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-61-420123",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 2,
      height: "10 meters",
      foundation: "Hilltop platform",
      specialFeatures: ["City protector", "Panoramic views"]
    },
    bestTimeToVisit: "September-December",
    accessibility: "Hill climb required"
  },
  {
    id: 38,
    name: "Tal Barahi Temple",
    nameNewa: "ताल बराही मन्दिर",
    location: "Phewa Lake, Pokhara Metropolitan City, Kaski",
    district: "Kaski",
    period: "18th Century",
    significance: "Island temple dedicated to Goddess Barahi",
    description: "Picturesque two-story pagoda temple located on an island in Phewa Lake, dedicated to Goddess Barahi (Varahi), accessible only by boat.",
    detailedHistory: "Built in the 18th century, the temple became popular as Pokhara developed into a tourist destination. The island location adds to its spiritual significance as a place of isolation and meditation.",
     image: "/tal-barahi.jpeg",
  gallery: ["/tal-barahi.jpeg", "/tal-barahi.jpeg", "/tal-barahi.jpeg"],
   rating: 4.8,
    visitors: "800K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Island Temple Architecture",
    architecturalFeatures: ["Island location", "Lake setting", "Boat access", "Two-story structure"],
    materials: ["Wood", "Stone", "Tile", "Metal"],
    dimensions: "Height: 8 meters",
    festivals: ["Dashain", "Barahi Jatra", "Boating festivals"],
    coordinates: { lat: 28.2167, lng: 83.9500 },
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Boat fee: ₹200 per person",
    contact: "+977-61-420124",
    preservationStatus: "Tourist Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "8 meters",
      foundation: "Island bedrock",
      specialFeatures: ["Island temple", "Boat access only"]
    },
    bestTimeToVisit: "October-April",
    accessibility: "Boat access required"
  },
  {
    id: 39,
    name: "Baglung Kalika Temple",
    nameNewa: "बाग्लुङ कालिका मन्दिर",
    location: "Baglung Municipality, Baglung",
    district: "Baglung",
    period: "17th Century",
    significance: "Renowned Shakti Peeth of western Nepal",
    description: "Important temple of Goddess Kalika located on a hilltop overlooking the Kali Gandaki river, known for its spiritual power and panoramic views.",
    detailedHistory: "Established in the 17th century, the temple became a major Shakti Peeth in western Nepal. It has been an important site for tantric practices and spiritual seekers.",
   image: "/baglung-kalika.jpg",
  gallery: ["/baglung-kalika.jpg", "/baglung-kalika.jpg", "/baglung-kalika.jpg"],
   rating: 4.4,
    visitors: "80K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Western Nepal Architecture",
    architecturalFeatures: ["Hilltop location", "River views", "Stone steps", "Prayer flags"],
    materials: ["Stone", "Wood", "Copper", "Brick"],
    dimensions: "Main temple: 9 meters height",
    festivals: ["Dashain", "Navaratri", "Local festivals"],
    coordinates: { lat: 28.2667, lng: 83.6000 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-68-420123",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 2,
      height: "9 meters",
      foundation: "Hilltop platform",
      specialFeatures: ["Shakti Peeth", "River valley views"]
    },
    bestTimeToVisit: "October-December",
    accessibility: "Hill climb required"
  },
  {
    id: 40,
    name: "Swargadwari Temple",
    nameNewa: "स्वर्गद्वारी मन्दिर",
    location: "Swargadwari, Pyuthan Municipality, Pyuthan",
    district: "Pyuthan",
    period: "19th Century",
    significance: "Sacred hilltop temple with eternal fire",
    description: "Important pilgrimage temple located at 2,100 meters, known for its eternal flame that has been burning continuously since its discovery.",
    detailedHistory: "Founded in the late 19th century by Guru Maharaj Narayan Khatri, the temple complex includes ashrams, gaushalas (cow shelters), and the famous eternal flame that symbolizes spiritual enlightenment.",
    image: "/swargadari.jpg",
  gallery: ["/swargadari.jpg", "/swargadari.jpg", "/swargadari.jpg"],
   rating: 4.5,
    visitors: "60K+ annually",
    architecture: "Ashram Style",
    architectureStyle: "Spiritual Complex Architecture",
    architecturalFeatures: ["Eternal flame", "Ashram complex", "Cow shelters", "Hilltop location"],
    materials: ["Stone", "Wood", "Clay", "Thatch"],
    dimensions: "Complex spread over 50 hectares",
    festivals: ["Maha Shivaratri", "Guru Purnima", "Local festivals"],
    coordinates: { lat: 28.0833, lng: 82.8333 },
    timings: "5:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-86-420123",
    preservationStatus: "Religious Site",
    architecturalDetails: {
      tiers: 1,
      height: "Main temple: 6 meters",
      foundation: "Hilltop complex",
      specialFeatures: ["Eternal flame", "Spiritual community"]
    },
    bestTimeToVisit: "March-May and October-November",
    accessibility: "Hill trek required"
  },
  {
    id: 41,
    name: "Palanchowk Bhagwati Temple",
    nameNewa: "पलाञ्चोक भगवती मन्दिर",
    location: "Palanchowk, Panchkhal Municipality, Kavrepalanchok",
    district: "Kavrepalanchok",
    period: "17th Century",
    significance: "Famous Bhagwati goddess temple",
    description: "Renowned temple of Goddess Bhagwati known for its powerful deity and beautiful natural setting in the hills of Kavrepalanchok district.",
    detailedHistory: "Established in the 17th century, the temple gained fame for its wish-fulfilling deity. It has been an important pilgrimage site for devotees from Kathmandu Valley and surrounding areas.",
    image: "/palanchowk-bagwati.jpg",
  gallery: ["/palanchowk-bagwati.jpg", "/palanchowk-bagwati.jpg", "/palanchowk-bagwati.jpg"],
   rating: 4.4,
    visitors: "120K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Hill Temple Architecture",
    architecturalFeatures: ["Hill location", "Stone carvings", "Bell tower", "Natural spring"],
    materials: ["Stone", "Wood", "Copper", "Brick"],
    dimensions: "Main temple: 7 meters height",
    festivals: ["Dashain", "Navaratri", "Chaitra Dashain"],
    coordinates: { lat: 27.6500, lng: 85.5833 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-11-420123",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 2,
      height: "7 meters",
      foundation: "Hillside platform",
      specialFeatures: ["Wish-fulfilling deity", "Hill pilgrimage"]
    },
    bestTimeToVisit: "September-November",
    accessibility: "Hill road access"
  },
  {
    id: 42,
    name: "Kalinchowk Bhagwati Temple",
    nameNewa: "कालिन्चोक भगवती मन्दिर",
    location: "Kalinchowk, Kalinchowk Rural Municipality, Dolakha",
    district: "Dolakha",
    period: "Ancient",
    significance: "Snowy hilltop Shakti temple",
    description: "Sacred temple of Goddess Kalinchowk Bhagwati located at 3,842 meters, offering panoramic Himalayan views and powerful spiritual energy.",
    detailedHistory: "An ancient temple with origins lost in time, Kalinchowk has been a pilgrimage site for centuries. The temple remains covered in snow for much of the year, adding to its mystical significance.",
    image: "/kalinchowk-bagwati.jpg",
  gallery: ["/kalinchowk-bagwati.jpg", "/kalinchowk-bagwati.jpg", "/kalinchowk-bagwati.jpg"],
     rating: 4.7,
    visitors: "40K+ annually",
    architecture: "Mountain Shrine",
    architectureStyle: "High-Altitude Architecture",
    architecturalFeatures: ["Snow location", "Stone shrine", "Himalayan views", "Pilgrim shelter"],
    materials: ["Stone", "Wood", "Metal", "Snow-resistant materials"],
    dimensions: "Small shrine structure",
    festivals: ["Dashain", "Mata festivals", "Summer pilgrimages"],
    coordinates: { lat: 27.9333, lng: 86.2333 },
    timings: "7:00 AM - 4:00 PM (weather permitting)",
    entryFee: "Free",
    contact: "+977-49-520123",
    preservationStatus: "High-Altitude Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "4 meters",
      foundation: "Mountain rock",
      specialFeatures: ["High-altitude Shakti Peeth", "Snow temple"]
    },
    bestTimeToVisit: "April-June and September-November",
    accessibility: "Trekking required"
  },
  {
    id: 43,
    name: "Bageshwori Temple",
    nameNewa: "बागेश्वरी मन्दिर",
    location: "Nepalgunj Sub-Metropolitan City, Banke",
    district: "Banke",
    period: "18th Century",
    significance: "One of the oldest Durga temples in western Nepal",
    description: "Ancient temple of Goddess Bageshwori (Durga) located in Nepalgunj, serving as an important religious center for western Nepal and bordering Indian states.",
    detailedHistory: "Built in the 18th century, the temple has been a major religious center for the entire Mid-Western development region. It attracts devotees from both Nepal and India.",
    image: "/Bageshwori_Temple_Nepalgunj.JPG",
  gallery: ["/Bageshwori_Temple_Nepalgunj.JPG", "/Bageshwori_Temple_Nepalgunj.JPG", "/Bageshwori_Temple_Nepalgunj.JPG"],
  rating: 4.3,
    visitors: "200K+ annually",
    architecture: "Shikhara Style",
    architectureStyle: "Terai Temple Architecture",
    architecturalFeatures: ["Main shrine", "Sacred pond", "Prayer halls", "Pilgrim facilities"],
    materials: ["Stone", "Marble", "Brick", "Wood"],
    dimensions: "Main temple: 12 meters height",
    festivals: ["Navaratri", "Dashain", "Durga Puja"],
    coordinates: { lat: 28.0500, lng: 81.6167 },
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free",
    contact: "+977-81-520123",
    preservationStatus: "Regional Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "12 meters",
      foundation: "Stone platform",
      specialFeatures: ["Western Nepal center", "Cross-border pilgrimage"]
    },
    bestTimeToVisit: "October-December",
    accessibility: "Fully accessible"
  },
  {
    id: 44,
    name: "Jaleshwar Mahadev Temple",
    nameNewa: "जलेश्वर महादेव मन्दिर",
    location: "Jaleshwar, Jaleshwar Municipality, Mahottari",
    district: "Mahottari",
    period: "Ancient",
    significance: "Famous Shiva temple in Terai",
    description: "Important temple of Lord Shiva located in the central Terai region, known for its large Shiva lingam and spiritual significance.",
    detailedHistory: "An ancient temple with origins dating back centuries, Jaleshwar Mahadev has been a major pilgrimage site for the Mithila region. The temple is mentioned in local folklore and historical records.",
    image: "/jaleshor.jpg",
    gallery: ["/jaleshor.jpg", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.2,
    visitors: "150K+ annually",
    architecture: "Nagara Style",
    architectureStyle: "Mithila Architecture",
    architecturalFeatures: ["Large Shiva lingam", "Temple tank", "Prayer halls", "Sculptures"],
    materials: ["Stone", "Marble", "Brick", "Wood"],
    dimensions: "Main temple: 10 meters height",
    festivals: ["Maha Shivaratri", "Shrawan month", "Local festivals"],
    coordinates: { lat: 26.6500, lng: 85.8000 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-44-420123",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "10 meters",
      foundation: "Stone platform",
      specialFeatures: ["Large Shiva lingam", "Mithila region importance"]
    },
    bestTimeToVisit: "July-August for Shrawan",
    accessibility: "Flat terrain accessible"
  },
  {
    id: 45,
    name: "Chhinnamasta Bhagwati Temple",
    nameNewa: "छिन्नमस्ता भगवती मन्दिर",
    location: "Rajbiraj, Saptari Municipality, Saptari",
    district: "Saptari",
    period: "18th Century",
    significance: "Fearsome goddess temple popular in eastern Terai",
    description: "Temple dedicated to Goddess Chhinnamasta, the self-decapitated form of Durga, representing one of the ten Mahavidyas in Tantric Hinduism.",
    detailedHistory: "Established in the 18th century, the temple became an important center for tantric practices. Chhinnamasta symbolizes self-sacrifice, transformation, and the dual nature of existence.",
    image: "/Chinnamasta.JPG",
    gallery: ["/Chinnamasta.JPG", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    rating: 4.3,
    visitors: "80K+ annually",
    architecture: "Tantric Style",
    architectureStyle: "Mahavidya Temple Architecture",
    architecturalFeatures: ["Chhinnamasta idol", "Tantric symbols", "Sacrificial area", "Meditation spaces"],
    materials: ["Stone", "Metal", "Wood", "Clay"],
    dimensions: "Main temple: 8 meters height",
    festivals: ["Navaratri", "Tantric festivals", "Full moon nights"],
    coordinates: { lat: 26.5333, lng: 86.7500 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-31-420123",
    preservationStatus: "Tantric Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "8 meters",
      foundation: "Stone base",
      specialFeatures: ["Chhinnamasta deity", "Tantric practices"]
    },
    bestTimeToVisit: "During Navaratri",
    accessibility: "Easy access"
  },
  {
    id: 46,
    name: "Ridi Temple (Rishikesh Mandir)",
    nameNewa: "रिडी मन्दिर",
    location: "Ridi, Ruru Rural Municipality, Gulmi",
    district: "Gulmi",
    period: "16th Century",
    significance: "Sacred Vishnu temple on Gandaki River",
    description: "Important temple of Lord Vishnu located at the confluence of Ridi River and Kali Gandaki, known for its natural shaligram stones and spiritual significance.",
    detailedHistory: "Founded in the 16th century by King Mukunda Sen of Palpa, the temple became a major pilgrimage site due to the abundance of shaligram stones (fossil stones worshipped as Vishnu) in the river.",
    image: "/ridi.webp",
  gallery: ["/ridi.webp", "/ridi.webp", "/ridi.webp"],
   rating: 4.4,
    visitors: "100K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Western Hill Architecture",
    architecturalFeatures: ["River confluence", "Shaligram stones", "Main shrine", "Pilgrim ghats"],
    materials: ["Stone", "Wood", "Brick", "Tile"],
    dimensions: "Main temple: 9 meters height",
    festivals: ["Makar Sankranti", "Vishnu related festivals", "River festivals"],
    coordinates: { lat: 27.9833, lng: 83.4667 },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "Free",
    contact: "+977-79-420123",
    preservationStatus: "Regional Heritage",
    architecturalDetails: {
      tiers: 2,
      height: "9 meters",
      foundation: "River bank",
      specialFeatures: ["Shaligram stones", "River confluence"]
    },
    bestTimeToVisit: "October-March",
    accessibility: "Hill road access"
  },
  {
    id: 47,
    name: "Devghat Dham",
    nameNewa: "देवघाट धाम",
    location: "Devghat, Tanahun/Chitwan",
    district: "Tanahun/Chitwan",
    period: "Ancient",
    significance: "Sacred river confluence with many ashrams and temples",
    description: "Important religious site at the confluence of Kali Gandaki and Trisuli rivers, featuring numerous temples, ashrams, and meditation centers for spiritual practices.",
    detailedHistory: "An ancient pilgrimage site mentioned in Hindu scriptures, Devghat has been a center for spiritual learning and retirement for sadhus and devotees for centuries.",
   image: "/devghat-dham.jpg",
  gallery: ["/devghat-dham.jpg", "/devghat-dham.jpg", "/devghat-dham.jpg"], 
    rating: 4.5,
    visitors: "200K+ annually",
    architecture: "Ashram Complex",
    architectureStyle: "Spiritual Center Architecture",
    architecturalFeatures: ["River confluence", "Multiple temples", "Ashrams", "Meditation caves"],
    materials: ["Stone", "Wood", "Brick", "Thatch"],
    dimensions: "Large complex spread over 50 hectares",
    festivals: ["Makar Sankranti", "Shivaratri", "Spiritual gatherings"],
    coordinates: { lat: 27.7667, lng: 84.4167 },
    timings: "24 hours",
    entryFee: "Free",
    contact: "+977-56-520123",
    preservationStatus: "Spiritual Heritage Site",
    architecturalDetails: {
      tiers: 2,
      height: "Varies by temple",
      foundation: "River confluence area",
      specialFeatures: ["Ashram complex", "Spiritual retirement center"]
    },
    bestTimeToVisit: "October-March",
    accessibility: "Partially accessible"
  },
  {
    id: 48,
    name: "Tripureshwor Mahadev Temple",
    nameNewa: "त्रिपुरेश्वर महादेव मन्दिर",
    location: "Tripureshwor, Kathmandu",
    district: "Kathmandu",
    period: "19th Century",
    significance: "Historic temple of Lord Shiva",
    description: "Important Shiva temple located near the Bagmati River in Kathmandu, known for its religious significance and architectural beauty.",
    detailedHistory: "Built in the early 19th century, the temple has been an important religious site for local communities. It features a large Shiva lingam and traditional Newar architecture.",
   image: "/Tripureshwor_Mahadev.jpg",
  gallery: ["/Tripureshwor_Mahadev.jpg", "/Tripureshwor_Mahadev.jpg", "/Tripureshwor_Mahadev.jpg"],
   rating: 4.2,
    visitors: "100K+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Architecture",
    architecturalFeatures: ["Shiva lingam", "Stone carvings", "Bell tower", "River proximity"],
    materials: ["Stone", "Wood", "Brick", "Tile"],
    dimensions: "Main temple: 8 meters height",
    festivals: ["Maha Shivaratri", "Shrawan month", "Local festivals"],
    coordinates: { lat: 27.6936, lng: 85.3186 },
    timings: "5:00 AM - 8:00 PM",
    entryFee: "Free",
    contact: "+977-1-447035",
    preservationStatus: "Protected Monument",
    architecturalDetails: {
      tiers: 2,
      height: "8 meters",
      foundation: "Stone platform",
      specialFeatures: ["River side temple", "Community worship center"]
    },
    bestTimeToVisit: "July-August for Shrawan",
    accessibility: "Easy access"
  },
{
  "id": 49,
  "name": "Badimalika Temple",
  "nameNewa": "बडिमालिका मन्दिर",
  "location": "Triveni, Budhiganga Municipality, Bajura District",
  "district": "Bajura",
  "period": "Ancient (Exact date unknown)",
  "significance": "High-altitude Shakti Peetha (Goddess Bhagwati) temple with panoramic views.",
  "description": "Dedicated to Goddess Bhagwati as Malika Devi, this is one of the most significant and remote Shakti Peethas in Nepal. Perched at an altitude of approximately 3,200 meters, the temple offers breathtaking views of the surrounding Api and Saipal Himalayan ranges. The main idol is a natural stone revered as the manifestation of the goddess. A large fair (Mela) is held during the full moon of August (Shrawan Purnima), attracting thousands of pilgrims who undertake a challenging trek to seek blessings.",
  "detailedHistory": "The temple's origins are shrouded in legend, with strong associations to the Mahabharata era. It is believed that the Pandavas, during their exile, established this temple to worship Goddess Durga. The site is considered a place where a part of Sati's body (the divine consort of Lord Shiva) fell, making it a highly revered Shakti Peetha. The current structure is a simple stone and wood construction, typical of high-altitude Himalayan shrines, maintained and revered by local communities for centuries.",
  image: "/Badi_Malika.png",
  gallery: ["/Badi_Malika.png", "/Badi_Malika.png", "/Badi_Malika.png"],
   "rating": 4.8,
  "visitors": "50K+ annually (primarily during festivals)",
  "architecture": "Traditional Himalayan Style",
  "architectureStyle": "Local Stone Masonry",
  "architecturalFeatures": ["Stone sanctum", "Bell at entrance", "Flagstaff (Dhvaja)", "Natural spring nearby"],
  "materials": ["Stone", "Wood"],
  "dimensions": "Main temple: Small sanctum, approximately 4 meters in height",
  "festivals": ["Badimalika Mela (Shrawan Purnima)", "Navaratri", "Dashain"],
  "coordinates": { "lat": 29.5361, "lng": 81.5508 },
  "timings": "5:00 AM - 6:00 PM (Varies seasonally)",
  "entryFee": "Free",
  "contact": "N/A",
  "preservationStatus": "Community Managed",
  "architecturalDetails": {
    "tiers": 1,
    "height": "~4 meters",
    "foundation": "Natural bedrock",
    "specialFeatures": ["High-altitude pilgrimage site", "Trekking destination", "Panoramic Himalayan views"]
  },
  "bestTimeToVisit": "August-October for clear skies and the main festival",
  "accessibility": "Difficult; requires a multi-day trek from the district headquarters."
},
{
  "id": 50,
  "name": "Kushma Kalika Temple",
  "nameNewa": "कुश्मा कालिका मन्दिर",
  "location": "Kushma, Kushma Municipality, Parbat District",
  "district": "Parbat",
  "period": "Unknown (Ancient)",
  "significance": "Famous Shakti temple overlooking the Kaligandaki gorge.",
  "description": "The Kushma Kalika Temple is a highly revered shrine dedicated to Goddess Kali, situated dramatically on the edge of the world's second-deepest gorge, the Kaligandaki. The temple complex provides awe-inspiring views of the gorge and the surrounding cliffs. It is a key pilgrimage site, especially during Dashain and Navaratri, when devotees offer animal sacrifices to the goddess. The temple's location also makes it a popular spot for visitors enjoying the nearby suspension bridges and the natural beauty of the region.",
  "detailedHistory": "The exact founding date is unknown, but local legends state that the goddess manifested here to protect the region from evil forces. The temple has been a central place of worship for the local Magar and other communities for generations. Its strategic and spectacular location suggests it has long been considered a sacred power spot (Siddha Peetha). The structure has been renovated over time but retains its traditional character.",
  image: "/kushma-kalika.jpg",
  gallery: ["/kushma-kalika.jpg", "/kushma-kalika.jpg", "/kushma-kalika.jpg"], 
  "rating": 4.5,
  "visitors": "80K+ annually",
  "architecture": "Pagoda Style",
  "architectureStyle": "Mixed Nepalese",
  "architecturalFeatures": ["Two-tiered pagoda", "Gold-plated pinnacle (Gajur)", "Stone sculptures", "Viewpoint of the gorge"],
  "materials": ["Stone", "Wood", "Brick", "Tile"],
  "dimensions": "Main temple: ~7 meters height",
  "festivals": ["Dashain", "Navaratri", "Chaitra Dashain"],
  "coordinates": { "lat": 28.2167, "lng": 83.6833 },
  "timings": "5:00 AM - 8:00 PM",
  "entryFee": "Free",
  "contact": "N/A",
  "preservationStatus": "Community Managed",
  "architecturalDetails": {
    "tiers": 2,
    "height": "~7 meters",
    "foundation": "Stone platform on cliff edge",
    "specialFeatures": ["Cliff-edge location", "Views of Kaligandaki Gorge", "Associated with nearby suspension bridges"]
  },
  "bestTimeToVisit": "October-November and March-April for clear weather.",
  "accessibility": "Easy; accessible by road directly to the temple premises."
},
{
"id": 51,
"name": "Dupcheshwor Mahadev Temple",
"nameNewa": "दुप्चेश्वर महादेव मन्दिर",
"location": "Dupcheshwor Rural Municipality, Nuwakot District",
"district": "Nuwakot",
"period": "Ancient",
"significance": "Sacred Shiva temple associated with a local legend of a Tamang's cow.",
"description": "Dupcheshwor Mahadev Temple is a revered pilgrimage site nestled in the hills of Nuwakot. The temple is dedicated to Lord Shiva and is central to a popular local legend. It is believed that a unique stone, recognized as a Shiva Lingam, was discovered when a Tamang farmer's lost cow spontaneously poured its milk upon it. This serene temple attracts devotees seeking blessings and is known for its peaceful, natural setting.",
"detailedHistory": "The temple's origins are rooted in oral history and legend, passed down through generations. The story of the divine discovery of the Shiva Lingam by a cow has made it a site of faith for the local Tamang and other communities. The simple structure reflects the traditional religious architecture of the area and has been a community-managed place of worship for centuries.",
 image: "/dupcheshor_mahadev.jpg",
  gallery: ["/dupcheshor_mahadev.jpg", "/dupcheshor_mahadev.jpg", "/dupcheshor_mahadev.jpg"],
  "rating": 4.3,
"visitors": "35K+ annually",
"architecture": "Traditional Style",
"architectureStyle": "Local Rural Architecture",
"architecturalFeatures": ["Simple sanctum", "Natural stone shrine", "Peaceful forest setting"],
"materials": ["Stone", "Wood"],
"dimensions": "Small shrine, approx. 3 meters in height",
"festivals": ["Maha Shivaratri", "Shrawan month"],
"coordinates": { "lat": 27.9833, "lng": 85.2000 },
"timings": "5:00 AM - 6:00 PM",
"entryFee": "Free",
"contact": "N/A",
"preservationStatus": "Community Managed",
"architecturalDetails": {
"tiers": 1,
"height": "~3 meters",
"foundation": "Natural stone base",
"specialFeatures": ["Site of local legend", "Natural Shiva Lingam", "Important pilgrimage for local communities"]
},
"bestTimeToVisit": "July-August (Shrawan) and during Maha Shivaratri.",
"accessibility": "Moderate; requires travel on rural roads."
},

{
"id": 52,
"name": "Jalpa Devi Temple",
"nameNewa": "जल्पा देवी मन्दिर",
"location": "Bidur Municipality, Nuwakot District",
"district": "Nuwakot",
"period": "Medieval",
"significance": "A historically and religiously significant Shakti Peetha in Nuwakot.",
"description": "Jalpa Devi Temple is one of the prominent and ancient temples dedicated to Goddess Devi in the Nuwakot district. Situated in the district headquarters of Bidur, the temple holds immense religious importance for the local populace. It is a center for Shakti worship and is particularly crowded during major Hindu festivals. The temple's architecture and location reflect its long-standing status as a key spiritual site in the region.",
"detailedHistory": "The exact date of the temple's establishment is unclear but it is considered a medieval-period temple with deep historical roots in the area. It has been a focal point for religious and cultural activities in Nuwakot for generations. The temple has undergone renovations over time to maintain its structure while preserving its ancient essence.",
 image: "/Jalapa-Devi-Temple.png",
  gallery: ["/Jalapa-Devi-Temple.png", "/Jalapa-Devi-Temple.png", "/Jalapa-Devi-Temple.png"],
  "rating": 4.2,
"visitors": "40K+ annually",
"architecture": "Pagoda Style",
"architectureStyle": "Traditional Nepalese",
"architecturalFeatures": ["Pagoda roof", "Stone platform", "Central sanctum"],
"materials": ["Brick", "Wood", "Tile"],
"dimensions": "Main temple: ~8 meters height",
"festivals": ["Dashain", "Navaratri", "Chaitra Dashain"],
"coordinates": { "lat": 27.9167, "lng": 85.1667 },
"timings": "6:00 AM - 7:00 PM",
"entryFee": "Free",
"contact": "N/A",
"preservationStatus": "Community Managed",
"architecturalDetails": {
"tiers": 2,
"height": "~8 meters",
"foundation": "Stone platform",
"specialFeatures": ["One of the principal Devi temples of Nuwakot", "Historical significance"]
},
"bestTimeToVisit": "During Dashain (September-October) for the main festivals.",
"accessibility": "Easy; accessible by vehicle within Bidur town."
},

{
"id": 53,
"name": "Indra Kamala Temple",
"nameNewa": "इन्द्र कमला मन्दिर",
"location": "Bidur Municipality, Nuwakot District",
"district": "Nuwakot",
"period": "Ancient",
"significance": "A significant cultural site where thousands worship the goddess during Dashain to fulfill wishes.",
"description": "Also known as Indrakamala Mai, this temple is a major cultural and religious hub in Nuwakot. Dedicated to Goddess Indra Kamala, it is renowned for the belief that the deity grants the wishes of her devotees. The temple sees a massive influx of thousands of pilgrims during the Dashain festival, creating a vibrant and devout atmosphere. It is a key site for understanding the religious practices and community faith in the region.",
"detailedHistory": "The temple has ancient origins, with its history intertwined with local myths and traditions. It has been a site of worship for centuries, with its popularity growing over time due to the widespread belief in the goddess's power to fulfill wishes. The temple is managed by a local trust and is central to the cultural identity of Nuwakot.",
image: "/indra kamala.jpeg",
  gallery: ["/indra kamala.jpeg", "/indra kamala.jpeg", "/indra kamala.jpeg"],
  "rating": 4.6,
"visitors": "80K+ annually (Peak during Dashain)",
"architecture": "Pagoda Style",
"architectureStyle": "Traditional Nepalese",
"architecturalFeatures": ["Multi-tiered pagoda", "Spacious courtyard for large gatherings", "Ornate wooden windows"],
"materials": ["Brick", "Wood", "Tile"],
"dimensions": "Main temple: ~10 meters height",
"festivals": ["Dashain", "Navaratri"],
"coordinates": { "lat": 27.9200, "lng": 85.1633 },
"timings": "5:00 AM - 8:00 PM (Extended during festivals)",
"entryFee": "Free",
"contact": "N/A",
"preservationStatus": "Community Managed",
"architecturalDetails": {
"tiers": 3,
"height": "~10 meters",
"foundation": "Raised stone platform",
"specialFeatures": ["Famous for wish-fulfillment", "Major Dashain pilgrimage destination", "Large courtyard for festival crowds"]
},
"bestTimeToVisit": "During Dashain (September-October) to experience the peak religious fervor.",
"accessibility": "Easy; located in Bidur, the district headquarters."
},


{
  "id": 54,
  "name": "Baijanath Temple",
  "nameNewa": "बैजनाथ मन्दिर",
  "location": "Sanfebagar Municipality, Achham District",
  "district": "Achham",
  "period": "Medieval (Approx. 16th Century)",
  "significance": "Ancient Shiva temple with historic links to the Katyuri and Khas Kingdoms.",
  "description": "Baijanath Temple is one of the most historically significant and ancient temples in the Far-Western region of Nepal. Dedicated to Lord Shiva, it is believed to have been a prominent religious center during the reign of the Khas Malla and Katyuri kings. The temple features a unique architectural style that is distinct from the pagoda style of Kathmandu Valley. The main shrine houses a large Shiva Lingam, and the complex includes several smaller shrines and a sacred pond. It is a vital site for understanding the spread of Shaivism in the Khas kingdom.",
  "detailedHistory": "Inscriptions and local chronicles suggest the temple was built or significantly renovated around the 16th century. It served as a royal temple for the local rulers. The architectural motifs and construction techniques show a blend of indigenous styles and influences from the plains of India. The temple has undergone several restorations to preserve its historical value.",
  image: "/baijainath.jpg",
  gallery: ["/baijainath.jpg", "/baijainath.jpg", "/baijainath.jpg"],
  "rating": 4.2,
  "visitors": "30K+ annually",
  "architecture": "Rekha Deul Style",
  "architectureStyle": "Khas Malla Architecture",
  "architecturalFeatures": ["Curvilinear spire", "Stone masonry", "Sculpted deities on walls", "Ancient inscriptions"],
  "materials": ["Stone"],
  "dimensions": "Main temple: ~8 meters height",
  "festivals": ["Maha Shivaratri", "Shrawan month", "Local fairs"],
  "coordinates": { "lat": 29.2333, "lng": 81.2000 },
  "timings": "6:00 AM - 6:00 PM",
  "entryFee": "Free",
  "contact": "N/A",
  "preservationStatus": "Protected Monument of National Importance",
  "architecturalDetails": {
    "tiers": 1,
    "height": "~8 meters",
    "foundation": "High stone platform",
    "specialFeatures": ["Historic inscriptions", "Example of Khas Malla architecture", "Ancient sacred pond"]
  },
  "bestTimeToVisit": "October to March for pleasant weather.",
  "accessibility": "Moderate; accessible by road."
},

{
  "id": 55,
  "name": "Tripureshwari Temple",
  "nameNewa": "त्रिपुरेश्वरी मन्दिर",
  "location": "Dadeldhura Municipality, Dadeldhura District",
  "district": "Dadeldhura",
  "period": "Ancient",
  "significance": "Shakti temple widely worshipped across the Far-West region.",
  "description": "Tripureshwari Temple, also known as Tripura Sundari, is a major Shakti Peetha in the Far-Western Development Region of Nepal. Located on a hilltop in Dadeldhura, it is dedicated to Goddess Tripurasundari. The temple is a key pilgrimage destination, believed to grant the wishes of devotees. The site offers a commanding view of the surrounding hills and valleys. It holds immense cultural and religious importance, particularly during the Dashain festival when a large number of devotees visit to offer sacrifices and prayers.",
  "detailedHistory": "The temple's history is linked to local legends of the goddess appearing to protect the region. It has been a center of Tantric worship for centuries. The current structure, while modernized, sits on an ancient site of worship. The temple management is a collaborative effort by the local community and religious trusts.",
  image: "/tripurashori dadeldhura.jpeg",
  gallery: ["/tripurashori dadeldhura.jpeg", "/tripurashori dadeldhura.jpeg", "/tripurashori dadeldhura.jpeg"],
  "rating": 4.6,
  "visitors": "60K+ annually",
  "architecture": "Modern Pagoda Style",
  "architectureStyle": "Contemporary Nepalese",
  "architecturalFeatures": ["Pagoda roof", "Concrete structure", "Hilltop location with views"],
  "materials": ["Concrete", "Wood", "Tile"],
  "dimensions": "Main temple: ~9 meters height",
  "festivals": ["Dashain", "Navaratri", "Chaitra Dashain"],
  "coordinates": { "lat": 29.3000, "lng": 80.5833 },
  "timings": "5:00 AM - 8:00 PM",
  "entryFee": "Free",
  "contact": "N/A",
  "preservationStatus": "Community Managed",
  "architecturalDetails": {
    "tiers": 2,
    "height": "~9 meters",
    "foundation": "Hilltop foundation",
    "specialFeatures": ["One of the principal Shakti Peethas of Far-West Nepal", "Hilltop pilgrimage site"]
  },
  "bestTimeToVisit": "During Dashain (September-October) for the festival atmosphere.",
  "accessibility": "Easy; accessible by vehicle directly to the temple."
},


{
  "id": 56,
  "name": "Bhairabsthan Temple",
  "nameNewa": "भैरबस्थान मन्दिर",
  "location": "Bhairabsthan, Tansen Municipality, Palpa District",
  "district": "Palpa",
  "period": "19th Century",
  "significance": "Bhairab temple famed for having the largest trishul (trident) in Nepal.",
  "description": "Bhairabsthan Temple is a unique and powerful shrine dedicated to Lord Bhairab, the fierce manifestation of Lord Shiva. Located near Tansen, the temple is most famous for its enormous iron trident (trishul), which is reputed to be the largest in Nepal, standing at over 20 feet tall. The temple attracts devotees who believe worshiping here can solve serious problems and offer protection from evil forces. The atmosphere is charged with devotion, especially on Saturdays and during specific festivals.",
  "detailedHistory": "The temple was established in the 19th century. The origin of the massive trishul is subject to local lore; some believe it was installed by a powerful tantric practitioner. The temple has been a significant site for tantric rituals and is deeply respected by the local community. The structure is a simple but imposing presence, fitting for the deity it houses.",
    image: "/Bhairabsthan_Palpa-2.jpg",
  gallery: ["/Bhairabsthan_Palpa-2.jpg", "/Bhairabsthan_Palpa-2.jpg", "/Bhairabsthan_Palpa-2.jpg"], 
  "rating": 4.4,
  "visitors": "50K+ annually",
  "architecture": "Traditional Style",
  "architectureStyle": "Local Palpa Architecture",
  "architecturalFeatures": ["Large trident (Trishul)", "Stone platform", "Main sanctum with Bhairab idol"],
  "materials": ["Stone", "Iron (Trishul)", "Wood"],
  "dimensions": "Trishul: over 6 meters (20 feet) tall",
  "festivals": ["Bhairab Ashtami", "Dashain", "Maha Shivaratri"],
  "coordinates": { "lat": 27.8500, "lng": 83.5500 },
  "timings": "6:00 AM - 7:00 PM",
  "entryFee": "Free",
  "contact": "N/A",
  "preservationStatus": "Community Managed",
  "architecturalDetails": {
    "tiers": 1,
    "height": "Varies",
    "foundation": "Stone foundation",
    "specialFeatures": ["Largest trident in Nepal", "Site for tantric practices", "Fierce deity worship"]
  },
  "bestTimeToVisit": "Year-round; Saturdays are considered especially auspicious.",
  "accessibility": "Easy; accessible by a short drive from Tansen bazaar."
},
{
  "id": 57,
  "name": "Bhairabi Temple",
  "nameNewa": "भैरबी मन्दिर",
  "location": "Bidur Municipality, Nuwakot District",
  "district": "Nuwakot",
  "period": "18th Century",
  "significance": "One of the most important Shakti Peethas of the region, part of the historic Nuwakot Durbar Square complex.",
  "description": "The Bhairabi Temple is a majestic and powerful shrine dedicated to Goddess Bhairabi, a fierce form of Durga. It stands proudly within the historic Nuwakot Durbar Square, a site of great historical importance. The temple is a classic example of Newar architecture, built during the early unification period of Nepal. It is a major pilgrimage site, especially during Dashain, and offers a serene spiritual atmosphere alongside panoramic views of the surrounding hills and the Trishuli River valley.",
  "detailedHistory": "The temple was constructed in the 18th century by Prithvi Narayan Shah, the unifier of modern Nepal, as part of his campaign to establish Nuwakot as a strategic and cultural center. It served as a key spiritual site for the royal family and the army during the unification campaign. The temple complex was significantly damaged in the 2015 earthquake but has been meticulously restored to its original grandeur, preserving its historical and architectural integrity.",
    image: "/Vairab_mandira,nuwakot.jpeg",
  gallery: ["/Vairab_mandira,nuwakot.jpeg", "/Vairab_mandira,nuwakot.jpeg", "/Vairab_mandira,nuwakot.jpeg"],
   "rating": 4.5,
  "visitors": "55K+ annually",
  "architecture": "Pagoda Style",
  "architectureStyle": "Newar Architecture",
  "architecturalFeatures": ["Two-tiered pagoda", "Intricate wood carvings on struts and toranas", "Stone-paved courtyard", "Historic bell"],
  "materials": ["Brick", "Wood", "Tile"],
  "dimensions": "Main temple: ~12 meters height",
  "festivals": ["Dashain", "Navaratri", "Bhairabi Jatra"],
  "coordinates": { "lat": 27.9173, "lng": 85.1567 },
  "timings": "6:00 AM - 7:00 PM",
  "entryFee": "Free (Part of Nuwakot Durbar Square entry may apply)",
  "contact": "N/A",
  "preservationStatus": "Restored and Maintained (Part of a UNESCO Tentative List site)",
  "architecturalDetails": {
    "tiers": 2,
    "height": "~12 meters",
    "foundation": "Stone platform within the durbar square",
    "specialFeatures": ["Historic significance from Nepal's unification era", "Part of the Nuwakot Durbar Square ensemble", "Strategic hilltop location with cultural importance"]
  },
  "bestTimeToVisit": "Year-round; September-November for clear skies and during Dashain for the festive fervor.",
  "accessibility": "Easy; accessible by vehicle directly to Nuwakot Durbar Square."
},
{
  "id": 58,
  "name": "Kailashnath Mahadev Statue",
  "nameNewa": "कैलाशनाथ महादेव मूर्ति",
  "location": "Sanga, Suryabinayak Municipality (Bhaktapur/Kavre border)",
  "district": "Bhaktapur/Kavrepalanchok",
  "period": "2010 CE (Modern)",
  "significance": "World’s tallest Shiva statue.",
  "description": "The Kailashnath Mahadev Statue is a monumental modern marvel and a major tourist attraction. Standing at a height of 143 feet (43.5 meters), it is the tallest statue of Lord Shiva in the world. Located in Sanga on the border of Bhaktapur and Kavre districts, it is visible from kilometers away. The statue is constructed from copper, zinc, concrete, and steel. It depicts Lord Shiva in a meditative pose, holding a rudraksha mala and a trident. The complex includes a museum, a garden, and a viewpoint offering spectacular views of the Kathmandu Valley and the Himalayan range.",
  "detailedHistory": "The statue was conceived by businessman Kamal Jain and constructed over a period of five years, completing in 2010. It was built by a team of Indian artisans and stands as a testament to modern engineering and religious devotion. It has quickly become an iconic landmark of Nepal.",
  image: "/kailaishor_statue.jpg",
  gallery: ["/kailaishor_statue.jpg", "/kailaishor_statue.jpg", "/kailaishor_statue.jpg"],
  "rating": 4.6,
  "visitors": "500K+ annually",
  "architecture": "Modern Sculptural Monument",
  "architectureStyle": "Contemporary Iconic",
  "architecturalFeatures": ["Tall statue", "Viewing platform", "Museum", "Landscaped garden"],
  "materials": ["Copper", "Zinc", "Concrete", "Steel"],
  "dimensions": "Height: 43.5 meters (143 feet)",
  "festivals": ["Maha Shivaratri", "Shrawan month"],
  "coordinates": { "lat": 27.6422, "lng": 85.5281 },
  "timings": "8:00 AM - 7:00 PM",
  "entryFee": "Yes (For entry to the complex and museum)",
  "contact": "+977-1-6630663",
  "preservationStatus": "Privately Maintained Tourist Site",
  "architecturalDetails": {
    "tiers": 0,
    "height": "43.5 meters",
    "foundation": "Deep concrete foundation",
    "specialFeatures": ["World's tallest Shiva statue", "Modern engineering feat", "Major tourist attraction with museum facilities"]
  },
  "bestTimeToVisit": "Year-round; clear days for the best views.",
  "accessibility": "Very easy; located just off the Araniko Highway, with ample parking."
},

  {
    id: 59,
    name: "Gadimai Temple",
    nameNewa: "गडीमाई मन्दिर",
    location: "Bariyarpur, Mahagadhimai Municipality, Bara",
    district: "Bara",
    period: "19th Century",
    significance: "Temple known internationally for its animal sacrifice festival",
    description: "Controversial but significant temple of Goddess Gadimai famous for the biennial Gadimai Mela where hundreds of thousands of animals are sacrificed, representing one of the world's largest animal sacrifice events.",
    detailedHistory: "The temple gained prominence in the 19th century as a powerful Shakti Peeth. The Gadimai Mela occurs every five years and attracts devotees from Nepal and India. While controversial internationally, the festival represents deep-rooted tantric traditions and beliefs in appeasing the goddess through sacrifice for blessings and protection.",
   image: "/Gadhimai_Temple.jpg",
  gallery: ["/Gadhimai_Temple.jpg", "/Gadhimai_Temple.jpg", "/Gadhimai_Temple.jpg"],
   rating: 3.8,
    visitors: "500K+ during festival years",
    architecture: "Open Shrine Style",
    architectureStyle: "Terai Temple Architecture",
    architecturalFeatures: ["Open-air shrine", "Sacrificial grounds", "Temporary structures", "River proximity"],
    materials: ["Temporary materials", "Bamboo", "Thatch", "Clay"],
    dimensions: "Expansive festival grounds",
    festivals: ["Gadimai Mela (every 5 years)", "Navaratri"],
    coordinates: { lat: 27.0333, lng: 85.0833 },
    timings: "24 hours during festival",
    entryFee: "Free",
    contact: "+977-53-520123",
    preservationStatus: "Local Religious Site",
    architecturalDetails: {
      tiers: 0,
      height: "Ground level shrine",
      foundation: "Open ground",
      specialFeatures: ["Mass animal sacrifice", "Biennial mega festival"]
    },
    bestTimeToVisit: "During Gadimai Mela years",
    accessibility: "Open ground access"
  },
            
  {
    id: 60,
    name: "Siddhababa Temple",
    nameNewa: "सिद्धबाबा मन्दिर",
    location: "Butwal Sub-Metropolitan City, Rupandehi",
    district: "Rupandehi",
    period: "20th Century",
    significance: "Popular roadside Shiva temple",
    description: "Well-known Shiva temple located along the highway, famous for fulfilling wishes and blessings.",
    detailedHistory: "Gained popularity in the late 20th century as a roadside temple where travelers stop to pray for safe journeys.",
  image: "/Siddha_Baba_Temple.jpg",
  gallery: ["/Siddha_Baba_Temple.jpg", "/Siddha_Baba_Temple.jpg", "/Siddha_Baba_Temple.jpg"],
   rating: 4.2,
    visitors: "100K+ annually",
    architecture: "Modern Temple",
    architectureStyle: "Contemporary Nepali",
    architecturalFeatures: ["Shiva lingam", "Bell tower", "Prayer hall", "Parking area"],
    materials: ["Concrete", "Marble", "Metal"],
    dimensions: "Main hall: 10x15 meters",
    festivals: ["Maha Shivaratri", "Shrawan Month", "Mondays"],
    coordinates: { lat: 27.7000, lng: 83.4500 },
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free",
    contact: "+977-71-540123",
    preservationStatus: "Local Heritage",
    architecturalDetails: {
      tiers: 1,
      height: "8 meters",
      foundation: "Concrete base",
      specialFeatures: ["Highway location", "Traveler blessings"]
    },
    bestTimeToVisit: "July-August during Shrawan",
    accessibility: "Fully wheelchair accessible"
  }
]
interface ArchitectureStyle {
  id: string
  name: string
  nameNewa: string
  description: string
  detailedDescription: string
  features: string[]
  examples: string[]
  period: string
  image: string
  characteristics: {
    roof: string
    walls: string
    foundation: string
    decoration: string
  }
  historicalContext: string
}

const architectureStyles: ArchitectureStyle[] = [
  {
    id: "pagoda",
    name: "Pagoda Style",
    nameNewa: "पगोडा शैली",
    description: "Multi-tiered tower architecture with gracefully curved roofs",
    detailedDescription: "The Pagoda style is characterized by its multiple tiers, each progressively smaller, with gracefully curved roofs that symbolize the cosmic mountain. This style originated during the Malla period and represents the pinnacle of Newar architectural achievement.",
    features: ["Multiple tiers", "Curved roofs", "Wooden struts", "Golden finial", "Intricate carvings"],
    examples: ["Pashupatinath Temple", "Nyatapola Temple", "Taleju Bhawani Temple"],
    period: "Malla Period (12th-18th Century)",
    image: "/pasupati.jpg",
    characteristics: {
      roof: "Curved, multi-tiered with bronze/gold covering",
      walls: "Brick and wood with carved windows",
      foundation: "High stone platform",
      decoration: "Wood carvings, metal work, stone sculptures"
    },
    historicalContext: "Developed during the Malla period, influenced by both Indian and Chinese architectural traditions."
  },
  {
    id: "shikhara",
    name: "Shikhara Style",
    nameNewa: "शिखर शैली",
    description: "Towering spire architecture with intricate carvings",
    detailedDescription: "Characterized by its towering spire that curves inward, representing the cosmic axis.",
    features: ["Towering spire", "Curvilinear shape", "Sculptural decorations"],
    examples: ["Krishna Mandir", "Mahalaxmi Temple"],
    period: "Malla Period",
    image: "/krishnamandir.jpeg",
    characteristics: {
      roof: "Curvilinear spire",
      walls: "Stone with deity carvings",
      foundation: "Stone platform",
      decoration: "Deity sculptures, floral patterns"
    },
    historicalContext: "Influenced by North Indian temple architecture."
  },
  {
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    nameNewa: "पशुपतिनाथ मन्दिर",
    description: "Holiest Shiva temple with pagoda architecture on Bagmati river",
    detailedDescription: "The Pashupatinath Temple is Nepal's most sacred Hindu temple dedicated to Lord Shiva. Built in pagoda style, it features a two-tiered golden roof and four silver-plated doors. The temple complex spans both banks of the Bagmati River with numerous smaller temples and ashrams.",
    features: ["Golden roof", "Silver doors", "Nandi bull statue", "Riverfront ghats", "Royal bath"],
    examples: ["Main Sanctum", "Vishwarup Temple", "Guhyeshwari Temple"],
    period: "5th Century CE (Original), Rebuilt multiple times",
    image: "/pasupati.jpg",
    characteristics: {
      roof: "Two-tiered golden pagoda roof",
      walls: "Stone with intricate carvings",
      foundation: "Square base platform",
      decoration: "Gold and silver plating, stone sculptures"
    },
    historicalContext: "One of the 275 Paadal Petra Sthalams, mentioned in various Puranas. Current structure dates from 1692 CE."
  },
  {
    id: "guhyeshwari",
    name: "Guhyeshwari Temple",
    nameNewa: "गुह्येश्वरी मन्दिर",
    description: "Underground Shakti Peeth temple near Pashupatinath",
    detailedDescription: "Guhyeshwari Temple is one of the important Shakti Peethas where Sati's body parts fell. The temple features an underground sanctum with a sunken courtyard and unique tantric architecture. It represents the feminine energy counterpart to Pashupatinath.",
    features: ["Underground sanctum", "Sunken courtyard", "Tantric symbols", "Stone lingam"],
    examples: ["Main Sanctum", "Yoni Peetha"],
    period: "17th Century",
    image: "/gujaisori.jpg",
    characteristics: {
      roof: "Small shikhara style spire",
      walls: "Stone with tantric carvings",
      foundation: "Underground chamber",
      decoration: "Minimalistic, focus on yantras"
    },
    historicalContext: "Built by King Pratap Malla in the 17th century on an ancient tantric site."
  },
  {
    id: "budhanilkantha",
    name: "Budhanilkantha Temple",
    nameNewa: "बुढानिलकण्ठ मन्दिर",
    description: "Open-air temple with giant reclining Vishnu statue",
    detailedDescription: "Budhanilkantha features a massive 5-meter long stone sculpture of Lord Vishnu reclining on the cosmic serpent Shesha in a water tank. The temple showcases exceptional Gupta-period stone carving techniques and hydraulic engineering.",
    features: ["Monolithic sculpture", "Water tank", "Open-air design", "Serpent canopy"],
    examples: ["Vishnu Sculpture", "Nag Kunda"],
    period: "7th Century (Gupta Period)",
    image: "/budanilkanth.jpeg",
    characteristics: {
      roof: "Open to sky",
      walls: "Stone tank boundaries",
      foundation: "Water reservoir base",
      decoration: "Sculptural focus, minimal structural"
    },
    historicalContext: "Believed to be carved during the Licchavi period, mentioned in various Puranas."
  },
  {
    id: "swayambhunath",
    name: "Swayambhunath Stupa",
    nameNewa: "स्वयम्भूनाथ स्तुप",
    description: "Ancient Buddhist stupa with all-seeing eyes",
    detailedDescription: "Swayambhunath is one of the oldest religious sites in Nepal, featuring a massive stupa with the iconic Buddha eyes. The complex combines Buddhist and Hindu elements with multiple temples, monasteries, and shrines surrounding the main stupa.",
    features: ["All-seeing eyes", "Gilded spire", "Thirteen tiers", "Prayer wheels", "Vajra base"],
    examples: ["Main Stupa", "Harati Temple", "Anantapur Temple"],
    period: "5th Century CE",
    image: "/swayambhu.jpg",
    characteristics: {
      roof: "Hemispherical dome with conical spire",
      walls: "Whitewashed brick dome",
      foundation: "Three-tiered mandala platform",
      decoration: "Gold plating, painted eyes, prayer flags"
    },
    historicalContext: "Believed to be self-created (swayambhu), mentioned in various Buddhist texts."
  },
  {
    id: "kasthamandap",
    name: "Kasthamandap Temple",
    nameNewa: "काष्ठमण्डप मन्दिर",
    description: "Three-story wooden pavilion built from single tree",
    detailedDescription: "Kasthamandap is a unique wooden structure built from a single sal tree. This three-story pavilion-style temple features intricate woodwork and served as a public shelter and community center. It gave Kathmandu its name.",
    features: ["Single-tree construction", "Pavilion style", "Open ground floor", "Wooden struts"],
    examples: ["Main Pavilion", "Gorakhnath Shrine"],
    period: "12th Century",
    image: "/kasthamandap.jpeg",
    characteristics: {
      roof: "Triple-tiered pagoda style",
      walls: "Open wooden lattice work",
      foundation: "Stone platform with steps",
      decoration: "Wood carvings, metalwork details"
    },
    historicalContext: "Built during the reign of King Laxmi Narsingha Malla, reconstructed after 2015 earthquake."
  },
  {
    id: "seto-machhindranath",
    name: "Seto Machhindranath Temple",
    nameNewa: "सेतो मछिन्द्रनाथ मन्दिर",
    description: "White-colored deity temple with courtyard style",
    detailedDescription: "Dedicated to the white form of Machhindranath, this temple features a courtyard-style architecture with a two-tiered roof. The temple is known for its annual chariot festival and houses the sacred image of Seto Machhindranath.",
    features: ["Courtyard design", "White deity", "Chariot storage", "Bell tower"],
    examples: ["Main Shrine", "Courtyard", "Bell Tower"],
    period: "16th Century",
    image: "/machindranath.jpg",
    characteristics: {
      roof: "Two-tiered pagoda with golden finial",
      walls: "Brick with wooden windows",
      foundation: "Raised platform with courtyard",
      decoration: "White theme, metal ornaments"
    },
    historicalContext: "Built during the Malla period, central to Kathmandu's religious festivals."
  },
  {
    id: "taleju-bhawani",
    name: "Taleju Bhawani Temple",
    nameNewa: "तलेजु भवानी मन्दिर",
    description: "Royal goddess temple with multi-tiered pagoda design",
    detailedDescription: "Taleju Bhawani Temple is a magnificent five-story pagoda dedicated to the royal goddess of the Malla kings. The temple features exceptional wood carvings, metalwork, and was accessible only to royalty during Malla period.",
    features: ["Five tiers", "Golden torana", "Lion guardians", "Restricted access"],
    examples: ["Main Temple", "Bell Pavilion", "Lion Statues"],
    period: "16th Century (1564 CE)",
    image: "/teleju.jpeg",
    characteristics: {
      roof: "Five-tiered golden pagoda",
      walls: "Brick with carved wooden screens",
      foundation: "High stone platform",
      decoration: "Gold plating, intricate woodwork"
    },
    historicalContext: "Built by King Mahendra Malla, represents royal patronage of goddess worship."
  },
  {
    id: "maru-ganesh",
    name: "Maru Ganesh Temple",
    nameNewa: "मरु गणेश मन्दिर",
    description: "Small but significant Ganesh shrine with unique design",
    detailedDescription: "Maru Ganesh is a small but highly important Ganesh temple known for its four-faced Ganesh image. The temple features a simple yet elegant design with a single-tiered roof and serves as a protector of Kathmandu city.",
    features: ["Four-faced Ganesh", "City protector", "Simple design", "Street-side location"],
    examples: ["Ganesh Sanctum", "Stone Platform"],
    period: "17th Century",
    image: "/maruganash.jpg",
    characteristics: {
      roof: "Single-tiered pagoda style",
      walls: "Brick with small windows",
      foundation: "Street-level stone base",
      decoration: "Stone carvings, metal offerings"
    },
    historicalContext: "Established during Malla period as one of the four guardian Ganesh temples."
  },
  {
    id: "kumari-ghar",
    name: "Kumari Ghar",
    nameNewa: "कुमारी घर",
    description: "Living goddess residence with palace architecture",
    detailedDescription: "Kumari Ghar is the residence of the Living Goddess Kumari, built in traditional Newari palace style. The three-story brick building features exquisite wood carvings, courtyards, and a balcony from which the Kumari gives darshan.",
    features: ["Courtyard design", "Wooden windows", "Balcony appearance", "Guardian deities"],
    examples: ["Main Courtyard", "Darshan Balcony", "Puja Rooms"],
    period: "18th Century (1757 CE)",
    image: "/kumari.jpeg",
    characteristics: {
      roof: "Mixed pagoda and sloped design",
      walls: "Red brick with carved windows",
      foundation: "Palace-style platform",
      decoration: "Intricate wood carvings, metalwork"
    },
    historicalContext: "Built by King Jaya Prakash Malla, combining temple and palace architecture."
  },
  {
    id: "bhadrakali",
    name: "Bhadrakali Temple",
    nameNewa: "भद्रकाली मन्दिर",
    description: "Fierce goddess temple near Tundikhel",
    detailedDescription: "Bhadrakali Temple is dedicated to the fierce form of Goddess Kali. The temple features a distinctive shikhara-style spire with stone carvings depicting various manifestations of the goddess. Located near the army parade ground.",
    features: ["Shikhara spire", "Stone carvings", "Fierce deity", "Military significance"],
    examples: ["Main Shrine", "Stone Carvings", "Sacrificial Platform"],
    period: "17th Century",
    image: "/Bhadrakali.JPG",
    characteristics: {
      roof: "North Indian shikhara style",
      walls: "Stone with deity carvings",
      foundation: "Raised stone platform",
      decoration: "Stone sculptures, weapon offerings"
    },
    historicalContext: "Built during Malla period, associated with royal protection and military power."
  },
  {
    id: "dakshinkali",
    name: "Dakshinkali Temple",
    nameNewa: "दक्षिणकाली मन्दिर",
    description: "Famous Kali temple with traditional Nepali architecture",
    detailedDescription: "Dakshinkali Temple is renowned for animal sacrifices to Goddess Kali. The temple features a simple yet powerful design with stone steps leading down to the river where sacrifices are performed. The architecture reflects tantric influences.",
    features: ["River-side location", "Sacrificial area", "Stone steps", "Natural setting"],
    examples: ["Main Shrine", "Sacrificial Platform", "River Ghat"],
    period: "18th Century",
    image: "/daxinkali.jpg",
    characteristics: {
      roof: "Simple sloped roof",
      walls: "Stone and brick construction",
      foundation: "Riverbank natural foundation",
      decoration: "Minimal, focus on ritual space"
    },
    historicalContext: "Gained prominence in the 18th century as a major tantric pilgrimage site."
  },
  {
    id: "ichangu-narayan",
    name: "Ichangu Narayan Temple",
    nameNewa: "इचङ्गु नारायण मन्दिर",
    description: "One of four protective Narayan temples",
    detailedDescription: "Ichangu Narayan is one of the four Narayan temples protecting Kathmandu Valley. Built in classic pagoda style, it features beautiful stone sculptures and carvings dating back to the Licchavi period. The temple sits on a hill with panoramic views.",
    features: ["Hilltop location", "Stone sculptures", "Protective deity", "Ancient inscriptions"],
    examples: ["Main Temple", "Stone Garuda", "Ancient Inscriptions"],
    period: "Licchavi Period (5th-8th Century)",
    image: "/ichangu.jpg",
    characteristics: {
      roof: "Two-tiered pagoda style",
      walls: "Stone with Licchavi carvings",
      foundation: "Hilltop stone platform",
      decoration: "Ancient stone sculptures, carvings"
    },
    historicalContext: "One of the oldest continuously worshipped temples in Nepal with Licchavi inscriptions."
  },
  {
    id: "rato-machhindranath",
    name: "Rato Machhindranath Temple",
    nameNewa: "रातो मछिन्द्रनाथ मन्दिर",
    description: "Red-colored rain god temple in Patan",
    detailedDescription: "Dedicated to the red form of Machhindranath, this temple is famous for Nepal's longest chariot festival. The architecture features a multi-tiered pagoda style with extensive wood carvings and a unique chariot storage system.",
    features: ["Red deity", "Chariot festival", "Wood carvings", "Courtyard design"],
    examples: ["Main Temple", "Chariot Storage", "Courtyard Shrines"],
    period: "16th Century",
    image: "/ratomachinadra.jpg",
    characteristics: {
      roof: "Three-tiered pagoda with golden apex",
      walls: "Brick with carved wooden windows",
      foundation: "Courtyard-based platform",
      decoration: "Red theme, extensive woodwork"
    },
    historicalContext: "Central to Patan's religious life, with festivals dating back to Malla period."
  },
  {
  id: "krishna-mandir",
  name: "Krishna Mandir",
  nameNewa: "कृष्ण मन्दिर",
  description: "Exquisite stone shikhara temple dedicated to Lord Krishna",
  detailedDescription: "Krishna Mandir in Patan Durbar Square is a masterpiece of stone architecture built in the classic shikhara style. The temple features 21 golden pinnacles and intricate stone carvings depicting scenes from Hindu epics like Mahabharata and Ramayana.",
  features: ["Stone shikhara", "21 golden pinnacles", "Epic story carvings", "Multi-story design"],
  examples: ["Main Sanctum", "Krishna Carvings", "Radha-Krishna Shrine"],
  period: "17th Century (1637 CE)",
  image: "/krishnamandir.jpeg",
  characteristics: {
    roof: "Multi-spired shikhara with golden kalasha",
    walls: "Solid stone with narrative reliefs",
    foundation: "Stepped stone platform",
    decoration: "Stone carvings, gold pinnacles, metalwork"
  },
  historicalContext: "Built by King Siddhi Narsingh Malla in memory of his two queens."
},
{
  id: "hiranya-varna-mahavihar",
  name: "Hiranya Varna Mahavihar",
  nameNewa: "हिरण्य वर्ण महाविहार",
  description: "Golden Buddhist monastery with pagoda architecture",
  detailedDescription: "Also known as the Golden Temple, this Buddhist monastery features a stunning golden facade and three-story pagoda structure. The courtyard contains numerous shrines, prayer wheels, and exquisite metalwork showcasing Newar craftsmanship.",
  features: ["Golden facade", "Three-story pagoda", "Courtyard complex", "Metal artwork"],
  examples: ["Main Shrine", "Prayer Wheels", "Courtyard Stupas"],
  period: "12th Century",
    image: "/hiranya.jpg",
  characteristics: {
    roof: "Three-tiered golden pagoda",
    walls: "Brick with gold-plated metal sheets",
    foundation: "Square courtyard layout",
    decoration: "Gold plating, metal sculptures, painted details"
  },
  historicalContext: "Founded in the 12th century, renovated multiple times with royal patronage."
},
{
  id: "kumbheshwar",
  name: "Kumbheshwar Temple",
  nameNewa: "कुम्भेश्वर मन्दिर",
  description: "Five-story Shiva temple with sacred pond",
  detailedDescription: "Kumbheshwar Temple is one of only two five-story pagoda temples in Nepal dedicated to Lord Shiva. The temple features a natural spring-fed pond believed to have waters from Gosainkunda Lake, especially sacred during Janai Purnima.",
  features: ["Five tiers", "Sacred pond", "Natural spring", "Stone lingam"],
  examples: ["Main Temple", "Kumbheswar Pond", "Bathing Ghats"],
  period: "14th Century",
    image: "/kumbheshor.jpg",
  characteristics: {
    roof: "Five-tiered pagoda with bronze finial",
    walls: "Brick with wooden struts",
    foundation: "Platform overlooking pond",
    decoration: "Wood carvings, metal ornaments, stonework"
  },
  historicalContext: "Believed to be built during the reign of King Jayasthiti Malla."
},
{
  id: "banglamukhi",
  name: "Banglamukhi Temple",
  nameNewa: "बंगलामुखी मन्दिर",
  description: "Goddess temple known for wish-fulfillment",
  detailedDescription: "Banglamukhi Temple is dedicated to the goddess of speech and wishes. The architecture follows traditional Newari style with a two-tiered roof and intricate wood carvings. The temple is particularly popular among those seeking legal victories and wish fulfillment.",
  features: ["Two-tiered roof", "Wish-fulfilling deity", "Wood carvings", "Tantric practices"],
  examples: ["Main Shrine", "Yantra Platform", "Bell Tower"],
  period: "17th Century",
    image: "/bangalmukhi.jpeg",
  characteristics: {
    roof: "Double-tiered pagoda style",
    walls: "Brick with carved wooden windows",
    foundation: "Raised stone base",
    decoration: "Wood carvings, tantric symbols, metal bells"
  },
  historicalContext: "Established during Malla period as a important tantric worship site."
},
{
  id: "santaneshwor-mahadev",
  name: "Santaneshwor Mahadev",
  nameNewa: "सन्तानेश्वर महादेव",
  description: "Shiva temple popular for child blessings",
  detailedDescription: "Santaneshwor Mahadev is a Shiva temple renowned for granting blessings of children. The temple features a simple yet elegant pagoda design with a natural spring and peaceful surroundings. Couples seeking children perform special pujas here.",
  features: ["Child-blessing deity", "Natural spring", "Peaceful environment", "Simple architecture"],
  examples: ["Shiva Lingam", "Natural Spring", "Meditation Area"],
  period: "18th Century",
    image: "/santaneshor.jpeg",
  characteristics: {
    roof: "Single-tiered pagoda roof",
    walls: "Stone and brick construction",
    foundation: "Natural hillside setting",
    decoration: "Minimalistic, focus on spiritual atmosphere"
  },
  historicalContext: "Gained popularity in the 18th century for its child-blessing reputation."
},
{
  id: "nyatapola",
  name: "Nyatapola Temple",
  nameNewa: "न्यातपोल मन्दिर",
  description: "Tallest five-story pagoda temple in Nepal",
  detailedDescription: "Nyatapola Temple is Bhaktapur's tallest temple, rising 30 meters high with five distinct tiers. The temple showcases exceptional earthquake-resistant architecture and is flanked by massive guardian statues in descending order of strength.",
  features: ["Five stories", "Earthquake-resistant", "Guardian statues", "Tallest pagoda"],
  examples: ["Main Temple", "Guardian Statues", "Stone Platform"],
  period: "18th Century (1702 CE)",
    image: "/nata.jpg",
  characteristics: {
    roof: "Five-tiered pagoda with wide eaves",
    walls: "Brick with thick wooden framework",
    foundation: "Pyramidal stone base",
    decoration: "Wood carvings, guardian sculptures, metalwork"
  },
  historicalContext: "Built by King Bhupatindra Malla during Bhaktapur's golden age."
},
{
  id: "dattatreya",
  name: "Dattatreya Temple",
  nameNewa: "दत्तात्रेय मन्दिर",
  description: "Unique temple dedicated to Trinity incarnation",
  detailedDescription: "Dattatreya Temple is dedicated to the combined incarnation of Brahma, Vishnu, and Shiva. The temple features exceptional wood carvings including famous peacock windows and is built from the wood of a single tree.",
  features: ["Trinity deity", "Peacock windows", "Single-tree construction", "Tantric symbols"],
  examples: ["Main Shrine", "Peacock Window", "Wood Carvings"],
  period: "15th Century (1427 CE)",
    image: "/datroya.jpg",
  characteristics: {
    roof: "Three-tiered pagoda style",
    walls: "Wood with intricate carvings",
    foundation: "Stone platform with steps",
    decoration: "Wood carvings, tantric emblems, metal details"
  },
  historicalContext: "Built by King Yaksha Malla, one of Bhaktapur's oldest temples."
},
{
  id: "changu-narayan",
  name: "Changu Narayan Temple",
  nameNewa: "चांगु नारायण मन्दिर",
  description: "Oldest Hindu temple in Nepal with Licchavi art",
  detailedDescription: "Changu Narayan is the oldest dated Hindu temple in Nepal, featuring exquisite Licchavi period stone carvings and inscriptions. The two-story pagoda temple contains some of the finest examples of ancient Nepali stone sculpture.",
  features: ["Oldest temple", "Licchavi inscriptions", "Stone sculptures", "Hilltop location"],
  examples: ["Main Temple", "Stone Inscriptions", "Garuda Statue"],
  period: "4th Century CE",
    image: "/changu-narayan.jpg",
  characteristics: {
    roof: "Two-tiered pagoda with golden roof",
    walls: "Stone with ancient carvings",
    foundation: "Hilltop stone platform",
    decoration: "Ancient stone sculptures, metalwork, carvings"
  },
  historicalContext: "UNESCO World Heritage site with inscriptions dating to 464 CE."
},
{
  id: "doleshwar-mahadev",
  name: "Doleshwar Mahadev",
  nameNewa: "डोलेश्वर महादेव",
  description: "Shiva temple believed to be head of Kedarnath",
  detailedDescription: "Doleshwar Mahadev is a Shiva temple where the head part of Kedarnath is believed to be located. The temple features a simple yet powerful architecture with a large Shiva lingam and peaceful surroundings attracting pilgrims from Nepal and India.",
  features: ["Kedarnath connection", "Large lingam", "Pilgrimage site", "Simple design"],
  examples: ["Shiva Lingam", "Prayer Hall", "Pilgrim Facilities"],
  period: "Unknown (Ancient)",
    image: "/doleshor.png",
  characteristics: {
    roof: "Domed shikhara style",
    walls: "Stone and concrete modern construction",
    foundation: "Natural hill foundation",
    decoration: "Simple, focus on spiritual significance"
  },
  historicalContext: "Gained prominence as alternative pilgrimage site after Kedarnath floods."
},
{
  id: "siddhi-lakshmi",
  name: "Siddhi Lakshmi Temple",
  nameNewa: "सिद्धि लक्ष्मी मन्दिर",
  description: "Stone staircase temple with intricate carvings",
  detailedDescription: "Also known as Lohan Dega, this temple features a unique design where the main shrine is approached through stone staircases flanked by human and animal figures. The temple showcases excellent stone carving craftsmanship.",
  features: ["Stone staircases", "Guardian figures", "Stone carvings", "Unique approach"],
  examples: ["Main Shrine", "Stone Staircases", "Guardian Statues"],
  period: "17th Century",
  image: "/siddhilaxmi.jpg",
  characteristics: {
    roof: "Shikhara style spire",
    walls: "Stone with narrative panels",
    foundation: "Elevated platform with stairs",
    decoration: "Stone sculptures, carvings, figurative art"
  },
  historicalContext: "Built during the reign of King Jitamitra Malla in Bhaktapur."
},
{
  id: "balkumari",
  name: "Balkumari Temple",
  nameNewa: "बलकुमारी मन्दिर",
  description: "Goddess temple central to Bisket Jatra",
  detailedDescription: "Balkumari Temple is dedicated to the goddess of power and is central to Bhaktapur's famous Bisket Jatra festival. The temple features traditional Newari architecture with a three-tiered roof and extensive wood carvings.",
  features: ["Festival center", "Three tiers", "Wood carvings", "Cultural significance"],
  examples: ["Main Temple", "Festival Ground", "Traditional Architecture"],
  period: "16th Century",
    image: "/balkumari.jpg",
  characteristics: {
    roof: "Three-tiered pagoda style",
    walls: "Brick with carved wooden elements",
    foundation: "Traditional stone platform",
    decoration: "Wood carvings, metal ornaments, festival decor"
  },
  historicalContext: "Integral to Bhaktapur's cultural and religious festivals for centuries."
},
{
  id: "manakamana",
  name: "Manakamana Temple",
  nameNewa: "मनकामना मन्दिर",
  description: "Hilltop wish-fulfilling goddess temple",
  detailedDescription: "Manakamana Temple is a famous hilltop shrine dedicated to the wish-fulfilling goddess Bhagwati. The temple features traditional Nepali architecture and is accessible by cable car, attracting thousands of pilgrims annually.",
  features: ["Wish-fulfilling", "Hilltop location", "Cable car access", "Pilgrimage site"],
  examples: ["Main Shrine", "Cable Car Station", "Pilgrim Facilities"],
  period: "17th Century",
    image: "/manakamana.jpg",
  characteristics: {
    roof: "Two-tiered pagoda with gilded roof",
    walls: "Stone and wood construction",
    foundation: "Hilltop stone platform",
    decoration: "Gold plating, bells, pilgrimage offerings"
  },
  historicalContext: "Gained popularity after cable car installation in 1998, but ancient site."
},
{
  id: "muktinath",
  name: "Muktinath Temple",
  nameNewa: "मुक्तिनाथ मन्दिर",
  description: "High-altitude temple sacred to Hindus and Buddhists",
  detailedDescription: "Muktinath is a sacred temple complex at 3,800 meters featuring 108 water sprouts and eternal flame. The architecture combines Hindu and Buddhist elements in a high-altitude environment with unique construction adaptations.",
  features: ["108 water sprouts", "Eternal flame", "High-altitude", "Multi-religious"],
  examples: ["Main Temple", "Water Channels", "Buddhist Gompa"],
  period: "19th Century (Current structure)",
    image: "/muktinath.jpg",
  characteristics: {
    roof: "Tibetan-style sloping roof",
    walls: "Stone with mud plaster",
    foundation: "Natural mountain foundation",
    decoration: "Simple, prayer flags, religious symbols"
  },
  historicalContext: "Mentioned in Hindu scriptures, current structure built in 19th century."
},
{
  id: "janaki-mandir",
  name: "Janaki Mandir",
  nameNewa: "जानकी मन्दिर",
  description: "Palace-style temple dedicated to Goddess Sita",
  detailedDescription: "Janaki Mandir is a magnificent palace-like temple built in mixed Mughal and Rajput styles. The three-story structure features elaborate arches, domes, and stained glass windows, representing one of Nepal's most impressive architectural achievements.",
  features: ["Mughal-Rajput style", "Three stories", "Stained glass", "Palace architecture"],
  examples: ["Main Sanctum", "Central Dome", "Ornate Windows"],
  period: "20th Century (1910 CE)",
   image: "/janaki.jpg",
  characteristics: {
    roof: "Multiple domes with central large dome",
    walls: "Marble and stone with carvings",
    foundation: "Large platform with gardens",
    decoration: "Marble work, paintings, stained glass"
  },
  historicalContext: "Built by Queen Vrisha Bhanu of Tikamgarh, India in 1910."
},
{
  id: "ram-mandir",
  name: "Ram Mandir",
  nameNewa: "राम मन्दिर",
  description: "Lord Ram temple with traditional architecture",
  detailedDescription: "Ram Mandir in Janakpur is dedicated to Lord Ram and features traditional Nepali temple architecture with shikhara-style spire. The temple is part of the Ramayana circuit and showcases beautiful stone carvings depicting scenes from the epic.",
  features: ["Shikhara spire", "Ramayana scenes", "Stone carvings", "Religious circuit"],
  examples: ["Main Temple", "Stone Carvings", "Prayer Hall"],
  period: "19th Century",
    image: "/rammandir.JPG",
  characteristics: {
    roof: "North Indian shikhara style",
    walls: "Stone with narrative panels",
    foundation: "Raised stone platform",
    decoration: "Stone carvings, religious motifs"
  },
  historicalContext: "Part of Janakpur's religious complex associated with Ramayana heritage."
},
{
  id: "dolakha-bhimsen",
  name: "Dolakha Bhimsen Temple",
  nameNewa: "दोलखा भीमसेन मन्दिर",
  description: "Guardian deity temple for traders and business",
  detailedDescription: "Dolakha Bhimsen Temple is dedicated to the deity of trade and commerce. The temple features unique architecture with a sweating Shiva lingam and is particularly important for business communities seeking prosperity and success.",
  features: ["Sweating lingam", "Business deity", "Unique phenomenon", "Trade center"],
  examples: ["Bhimsen Shrine", "Shiva Lingam", "Trading Hall"],
  period: "17th Century",
    image: "/dolakha-bhimsen.jpg",
  characteristics: {
    roof: "Pagoda style with extended eaves",
    walls: "Stone and wood combination",
    foundation: "Mountain hillside foundation",
    decoration: "Business symbols, trade implements"
  },
  historicalContext: "Ancient trading post temple gaining prominence in 17th century."
},
{
  id: "pathibhara-devi",
  name: "Pathibhara Devi Temple",
  nameNewa: "पाथीभरा देवी मन्दिर",
  description: "High-altitude goddess temple with panoramic views",
  detailedDescription: "Pathibhara Devi is a sacred hilltop temple at 3,794 meters featuring simple yet powerful architecture adapted to high-altitude conditions. The temple offers breathtaking Himalayan views and is reached by trekking.",
  features: ["High-altitude", "Trekking destination", "Panoramic views", "Simple architecture"],
  examples: ["Main Shrine", "Prayer Flags", "Viewpoint"],
  period: "Unknown (Ancient)",
    image: "/pathibara.jpg",
  characteristics: {
    roof: "Sloping tin roof for snow",
    walls: "Stone with wood framework",
    foundation: "Natural mountain ledge",
    decoration: "Minimal, prayer flags, natural setting"
  },
  historicalContext: "Ancient indigenous worship site later incorporated into Hindu tradition."
},
{
  id: "halesi-mahadev",
  name: "Halesi Mahadev Temple",
  nameNewa: "हलेसी महादेव मन्दिर",
  description: "Cave temple complex known as Pashupatinath of East",
  detailedDescription: "Halesi Mahadev is a unique cave temple where natural limestone formations are worshipped as Shiva lingam. The complex features multiple caves with natural skylights and religious significance for both Hindus and Buddhists.",
  features: ["Cave temple", "Natural formations", "Multi-religious", "Skylight opening"],
  examples: ["Main Cave", "Shiva Lingam", "Secondary Caves"],
  period: "Pre-historic (Natural formation)",
   image: "/haleshi-mahadev.jpeg",
  characteristics: {
    roof: "Natural cave ceiling",
    walls: "Limestone cave walls",
    foundation: "Natural cave floor",
    decoration: "Natural formations, religious markings"
  },
  historicalContext: "Ancient natural worship site mentioned in various Hindu texts."
},
{
  id: "baraha-chhetra",
  name: "Baraha Chhetra Temple",
  nameNewa: "बराह क्षेत्र मन्दिर",
  description: "Varaha avatar temple at river confluence",
  detailedDescription: "Baraha Chhetra is dedicated to Vishnu's Varaha (boar) avatar and located at the confluence of Sapta Koshi and Koka rivers. The temple features traditional architecture with riverfront ghats and pilgrimage facilities.",
  features: ["River confluence", "Varaha avatar", "Ghats", "Pilgrimage complex"],
  examples: ["Main Temple", "River Ghats", "Confluence Point"],
  period: "Ancient (Current structure 20th century)",
 image: "/baraha.jpg",
  characteristics: {
    roof: "Shikhara style spire",
    walls: "Stone and brick construction",
    foundation: "Riverbank foundation",
    decoration: "Varaha sculptures, religious symbols"
  },
  historicalContext: "Ancient pilgrimage site mentioned in Puranas, rebuilt after floods."
},
{
  id: "budhasubba",
  name: "Budhasubba Temple",
  nameNewa: "बुढासुब्बा मन्दिर",
  description: "Unique temple with bamboo worship traditions",
  detailedDescription: "Budhasubba Temple features a unique worship tradition where bamboo sticks are offered instead of flowers. The temple has simple architecture but rich cultural significance, particularly for love and relationship blessings.",
  features: ["Bamboo offerings", "Love deity", "Simple structure", "Cultural traditions"],
  examples: ["Main Shrine", "Bamboo Grove", "Offering Area"],
  period: "18th Century",
    image: "/budasubbha.jpg",
  characteristics: {
    roof: "Simple sloped roof",
    walls: "Brick and wood construction",
    foundation: "Garden setting",
    decoration: "Bamboo decorations, love symbols"
  },
  historicalContext: "Originated from Kirati king's memorial, evolved into temple worship."
},
{
  id: "dantakali",
  name: "Dantakali Temple",
  nameNewa: "दन्तकाली मन्दिर",
  description: "Shakti Peeth temple where Goddess Sati's tooth fell",
  detailedDescription: "Dantakali Temple is one of the 51 Shakti Peethas where the tooth of Goddess Sati is believed to have fallen. The temple features a unique three-story pagoda structure with intricate wood carvings depicting various manifestations of Kali. Located on a hillock in Dharan, it offers panoramic views of the surrounding plains and mountains. The temple complex includes multiple smaller shrines and a sacred pond used for ritual purification.",
  features: ["Shakti Peeth", "Three-story pagoda", "Sacred pond", "Panoramic views", "Ritual bathing area"],
  examples: ["Main Sanctum", "Kali Shrine", "Sacred Pond", "Hilltop Platform"],
  period: "Ancient site, Current structure 18th Century",
    image: "/dantakali.jpeg",
  characteristics: {
    roof: "Three-tiered pagoda with golden finial",
    walls: "Brick with carved wooden windows and panels",
    foundation: "Hillock stone platform with retaining walls",
    decoration: "Kali manifestations carvings, gold plating, ritual symbols"
  },
  historicalContext: "Ancient Shakti Peeth mentioned in medieval texts, current structure built by the Kirati kings with later renovations."
},
{
  id: "bindhyabasini",
  name: "Bindhyabasini Temple",
  nameNewa: "बिन्ध्यबासिनी मन्दिर",
  description: "White-colored Durga temple overlooking Pokhara valley",
  detailedDescription: "Bindhyabasini Temple is a magnificent white-colored shrine dedicated to Goddess Durga, situated on a small hill overlooking the Pokhara valley. The temple showcases classic Nepali pagoda architecture with a two-tiered roof and exquisite woodwork. The main deity is a black stone statue of Durga brought from India centuries ago. The temple is particularly crowded during Dashain when thousands of animals are sacrificed.",
  features: ["White marble construction", "Hilltop location", "Animal sacrifices", "Valley views", "Dashain celebrations"],
  examples: ["Main Temple", "Bell Tower", "Sacrificial Altar", "Viewpoint"],
  period: "17th Century (1647 CE)",
     image: "/bindhabasini.jpeg",
  characteristics: {
    roof: "Double-tiered pagoda with copper covering",
    walls: "White marble with wood carvings",
    foundation: "Hilltop platform with stone steps",
    decoration: "Marble carvings, gold trim, religious motifs"
  },
  historicalContext: "Established by King Siddhi Narasimha Malla of Kathmandu, becoming Pokhara's most important Hindu shrine."
},
{
  id: "tal-barahi",
  name: "Tal Barahi Temple",
  nameNewa: "ताल बराही मन्दिर",
  description: "Island temple dedicated to Goddess Barahi in Phewa Lake",
  detailedDescription: "Tal Barahi Temple is a picturesque two-story pagoda situated on a small island in the middle of Phewa Lake. Accessible only by boat, the temple features traditional Nepali architecture with a double-roof design and intricate wood carvings. The temple is dedicated to Goddess Barahi, the boar incarnation of Durga, and is particularly popular for wish fulfillment. The serene lake setting creates a spiritual atmosphere unique to this temple.",
  features: ["Island location", "Boat access", "Double-story pagoda", "Lake views", "Wish fulfillment"],
  examples: ["Main Shrine", "Boat Dock", "Lakefront Platform"],
  period: "18th Century",
     image: "/tal-barahi.jpeg",
  characteristics: {
    roof: "Two-tiered pagoda style with wide eaves",
    walls: "Wood and brick with lattice work",
    foundation: "Artificial island stone base",
    decoration: "Wood carvings, boat motifs, water deities"
  },
  historicalContext: "Built by local rulers to protect Phewa Lake and surrounding areas from natural disasters."
},
{
  id: "baglung-kalika",
  name: "Baglung Kalika Temple",
  nameNewa: "बाग्लुङ कालिका मन्दिर",
  description: "Renowned Shakti Peeth of western Nepal",
  detailedDescription: "Baglung Kalika Temple is one of the most important Shakti Peethas in western Nepal, dedicated to Goddess Kali. The temple features a unique blend of traditional Nepali and local architectural styles with a three-tiered roof and stone carvings. Perched on a hilltop overlooking the Kali Gandaki river, the temple attracts thousands of pilgrims during Dashain and other major festivals. The temple is known for its powerful spiritual energy and traditional tantric practices.",
  features: ["Shakti Peeth", "Hilltop location", "Tantric practices", "River views", "Festival gatherings"],
  examples: ["Main Temple", "Sacrificial Area", "Hilltop Complex"],
  period: "16th Century",
   image: "/baglung-kalika.jpg",
  characteristics: {
    roof: "Three-tiered pagoda with slate tiles",
    walls: "Stone masonry with wood reinforcements",
    foundation: "Hilltop stone platform with retaining walls",
    decoration: "Kali carvings, tantric symbols, weapon offerings"
  },
  historicalContext: "Ancient worship site formalized during the unification of Nepal under Prithvi Narayan Shah."
},
{
  id: "swargadwari",
  name: "Swargadwari Temple",
  nameNewa: "स्वर्गद्वारी मन्दिर",
  description: "Sacred hilltop temple with eternal fire",
  detailedDescription: "Swargadwari Temple is a unique pilgrimage site known for its eternal fire that has been burning continuously for centuries. The temple complex features simple yet powerful architecture adapted to the high-altitude environment. According to legend, the temple marks the spot where Pandavas from Mahabharata ascended to heaven. The temple is particularly important for cattle worship and is surrounded by grazing fields for sacred cows.",
  features: ["Eternal fire", "High altitude", "Cattle worship", "Pandava connection", "Simple architecture"],
  examples: ["Main Temple", "Eternal Fire", "Cow Sanctuary", "Pilgrim Hostels"],
  period: "19th Century",
    image: "/swargadari.jpg",
  characteristics: {
    roof: "Sloping tin roof for snow protection",
    walls: "Stone and mud plaster construction",
    foundation: "Hilltop natural foundation",
    decoration: "Minimalistic, fire symbols, cattle motifs"
  },
  historicalContext: "Founded by Guru Maharaj Narayan Khatri in the late 19th century based on ancient legends."
},
{
  id: "palanchowk-bhagwati",
  name: "Palanchowk Bhagwati Temple",
  nameNewa: "पालाञ्चोक भगवती मन्दिर",
  description: "Famous Bhagwati goddess temple with stone carvings",
  detailedDescription: "Palanchowk Bhagwati Temple is renowned for its exquisite stone carvings and powerful goddess manifestation. The temple features a unique shikhara-style spire with intricate stone work depicting various deities. The main idol is a rare black stone statue of Bhagwati that is believed to be self-manifested. The temple is particularly famous for granting boons to childless couples and is surrounded by beautiful natural scenery.",
  features: ["Stone carvings", "Self-manifested idol", "Child blessings", "Shikhara spire", "Natural setting"],
  examples: ["Main Shrine", "Stone Carvings", "Prayer Hall"],
  period: "17th Century",
    image: "/palanchowk-bagwati.jpg",
  characteristics: {
    roof: "North Indian shikhara style",
    walls: "Stone masonry with deity carvings",
    foundation: "Hillside stone platform",
    decoration: "Stone sculptures, religious narratives, floral patterns"
  },
  historicalContext: "Gained prominence during the Malla period as an important regional pilgrimage site."
},
{
  id: "kalinchowk-bhagwati",
  name: "Kalinchowk Bhagwati Temple",
  nameNewa: "कालिन्चोक भगवती मन्दिर",
  description: "Snowy hilltop Shakti temple at 3,842 meters",
  detailedDescription: "Kalinchowk Bhagwati Temple is one of Nepal's highest altitude temples, located at 3,842 meters amidst snow-capped peaks. The temple features simple stone architecture adapted to extreme weather conditions. Dedicated to Goddess Kali, the temple offers breathtaking panoramic views of the Himalayas including Gaurishankar, Langtang, and other peaks. The challenging trek to the temple is considered part of the spiritual journey.",
  features: ["High altitude", "Snow location", "Himalayan views", "Trekking destination", "Simple stone structure"],
  examples: ["Main Temple", "Viewpoint", "Trekker Shelter"],
  period: "Ancient site, Current structure 20th Century",
    image: "/kalinchowk-bagwati.jpg",
  characteristics: {
    roof: "Low-sloping stone roof",
    walls: "Dry stone masonry",
    foundation: "Mountain peak foundation",
    decoration: "Prayer flags, minimal carvings, natural elements"
  },
  historicalContext: "Ancient indigenous worship site later incorporated into Hindu tradition as a Shakti Peeth."
},
{
  id: "bageshwori",
  name: "Bageshwori Temple",
  nameNewa: "बागेश्वरी मन्दिर",
  description: "One of the oldest Durga temples in western Nepal",
  detailedDescription: "Bageshwori Temple is a historically significant Durga temple known for its cave shrine and natural spring. The temple complex features a unique combination of cave temple and conventional structure with intricate wood carvings. The main deity is believed to be a self-manifested stone lingam representing Durga. The temple is particularly important for the Tharu community and features unique local architectural elements.",
  features: ["Cave shrine", "Natural spring", "Self-manifested lingam", "Wood carvings", "Community significance"],
  examples: ["Cave Temple", "Main Shrine", "Natural Spring", "Prayer Hall"],
  period: "14th Century",
    image: "/Bageshwori_Temple_Nepalgunj.JPG",
  characteristics: {
    roof: "Multi-tiered pagoda with local style",
    walls: "Brick with terracotta work",
    foundation: "Natural cave and constructed platform",
    decoration: "Terracotta panels, wood carvings, local motifs"
  },
  historicalContext: "Ancient temple mentioned in medieval texts, served as important cultural center for western Terai."
},
{
  id: "jaleshwar-mahadev",
  name: "Jaleshwar Mahadev Temple",
  nameNewa: "जलेश्वर महादेव मन्दिर",
  description: "Famous Shiva temple in Mahottari district",
  detailedDescription: "Jaleshwar Mahadev Temple is an important Shiva temple known for its large stone lingam and extensive temple complex. The architecture showcases typical Mithila style with vibrant colors and intricate paintings. The temple is particularly crowded during Maha Shivaratri when thousands of devotees gather for worship. The complex includes multiple smaller shrines, a sacred pond, and facilities for religious ceremonies.",
  features: ["Large lingam", "Mithila architecture", "Colorful paintings", "Sacred pond", "Festival gatherings"],
  examples: ["Main Temple", "Shiva Lingam", "Sacred Pond", "Artwork"],
  period: "15th Century",
    image: "/jaleshor.jpg",
  characteristics: {
    roof: "Domed shikhara style",
    walls: "Brick with traditional paintings",
    foundation: "Large platform with water features",
    decoration: "Mithila art, colorful patterns, religious themes"
  },
  historicalContext: "Important regional temple developed during the Karnat dynasty rule in Mithila region."
},
{
  id: "chhinnamasta-bhagwati",
  name: "Chhinnamasta Bhagwati Temple",
  nameNewa: "छिन्नमस्ता भगवती मन्दिर",
  description: "Fearsome goddess temple popular in eastern Terai",
  detailedDescription: "Chhinnamasta Bhagwati Temple is dedicated to the self-decapitated form of Goddess Kali. The temple features unique tantric architecture with symbols of the goddess holding her own severed head. The complex includes a main shrine with intricate stone carvings depicting the Chhinnamasta legend. The temple is an important center for tantric practices and attracts practitioners from across South Asia.",
  features: ["Tantric architecture", "Self-decapitated deity", "Stone carvings", "Tantric practices", "Eastern Terai style"],
  examples: ["Main Shrine", "Tantric Symbols", "Stone Narratives"],
  period: "16th Century",
    image: "/Chinnamasta.JPG",
  characteristics: {
    roof: "Unique curved dome style",
    walls: "Stone with tantric carvings",
    foundation: "Raised platform with mystical geometry",
    decoration: "Tantric yantras, fierce deity forms, ritual symbols"
  },
  historicalContext: "Established as major tantric center during the Mughal period in eastern Nepal."
},
{
  id: "ridi-temple",
  name: "Ridi Temple (Rishikesh Mandir)",
  nameNewa: "रिडी मन्दिर",
  description: "Sacred Vishnu temple on Gandaki River",
  detailedDescription: "Ridi Temple is an important Vishnu temple located at the confluence of the Kali Gandaki and Ridi Khola rivers. The temple features exquisite wood carvings and stone sculptures depicting various incarnations of Vishnu. The main attraction is a beautiful black stone statue of Vishnu in his Rishikesh form. The temple is particularly famous for its annual fair and beautiful natural setting amidst river valleys.",
  features: ["River confluence", "Wood carvings", "Vishnu incarnations", "Annual fair", "Natural beauty"],
  examples: ["Main Temple", "Vishnu Statue", "River Ghats", "Sculpture Garden"],
  period: "15th Century",
    image: "/ridi.webp",
  characteristics: {
    roof: "Three-tiered pagoda with wide projections",
    walls: "Wood with intricate carvings",
    foundation: "River confluence platform",
    decoration: "Vishnu avatars, floral patterns, river motifs"
  },
  historicalContext: "Founded by King Mukunda Sen of Palpa, becoming important religious center in western Nepal."
},
{
  id: "devghat-dham",
  name: "Devghat Dham",
  nameNewa: "देवघाट धाम",
  description: "Sacred river confluence with many ashrams and temples",
  detailedDescription: "Devghat Dham is a extensive religious complex at the confluence of the Kali Gandaki and Trisuli rivers. The site features numerous temples, ashrams, and meditation centers in various architectural styles. The complex serves as a major retirement and spiritual center for Hindus from Nepal and India. The architecture ranges from traditional Nepali pagodas to modern ashram designs, all harmoniously integrated into the natural riverbank setting.",
  features: ["River confluence", "Multiple temples", "Ashram complex", "Retirement community", "Spiritual center"],
  examples: ["Main Temple", "Ashrams", "Meditation Caves", "River Ghats"],
  period: "Ancient site, Development ongoing",
   image: "/devghat-dham.jpg",
  characteristics: {
    roof: "Varied styles from pagoda to modern",
    walls: "Mixed materials and styles",
    foundation: "Riverbank natural setting",
    decoration: "Diverse religious art, meditation symbols"
  },
  historicalContext: "Ancient pilgrimage site mentioned in Puranas, developed systematically since 20th century."
},
{
  id: "tripureshwor-mahadev",
  name: "Tripureshwor Mahadev Temple",
  nameNewa: "त्रिपुरेश्वर महादेव मन्दिर",
  description: "Historic temple of Lord Shiva in Kathmandu",
  detailedDescription: "Tripureshwor Mahadev Temple is one of Kathmandu's important Shiva temples featuring a unique five-story pagoda design. The temple complex includes a large courtyard with multiple smaller shrines and a sacred pond. The architecture showcases exceptional wood carvings and metal work typical of the Malla period. The temple is particularly famous for its peaceful atmosphere despite being located in a busy urban area.",
  features: ["Five-story pagoda", "Urban temple", "Sacred pond", "Wood carvings", "Peaceful courtyard"],
  examples: ["Main Temple", "Courtyard", "Sacred Pond", "Smaller Shrines"],
  period: "19th Century (1815 CE)",
   image: "/Tripureshwor_Mahadev.jpg",
  characteristics: {
    roof: "Five-tiered pagoda with golden finial",
    walls: "Brick with carved wooden elements",
    foundation: "Urban platform with water features",
    decoration: "Wood carvings, metal work, Shiva symbolism"
  },
  historicalContext: "Built by Prime Minister Bhimsen Thapa during the Rana period, continuing Malla architectural traditions."
},



// {
//   id: "shaileshwari",
//   name: "Shaileshwari Temple",
//   nameNewa: "शैलेश्वरी मन्दिर",
//   description: "Ancient goddess temple in Far-West Nepal",
//   detailedDescription: "Shaileshwari Temple is one of the most important Shakti temples in far-western Nepal, dedicated to Goddess Parvati. The temple features unique local architectural styles with influences from both Nepali and Indian traditions. The main shrine houses a powerful stone idol believed to date back to the medieval period. The temple serves as a major cultural and religious center for the entire far-western region.",
//   features: ["Far-west architecture", "Shakti worship", "Cultural center", "Stone idol", "Regional importance"],
//   examples: ["Main Temple", "Cultural Complex", "Stone Carvings"],
//   period: "12th Century",
//   image: "/api/placeholder/400/300",
//   characteristics: {
//     roof: "Local style with curved edges",
//     walls: "Stone and wood combination",
//     foundation: "Hill base with traditional layout",
//     decoration: "Local motifs, goddess symbols, cultural elements"
//   },
//   historicalContext: "Ancient temple mentioned in local chronicles, served as regional capital temple for Doti kingdom."
// },



{
  id: "badimalika",
  name: "Badimalika Temple",
  nameNewa: "बडीमालिका मन्दिर",
  description: "High-altitude Shakti temple with panoramic views",
  detailedDescription: "Badimalika Temple is a remote high-altitude shrine dedicated to Goddess Bhagwati, located at 4,200 meters in Bajura district. The temple features simple stone architecture adapted to the harsh mountain environment. The main deity is a natural stone formation worshipped as the goddess. The challenging trek to the temple through pristine mountain scenery is considered a spiritual journey in itself.",
  features: ["High altitude", "Natural stone deity", "Trekking destination", "Mountain views", "Simple architecture"],
  examples: ["Main Shrine", "Natural Formation", "Mountain Setting"],
  period: "Ancient site, Current structure recent",
  image: "/Badi_Malika.png",
  characteristics: {
    roof: "Basic stone slab covering",
    walls: "Dry stone masonry",
    foundation: "Mountain ridge natural base",
    decoration: "Prayer flags, natural offerings, minimal carvings"
  },
  historicalContext: "Ancient indigenous worship site mentioned in local myths and legends for centuries."
},
{
  id: "kushma-kalika",
  name: "Kushma Kalika Temple",
  nameNewa: "कुश्मा कालिका मन्दिर",
  description: "Famous Shakti temple overlooking Kaligandaki gorge",
  detailedDescription: "Kushma Kalika Temple is perched dramatically on the edge of the world's second deepest gorge, offering stunning views of the Kaligandaki river below. The temple features traditional architecture with a three-tiered roof and intricate wood carvings depicting the goddess's various forms. The location provides both spiritual significance and natural beauty, making it a popular pilgrimage and tourist destination.",
  features: ["Gorge edge location", "Three-tiered roof", "River views", "Wood carvings", "Pilgrimage site"],
  examples: ["Main Temple", "Viewpoint", "Gorge Edge"],
  period: "17th Century",
  image: "/kushma-kalika.jpg",
  characteristics: {
    roof: "Three-tiered pagoda with wide eaves",
    walls: "Stone base with wood superstructure",
    foundation: "Cliff edge reinforced platform",
    decoration: "Kali carvings, gorge motifs, protective symbols"
  },
  historicalContext: "Established as protective temple for trade route along Kaligandaki river during medieval period."
},
{
  "id": "dupcheshwor-mahadev",
  "name": "Dupcheshwor Mahadev Temple",
  "nameNewa": "दुप्चेश्वर महादेव मन्दिर",
  "description": "Natural Shiva temple with local architectural style",
  "detailedDescription": "Dupcheshwor Mahadev Temple showcases simple rural temple architecture that harmonizes with its natural surroundings. The temple structure is built around the natural stone Shiva Lingam discovered through local legend. The architecture reflects traditional Tamang and local building techniques, using locally sourced materials and maintaining a humble yet spiritually powerful presence in the forest setting.",
  "features": ["Natural stone shrine", "Local materials", "Forest setting", "Simple structure", "Community-built"],
  "examples": ["Natural Lingam", "Stone Sanctum", "Prayer Area", "Forest Surroundings"],
  "period": "Ancient",
 image: "/dupcheshor_mahadev.jpg",
  "characteristics": {
    "roof": "Simple sloped roof with local tiles",
    "walls": "Rough stone masonry with wooden supports",
    "foundation": "Natural rock foundation",
    "decoration": "Minimal decoration, focus on natural stone deity"
  },
  "historicalContext": "Community-built temple around a naturally discovered Shiva Lingam, reflecting indigenous architectural traditions."
},
{
  "id": "jalpa-devi",
  "name": "Jalpa Devi Temple",
  "nameNewa": "जल्पा देवी मन्दिर",
  "description": "Medieval Shakti temple with traditional pagoda style",
  "detailedDescription": "Jalpa Devi Temple represents the medieval pagoda architecture of the Nuwakot region. The temple features a classic Nepalese pagoda design with multiple tiers, though simpler than royal temples. The structure demonstrates the evolution of local temple architecture, blending functional design with religious symbolism. The temple's proportions and layout follow traditional Vastu Shastra principles.",
  "features": ["Pagoda style", "Stone platform", "Traditional proportions", "Local craftsmanship", "Medieval design"],
  "examples": ["Pagoda Roof", "Stone Foundation", "Main Sanctum", "Prayer Hall"],
  "period": "Medieval",
 image: "/Jalapa-Devi-Temple.png",
  "characteristics": {
    "roof": "Traditional pagoda with curved edges",
    "walls": "Brick construction with wooden window frames",
    "foundation": "Elevated stone platform for prominence",
    "decoration": "Simple geometric patterns, traditional window designs"
  },
  "historicalContext": "Medieval-period temple showing the development of regional architectural styles in the Kathmandu Valley periphery."
},
{
  "id": "indra-kamala",
  "name": "Indra Kamala Temple",
  "nameNewa": "इन्द्र कमला मन्दिर",
  "description": "Three-tiered pagoda temple for mass worship",
  "detailedDescription": "Indra Kamala Temple features an impressive three-tiered pagoda architecture designed to accommodate large numbers of devotees during major festivals. The temple's expansive courtyard and substantial structure reflect its importance as a major pilgrimage site. The architectural design emphasizes both aesthetic appeal and functional capacity, with spacious grounds and multiple access points for festival crowds.",
  "features": ["Three-tiered pagoda", "Large courtyard", "Festival capacity", "Ornate woodwork", "Community space"],
  "examples": ["Three-tiered Roof", "Spacious Courtyard", "Main Shrine", "Festival Grounds"],
  "period": "Ancient",
image: "/indra kamala.jpeg",
  "characteristics": {
    "roof": "Three-tiered pagoda with elaborate finial",
    "walls": "Brick and wood construction with ornate windows",
    "foundation": "Raised stone platform for ceremonial importance",
    "decoration": "Detailed wood carvings on struts and windows, ceremonial bells"
  },
  "historicalContext": "Ancient temple expanded over centuries to accommodate growing numbers of devotees, representing adaptive religious architecture."
},


{
  id: "baijanath",
  name: "Baijanath Temple",
  nameNewa: "बैजनाथ मन्दिर",
  description: "Ancient Shiva temple with historic links in Achham",
  detailedDescription: "Baijanath Temple is a historically significant Shiva temple in Achham district, known for its ancient architecture and spiritual importance. The temple features a unique blend of local and classical Nepali architectural elements with intricate stone carvings. The main deity is a large Shiva lingam believed to be from the medieval period. The temple complex includes several smaller shrines and a sacred pond used for ritual purposes.",
  features: ["Ancient architecture", "Stone carvings", "Sacred pond", "Historical significance", "Local style"],
  examples: ["Main Temple", "Shiva Lingam", "Sacred Pond", "Ancillary Shrines"],
  period: "14th Century",
  image: "/baijainath.jpg",
  characteristics: {
    roof: "Unique curved dome style",
    walls: "Stone with local carvings",
    foundation: "Traditional platform with water features",
    decoration: "Ancient carvings, local patterns, religious symbols"
  },
  historicalContext: "Medieval temple mentioned in local chronicles, important center for far-western Hindu culture."
},
{
  id: "tripureshwari",
  name: "Tripureshwari Temple",
  nameNewa: "त्रिपुरेश्वरी मन्दिर",
  description: "Shakti temple worshipped across Far-West Nepal",
  detailedDescription: "Tripureshwari Temple is a major Shakti Peeth in far-western Nepal, dedicated to Goddess Tripura Sundari. The temple features magnificent architecture with a towering shikhara spire and intricate stone carvings depicting the goddess's various forms. The complex includes multiple meditation halls, a sacred fire pit, and facilities for tantric practices. The temple is particularly important for the Dashain festival celebrations in the region.",
  features: ["Shakti Peeth", "Shikhara spire", "Tantric practices", "Stone carvings", "Regional importance"],
  examples: ["Main Temple", "Meditation Halls", "Sacred Fire", "Stone Carvings"],
  period: "16th Century",
  image: "/tripurashori dadeldhura.jpeg",
  characteristics: {
    roof: "Tall shikhara with kalasha",
    walls: "Stone with narrative panels",
    foundation: "Large platform with ceremonial space",
    decoration: "Goddess carvings, tantric symbols, floral patterns"
  },
  historicalContext: "Established as major tantric center during the unification of far-western principalities."
},
{
  id: "bhairabsthan",
  name: "Bhairabsthan Temple",
  nameNewa: "भैरबस्थान मन्दिर",
  description: "Bhairab temple with largest trishul in Nepal",
  detailedDescription: "Bhairabsthan Temple is famous for housing Nepal's largest trishul (trident), measuring over 15 feet tall. The temple is dedicated to Bhairab, the fierce form of Shiva, and features powerful architecture with tantric symbols and fierce deity carvings. The main shrine contains a unique black stone statue of Bhairab that is worshipped with special tantric rituals. The temple is particularly important for protection and overcoming obstacles.",
  features: ["Largest trishul", "Tantric worship", "Fierce deity", "Protection rituals", "Unique architecture"],
  examples: ["Main Temple", "Giant Trishul", "Bhairab Statue", "Tantric Symbols"],
  period: "17th Century",
    image: "/Bhairabsthan_Palpa-2.jpg",
  characteristics: {
    roof: "Unique curved design with spikes",
    walls: "Stone with fierce deity carvings",
    foundation: "Powerful geometric platform",
    decoration: "Tantric symbols, weapon motifs, protective emblems"
  },
  historicalContext: "Established as protective temple for Tansen town during the Sen dynasty rule."
},




{
  "id": "bhairabi-temple",
  "name": "Bhairabi Temple",
  "nameNewa": "भैरबी मन्दिर",
  "description": "Historic Shakti temple in Nuwakot Durbar Square",
  "detailedDescription": "Bhairabi Temple is a majestic example of 18th-century Newar architecture built during King Prithvi Narayan Shah's unification campaign. The temple features a classic two-tiered pagoda style with intricate wood carvings depicting deities and mythical creatures. As part of the Nuwakot Durbar Square complex, it represents the strategic and cultural architecture of the Shah period, combining religious significance with royal patronage.",
  "features": ["Two-tiered pagoda", "Newar woodwork", "Historic bell", "Royal temple", "Earthquake restored"],
  "examples": ["Main Sanctum", "Wooden Toranas", "Carved Struts", "Stone Courtyard"],
  "period": "18th Century",
    image: "/Vairab_mandira,nuwakot.jpeg",
  "characteristics": {
    "roof": "Two-tiered pagoda with gilded finial",
    "walls": "Brick masonry with wooden frames",
    "foundation": "Stone platform within durbar square",
    "decoration": "Intricate wood carvings of deities, floral patterns, and mythical animals"
  },
  "historicalContext": "Built by Prithvi Narayan Shah as a key spiritual site during Nepal's unification, restored after 2015 earthquake."
},






{
  id: "kailashnath-mahadev",
  name: "Kailashnath Mahadev Statue",
  nameNewa: "कैलाशनाथ महादेव मूर्ति",
  description: "World's tallest Shiva statue at 143 feet",
  detailedDescription: "Kailashnath Mahadev is the world's tallest Shiva statue, standing at 143 feet on a hilltop overlooking the Kathmandu valley. The statue is constructed using copper, zinc, concrete and steel, showcasing modern engineering combined with traditional religious symbolism. The complex includes a meditation hall, museum, and viewing platforms. The statue depicts Shiva in a meditative pose with detailed anatomical precision and religious accuracy.",
  features: ["Tallest Shiva statue", "Modern engineering", "Hilltop location", "Meditation facilities", "Viewing platforms"],
  examples: ["Main Statue", "Meditation Hall", "Museum", "Viewpoint"],
  period: "21st Century (2011 CE)",
  image: "/kailaishor_statue.jpg",
  characteristics: {
    roof: "Open sky (outdoor statue)",
    walls: "Reinforced concrete core with metal coating",
    foundation: "Deep reinforced concrete base",
    decoration: "Copper plating, religious symbols, artistic details"
  },
  historicalContext: "Built by businessman Kamal Jain, completed in 2011 after several years of construction."
},
{
  id: "gadimai",
  name: "Gadimai Temple",
  nameNewa: "गडीमाई मन्दिर",
  description: "Temple known for large animal sacrifice festival",
  detailedDescription: "Gadimai Temple is internationally known for its massive animal sacrifice festival held every five years, where hundreds of thousands of animals are offered to the goddess. The temple features simple architecture that contrasts with the scale of its rituals. The main shrine houses a powerful deity believed to grant wishes in exchange for sacrifices. The temple complex includes large sacrificial grounds and facilities for handling the massive crowds during festivals.",
  features: ["Animal sacrifices", "Large festival grounds", "Simple architecture", "Wish fulfillment", "International attention"],
  examples: ["Main Temple", "Sacrificial Grounds", "Festival Facilities"],
  period: "18th Century",
   image: "/Gadhimai_Temple.jpg",
  characteristics: {
    roof: "Simple sloped design",
    walls: "Brick and concrete functional construction",
    foundation: "Large ground-level platform",
    decoration: "Minimal, focus on ritual functionality"
  },
  historicalContext: "Gained international attention due to scale of animal sacrifices, though controversial."
},
{
  id: "siddhababa",
  name: "Siddhababa Temple",
  nameNewa: "सिद्धबाबा मन्दिर",
  description: "Popular roadside Shiva temple in Butwal",
  detailedDescription: "Siddhababa Temple is a popular Shiva temple located along the busy Mahendra Highway in Butwal. The temple features modern architecture with traditional elements, including a large Shiva lingam and peaceful garden surroundings. The temple is particularly famous among travelers who stop to seek blessings for safe journeys. The complex includes a large parking area, rest facilities, and a meditation garden designed for modern pilgrims.",
  features: ["Roadside temple", "Traveler blessings", "Modern architecture", "Garden setting", "Accessibility"],
  examples: ["Main Temple", "Shiva Lingam", "Meditation Garden", "Traveler Facilities"],
  period: "20th Century",
  image: "/Siddha_Baba_Temple.jpg",
  characteristics: {
    roof: "Modern interpretation of traditional style",
    walls: "Contemporary materials with traditional motifs",
    foundation: "Designed for accessibility and parking",
    decoration: "Modern religious art, traveler symbols, garden elements"
  },
  historicalContext: "Developed in late 20th century to serve growing number of highway travelers seeking blessings."
},

]

export function TempleModal({ temple, onClose }: { temple: Temple; onClose: () => void }) {
  const [activeImage, setActiveImage] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState("overview")
  const { t } = useTranslation()

  const[isDarkMode, setIsDarkMode] = React.useState(false)
  const handleThemeToggle =()=>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  const getDirections = () => {
    const { lat, lng } = temple.coordinates
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    window.open(url, '_blank')
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        <CardHeader className="relative p-0">
          <div className="relative">
            <img src={temple.gallery[activeImage]} alt={temple.name} className="w-full h-64 md:h-80 object-cover" />
            <Button variant="outline" size="sm" className="absolute top-4 right-4 bg-white/90" onClick={onClose}>
              ✕
            </Button>
            <div className="absolute bottom-4 left-4 flex gap-2">
              {temple.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeImage === index ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h2 className="text-3xl font-bold">{temple.name}</h2>
                <Badge variant="secondary" className="text-sm">{temple.preservationStatus}</Badge>
              </div>
              <p className="text-xl text-muted-foreground font-devanagari">{temple.nameNewa}</p>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{temple.location}, {temple.district}</span>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className=" text-white grid w-full grid-cols-4">
                <TabsTrigger className='bg-gray-400 border' value="overview">{t('temples.tabs.overview')}</TabsTrigger>
                <TabsTrigger className=' bg-gray-400 border' value="architecture">{t('temples.tabs.architecture')}</TabsTrigger>
                <TabsTrigger className=' bg-gray-400 border' value="history">{t('temples.tabs.history')}</TabsTrigger>
                <TabsTrigger className='bg-gray-400 ' value="visit">{t('temples.tabs.visit')}</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('temples.details.significance')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{temple.significance}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('temples.details.description')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{temple.description}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="architecture" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">{t('temples.details.architecture')}</h3>
                      <p className="text-muted-foreground">{temple.architecture} - {temple.architectureStyle}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.archDetails')}:</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div><strong>{t('temples.details.tiers')}:</strong> {temple.architecturalDetails.tiers}</div>
                        <div><strong>{t('temples.details.height')}:</strong> {temple.architecturalDetails.height}</div>
                        <div><strong>{t('temples.details.foundation')}:</strong> {temple.architecturalDetails.foundation}</div>
                        <div><strong>{t('temples.details.dimensions')}:</strong> {temple.dimensions}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.features')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.architecturalFeatures.map((feature, index) => (
                          <Badge key={index} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.materials')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.materials.map((material, index) => (
                          <Badge key={index} variant="secondary">{material}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.specialFeatures')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.architecturalDetails.specialFeatures.map((feature, index) => (
                          <Badge key={index} variant="default" className="bg-blue-100 text-blue-800">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('temples.details.history')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{temple.detailedHistory}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.period')}:</h4>
                      <Badge variant="outline">{temple.period}</Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.visitors')}:</h4>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{temple.visitors}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visit" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                      <div><strong>{t('temples.details.timings')}:</strong><br/>{temple.timings}</div>
                      <div><strong>{t('temples.details.entryFee')}:</strong><br/>{temple.entryFee}</div>
                      <div><strong>{t('temples.details.contact')}:</strong><br/>{temple.contact}</div>
                      <div><strong>{t('temples.details.bestTime')}:</strong><br/>{temple.bestTimeToVisit}</div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.accessibility')}:</h4>
                      <p className="text-sm text-muted-foreground">{temple.accessibility}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.festivals')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.festivals.map((festival, index) => (
                          <Badge key={index} variant="secondary">{festival}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t('temples.details.rating')}:</h4>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{temple.rating}</span>
                        <span className="text-muted-foreground">({temple.visitors})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button onClick={getDirections} className="flex-1">
                <Navigation className="mr-2 h-4 w-4" />
                {t('temples.actions.getDirections')}
              </Button>
              <Button variant="outline" className="flex-1">
                <Camera className="mr-2 h-4 w-4" />
                {t('temples.actions.virtualTour')}
              </Button>
              <Button variant="outline" className="flex-1">
                <ZoomIn className="mr-2 h-4 w-4" />
                360° View
              </Button>
              <Button variant="outline" size="icon">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </PageLayout>
  )
}
export default function TemplesPage() {
  const [selectedTemple, setSelectedTemple] = React.useState<Temple | null>(null)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedDistrict, setSelectedDistrict] = React.useState("all")
  const [activeTab, setActiveTab] = React.useState("all")
  const { t } = useTranslation()

  
  const[isDarkMode, setIsDarkMode] = React.useState(false)
  const handleThemeToggle =()=>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const filteredTemples = temples.filter(temple => {
    const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.significance.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDistrict = selectedDistrict === "all" || temple.district === selectedDistrict
    const matchesTab = activeTab === "all" || 
                      (activeTab === "unesco" && temple.preservationStatus.includes("UNESCO")) ||
                      (activeTab === "popular" && temple.rating >= 4.5)

    return matchesSearch && matchesDistrict && matchesTab
  })

  const districts = Array.from(new Set(temples.map(temple => temple.district)))

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-100/30">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <Link href="/culture">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('common.back')}
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('culture.temples.title')}
              </h1>
              <p className="text-muted-foreground mt-2">{t('culture.temples.subtitle')}</p>
            </div>
            <div className="w-20"></div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder={t('temples.search.placeholder')}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  <option value="all">{t('temples.filters.allDistricts')}</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Button 
                  variant={activeTab === "all" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setActiveTab("all")}
                >
                  {t('temples.filters.all')}
                </Button>
                <Button 
                  variant={activeTab === "unesco" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setActiveTab("unesco")}
                >
                  UNESCO Heritage
                </Button>
                <Button 
                  variant={activeTab === "popular" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setActiveTab("popular")}
                >
                  Most Popular
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Scrollable Temples Grid Section */}
          <div className="mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                {t('temples.templeList') || 'Temples of Nepal'}
              </h2>
              
              {/* Grid layout for larger screens, single column scroll for mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
                {filteredTemples.map((temple) => (
                  <Card 
                    key={temple.id} 
                    className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 ${
                      selectedTemple?.id === temple.id 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedTemple(temple)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={temple.image} 
                        alt={temple.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-black backdrop-blur-sm">
                        {temple.period}
                      </Badge>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{temple.name}</h3>
                        <p className="text-sm opacity-90 font-devanagari">{temple.nameNewa}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs opacity-80">
                          <MapPin className="h-3 w-3" />
                          {temple.location}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{temple.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {temple.architecture}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{temple.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {temple.visitors}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {temple.preservationStatus}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Architecture Styles Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
              <div className="text-center mb-6">
                <Building className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                  {t('temples.architecture.title')}
                </h2>
                <p className="text-muted-foreground dark:text-gray-300">
                  {t('temples.architecture.description')}
                </p>
              </div>

              {/* Scrollable architecture grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2">
                {architectureStyles.map((style) => (
                  <Card 
                    key={style.id} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={style.image} 
                        alt={style.name} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">{style.name}</h3>
                        <p className="text-sm opacity-90 font-devanagari">{style.nameNewa}</p>
                        <p className="text-xs opacity-80">{style.period}</p>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{style.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="font-medium text-sm text-gray-800 dark:text-white">
                          {t('temples.architecture.features') || 'Key Features'}:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {style.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        <div>
                          <strong>Roof:</strong> {style.characteristics.roof}
                        </div>
                        <div>
                          <strong>Walls:</strong> {style.characteristics.walls}
                        </div>
                        <div>
                          <strong>Foundation:</strong> {style.characteristics.foundation}
                        </div>
                        <div>
                          <strong>Decoration:</strong> {style.characteristics.decoration}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        <Building className="mr-2 h-3 w-3" />
                        {t('common.explore')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Community Section */}
          <Card className="border-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <Landmark className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t('temples.community.title')}</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                {t('temples.community.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  {t('temples.community.join')}
                </Button>
                <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
                  {t('common.learnMore')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Temple Detail Modal */}
        {selectedTemple && (
          <TempleModal temple={selectedTemple} onClose={() => setSelectedTemple(null)} />
        )}
      </div>
    </PageLayout>
  )
}