"use client";

import React, { useState, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import PageLayout from '@/components/layout/page-layout';

interface CasteData {
  id: string;
  surname: string;
  traditionalRole: string;
  populationShare: string;
  approximatePopulation: string;
  description: string;
  category: string;
}

interface DistrictPopulation {
  district: string;
  newarPopulation: number;
  male: number;
  female: number;
  percentage: number;
  dominantCastes: string[];
}

function Caste() {
  const { t } = useTranslation();
  const [selectedCaste, setSelectedCaste] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');



  
    const[isDarkMode, setIsDarkMode] = React.useState(false)
    const handleThemeToggle =()=>{
      setIsDarkMode(!isDarkMode)
      document.documentElement.classList.toggle("dark")
    }

  // Comprehensive Newar caste data with 169+ castes
  const casteData: CasteData[] = useMemo(() => [
  {
    "id": "shrestha",
    "surname": "Shrestha",
    "traditionalRole": "Traditional merchants, administrators, elites",
    "populationShare": "≈ 21%",
    "approximatePopulation": "≈ 273,000",
    "description": "Urban merchants, moneylenders, town administrators",
    "category": "Elite/Merchant"
  },
  {
    "id": "maharjan",
    "surname": "Maharjan (Jyāpu)",
    "traditionalRole": "Traditional farmers and cultivators",
    "populationShare": "≈ 17%",
    "approximatePopulation": "≈ 221,000",
    "description": "Traditional farmers/cultivators, Jyapu subgroup",
    "category": "Farmer"
  },
  {
    "id": "bajracharya",
    "surname": "Bajracharya / Vajracharya",
    "traditionalRole": "Buddhist priestly class",
    "populationShare": "≈ 3.5%",
    "approximatePopulation": "≈ 45,500",
    "description": "Tantric Buddhist priests, highest Buddhist ritual specialists",
    "category": "Priest"
  },
  {
    "id": "baidhya",
    "surname": "Baidhya / Vaidya",
    "traditionalRole": "Hereditary Ayurvedic physicians",
    "populationShare": "≈ 2%",
    "approximatePopulation": "≈ 26,000",
    "description": "Hereditary Ayurvedic physicians/healers",
    "category": "Healer"
  },
  {
    "id": "shakya",
    "surname": "Shakya",
    "traditionalRole": "Buddhist artisans/metalworkers",
    "populationShare": "≈ 4.5%",
    "approximatePopulation": "≈ 58,500",
    "description": "Buddhist artisan/metalworkers, sculptors, Buddha-image makers",
    "category": "Artisan"
  },
  {
    "id": "rajbhandari",
    "surname": "Rajbhandari",
    "traditionalRole": "Temple servants/ritual attendants",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Temple-servant/ritual attendants connected to royalty/temples",
    "category": "Service"
  },
  {
    "id": "sthapit",
    "surname": "Sthapit",
    "traditionalRole": "Builders and architects",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Builders/architects/town-planners, hereditary administrators",
    "category": "Artisan"
  },
  {
    "id": "rajopadhyaya",
    "surname": "Rajopadhyaya",
    "traditionalRole": "Hindu Brahmin priests",
    "populationShare": "≈ 3%",
    "approximatePopulation": "≈ 39,000",
    "description": "Hindu Brahmin priests (Upadhyay/royal Brahmins)",
    "category": "Priest"
  },
  {
    "id": "tuladhar",
    "surname": "Tuladhar",
    "traditionalRole": "Long-distance merchants",
    "populationShare": "≈ 3%",
    "approximatePopulation": "≈ 39,000",
    "description": "Traditional long-distance merchants/traders (Lhasa–Kathmandu traders)",
    "category": "Merchant"
  },
  {
    "id": "tamrakar",
    "surname": "Tamrakar",
    "traditionalRole": "Metalworkers/coppersmiths",
    "populationShare": "≈ 2%",
    "approximatePopulation": "≈ 26,000",
    "description": "Metalworkers/coppersmiths (makers of utensils, vessels)",
    "category": "Artisan"
  },
  {
    "id": "kansakar",
    "surname": "Kansakar",
    "traditionalRole": "Bronzeworkers/bell-metal artisans",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Bronzeworkers/bell-metal artisans (kansa = bronze/brass)",
    "category": "Artisan"
  },
  {
    "id": "pradhan",
    "surname": "Pradhan",
    "traditionalRole": "Elite administrative families",
    "populationShare": "≈ 2.5%",
    "approximatePopulation": "≈ 32,500",
    "description": "Elite administrative families/urban administrators",
    "category": "Administrator"
  },
  {
    "id": "bataju",
    "surname": "Bataju",
    "traditionalRole": "Ritual musicians",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Ritual musicians/temple musicians",
    "category": "Musician"
  },
  {
    "id": "gubhaju",
    "surname": "Gubhaju",
    "traditionalRole": "Buddhist ritual specialists",
    "populationShare": "≈ 2%",
    "approximatePopulation": "≈ 26,000",
    "description": "Buddhist ritual specialists/priests (often tantric)",
    "category": "Priest"
  },
  {
    "id": "sainju",
    "surname": "Sainju",
    "traditionalRole": "Artisan/trades families",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Artisan/trades families (local services and crafts)",
    "category": "Artisan"
  },
  {
    "id": "balami",
    "surname": "Balami",
    "traditionalRole": "Artisanal/service groups",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Artisanal/service groups (small-scale craftsmen)",
    "category": "Service"
  },
  {
    "id": "dangol",
    "surname": "Dangol",
    "traditionalRole": "Farmers/landholders",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Farmer/landholder subgroup within Newar",
    "category": "Farmer"
  },
  {
    "id": "suwal",
    "surname": "Suwal",
    "traditionalRole": "Service or small-trade families",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Service or small-trade families",
    "category": "Service"
  },
  {
    "id": "awale",
    "surname": "Awale",
    "traditionalRole": "Hereditary service/trade families",
    "populationShare": "≈ 0.7%",
    "approximatePopulation": "≈ 9,100",
    "description": "Hereditary service/trade families",
    "category": "Service"
  },
  {
    "id": "sayami",
    "surname": "Sayami",
    "traditionalRole": "Soldiers or watchers",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Traditionally soldiers or watchers",
    "category": "Service"
  },
  {
    "id": "manandhar",
    "surname": "Manandhar",
    "traditionalRole": "Herbalists/apothecaries",
    "populationShare": "≈ 3%",
    "approximatePopulation": "≈ 39,000",
    "description": "Herbalists/sellers of herbal medicines/traditional apothecaries",
    "category": "Healer"
  },
  {
    "id": "tandukar",
    "surname": "Tandukar",
    "traditionalRole": "Makers of ritual items",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Makers of certain ritual items (artisan)",
    "category": "Artisan"
  },
  {
    "id": "napit",
    "surname": "Napit",
    "traditionalRole": "Barbers",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Traditional hereditary barber caste",
    "category": "Service"
  },
  {
    "id": "nakarmi",
    "surname": "Nakarmi",
    "traditionalRole": "Leather workers",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Leather workers/occupational group connected to hide work",
    "category": "Artisan"
  },
  {
    "id": "karanjit",
    "surname": "Karanjit",
    "traditionalRole": "Artisan/craft family",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "banmala",
    "surname": "Banmala",
    "traditionalRole": "Rural artisan/small traders",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Rural artisan/small traders",
    "category": "Artisan"
  },
  {
    "id": "mali",
    "surname": "Mali",
    "traditionalRole": "Gardeners/horticulturalists",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Gardeners/horticulturalists/florists",
    "category": "Service"
  },
  {
    "id": "malakar",
    "surname": "Malakar",
    "traditionalRole": "Garland makers",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Garland makers/floral artisans",
    "category": "Artisan"
  },
  {
    "id": "sindurakar",
    "surname": "Sindurakar",
    "traditionalRole": "Makers/sellers of sindoor",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Makers/sellers of sindoor or ritual pigment",
    "category": "Service"
  },
  {
    "id": "nagarkoti",
    "surname": "Nagarkoti",
    "traditionalRole": "Musicians/drummers",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Musicians/drummers (nagara = drum)",
    "category": "Musician"
  },
  {
    "id": "ranjitkar",
    "surname": "Ranjitkar",
    "traditionalRole": "Dyers/colorists",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Dyers/colorists/traditional cloth dyers",
    "category": "Artisan"
  },
  {
    "id": "darshandhari",
    "surname": "Darshandhari",
    "traditionalRole": "Ritual officiants",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Ritual officiants/watchers",
    "category": "Service"
  },
  {
    "id": "kusle",
    "surname": "Kusle",
    "traditionalRole": "Musicians/drummers",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Musicians/drummers (percussionists)",
    "category": "Musician"
  },
  {
    "id": "kapali",
    "surname": "Kapali",
    "traditionalRole": "Tantric ritualists",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Tantric ritualist class",
    "category": "Priest"
  },
  {
    "id": "chitrakar",
    "surname": "Chitrakar",
    "traditionalRole": "Painters/artists",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Painters/paubha painters (traditional scroll painters)",
    "category": "Artisan"
  },
  {
    "id": "shilaakar",
    "surname": "Shilaakar",
    "traditionalRole": "Stone carvers",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Stone carvers/sculptors",
    "category": "Artisan"
  },
  {
    "id": "buddhacharya",
    "surname": "Buddhacharya",
    "traditionalRole": "Buddhist priests",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Buddhist priests/caretakers of monasteries",
    "category": "Priest"
  },
  {
    "id": "byanjankar",
    "surname": "Byanjankar",
    "traditionalRole": "Musicians/drum-players",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Musicians/drum-players (percussion families)",
    "category": "Musician"
  },
  {
    "id": "kasaju",
    "surname": "Kasaju",
    "traditionalRole": "Money keepers/traders",
    "populationShare": "≈ 0.7%",
    "approximatePopulation": "≈ 9,100",
    "description": "Money/chest keepers/small traders",
    "category": "Merchant"
  },
  {
    "id": "amatya",
    "surname": "Amatya",
    "traditionalRole": "Traditional administrators",
    "populationShare": "≈ 1.5%",
    "approximatePopulation": "≈ 19,500",
    "description": "Traditional administrators/record-keepers",
    "category": "Administrator"
  },
  {
    "id": "khadgi",
    "surname": "Khadgi",
    "traditionalRole": "Swordsmiths/metalworkers",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Swordsmiths/metalworkers (khadga = sword)",
    "category": "Artisan"
  },
  {
    "id": "kayastha",
    "surname": "Kayastha",
    "traditionalRole": "Scribes/record-keepers",
    "populationShare": "≈ 1%",
    "approximatePopulation": "≈ 13,000",
    "description": "Scribes/record-keepers/administrators",
    "category": "Administrator"
  },
  {
    "id": "prajapati",
    "surname": "Prajapati",
    "traditionalRole": "Traditional potters",
    "populationShare": "≈ 2%",
    "approximatePopulation": "≈ 26,000",
    "description": "Traditional potters",
    "category": "Artisan"
  },
  {
    "id": "pode",
    "surname": "Pode",
    "traditionalRole": "Traditional waste/cleaning services",
    "populationShare": "≈ 2%",
    "approximatePopulation": "≈ 26,000",
    "description": "Traditional waste/cleaning services",
    "category": "Service"
  },
  {
    "id": "pujari",
    "surname": "Pujari",
    "traditionalRole": "Hindu temple priests",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Hindu temple priests (pujari = worshipper/priest)",
    "category": "Priest"
  },
  {
    "id": "maskey",
    "surname": "Maskey",
    "traditionalRole": "Hereditary musicians/drummers",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Hereditary musicians/drummers/some merchant families",
    "category": "Musician"
  },
  {
    "id": "lakhe",
    "surname": "Lakhe",
    "traditionalRole": "Traditional ritual masked dancers",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Traditional ritual masked dancers/performers",
    "category": "Performer"
  },
  {
    "id": "joshi",
    "surname": "Joshi",
    "traditionalRole": "Traditional astrologers / ritual priests",
    "populationShare": "≈ 1.2%",
    "approximatePopulation": "≈ 15,600",
    "description": "Traditional astrologers/ritual priests (Jyotishi-type ritual specialists)",
    "category": "Priest"
  },
  {
    "id": "ranjit",
    "surname": "Ranjit",
    "traditionalRole": "Artisan/dyer families",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Similar to Ranjitkar - artisan/dyer families",
    "category": "Artisan"
  },
  {
    "id": "silalik",
    "surname": "Silalik",
    "traditionalRole": "Small artisans / craft families",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Small artisans/craft families",
    "category": "Artisan"
  },
  {
    "id": "rajthala",
    "surname": "Rajthala",
    "traditionalRole": "Ritual servants / temple functionaries",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Ritual servants/temple functionaries",
    "category": "Service"
  },
  {
    "id": "kashichhawa",
    "surname": "Kashichhawa",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "gopali",
    "surname": "Gopali",
    "traditionalRole": "Farmers / local chiefs",
    "populationShare": "≈ 0.7%",
    "approximatePopulation": "≈ 9,100",
    "description": "Farmers/local chiefs in some contexts",
    "category": "Farmer"
  },
  {
    "id": "putwar",
    "surname": "Putwar",
    "traditionalRole": "Record-keepers / land record families",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Record-keepers/local land record families (putwar ~ patwari)",
    "category": "Administrator"
  },
  {
    "id": "dali",
    "surname": "Dali",
    "traditionalRole": "Service/occupation families",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Service/occupation families",
    "category": "Service"
  },
  {
    "id": "pulu",
    "surname": "Pulu",
    "traditionalRole": "Rural artisan/trade families",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Rural artisan/trade families",
    "category": "Artisan"
  },
  {
    "id": "phaju",
    "surname": "Phaju",
    "traditionalRole": "Musicians / traditional performers",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Musicians/traditional performers",
    "category": "Musician"
  },
  {
    "id": "silakar",
    "surname": "Silakar",
    "traditionalRole": "Sculptors / stone carvers",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Sculptors/stone carvers (variant of Shilaakar)",
    "category": "Artisan"
  },
  {
    "id": "karmacharya",
    "surname": "Karmacharya",
    "traditionalRole": "Metalworkers / smiths",
    "populationShare": "≈ 1.2%",
    "approximatePopulation": "≈ 15,600",
    "description": "Metalworkers/smiths (one of the main artisan smith castes)",
    "category": "Artisan"
  },
  {
    "id": "bhuju",
    "surname": "Bhuju",
    "traditionalRole": "Watchmen / service families",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Watchmen/service families",
    "category": "Service"
  },
  {
    "id": "palancho",
    "surname": "Palancho",
    "traditionalRole": "Caretakers / palanquin-bearers",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Caretakers/palanquin-bearers/service roles",
    "category": "Service"
  },
  {
    "id": "bhattu",
    "surname": "Bhattu",
    "traditionalRole": "Temple priests / chant masters",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Temple priests/chant masters (bhattu = pundit/reciter)",
    "category": "Priest"
  },
  {
    "id": "dhanbhanjara",
    "surname": "Dhanbhanjara",
    "traditionalRole": "Traders / transporters / merchants",
    "populationShare": "≈ 0.8%",
    "approximatePopulation": "≈ 10,400",
    "description": "Traders/transporters/merchants (historical transport/trade family)",
    "category": "Merchant"
  },
  {
    "id": "kasula",
    "surname": "Kasula",
    "traditionalRole": "Small artisan / trader family",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Small artisan/trader family",
    "category": "Artisan"
  },
  {
    "id": "gothe",
    "surname": "Gothe",
    "traditionalRole": "Service families",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Service families",
    "category": "Service"
  },
  {
    "id": "piya",
    "surname": "Piya",
    "traditionalRole": "Small-trade families",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Small-trade families",
    "category": "Merchant"
  },
  {
    "id": "khichaju",
    "surname": "Khichaju",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "bhakhuche",
    "surname": "Bhakhuche",
    "traditionalRole": "Ritual musicians / performers",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Ritual musicians/performers",
    "category": "Musician"
  },
  {
    "id": "bijukche",
    "surname": "Bijukche",
    "traditionalRole": "Small trader / artisan grouping",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Small trader/artisan grouping",
    "category": "Artisan"
  },
  {
    "id": "dhuju",
    "surname": "Dhuju",
    "traditionalRole": "Small artisan family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small artisan family",
    "category": "Artisan"
  },
  {
    "id": "byanju",
    "surname": "Byanju",
    "traditionalRole": "Musicians (percussion)",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Musicians (percussion) - part of Uray merchant groups sometimes",
    "category": "Musician"
  },
  {
    "id": "koju",
    "surname": "Koju",
    "traditionalRole": "Artisan / small trader",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Artisan/small trader",
    "category": "Artisan"
  },
  {
    "id": "takhachhe",
    "surname": "Takhachhe",
    "traditionalRole": "Artisan / ritual-service family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Artisan/ritual-service family",
    "category": "Service"
  },
  {
    "id": "rajbhak",
    "surname": "Rajbhak",
    "traditionalRole": "Aristocratic / court families",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Aristocratic/court families (historical administrative roles)",
    "category": "Administrator"
  },
  {
    "id": "munikar",
    "surname": "Munikar",
    "traditionalRole": "Ritual officiants / seers",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Ritual officiants/seers (muni-related priestly functions)",
    "category": "Priest"
  },
  {
    "id": "mulmi",
    "surname": "Mulmi",
    "traditionalRole": "Local artisan / farming families",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Local artisan/farming families",
    "category": "Artisan"
  },
  {
    "id": "sipakar",
    "surname": "Sipakar",
    "traditionalRole": "Transporters / carriers",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Transporters/carriers (historical)",
    "category": "Service"
  },
  {
    "id": "banjar",
    "surname": "Banjar",
    "traditionalRole": "Market traders / small merchants",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Market traders/small merchants",
    "category": "Merchant"
  },
  {
    "id": "lakhaju",
    "surname": "Lakhaju",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "chuke",
    "surname": "Chuke",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "dhewaju",
    "surname": "Dhewaju",
    "traditionalRole": "Ritual performers / musicians",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Ritual performers/musicians",
    "category": "Musician"
  },
  {
    "id": "majju",
    "surname": "Majju",
    "traditionalRole": "Small artisan family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small artisan family",
    "category": "Artisan"
  },
  {
    "id": "kaspal",
    "surname": "Kaspal",
    "traditionalRole": "Artisan/occupational family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Artisan/occupational family",
    "category": "Artisan"
  },
  {
    "id": "dhaubhanjar",
    "surname": "Dhaubhanjar",
    "traditionalRole": "Merchants / transporters",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Merchants/transporters (variant of Dhanbhanjara)",
    "category": "Merchant"
  },
  {
    "id": "kyatha",
    "surname": "Kyatha",
    "traditionalRole": "Traditional perfumers / incense-makers",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Traditional perfumers/incense-makers (kyatha = perfumed paste maker)",
    "category": "Artisan"
  },
  {
    "id": "kutu",
    "surname": "Kutu",
    "traditionalRole": "Community artisan / small trade family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Community artisan/small trade family",
    "category": "Artisan"
  },
  {
    "id": "musyag",
    "surname": "Musyag",
    "traditionalRole": "Ritual performers / small craft",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Ritual performers/small craft",
    "category": "Performer"
  },
  {
    "id": "daware",
    "surname": "Daware",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "musyaju",
    "surname": "Musyaju",
    "traditionalRole": "Ritual performer / artisan",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Similar to Musyag - ritual performer/artisan",
    "category": "Performer"
  },
  {
    "id": "sulpe",
    "surname": "Sulpe",
    "traditionalRole": "Regional craft / artisan families",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Regional craft/artisan families",
    "category": "Artisan"
  },
  {
    "id": "tuwayna",
    "surname": "Tuwayna",
    "traditionalRole": "Local artisan / trade family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Local artisan/trade family",
    "category": "Artisan"
  },
  {
    "id": "pradhanang",
    "surname": "Pradhanang",
    "traditionalRole": "Elite / administrative family",
    "populationShare": "≈ 0.6%",
    "approximatePopulation": "≈ 7,800",
    "description": "Elite/administrative family (variant of Pradhan)",
    "category": "Administrator"
  },
  {
    "id": "twanabasu",
    "surname": "Twanabasu",
    "traditionalRole": "Ritual/ceremonial function family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Ritual/ceremonial function family",
    "category": "Service"
  },
  {
    "id": "dhaugoda",
    "surname": "Dhaugoda",
    "traditionalRole": "Artisan or service family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan or service family",
    "category": "Service"
  },
  {
    "id": "amate",
    "surname": "Amate",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "malepati",
    "surname": "Malepati",
    "traditionalRole": "Gardener/plant-cultivator family",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Gardener/plant-cultivator family (related to Mali)",
    "category": "Service"
  },
  {
    "id": "bajimaya",
    "surname": "Bajimaya",
    "traditionalRole": "Traditional drummers / musicians",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Traditional drummers/musicians (baji = drum)",
    "category": "Musician"
  },
  {
    "id": "chaguthi",
    "surname": "Chaguthi",
    "traditionalRole": "Craft/artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Craft/artisan family",
    "category": "Artisan"
  },
  {
    "id": "deola",
    "surname": "Deola",
    "traditionalRole": "Market/trade family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Market/trade family",
    "category": "Merchant"
  },
  {
    "id": "pote",
    "surname": "Pote",
    "traditionalRole": "Bead-sellers / thread suppliers",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Bead-sellers/thread suppliers (pote = bead/necklace makers)",
    "category": "Artisan"
  },
  {
    "id": "duwal",
    "surname": "Duwal",
    "traditionalRole": "Small artisan / farming family",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Small artisan/farming family",
    "category": "Artisan"
  },
  {
    "id": "jojiju",
    "surname": "Jojiju",
    "traditionalRole": "Artisan / regional trade family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/regional trade family",
    "category": "Artisan"
  },
  {
    "id": "rojak",
    "surname": "Rojak",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "pahi",
    "surname": "Pahi",
    "traditionalRole": "Musicians / ritual performers",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Musicians/ritual performers",
    "category": "Musician"
  },
  {
    "id": "makai",
    "surname": "Makai",
    "traditionalRole": "Farmer / local artisan",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Farmer/local artisan",
    "category": "Farmer"
  },
  {
    "id": "heaju",
    "surname": "Heaju",
    "traditionalRole": "Small craft / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small craft/artisan family",
    "category": "Artisan"
  },
  {
    "id": "pasachhe",
    "surname": "Pasachhe",
    "traditionalRole": "Market/trade family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Market/trade family",
    "category": "Merchant"
  },
  {
    "id": "bhutta",
    "surname": "Bhutta",
    "traditionalRole": "Small traders / artisans",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small traders/artisans",
    "category": "Artisan"
  },
  {
    "id": "kishiju",
    "surname": "Kishiju",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "pakwan",
    "surname": "Pakwan",
    "traditionalRole": "Food-related vendors / cooks",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Food-related vendors/cooks (pakwan = cooked food)",
    "category": "Service"
  },
  {
    "id": "bhari",
    "surname": "Bhari",
    "traditionalRole": "Porter / carrier families",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Porter/carrier families (bhari = burden carrier)",
    "category": "Service"
  },
  {
    "id": "raghubansi",
    "surname": "Raghubansi",
    "traditionalRole": "Claim to Kshatriya lineage / landholders",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "Claim to Kshatriya lineage/landholders/traders",
    "category": "Administrator"
  },
  {
    "id": "sulu",
    "surname": "Sulu",
    "traditionalRole": "Artisan / trade family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Artisan/trade family",
    "category": "Artisan"
  },
  {
    "id": "dhoju",
    "surname": "Dhoju",
    "traditionalRole": "Artisan / ritual family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/ritual family",
    "category": "Artisan"
  },
  {
    "id": "banmali",
    "surname": "Banmali",
    "traditionalRole": "Small-trade / craft family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Small-trade/craft family",
    "category": "Artisan"
  },
  {
    "id": "aalubanjar",
    "surname": "Aalubanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "palubanjar",
    "surname": "Palubanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "dhoubanjar",
    "surname": "Dhoubanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "sibanjar",
    "surname": "Sibanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "chikanbanjar",
    "surname": "Chikanbanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "lubanjar",
    "surname": "Lubanjar",
    "traditionalRole": "Merchant / market trader subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant/market trader subgroup",
    "category": "Merchant"
  },
  {
    "id": "khyaju",
    "surname": "Khyaju",
    "traditionalRole": "Local artisan / trader",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Local artisan/trader",
    "category": "Artisan"
  },
  {
    "id": "tuitui",
    "surname": "Tuitui",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "gwachha",
    "surname": "Gwachha",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "gosai",
    "surname": "Gosai",
    "traditionalRole": "Religious mendicant / priestly roles",
    "populationShare": "≈ 0.4%",
    "approximatePopulation": "≈ 5,200",
    "description": "Religious mendicant/priestly roles (gosai forms of ascetic/priest)",
    "category": "Priest"
  },
  {
    "id": "pyatha",
    "surname": "Pyatha",
    "traditionalRole": "Small artisan / service family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small artisan/service family",
    "category": "Service"
  },
  {
    "id": "ulak",
    "surname": "Ulak",
    "traditionalRole": "Porter / transport-related family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Porter/transport-related family",
    "category": "Service"
  },
  {
    "id": "thusaju",
    "surname": "Thusaju",
    "traditionalRole": "Market trader / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Market trader/artisan family",
    "category": "Artisan"
  },
  {
    "id": "pusaju",
    "surname": "Pusaju",
    "traditionalRole": "Musician / ritual performer group",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Musician/ritual performer group",
    "category": "Musician"
  },
  {
    "id": "udas",
    "surname": "Udas",
    "traditionalRole": "Ascetic / mendicant families",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Ascetic/mendicant families (Udas appearance in ritual contexts)",
    "category": "Priest"
  },
  {
    "id": "basukala",
    "surname": "Basukala",
    "traditionalRole": "Artisan / ritual family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/ritual family",
    "category": "Artisan"
  },
  {
    "id": "bekoju",
    "surname": "Bekoju",
    "traditionalRole": "Local artisan / trade family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Local artisan/trade family",
    "category": "Artisan"
  },
  {
    "id": "bajiko",
    "surname": "Bajiko",
    "traditionalRole": "Drummer / musician family",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Drummer/musician family",
    "category": "Musician"
  },
  {
    "id": "lawaju",
    "surname": "Lawaju",
    "traditionalRole": "Small artisan / regional trading family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small artisan/regional trading family",
    "category": "Artisan"
  },
  {
    "id": "maka",
    "surname": "Maka",
    "traditionalRole": "Farmer / village artisan",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Farmer/village artisan",
    "category": "Farmer"
  },
  {
    "id": "gambanjar",
    "surname": "Gambanjar",
    "traditionalRole": "Merchant subgroup",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Merchant subgroup (banjar = merchant)",
    "category": "Merchant"
  },
  {
    "id": "leba",
    "surname": "Leba",
    "traditionalRole": "Small-trade / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small-trade/artisan family",
    "category": "Artisan"
  },
  {
    "id": "pentago",
    "surname": "Pentago",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "machamasi",
    "surname": "Machamasi",
    "traditionalRole": "Fish traders or water-related traders",
    "populationShare": "≈ 0.3%",
    "approximatePopulation": "≈ 3,900",
    "description": "Fish traders or water-related traders in origin",
    "category": "Merchant"
  },
  {
    "id": "gaiju",
    "surname": "Gaiju",
    "traditionalRole": "Small-trade / craft family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Small-trade/craft family",
    "category": "Artisan"
  },
  {
    "id": "chhusyabaga",
    "surname": "Chhusyabaga",
    "traditionalRole": "Ritual/ceremonial role family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Ritual/ceremonial role family",
    "category": "Service"
  },
  {
    "id": "khayemali",
    "surname": "Khayemali",
    "traditionalRole": "Food/market-related artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Food/market-related artisan family",
    "category": "Service"
  },
  {
    "id": "bohaju",
    "surname": "Bohaju",
    "traditionalRole": "Market/merchant family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Market/merchant family",
    "category": "Merchant"
  },
  {
    "id": "goja",
    "surname": "Goja",
    "traditionalRole": "Smith / artisan family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Smith/artisan family",
    "category": "Artisan"
  },
  {
    "id": "takra",
    "surname": "Takra",
    "traditionalRole": "Dairy / churners or food-related artisans",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Dairy/churners or food-related artisans (takra = buttermilk)",
    "category": "Service"
  },
  {
    "id": "nhemapuki",
    "surname": "Nhemapuki",
    "traditionalRole": "Regional artisan / occupation family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Regional artisan/occupation family",
    "category": "Service"
  },
  {
    "id": "potamah",
    "surname": "Potamah",
    "traditionalRole": "Ritual/ceremonial role family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Ritual/ceremonial role family",
    "category": "Service"
  },
  {
    "id": "desemaru",
    "surname": "Desemaru",
    "traditionalRole": "Artisan / craft family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Artisan/craft family",
    "category": "Artisan"
  },
  {
    "id": "basi",
    "surname": "Basi",
    "traditionalRole": "Service / small-trade family",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Service/small-trade family",
    "category": "Service"
  },
  {
    "id": "kasichhwa",
    "surname": "Kasichhwa",
    "traditionalRole": "Artisan/trade family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Artisan/trade family (variant)",
    "category": "Artisan"
  },
  {
    "id": "lachhimasyu",
    "surname": "Lachhimasyu",
    "traditionalRole": "Regional artisan / ritual family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Regional artisan/ritual family",
    "category": "Service"
  },
  {
    "id": "lakhemaru",
    "surname": "Lakhemaru",
    "traditionalRole": "Associated with Lakhe (masked dancer) families",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Associated with Lakhe (masked dancer) families/performers",
    "category": "Performer"
  },
  {
    "id": "chyamey",
    "surname": "Chyamey",
    "traditionalRole": "Ritual performer / dancer families",
    "populationShare": "≈ 0.2%",
    "approximatePopulation": "≈ 2,600",
    "description": "Ritual performer/dancer families",
    "category": "Performer"
  },
  {
    "id": "chamkhalak",
    "surname": "Chamkhalak",
    "traditionalRole": "Performer / dancer / ritual role family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Performer/dancer/ritual role family",
    "category": "Performer"
  },
  {
    "id": "halahulu",
    "surname": "Halahulu",
    "traditionalRole": "Local artisan / small-trade family",
    "populationShare": "≈ 0.1%",
    "approximatePopulation": "≈ 1,300",
    "description": "Local artisan/small-trade family",
    "category": "Artisan"
  },
  {
    "id": "nepali",
    "surname": "Nepali",
    "traditionalRole": "General identifier; occupation varies widely",
    "populationShare": "≈ 0.5%",
    "approximatePopulation": "≈ 6,500",
    "description": "General identifier; occupation varies widely",
    "category": "Various"
  }
], [t]);

  // Comprehensive district-wise population data
  const districtPopulations: DistrictPopulation[] = useMemo(() => [
    { district: 'Achham', newarPopulation: 53, male: 32, female: 21, percentage: 0.004, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Arghakhanchi', newarPopulation: 5110, male: 2337, female: 2773, percentage: 0.38, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Baglung', newarPopulation: 2595, male: 1307, female: 1288, percentage: 0.19, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Baitadi', newarPopulation: 10, male: 8, female: 2, percentage: 0.001, dominantCastes: ['Shrestha'] },
    { district: 'Bajhang', newarPopulation: 114, male: 61, female: 53, percentage: 0.008, dominantCastes: ['Shrestha'] },
    { district: 'Bajura', newarPopulation: 26, male: 19, female: 7, percentage: 0.002, dominantCastes: ['Shrestha'] },
    { district: 'Banke', newarPopulation: 5520, male: 2663, female: 2857, percentage: 0.41, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Bara', newarPopulation: 5742, male: 2809, female: 2933, percentage: 0.43, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Bardiya', newarPopulation: 2164, male: 1009, female: 1155, percentage: 0.16, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Bhaktapur', newarPopulation: 153857, male: 76585, female: 77272, percentage: 11.47, dominantCastes: ['Maharjan', 'Dangol', 'Shrestha'] },
    { district: 'Bhojpur', newarPopulation: 12075, male: 5957, female: 6118, percentage: 0.90, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Chitawan', newarPopulation: 35452, male: 17200, female: 18252, percentage: 2.64, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Dadeldhura', newarPopulation: 200, male: 113, female: 87, percentage: 0.015, dominantCastes: ['Shrestha'] },
    { district: 'Dailekh', newarPopulation: 704, male: 339, female: 365, percentage: 0.052, dominantCastes: ['Shrestha'] },
    { district: 'Dang', newarPopulation: 5220, male: 2480, female: 2740, percentage: 0.39, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Darchula', newarPopulation: 37, male: 29, female: 8, percentage: 0.003, dominantCastes: ['Shrestha'] },
    { district: 'Dhading', newarPopulation: 29746, male: 14388, female: 15358, percentage: 2.22, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Dhankuta', newarPopulation: 6745, male: 3306, female: 3439, percentage: 0.50, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Dhanusa', newarPopulation: 4066, male: 2044, female: 2022, percentage: 0.30, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Dolakha', newarPopulation: 15731, male: 7624, female: 8107, percentage: 1.17, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Dolpa', newarPopulation: 69, male: 40, female: 29, percentage: 0.005, dominantCastes: ['Shrestha'] },
    { district: 'Doti', newarPopulation: 593, male: 307, female: 286, percentage: 0.044, dominantCastes: ['Shrestha'] },
    { district: 'Gorkha', newarPopulation: 18272, male: 8583, female: 9689, percentage: 1.36, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Gulmi', newarPopulation: 4325, male: 2064, female: 2261, percentage: 0.32, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Humla', newarPopulation: 16, male: 16, female: 0, percentage: 0.001, dominantCastes: ['Shrestha'] },
    { district: 'Ilam', newarPopulation: 10502, male: 5274, female: 5228, percentage: 0.78, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Jajarkot', newarPopulation: 227, male: 117, female: 110, percentage: 0.017, dominantCastes: ['Shrestha'] },
    { district: 'Jhapa', newarPopulation: 32247, male: 15397, female: 16850, percentage: 2.40, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Jumla', newarPopulation: 249, male: 134, female: 115, percentage: 0.019, dominantCastes: ['Shrestha'] },
    { district: 'Kailali', newarPopulation: 2504, male: 1239, female: 1265, percentage: 0.19, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Kalikot', newarPopulation: 26, male: 20, female: 6, percentage: 0.002, dominantCastes: ['Shrestha'] },
    { district: 'Kanchanpur', newarPopulation: 1012, male: 489, female: 523, percentage: 0.075, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Kapilbastu', newarPopulation: 1717, male: 862, female: 855, percentage: 0.13, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Kaski', newarPopulation: 25698, male: 12722, female: 12976, percentage: 1.92, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Kathmandu', newarPopulation: 391262, male: 192649, female: 198613, percentage: 29.17, dominantCastes: ['Shrestha', 'Maharjan', 'Manandhar'] },
    { district: 'Kavrepalanchok', newarPopulation: 48827, male: 23969, female: 24858, percentage: 3.64, dominantCastes: ['Maharjan', 'Shrestha'] },
    { district: 'Khotang', newarPopulation: 9151, male: 4470, female: 4681, percentage: 0.68, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Lalitpur', newarPopulation: 163140, male: 80023, female: 83117, percentage: 12.16, dominantCastes: ['Maharjan', 'Shrestha', 'Shakya'] },
    { district: 'Lamjung', newarPopulation: 5846, male: 2838, female: 3008, percentage: 0.44, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Mahottari', newarPopulation: 4486, male: 2235, female: 2251, percentage: 0.33, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Makwanpur', newarPopulation: 25683, male: 12665, female: 13018, percentage: 1.91, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Manang', newarPopulation: 89, male: 67, female: 22, percentage: 0.007, dominantCastes: ['Shrestha'] },
    { district: 'Morang', newarPopulation: 36672, male: 17464, female: 19208, percentage: 2.73, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Mugu', newarPopulation: 14, male: 14, female: 0, percentage: 0.001, dominantCastes: ['Shrestha'] },
    { district: 'Mustang', newarPopulation: 120, male: 101, female: 19, percentage: 0.009, dominantCastes: ['Shrestha'] },
    { district: 'Myagdi', newarPopulation: 1350, male: 668, female: 682, percentage: 0.10, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Nawalparasi East', newarPopulation: 11056, male: 5253, female: 5803, percentage: 0.82, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Nawalparasi West', newarPopulation: 3960, male: 1899, female: 2061, percentage: 0.30, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Nuwakot', newarPopulation: 20304, male: 10006, female: 10298, percentage: 1.51, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Okhaldhunga', newarPopulation: 8742, male: 4221, female: 4521, percentage: 0.65, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Palpa', newarPopulation: 8582, male: 4097, female: 4485, percentage: 0.64, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Parbat', newarPopulation: 3248, male: 1563, female: 1685, percentage: 0.24, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Parsa', newarPopulation: 7607, male: 3693, female: 3914, percentage: 0.57, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Pyuthan', newarPopulation: 3639, male: 1736, female: 1903, percentage: 0.27, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Ramechhap', newarPopulation: 22955, male: 10851, female: 12104, percentage: 1.71, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Rasuwa', newarPopulation: 861, male: 476, female: 385, percentage: 0.064, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Rautahat', newarPopulation: 2063, male: 1010, female: 1053, percentage: 0.15, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Rolpa', newarPopulation: 440, male: 222, female: 218, percentage: 0.033, dominantCastes: ['Shrestha'] },
    { district: 'Rukum East', newarPopulation: 338, male: 158, female: 180, percentage: 0.025, dominantCastes: ['Shrestha'] },
    { district: 'Rukum West', newarPopulation: 177, male: 106, female: 71, percentage: 0.013, dominantCastes: ['Shrestha'] },
    { district: 'Rupandehi', newarPopulation: 21584, male: 10483, female: 11101, percentage: 1.61, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Salyan', newarPopulation: 1177, male: 541, female: 636, percentage: 0.088, dominantCastes: ['Shrestha'] },
    { district: 'Sankhuwasabha', newarPopulation: 7179, male: 3571, female: 3608, percentage: 0.54, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Saptari', newarPopulation: 2423, male: 1180, female: 1243, percentage: 0.18, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Sarlahi', newarPopulation: 7436, male: 3690, female: 3746, percentage: 0.55, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Sindhuli', newarPopulation: 18697, male: 9212, female: 9485, percentage: 1.39, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Sindhupalchok', newarPopulation: 25945, male: 12706, female: 13239, percentage: 1.93, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Siraha', newarPopulation: 3533, male: 1734, female: 1799, percentage: 0.26, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Solukhumbu', newarPopulation: 2571, male: 1307, female: 1264, percentage: 0.19, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Sunsari', newarPopulation: 33759, male: 16035, female: 17724, percentage: 2.52, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Surkhet', newarPopulation: 1885, male: 931, female: 954, percentage: 0.14, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Syangja', newarPopulation: 8647, male: 4032, female: 4615, percentage: 0.64, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Tanahu', newarPopulation: 24529, male: 11525, female: 13004, percentage: 1.83, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Taplejung', newarPopulation: 1682, male: 848, female: 834, percentage: 0.13, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Terhathum', newarPopulation: 2521, male: 1242, female: 1279, percentage: 0.19, dominantCastes: ['Shrestha', 'Maharjan'] },
    { district: 'Udayapur', newarPopulation: 12038, male: 5808, female: 6230, percentage: 0.90, dominantCastes: ['Shrestha', 'Maharjan'] },
  ], [t]);

  const filteredCastes = useMemo(() => {
    return casteData.filter(caste =>
      caste.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caste.traditionalRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caste.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [casteData, searchTerm]);

  const selectedCasteDetail = useMemo(() => {
    return casteData.find(caste => caste.id === selectedCaste);
  }, [selectedCaste, casteData]);

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            {t('caste.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('caste.subtitle')}
          </p>
        </div>

<div className="mb-6 max-w-sm  w-128 mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
  <h3 id="pdf-title" className="text-xl font-semibold text-gray-800 mb-2">
    Comprehensive Guide to All Nepal Castes
  </h3>

  <div id="pdf-description" className="text-gray-700 mb-4">
    Detailed population, location, and cultural info for all Nepal & Newa castes.
  </div>
  <a id="pdf-link" href="/caste.pdf" download>
    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
      Download PDF
    </button>
  </a>
</div>


        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-lg border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">
              {t('statistics.totalPopulation')}
            </h3>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">1,341,363</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {t('statistics.populationPercentage')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mb-2">
              {t('statistics.motherTongue')}
            </h3>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">863,380</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {t('statistics.languagePercentage')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
              {t('statistics.totalCastes')}
            </h3>
            <p className="text-4xl font-bold text-gray-800 dark:text-white">169+</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {t('statistics.uniqueOccupations')}
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 shadow-lg"
              />
            </div>
            <select
              value={selectedCaste}
              onChange={(e) => setSelectedCaste(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 shadow-lg"
            >
              <option value="">{t('search.selectCaste')}</option>
              {casteData.map((caste) => (
                <option key={caste.id} value={caste.id}>
                  {caste.surname}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Caste List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                {t('caste.casteList')}
              </h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {filteredCastes.map((caste) => (
                  <div
                    key={caste.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                      selectedCaste === caste.id 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 shadow-lg' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300'
                    }`}
                    onClick={() => setSelectedCaste(caste.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {caste.surname}
                        </h3>
                        <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                          {caste.traditionalRole}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {caste.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                          {caste.populationShare}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {caste.approximatePopulation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* District Population Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {t('districts.title')}
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total Newar Population: 1,341,363
                </div>
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search districts..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  onChange={(e) => {
                    const search = e.target.value.toLowerCase();
                    const districts = document.querySelectorAll('.district-item');
                    districts.forEach(district => {
                      const districtName = district.querySelector('h4')?.textContent?.toLowerCase();
                      if (districtName?.includes(search)) {
                        (district as HTMLElement).style.display = 'block';
                      } else {
                        (district as HTMLElement).style.display = 'none';
                      }
                    });
                  }}
                />
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {districtPopulations.map((district) => (
                  <div
                    key={district.district}
                    className="district-item p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:scale-102"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {district.district}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('districts.dominantCastes')}: {district.dominantCastes.join(', ')}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Male: {district.male.toLocaleString()} | Female: {district.female.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-amber-700 dark:text-amber-400">
                          {district.newarPopulation.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          ({district.percentage.toFixed(2)}%)
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(district.percentage * 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Caste Detail Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 rounded-2xl shadow-2xl p-8 text-white transition-all duration-300 hover:scale-102">
                {selectedCasteDetail ? (
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">{selectedCasteDetail.surname}</h2>
                    <div className="bg-white/20 rounded-xl p-4 mb-4">
                      <p className="text-lg font-semibold">{selectedCasteDetail.traditionalRole}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm opacity-90">{t('caste.populationShare')}</p>
                        <p className="text-xl font-bold">{selectedCasteDetail.populationShare}</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm opacity-90">{t('caste.approximatePopulation')}</p>
                        <p className="text-xl font-bold">{selectedCasteDetail.approximatePopulation}</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {selectedCasteDetail.description}
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{t('caste.selectPrompt')}</h3>
                    <p className="text-white/80">{t('caste.selectDescription')}</p>
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mt-6 transition-all duration-300 hover:scale-102">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  <Link href="/culture" className="hover:text-amber-600 transition-colors">
                    {t('caste.heritageTitle')}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('caste.heritageDescription')}
                </p>
                <div className="space-y-3">
                  <Link href="/culture/arts" className="block">
                    <span className="inline-block px-3 py-2 w-full text-center rounded-full text-sm bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 transition-all duration-200 hover:scale-105 hover:bg-amber-200">
                      🎨 {t('caste.heritageItems.art')}
                    </span>
                  </Link>
                  <Link href="/culture/festivals" className="block">
                    <span className="inline-block px-3 py-2 w-full text-center rounded-full text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 transition-all duration-200 hover:scale-105 hover:bg-orange-200">
                      🎉 {t('caste.heritageItems.festivals')}
                    </span>
                  </Link>
                  <Link href="/culture" className="block">
                    <span className="inline-block px-3 py-2 w-full text-center rounded-full text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 transition-all duration-200 hover:scale-105 hover:bg-yellow-200">
                      🏛️ {t('caste.heritageItems.architecture')}
                    </span>
                  </Link>
                  <Link href="/culture" className="block">
                    <span className="inline-block px-3 py-2 w-full text-center rounded-full text-sm bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 transition-all duration-200 hover:scale-105 hover:bg-red-200">
                      🍲 {t('caste.heritageItems.cuisine')}
                    </span>
                  </Link>
                  <Link href="/language/learn" className="block">
                    <span className="inline-block px-3 py-2 w-full text-center rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-200">
                      💬 {t('caste.heritageItems.language')}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Significance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            {t('culture.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🏛️', 
                title: t('culture.architecture'), 
                desc: t('culture.architectureDesc'),
                link: '/culture'
              },
              { 
                icon: '🎨', 
                title: t('culture.art'), 
                desc: t('culture.artDesc'),
                link: '/culture/arts'
              },
              { 
                icon: '🎉', 
                title: t('culture.festivals'), 
                desc: t('culture.festivalsDesc'),
                link: '/culture/festivals'
              },
              { 
                icon: '🍲', 
                title: t('culture.cuisine'), 
                desc: t('culture.cuisineDesc'),
                link: '/culture'
              }
            ].map((item) => (
              <Link key={item.title} href={item.link}>
                <div
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for scale-102 */}
      <style jsx global>{`
        .hover-scale-102:hover {
          transform: scale(1.02);
        }
        .hover-scale-102 {
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </div>
    </PageLayout>
  );
}

export default Caste;