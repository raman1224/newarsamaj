// hooks/useTranslation.ts
'use client'

import { useLanguage } from '@/context/LanguageContext'

// Define your translation data with proper types
interface TranslationData {
  [key: string]: any;
}




const translations: TranslationData = {
  en:  {


    nav: {
  
      home: "Home",
      about: "About Us",
      language: "Language",
       heritage: "Heritage",  //change
      resources: "Resources",
      events: "Events",
      community: "Community", //change
      notices: "Notices",  //change
      contact: "Contact Us",
      donate: "Donate",
      culture: "Culture",
      signIn: "Sign In",
      signUp: "Sign Up",    //change
      aboutItems: {
        our_history: "Our History",
        mission_vision: "Mission & Vision",
        vision_values: "Vision & Values",
        leadership_community: "Leadership & Community"
      },
      aboutItemsDesc: {
        our_history: "Interactive timeline, videos, images, AI chatbot Q&A",
        mission_vision: "Animated cards, counters, hover effects",
        vision_values: "Icons representing values, 3D flip cards, AI quiz",
        leadership_community: "Profile cards, hover 3D lift, social links"
      },
      languageItems: {
        learn_newar_language: "Learn Newar Language",
        language_exchange_chatroom: "Language Exchange Chatroom",
        culture_religion_language: "Culture, Religion & Language",
        culture_school: "Culture School"
      },
      languageItemsDesc: {
        learn_newar_language: "Structured learning with AI tutor assistance",
        language_exchange_chatroom: "Real-time chat with AI-assisted suggestions",
        culture_religion_language: "Media gallery, festival videos, AI summarizer",
        culture_school: "Video lessons, AI adaptive quizzes, progress tracking"
      },
    
      heritageItems: {
        culture_customs: "Culture & Customs",
        religion_beliefs: "Religion & Beliefs",
        festivals_celebrations: "Festivals & Celebration",
        caste_occupation: "Caste & Occupation"
      },
    //changes 
      heritageItemsDesc:{
        culture_customs: "Explore traditions, lifestyle, and cultural practices with rich media and AI insights",
        religion_beliefs: "Learn about faith, rituals, temples, and spiritual practices with guided explanations",
        festivals_celebrations: "Festival calendar, celebration videos, and stories with AI-powered summaries",
        caste_occupation: "Information about traditional caste system and occupations"
      },

      eventItems: {
        upcoming_events: "Upcoming Events",
        festival_calendar: "Nepal Calendar"
      },
      eventItemsDesc: {
        upcoming_events: "3D card list, countdown timers, RSVP",
        festival_calendar: "Interactive, scrollable calendar with festival images"
      },
      communityItems: {
        community_onboarding: "Community Onboarding",
            news_updates: "News & Updates",
        meetup: "Meetup",
        notices: "Notices"
      },




      
      //changes
      communityItemsDesc: {
        community_onboarding: "Complete cultural profile, interests, and community role",
        news_updates: "Interactive card-based layout, AI summary",
        meetup : " Group call and message each Newa Members  ",
        notices: "Notices of new update"
      }
    },
   
  "hero": {
    "badge": "Preserving Newar Heritage Since 2080",
    "title": "Newar Samaj",
    "subtitle": "Preserving Culture • Promoting Language • Building Community",
    "subtitleNative": "संस्कृति संरक्षण • भाषा प्रवर्द्धन • समुदाय निर्माण",
    "description": "Join thousands of Newar community members worldwide in celebrating our rich heritage, learning our ancient language, and connecting with our vibrant culture through modern technology.",
    "cta1": "Join Our Community",
    "cta2": "Learn More",
    "stats": {
      "artifacts": "50+",
      "artifactsLabel": "Cultural Sites",
      "lessons": "60+", 
      "lessonsLabel": "Language Lessons",
      "assistant": "3K+",
      "assistantLabel": "Community Members",
      "festivals": "25+",
      "festivalsLabel": "Annual Festivals"
    }
  },
      "about": {
    "badge": "About Newar Samaj",
    "title": {
      "part1": "Preserving Heritage,",
      "part2": "Building Future"
    },
    "subtitle": "We are dedicated to preserving Newar culture, promoting our language, and connecting community members worldwide through technology and tradition.",
    "links": {
      "0": {
        "title": "Our History",
        "description": "1200+ years of rich cultural heritage"
      },
      "1": {
        "title": "Mission & Vision",
        "description": "Our goals for cultural preservation"
      },
      "2": {
        "title": "Core Values", 
        "description": "Principles guiding our community"
      },
      "3": {
        "title": "Leadership",
        "description": "Meet our dedicated team"
      }
    },
    "mission": {
      "title": "Our Mission",
      "description": "To preserve and promote Newar cultural heritage through education, technology, and community engagement while making our rich traditions accessible to future generations."
    },
    "vision": {
      "title": "Our Vision",
      "description": "A world where Newar culture thrives globally, our language is spoken proudly, and our community remains connected across generations and borders."
    },
    "leadership": {
      "title": "Our Leadership Team",
      "description": "Dedicated individuals working tirelessly to preserve and promote Newar culture worldwide",
      "viewFullTeam": "Meet Full Team",
      "leaders": {
        "0": {
          "name": "Mahesh Dangol",
          "role": "अध्यक्ष  (President)",
          "image": "/mahesh.jpg",
          "bio": "Leading the Newar Samaj with vision and dedication, preserving our cultural heritage"
        },
        "1": {
          "name": "Gyan Kumar Dangol",
          "role": "उपाध्यक्ष  (Vice President)",
          "image": "/gyan.jpg",
          "bio": "Managing operations and community relations with extensive experience"
        },
        "2": {
          "name": "Ramhari Dangol", 
          "role": "Meeting Coordinator",
          "image": "/ramhari.jpg",
          "bio": "Organizing community events and ensuring smooth operations"
        },
        "3": {
          "name": "Prakash Dangol",
          "role": "Social Media & Marketing",
          "image": "/prakash.jpg", 
          "bio": "Expanding our digital presence and finding new opportunities"
        }
      }
    },
    "stats": {
      "members": "1,000+",
      "membersLabel": "Community Members",
      "articles": "50+",
      "articlesLabel": "Cultural Articles", 
      "countries": "15+",
      "countriesLabel": "Countries Reached"
    },
    "cta": {
      "title": "Ready to Join Our Community?",
      "description": "Connect with thousands of Newar community members worldwide and be part of preserving our rich cultural heritage for future generations.",
      "signUp": "Sign Up Now",
      "contact": "Contact Us"
    }
  },


"features": {

    "flashcards": {
      "title": "Interactive Flashcards",
      "description": "Practice vocabulary with spaced repetition"
    },
    "chatroom": {
      "title": "Language Exchange",
      "description": "Practice with native speakers"
    },
    "aiTutor": {
      "title": "AI Tutor",
      "description": "Get personalized help 24/7"
    },
    "translation": {
      "title": "Translation Tool",
      "description": "Translate between English, Nepali, and Newar"
    },

  "title": "Explore Newar Samaj",
    "subtitle": "Discover our rich cultural heritage, language resources, and community initiatives", 


    "culturalHeritage": {
      "title": "Cultural Heritage",
      "subtitle": "Temples, Arts & Festivals",
      "description": "Explore 50+ ancient temples, traditional arts, and 25+ vibrant festivals"
    },
    "languageLearning": {
      "title": "Language Learning",
      "subtitle": "AI Tutor & Lessons", 
      "description": "Learn Newar language with interactive AI tutor and structured lessons"
    },
    "community": {
      "title": "Community",
      "subtitle": "Join & Connect",
      "description": "Connect with 10,000+ Newar community members worldwide"
    },
    "calendar": {
      "title": "Nepal Calendar",
      "subtitle": "Events & Festivals",
      "description": "Traditional Bikram Sambat calendar with festival dates"
    }
  },
"sections": {
    "featuredTemples": {
      "title": "Featured Cultural Sites",
      "description": "Explore ancient Newar architecture and UNESCO heritage sites",
      "viewAll": "Explore All Temples"
    }
  },




  "events": {

      
      "youthProgram": "Youth Empowerment Program",
      "date": "Date",
      "time": "Time",
      "location": "Location",
      "description": "Description",
      "attendees": "Attendees",
      "register": "Register",
      "viewDetails": "View Details",
      "addToCalendar": "Add to Calendar",
      "noEvents": "No upcoming events",
      "youthDescription": "Programs focused on empowering young Newar generation with skills, cultural knowledge, and leadership training.",
   
    "loading": "Loading events...",
    "upcomingEvents": "Upcoming Events",
    "monthlyMeeting": "Monthly Community Meeting",
    "meetingDescription": "Regular community gathering to discuss Samaj activities, cultural preservation, and community development projects.",
    "languageSchool": "Newar Language Class",
    "languageDescription": "Learn Newar language basics, conversation skills, and cultural context for all age groups.",
    "culturalWorkshop": "Cultural Workshop",
    "workshopDescription": "Hands-on workshop on traditional Newar arts, crafts, and cultural practices.",
    "heritageTour": "Heritage Tour",
    "heritageDescription": "Guided tour to historical Newar sites in Nuwakot district.",
    "culturalFestival": "Cultural Festival",
    "festivalDescription": "Annual cultural festival showcasing Newar traditions, food, music, and dance performances.",
   
  },

  



    
    // donate: {
    //   title: "Support Our Mission",
    //   description: "Your donation helps preserve Newar culture and language for future generations",
    //   methods: {
    //     esewa: "eSewa",
    //     imepay: "IME Pay",
    //     bank: "Bank Transfer",
    //     credit: "Credit Card"
    //   },
    //   form: {
    //     name: "Full Name",
    //     email: "Email Address",
    //     amount: "Donation Amount",
    //     message: "Message (Optional)",
    //     submit: "Donate Now"
    //   }
    // },
    quickFeatures: {
      title: "Discover Our Heritage",
      culturalHeritage: {
        title: "Cultural Heritage",
        subtitle: "Explore temples, festivals, and traditions",
        description: "Discover the rich history of Newar architecture, religious practices, and cultural celebrations that have been preserved for centuries."
      },
      languageLearning: {
        title: "Language Learning",
        subtitle: "AI-powered Newar language education",
        description: "Learn Newar language with interactive lessons, AI tutors, and real-time translation between Newa, Nepali, and English."
      },
      community: {
        title: "Community",
        subtitle: "Connect with fellow community members",
        description: "Join our vibrant community through events, discussions, and cultural activities that bring Newar people together worldwide."
      }
    },
    missionVision: {
      title: "Mission & Vision",
      subtitle: "Preserving and promoting Newar culture for future generations"
    },
    mission: {
      title: "Our Mission",
      description: "To preserve, promote, and strengthen Newar cultural heritage, language, and traditions",
      language_preservation: "Preserve Nepal Bhasa",
      language_preservation_desc: "Promote Newa language through schools, digital platforms, and workshops",
      language_preservation_long: "Our mission is to ensure the Newa language (Nepal Bhasa) thrives through comprehensive educational programs, digital resources, and community workshops. We aim to create learning materials, support language teachers, and develop AI-powered tools that make learning Nepal Bhasa accessible to everyone, everywhere.",
      cultural_identity: "Cultural Identity",
      cultural_identity_desc: "Maintain and strengthen Newa cultural identity, traditions, music, arts, and crafts",
      cultural_identity_long: "We are committed to preserving the rich tapestry of Newar cultural identity through documenting and promoting traditional practices, music, dance, arts, and crafts. Our initiatives include cultural festivals, artisan support programs, and digital archives that celebrate and sustain our unique heritage for future generations.",
      intergenerational_learning: "Intergenerational Learning",
      intergenerational_learning_desc: "Encourage youth to understand traditional rituals, festivals, and oral histories",
      intergenerational_learning_long: "Bridging generations is key to cultural survival. We facilitate knowledge transfer through mentorship programs, community gatherings, and digital platforms where elders can share wisdom with youth. Our oral history projects document ancestral knowledge while our youth programs make traditional practices relevant for today's world.",
      global_awareness: "Global Awareness",
      global_awareness_desc: "Build cultural pride and showcase Newa culture internationally",
      global_awareness_long: "We work to position Newar culture on the global stage through international collaborations, cultural exchanges, and digital presence. Our efforts include participating in world cultural festivals, establishing sister-city relationships, and creating multimedia content that shares the beauty and depth of Newar traditions with global audiences.",
      unity_in_diversity: "Unity in Diversity",
      unity_in_diversity_desc: "Promote unity among Hindu and Buddhist Newars while respecting diversity",
      unity_in_diversity_long: "Celebrating the beautiful diversity within Newar culture, we foster dialogue and collaboration between Hindu and Buddhist communities. Our programs highlight shared values and traditions while respecting religious differences. We believe our strength lies in unity that embraces diversity, creating a cohesive community that honors all aspects of our heritage."
    },
    vision: {
      title: "Our Vision",
      description: "A future where Newar culture thrives globally while maintaining its rich heritage",
      language_future: "Widely Spoken Language",
      language_future_desc: "Nepal Bhasa widely spoken and taught in educational institutions",
      language_future_long: "We envision a future where Nepal Bhasa is not just preserved but flourishes as a living language. Our goal is to see it taught in schools, used in media, and spoken proudly in homes and communities worldwide. Through technology and education, we aim to make Nepal Bhasa accessible to all who wish to learn and use it in daily life.",
      cultural_institutions: "Strong Cultural Institutions",
      cultural_institutions_desc: "Vibrant guthi systems, festivals, and community centers preserving heritage",
      cultural_institutions_long: "Our vision includes revitalized and strengthened cultural institutions that serve as pillars of Newar community life. We see guthi systems thriving, community centers buzzing with activity, and festivals that both preserve traditions and evolve to include new generations. These institutions will be supported by digital infrastructure that connects global Newar communities.",
      youth_engagement: "Youth Engagement",
      youth_engagement_desc: "Newar youth actively involved in art, architecture, literature, and global networking",
      youth_engagement_long: "We dream of a future where Newar youth are not just participants but leaders in cultural preservation and innovation. Through mentorship, education, and technology, we aim to empower young Newars to reinterpret traditional arts, architecture, and literature for contemporary contexts while maintaining deep respect for heritage and tradition.",
      tradition_modernity: "Tradition & Modernity",
      tradition_modernity_desc: "Balance between cultural roots and embracing technology for preservation",
      tradition_modernity_long: "Our vision harmonizes tradition with innovation. We see Newar culture thriving through the strategic use of technology—from AI-powered language learning to virtual reality experiences of festivals. This balance allows us to preserve ancient wisdom while making it accessible and relevant to modern generations across the globe.",
      international_recognition: "International Recognition",
      international_recognition_desc: "Global appreciation of Newar culture through UNESCO heritage and cultural diplomacy",
      international_recognition_long: "We work toward international recognition of Newar culture as a significant contribution to world heritage. This includes UNESCO designation for important cultural elements, inclusion in world cultural education curricula, and representation in global cultural forums. Through cultural diplomacy, we aim to share the richness of Newar traditions with the world."
    },
    focusAreas: {
      title: "Our Focus Areas",
      language: "Language",
      religion: "Religion",
      festivals: "Festivals",
      art: "Art & Craft",
      youth: "Youth",
      global: "Global Connect",
      learn_more: "Learn More",
      language_desc: "Preserving and promoting Nepal Bhasa through education and digital platforms",
      language_long: "Our language initiatives include developing comprehensive learning materials, supporting Nepal Bhasa teachers, creating AI-powered learning tools, and establishing language nests for immersive learning. We work with educational institutions to incorporate Nepal Bhasa into curricula and with technology partners to develop digital resources that make the language accessible to global learners.",
      religion_desc: "Respecting both Hindu and Buddhist traditions within Newar culture",
      religion_long: "We celebrate the religious diversity within Newar culture, supporting both Hindu and Buddhist traditions through interfaith dialogue, shared festival celebrations, and educational programs that highlight our common heritage. Our initiatives include preserving religious texts, supporting temple maintenance, and creating resources that explain religious practices to younger generations.",
      festivals_desc: "Celebrating and maintaining traditional festivals and rituals",
      festivals_long: "Newar festivals are vibrant expressions of our cultural identity. We work to document, preserve, and promote traditional festivals through community celebrations, educational materials, and digital archives. Our efforts include supporting festival organizers, creating festival guides for younger generations, and developing immersive experiences that allow global participants to engage with our festivals.",
      art_desc: "Supporting traditional arts, crafts, music, and architecture",
      art_long: "Newar art forms represent centuries of cultural refinement. We support traditional artists through grants, training programs, and market access initiatives. Our projects include documenting endangered art forms, creating digital archives of traditional designs, and fostering innovation that brings traditional arts into contemporary contexts while maintaining their cultural integrity.",
      youth_desc: "Engaging younger generations in cultural preservation",
      youth_long: "Youth engagement is essential for cultural continuity. We develop programs that make Newar culture relevant and exciting for younger generations, including technology-driven learning tools, social media campaigns, and leadership development programs. Our youth initiatives focus on co-creation, allowing young Newars to shape how culture evolves while maintaining core values and traditions.",
      global_desc: "Building international connections and awareness",
      global_long: "In our interconnected world, we build bridges between Newar communities globally. Our international initiatives include cultural exchange programs, global networking platforms, and collaborative projects that connect Newars across borders. We work to raise international awareness of Newar culture through media partnerships, cultural diplomacy, and participation in global cultural events."
    },
    infographic: {
      title: "Cultural Insights at a Glance",
      mission_title: "Mission Focus Areas",
      vision_title: "Vision Objectives"
    },
    globalCommunity: {
      title: "Global Newar Community",
      description: "Connecting Newars across the world to preserve and celebrate our shared heritage",
      members: "Community Members",
      countries: "Countries",
      events: "Annual Events",
      languages: "Supported Languages"
    },
    cta: {
      title: "Join Our Mission",
      description: "Become part of the movement to preserve and promote Newar culture worldwide",
      join_button: "Join Newar Samaj",
      learn_button: "Learn More",
      quiz_button: "Take Cultural Quiz"
    },
    quiz: {
      title: "Newar Culture Quiz",
      progress: "Question {current} of {total}",
      result_title: "Quiz Results",
      score: "You scored {score} out of {total}",
      try_again: "Try Again",
      close: "Close",
      question_1: "Which festival is known as the 'festival of lights' in Newar culture?",
      option_1_1: "Tihar",
      option_1_2: "Dashain",
      option_1_3: "Holi",
      option_1_4: "Diwali",
      question_2: "What is the traditional Newar dress called?",
      option_2_1: "Sari",
      option_2_2: "Dhoti",
      option_2_3: "Haku Patasi",
      option_2_4: "Kurta",
      question_3: "Which of these is a traditional Newar musical instrument?",
      option_3_1: "Tabla",
      option_3_2: "Dhimay",
      option_3_3: "Sitar",
      option_3_4: "Flute"
    },
   history: {
      title: "Newar History & Heritage",
      subtitle: "Exploring the rich cultural legacy of the Newar people through centuries",
      overview: {
        title: "Overview",
        paragraph1: "The Newars are the historical inhabitants of the Kathmandu Valley in Nepal and creators of its spectacular urban civilization. With a documented history of over two millennia, Newars have developed a complex culture characterized by unique urban settlements, sophisticated art and architecture, and a highly stratified social system.",
        paragraph2: "Newar society is noted for its synthesis of Hindu and Buddhist traditions, with most rituals and festivals incorporating elements from both religions. The Newar language, known as Nepal Bhasa, is a Sino-Tibetan language with a rich literary tradition dating back to the 12th century.",
        paragraph3: "The Kathmandu Valley, the heartland of Newar civilization, was designated a UNESCO World Heritage Site in 1979 in recognition of its extraordinary cultural and artistic achievements. Newar architects and artisans developed distinctive styles of temple architecture, particularly the pagoda style which influenced building traditions across the Himalayas.",
        imageAlt: "Kathmandu Valley panorama showing traditional architecture",
        imageCaption: "The Kathmandu Valley, heartland of Newar civilization (Source: UNESCO)"
      },
      timeline: {
        title: "Historical Timeline",
        tabs: {
          all: "All Periods",
          preMalla: "Pre-Malla",
          malla: "Malla Period",
          modern: "Modern Era"
        },
        pre400CE: {
          year: "Pre-400 CE",
          title: "Early Settlements",
          description: "Archaeological evidence suggests early settlements in the Kathmandu Valley dating back to the 1st millennium BCE. The earliest known inhabitants were likely Kirats, followed by the Newars who developed a distinct urban civilization."
        },
        licchavi: {
          year: "400-750 CE",
          title: "Licchavi Period",
          description: "Golden age of art and architecture; establishment of many cultural traditions. The Licchavi dynasty left extensive inscriptions in Sanskrit documenting social, economic, and religious life. Newar culture began to take distinctive shape during this period."
        },
        transitional: {
          year: "750-1200 CE",
          title: "Transitional Period",
          description: "A period of political fragmentation and cultural synthesis. The practices of Hinduism and Buddhism became more deeply integrated, creating the unique syncretic tradition characteristic of Newar culture."
        },
        malla: {
          year: "1200-1769",
          title: "Malla Dynasty",
          description: "Flourishing of Newar culture; construction of palaces, temples, and public spaces. The Malla kings were great patrons of art, architecture, and literature. This era saw the construction of iconic landmarks like Kathmandu, Patan, and Bhaktapur Durbar Squares."
        },
        jayasthiti: {
          year: "1382",
          title: "Jayasthiti Malla's Codification",
          description: "Social reorganization and caste system formalization. King Jayasthiti Malla introduced legal and social reforms that organized Newar society into a complex caste hierarchy with specific duties and privileges for each group."
        },
        gorkha: {
          year: "1769",
          title: "Gorkha Conquest",
          description: "Prithvi Narayan Shah conquers Kathmandu Valley, ending Malla rule. This marked the beginning of Shah dynasty rule and significant changes to Newar political influence and cultural autonomy."
        },
        muluki: {
          year: "1854",
          title: "Muluki Ain",
          description: "Rana legal code further codifies social hierarchy. The legal document formalized caste distinctions and restrictions, affecting Newar social organization for generations."
        },
        rana: {
          year: "1951",
          title: "End of Rana Rule",
          description: "Democratic reforms begin; caste discrimination officially outlawed. Newars played significant roles in the democracy movement and subsequent cultural revival."
        },
        renaissance: {
          year: "1990",
          title: "Cultural Renaissance",
          description: "Following the People's Movement, Newar language and culture experience a revival. Nepal Bhasa publications increase, and cultural organizations gain momentum."
        },
        present: {
          year: "Present",
          title: "Cultural Preservation",
          description: "Revival movements and efforts to preserve Newar heritage continue amidst modernization and globalization. UNESCO designation of Kathmandu Valley World Heritage Site helps preservation efforts."
        }
      },
      socialStructure: {
        title: "Social Structure",
        paragraph1: "The traditional Newar social structure is organized around a complex caste system (jāt) that incorporates both Hindu and Buddhist elements. Historically comprising approximately 70 distinct castes, this system was formally codified during the reign of King Jayasthiti Malla (1382-1395) and further reinforced by the Muluki Ain legal code of 1854.",
        paragraph2: "Each caste traditionally had specific occupational specializations, ritual roles, and social obligations. While the legal framework for caste discrimination was abolished in 1963, caste identity remains socially significant in many contexts.",
        paragraph3: "The system is unique in its integration of both Hindu and Buddhist religious frameworks, with parallel priestly classes (Brahmin and Vajracharya) and complex rules governing interpersonal relations, dining, and marriage across caste lines.",
        tabs: {
          all: "All Castes",
          hindu: "Hindu Castes",
          buddhist: "Buddhist Castes",
          priestly: "Priestly Classes"
        },
        surnames: "Common Surnames",
        occupation: "Traditional Occupation",
        religion: "Religious Affiliation",
        gotra: "Gotra/Exogamy Rules",
        sources: "Sources"
      },
      caste: {
        priestly: {
          category: "Priestly Classes",
          rajopadhyaya: {
            name: "Rajopadhyaya",
            description: "Hindu priests, also known as Deo Brahmin",
            occupation: "Temple priests, ritual specialists",
            religion: "Hindu",
            gotra: "Various (Kashyap, Bharadwaj, etc.)"
          },
          vajracharya: {
            name: "Vajracharya",
            description: "Buddhist priests, also called Gubhaju",
            occupation: "Buddhist ritual specialists",
            religion: "Buddhist",
            gotra: "Not applicable"
          },
          shakya: {
            name: "Shakya",
            description: "Buddhist ritual practitioners and goldsmiths",
            occupation: "Goldsmiths, ritual assistants",
            religion: "Buddhist",
            gotra: "Not applicable"
          }
        },
        ruling: {
          category: "Ruling and Merchant Classes",
          shrestha: {
            name: "Chathariya/Shrestha",
            description: "Traditional ruling and administrative class",
            occupation: "Administrators, rulers, merchants",
            religion: "Both Hindu and Buddhist",
            gotra: "Various"
          },
          uray: {
            name: "Urāy",
            description: "Merchant class including Tuladhar, Kansakar, etc.",
            occupation: "Traders, metalworkers, artisans",
            religion: "Predominantly Buddhist",
            gotra: "Not applicable"
          }
        },
        agricultural: {
          category: "Agricultural and Artisan Classes",
          jyapu: {
            name: "Jyāpu",
            description: "Farmer caste, the largest Newar community",
            occupation: "Farmers, potters",
            religion: "Both Hindu and Buddhist",
            gotra: "Various"
          },
          artisan: {
            name: "Artisan Castes",
            description: "Various specialized craft communities",
            occupation: "Painters, dyers, weavers, barbers, etc.",
            religion: "Both Hindu and Buddhist",
            gotra: "Various"
          }
        },
        service: {
          category: "Service and Other Castes",
          dyolah: {
            name: "Dyolah",
            description: "Traditional musicians and funeral attendants",
            occupation: "Musicians, funeral priests",
            religion: "Both Hindu and Buddhist",
            gotra: "Various"
          },
          pode: {
            name: "Pode",
            description: "Traditional fishermen and sweepers",
            occupation: "Fishermen, municipal workers",
            religion: "Both Hindu and Buddhist",
            gotra: "Various"
          }
        }
      },
      language: {
        subtitle: "hello",
        title: "Language and Literature",
        paragraph1: "Nepal Bhasa (also known as Newari) is a Sino-Tibetan language with its own distinct script (Prachalit, Ranjana, and others). It has a rich literary tradition dating to the 12th century with the earliest known inscription from 1140 AD.",
        paragraph2: "The language experienced a golden age during the Malla period (1200-1769) with prolific production of dramatic works, poetry, and religious texts. Despite suppression during the Rana and Shah periods, the language has experienced a revival since the 1990s.",
        paragraph3: "Today, Nepal Bhasa is recognized as a national language of Nepal and is taught in schools and used in media publications. Efforts to digitize the language and promote its use continue through various cultural organizations.",
        development: "Historical Development",
        ancient: {
          period: "Ancient Era",
          description: "Nepal Bhasa originated from Sanskrit and Prakrit influences during the Licchavi period. Early inscriptions show a developing literary tradition."
        },
        malla: {
          period: "Malla Period",
          description: "Golden age of Nepal Bhasa literature with dramatic works, poetry, and religious texts. The language flourished under royal patronage."
        },
        gorkha: {
          period: "Gorkha Rule",
          description: "Decline in official status as Nepali became the state language. Nepal Bhasa persisted in domestic and religious contexts."
        },
        rana: {
          period: "Rana Era",
          description: "Suppression of Nepal Bhasa publications and education. The language was maintained through oral traditions and religious practices."
        },
        modern: {
          period: "Modern Revival",
          description: "Renaissance movement from the 1920s onward. Democratization after 1990 led to increased recognition and use in media and education."
        }
      },
      arts: {
        title: "Arts & Crafts",
        paragraph1: "Newar artisans have created some of the most exquisite art and architecture in the Himalayan region. Their craftsmanship in wood, metal, stone, and clay is renowned for its technical excellence and aesthetic refinement.",
        paragraph2: "The distinctive pagoda style of temple architecture developed by Newar architects influenced building traditions across Asia. Similarly, Newar metalworkers and painters created works that were exported throughout the Buddhist world.",
        architecture: {
          title: "Architecture",
          description: "Pagoda style temples, courtyards, and palace complexes characterized by intricate wood carvings, brickwork, and tiered roofs."
        },
        metalwork: {
          title: "Metalwork",
          description: "Bronze casting, repoussé work, and ritual objects including statues, bells, and ritual vessels demonstrating exceptional craftsmanship."
        },
        woodcarving: {
          title: "Wood Carving",
          description: "Intricate window frames, toranas, and temple struts featuring deities, mythical creatures, and floral patterns."
        },
        paubha: {
          title: "Paubha Painting",
          description: "Religious scroll paintings in traditional style similar to Tibetan thangkas but with distinctive Newar characteristics."
        },
        stone: {
          title: "Stone Sculpture",
          description: "Exquisitely carved stone statues of deities, guardians, and decorative elements found in temples and public spaces."
        },
        pottery: {
          title: "Pottery",
          description: "Traditional pottery making, especially in the Thimi region, producing both utilitarian and ritual vessels."
        }
      },
      religion: {
        title: "Religion & Rituals",
        paragraph1: "Newar religious life is characterized by a unique synthesis of Hinduism and Buddhism, where the two traditions coexist and often interpenetrate. Most Newars practice both religions simultaneously, participating in festivals and rituals from both traditions.",
        paragraph2: "This syncretism is evident in temple complexes where Hindu and Buddhist deities are worshipped side by side, and in religious specialists who perform rituals from both traditions. Many Newar households maintain shrines to both Hindu and Buddhist deities.",
        paragraph3: "The ritual calendar is densely packed with festivals, processions, and life-cycle ceremonies that reinforce community bonds and religious identity. These rituals often involve complex arrangements of offerings, music, and masked dances.",
        festivals: "Major Festivals",
        significance: "Significance",
        indra: {
          name: "Indra Jatra",
          description: "Eight-day festival honoring Indra, the king of heaven, featuring masked dances, processions, and the display of the living goddess Kumari.",
          significance: "Celebrates the end of monsoon and beginning of harvest season; also commemorates the descent of Indra to earth."
        },
        gunla: {
          name: "Gunla",
          description: "Buddhist holy month with daily processions, prayers, and pilgrimages to various stupas and monasteries.",
          significance: "Commemorates the rainy season retreat of the Buddha; observed with fasting, meditation, and devotional music."
        },
        samyak: {
          name: "Samyak",
          description: "Large alms-giving ceremony held every 12 years (or 5 years in some communities) featuring thousands of Buddha images.",
          significance: "Opportunity for merit-making through donations to Buddhist monks; reaffirms community bonds and religious devotion."
        },
        bisket: {
          name: "Bisket Jatra",
          description: "New Year festival celebrated with chariot processions, tug-of-war contests, and dramatic reenactments of mythological events.",
          significance: "Marks the Nepalese New Year; symbolizes the victory of good over evil and renewal of time."
        },
        mohani: {
          name: "Mohani",
          description: "The most important Newar festival, similar to Dashain, involving family gatherings, feasts, and ritual worship of goddess Durga.",
          significance: "Celebrates the victory of goddess Durga over the demon Mahishasura; emphasizes family unity and blessing of weapons/tools."
        },
        sithi: {
          name: "Sithi Nakha",
          description: "Festival dedicated to cleaning water sources, wells, and ponds; also involves worship of Nagas (serpent deities).",
          significance: "Marks the beginning of monsoon; emphasizes purity, environmental care, and protection from water-borne diseases."
        }
      },
      sites: {
        title: "Historical Sites",
        paragraph: "The Kathmandu Valley contains seven UNESCO World Heritage Sites, most of which represent the pinnacle of Newar architectural and artistic achievement. These sites continue to be living centers of worship and community life.",
        kathmandu: {
          title: "Kathmandu Durbar Square",
          description: "Historic royal palace complex with temples and courtyards"
        },
        patan: {
          title: "Patan Durbar Square",
          description: "Architectural showcase of Malla period artistry"
        },
        bhaktapur: {
          title: "Bhaktapur Durbar Square",
          description: "Well-preserved medieval city with iconic architecture"
        },
        swayambhunath: {
          title: "Swayambhunath",
          description: "Ancient Buddhist stupa complex overlooking the valley"
        },
        pashupatinath: {
          title: "Pashupatinath",
          description: "Sacred Hindu temple complex on the Bagmati River"
        },
        changu: {
          title: "Changu Narayan",
          description: "Ancient Vishnu temple with exquisite carvings"
        },
        boudhanath: {
          title: "Boudhanath",
          description: "Massive Buddhist stupa and pilgrimage site"
        }
      },
      cuisine: {
        title: "Cuisine",
        paragraph1: "Newar cuisine is known for its diversity and elaborate preparation, often involving fermented ingredients and complex spice mixtures. Meals are traditionally served on leaf plates or beaten metal vessels in a specific order.",
        paragraph2: "The Newar culinary repertoire includes unique dishes such as bara (lentil patties), yomari (rice flour dumplings), choila (spiced grilled meat), and various fermented preparations including aila (liquor) and various pickles.",
        paragraph3: "Food plays a central role in rituals and festivals, with specific dishes prepared for particular occasions. The Newar feast, known as bhoj, is an elaborate multi-course meal served during celebrations and religious ceremonies.",
        imageAlt: "Traditional Newar cuisine display",
        imageCaption: "Traditional Newar feast with various dishes (Source: Nepal Tourism Board)"
      },
      diaspora: {
        title: "Diaspora Communities",
        paragraph1: "Newar diaspora communities have established themselves in various parts of the world, maintaining cultural traditions while adapting to local contexts. These communities often organize cultural associations to preserve language, rituals, and identity.",
        paragraph2: "Despite geographical dispersal, diaspora Newars maintain connections through digital media, periodic gatherings, and participation in major festivals. Many return to Nepal for important life-cycle rituals and festivals.",
        india: {
          region: "India",
          description: "Significant Newar communities in Sikkim, Darjeeling, Kalimpong, and other parts of Northeast India, maintaining cultural traditions."
        },
        tibet: {
          region: "Tibet",
          description: "Historical trade connections led to Newar settlements in Lhasa and other Tibetan cities, particularly among merchant and artisan communities."
        },
        west: {
          region: "UK, USA, Australia",
          description: "Diaspora communities established through education and migration, maintaining cultural associations and festivals abroad."
        }
      },
      contemporary: {
        title: "Contemporary Life",
        demographics: {
          title: "Demographics",
          description: "According to the 2011 Nepal census, Newars number approximately 1.3 million, representing about 5% of Nepal's population. While historically concentrated in the Kathmandu Valley, significant Newar diaspora communities now exist throughout Nepal and in countries including India, the United Kingdom, the United States, and Australia."
        },
        preservation: {
          title: "Cultural Preservation",
          description: "Numerous organizations in Nepal and abroad work to preserve and promote Newar language and culture. These include the Nepal Bhasa Manka Khala, Newah Organization of America, and various local Guthi organizations that maintain traditional practices and festivals."
        },
        challenges: {
          title: "Modern Challenges",
          description: "Urbanization, migration, and globalization present challenges to the preservation of Newar culture. However, renewed interest among younger generations and digital archiving initiatives offer hope for cultural continuity."
        },
        imageAlt: "Contemporary Newar community event",
        imageCaption: "Newar cultural festival in Kathmandu (Source: Nepal Tourism Board)"
      },
      oral: {
        title: "Oral Histories",
        cardTitle: "Community Voices",
        cardDescription: "Recorded interviews with community members sharing personal experiences and historical memories",
        collectionText: "Oral history collection is currently in progress. Check back soon for interviews with community elders, artisans, and cultural practitioners sharing their experiences and knowledge.",
        shareButton: "Share Your Story"
      }
    },

   values: {
      hero: {
        title: "Preserving Newar Identity: Vision & Values",
        subtitle: "Celebrating a civilization that spans centuries",
        description: "Keeping our language, art, religion, and traditions alive for future generations",
        cta: "Explore Our Values"
      },
      vision: {
        title: "Our Vision",
        language: {
          title: "Language Preservation",
          subtitle: "Promoting Nepal Bhasa",
          description: "Establishing schools, online courses, and digital storytelling to ensure our language thrives in the digital age."
        },
        culture: {
          title: "Cultural Continuity",
          subtitle: "Celebrating our festivals",
          description: "Ensuring festivals like Indra Jatra, Gunla, Samyak, and Bisket Jatra remain vibrant community celebrations."
        },
        arts: {
          title: "Art & Craft Sustainability",
          subtitle: "Protecting traditional arts",
          description: "Teaching and preserving Paubha painting, wood carving, metalwork, and pagoda-style architecture."
        },
        community: {
          title: "Community Unity",
          subtitle: "Reinforcing Guthi systems",
          description: "Promoting social responsibility, inter-caste harmony, and community support systems."
        },
        diaspora: {
          title: "Global Diaspora Engagement",
          subtitle: "Connecting Newars worldwide",
          description: "Creating platforms for Newars abroad to stay connected with cultural activities and traditions."
        },
        timeline: {
          title: "AI Cultural Timeline",
          subtitle: "Explore our history",
          description: "Interactive timeline showing the evolution of Newar culture and values through the centuries",
          cta: "View Timeline"
        }
      },
      coreValues: {
        title: "Our Core Values",
        subtitle: "Guiding principles that define our community"
      },
      language: {
        title: "Language & Literature",
        description: "Preserving and promoting Nepal Bhasa",
        details: "We focus on Nepal Bhasa literacy, manuscripts, poetry, traditional songs, and storytelling. Our initiatives include modern apps, AI-assisted language translation, and storytelling tools to engage youth."
      },
      religion: {
        title: "Religion & Rituals",
        description: "Honoring Hindu-Buddhist syncretism",
        details: "We celebrate the unique blend of Hindu and Buddhist traditions, preserving caste-based rituals (Rajopadhyaya, Vajracharya) and creating AI-based interactive ritual simulations."
      },
      arts: {
        title: "Arts & Crafts",
        description: "Sustaining traditional artistry",
        details: "We support pagoda temple architecture, wood & metal carvings, Paubha paintings, and music instruments through apprenticeship programs and digital preservation."
      },
      festivals: {
        title: "Festivals & Heritage",
        description: "Celebrating our cultural calendar",
        details: "We organize and document festivals like Indra Jatra, Gunla, Samyak, and Bisket Jatra, highlighting their historical significance through animated calendars and educational resources."
      },
      unity: {
        title: "Unity & Social Harmony",
        description: "Fostering community bonds",
        details: "We promote inter-caste cooperation, mutual respect, and communal responsibilities through community projects and AI-suggested cultural initiatives."
      },
      media: {
        title: "Cultural Showcase",
        subtitle: "Explore our rich heritage through media",
        cta: "View All Media",
        item1: {
          title: "Indra Jatra Festival",
          description: "Annual festival celebrating Indra, the king of heaven"
        },
        item2: {
          title: "Paubha Art Tradition",
          description: "Sacred religious paintings of Newar Buddhism"
        },
        item3: {
          title: "Newar Architecture",
          description: "The unique pagoda style of temple architecture"
        },
        item4: {
          title: "Traditional Music",
          description: "Newar musical instruments and performances"
        },
        item5: {
          title: "Culinary Heritage",
          description: "Traditional Newar cuisine and cooking methods"
        },
        item6: {
          title: "Religious Ceremonies",
          description: "Hindu-Buddhist rituals and practices"
        }
      },
      community: {
        title: "Global Newar Community",
        subtitle: "Connecting Newars across the world",
        members: "Active Members",
        activities: "Key Activities",
        cta: "Join Your Local Community"
      },
      cta: {
        title: "Join Us in Preserving Newar Heritage",
        subtitle: "Your participation helps keep our culture alive for future generations",
        join: "Become a Member",
        donate: "Make a Donation"
      }
    },

 "news": {
    "title": "News & Updates",
    "subtitle": "Stay connected with the latest community news, events, and announcements",
    "todaysHighlight": "Today's Highlight",
    "latestUpdates": "Latest Updates",
    "readMore": "Read More",
    "readFullStory": "Read Full Story",
    "aiSummary": "AI Summary",
    "aiSummaryAvailable": "AI Summary Available",
    "comments": "comments",
    "noNewsFound": "No news found matching your criteria",
    "tryChangingFilters": "Try changing your filters or search terms",
    
    "categories": {
      "community": "Community",
      "event": "Events",
      "culture": "Culture",
      "member": "Member Spotlight",
      "opportunity": "Opportunities",
      "national": "National",
      "international": "International"
    },
    
    "filters": "Filters",
    "searchPlaceholder": "Search news, tags, authors...",
    "categoriesFilter": "Categories",
    "allCategories": "All Categories",
    "sortBy": "Sort by",
    "newest": "Newest First",
    "oldest": "Oldest First",
    "mostPopular": "Most Popular",
    "dateRange": "Date Range",
    "popularTags": "Popular Tags",
    "resetFilters": "Reset All Filters",
    
    "stayUpdated": "Stay Updated",
    "subscriptionDescription": "Get daily community updates delivered to your inbox",
    "subscriptionSuccess": "Successfully Subscribed!",
    "welcomeMessage": "Welcome to our community newsletter!",
    "emailPlaceholder": "your.email@example.com",
    "subscribeNow": "Subscribe Now",
    "privacyNotice": "We respect your privacy. Unsubscribe at any time.",
    
    "newsArchive": "News Archive",
    "viewFullArchive": "View Full Archive",
    
    "communityStats": "Community Stats",
    "totalArticles": "Total Articles",
    "thisMonth": "This Month",
    "activeUsers": "Active Readers"
  },


  leadershipPage: {
      title: "Leadership & Community of Newar Samaj",
      subtitle: "Celebrating our leaders, our traditions, and our united Newar family of 1000 strong.",
      intro: "Our community of approximately 1000 families is dedicated to preserving Newa culture, language, religion, and social unity through responsible leadership, mentorship, and communal decision-making."
    },
    leadershipSection: {
      title: "Our Leadership Structure"
    },
   leaders: {
  rajesh: {
    name: "Mahesh Dangol",
    role: "अध्यक्ष (President)",
    bio: "Leading the Newar Samaj with vision and dedication, Mahesh is committed to preserving cultural heritage and fostering unity.",
    contributions: [
      "Provided leadership in cultural preservation",
      "Guided community development initiatives",
      "Strengthened organizational vision"
    ]
  },
  sunita: {
    name: "Gyan Kumar Dangol",
    role: "उपाध्यक्ष (Vice President)",
    bio: "Gyan manages operations and community relations with extensive experience, ensuring smooth functioning of the Samaj.",
    contributions: [
      "Coordinated community operations",
      "Strengthened member relations",
      "Supported organizational growth"
    ]
  },
  bikash: {
    name: "Ramhari Dangol",
    role: "Meeting Coordinator",
    bio: "Ramhari is dedicated to organizing community events and ensuring effective coordination of Samaj meetings.",
    contributions: [
      "Organized and scheduled meetings",
      "Streamlined event coordination",
      "Enhanced participation in programs"
    ]
  },
  anita: {
    name: "Prakash Dangol",
    role: "Social Media & Marketing",
    bio: "Prakash expands our digital presence, using innovative marketing strategies to connect the community with wider audiences.",
    contributions: [
      "Expanded digital outreach",
      "Managed social media presence",
      "Created new community opportunities"
    ]
  }
}
,
    communitySection: {
      title: "Our Newar Samaj Community",
      aboutTitle: "About Our Community",
      aboutText: "With approximately 1000 families, our Newar Samaj is dedicated to preserving our rich cultural heritage, language, and traditions while fostering a strong sense of community and mutual support.",
      valuesText: "We value responsibility, mentorship, and communal decision-making, ensuring that our traditions are passed down to future generations while adapting to modern times.",
      programsTitle: "Key Programs & Initiatives",
      program1: "Cultural workshops and language classes",
      program2: "Festival celebrations and religious ceremonies",
      program3: "Youth mentorship and educational programs",
      program4: "Community support and welfare initiatives",
      joinButton: "Join Community Discussion",
      photosTitle: "Community Moments",
      testimonialTitle: "What Our Members Say",
      testimonial: "Being part of Newar Samaj has helped me connect with my roots and build meaningful relationships with people who share the same cultural values. The leadership truly cares about preserving our heritage.",
      memberName: "Sita Malla, Community Member"
    },
    culturalSection: {
      title: "Cultural Leadership & Education",
      languageTitle: "Newar Language Preservation",
      languageText: "Our elders mentor youth in learning Nepal Bhasa through structured classes, conversation practice, and cultural immersion. We've developed learning materials and digital resources to make language acquisition accessible to all generations.",
      learnButton: "Learn Newar Language",
      eventsTitle: "Cultural Events Leadership",
      eventsText: "Our cultural leaders teach rituals, festival traditions, music, and dance to ensure continuity of our rich heritage. We organize workshops before major festivals like Dashain, Tihar, and New Year celebrations to pass on knowledge to younger generations.",
      volunteerButton: "Volunteer for Events",
      artsTitle: "Traditional Arts Preservation",
      artsText: "We support masters of traditional Newar arts—such as pottery, painting, metalwork, and wood carving—to train apprentices and ensure these skills are not lost. Our community provides resources and platforms for artisans to showcase and sustain their crafts.",
      supportButton: "Support Traditional Arts",
      continuityTitle: "Ensuring Cultural Continuity",
      mentorship: "Elder-Youth Mentorship",
      mentorshipText: "Structured programs pairing elders with youth for cultural knowledge transfer",
      documentation: "Cultural Documentation",
      documentationText: "Recording rituals, stories, and traditions for future generations",
      events: "Community Events",
      eventsText2: "Regular gatherings that reinforce cultural practices and community bonds"
    },
    tabs: {
      leadership: "Leadership",
      community: "Community & Messaging"
    },
    messagingSection: {
      title: "Community Groups & Messaging",
      groupsTitle: "Community Groups",
      members: "members",
      createGroup: "Create New Group",
      aiName: "Community AI Assistant",
      welcomeMessage: "Hello! I'm here to help answer your questions about our community, leadership, and events. Feel free to ask me anything!",
      justNow: "Just now",
      sampleQuestion: "What festivals do Newars celebrate?",
      sampleResponse: "We celebrate all major Newar festivals including Dashain, Tihar, Holi, and our unique Newar festivals like Indra Jatra and Bisket Jatra. We also observe various rituals and ceremonies throughout the year.",
      placeholder: "Type your message...",
      send: "Send",
      aiHint: "Our AI assistant can answer questions about leadership, events, and community activities"
    },
    messaging: {
      you: "You",
      aiName: "Community AI Assistant"
    },
    aiResponses: {
      adaxai: "Our current Adaxai is Rajesh Shrestha, who has been serving since 2020. He oversees all community decisions and ceremonies.",
      sachib: "Sunita Maharjan is our Sachib (Secretary). She organizes events and manages all community communications.",
      sadasai: "We have several Sadasai (Committee Members) including Bikash Dangol who focus on community outreach, education, and welfare projects.",
      festival: "We celebrate all major Newar festivals including Dashain, Tihar, Holi, and our unique Newar festivals like Indra Jatra and Bisket Jatra.",
      join: "To join our community, please visit the Membership section on our website or contact our Sachib at secretary@newarsamaj.org",
      language: "We offer Newar language classes every Saturday at the community center. You can also join our online language exchange program.",
      default: "Thank you for your message. Our community team will respond shortly. In the meantime, is there anything specific you'd like to know about our leadership or community activities?"
    },
    communityGroups: {
      general: {
        name: "General Discussion",
        description: "General community discussions and announcements"
      },
      cultural: {
        name: "Cultural Events",
        description: "Planning and discussion of cultural events and festivals"
      },
      language: {
        name: "Language Learning",
        description: "Newar language learning and practice group"
      },
      youth: {
        name: "Youth Wing",
        description: "Activities and discussions for younger community members"
      }
    },
 

 culture: {

    "architecture": "Architecture",
    "architectureDesc": "Ancient pagoda-style temples, courtyards, and intricate wood carvings",
    "art": "Art & Crafts",
    "artDesc": "Traditional painting, sculpture, metalwork, and handicrafts",
    "festivals": "Festivals",
    "festivalsDesc": "Colorful festivals throughout the year with unique rituals",
    "cuisine": "Cuisine",
    "cuisineDesc": "Unique culinary traditions with diverse flavors and dishes",





   "title": "Newar Culture & Heritage",
    "description": "Immerse yourself in the rich cultural tapestry of the Newar community. Explore ancient temples, vibrant festivals, traditional arts, and timeless practices that have shaped our identity for centuries.",
    "stats": {
      "temples": "Sacred Temples",
      "festivals": "Annual Festivals",
      "artForms": "Art Forms",
      "heritageYears": "Years of Heritage"
    },
    "tabs": {
      "temples": "Temples & Heritage",
      "festivals": "Festivals",
      "practices": "Cultural Practices"
    },
    "cta": {
      "title": "Preserve Our Heritage Together",
      "description": "Join our community in preserving and sharing the beautiful traditions of Newar culture. Whether you're learning about your heritage or discovering it for the first time, every contribution helps keep our culture alive.",
      "joinCommunity": "Join Our Community",
      "learnMore": "Learn More"
    },

    "temples": {
      "title": "Sacred Temples of Nepal",
      "subtitle": "Discover the spiritual heritage and architectural marvels",
      "description": "Nepal's temples are not just places of worship but living museums of art, culture, and history that have stood the test of time.",
      "architecture": "Architecture",
      "established": "Established",
      "heritageTitle": "Preserve Our Heritage Together",
      "heritageDescription": "Join our community in preserving and sharing the beautiful traditions of Newar culture and Nepalese heritage.",
      "exploreMore": "Explore More Temples"
    
  
  },
    },


  "temples": {


    "search": {
      "placeholder": "Search temples by name, location, or significance..."
    },
    "filters": {
      "all": "All Temples",
      "allDistricts": "All Districts",
      "unesco": "UNESCO Heritage",
      "popular": "Most Popular"
    },
    "tabs": {
      "overview": "Overview",
      "architecture": "Architecture",
      "history": "History",
      "visit": "Visit Info",
      "gallery": "Gallery",
      "timeline": "Timeline",
      "map": "Map"
      
    },
    "details": {
      "history": "Historical Significance",
      "architecture": "Architectural Style",
      "archDetails": "Architectural Details",
      "features": "Architectural Features",
      "materials": "Construction Materials",
      "specialFeatures": "Special Features",
      "festivals": "Major Festivals",
      "timings": "Opening Hours",
      "entryFee": "Entry Fee",
      "contact": "Contact",
      "bestTime": "Best Time to Visit",
      "accessibility": "Accessibility",
      "rating": "Rating",
      "visitors": "Annual Visitors",
      "period": "Historical Period",
      "significance": "Religious Significance",
      "description": "Description",
      "tiers": "Tiers",
      "height": "Height",
      "foundation": "Foundation",
      "dimensions": "Dimensions",
    
    },
    "actions": {
      "virtualTour": "Virtual Tour",
      "getDirections": "Get Directions",
      "directions": "Directions",
      "share": "Share",
      "favorite": "Add to Favorites",
    },
    "community": {
      "title": "Join Our Temple Preservation Community",
      "description": "Help preserve these architectural marvels for future generations. Join our community of heritage enthusiasts and contribute to temple conservation efforts.",
      "join": "Join Community"
  
  },
   
    "architecture": {
      "title": "Newar Temple Architecture",
      "description": "Explore the unique architectural styles that define Nepalese temple construction",
      "features": "Key Features"
    },

  },
  "common": {

    "annual": "Annual",
    "quarterly": "Quarterly",
    "weekly": "Weekly",
    "location": {
      "bhattathok": "Bhattathok, Likhu Municipality",
      "nuwakot": "Nuwakot District",
      "kathmandu": "Kathmandu Valley",
      "samajBuilding": "Samaj Building, Bhattathok",
    },
    "explore": "Explore",
    "learnMore": "Learn More",
    "viewAll": "View All",
    "joinNow": "Join Now",
    "signUp": "Sign Up",
    "contact": "Contact",
    "readMore": "Read More",
    "viewDetails": "View Details",


    "language": "Language",
    "theme": "Theme",
    "back": "Back to Culture",
    
      "saturday": "Saturday",
      "monthly": "Monthly",

          "complete": "Complete",
    "continue": "Continue",
    "start": "Start",
    "review": "Review",
    "locked": "Locked",
    "unlockRequirements": "Complete previous lessons to unlock",
    "words": "words",
    "minutes": "min",
    "join": "Join",
    "chat": "Chat",
    "translate": "Translate",
    "online": "online",
    "available": "Available",
    "unlocked": "Unlocked",
    "lock": "Locked"
  
    },
  

   arts: {
      "title": "Traditional Arts & Crafts",
      "heroTitle": "Newar Artistic Heritage",
      "heroDescription": "Discover the exquisite traditional arts and crafts that have been preserved for generations",
      "materials": "Materials",
      "origin": "Origin",
      "artists": "Artisans",
      "totalArts": "Art Forms",
      "categories": "Categories",
      "yearsHistory": "Years of History",
      "artistFamilies": "Artist Families"
    },
    heritage: {
      "title": "Cultural Heritage",
      "heroTitle": "Newar Cultural Legacy",
      "heroDescription": "Explore the rich cultural heritage of the Newar community, a living testament to ancient traditions",
      "newarTitle": "Newar Heritage Overview",
      "history": "Historical Background",
      "culture": "Cultural Significance",
      "highlights": "Key Highlights",
      "significanceTitle": "Cultural Significance",
      "traditions": "Traditional Practices",
      "architecture": "Architectural Heritage"
    },

 "languageSchool": {
    "title": "Newari Language School",
    "subtitle": "Preserving and Teaching Our Heritage Language",
    "description": "Join our dedicated language school to learn Newari through structured courses, cultural immersion, and interactive learning methods.",
    "hero": {
      "title": "Learn Newari the Right Way",
      "subtitle": "Structured curriculum, expert teachers, and cultural context"
    },
    "features": {
      "title": "Why Learn with Our School?",
      "structured": {
        "title": "Structured Curriculum",
        "description": "Progressive learning from basic to advanced levels with certified syllabus"
      },
      "cultural": {
        "title": "Cultural Context",
        "description": "Learn language through cultural stories, traditions, and real-life scenarios"
      },
      "expert": {
        "title": "Expert Teachers",
        "description": "Learn from native Newari speakers with teaching experience"
      },
      "interactive": {
        "title": "Interactive Learning",
        "description": "Group activities, conversations, and practical exercises"
      }
    },
    "courses": {
      "title": "Our Course Offerings",
      "beginner": {
        "title": "Beginner Level",
        "duration": "3 Months",
        "topics": ["Basic greetings", "Numbers 1-100", "Daily vocabulary", "Simple sentences"]
      },
      "intermediate": {
        "title": "Intermediate Level",
        "duration": "4 Months", 
        "topics": ["Grammar rules", "Conversational skills", "Reading practice", "Cultural context"]
      },
      "advanced": {
        "title": "Advanced Level",
        "duration": "5 Months",
        "topics": ["Complex grammar", "Writing skills", "Literature", "Professional use"]
      },
      "children": {
        "title": "Children's Class",
        "duration": "Ongoing",
        "topics": ["Fun activities", "Songs and stories", "Basic vocabulary", "Cultural games"]
      }
    },
    "onlineLearning": {
      "title": "Online Learning Platform",
      "description": "Until our physical school is established, join our comprehensive online learning program with live classes and recorded sessions.",
      "features": [
        "Live interactive classes with teachers",
        "Recorded sessions for flexible learning",
        "Practice exercises and quizzes",
        "Cultural immersion activities",
        "Progress tracking and certificates"
      ],
      "cta": "Start Learning Online Now"
    },
    "enrollment": {
      "title": "Enrollment Process",
      "steps": [
        "Fill the registration form",
        "Take a placement test",
        "Choose your class schedule",
        "Make payment and get access"
      ]
    },
    "teachers": {
      "title": "Meet Our Teachers",
      "description": "Learn from experienced Newari language educators"
    }
  },
  
  "caste": {
    "title": "Newar Caste System & Population",
    "subtitle": "Comprehensive overview of Newar castes, their traditional roles, population distribution, and cultural significance",
    "casteList": "Caste List",
    "selectPrompt": "Select a Caste",
    "selectDescription": "Choose a caste from the list to view detailed information about their traditional roles, population, and cultural significance",
    "populationShare": "Population Share",
    "approximatePopulation": "Approx. Population",
    "heritageTitle": "Cultural Heritage",
    "heritageDescription": "Explore the rich cultural heritage of the Newar community",
    "heritageItems": {
      "architecture": "Architecture",
      "art": "Art & Crafts",
      "festivals": "Festivals",
      "cuisine": "Cuisine",
      "language": "Language"
    },
    "roles": {
      "merchantsAdministrators": "Merchants & Administrators",
      "farmers": "Farmers & Agriculturists",
      "traders": "Traders & Businesspeople",
      "priests": "Hindu Priests",
      "painters": "Painters & Artists",
      "oilPressers": "Oil Pressers",
      "blacksmiths": "Blacksmiths & Metalworkers",
      "buddhistPriests": "Buddhist Priests",
      "metalworkers": "Metal Craftsmen"
    },
    "descriptions": {
      "shrestha": "Traditional merchants, administrators, and rulers. One of the most prominent Newar castes involved in business, government, and cultural leadership.",
      "maharjan": "Traditional farmers and agriculturists, also known as Jyapu. Known for their agricultural expertise and contribution to Newar cuisine.",
      "dangol": "Farmer community specializing in agriculture and traditional occupations. Important contributors to Newar agricultural practices.",
      "tuladhar": "Traditional traders and merchants known for their business acumen. Involved in trade across Nepal and beyond.",
      "karmacharya": "Hindu priests performing rituals and ceremonies. Guardians of Hindu religious traditions in Newar society.",
      "chitrakar": "Traditional painters and artists creating religious and cultural artwork. Masters of Paubha and other art forms.",
      "manandhar": "Traditional oil pressers and processors. Known for their expertise in oil extraction and related products.",
      "nakarmi": "Blacksmiths and metalworkers creating tools, weapons, and ritual objects. Skilled craftsmen in metalwork.",
      "bajracharya": "Buddhist priests and spiritual leaders. Guardians of Vajrayana Buddhist traditions.",
      "shakya": "Metal craftsmen and goldsmiths. Traditionally involved in creating religious statues and jewelry."
    }
  },
  "statistics": {
    "totalPopulation": "Total Newar Population",
    "populationPercentage": "Approximately 4.6% of Nepal's population",
    "motherTongue": "Newar Language Speakers",
    "languagePercentage": "64.4% of Newars speak Newar language",
    "totalCastes": "Total Castes",
    "uniqueOccupations": "Unique traditional occupations"
  },
  "search": {
    "placeholder": "Search castes by name, role, or category...",
    "selectCaste": "Select a Caste"
  },
  "districts": {
    "title": "Newar Population by District",
    "dominantCastes": "Dominant Castes",
    "kathmandu": "Kathmandu",
    "lalitpur": "Lalitpur",
    "bhaktapur": "Bhaktapur",
    "kavre": "Kavrepalanchok",
    "makwanpur": "Makwanpur"
  },
 

  
  "dashboard": {
    "title": "Language Learning Dashboard",
    "subtitle": "Master Newar language through interactive lessons and cultural immersion",
    "wordsLearned": "Words Learned",
    "wordsRemaining": "words remaining",
    "currentStreak": "Current Streak",
    "daysInARow": "days in a row",
    "level": "Level",
    "xpEarned": "XP earned",
    "lessons": "Lessons",
    "continueLearning": "Continue Learning",
    "achievements": {
      "title": "Achievements",
      "unlocked": "Unlocked"
    },
    "flashcards": {
      "title": "Interactive Flashcards",
      "description": "Practice vocabulary with smart flashcards that adapt to your learning pace"
    },
    "chatroom": {
      "languageExchange": "Language Exchange",
      "online": "online",
      "aiTutor": "AI Language Tutor",
      "available": "Available 24/7 to help with pronunciation, grammar, and cultural context"
    }
  },
  "categories": {
    "greetings": "Greetings",
    "numbers": "Numbers",
    "family": "Family",
    "food": "Food",
    "travel": "Travel",
    "shopping": "Shopping",
    "colors": "Colors",
    "time": "Time",
    "animals": "Animals",
    "body": "Body",
    "clothing": "Clothing",
    "professions": "Professions",
    "nature": "Nature",
    "places": "Places",
    "emotions": "Emotions",
    "education": "Education",
    "hobbies": "Hobbies",
    "culture": "Culture",
    "home": "Home",
    "technology": "Technology",
    "arts": "Arts",
    "safety": "Safety",
    "verbs": "Verbs",
    "adjectives": "Adjectives",
    "stories": "Stories"
  },
  "lessons": {
    "basicGreetings": {
      "title": "Basic Greetings",
      "description": "Learn common Newar greetings and responses for daily conversations"
    },
    "familyMembers": {
      "title": "Family Members",
      "description": "Names for family relationships in Newar culture and addressing elders"
    },
    "numbers": {
      "title": "Numbers 1-100",
      "description": "Counting, ordinal numbers, and practical usage in markets"
    },
    "newarCuisine": {
      "title": "Newar Cuisine",
      "description": "Food vocabulary, ordering at restaurants, and cooking terms"
    }
  },
  "achievements": {
    "firstSteps": {
      "title": "First Steps",
      "description": "Completed your first lesson"
    },
    "wordMaster": {
      "title": "Word Master",
      "description": "Learned 100 words"
    },
    "consistentLearner": {
      "title": "Consistent Learner",
      "description": "7-day learning streak"
    },
    "quizChampion": {
      "title": "Quiz Champion",
      "description": "Perfect score on 5 quizzes"
    },
    "cultureExpert": {
      "title": "Culture Expert",
      "description": "Completed all cultural lessons"
    },
    "speedLearner": {
      "title": "Speed Learner",
      "description": "Completed 5 lessons in one day"
    },
    "grammarRookie": {
      "title": "Grammar Rookie",
      "description": "Learned all the basic grammar rules"
    },
    "familyFriend": {
      "title": "Family Friend",
      "description": "Know all family-related words"
    },
    "foodie": {
      "title": "Foodie",
      "description": "Learned all food and drink words"
    },
    "traveler": {
      "title": "Traveler",
      "description": "Know 50 words for traveling"
    },
    "shopper": {
      "title": "Shopper",
      "description": "Finished all shopping and money lessons"
    },
    "colorfulLearner": {
      "title": "Colorful Learner",
      "description": "Learned all colors and shapes"
    },
    "timeKeeper": {
      "title": "Time Keeper",
      "description": "Know all days, months, and times"
    },
    "animalLover": {
      "title": "Animal Lover",
      "description": "Learned all animal and pet words"
    },
    "healthyHero": {
      "title": "Healthy Hero",
      "description": "Know all body parts and health words"
    },
    "fashionFan": {
      "title": "Fashion Fan",
      "description": "Learned all clothes and accessories"
    },
    "jobFinder": {
      "title": "Job Finder",
      "description": "Know all professions and jobs"
    },
    "natureExplorer": {
      "title": "Nature Explorer",
      "description": "Learned nature and weather words"
    },
    "directionFinder": {
      "title": "Direction Finder",
      "description": "Know all places and directions"
    },
    "moodTracker": {
      "title": "Mood Tracker",
      "description": "Learned all feelings and emotions"
    },
    "schoolStar": {
      "title": "School Star",
      "description": "Know all school-related words"
    },
    "hobbyHelper": {
      "title": "Hobby Helper",
      "description": "Learned all hobbies, sports, and activities"
    },
    "festivalFun": {
      "title": "Festival Fun",
      "description": "Finished all festival and culture lessons"
    },
    "homeHelper": {
      "title": "Home Helper",
      "description": "Know all household items"
    },
    "techSavvy": {
      "title": "Tech Savvy",
      "description": "Learned tech and communication words"
    },
    "littleArtist": {
      "title": "Little Artist",
      "description": "Know music, art, and craft words"
    },
    "safetyFirst": {
      "title": "Safety First",
      "description": "Learned safety and emergency words"
    },
    "actionHero": {
      "title": "Action Hero",
      "description": "Know all verbs and daily actions"
    },
    "describer": {
      "title": "Describer",
      "description": "Learned all adjectives and descriptions"
    },
    "storyteller": {
      "title": "Storyteller",
      "description": "Finished storytelling, idioms, and dialogues"
    }
  },
  "difficulty": {
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced"
  },
  
  "learningStats": {
    "totalWords": 500,
    "totalLessons": 20,
    "levels": ["Beginner", "Intermediate", "Advanced", "Expert", "Master"],
    "xpPerLesson": 100,
    "xpPerWord": 10
  },
  "leaderboard": {
    "title": "Community Leaderboard",
    "you": "You",
    "rank": "Rank",
    "name": "Name",
    "level": "Level",
    "xp": "XP"
  },
 


  "title": "Religion & Beliefs of the Newar People",
  "subtitle": "Discover the unique syncretic blend of Hinduism and Buddhism that defines Newar spiritual life",
  

  "overview": {
    "badge": "Religious Syncretism",
    "title": "Newar Religious Harmony: A Unique Cultural Synthesis",
    "description1": "The Newar people of Nepal's Kathmandu Valley have developed one of the world's most remarkable religious cultures, where Hinduism and Buddhism not only coexist but actively complement and enrich each other. This religious harmony, perfected over two millennia, represents a living example of religious syncretism that has become the hallmark of Newar civilization.",
    "description2": "Unlike mere tolerance, Newar religious practice involves deep integration where Hindu deities are worshipped in Buddhist temples and Buddhist principles inform Hindu rituals. The same family might include both Hindu and Buddhist practitioners, often participating in each other's ceremonies. This unique approach has created a spiritual ecosystem where the boundaries between the two religions are beautifully blurred.",
    "description3": "The foundation of this harmony lies in the shared cultural matrix of the Kathmandu Valley, where both religions have evolved together since the Licchavi period (c. 400-750 CE). The Newar approach demonstrates that religious diversity can be a source of cultural strength rather than conflict."
  },

  "stats": {
    "religions": "Major Religions",
    "temples": "Sacred Temples",
    "festivals": "Annual Festivals",
    "rituals": "Life Cycle Rituals"
  },

  "hinduism": {
    "badge": "Newar Hinduism",
    "title": "Newar Hinduism: Tantric Traditions and Local Deities",
    "description1": "Newar Hinduism represents a distinctive branch of Hindu practice that has evolved uniquely in the Kathmandu Valley. While sharing core beliefs with mainstream Hinduism, it incorporates strong tantric influences, mother goddess worship, and the veneration of local deities alongside major Hindu gods.",
    "description2": "The Newar Hindu pantheon includes both Sanskritic deities like Shiva, Vishnu, and Devi, as well as uniquely Newar deities such as Machhendranath, Taleju, and Kumari. What distinguishes Newar Hinduism is its emphasis on practical spirituality, where rituals are designed to maintain cosmic order and ensure community well-being.",
    "description3": "The caste system among Newar Hindus follows a complex structure with specific ritual roles. However, unlike orthodox Hinduism, Newar practice allows for greater flexibility and incorporates many Buddhist elements, reflecting centuries of cultural exchange.",

    "practices": {
      "title": "Key Practices",
      "list": [
        "Daily worship (nitya puja) at household shrines",
        "Tantric rituals with mantras and yantras",
        "Temple festivals with chariot processions",
        "Life cycle rituals (samskaras)",
        "Pilgrimage to local and regional shrines",
        "Animal sacrifice in specific ceremonies"
      ]
    },

    "features": {
      "title": "Distinctive Features",
      "list": [
        "Tantric influences",
        "Mother goddess focus",
        "Local deity integration",
        "Syncretic with Buddhism",
        "Complex ritual calendar"
      ]
    },

    "unique": {
      "title": "Unique Characteristics",
      "description": "Newar Hinduism maintains ancient Vedic traditions lost elsewhere while innovating new forms of worship. The living goddess Kumari, the tantric practices, and the elaborate masked dances represent aspects of Hinduism preserved only in the Newar tradition."
    },

    "bhimsen": {
      "title": "Bhimsen Worship: God of Trade and Commerce",
      "significance": "Historical Significance",
      "significanceDesc": "Bhimsen, one of the Pandava brothers from the Mahabharata, holds special significance for Newars as the patron deity of traders and merchants. The Dolakha Bhimsen Temple, dating back to the Licchavi period, serves as one of the most important pilgrimage sites for Newar business communities.",
      "worship": "Worship Practices",
      "worshipDesc": "Daily worship involves unique offerings including alcohol, eggs, and animal sacrifices, reflecting the tantric influences in Newar Hinduism. The temple sees particularly large gatherings during major festivals when merchants seek blessings for commercial success.",
      "dolakhaTitle": "Dolakha Bhimsen Temple",
      "dolakhaDesc": "Located in Dolakha district, this temple features a unique self-manifested stone idol of Bhimsen that is believed to sweat during significant events, serving as an omen for the community."
    }
  },

  "buddhism": {
    "badge": "Newar Buddhism",
    "title": "Newar Buddhism: Preserver of Ancient Traditions",
    "description1": "Newar Buddhism, also known as Vajrayana Buddhism, represents a unique tradition that has preserved many ancient Buddhist practices that disappeared elsewhere in Asia. It combines elements of Mahayana and Vajrayana Buddhism with Hindu tantric practices, creating a distinctive form of Buddhism found only in the Kathmandu Valley.",
    "description2": "The Newar Buddhist community maintains a caste system similar to Hindus, with specific roles for priests (Bajracharyas and Shakyas) who preserve ancient scriptures and rituals. Unlike Theravada Buddhism practiced elsewhere, Newar Buddhism emphasizes ritual, symbolism, and the worship of a complex pantheon of deities.",
    "description3": "This tradition has preserved Sanskrit Buddhist texts that were lost in other Buddhist countries and maintains continuous lineages of practice dating back to ancient India. The baha and bahi monasteries serve as living museums of Buddhist art, architecture, and ritual practice.",

    "schools": {
      "title": "Buddhist Traditions",
      "list": [
        "Vajrayana (Diamond Vehicle)",
        "Mahayana (Great Vehicle)",
        "Theravada (recent influence)"
      ]
    },

    "texts": {
      "title": "Sacred Texts",
      "list": [
        "Prajnaparamita Sutras",
        "Buddhist Tantras",
        "Local liturgical texts",
        "Sanskrit manuscripts"
      ]
    },

    "practices": {
      "title": "Core Practices",
      "list": [
        "Sandhya arati (evening worship)",
        "Gunla fasting month observances",
        "Pancha Buddha worship",
        "Monastery-based rituals",
        "Life cycle ceremonies"
      ]
    },

    "monasteries": {
      "title": "Monastic Institutions",
      "description": "The baha (courtyard monasteries) and bahi (open monasteries) serve as centers of Buddhist learning and practice, preserving ancient traditions.",
      "list": [
        "Hiranya Varna Mahavihar",
        "Itum Bahal",
        "Kwabahal",
        "Bikramshi Mahavihar"
      ]
    },

    "unique": {
      "title": "Unique Preservation",
      "description": "Newar Buddhism has preserved rituals, art forms, and textual traditions that disappeared from India and other Buddhist countries, making it invaluable for understanding Buddhist history."
    }
  },

  "deities": {
    "title": "Pantheon of Newar Deities",
    "subtitle": "Exploring the divine beings worshipped in Newar Hinduism and Buddhism",
    "significance": "Significance",
    
    "machhendranath": "Machhendranath (Karunamaya)",
    "machhendranathDesc": "The bodhisattva of compassion worshipped by both Hindus and Buddhists, known for bringing rain and prosperity to the valley.",
    "machhendranathSig": "Central to the longest chariot festival in Nepal, worshipped as Avalokiteshvara by Buddhists and Shiva by Hindus.",

    "taleju": "Taleju Bhawani",
    "talejuDesc": "The royal goddess of the Malla kings, originally a tutelary deity who became the protector of the Kathmandu Valley.",
    "talejuSig": "Represents royal power and protection, with temples accessible only to certain priests and during specific festivals.",

    "kumari": "Kumari (Living Goddess)",
    "kumariDesc": "A pre-pubescent girl worshipped as the living incarnation of the goddess Taleju, representing divine female power.",
    "kumariSig": "Unique to Newar culture, the Kumari symbolizes the fusion of Hindu and Buddhist traditions and royal legitimacy.",

    "bhimsen": "Bhimsen",
    "bhimsenDesc": "Pandava brother worshipped as the god of trade, commerce, and business success by Newar merchants.",
    "bhimsenSig": "Particularly important for the Newar business community, with temples in major trading centers.",

    "ganesh": "Ganesh",
    "ganeshDesc": "Elephant-headed god of wisdom and remover of obstacles, worshipped in both Hindu and Buddhist contexts.",
    "ganeshSig": "Four directional Ganesh temples protect Kathmandu city, showing integration into urban planning.",

    "bhairab": "Bhairab",
    "bhairabDesc": "Fierce manifestation of Shiva representing destruction and transformation, worshipped in tantric rituals.",
    "bhairabSig": "Important for protection and tantric practices, with both Hindu and Buddhist forms worshipped."
  },

  "rituals": {
    "badge": "Life Cycle Rituals",
    "title": "Samskaras: The Rituals of Life",
    "subtitle": "Elaborate ceremonies marking every important stage of human life",
    "introduction": "Newars have one of the world's most complex systems of life cycle rituals (samskaras), with ceremonies for every significant transition from birth to death. These rituals blend Hindu and Buddhist elements and serve to integrate individuals into their community while ensuring spiritual protection.",
    "importance": "Each ritual reinforces social bonds, transmits cultural knowledge, and maintains cosmic order. They represent the practical application of religious principles in daily life.",

    "download": {
      "title": "Comprehensive Ritual Guide",
      "description": "Download our detailed guide to Newari rituals and procedures for in-depth understanding",
      "button": "Download Ritual PDF"
    },

    "types": {
      "title": "Types of Rituals",
      "list": [
        "Birth and childhood ceremonies",
        "Initiation rituals (Bratabandha)",
        "Marriage ceremonies",
        "Old age celebrations",
        "Death and ancestor rituals"
      ]
    },

    "symbolism": {
      "title": "Symbolic Meaning",
      "description": "Each ritual contains deep symbolic meanings representing spiritual truths and cosmic principles, connecting individuals to the larger universe."
    },

    "priests": {
      "title": "Ritual Specialists",
      "description": "Different types of priests perform specific rituals based on caste and tradition.",
      "types": ["Bajracharya", "Shakya", "Rajopadhyaya", "Deo Brahman", "Jha Brahman"]
    },

    "machabuByanke": "Machabu Byanke (Naming Ceremony)",
    "machabuByankeDesc": "First major ceremony after birth where the baby receives its formal name.",
    "machabuByankeTime": "6th or 12th day after birth",
    "machabuByankeSig": "Introduces the child to society and confers identity",
    "machabuByankePart": "Family, priest, close relatives",

    "ihi": "Ihi (Pre-puberty Marriage)",
    "ihiDesc": "Symbolic marriage of young girls to the Suvarna Kumar (golden boy), representing Lord Vishnu.",
    "ihiTime": "Before menstruation, typically ages 5-9",
    "ihiSig": "Ensures spiritual protection and social status",
    "ihiPart": "Young girls, priests, community",

    "baraTayegu": "Bara Tayegu (Girl's Seclusion)",
    "baraTayeguDesc": "First menstruation ceremony where girls are secluded for 12 days.",
    "baraTayeguTime": "At first menstruation",
    "baraTayeguSig": "Marks transition to womanhood",
    "baraTayeguPart": "Young woman, female relatives",

    "gufaRakhne": "Gufa Rakhne (Sun Marriage)",
    "gufaRakhneDesc": "Ihi ceremony for Shakya and Bajracharya girls, involving seclusion in a dark room.",
    "gufaRakhneTime": "Before menstruation",
    "gufaRakhneSig": "Buddhist equivalent of Ihi",
    "gufaRakhnePart": "Buddhist girls, priests",

    "belBibaha": "Bel Bibaha (Fruit Marriage)",
    "belBibahaDesc": "Marriage ceremony involving symbolic marriage to wood apple fruit.",
    "belBibahaTime": "After Ihi, before actual marriage",
    "belBibahaSig": "Additional spiritual protection",
    "belBibahaPart": "Married women",

    "janko": "Janko (Old Age Ceremony)",
    "jankoDesc": "Ritual celebrating longevity and granting elder status.",
    "jankoTime": "After 77 years, 7 months, 7 days",
    "jankoSig": "Honors elders and their wisdom",
    "jankoPart": "Elder, family, community"
  },

  "festivals": {
    "title": "Festivals and Celebrations",
    "subtitle": "Vibrant festivals that blend religious devotion with community celebration",
    "traditions": "Key Traditions",

    "indrajatra": "Indra Jatra",
    "indrajatraDesc": "Eight-day festival honoring Indra, the king of gods, featuring masked dances and chariot processions.",
    "indrajatraDur": "8 days in September",
    "indrajatraSig": "Marks the end of monsoon and beginning of festival season",
    "indrajatraTrad": ["Kumari chariot procession", "Lakhe dances", "Pulukisi display", "Yosin thanegu"],

    "machhindranath": "Machhindranath Jatra",
    "machhindranathDesc": "Longest chariot festival in Nepal honoring the rain-bringing deity Machhindranath.",
    "machhindranathDur": "Several months (April-June)",
    "machhindranathSig": "Ensures timely monsoon rains for agriculture",
    "machhindranathTrad": ["Rato Machhindranath chariot", "Bhoto display", "Village-to-village procession"],

    "bisket": "Bisket Jatra",
    "bisketDesc": "New Year festival in Bhaktapur featuring chariot pulling and tongue-piercing ceremonies.",
    "bisketDur": "9 days in April",
    "bisketSig": "Celebrates Nepalese New Year and victory over evil",
    "bisketTrad": ["Chariot pulling competition", "Tongue piercing", "Pole raising ceremony"],

    "yomari": "Yomari Punhi",
    "yomariDesc": "Harvest festival dedicated to the rice god where special rice-flour dumplings are prepared.",
    "yomariDur": "Full moon day in December",
    "yomariSig": "Thanksgiving for rice harvest",
    "yomariTrad": ["Yomari making", "Family gatherings", "Ancestor worship"],

    "gunla": "Gunla",
    "gunlaDesc": "Buddhist holy month dedicated to meditation, fasting, and religious observances.",
    "gunlaDur": "Entire month of August",
    "gunlaSig": "Buddhist equivalent of Ramadan",
    "gunlaTrad": ["Early morning prayers", "Monastery visits", "Fasting", "Scripture reading"],

    "sithi": "Sithi Nakha",
    "sithiDesc": "Festival dedicated to Kumar, the god of war, involving cleaning of water sources.",
    "sithiDur": "One day in May/June",
    "sithiSig": "Environmental cleanup and water source worship",
    "sithiTrad": ["Well cleaning", "Family feasts", "Kumar worship"]
  },

  
  "spirituality": {
    "badge": "Spiritual Life",
    "title": "Daily Spirituality and Cosmic Order",
    "description1": "Newar spirituality is characterized by its deep integration into daily life, where religious practice is not separate from worldly activities but informs every aspect of existence. This holistic approach maintains a balance between material pursuits and spiritual obligations.",
    "description2": "The concept of dharma (cosmic order) underpins Newar spirituality, with rituals designed to maintain harmony between the human, natural, and divine realms. Every action, from business transactions to family life, carries spiritual significance.",
    "description3": "This spiritual framework has enabled Newar culture to survive for centuries while adapting to changing circumstances, demonstrating the resilience of traditions rooted in deep philosophical understanding.",

    "dailyLife": {
      "title": "Daily Practice",
      "description": "Morning prayers, temple visits, household rituals, and observance of fasting days form the rhythm of daily spiritual life."
    },

    "festivals": {
      "title": "Festival Spirituality",
      "description": "Major festivals provide opportunities for community worship, spiritual renewal, and the reinforcement of social bonds."
    },

    "principles": {
      "title": "Core Spiritual Principles",
      "list": [
        "Harmony between religions (Hindu-Buddhist syncretism)",
        "Respect for all life forms (ahimsa)",
        "Importance of community (sangha)",
        "Maintenance of cosmic order (dharma)",
        "Practice of compassion (karuna)",
        "Pursuit of wisdom (prajna)"
      ]
    },

    "impact": {
      "title": "Social Impact",
      "description": "Newar spirituality has created a society where religious diversity is celebrated, artistic expression flourishes, and community welfare is prioritized."
    }
  },

  "resources": {
    "title": "Learning Resources",
    "subtitle": "Deepen your understanding of Newar religion and spirituality",
    "explore": "Explore Books",
    "watch": "Watch Videos",
    "visit": "Visit Institutions",

    "books": {
      "title": "Recommended Books",
      "list": [
        "The Newars: An Ethno-Sociological Study",
        "Buddhism in Nepal",
        "Hinduism in the Kathmandu Valley",
        "Newar Rituals and Ceremonies"
      ]
    },

    "videos": {
      "title": "Documentary Films",
      "list": [
        "Newar Religious Harmony",
        "Living Goddess Kumari",
        "Festivals of Kathmandu Valley",
        "Ancient Buddhist Traditions"
      ]
    },

    "institutions": {
      "title": "Research Institutions",
      "list": [
        "Nepal Bhasa Academy",
        "Tribhuvan University",
        "CNAS Research Center",
        "Newar Studies Institute"
      ]
    }
  },



  
  "religion": {
    "title": "Religion & Beliefs of the Newar People",
    "subtitle": "Discover the Unique Syncretic Blend of Hinduism and Buddhism in the Kathmandu Valley",

    "nav": {
      "overview": "Overview",
      "hinduism": "Hinduism",
      "buddhism": "Buddhism",
      "deities": "Deities & Pantheon",
      "rituals": "Life Cycle Rituals",
      "festivals": "Festivals & Calendar",
      "temples": "Sacred Architecture",
      "spirituality": "Spiritual Philosophy",
      "resources": "Academic Resources"
    },

    "overview": {
      "title": "Newar Religious Harmony: A Model of Syncretism",
      "description1": "The Newar people of the Kathmandu Valley have cultivated one of the world's most remarkable and enduring syncretic religious cultures. Over two millennia, they have masterfully interwoven the philosophical tenets, ritual practices, and cosmological frameworks of Hinduism and Buddhism into a single, cohesive system. This unique synthesis is not merely a coexistence but a deeply integrated worldview where the boundaries between the two traditions are often fluid and complementary, reflecting a profound practical and philosophical tolerance.",
      "description2": "For Newars, religious identity is not an exclusive choice but a dual inheritance. It is common for a single family to honor both Hindu and Buddhist priests during important life events, and for individuals to participate fully in the festivals and sacred sites of both traditions. This harmonious blend is evident in the very fabric of Kathmandu Valley's sacred geography, where Hindu temples and Buddhist stupas frequently share the same courtyard, and deities from both pantheons are revered within a single ritual framework.",
      "description3": "This religious harmony stands as the most distinctive feature of Newar civilization. It represents a sophisticated understanding of the divine that transcends sectarian labels, offering a living testament to how diverse spiritual paths can converge to create a rich, multifaceted, and resilient cultural identity. The survival of ancient Sanskrit Buddhist texts and Vajrayana practices within the Newar community, long after they disappeared from India, further highlights their role as custodians of a unique spiritual heritage."
    },

    "hinduism": {
      "title": "Newar Hinduism: Tantric and Goddess-Centered Traditions",
      "description1": "Newar Hinduism is distinguished by its strong emphasis on the worship of the Divine Feminine (Shakta tradition), particularly through the veneration of powerful mother goddesses like Taleju (the royal goddess), Kumari (the living goddess), and Dakshinkali. This tradition is deeply infused with Tantric principles, utilizing intricate rituals, mantras (sacred chants), yantras (mystical diagrams), and esoteric knowledge to access spiritual power. The pantheon includes unique local deities like Matsyendranath and Karunamaya (Lokeshwor), who are central to the valley's identity.",
      "description2": "While sharing core deities like Shiva, Vishnu, and Ganesh with pan-Indian Hinduism, the Newar interpretation is uniquely localized. The caste system among Newar Hindus, with specific roles for priests (Rajopadhyaya Brahmins), temple caretakers, and artisans, structures both social and religious life. Their rituals are characterized by elaborate offerings, complex calendrical observances, and a deep connection to the agricultural and urban cycles of the valley.",
      "description3": "The Newar Hindu tradition is thus a vital and dynamic strand of Hinduism that has preserved archaic elements while evolving its own distinct identity. It serves as a crucial link to understanding the historical development of Tantric and goddess-oriented practices across South Asia.",
      "practices": {
        "title": "Key Ritualistic Practices"
      }
    },

    "buddhism": {
      "title": "Newar Buddhism: The Last Sustained Sanskrit Buddhist Tradition",
      "description1": "Newar Buddhism, also known as Navayana, is of immense historical significance as it represents the last continuous tradition of Sanskrit-based Mahayana and Vajrayana Buddhism in the world. When Buddhism declined in India, the Newar merchants and monks of the Kathmandu Valley became its primary custodians, preserving a vast corpus of Sanskrit manuscripts, ritual manuals, and artistic traditions that would have otherwise been lost. This tradition places a strong emphasis on the Mahayana ideal of the Bodhisattva—a being dedicated to achieving enlightenment for the benefit of all.",
      "description2": "A unique sociological feature of Newar Buddhism is the integration of a caste-like structure within its community. The Vajracharyas and Shakyas form the priestly classes, responsible for conducting intricate Tantric rituals and maintaining the sacred texts and monasteries (baha and bahi). Unlike monastic traditions elsewhere, Newar Buddhist priests are householders, marrying and living within the community, which has been key to the tradition's continuity. Key practices include daily worship (puja) at household altars, elaborate life-cycle rituals (samskaras), and the observance of a festival calendar rich with Buddhist symbolism.",
      "practices": {
        "title": "Key Doctrinal and Ritual Practices"
      }
    },

    "deities": {
      "title": "The Syncretic Pantheon of Newar Deities",
      "subtitle": "Exploring the Divine Beings Who Bridge Hindu and Buddhist Worlds",
      "significance": "Theological Significance and Role"
    },

    "rituals": {
      "title": "Elaborate Life Cycle Rituals (Samskaras)",
      "introduction": "Newar culture is renowned for its complex and beautifully detailed life-cycle rituals (samskaras) that sanctify every stage of life from birth to death and beyond. These rituals, which number up to sixteen (grihastha shodasha samskara), are essential for purifying the individual, ensuring societal recognition, and maintaining cosmic order. Key ceremonies include the first rice-feeding (Macā Jankwa), the mock marriage ceremony for pre-adolescent girls (Ihi or Bel Bibaha), the boys' initiation into monkhood (Bare Chuyegu), and the final funeral rites (Sagan and Kriya). Each ritual is a profound community event that reinforces social bonds and transmits cultural values across generations.",
      "download": {
        "title": "A Comprehensive Guide to Newari Samskaras",
        "description": "Download our detailed PDF guide exploring the philosophical meanings, step-by-step procedures, and social significance of all major Newar life-cycle rituals.",
        "button": "Download Ritual Guide PDF"
      }
    },

    "festivals": {
      "title": "The Vibrant Festival Cycle",
      "subtitle": "Annual Celebrations that Unite Devotion, Community, and Culture",
      "traditions": "Key Rituals and Symbolic Meanings"
    },

    "temples": {
      "title": "Sacred Architecture: Pagodas, Stupas, and Shikharas",
      "viewAll": "Explore the Sacred Geography"
    },

    "spirituality": {
      "title": "Underlying Spiritual Philosophy",
      "description1": "Newar spirituality is fundamentally pragmatic and world-affirming, seeking to find the sacred within the context of everyday life and community. It is characterized by a non-dualistic tendency that sees the divine immanent in the world rather than purely transcendent. This perspective allows for the seamless integration of Hindu Bhakti (devotion), Buddhist compassion (Karuna), and Tantric practices aimed at transforming worldly experience into a path to liberation. The spiritual life is nurtured through daily household prayers, seasonal festivals, and a deep reverence for nature, ancestors, and teacher-disciple lineages.",
      "description2": "This spiritual framework provides a robust ethical and cosmological system that maintains a delicate balance between individual spiritual pursuit and collective social responsibility. It empowers Newars to navigate modern changes while retaining a strong sense of identity, offering valuable insights into sustainable models of religious pluralism and cultural resilience in an increasingly globalized world.",
      "principles": {
        "title": "Core Philosophical Principles"
      }
    },

    "resources": {
      "title": "In-Depth Learning Resources",
      "subtitle": "A Curated Selection of Academic and Multimedia Materials for Deeper Study",
      "books": {
        "title": "Seminal Academic Texts and Ethnographies"
      },
      "videos": {
        "title": "Documentary Films and Lecture Series"
      },
      "institutions": {
        "title": "Leading Research Centers and Archives"
      },
      "explore": "Browse the Bibliography",
      "watch": "View the Filmography",
      "visit": "Access Digital Archives"
    }
  },


   contact :{
  "hero": {
    "badge": "Get In Touch",
    "title": "Contact Newar Samaj",
    "subtitle": "Connect with us to preserve and celebrate the rich heritage of Newar culture together"
  },
  
  "form": {
    "title": "Send us a Message",
    "subtitle": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "fullName": "Full Name",
    "fullNamePlaceholder": "Enter your full name",
    "email": "Email Address",
    "emailPlaceholder": "Enter your email address",
    "password": "Password",
    "passwordPlaceholder": "Create a secure password",
    "country": "Country",
    "selectCountry": "Select your country",
    "message": "Your Message",
    "messagePlaceholder": "Tell us about your thoughts, questions, or how you'd like to contribute...",
    "submit": "Send Message",
    "submitting": "Sending...",
    "successMessage": "Thank you! Your message has been sent successfully.",
    "errorMessage": "Something went wrong. Please try again."
  },
  
  "importance": {
    "title": "Why This Website is Essential",
    "description1": "The Newar Samaj website serves as a vital digital bridge connecting Newar communities worldwide while preserving our ancient cultural heritage for future generations. In an era of rapid globalization, such platforms are crucial for maintaining cultural identity.",
    "description2": "This website is more than just an information portal—it's a living archive, a community hub, and an educational resource that ensures our rich traditions, language, and customs continue to thrive in the digital age.",
    "cultural": {
      "title": "Cultural Preservation",
      "description": "Documenting and preserving ancient Newar traditions, rituals, and knowledge that might otherwise be lost over time."
    },
    "preservation": {
      "title": "Heritage Protection",
      "description": "Safeguarding our unique architectural, artistic, and spiritual heritage through digital conservation efforts."
    },
    "global": {
      "title": "Global Connection",
      "description": "Connecting Newar diaspora communities across the world, fostering unity and cultural exchange."
    },
    "education": {
      "title": "Educational Resource",
      "description": "Providing authentic learning materials about Newar culture for students, researchers, and enthusiasts."
    }
  },
  
  "info": {
    "title": "Contact Information",
    "email": "Email",
    "phone": "Phone",
    "address": "Address",
    "addressDetail": "Nuwakot, Nepal - Global Newar Community",
    "hours": "Response Time",
    "hoursDetail": "Typically within 24-48 hours"
  },
  
  "stats": {
    "title": "Our Community Impact",
    "members": "Community Members",
    "countries": "Countries Reached",
    "articles": "Cultural Articles",
    "years": "Years of Heritage"
  },
  
  "cta": {
    "title": "Join Our Cultural Preservation Movement",
    "description": "Become part of a global community dedicated to preserving and promoting Newar heritage for generations to come.",
    "join": "Join Community",
    "donate": "Support Us"
  }
},

 "donate": {
    "title": "Support Our Community",
    "description": "Your donation helps preserve Newar culture and support community initiatives",
    "success": {
      "title": "Thank You for Your Generosity!",
      "message": "Your donation has been recorded and will be used for future good work."
    },
    "impact": {
      "futureWork": "Future Good Work",
      "futureWorkDesc": "Your payment will support future community development and cultural preservation",
      "recorded": "Donation Recorded",
      "recordedDesc": "Every donation is carefully recorded in our history for transparency",
      "languageEducation": "Free Language Education",
      "languageEducationDesc": "Access free Newa language courses for all community members",
      "deathSupport": "Death Support Service",
      "deathSupportDesc": "₹1000 per house support for funeral arrangements and 12-13 day rituals",
      "culturePreservation": "Culture Preservation",
      "culturePreservationDesc": "Support Lakhe Jatra, Krishna Astami, Bhajan programs and Guthi house construction"
    },
    "form": {
      "title": "Make a Difference",
      "subtitle": "Your contribution supports multiple community initiatives",
      "donationType": "Donation Purpose",
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "amount": "Donation Amount",
      "address": "Address",
      "paymentMethod": "Payment Method",
      "message": "Message",
      "submit": "Donate Now",
      "processing": "Processing Your Donation..."
    },
    "types": {
      "general": "General Community Fund",
      "deathSupport": "Death Support Service",
      "guthi": "Guthi House Construction",
      "culture": "Cultural Events & Festivals",
      "education": "Language Education Program"
    },
    "methods": {
      "esewa": "eSewa",
      "imepay": "IME Pay",
      "bank": "Bank Transfer",
      "credit": "Credit/Debit Card"
    },
    "instructions": {
      "title": "Payment Instructions",
      "esewa": "Please send your donation to our eSewa ID:",
      "imepay": "Please send your donation to our IME Pay ID:",
      "bank": "Please transfer to our bank account:",
      "credit": "You will be redirected to a secure payment gateway"
    }
  },
  
   "auth": {
    "login": {
      "title": "Welcome Back",
      "subtitle": "Sign in to your account to continue",
      "email": "Email Address",
      "emailPlaceholder": "your@email.com",
      "password": "Password",
      "passwordPlaceholder": "Enter your password",
      "rememberMe": "Remember me",
      "forgotPassword": "Forgot your password?",
      "signIn": "Sign In",
      "noAccount": "Don't have an account?",
      "createAccount": "Create an account"
    },
    "signup": {
      "title": "Create Your Account",
      "subtitle": "Join thousands of Newar community members worldwide",
      "firstName": "First Name",
      "firstNamePlaceholder": "Enter your first name",
      "lastName": "Last Name",
      "lastNamePlaceholder": "Enter your last name",
      "email": "Email Address",
      "emailPlaceholder": "your@email.com",
      "password": "Password",
      "passwordPlaceholder": "Create a password",
      "confirmPassword": "Confirm Password",
      "confirmPasswordPlaceholder": "Re-enter your password",
      "agreeToTerms": "I agree to the Terms and Conditions",
      "signUp": "Sign Up",
      "alreadyHaveAccount": "Already have an account?",
      "signIn": "Sign In",
       "benefitsTitle": "Why Join Our Community?",
      "benefit1": "Connect with Newar community members worldwide",
      "benefit2": "Access exclusive cultural events and resources",
      "benefit3": "Share and preserve Newar traditions and language"
    }
  },

   calendar: {
      title: "Nepali Calendar",
      subtitle: "Bikram Sambat Calendar",
      selectYear: "Select Year",
      currentYear: "Current Year",
      today: "Today",
      holiday: "Holiday",
      events: "Events",
      addEvent: "Add Event",
      noEvents: "No events"
    },
    months: {
      baishakh: "Baishakh", jestha: "Jestha", ashadh: "Ashadh", shrawan: "Shrawan",
      bhadra: "Bhadra", ashwin: "Ashwin", kartik: "Kartik", mangsir: "Mangsir",
      poush: "Poush", magh: "Magh", falgun: "Falgun", chaitra: "Chaitra"
    },


     "meetup": {
    "title": "Global Newar Samaj Meetup",
    "subtitle": "Connecting Newars Worldwide Through Technology",
    "description": "Join our virtual gathering space where Newar community members from across the globe can connect, discuss, and celebrate our rich culture together.",
    "importance": {
      "title": "Why Virtual Meetups Are Essential",
      "points": [
        "Bridge geographical distances between Newars in different countries",
        "Discuss community events, festivals, and important matters",
        "Preserve and promote Newar culture and traditions",
        "Share knowledge and experiences across generations",
        "Emergency community meetings during important events"
      ]
    },
    "features": {
      "title": "Meeting Purposes & Topics",
      "items": [
        "Cultural event planning and coordination",
        "Newar language preservation discussions",
        "Youth engagement and leadership programs",
        "Business networking among community members",
        "Educational workshops and skill sharing",
        "Festival celebrations and ritual discussions",
        "Community welfare and support initiatives"
      ]
    },
    "techBenefits": {
      "title": "Embracing Technology Together",
      "description": "As we connect virtually, we also learn and grow with technology. Each meeting is an opportunity to enhance our digital skills and stay updated with modern tools."
    },
    "joinButton": "Join Global Meet Now",
    "instructions": "Click the button above to join our Google Meet. No registration required - just click and connect!",
    "schedule": {
      "title": "Regular Meeting Schedule",
      "weekly": "Every Saturday: 7:00 PM NPT",
      "monthly": "First Sunday: Community General Meeting",
      "special": "Special events announced in advance"
    }
  },
  
  "notices": {
    "title": "Community Notices & Announcements",
    "subtitle": "Stay updated with latest community news and events",
    "description": "Important announcements, meeting schedules, and community updates for all Newar Samaj members worldwide.",
    "recentNotices": "Recent Notices",
    "allNotices": "All Notices",
    "noNotices": "No notices available",
    "createNotice": "Create New Notice",
    "editNotice": "Edit Notice",
    "noticeTitle": "Notice Title",
    "noticeContent": "Notice Content",
    "noticeCategory": "Category",
    "noticePriority": "Priority",
    "sendToAll": "Send to All Members",
    "scheduleSend": "Schedule Send",
    "attachments": "Attachments",
    "categories": {
      "meeting": "Meeting",
      "event": "Event",
      "urgent": "Urgent",
       "cultural": "Cultural",
      "financial": "Financial Help", 
      "language": "Language Class",
      "festival": "Festival",
      "general": "General"
    },
    "priorities": {
      "high": "High",
      "medium": "Medium",
      "low": "Low"
    },
    "actions": {
      "send": "Send Notice",
      "save": "Save Draft",
      "cancel": "Cancel",
      "delete": "Delete",
      "edit": "Edit"
    },
    "status": {
      "sent": "Sent",
      "draft": "Draft",
      "scheduled": "Scheduled"
    },
    "recipients": "Recipients",
    "sentDate": "Sent Date",
    "createdBy": "Created By",
    "adminPanel": "Admin Panel",
    "memberView": "Member View",
    "statistics": "Statistics",
    "totalNotices": "Total Notices",
    "totalRecipients": "Total Recipients",
    "todayNotices": "Today's Notices"
  },
    
    footer: {

    "about": {
      
      "title": "About Us",
      "description": "Preserving and promoting Newar culture, language, and heritage worldwide since 2080.",
      "history": "Our History",
      "mission": "Mission & Vision",
      "values": "Core Values",
      "leadership": "Leadership",
      "culture": "Culture"
    },

    "quickLinks": "Quick Links",
    "aboutUs": "About Us",
    "connect": "Connect With Us",
    "visit": "Dangol AI",
    "developedBy": "Developed By",
      "culture": "Culture",

      quote: "Preserving and promoting Newar culture, language, and heritage for future generations.",
      social: {
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        twitter: "Twitter"
      }
    }
  },

  "ne": {
  "nav": {
    "home": "गृहपृष्ठ",
    "about": "हाम्रोबारे",
    "language": "भाषा",
    "heritage": "सम्पदा",
    "resources": "स्रोतहरू",
    "events": "कार्यक्रमहरू",
    "culture": "संस्कृति",
    "community": "समुदाय",
    "notices": "सूचनाहरू",
    "contact": "हामीलाई सम्पर्क गर्नुहोस्",
    "donate": "दान गर्नुहोस्",
    "signIn": "साइन इन गर्नुहोस्",
    "signUp": "साइन अप गर्नुहोस्",
    "aboutItems": {
      "our_history": "हाम्रो इतिहास",
      "mission_vision": "मिशन र विजन",
      "vision_values": "विजन र मूल्यहरू",
      "leadership_community": "नेतृत्व र समुदाय"
    },
    "aboutItemsDesc": {
      "our_history": "इन्टरएक्टिभ टाइमलाइन, भिडियोहरू, तस्बिरहरू, एआई च्याटबट प्रश्नोत्तर",
      "mission_vision": "एनिमेटेड कार्डहरू, काउन्टरहरू, होभर प्रभावहरू",
      "vision_values": "मूल्यहरू प्रतिनिधित्व गर्ने आइकनहरू, ३डी फ्लिप कार्डहरू, एआई क्विज",
      "leadership_community": "प्रोफाइल कार्डहरू, होभर ३डी लिफ्ट, सामाजिक लिङ्कहरू"
    },
    "languageItems": {
      "learn_newar_language": "नेवार भाषा सिक्नुहोस्",
      "language_exchange_chatroom": "भाषा विनिमय च्याटरूम",
      "culture_religion_language": "संस्कृति, धर्म र भाषा",
      "culture_school": "संस्कृति स्कूल"
    },
    "languageItemsDesc": {
      "learn_newar_language": "एआई ट्यूटर सहायतासहित संरचित सिकाइ",
      "language_exchange_chatroom": "एआई-सहायता प्रस्तावहरूसहित वास्तविक-समय च्याट",
      "culture_religion_language": "मिडिया ग्यालरी, चाडपर्वका भिडियोहरू, एआई सारांशकर्ता",
      "culture_school": "भिडियो पाठहरू, एआई अनुकूली क्विजहरू, प्रगति ट्र्याकिंग"
    },
    "heritageItems": {
      "culture_customs": "संस्कृति र चलनहरू",
      "religion_beliefs": "धर्म र विश्वासहरू",
      "festivals_celebrations": "चाडपर्वहरू र उत्सव",
      "caste_occupation": "जाति र पेशा"
    },
    "heritageItemsDesc": {
      "culture_customs": "समृद्ध मिडिया र एआई अन्तर्दृष्टिहरूसहित परम्पराहरू, जीवनशैली, र सांस्कृतिक अभ्यासहरू अन्वेषण गर्नुहोस्",
      "religion_beliefs": "मार्गनिर्देशित स्पष्टीकरणहरूसहित विश्वास, रीतिरिवाजहरू, मन्दिरहरू, र आध्यात्मिक अभ्यासहरू बारे जान्नुहोस्",
      "festivals_celebrations": "एआई-शक्ति प्राप्त सारांशहरूसहित चाडपर्व क्यालेन्डर, उत्सवका भिडियोहरू, र कथाहरू",
      "caste_occupation": "परम्परागत जाति प्रणाली र पेशाहरू बारे जानकारी"
    },
    "eventItems": {
      "upcoming_events": "आगामी कार्यक्रमहरू",
      "festival_calendar": "नेपाली क्यालेन्डर"
    },
    "eventItemsDesc": {
      "upcoming_events": "३डी कार्ड सूची, काउन्टाउन टाइमरहरू, आरएसभीपी",
      "festival_calendar": "चाडपर्वका तस्बिरहरूसहित इन्टरएक्टिभ, स्क्रोल गर्न योग्य क्यालेन्डर"
    },
    "communityItems": {
      "community_onboarding": "समुदाय ओनबोर्डिंग",
      "news_updates": "समाचार र अपडेटहरू",
      "meetup": "भेटघाट",
      "notices": "सूचनाहरू"
    },
    "communityItemsDesc": {
      "community_onboarding": "पूर्ण सांस्कृतिक प्रोफाइल, रुचिहरू, र समुदाय भूमिका",
      "news_updates": "इन्टरएक्टिभ कार्ड-आधारित लेआउट, एआई सारांश",
      "meetup": "समूह कल र प्रत्येक नेवा सदस्यलाई सन्देश",
      "notices": "नयाँ अपडेटका सूचनाहरू"
    }
  },
   "hero": {
    "badge": "सन् २०८० देखि नेवार विरासत संरक्षण",
    "title": "नेवार समाज",
    "subtitle": "संस्कृति संरक्षण • भाषा प्रवर्द्धन • समुदाय निर्माण",
    "subtitleNative": "संस्कृति संरक्षण • भाषा प्रवर्द्धन • समुदाय निर्माण",
    "description": "विश्वभरिका हजारौं नेवार समुदायका सदस्यहरूसँग जोडिएर हाम्रो समृद्ध विरासतलाई मनाउनुहोस्, हाम्रो प्राचीन भाषा सिक्नुहोस् र आधुनिक प्रविधिद्वारा हाम्रो जीवन्त संस्कृतिसँग जोडिनुहोस्।",
    "cta1": "हाम्रो समुदायमा सामेल हुनुहोस्",
    "cta2": "थप जान्नुहोस्",
    "stats": {
      "artifacts": "५०+",
      "artifactsLabel": "सांस्कृतिक स्थलहरू",
      "lessons": "६०+",
      "lessonsLabel": "भाषा पाठहरू",
      "assistant": " ३ हजार+",
      "assistantLabel": "समुदाय सदस्यहरू",
      "festivals": "२५+",
      "festivalsLabel": "वार्षिक चाडपर्वहरू"
    }
  },
  "about": {
    "badge": "नेवार समाजको बारेमा",
    "title": {
      "part1": "विरासत संरक्षण,",
      "part2": "भविष्य निर्माण"
    },
    "subtitle": "हामी नेवार संस्कृति संरक्षण, हाम्रो भाषा प्रवर्द्धन, र विश्वभरिका समुदाय सदस्यहरूलाई प्रविधि र परम्पराद्वारा जोड्न समर्पित छौं।",
    "links": {
      "0": {
        "title": "हाम्रो इतिहास",
        "description": "१२००+ वर्षको समृद्ध सांस्कृतिक विरासत"
      },
      "1": {
        "title": "लक्ष्य र दृष्टि",
        "description": "सांस्कृतिक संरक्षणको लागि हाम्रो लक्ष्यहरू"
      },
      "2": {
        "title": "मुख्य मूल्यहरू",
        "description": "हाम्रो समुदायलाई मार्गदर्शन गर्ने सिद्धान्तहरू"
      },
      "3": {
        "title": "नेतृत्व",
        "description": "हाम्रो समर्पित टिमलाई भेट्नुहोस्"
      }
    },
    "mission": {
      "title": "हाम्रो मिशन",
      "description": "शिक्षा, प्रविधि, र समुदाय संलग्नताद्वारा नेवार सांस्कृतिक विरासत संरक्षण र प्रवर्द्धन गर्दै हाम्रो समृद्ध परम्पराहरूलाई भविष्यका पुस्ताहरूको लागि सुलभ बनाउनु।"
    },
    "vision": {
      "title": "हाम्रो दृष्टि",
      "description": "एक यस्तो विश्व जहाँ नेवार संस्कृति विश्वव्यापी रूपमा फस्टाउँछ, हाम्रो भाषा गर्वले बोलिन्छ, र हाम्रो समुदाय पुस्ता र सीमाहरू पारि जडान हुन्छ।"
    },
    
    "leadership": {
      "title": "हाम्रो नेतृत्व टिम",
      "description": "नेवार संस्कृतिलाई विश्वव्यापी रूपमा संरक्षण र प्रवर्द्धन गर्न अथक रूपमा काम गर्ने समर्पित व्यक्तिहरू",
      "viewFullTeam": "पूर्ण टिम भेट्नुहोस्",
      "leaders": {
        "0": {
          "name": "महेश डंगोल",
          "role": "अध्यक्ष",
          "image": "/mahesh.jpg",
          "bio": "दृष्टि र समर्पणसाथ नेवार समाजलाई नेतृत्व गर्दै, हाम्रो सांस्कृतिक विरासत संरक्षण"
        },
        "1": {
          "name": "ज्ञान कुमार डंगोल",
          "role": "उपाध्यक्ष",
          "image": "/gyan.jpg",
          "bio": "व्यापक अनुभवसहित संचालन र समुदाय सम्बन्धहरू व्यवस्थापन"
        },
        "2": {
          "name": "रामहरि डंगोल",
          "role": "बैठक समन्वयक",
          "image": "/ramhari.jpg", 
          "bio": "समुदाय कार्यक्रमहरू व्यवस्थापन र सहज संचालन सुनिश्चित गर्दै"
        },
        "3": {
          "name": "प्रकाश डंगोल",
          "role": "सोशल मिडिया र मार्केटिंग",
          "image": "/prakash.jpg",
          "bio": "हाम्रो डिजिटल उपस्थिति विस्तार र नयाँ अवसरहरू खोज्दै"
        }
      }
    },
    "stats": {
      "members": "१,०००+",
      "membersLabel": "समुदाय सदस्यहरू",
      "articles": "५०+",
      "articlesLabel": "सांस्कृतिक लेखहरू",
      "countries": "१५+",
      "countriesLabel": "देशहरूमा पुग्यो"
    },
    "cta": {
      "title": "हाम्रो समुदायमा सामेल हुन तयार हुनुहुन्छ?",
      "description": "विश्वभरिका हजारौं नेवार समुदाय सदस्यहरूसँग जडान हुनुहोस् र भविष्यका पुस्ताहरूको लागि हाम्रो समृद्ध सांस्कृतिक विरासत संरक्षणको भाग बन्नुहोस्।",
      "signUp": "अहिले साइन अप गर्नुहोस्",
      "contact": "हामीलाई सम्पर्क गर्नुहोस्"
    }
  },



  "quickFeatures": {
    "title": "हाम्रो सम्पदा अन्वेषण गर्नुहोस्",
    "culturalHeritage": {
      "title": "सांस्कृतिक सम्पदा",
      "subtitle": "मन्दिरहरू, चाडपर्वहरू, र परम्पराहरू अन्वेषण गर्नुहोस्",
      "description": "नेवार वास्तुकला, धार्मिक अभ्यासहरू, र सांस्कृतिक उत्सवहरूको समृद्ध इतिहास अन्वेषण गर्नुहोस् जुन सयौं वर्षदेखि संरक्षित छ।"
    },
    "languageLearning": {
      "title": "भाषा सिकाइ",
      "subtitle": "एआई-शक्ति प्राप्त नेवार भाषा शिक्षा",
      "description": "इन्टरएक्टिभ पाठहरू, एआई ट्यूटरहरू, र नेवा, नेपाली, र अंग्रेजी बीच वास्तविक-समय अनुवादसहित नेवार भाषा सिक्नुहोस्।"
    },
    "community": {
      "title": "समुदाय",
      "subtitle": "साथी समुदाय सदस्यहरूसँग जडान गर्नुहोस्",
      "description": "कार्यक्रमहरू, छलफलहरू, र सांस्कृतिक गतिविधिहरू मार्फत हाम्रो जीवन्त समुदायमा सामेल हुनुहोस् जसले विश्वभरका नेवार मानिसहरूलाई सँगै ल्याउँछ।"
    }
  },
  "missionVision": {
    "title": "मिशन र विजन",
    "subtitle": "आउँदा पुस्ताहरूको लागि नेवार संस्कृति संरक्षण र प्रवर्द्धन"
  },
  "mission": {
    "title": "हाम्रो मिशन",
    "description": "नेवार सांस्कृतिक सम्पदा, भाषा, र परम्पराहरू संरक्षण, प्रवर्द्धन, र सशक्तिकरण गर्ने",
    "language_preservation": "नेपाल भाषा संरक्षण",
    "language_preservation_desc": "स्कूलहरू, डिजिटल प्लेटफर्महरू, र वर्कशपहरू मार्फत नेवा भाषाको प्रवर्द्धन",
    "language_preservation_long": "हाम्रो मिशन भनेको व्यापक शैक्षिक कार्यक्रमहरू, डिजिटल स्रोतहरू, र समुदाय वर्कशपहरू मार्फत नेवा भाषा (नेपाल भाषा) फस्टाउने गरी बचाउने हो। हाम्रो लक्ष्य सिकाइ सामग्रीहरू सिर्जना गर्ने, भाषा शिक्षकहरूलाई समर्थन गर्ने, र एआई-शक्ति प्राप्त उपकरणहरू विकास गर्ने हो जसले नेपाल भाषा सिकाइ सबैको लागि सजिलो बनाउँछ।",
    "cultural_identity": "सांस्कृतिक पहिचान",
    "cultural_identity_desc": "नेवा सांस्कृतिक पहिचान, परम्पराहरू, संगीत, कलाहरू, र शिल्पकलाहरू कायम र सशक्त बनाउने",
    "cultural_identity_long": "हामी परम्परागत अभ्यासहरू, संगीत, नृत्य, कलाहरू, र शिल्पकलाहरू कागजातमा उतार्न र प्रवर्द्धन गर्ने मार्फत नेवार सांस्कृतिक पहिचानको समृद्ध टेपेस्ट्री संरक्षण गर्न प्रतिबद्ध छौं। हाम्रा पहलहरूमा सांस्कृतिक चाडपर्वहरू, कारीगर समर्थन कार्यक्रमहरू, र डिजिटल अभिलेखहरू समावेश छन् जसले आउँदा पुस्ताहरूको लागि हाम्रो अद्वितीय विरासत मनाउँछ र कायम राख्छ।",
    "intergenerational_learning": "अन्तर-पुस्तीय सिकाइ",
      "intergenerational_learning_desc": "युवाहरूलाई परम्परागत रीतिरिवाजहरू, चाडपर्वहरू, र मौखिक इतिहासहरू बुझ्न प्रोत्साहन",
      "intergenerational_learning_long": "पुस्ताहरूलाई जोड्नु सांस्कृतिक अस्तित्वको लागि महत्त्वपूर्ण हो। हामी मेन्टरशिप कार्यक्रमहरू, समुदाय सभाहरू, र डिजिटल प्लेटफर्महरू मार्फत ज्ञान स्थानान्तरण सुविधा पुर्याउँछौं जहाँ वृद्धहरूले युवाहरूसँग ज्ञान साट्न सक्छन्। हाम्रा मौखिक इतिहास परियोजनाहरूले पैतृक ज्ञान कागजातमा उतार्छन् भने हाम्रा युवा कार्यक्रमहरूले आजको संसारको लागि परम्परागत अभ्यासहरूलाई प्रासंगिक बनाउँछन्।",
      "global_awareness": "वैश्विक जागरूकता",
      "global_awareness_desc": "सांस्कृतिक गर्व निर्माण र अन्तर्राष्ट्रिय स्तरमा नेवा संस्कृतिको प्रदर्शन",
      "global_awareness_long": "हामी अन्तर्राष्ट्रिय सहकार्यहरू, सांस्कृतिक आदानप्रदानहरू, र डिजिटल उपस्थिति मार्फत नेवार संस्कृतिलाई वैश्विक मंचमा राख्न काम गर्छौं। हाम्रा प्रयासहरूमा विश्व सांस्कृतिक चाडपर्वहरूमा सहभागिता, सिस्टर-सिटी सम्बन्धहरू स्थापना गर्ने, र मल्टिमिडिया सामग्री सिर्जना गर्ने समावेश छन् जसले नेवार परम्पराहरूको सुन्दरता र गहिराइ वैश्विक दर्शकहरूसँग साट्छ।",
      "unity_in_diversity": "विविधतामा एकता",
      "unity_in_diversity_desc": "विविधतालाई सम्मान गर्दै हिन्दू र बौद्ध नेवारहरूबीच एकता प्रवर्द्धन",
      "unity_in_diversity_long": "नेवार संस्कृतिभित्रको सुन्दर विविधता मनाउँदै, हामी हिन्दू र बौद्ध समुदायहरूबीच संवाद र सहकार्यलाई बढावा दिन्छौं। हाम्रा कार्यक्रमहरूले साझा मूल्यहरू र परम्पराहरू उजागर गर्छन् भने धार्मिक भिन्नताहरूलाई सम्मान गर्छन्। हामी विश्वास गर्छौं कि हाम्रो शक्ति विविधतालाई अंगीकार गर्ने एकतामा छ, जसले हाम्रो विरासतका सबै पक्षहरूलाई सम्मान गर्ने सुसंगत समुदाय सिर्जना गर्छ।"
    },
    "vision": {
      "title": "हाम्रो विजन",
      "description": "एक यस्तो भविष्य जहाँ नेवार संस्कृति वैश्विक रूपमा फस्टाउँछ भने आफ्नो समृद्ध विरासतलाई कायम राख्छ",
      "language_future": "व्यापक रूपमा बोलिने भाषा",
      "language_future_desc": "नेपाल भाषा व्यापक रूपमा बोलिने र शैक्षिक संस्थाहरूमा सिकाइने",
      "language_future_long": "हामी एक यस्तो भविष्यको कल्पना गर्छौं जहाँ नेपाल भाषा मात्र संरक्षित नभई फस्टाउँछ। हाम्रो लक्ष्य यसलाई स्कूलहरूमा सिकाइने, मिडियामा प्रयोग गरिने, र विश्वभरका घरहरू र समुदायहरूमा गर्वले बोलिने देख्ने हो। प्रविधि र शिक्षा मार्फत, हाम्रो लक्ष्य नेपाल भाषालाई सिक्न र दैनिक जीवनमा प्रयोग गर्न चाहने सबैको लागि सजिलो बनाउने हो।",
      "cultural_institutions": "बलियो सांस्कृतिक संस्थाहरू",
      "cultural_institutions_desc": "जीवन्त गुथी प्रणालीहरू, चाडपर्वहरू, र समुदाय केन्द्रहरूले विरासत संरक्षण गर्छन्",
      "cultural_institutions_long": "हाम्रो विजनमा पुनर्जीवित र सशक्त सांस्कृतिक संस्थाहरू समावेश छन् जसले नेवार समुदाय जीवनका स्तम्भहरूको रूपमा सेवा गर्छन्। हामी गुथी प्रणालीहरू फस्टाउँदै, समुदाय केन्द्रहरू गतिविधिहरूले चर्किरहेको, र चाडपर्वहरू देख्छौं जसले परम्पराहरू संरक्षण गर्छन् र नयाँ पुस्ताहरूलाई समावेश गर्न विकास हुन्छन्। यी संस्थाहरू डिजिटल अवसंरचनाद्वारा समर्थित हुनेछन् जसले वैश्विक नेवार समुदायहरूलाई जोड्छ।",
      "youth_engagement": "युवा संलग्नता",
      "youth_engagement_desc": "कला, वास्तुकला, साहित्य, र वैश्विक नेटवर्किंगमा सक्रिय रूपमा संलग्न नेवार युवाहरू",
      "youth_engagement_long": "हामी एक यस्तो भविष्यको सपना देख्छौं जहाँ नेवार युवाहरू मात्र सहभागी नभई सांस्कृतिक संरक्षण र नवीनतामा नेतृत्व गर्छन्। मेन्टरशिप, शिक्षा, र प्रविधि मार्फत, हाम्रो लक्ष्य युवा नेवारहरूलाई सशक्त बनाउने हो कि उनीहरूले समकालीन सन्दर्भहरूको लागि परम्परागत कलाहरू, वास्तुकला, र साहित्यलाई पुनर्व्याख्या गर्न सकून् भने विरासत र परम्पराको लागि गहिरो सम्मान कायम राख्न सकून्।",
      "tradition_modernity": "परम्परा र आधुनिकता",
      "tradition_modernity_desc": "सांस्कृतिक जराहरू र संरक्षणको लागि प्रविधिलाई अंगीकार गर्ने बीचमा सन्तुलन",
      "tradition_modernity_long": "हाम्रो विजनले परम्परालाई नवीनतासँग मेलमिलाप गर्छ। हामी नेवार संस्कृतिलाई प्रविधिको रणनीतिक प्रयोग मार्फत फस्टाउँदै देख्छौं - एआई-शक्ति प्राप्त भाषा सिकाइदेखि चाडपर्वहरूका आभासी वास्तविकता अनुभवहरूसम्म। यो सन्तुलनले हामीलाई प्राचीन ज्ञान संरक्षण गर्न अनुमति दिन्छ भने यसलाई विश्वभरका आधुनिक पुस्ताहरूको लागि सजिलो र प्रासंगिक बनाउँछ।",
      "international_recognition": "अन्तर्राष्ट्रिय मान्यता",
      "international_recognition_desc": "युनेस्को विरासत र सांस्कृतिक कूटनीति मार्फत नेवार संस्कृतिको वैश्विक सराहना",
      "international_recognition_long": "हामी नेवार संस्कृतिको अन्तर्राष्ट्रिय मान्यतातर्फ काम गर्छौं जुन विश्व विरासतमा महत्त्वपूर्ण योगदानको रूपमा हो। यसमा महत्त्वपूर्ण सांस्कृतिक तत्वहरूको लागि युनेस्को पदनाम, विश्व सांस्कृतिक शिक्षा पाठ्यक्रमहरूमा समावेश, र वैश्विक सांस्कृतिक मंचहरूमा प्रतिनिधित्व समावेश छन्। सांस्कृतिक कूटनीति मार्फत, हाम्रो लक्ष्य नेवार परम्पराहरूको समृद्धि संसारसँग साट्ने हो।"
    },
    "focusAreas": {
      "title": "हाम्रो फोकस क्षेत्रहरू",
      "language": "भाषा",
      "religion": "धर्म",
      "festivals": "चाडपर्वहरू",
      "art": "कला र शिल्प",
      "youth": "युवा",
      "global": "वैश्विक जडान",
      "learn_more": "थप जान्नुहोस्",
      "language_desc": "शिक्षा र डिजिटल प्लेटफर्महरू मार्फत नेपाल भाषा संरक्षण र प्रवर्द्धन",
      "language_long": "हाम्रा भाषा पहलहरूमा व्यापक सिकाइ सामग्रीहरू विकास गर्ने, नेपाल भाषा शिक्षकहरूलाई समर्थन गर्ने, एआई-शक्ति प्राप्त सिकाइ उपकरणहरू सिर्जना गर्ने, र इमर्सिभ सिकाइको लागि भाषा नेस्टहरू स्थापना गर्ने समावेश छन्। हामी शैक्षिक संस्थाहरूसँग काम गर्छौं कि नेपाल भाषा पाठ्यक्रमहरूमा समावेश गरिन्छ र प्रविधि साझेदारहरूसँग काम गर्छौं कि भाषा वैश्विक सिकारुहरूको लागि सजिलो बनाउने डिजिटल स्रोतहरू विकास गरिन्छ।",
      "religion_desc": "नेवार संस्कृतिभित्रका हिन्दू र बौद्ध दुवै परम्पराहरूलाई सम्मान",
      "religion_long": "हामी नेवार संस्कृतिभित्रको धार्मिक विविधता मनाउँछौं, अन्तर-धर्म संवाद, साझा चाडपर्व उत्सवहरू, र शैक्षिक कार्यक्रमहरू मार्फत हिन्दू र बौद्ध दुवै परम्पराहरूलाई समर्थन गर्छौं जसले हाम्रो साझा विरासतलाई उजागर गर्छन्। हाम्रा पहलहरूमा धार्मिक ग्रन्थहरू संरक्षण, मन्दिर मर्मतसम्भार समर्थन, र युवा पुस्ताहरूलाई धार्मिक अभ्यासहरू बुझाउने स्रोतहरू सिर्जना गर्ने समावेश छन्।",
      "festivals_desc": "परम्परागत चाडपर्वहरू र रीतिरिवाजहरू मनाउने र कायम राख्ने",
      "festivals_long": "नेवार चाडपर्वहरू हाम्रो सांस्कृतिक पहिचानका जीवन्त अभिव्यक्तिहरू हुन्। हामी समुदाय उत्सवहरू, शैक्षिक सामग्रीहरू, र डिजिटल अभिलेखहरू मार्फत परम्परागत चाडपर्वहरू कागजातमा उतार्न, संरक्षण गर्न, र प्रवर्द्धन गर्न काम गर्छौं। हाम्रा प्रयासहरूमा चाडपर्व आयोजकहरूलाई समर्थन गर्ने, युवा पुस्ताहरूको लागि चाडपर्व गाइडहरू सिर्जना गर्ने, र वैश्विक सहभागीहरूलाई हाम्रा चाडपर्वहरूसँग संलग्न हुन अनुमति दिने इमर्सिभ अनुभवहरू विकास गर्ने समावेश छन्।",
      "art_desc": "परम्परागत कलाहरू, शिल्पकलाहरू, संगीत, र वास्तुकलालाई समर्थन",
      "art_long": "नेवार कला रूपहरूले सांस्कृतिक परिष्कारको सयौं वर्षको प्रतिनिधित्व गर्छन्। हामी अनुदान, प्रशिक्षण कार्यक्रमहरू, र बजार पहुँच पहलहरू मार्फत परम्परागत कलाकारहरूलाई समर्थन गर्छौं। हाम्रा परियोजनाहरूमा लोपोन्मुख कला रूपहरू कागजातमा उतार्ने, परम्परागत डिजाइनहरूका डिजिटल अभिलेखहरू सिर्जना गर्ने, र नवीनतालाई बढावा दिने समावेश छन् जसले परम्परागत कलाहरूलाई समकालीन सन्दर्भहरूमा ल्याउँछ भने उनीहरूको सांस्कृतिक अखण्डता कायम राख्छ।",
      "youth_desc": "सांस्कृतिक संरक्षणमा युवा पुस्ताहरूलाई संलग्न गर्ने",
      "youth_long": "युवा संलग्नता सांस्कृतिक निरन्तरताको लागि आवश्यक छ। हामी यस्ता कार्यक्रमहरू विकास गर्छौं जसले नेवार संस्कृतिलाई युवा पुस्ताहरूको लागि प्रासंगिक र रोमाञ्चक बनाउँछन्, जसमा प्रविधि-चालित सिकाइ उपकरणहरू, सामाजिक मिडिया अभियानहरू, र नेतृत्व विकास कार्यक्रमहरू समावेश छन्। हाम्रा युवा पहलहरू सह-सृजनमा केन्द्रित छन्, जसले युवा नेवारहरूलाई अनुमति दिन्छ कि कसरी संस्कृति विकास हुन्छ भने मुख्य मूल्यहरू र परम्पराहरू कायम राख्छ।",
      "global_desc": "अन्तर्राष्ट्रिय जडानहरू र जागरूकता निर्माण",
      "global_long": "हाम्रो अन्तर्सम्बन्धित संसारमा, हामी वैश्विक रूपमा नेवार समुदायहरूबीच पुलहरू निर्माण गर्छौं। हाम्रा अन्तर्राष्ट्रिय पहलहरूमा सांस्कृतिक आदानप्रदान कार्यक्रमहरू, वैश्विक नेटवर्किंग प्लेटफर्महरू, र सहकार्यात्मक परियोजनाहरू समावेश छन् जसले सीमाहरू पार गरेर नेवारहरूलाई जोड्छन्। हामी मिडिया साझेदारी, सांस्कृतिक कूटनीति, र वैश्विक सांस्कृतिक कार्यक्रमहरूमा सहभागिता मार्फत नेवार संस्कृतिको अन्तर्राष्ट्रिय जागरूकता बढाउन काम गर्छौं।"
    },
    "infographic": {
      "title": "एक नजरमा सांस्कृतिक अन्तर्दृष्टिहरू",
      "mission_title": "मिशन फोकस क्षेत्रहरू",
      "vision_title": "विजन उद्देश्यहरू"
    },
    "globalCommunity": {
      "title": "वैश्विक नेवार समुदाय",
      "description": "हाम्रो साझा विरासत संरक्षण र मनाउन विश्वभरका नेवारहरूलाई जडान गर्दै",
      "members": "समुदाय सदस्यहरू",
      "countries": "देशहरू",
      "events": "वार्षिक कार्यक्रमहरू",
      "languages": "समर्थित भाषाहरू"
    },
    "cta": {
      "title": "हाम्रो मिशनमा सामेल हुनुहोस्",
      "description": "विश्वभर नेवार संस्कृतिको संरक्षण र प्रवर्द्धनको आन्दोलनको भाग बन्नुहोस्",
      "join_button": "नेवार समाजमा सामेल हुनुहोस्",
      "learn_button": "थप जान्नुहोस्",
      "quiz_button": "सांस्कृतिक क्विज लिनुहोस्"
    },
    "quiz": {
      "title": "नेवार संस्कृति क्विज",
      "progress": "प्रश्न {current} {total} मध्ये",
      "result_title": "क्विज नतिजाहरू",
      "score": "तपाईंले {total} मध्ये {score} अंक प्राप्त गर्नुभयो",
      "try_again": "फेरि प्रयास गर्नुहोस्",
      "close": "बन्द गर्नुहोस्",
      "question_1": "नेवार संस्कृतिमा 'प्रकाशको पर्व' को रूपमा कुन चाड परिचित छ?",
      "option_1_1": "तिहार",
      "option_1_2": "दशैं",
      "option_1_3": "होली",
      "option_1_4": "दीपावली",
      "question_2": "परम्परागत नेवार लुगालाई के भनिन्छ?",
      "option_2_1": "सारी",
      "option_2_2": "धोती",
      "option_2_3": "हाकु पतासी",
      "option_2_4": "कुर्ता",
      "question_3": "यी मध्ये कुन परम्परागत नेवार सांगीतिक बाद्ययन्त्र हो?",
      "option_3_1": "तबला",
      "option_3_2": "ढिमय",
      "option_3_3": "सितार",
      "option_3_4": "बाँसुरी"
    },
    "history": {
      "title": "नेवार इतिहास र सम्पदा",
      "subtitle": "सयौं वर्षदेखि नेवार मानिसहरूको समृद्ध सांस्कृतिक विरासत अन्वेषण गर्दै",
      "overview": {
        "title": "अवलोकन",
        "paragraph1": "नेवारहरू नेपालको काठमाडौं उपत्यकाका ऐतिहासिक बासिन्दा हुन् र यसको शानदार शहरी सभ्यताका सृष्टाहरू हुन्। दुई हजार वर्षभन्दा बढीको प्रमाणित इतिहास भएका नेवारहरूले अद्वितीय शहरी बस्तीहरू, परिष्कृत कला र वास्तुकला, र अत्यधिक स्तरीकृत सामाजिक प्रणालीले विशेषता भएको जटिल संस्कृति विकास गरेका छन्।",
        "paragraph2": "नेवार समाज हिन्दू र बौद्ध दुवै परम्पराहरूको संश्लेषणको लागि नोट गरिएको छ, जहाँ धेरै रीतिरिवाजहरू र चाडपर्वहरूले दुवै धर्मबाट तत्वहरू समावेश गर्छन्। नेवार भाषा, जसलाई नेपाल भाषा पनि भनिन्छ, एक सिनो-तिब्बती भाषा हो जसको १२औं शताब्दीदेखिको समृद्ध साहित्यिक परम्परा छ।",
        "paragraph3": "नेवार सभ्यताको हृदयस्थल काठमाडौं उपत्यका, यसको असाधारण सांस्कृतिक र कलात्मक उपलब्धिहरूको मान्यतामा १९७९ मा युनेस्को विश्व सम्पदा स्थलको रूपमा नामित गरिएको थियो। नेवार वास्तुकारहरू र कारीगरहरूले मन्दिर वास्तुकलाको विशिष्ट शैलीहरू विकास गरे, विशेष गरी पगोडा शैली जसले हिमालय क्षेत्रभर भवन निर्माण परम्पराहरूलाई प्रभावित गरेको छ।",
        "imageAlt": "परम्परागत वास्तुकला देखाउने काठमाडौं उपत्यकाको मनोरम दृश्य",
        "imageCaption": "नेवार सभ्यताको हृदयस्थल काठमाडौं उपत्यका (स्रोत: युनेस्को)"
      },
      "timeline": {
        "title": "ऐतिहासिक टाइमलाइन",
        "tabs": {
          "all": "सबै अवधिहरू",
          "preMalla": "प्रा-मल्ल",
          "malla": "मल्ल अवधि",
          "modern": "आधुनिक युग"
        },
        "pre400CE": {
          "year": "४०० ईसापूर्वभन्दा अगाडि",
          "title": "प्रारम्भिक बस्तीहरू",
          "description": "पुरातात्विक प्रमाणले काठमाडौं उपत्यकामा पहिलो सहस्राब्दी ईसापूर्वमा प्रारम्भिक बस्तीहरू रहेको सुझाव दिन्छ। सबैभन्दा पहिलेका ज्ञात बासिन्दा सम्भवतः किरातहरू थिए, जसलाई नेवारहरूले पछ्याए जसले एक विशिष्ट शहरी सभ्यता विकास गरे।"
        },
        "licchavi": {
          "year": "४००-७५० ईस्वी",
          "title": "लिच्छवी अवधि",
          "description": "कला र वास्तुकलाको स्वर्ण युग; धेरै सांस्कृतिक परम्पराहरूको स्थापना। लिच्छवी वंशले संस्कृतमा विस्तृत शिलालेखहरू छोड्यो जसले सामाजिक, आर्थिक, र धार्मिक जीवन कागजातमा उतारे। नेवार संस्कृतिले यस अवधिमा विशिष्ट आकार लिन थाल्यो।"
        },
        "transitional": {
          "year": "७५०-१२०० ईस्वी",
          "title": "सङ्क्रमणकालीन अवधि",
          "description": "राजनीतिक विखण्डन र सांस्कृतिक संश्लेषणको अवधि। हिन्दू र बौद्ध धर्मका अभ्यासहरू अझ गहिरो रूपमा एकीकृत भए, जसले नेवार संस्कृतिको विशेषता भएको अद्वितीय समन्वयात्मक परम्परा सिर्जना गर्यो।"
        },
        "malla": {
          "year": "१२००-१७६९",
          "title": "मल्ल वंश",
          "description": "नेवार संस्कृतिको फस्टाइ; दरबार, मन्दिरहरू, र सार्वजनिक स्थानहरूको निर्माण। मल्ल राजाहरू कला, वास्तुकला, र साहित्यका महान संरक्षक थिए। यस युगले काठमाडौं, पाटन, र भक्तपुर दरबार क्षेत्र जस्ता प्रतिष्ठित स्थलहरूको निर्माण देख्यो।"
        },
        "jayasthiti": {
          "year": "१३८२",
          "title": "जयस्थिति मल्लको संहिताकरण",
          "description": "सामाजिक पुनर्गठन र जाति प्रणाली औपचारिकरण। राजा जयस्थिति मल्लले कानूनी र सामाजिक सुधारहरू परिचय गरे जसले नेवार समाजलाई जटिल जातीय श्रेणीमा संगठित गर्यो जहाँ प्रत्येक समूहको लागि विशिष्ट कर्तव्यहरू र विशेषाधिकारहरू थिए।"
        },
        "gorkha": {
          "year": "१७६९",
          "title": "गोरखा विजय",
          "description": "पृथ्वीनारायण शाहले काठमाडौं उपत्यकालाई जित्छन्, मल्ल शासन अन्त्य गर्छन्। यसले शाह वंशको शासनको सुरुवात र नेवार राजनीतिक प्रभाव र सांस्कृतिक स्वायत्ततामा महत्त्वपूर्ण परिवर्तनहरूलाई चिन्ह लगायो।"
        },
        "muluki": {
          "year": "१८५४",
          "title": "मुलुकी ऐन",
          "description": "राणा कानूनी संहिताले सामाजिक श्रेणीलाई थप औपचारिक बनायो। कानूनी दस्तावेजले जातीय भिन्नताहरू र प्रतिबन्धहरू औपचारिक बनायो, जसले नेवार सामाजिक संगठनलाई पुस्ताहरूसम्म प्रभावित गर्यो।"
        },
        "rana": {
          "year": "१९५१",
          "title": "राणा शासनको अन्त्य",
          "description": "लोकतान्त्रिक सुधार सुरु हुन्छ; जातीय भेदभाव आधिकारिक रूपमा अवैध घोषित। नेवारहरूले लोकतन्त्र आन्दोलनमा महत्त्वपूर्ण भूमिका खेले र पछिको सांस्कृतिक पुनर्जागरणमा।"
        },
        "renaissance": {
          "year": "१९९०",
          "title": "सांस्कृतिक पुनर्जागरण",
          "description": "जनआन्दोलन पछि, नेवार भाषा र संस्कृतिले पुनर्जागरण अनुभव गर्छ। नेपाल भाषा प्रकाशनहरू बढ्छन्, र सांस्कृतिक संगठनहरूले गति प्राप्त गर्छन्।"
        },
        "present": {
          "year": "वर्तमान",
          "title": "सांस्कृतिक संरक्षण",
          "description": "आधुनिकीकरण र वैश्वीकरणको बीचमा नेवार विरासत संरक्षणको प्रयासहरू जारी छन्। काठमाडौं उपत्यका विश्व सम्पदा स्थलको युनेस्को पदनामले संरक्षण प्रयासहरूलाई मद्दत गर्छ।"
        }
      },
      "socialStructure": {
        "title": "सामाजिक संरचना",
        "paragraph1": "परम्परागत नेवार सामाजिक संरचना जटिल जाति प्रणाली (जात) वरिपरि संगठित छ जसले हिन्दू र बौद्ध दुवै तत्वहरू समावेश गर्छ। ऐतिहासिक रूपमा लगभग ७० विशिष्ट जातिहरू समावेश गर्दै, यो प्रणाली राजा जयस्थिति मल्ल (१३८२-१३९५) को शासनकालमा औपचारिक रूपमा संहिताबद्ध गरिएको थियो र १८५४ को मुलुकी ऐन कानूनी संहिताद्वारा थप बलियो बनाइएको थियो।",
        "paragraph2": "प्रत्येक जातिले परम्परागत रूपमा विशिष्ट पेशागत विशेषज्ञताहरू, अनुष्ठानिक भूमिकाहरू, र सामाजिक दायित्वहरू राख्थ्यो। जातीय भेदभावको लागि कानूनी ढाँचा १९६३ मा समाप्त गरिएको भए तापनि जातीय पहिचान धेरै सन्दर्भहरूमा सामाजिक रूपमा महत्त्वपूर्ण रहन्छ।",
        "paragraph3": "यो प्रणाली हिन्दू र बौद्ध दुवै धार्मिक ढाँचाहरूको एकीकरणमा अद्वितीय छ, जहाँ समानान्तर पुजारी वर्गहरू (ब्राह्मण र वज्राचार्य) र जटिल नियमहरू छन् जसले जाति रेखाहरू पार गरेर अन्तर्व्यक्तिगत सम्बन्धहरू, भोजन, र विवाहलाई नियन्त्रण गर्छन्।",
        "tabs": {
          "all": "सबै जातिहरू",
          "hindu": "हिन्दू जातिहरू",
          "buddhist": "बौद्ध जातिहरू",
          "priestly": "पुजारी वर्गहरू"
        },
        "surnames": "सामान्य थरहरू",
        "occupation": "परम्परागत पेशा",
        "religion": "धार्मिक सम्बद्धता",
        "gotra": "गोत्र/बहिर्विवाह नियमहरू",
        "sources": "स्रोतहरू"
      },
      "caste": {
        "priestly": {
          "category": "पुजारी वर्गहरू",
          "rajopadhyaya": {
            "name": "राजोपाध्याय",
            "description": "हिन्दू पुजारीहरू, देव ब्राह्मण पनि भनिन्छ",
            "occupation": "मन्दिर पुजारीहरू, अनुष्ठान विशेषज्ञहरू",
            "religion": "हिन्दू",
            "gotra": "विभिन्न (कश्यप, भारद्वाज, आदि)"
          },
          "vajracharya": {
            "name": "वज्राचार्य",
            "description": "बौद्ध पुजारीहरू, गुभाजु पनि भनिन्छ",
            "occupation": "बौद्ध अनुष्ठान विशेषज्ञहरू",
            "religion": "बौद्ध",
            "gotra": "लागू हुँदैन"
          },
          "shakya": {
            "name": "शाक्य",
            "description": "बौद्ध अनुष्ठान अभ्यासकर्ता र सुनारहरू",
            "occupation": "सुनारहरू, अनुष्ठान सहायकहरू",
            "religion": "बौद्ध",
            "gotra": "लागू हुँदैन"
          }
        },
        "ruling": {
          "category": "शासक र व्यापारी वर्गहरू",
          "shrestha": {
            "name": "छथरीय/श्रेष्ठ",
            "description": "परम्परागत शासक र प्रशासनिक वर्ग",
            "occupation": "प्रशासकहरू, शासकहरू, व्यापारीहरू",
            "religion": "हिन्दू र बौद्ध दुवै",
            "gotra": "विभिन्न"
          },
          "uray": {
            "name": "उराय",
            "description": "तुलाधर, कंसाकार, आदि समावेश गर्ने व्यापारी वर्ग",
            "occupation": "व्यापारीहरू, धातुकर्मीहरू, कारीगरहरू",
            "religion": "मुख्यतया बौद्ध",
            "gotra": "लागू हुँदैन"
          }
        },
        "agricultural": {
          "category": "कृषि र कारीगर वर्गहरू",
          "jyapu": {
            "name": "ज्यापू",
            "description": "किसान जाति, सबैभन्दा ठूलो नेवार समुदाय",
            "occupation": "किसानहरू, कुम्हारहरू",
            "religion": "हिन्दू र बौद्ध दुवै",
            "gotra": "विभिन्न"
          },
          "artisan": {
            "name": "कारीगर जातिहरू",
            "description": "विभिन्न विशेष शिल्प समुदायहरू",
            "occupation": "चित्रकारहरू, रंगरेजहरू, बुनकरहरू, नाइहरू, आदि।",
            "religion": "हिन्दू र बौद्ध दुवै",
            "gotra": "विभिन्न"
          }
        },
        "service": {
          "category": "सेवा र अन्य जातिहरू",
          "dyolah": {
            "name": "ड्योला",
            "description": "परम्परागत संगीतकारहरू र अन्त्येष्टि सहयोगीहरू",
            "occupation": "संगीतकारहरू, अन्त्येष्टि पुजारीहरू",
            "religion": "हिन्दू र बौद्ध दुवै",
            "gotra": "विभिन्न"
          },
          "pode": {
            "name": "पोदे",
            "description": "परम्परागत माछुवाहरू र झाडूवालाहरू",
            "occupation": "माछुवाहरू, नगरपालिका कर्मचारीहरू",
            "religion": "हिन्दू र बौद्ध दुवै",
            "gotra": "विभिन्न"
          }
        }
      },
      "language": {
        "subtitle": "नमस्ते",
        "title": "भाषा र साहित्य",
        "paragraph1": "नेपाल भाषा (जसलाई नेवारी पनि भनिन्छ) एक सिनो-तिब्बती भाषा हो जसको आफ्नै लिपि (प्रचलित, रञ्जना, र अन्य) छ। यसको १२औं शताब्दीदेखिको समृद्ध साहित्यिक परम्परा छ जसको सबैभन्दा पुरानो शिलालेख ११४० ईस्वीको हो।",
        "paragraph2": "यो भाषाले मल्ल अवधि (१२००-१७६९) मा नाटकीय कार्यहरू, कविताहरू, र धार्मिक ग्रन्थहरूको विपुल उत्पादनसहित स्वर्ण युग अनुभव गर्यो। राणा र शाह अवधिहरूमा दमनको बावजुद, १९९० को दशकदेखि भाषाले पुनर्जागरण अनुभव गरेको छ।",
        "paragraph3": "आज, नेपाल भाषा नेपालको राष्ट्रिय भाषाको रूपमा मान्यता प्राप्त छ र स्कूलहरूमा सिकाइन्छ र मिडिया प्रकाशनहरूमा प्रयोग गरिन्छ। भाषालाई डिजिटल बनाउने र यसको प्रयोगलाई बढावा दिने प्रयासहरू विभिन्न सांस्कृतिक संगठनहरू मार्फत जारी छन्।",
        "development": "ऐतिहासिक विकास",
        "ancient": {
          "period": "प्राचीन युग",
          "description": "नेपाल भाषा लिच्छवी अवधिमा संस्कृत र प्राकृत प्रभावहरूबाट उत्पन्न भएको थियो। प्रारम्भिक शिलालेखहरूले विकासशील साहित्यिक परम्परा देखाउँछन्।"
        },
        "malla": {
          "period": "मल्ल अवधि",
          "description": "नाटकीय कार्यहरू, कविताहरू, र धार्मिक ग्रन्थहरूसहित नेपाल भाषा साहित्यको स्वर्ण युग। भाषा राजकीय संरक्षणमा फलेको फुलेको थियो।"
        },
        "gorkha": {
          "period": "गोरखा शासन",
          "description": "नेपाली राज्य भाषा बन्दा आधिकारिक स्थितिमा गिरावट। नेपाल भाषा घरेलु र धार्मिक सन्दर्भहरूमा कायम रह्यो।"
        },
        "rana": {
          "period": "राणा युग",
          "description": "नेपाल भाषा प्रकाशन र शिक्षामा दमन। भाषा मौखिक परम्पराहरू र धार्मिक अभ्यासहरू मार्फत कायम राखिएको थियो।"
        },
        "modern": {
          "period": "आधुनिक पुनर्जागरण",
          "description": "१९२० को दशकदेखि पुनर्जागरण आन्दोलन। १९९० पछि लोकतन्त्रीकरणले मिडिया र शिक्षामा बढेको मान्यता र प्रयोग ल्यायो।"
        }
      },
      "arts": {
        "title": "कला र शिल्पकलाहरू",
        "paragraph1": "नेवार कारीगरहरूले हिमालय क्षेत्रमा सबैभन्दा उत्कृष्ट कला र वास्तुकला सिर्जना गरेका छन्। काठ, धातु, ढुङ्गा, र माटोमा उनीहरूको शिल्पकला प्राविधिक उत्कृष्टता र सौन्दर्य परिष्कारको लागि प्रसिद्ध छ।",
        "paragraph2": "नेवार वास्तुकारहरूद्वारा विकसित मन्दिर वास्तुकलाको विशिष्ट पगोडा शैलीले एसियाभर भवन निर्माण परम्पराहरूलाई प्रभावित गरेको छ। त्यस्तै, नेवार धातुकर्मीहरू र चित्रकारहरूले कार्यहरू सिर्जना गरे जुन बौद्ध संसारभर निर्यात गरिएको थियो।",
        "architecture": {
          "title": "वास्तुकला",
          "description": "जटिल काठको नक्काशी, ईंटा काम, र तहिला छानाहरूले विशेषता भएको पगोडा शैलीका मन्दिरहरू, आँगनहरू, र दरबार परिसरहरू।"
        },
        "metalwork": {
          "title": "धातु काम",
          "description": "कांस्य ढलाइ, रिपुसे काम, र अनुष्ठानिक वस्तुहरू जसमा मूर्तिहरू, घण्टीहरू, र अनुष्ठानिक भाँडाहरू समावेश छन् जसले असाधारण शिल्पकला प्रदर्शन गर्छन्।"
        },
        "woodcarving": {
          "title": "काठको नक्काशी",
          "description": "देवताहरू, पौराणिक प्राणीहरू, र फूलका डिजाइनहरू समावेश गर्ने जटिल झ्याल फ्रेमहरू, तोरणहरू, र मन्दिर स्ट्रटहरू।"
        },
        "paubha": {
          "title": "पौभा चित्रकला",
          "description": "तिब्बती थाङ्कासँग मिल्दोजुल्दो परम्परागत शैलीमा धार्मिक स्क्रोल चित्रहरू तर विशिष्ट नेवार विशेषताहरूसहित।"
        },
        "stone": {
          "title": "ढुङ्गाको मूर्तिकला",
          "description": "मन्दिरहरू र सार्वजनिक स्थानहरूमा भेटिने देवताहरू, रक्षकहरू, र सजावटी तत्वहरूको बारीकीसँग तरिएको ढुङ्गाको मूर्तिहरू।"
        },
        "pottery": {
          "title": "माटोका भाँडा",
          "description": "परम्परागत माटोका भाँडा बनाउने, विशेष गरी थिमी क्षेत्रमा, उपयोगितावादी र अनुष्ठानिक दुवै भाँडाहरू उत्पादन गर्दै।"
        }
      },
      "religion": {
        "title": "धर्म र रीतिरिवाजहरू",
        "paragraph1": "नेवार धार्मिक जीवन हिन्दू र बौद्ध धर्मको अद्वितीय संश्लेषणले विशेषता छ, जहाँ दुवै परम्पराहरू सह-अस्तित्वमा रहन्छन् र प्रायः एक अर्कामा प्रवेश गर्छन्। धेरै नेवारहरूले दुवै धर्महरू एकै समयमा अभ्यास गर्छन्, दुवै परम्पराहरूका चाडपर्वहरू र रीतिरिवाजहरूमा सहभागी हुन्छन्।",
        "paragraph2": "यो समन्वय मन्दिर परिसरहरूमा स्पष्ट छ जहाँ हिन्दू र बौद्ध दुवै देवताहरू साथसाथै पूजा गरिन्छ, र धार्मिक विशेषज्ञहरूमा जसले दुवै परम्पराहरूका रीतिरिवाजहरू प्रदर्शन गर्छन्। धेरै नेवार घरहरूले हिन्दू र बौद्ध दुवै देवताहरूको लागि श्रृंगार कायम राख्छन्।",
        "paragraph3": "अनुष्ठान क्यालेन्डर चाडपर्वहरू, जुलुसहरू, र जीवनचक्र समारोहहरूले घना भरिएको छ जसले समुदाय बन्धनहरू र धार्मिक पहिचानलाई बलियो बनाउँछ। यी रीतिरिवाजहरूले प्रायः बलिहरूको जटिल व्यवस्था, संगीत, र मुखौटा नृत्यहरू समावेश गर्छन्।",
        "festivals": "प्रमुख चाडपर्वहरू",
        "significance": "महत्त्व",
        "indra": {
          "name": "इन्द्र जात्रा",
          "description": "स्वर्गका राजा इन्द्रलाई सम्मान गर्ने आठ दिने चाड, जसमा मुखौटा नृत्यहरू, जुलुसहरू, र जीवित देवी कुमारीको प्रदर्शन समावेश छ।",
          "significance": "मन्सुनको अन्त्य र बालीको मौसमको सुरुवातलाई मनाउँछ; इन्द्रको पृथ्वीमा अवतरणलाई पनि सम्झाउँछ।"
        },
        "gunla": {
          "name": "गुन्ला",
          "description": "विभिन्न स्तुपहरू र मठहरूमा दैनिक जुलुसहरू, प्रार्थनाहरू, र तीर्थयात्राहरूसहित बौद्ध पवित्र महिना।",
          "significance": "बुद्धको वर्षा ऋतुको रोकाइलाई सम्झाउँछ; उपवास, ध्यान, र भक्ति संगीतसहित मनाइन्छ।"
        },
        "samyak": {
          "name": "सम्यक",
          "description": "प्रत्येक १२ वर्षमा (वा केही समुदायहरूमा ५ वर्षमा) आयोजना गरिने ठूलो दान समारोह, जसमा हजारौं बुद्ध मूर्तिहरू समावेश छन्।",
          "significance": "बौद्ध भिक्षुहरूलाई दान मार्फत पुण्य अर्जनको अवसर; समुदाय बन्धनहरू र धार्मिक भक्तिलाई पुनः पुष्टि गर्छ।"
        },
        "bisket": {
          "name": "बिस्केट जात्रा",
          "description": "रथ जुलुसहरू, रस्साकुच प्रतियोगिताहरू, र पौराणिक घटनाहरूको नाटकीय पुनः अभिनयसहित मनाइने नयाँ वर्ष चाड।",
          "significance": "नेपाली नयाँ वर्षलाई चिन्ह लगाउँछ; राम्रोको नराम्रोमाथिको जितलाई प्रतीकात्मक बनाउँछ र समयको नवीनीकरण।"
        },
        "mohani": {
          "name": "मोहनी",
          "description": "दशैं जस्तै सबैभन्दा महत्त्वपूर्ण नेवार चाड, जसमा परिवार सभाहरू, भोजहरू, र देवी दुर्गाको अनुष्ठानिक पूजा समावेश छ।",
          "significance": "देवी दुर्गाको राक्षस महिषासुरमाथिको जितलाई मनाउँछ; परिवार एकतालाई जोड दिन्छ र हतियार/उपकरणहरूको आशीर्वाद।"
        },
        "sithi": {
          "name": "सिथि नखा",
          "description": "पानीको स्रोतहरू, कुँवाहरू, र पोखरीहरू सफा गर्ने लागि समर्पित चाड; नागहरू (सर्प देवताहरू) को पूजा पनि समावेश छ।",
          "significance": "मन्सुनको सुरुवातलाई चिन्ह लगाउँछ; शुद्धता, वातावरणीय हेरचेर, र पानीजन्य रोगहरूबाट सुरक्षालाई जोड दिन्छ।"
        }
      },
      "sites": {
        "title": "ऐतिहासिक स्थलहरू",
        "paragraph": "काठमाडौं उपत्यकामा सात युनेस्को विश्व सम्पदा स्थलहरू छन्, जसको अधिकांशले नेवार वास्तुकला र कलात्मक उपलब्धिको शिखर प्रतिनिधित्व गर्छन्। यी स्थलहरू पूजा र समुदाय जीवनको जीवित केन्द्रहरू बनेर रहन्छन्।",
        "kathmandu": {
          "title": "काठमाडौं दरबार क्षेत्र",
          "description": "मन्दिरहरू र आँगनहरूसहित ऐतिहासिक राजदरबार परिसर"
        },
        "patan": {
          "title": "पाटन दरबार क्षेत्र",
          "description": "मल्ल अवधिको कलात्मकताको वास्तुकला प्रदर्शन"
        },
        "bhaktapur": {
          "title": "भक्तपुर दरबार क्षेत्र",
          "description": "प्रतिष्ठित वास्तुकलासहित राम्ररी संरक्षित मध्यकालीन शहर"
        },
        "swayambhunath": {
          "title": "स्वयम्भूनाथ",
          "description": "उपत्यकालाई मुख्यतया देख्ने प्राचीन बौद्ध स्तुप परिसर"
        },
        "pashupatinath": {
          "title": "पशुपतिनाथ",
          "description": "बागमती नदीको किनारामा पवित्र हिन्दू मन्दिर परिसर"
        },
        "changu": {
          "title": "चाँगु नारायण",
          "description": "बारीक नक्काशीसहित प्राचीन विष्णु मन्दिर"
        },
        "boudhanath": {
          "title": "बौद्धनाथ",
          "description": "विशाल बौद्ध स्तुप र तीर्थयात्रा स्थल"
        }
      },
      "cuisine": {
        "title": "खानपान",
        "paragraph1": "नेवार खानपान आफ्नो विविधता र जटिल तयारीको लागि परिचित छ, जसले प्रायः खमीरित सामग्रीहरू र जटिल मसलाको मिश्रण समावेश गर्छ। भोजनहरू परम्परागत रूपमा पातको प्लेटहरू वा पिटिएको धातुका भाँडाहरूमा विशिष्ट क्रममा परोसिन्छ।",
        "paragraph2": "नेवार पाककला संस्कृतिमा बारा (दालको पकौडा), योमरी (चामलको पिठोको मोमो), चोइला (मसलादार ग्रिल गरिएको मासु), र विभिन्न खमीरित तयारीहरू जसमा ऐला (रक्सी) र विभिन्न अचारहरू समावेश गर्ने अद्वितीय खानाहरू समावेश छन्।",
        "paragraph3": "खानाले रीतिरिवाजहरू र चाडपर्वहरूमा केन्द्रीय भूमिका खेल्छ, जहाँ विशेष अवसरहरूको लागि विशेष खानाहरू तयार गरिन्छ। नेवार भोज, जसलाई भोज भनिन्छ, उत्सवहरू र धार्मिक समारोहहरूमा परोसिने जटिल बहु-कोर्स भोजन हो।",
        "imageAlt": "परम्परागत नेवार खानपान प्रदर्शन",
        "imageCaption": "विभिन्न खानाहरूसहित परम्परागत नेवार भोज (स्रोत: नेपाल पर्यटन बोर्ड)"
      },
      "diaspora": {
        "title": "प्रवासी समुदायहरू",
        "paragraph1": "नेवार प्रवासी समुदायहरूले विश्वको विभिन्न भागहरूमा आफूलाई स्थापित गरेका छन्, स्थानीय सन्दर्भहरूमा ढल्दै सांस्कृतिक परम्पराहरू कायम राख्छन्। यी समुदायहरूले प्रायः भाषा, रीतिरिवाजहरू, र पहिचान संरक्षण गर्न सांस्कृतिक संघहरू गठन गर्छन्।",
        "paragraph2": "भौगोलिक फैलावटको बावजुद, प्रवासी नेवारहरूले डिजिटल मिडिया, आवधिक सभाहरू, र प्रमुख चाडपर्वहरूमा सहभागिता मार्फत जडानहरू कायम राख्छन्। धेरैले महत्त्वपूर्ण जीवनचक्र रीतिरिवाजहरू र चाडपर्वहरूको लागि नेपाल फर्कन्छन्।",
        "india": {
          "region": "भारत",
          "description": "सिक्किम, दार्जिलिङ, कालिम्पोङ, र उत्तर-पूर्वी भारतका अन्य भागहरूमा महत्त्वपूर्ण नेवार समुदायहरू, सांस्कृतिक परम्पराहरू कायम राख्दै।"
        },
        "tibet": {
          "region": "तिब्बत",
          "description": "ऐतिहासिक व्यापार जडानहरूले ल्हासा र अन्य तिब्बती शहरहरूमा नेवार बस्तीहरू ल्यायो, विशेष गरी व्यापारी र कारीगर समुदायहरूमा।"
        },
        "west": {
          "region": "यूके, यूएसए, अस्ट्रेलिया",
          "description": "शिक्षा र प्रवास मार्फत स्थापित प्रवासी समुदायहरू, विदेशमा सांस्कृतिक संघहरू र चाडपर्वहरू कायम राख्दै।"
        }
      },
      "contemporary": {
        "title": "समकालीन जीवन",
        "demographics": {
          "title": "जनसांख्यिकी",
          "description": "२०११ को नेपाल जनगणना अनुसार, नेवारहरूको संख्या लगभग १.३ मिलियन छ, जुन नेपालको जनसंख्याको लगभग ५% प्रतिनिधित्व गर्छ। ऐतिहासिक रूपमा काठमाडौं उपत्यकामा केन्द्रित भए तापनि महत्त्वपूर्ण नेवार प्रवासी समुदायहरू अहिले नेपालभर र भारत, यूनाइटेड किंगडम, संयुक्त राज्य अमेरिका, र अस्ट्रेलिया लगायतका देशहरूमा छन्।"
        },
        "preservation": {
          "title": "सांस्कृतिक संरक्षण",
          "description": "नेपाल र विदेशमा धेरै संगठनहरूले नेवार भाषा र संस्कृति संरक्षण र प्रवर्द्धन गर्न काम गर्छन्। यसमा नेपाल भाषा मन्खा खला, नेवाः अर्गनाइजेसन अफ अमेरिका, र विभिन्न स्थानीय गुथी संगठनहरू समावेश छन् जसले परम्परागत अभ्यासहरू र चाडपर्वहरू कायम राख्छन्।"
        },
        "challenges": {
          "title": "आधुनिक चुनौतीहरू",
          "description": "शहरीकरण, प्रवास, र वैश्वीकरणले नेवार संस्कृति संरक्षणलाई चुनौतीहरू प्रस्तुत गर्छन्। यद्यपि, युवा पुस्ताहरूमा नवीकृत रुचि र डिजिटल अभिलेखीकरण पहलहरूले सांस्कृतिक निरन्तरताको लागि आशा प्रदान गर्छन्।"
        },
        "imageAlt": "समकालीन नेवार समुदाय कार्यक्रम",
        "imageCaption": "काठमाडौंमा नेवार सांस्कृतिक चाड (स्रोत: नेपाल पर्यटन बोर्ड)"
      },
      "oral": {
        "title": "मौखिक इतिहासहरू",
        "cardTitle": "समुदाय आवाजहरू",
        "cardDescription": "व्यक्तिगत अनुभवहरू र ऐतिहासिक स्मृतिहरू साझा गर्ने समुदाय सदस्यहरूसँग रेकर्ड गरिएको अन्तर्वार्ताहरू",
        "collectionText": "मौखिक इतिहास संग्रह हाल प्रगतिमा छ। समुदायका वृद्धहरू, कारीगरहरू, र सांस्कृतिक अभ्यासकर्ताहरूसँग उनीहरूका अनुभवहरू र ज्ञान साझा गर्ने अन्तर्वार्ताहरूको लागि चाँडै फेरि जाँच गर्नुहोस्।",
        "shareButton": "आफ्नो कथा साझा गर्नुहोस्"
      }
    },
    "values": {
      "hero": {
        "title": "नेवार पहिचान संरक्षण: विजन र मूल्यहरू",
        "subtitle": "सयौं वर्ष फैलिएको सभ्यता मनाउँदै",
        "description": "आउँदा पुस्ताहरूको लागि हाम्रो भाषा, कला, धर्म, र परम्पराहरू जीवित राख्दै",
        "cta": "हाम्रा मूल्यहरू अन्वेषण गर्नुहोस्"
      },
      "vision": {
        "title": "हाम्रो विजन",
        "language": {
          "title": "भाषा संरक्षण",
          "subtitle": "नेपाल भाषाको प्रवर्द्धन",
          "description": "हाम्रो भाषा डिजिटल युगमा फस्टाओस् भन्ने सुनिश्चित गर्न स्कूलहरू, अनलाइन पाठ्यक्रमहरू, र डिजिटल कथाकथन स्थापना गर्दै।"
        },
        "culture": {
          "title": "सांस्कृतिक निरन्तरता",
          "subtitle": "हाम्रा चाडपर्वहरू मनाउँदै",
          "description": "इन्द्र जात्रा, गुन्ला, सम्यक, र बिस्केट जात्रा जस्ता चाडपर्वहरू जीवन्त समुदाय उत्सव बनेर रहोस् भन्ने सुनिश्चित गर्दै।"
        },
        "arts": {
          "title": "कला र शिल्प स्थिरता",
          "subtitle": "परम्परागत कलाहरू सुरक्षा",
          "description": "पौभा चित्रकला, काठको नक्काशी, धातु काम, र पगोडा-शैली वास्तुकलाको शिक्षा र संरक्षण।"
        },
        "community": {
          "title": "समुदाय एकता",
          "subtitle": "गुथी प्रणालीहरूलाई बलियो बनाउँदै",
          "description": "सामाजिक जिम्मेवारी, अन्तर-जाति सद्भाव, र समुदाय सहयोग प्रणालीहरूलाई बढावा दिँदै।"
        },
        "diaspora": {
          "title": "वैश्विक प्रवासी संलग्नता",
          "subtitle": "विश्वभरका नेवारहरूलाई जडान गर्दै",
          "description": "विदेशमा रहेका नेवारहरूलाई सांस्कृतिक गतिविधिहरू र परम्पराहरूसँग जडान हुन मंचहरू सिर्जना गर्दै।"
        },
        "timeline": {
          "title": "एआई सांस्कृतिक टाइमलाइन",
          "subtitle": "हाम्रो इतिहास अन्वेषण गर्नुहोस्",
          "description": "सयौं वर्षदेखि नेवार संस्कृति र मूल्यहरूको विकास देखाउने इन्टरएक्टिभ टाइमलाइन",
          "cta": "टाइमलाइन हेर्नुहोस्"
        }
      },
      "coreValues": {
        "title": "हाम्रो मुख्य मूल्यहरू",
        "subtitle": "हाम्रो समुदायलाई परिभाषित गर्ने मार्गनिर्देशन सिद्धान्तहरू"
      },
      "language": {
        "title": "भाषा र साहित्य",
        "description": "नेपाल भाषा संरक्षण र प्रवर्द्धन",
        "details": "हामी नेपाल भाषा साक्षरता, पाण्डुलिपिहरू, कविताहरू, परम्परागत गीतहरू, र कथाकथनमा केन्द्रित छौं। हाम्रा पहलहरूमा आधुनिक एपहरू, एआई-सहायता प्राप्त भाषा अनुवाद, र युवाहरूलाई संलग्न गर्ने कथाकथन उपकरणहरू समावेश छन्।"
      },
      "religion": {
        "title": "धर्म र रीतिरिवाजहरू",
        "description": "हिन्दू-बौद्ध समन्वयलाई सम्मान",
        "details": "हामी हिन्दू र बौद्ध परम्पराहरूको अद्वितीय मिश्रण मनाउँछौं, जाति-आधारित रीतिरिवाजहरू (राजोपाध्याय, वज्राचार्य) संरक्षण गर्छौं, र एआई-आधारित इन्टरएक्टिभ अनुष्ठान सिमुलेशनहरू सिर्जना गर्छौं।"
      },
      "arts": {
        "title": "कला र शिल्पकलाहरू",
        "description": "परम्परागत कलात्मकता कायम राख्दै",
        "details": "हामी शिक्षुता कार्यक्रमहरू र डिजिटल संरक्षण मार्फत पगोडा मन्दिर वास्तुकला, काठ र धातु नक्काशीहरू, पौभा चित्रहरू, र संगीत वाद्ययन्त्रहरूलाई समर्थन गर्छौं।"
      },
      "festivals": {
        "title": "चाडपर्वहरू र सम्पदा",
        "description": "हाम्रो सांस्कृतिक क्यालेन्डर मनाउँदै",
        "details": "हामी इन्द्र जात्रा, गुन्ला, सम्यक, र बिस्केट जात्रा जस्ता चाडपर्वहरू आयोजना गर्छौं र कागजातमा उतार्छौं, उनीहरूको ऐतिहासिक महत्त्वलाई एनिमेटेड क्यालेन्डरहरू र शैक्षिक स्रोतहरू मार्फत उजागर गर्दै।"
      },
      "unity": {
        "title": "एकता र सामाजिक सद्भाव",
        "description": "समुदाय बन्धनहरूलाई बढावा दिँदै",
        "details": "हामी समुदाय परियोजनाहरू र एआई-सुझावित सांस्कृतिक पहलहरू मार्फत अन्तर-जाति सहकार्य, पारस्परिक सम्मान, र सामुदायिक जिम्मेवारीहरूलाई बढावा दिन्छौं।"
      },
      "media": {
        "title": "सांस्कृतिक प्रदर्शन",
        "subtitle": "मिडिया मार्फत हाम्रो समृद्ध विरासत अन्वेषण गर्नुहोस्",
        "cta": "सबै मिडिया हेर्नुहोस्",
        "item1": {
          "title": "इन्द्र जात्रा चाड",
          "description": "स्वर्गका राजा इन्द्रलाई सम्मान गर्ने वार्षिक चाड"
        },
        "item2": {
          "title": "पौभा कला परम्परा",
          "description": "नेवार बौद्ध धर्मका पवित्र धार्मिक चित्रहरू"
        },
        "item3": {
          "title": "नेवार वास्तुकला",
          "description": "मन्दिर वास्तुकलाको अद्वितीय पगोडा शैली"
        },
        "item4": {
          "title": "परम्परागत संगीत",
          "description": "नेवार सांगीतिक वाद्ययन्त्रहरू र प्रदर्शनहरू"
        },
        "item5": {
          "title": "पाककला विरासत",
          "description": "परम्परागत नेवार खानपान र पाककला विधिहरू"
        },
        "item6": {
          "title": "धार्मिक समारोहहरू",
          "description": "हिन्दू-बौद्ध रीतिरिवाजहरू र अभ्यासहरू"
        }
      },
      "community": {
        "title": "वैश्विक नेवार समुदाय",
        "subtitle": "विश्वभरका नेवारहरूलाई जडान गर्दै",
        "members": "सक्रिय सदस्यहरू",
        "activities": "मुख्य गतिविधिहरू",
        "cta": "आफ्नो स्थानीय समुदायमा सामेल हुनुहोस्"
      },
      "cta": {
        "title": "नेवार विरासत संरक्षणमा हामीसँग सामेल हुनुहोस्",
        "subtitle": "तपाईंको सहभागिताले आउँदा पुस्ताहरूको लागि हाम्रो संस्कृति जीवित राख्न मद्दत गर्छ",
        "join": "सदस्य बन्नुहोस्",
        "donate": "दान गर्नुहोस्"
      }
    },
    "news": {
      "title": "समाचार र अपडेटहरू",
      "subtitle": "नवीनतम समुदाय समाचार, कार्यक्रमहरू, र घोषणाहरूसँग जडान हुनुहोस्",
      "todaysHighlight": "आजको हाइलाइट",
      "latestUpdates": "नवीनतम अपडेटहरू",
      "readMore": "थप पढ्नुहोस्",
      "readFullStory": "पूर्ण कथा पढ्नुहोस्",
      "aiSummary": "एआई सारांश",
      "aiSummaryAvailable": "एआई सारांश उपलब्ध छ",
      "comments": "टिप्पणीहरू",
      "noNewsFound": "तपाईंको मापदण्डहरूसँग मेल खाँदा कुनै समाचार फेला परेन",
      "tryChangingFilters": "तपाईंका फिल्टरहरू वा खोज शब्दहरू परिवर्तन गरेर प्रयास गर्नुहोस्",
      "categories": {
        "community": "समुदाय",
        "event": "कार्यक्रमहरू",
        "culture": "संस्कृति",
        "member": "सदस्य स्पटलाइट",
        "opportunity": "अवसरहरू",
        "national": "राष्ट्रिय",
        "international": "अन्तर्राष्ट्रिय"
      },
      "filters": "फिल्टरहरू",
      "searchPlaceholder": "समाचार, ट्यागहरू, लेखकहरू खोज्नुहोस्...",
      "categoriesFilter": "श्रेणीहरू",
      "allCategories": "सबै श्रेणीहरू",
      "sortBy": "क्रमबद्ध गर्नुहोस्",
      "newest": "नयाँ पहिले",
      "oldest": "पुरानो पहिले",
      "mostPopular": "सबैभन्दा लोकप्रिय",
      "dateRange": "मिति दायरा",
      "popularTags": "लोकप्रिय ट्यागहरू",
      "resetFilters": "सबै फिल्टरहरू रिसेट गर्नुहोस्",
      "stayUpdated": "अद्यावधिक रहनुहोस्",
      "subscriptionDescription": "तपाईंको इनबक्समा दैनिक समुदाय अपडेटहरू प्राप्त गर्नुहोस्",
      "subscriptionSuccess": "सफलतापूर्वक सदस्यता लिइयो!",
      "welcomeMessage": "हाम्रो समुदाय न्यूजलेटरमा स्वागत छ!",
      "emailPlaceholder": "तपाईंको.ईमेल@उदाहरण.com",
      "subscribeNow": "अहिले सदस्यता लिनुहोस्",
      "privacyNotice": "हामी तपाईंको गोपनीयतालाई सम्मान गर्छौं। कुनै पनि समयमा सदस्यता रद्द गर्नुहोस्।",
      "newsArchive": "समाचार अभिलेख",
      "viewFullArchive": "पूर्ण अभिलेख हेर्नुहोस्",
      "communityStats": "समुदाय तथ्याङ्क",
      "totalArticles": "कुल लेखहरू",
      "thisMonth": "यो महिना",
      "activeUsers": "सक्रिय पाठकहरू"
    },
    "leadershipPage": {
      "title": "नेवार समाजको नेतृत्व र समुदाय",
      "subtitle": "हाम्रा नेताहरू, हाम्रा परम्पराहरू, र १००० बलियो हाम्रो एकीकृत नेवार परिवारलाई मनाउँदै।",
      "intro": "हाम्रो लगभग १००० परिवारको समुदाय जिम्मेवार नेतृत्व, मार्गदर्शन, र सामुदायिक निर्णय निर्माण मार्फत नेवा संस्कृति, भाषा, धर्म, र सामाजिक एकता संरक्षण गर्न समर्पित छ।"
    },
    "leadershipSection": {
      "title": "हाम्रो नेतृत्व संरचना"
    },
    "leaders": {
      "rajesh": {
        "name": "महेश डंगोल",
        "role": "अध्यक्ष",
      "bio": "समाजलाई दृष्टि र समर्पणसहित नेतृत्व गर्दै, महेशले हाम्रो सांस्कृतिक सम्पदा जोगाउन र एकता मजबुत बनाउन योगदान दिइरहेका छन्।",
      "contributions": [
        "सांस्कृतिक संरक्षणमा नेतृत्व",
        "समुदायिक विकास पहल",
        "संगठनको दृष्टि मजबुत"
      ]
      },
      "sunita": {
      "name": "ज्ञान कुमार डंगोल",
      "role": "उपाध्यक्ष",
      "bio": "ज्ञानले समाज सञ्चालन र सदस्यबीच सम्बन्ध मजबुत बनाउन आफ्नो अनुभव प्रयोग गर्दै निरन्तर सहयोग पुर्याइरहेका छन्।",
      "contributions": [
        "समुदायिक सञ्चालन संयोजन",
        "सदस्य सम्बन्ध मजबुत",
        "संगठन वृद्धि सहयोग"
      ]
      },
      "bikash": {
        "name": "रामहरी डंगोल",
      "role": "बैठक संयोजक",
      "bio": "रामहरीले समुदायका बैठक र कार्यक्रमहरू प्रभावकारी ढंगले सञ्चालन गर्न योगदान पुर्याइरहेका छन्।",
      "contributions": [
        "बैठक आयोजना",
        "कार्यक्रम संयोजन",
        "सदस्य सहभागिता बढाएको"
      ]
      },
      "anita": {
     "name": "प्रकाश डंगोल",
      "role": "सोसल मिडिया र मार्केटिङ",
      "bio": "प्रकाशले डिजिटल उपस्थिति विस्तार गर्दै समाजलाई नयाँ अवसरहरूसँग जोडिरहेका छन्।",
      "contributions": [
        "डिजिटल पहुँच विस्तार",
        "सोसल मिडिया सञ्चालन",
        "नयाँ अवसर सिर्जना"
      ]
      }
    },
    "communitySection": {
      "title": "हाम्रो नेवार समाज समुदाय",
      "aboutTitle": "हाम्रो समुदायको बारेमा",
      "aboutText": "लगभग १०० परिवारहरूसँग, हाम्रो नेवार समाज हाम्रो समृद्ध सांस्कृतिक विरासत, भाषा, र परम्पराहरू संरक्षण गर्न र एक बलियो समुदाय र परस्पर सहयोगको भावना बढाउन समर्पित छ।",
      "valuesText": "हामी जिम्मेवारी, मार्गदर्शन, र सामुदायिक निर्णय निर्माणलाई मूल्याङ्कन गर्छौं, जसले हाम्रा परम्पराहरू आउँदा पुस्ताहरूलाई हस्तान्तरण गरिन्छ भने आधुनिक समयमा ढल्छन् भन्ने सुनिश्चित गर्छ।",
      "programsTitle": "मुख्य कार्यक्रमहरू र पहलहरू",
      "program1": "सांस्कृतिक वर्कशपहरू र भाषा कक्षाहरू",
      "program2": "चाडपर्व उत्सवहरू र धार्मिक समारोहहरू",
      "program3": "युवा मार्गदर्शन र शैक्षिक कार्यक्रमहरू",
      "program4": "समुदाय सहयोग र कल्याण पहलहरू",
      "joinButton": "समुदाय छलफलमा सामेल हुनुहोस्",
      "photosTitle": "समुदाय क्षणहरू",
      "testimonialTitle": "हाम्रा सदस्यहरूले के भन्छन्",
      "testimonial": "नेवार समाजको भाग हुनाले मलाई आफ्नो जरासँग जडान गर्न र उही सांस्कृतिक मूल्यहरू साझा गर्ने मानिसहरूसँग सार्थक सम्बन्धहरू निर्माण गर्न मद्दत गरेको छ। नेतृत्वले साँच्चै हाम्रो विरासत संरक्षणको लागि हेरचेर गर्छ।",
      "memberName": "सीता मल्ल, समुदाय सदस्य"
    },
    "culturalSection": {
      "title": "सांस्कृतिक नेतृत्व र शिक्षा",
      "languageTitle": "नेवार भाषा संरक्षण",
      "languageText": "हाम्रा वृद्धहरूले संरचित कक्षाहरू, कुराकानी अभ्यास, र सांस्कृतिक निमज्जन मार्फत नेपाल भाषा सिक्न युवाहरूलाई मार्गदर्शन गर्छन्। हामीले सिकाइ सामग्रीहरू र डिजिटल स्रोतहरू विकास गरेका छौं जसले भाषा अधिग्रहण सबै पुस्ताहरूको लागि सजिलो बनाउँछ।",
      "learnButton": "नेवार भाषा सिक्नुहोस्",
      "eventsTitle": "सांस्कृतिक कार्यक्रम नेतृत्व",
      "eventsText": "हाम्रा सांस्कृतिक नेताहरूले रीतिरिवाजहरू, चाडपर्व परम्पराहरू, संगीत, र नृत्य सिकाउँछन् जसले हाम्रो समृद्ध विरासतको निरन्तरता सुनिश्चित गर्छ। हामी दशैं, तिहार, र नयाँ वर्ष उत्सव जस्ता प्रमुख चाडपर्वहरू अगाडि युवा पुस्ताहरूलाई ज्ञान हस्तान्तरण गर्न वर्कशपहरू आयोजना गर्छौं।",
      "volunteerButton": "कार्यक्रमहरूको लागि स्वयंसेवक बन्नुहोस्",
      "artsTitle": "परम्परागत कलाहरू संरक्षण",
      "artsText": "हामी परम्परागत नेवार कलाहरूका गुरुहरूलाई - जस्तै माटोका भाँडा, चित्रकला, धातु काम, र काठको नक्काशी - शिक्षुहरूलाई तालिम दिन र यी कौशलहरू नलोपिने सुनिश्चित गर्न समर्थन गर्छौं। हाम्रो समुदायले कारीगरहरूलाई उनीहरूको शिल्प प्रदर्शन गर्ने र कायम राख्ने स्रोतहरू र मंचहरू प्रदान गर्छ।",
      "supportButton": "परम्परागत कलाहरूलाई समर्थन गर्नुहोस्",
      "continuityTitle": "सांस्कृतिक निरन्तरता सुनिश्चित गर्दै",
      "mentorship": "वृद्ध-युवा मार्गदर्शन",
      "mentorshipText": "सांस्कृतिक ज्ञान स्थानान्तरणको लागि वृद्धहरूलाई युवाहरूसँग जोड्ने संरचित कार्यक्रमहरू",
      "documentation": "सांस्कृतिक कागजातीकरण",
      "documentationText": "आउँदा पुस्ताहरूको लागि रीतिरिवाजहरू, कथाहरू, र परम्पराहरू रेकर्ड गर्दै",
      "events": "समुदाय कार्यक्रमहरू",
      "eventsText2": "सांस्कृतिक अभ्यासहरू र समुदाय बन्धनहरूलाई बलियो बनाउने नियमित सभाहरू"
    },
    "tabs": {
      "leadership": "नेतृत्व",
      "community": "समुदाय र सन्देशहरू"
    },
    "messagingSection": {
      "title": "समुदाय समूहहरू र सन्देशहरू",
      "groupsTitle": "समुदाय समूहहरू",
      "members": "सदस्यहरू",
      "createGroup": "नयाँ समूह सिर्जना गर्नुहोस्",
      "aiName": "समुदाय एआई सहायक",
      "welcomeMessage": "नमस्ते! म हाम्रो समुदाय, नेतृत्व, र कार्यक्रमहरूको बारेमा तपाईंका प्रश्नहरूको जवाफ दिन मद्दत गर्न यहाँ छु। स्वतन्त्र रूपमा मलाई केही पनि सोध्नुहोस्!",
      "justNow": "अहिले नै",
      "sampleQuestion": "नेवारहरूले कुन चाडपर्वहरू मनाउँछन्?",
      "sampleResponse": "हामी सबै प्रमुख नेवार चाडपर्वहरू मनाउँछौं जसमा दशैं, तिहार, होली, र इन्द्र जात्रा र बिस्केट जात्रा जस्ता हाम्रा अद्वितीय नेवार चाडपर्वहरू समावेश छन्। हामी वर्षभरि विभिन्न रीतिरिवाजहरू र समारोहहरू पनि मनाउँछौं।",
      "placeholder": "आफ्नो सन्देश टाइप गर्नुहोस्...",
      "send": "पठाउनुहोस्",
      "aiHint": "हाम्रो एआई सहायकले नेतृत्व, कार्यक्रमहरू, र समुदाय गतिविधिहरूको बारेमा प्रश्नहरूको जवाफ दिन सक्छ"
    },
    "messaging": {
      "you": "तपाईं",
      "aiName": "समुदाय एआई सहायक"
    },
    "aiResponses": {
      "adaxai": "हाम्रो हालको अडाखे राजेश श्रेष्ठ हुन्, जो २०२० देखि सेवा गर्दै आएका छन्। उहाँ सबै समुदाय निर्णयहरू र समारोहहरूको हेरचेर गर्नुहुन्छ।",
      "sachib": "सुनीता महर्जन हाम्रो सचिव (सचिव) हुन्। उनले कार्यक्रमहरू आयोजना गर्छिन् र सबै समुदाय संचारहरू व्यवस्थापन गर्छिन्।",
      "sadasai": "हामीसँग धेरै सदस्य (कमिटी सदस्य) छन् जसमा बिकास डंगोल समावेश छन् जो समुदाय आउटरीच, शिक्षा, र कल्याण परियोजनाहरूमा केन्द्रित छन्।",
      "festival": "हामी सबै प्रमुख नेवार चाडपर्वहरू मनाउँछौं जसमा दशैं, तिहार, होली, र इन्द्र जात्रा र बिस्केट जात्रा जस्ता हाम्रा अद्वितीय नेवार चाडपर्वहरू समावेश छन्।",
      "join": "हाम्रो समुदायमा सामेल हुनको लागि, कृपया हाम्रो वेबसाइटमा सदस्यता खण्ड भ्रमण गर्नुहोस् वा हाम्रो सचिवलाई secretary@newarsamaj.org मा सम्पर्क गर्नुहोस्",
      "language": "हामी हरेक शनिबार समुदाय केन्द्रमा नेवार भाषा कक्षाहरू प्रदान गर्छौं। तपाईं हाम्रो अनलाइन भाषा विनिमय कार्यक्रममा पनि सामेल हुन सक्नुहुन्छ।",
      "default": "तपाईंको सन्देशको लागि धन्यवाद। हाम्रो समुदाय टोलीले चाँडै जवाफ दिनेछ। यसै बीच, हाम्रो नेतृत्व वा समुदाय गतिविधिहरूको बारेमा केही विशेष जान्न चाहनुहुन्छ?"
    },
    "communityGroups": {
      "general": {
        "name": "सामान्य छलफल",
        "description": "सामान्य समुदाय छलफलहरू र घोषणाहरू"
      },
      "cultural": {
        "name": "सांस्कृतिक कार्यक्रमहरू",
        "description": "सांस्कृतिक कार्यक्रमहरू र चाडपर्वहरूको योजना र छलफल"
      },
      "language": {
        "name": "भाषा सिकाइ",
        "description": "नेवार भाषा सिकाइ र अभ्यास समूह"
      },
      "youth": {
        "name": "युवा विंग",
        "description": "युवा समुदाय सदस्यहरूको लागि गतिविधिहरू र छलफलहरू"
      }
    },
    "culture": {
      "architecture": "वास्तुकला",
      "architectureDesc": "प्राचीन पगोडा-शैलीका मन्दिरहरू, आँगनहरू, र जटिल काठको नक्काशीहरू",
      "art": "कला र शिल्पकलाहरू",
      "artDesc": "परम्परागत चित्रकला, मूर्तिकला, धातु काम, र हस्तशिल्पहरू",
      "festivals": "चाडपर्वहरू",
      "festivalsDesc": "वर्षभरि रंगीन चाडपर्वहरू अद्वितीय रीतिरिवाजहरूसहित",
      "cuisine": "खानपान",
      "cuisineDesc": "विविध स्वादहरू र खानाहरूसहित अद्वितीय पाककला परम्पराहरू",
      "title": "नेवार संस्कृति र सम्पदा",
      "description": "नेवार समुदायको समृद्ध सांस्कृतिक टेपेस्ट्रीमा डुब्नुहोस्। प्राचीन मन्दिरहरू, जीवन्त चाडपर्वहरू, परम्परागत कलाहरू, र शताब्दीदेखि हाम्रो पहिचानलाई आकार दिएका कालातीत अभ्यासहरू अन्वेषण गर्नुहोस्।",
      "stats": {
        "temples": "पवित्र मन्दिरहरू",
        "festivals": "वार्षिक चाडपर्वहरू",
        "artForms": "कला रूपहरू",
        "heritageYears": "विरासतको वर्षहरू"
      },
      "tabs": {
        "temples": "मन्दिरहरू र सम्पदा",
        "festivals": "चाडपर्वहरू",
        "practices": "सांस्कृतिक अभ्यासहरू"
      },
      "cta": {
        "title": "हाम्रो विरासत सँगै संरक्षण गर्नुहोस्",
        "description": "नेवार संस्कृतिको सुन्दर परम्पराहरू संरक्षण र साझा गर्न हाम्रो समुदायमा सामेल हुनुहोस्। तपाईं आफ्नो विरासत बारे सिकिरहनुहुन्छ वा पहिलो पटक खोजिरहनुहुन्छ, प्रत्येक योगदानले हाम्रो संस्कृति जीवित राख्न मद्दत गर्छ।",
        "joinCommunity": "हाम्रो समुदायमा सामेल हुनुहोस्",
        "learnMore": "थप जान्नुहोस्"
      },
      "temples": {
        "title": "नेपालका पवित्र मन्दिरहरू",
        "subtitle": "आध्यात्मिक विरासत र वास्तुकला अज्चर्यहरू अन्वेषण गर्नुहोस्",
        "description": "नेपालका मन्दिरहरू केवल पूजाका स्थलहरू नभई कला, संस्कृति, र इतिहासका जीवित संग्रहालयहरू हुन् जसले समयको परीक्षण झेलेका छन्।",
        "architecture": "वास्तुकला",
        "established": "स्थापना भएको",
        "heritageTitle": "हाम्रो विरासत सँगै संरक्षण गर्नुहोस्",
        "heritageDescription": "नेवार संस्कृति र नेपाली विरासतको सुन्दर परम्पराहरू संरक्षण र साझा गर्न हाम्रो समुदायमा सामेल हुनुहोस्।",
        "exploreMore": "थप मन्दिरहरू अन्वेषण गर्नुहोस्"
      }
    },
    "temples": {
      "search": {
        "placeholder": "नाम, स्थान, वा महत्त्वद्वारा मन्दिरहरू खोज्नुहोस्..."
      },
      "filters": {
        "all": "सबै मन्दिरहरू",
        "allDistricts": "सबै जिल्लाहरू",
        "unesco": "युनेस्को विरासत",
        "popular": "सबैभन्दा लोकप्रिय"
      },
      "tabs": {
        "overview": "अवलोकन",
        "architecture": "वास्तुकला",
        "history": "इतिहास",
        "visit": "भ्रमण जानकारी",
        "gallery": "ग्यालरी",
        "timeline": "टाइमलाइन",
        "map": "नक्सा"
      },
      "details": {
        "history": "ऐतिहासिक महत्त्व",
        "architecture": "वास्तुकला शैली",
        "archDetails": "वास्तुकला विवरणहरू",
        "features": "वास्तुकला विशेषताहरू",
        "materials": "निर्माण सामग्रीहरू",
        "specialFeatures": "विशेष विशेषताहरू",
        "festivals": "प्रमुख चाडपर्वहरू",
        "timings": "खुल्ने समय",
        "entryFee": "प्रवेश शुल्क",
        "contact": "सम्पर्क",
        "bestTime": "भ्रमण गर्न उत्तम समय",
        "accessibility": "पहुँचयोग्यता",
        "rating": "रेटिंग",
        "visitors": "वार्षिक पर्यटकहरू",
        "period": "ऐतिहासिक अवधि",
        "significance": "धार्मिक महत्त्व",
        "description": "विवरण",
        "tiers": "तहहरू",
        "height": "उचाइ",
        "foundation": "आधार",
        "dimensions": "आयामहरू"
      },
      "actions": {
        "virtualTour": "आभासी भ्रमण",
        "getDirections": "दिशा निर्देशन प्राप्त गर्नुहोस्",
        "directions": "दिशा निर्देशनहरू",
        "share": "साझा गर्नुहोस्",
        "favorite": "मनपर्नेमा थप्नुहोस्"
      },
      "community": {
        "title": "हाम्रो मन्दिर संरक्षण समुदायमा सामेल हुनुहोस्",
        "description": "आउँदा पुस्ताहरूको लागि यी वास्तुकला अज्चर्यहरू संरक्षण गर्न मद्दत गर्नुहोस्। विरासत उत्साहीहरूको हाम्रो समुदायमा सामेल हुनुहोस् र मन्दिर संरक्षण प्रयासहरूमा योगदान गर्नुहोस्।",
        "join": "समुदायमा सामेल हुनुहोस्"
      },
      "architecture": {
        "title": "नेवार मन्दिर वास्तुकला",
        "description": "नेपाली मन्दिर निर्माणलाई परिभाषित गर्ने अद्वितीय वास्तुकला शैलीहरू अन्वेषण गर्नुहोस्",
        "features": "मुख्य विशेषताहरू"
      }
    },
    "arts": {
      "title": "परम्परागत कला र शिल्पकलाहरू",
      "heroTitle": "नेवार कलात्मक विरासत",
      "heroDescription": "पुस्ताहरूदेखि संरक्षित गरिएका उत्कृष्ट परम्परागत कला र शिल्पकलाहरू अन्वेषण गर्नुहोस्",
      "materials": "सामग्रीहरू",
      "origin": "उत्पत्ति",
      "artists": "कारीगरहरू",
      "totalArts": "कला रूपहरू",
      "categories": "श्रेणीहरू",
      "yearsHistory": "इतिहासका वर्षहरू",
      "artistFamilies": "कलाकार परिवारहरू"
    },
    "heritage": {
      "title": "सांस्कृतिक सम्पदा",
      "heroTitle": "नेवार सांस्कृतिक विरासत",
      "heroDescription": "नेवार समुदायको समृद्ध सांस्कृतिक विरासत अन्वेषण गर्नुहोस्, प्राचीन परम्पराहरूको जीवित प्रमाण",
      "newarTitle": "नेवार सम्पदा अवलोकन",
      "history": "ऐतिहासिक पृष्ठभूमि",
      "culture": "सांस्कृतिक महत्त्व",
      "highlights": "मुख्य हाइलाइटहरू",
      "significanceTitle": "सांस्कृतिक महत्त्व",
      "traditions": "परम्परागत अभ्यासहरू",
      "architecture": "वास्तुकला सम्पदा"
    },
    "languageSchool": {
      "title": "नेवारी भाषा स्कूल",
      "subtitle": "हाम्रो विरासत भाषा संरक्षण र शिक्षण",
      "description": "संरचित पाठ्यक्रमहरू, सांस्कृतिक निमज्जन, र इन्टरएक्टिभ सिकाइ विधिहरू मार्फत नेवारी सिक्न हाम्रो समर्पित भाषा स्कूलमा सामेल हुनुहोस्।",
      "hero": {
        "title": "नेवारी सही तरिकाले सिक्नुहोस्",
        "subtitle": "संरचित पाठ्यक्रम, विशेषज्ञ शिक्षकहरू, र सांस्कृतिक सन्दर्भ"
      },
      "features": {
        "title": "किन हाम्रो स्कूलसँग सिक्नुहोस्?",
        "structured": {
          "title": "संरचित पाठ्यक्रम",
          "description": "प्रमाणित पाठ्यक्रमसहित आधारभूतदेखि उन्नत स्तरसम्म प्रगतिशील सिकाइ"
        },
        "cultural": {
          "title": "सांस्कृतिक सन्दर्भ",
          "description": "सांस्कृतिक कथाहरू, परम्पराहरू, र वास्तविक-जीवन परिदृश्यहरू मार्फत भाषा सिक्नुहोस्"
        },
        "expert": {
          "title": "विशेषज्ञ शिक्षकहरू",
          "description": "शिक्षण अनुभवसहित मूल नेवारी वक्ताहरूबाट सिक्नुहोस्"
        },
        "interactive": {
          "title": "इन्टरएक्टिभ सिकाइ",
          "description": "समूह गतिविधिहरू, कुराकानीहरू, र व्यावहारिक अभ्यासहरू"
        }
      },
      "courses": {
        "title": "हाम्रा पाठ्यक्रम प्रस्तावहरू",
        "beginner": {
          "title": "शुरुआती स्तर",
          "duration": "३ महिना",
          "topics": ["आधारभूत अभिवादनहरू", "संख्या १-१००", "दैनिक शब्दावली", "साधारण वाक्यहरू"]
        },
        "intermediate": {
          "title": "मध्यवर्ती स्तर",
          "duration": "४ महिना",
          "topics": ["व्याकरण नियमहरू", "कुराकानी कौशलहरू", "पढ्ने अभ्यास", "सांस्कृतिक सन्दर्भ"]
        },
        "advanced": {
          "title": "उन्नत स्तर",
          "duration": "५ महिना",
          "topics": ["जटिल व्याकरण", "लेख्ने कौशलहरू", "साहित्य", "पेशागत प्रयोग"]
        },
        "children": {
          "title": "बच्चाहरूको कक्षा",
          "duration": "निरन्तर",
          "topics": ["रमाइलो गतिविधिहरू", "गीतहरू र कथाहरू", "आधारभूत शब्दावली", "सांस्कृतिक खेलहरू"]
        }
      },
      "onlineLearning": {
        "title": "अनलाइन सिकाइ प्लेटफर्म",
        "description": "हाम्रो भौतिक स्कूल स्थापित नहुन्जेलसम्म, लाइभ कक्षाहरू र रेकर्ड गरिएका सत्रहरूसहित हाम्रो व्यापक अनलाइन सिकाइ कार्यक्रममा सामेल हुनुहोस्।",
        "features": [
          "शिक्षकहरूसँग लाइभ इन्टरएक्टिभ कक्षाहरू",
          "लचिलो सिकाइको लागि रेकर्ड गरिएका सत्रहरू",
          "अभ्यास अभ्यासहरू र क्विजहरू",
          "सांस्कृतिक निमज्जन गतिविधिहरू",
          "प्रगति ट्र्याकिंग र प्रमाणपत्रहरू"
        ],
        "cta": "अहिले अनलाइन सिकाइ सुरु गर्नुहोस्"
      },
      "enrollment": {
        "title": "नामांकन प्रक्रिया",
        "steps": [
          "दर्ता फारम भर्नुहोस्",
          "प्लेसमेन्ट टेस्ट लिनुहोस्",
          "आफ्नो कक्षा तालिका चयन गर्नुहोस्",
          "भुक्तानी गर्नुहोस् र पहुँच प्राप्त गर्नुहोस्"
        ]
      },
      "teachers": {
        "title": "हाम्रा शिक्षकहरूसँग भेट्नुहोस्",
        "description": "अनुभवी नेवारी भाषा शिक्षकहरूबाट सिक्नुहोस्"
      }
    },
    "caste": {
      "title": "नेवार जाति प्रणाली र जनसङ्ख्या",
      "subtitle": "नेवार जातिहरू, उनीहरूका परम्परागत भूमिकाहरू, जनसङ्ख्या वितरण, र सांस्कृतिक महत्त्वको व्यापक अवलोकन",
      "casteList": "जाति सूची",
      "selectPrompt": "जाति चयन गर्नुहोस्",
      "selectDescription": "उनीहरूका परम्परागत भूमिकाहरू, जनसङ्ख्या, र सांस्कृतिक महत्त्वको बारेमा विस्तृत जानकारी हेर्न जाति सूचीबाट जाति चयन गर्नुहोस्",
      "populationShare": "जनसङ्ख्या हिस्सा",
      "approximatePopulation": "अनुमानित जनसङ्ख्या",
      "heritageTitle": "सांस्कृतिक विरासत",
      "heritageDescription": "नेवार समुदायको समृद्ध सांस्कृतिक विरासत अन्वेषण गर्नुहोस्",
      "heritageItems": {
        "architecture": "वास्तुकला",
        "art": "कला र शिल्पकलाहरू",
        "festivals": "चाडपर्वहरू",
        "cuisine": "खानपान",
        "language": "भाषा"
      },
      "roles": {
        "merchantsAdministrators": "व्यापारीहरू र प्रशासकहरू",
        "farmers": "किसानहरू र कृषिकारहरू",
        "traders": "व्यापारीहरू र व्यवसायीहरू",
        "priests": "हिन्दू पुजारीहरू",
        "painters": "चित्रकारहरू र कलाकारहरू",
        "oilPressers": "तेल प्रेसकर्ताहरू",
        "blacksmiths": "लोहारहरू र धातुकर्मीहरू",
        "buddhistPriests": "बौद्ध पुजारीहरू",
        "metalworkers": "धातु कारीगरहरू"
      },
      "descriptions": {
        "shrestha": "परम्परागत व्यापारीहरू, प्रशासकहरू, र शासकहरू। व्यवसाय, सरकार, र सांस्कृतिक नेतृत्वमा संलग्न सबैभन्दा प्रमुख नेवार जातिहरू मध्ये एक।",
        "maharjan": "परम्परागत किसानहरू र कृषिकारहरू, ज्यापू पनि भनिन्छ। उनीहरूको कृषि विशेषज्ञता र नेवार खानपानमा योगदानको लागि परिचित।",
        "dangol": "कृषि र परम्परागत पेशाहरूमा विशेषज्ञ किसान समुदाय। नेवार कृषि अभ्यासहरूमा महत्त्वपूर्ण योगदानकर्ताहरू।",
        "tuladhar": "उनीहरूको व्यवसाय कुशलताको लागि परिचित परम्परागत व्यापारीहरू र व्यापारीहरू। नेपाल र बाहिर व्यापारमा संलग्न।",
        "karmacharya": "रीतिरिवाजहरू र समारोहहरू प्रदर्शन गर्ने हिन्दू पुजारीहरू। नेवार समाजमा हिन्दू धार्मिक परम्पराहरूका संरक्षकहरू।",
        "chitrakar": "धार्मिक र सांस्कृतिक कलाकृतिहरू सिर्जना गर्ने परम्परागत चित्रकारहरू र कलाकारहरू। पौभा र अन्य कला रूपहरूका गुरुहरू।",
        "manandhar": "परम्परागत तेल प्रेसकर्ताहरू र प्रोसेसरहरू। तेल निष्कर्षण र सम्बन्धित उत्पादनहरूमा उनीहरूको विशेषज्ञताको लागि परिचित।",
        "nakarmi": "उपकरणहरू, हतियारहरू, र अनुष्ठानिक वस्तुहरू सिर्जना गर्ने लोहारहरू र धातुकर्मीहरू। धातु काममा कुशल कारीगरहरू।",
        "bajracharya": "बौद्ध पुजारीहरू र आध्यात्मिक नेताहरू। वज्रयान बौद्ध परम्पराहरूका संरक्षकहरू।",
        "shakya": "धातु कारीगरहरू र सुनारहरू। परम्परागत रूपमा धार्मिक मूर्तिहरू र गहनाहरू सिर्जनामा संलग्न।"
      }
    },
    "statistics": {
      "totalPopulation": "कुल नेवार जनसङ्ख्या",
      "populationPercentage": "नेपालको जनसंख्याको लगभग ४.६%",
      "motherTongue": "नेवार भाषा वक्ताहरू",
      "languagePercentage": "६४.४% नेवारहरूले नेवार भाषा बोल्छन्",
      "totalCastes": "कुल जातिहरू",
      "uniqueOccupations": "अद्वितीय परम्परागत पेशाहरू"
    },
    "search": {
      "placeholder": "नाम, भूमिका, वा श्रेणीद्वारा जातिहरू खोज्नुहोस्...",
      "selectCaste": "जाति चयन गर्नुहोस्"
    },
    "districts": {
      "title": "जिल्ला अनुसार नेवार जनसङ्ख्या",
      "dominantCastes": "प्रमुख जातिहरू",
      "kathmandu": "काठमाडौं",
      "lalitpur": "ललितपुर",
      "bhaktapur": "भक्तपुर",
      "kavre": "काभ्रेपलान्चोक",
      "makwanpur": "मकवानपुर"
    },
    "dashboard": {
      "title": "भाषा सिकाइ ड्यासबोर्ड",
      "subtitle": "इन्टरएक्टिभ पाठहरू र सांस्कृतिक निमज्जन मार्फत नेवार भाषा मास्टर गर्नुहोस्",
      "wordsLearned": "शब्दहरू सिकिएका",
      "wordsRemaining": "शब्दहरू बाँकी",
      "currentStreak": "हालको स्ट्रिक",
      "daysInARow": "लगातार दिनहरू",
      "level": "स्तर",
      "xpEarned": "एक्सपी कमाइयो",
      "lessons": "पाठहरू",
      "continueLearning": "सिकाइ जारी राख्नुहोस्",
      "achievements": {
        "title": "उपलब्धिहरू",
        "unlocked": "अनलक गरियो"
      },
      "flashcards": {
        "title": "इन्टरएक्टिभ फ्ल्याशकार्डहरू",
        "description": "तपाईंको सिकाइ गतिको अनुकूलन गर्ने स्मार्ट फ्ल्याशकार्डहरूसँग शब्दावली अभ्यास गर्नुहोस्"
      },
      "chatroom": {
        "languageExchange": "भाषा विनिमय",
        "online": "अनलाइन",
        "aiTutor": "एआई भाषा ट्यूटर",
        "available": "उच्चारण, व्याकरण, र सांस्कृतिक सन्दर्भमा मद्दत गर्न २४/७ उपलब्ध"
      }
    },
    "categories": {
      "greetings": "अभिवादनहरू",
      "numbers": "संख्या",
      "family": "परिवार",
      "food": "खाना",
      "travel": "यात्रा",
      "shopping": "किनमेल",
      "colors": "रङहरू",
      "time": "समय",
      "animals": "जनावरहरू",
      "body": "शरीर",
      "clothing": "लुगाफाटा",
      "professions": "पेशाहरू",
      "nature": "प्रकृति",
      "places": "स्थानहरू",
      "emotions": "भावनाहरू",
      "education": "शिक्षा",
      "hobbies": "शौकहरू",
      "culture": "संस्कृति",
      "home": "घर",
      "technology": "प्रविधि",
      "arts": "कलाहरू",
      "safety": "सुरक्षा",
      "verbs": "क्रियाहरू",
      "adjectives": "विशेषणहरू",
      "stories": "कथाहरू"
    },
    "lessons": {
      "basicGreetings": {
        "title": "आधारभूत अभिवादनहरू",
        "description": "दैनिक कुराकानीहरूको लागि सामान्य नेवार अभिवादनहरू र प्रतिक्रियाहरू सिक्नुहोस्"
      },
      "familyMembers": {
        "title": "परिवारका सदस्यहरू",
        "description": "नेवार संस्कृतिमा परिवार सम्बन्धहरूको नामहरू र वृद्धहरूलाई सम्बोधन गर्ने तरिका"
      },
      "numbers": {
        "title": "संख्या १-१००",
        "description": "गणना, क्रमसूचक संख्याहरू, र बजारहरूमा व्यावहारिक प्रयोग"
      },
      "newarCuisine": {
        "title": "नेवार खानपान",
        "description": "खाना शब्दावली, रेस्टुरेन्टहरूमा अर्डर गर्ने, र पाककला शब्दहरू"
      }
    },
    "achievements": {
      "firstSteps": {
        "title": "पहिलो कदमहरू",
        "description": "तपाईंको पहिलो पाठ पूरा गर्नुभयो"
      },
      "wordMaster": {
        "title": "शब्द मास्टर",
        "description": "१०० शब्दहरू सिक्नुभयो"
      },
      "consistentLearner": {
        "title": "निरन्तर सिकारु",
        "description": "७-दिने सिकाइ स्ट्रिक"
      },
      "quizChampion": {
        "title": "क्विज च्याम्पियन",
        "description": "५ क्विजहरूमा उत्तम अंक"
      },
      "cultureExpert": {
        "title": "संस्कृति विशेषज्ञ",
        "description": "सबै सांस्कृतिक पाठहरू पूरा गर्नुभयो"
      },
      "speedLearner": {
        "title": "गति सिकारु",
        "description": "एक दिनमा ५ पाठहरू पूरा गर्नुभयो"
      },
      "grammarRookie": {
        "title": "व्याकरण नौसिखिया",
        "description": "सबै आधारभूत व्याकरण नियमहरू सिक्नुभयो"
      },
      "familyFriend": {
        "title": "परिवार साथी",
        "description": "सबै परिवार-सम्बन्धित शब्दहरू जान्नुहुन्छ"
      },
      "foodie": {
        "title": "खानाप्रेमी",
        "description": "सबै खाना र पेय शब्दहरू सिक्नुभयो"
      },
      "traveler": {
        "title": "यात्री",
        "description": "यात्रा गर्नका लागि ५० शब्दहरू जान्नुहुन्छ"
      },
      "shopper": {
        "title": "किनमेल गर्ने व्यक्ति",
        "description": "सबै किनमेल र पैसा पाठहरू समाप्त गर्नुभयो"
      },
      "colorfulLearner": {
        "title": "रंगीन सिकारु",
        "description": "सबै रङहरू र आकारहरू सिक्नुभयो"
      },
      "timeKeeper": {
        "title": "समय रक्षक",
        "description": "सबै दिनहरू, महिनाहरू, र समयहरू जान्नुहुन्छ"
      },
      "animalLover": {
        "title": "जनावर प्रेमी",
        "description": "सबै जनावर र पाल्तू शब्दहरू सिक्नुभयो"
      },
      "healthyHero": {
        "title": "स्वस्थ नायक",
        "description": "सबै शरीरका अंगहरू र स्वास्थ्य शब्दहरू जान्नुहुन्छ"
      },
      "fashionFan": {
        "title": "फेसन प्रशंसक",
        "description": "सबै लुगाफाटा र सहायक उपकरणहरू सिक्नुभयो"
      },
      "jobFinder": {
        "title": "पेशा खोज्ने व्यक्ति",
        "description": "सबै पेशाहरू र जागिरहरू जान्नुहुन्छ"
      },
      "natureExplorer": {
        "title": "प्रकृति अन्वेषक",
        "description": "प्रकृति र मौसम शब्दहरू सिक्नुभयो"
      },
      "directionFinder": {
        "title": "दिशा खोज्ने व्यक्ति",
        "description": "सबै स्थानहरू र दिशाहरू जान्नुहुन्छ"
      },
      "moodTracker": {
        "title": "मनस्थिति ट्र्याकर",
        "description": "सबै भावनाहरू र अनुभूतिहरू सिक्नुभयो"
      },
      "schoolStar": {
        "title": "स्कूल स्टार",
        "description": "सबै स्कूल-सम्बन्धित शब्दहरू जान्नुहुन्छ"
      },
      "hobbyHelper": {
        "title": "शौक सहायक",
        "description": "सबै शौकहरू, खेलकुदहरू, र गतिविधिहरू सिक्नुभयो"
      },
      "festivalFun": {
        "title": "चाडपर्व रमाइलो",
        "description": "सबै चाडपर्व र संस्कृति पाठहरू समाप्त गर्नुभयो"
      },
      "homeHelper": {
        "title": "घर सहायक",
        "description": "सबै घरेलु वस्तुहरू जान्नुहुन्छ"
      },
      "techSavvy": {
        "title": "प्रविधि-ज्ञाता",
        "description": "प्रविधि र संचार शब्दहरू सिक्नुभयो"
      },
      "littleArtist": {
        "title": "सानो कलाकार",
        "description": "संगीत, कला, र शिल्प शब्दहरू जान्नुहुन्छ"
      },
      "safetyFirst": {
        "title": "सुरक्षा पहिलो",
        "description": "सुरक्षा र आपतकालीन शब्दहरू सिक्नुभयो"
      },
      "actionHero": {
        "title": "क्रिया नायक",
        "description": "सबै क्रियाहरू र दैनिक कार्यहरू जान्नुहुन्छ"
      },
      "describer": {
        "title": "वर्णनकर्ता",
        "description": "सबै विशेषणहरू र वर्णनहरू सिक्नुभयो"
      },
      "storyteller": {
        "title": "कथावाचक",
        "description": "कथाकथन, मुहावराहरू, र संवादहरू समाप्त गर्नुभयो"
      }
    },
    "difficulty": {
      "beginner": "शुरुआती",
      "intermediate": "मध्यवर्ती",
      "advanced": "उन्नत"
    },
    "learningStats": {
      "totalWords": 500,
      "totalLessons": 20,
      "levels": ["शुरुआती", "मध्यवर्ती", "उन्नत", "विशेषज्ञ", "मास्टर"],
      "xpPerLesson": 100,
      "xpPerWord": 10
    },
    "leaderboard": {
      "title": "समुदाय लीडरबोर्ड",
      "you": "तपाईं",
      "rank": "र्याङ्क",
      "name": "नाम",
      "level": "स्तर",
      "xp": "एक्सपी"
    },

    


    "title": "नेवार मानिसहरूको धर्म र विश्वासहरू",
    "subtitle": "नेवार आध्यात्मिक जीवनलाई परिभाषित गर्ने हिन्दू र बौद्ध धर्मको अद्वितीय समन्वयात्मक मिश्रण अन्वेषण गर्नुहोस्",
    "overview": {
      "badge": "धार्मिक समन्वय",
      "title": "नेवार धार्मिक सद्भाव: एक अद्वितीय सांस्कृतिक संश्लेषण",
      "description1": "नेपालको काठमाडौं उपत्यकाका नेवार मानिसहरूले विश्वको सबैभन्दा उल्लेखनीय धार्मिक संस्कृतिहरू विकास गरेका छन्, जहाँ हिन्दू र बौद्ध धर्म न केवल सह-अस्तित्वमा रहन्छन् तर सक्रिय रूपमा एक अर्कालाई पूरक र समृद्ध गर्छन्। दुई सहस्राब्दीभन्दा बढी समयमा परिष्कृत यो धार्मिक सद्भावले नेवार सभ्यताको हस्ताक्षर बनेको धार्मिक समन्वयको जीवित उदाहरण प्रतिनिधित्व गर्छ।",
      "description2": "मात्र सहिष्णुताभन्दा फरक, नेवार धार्मिक अभ्यासले गहिरो एकीकरण समावेश गर्छ जहाँ हिन्दू देवताहरू बौद्ध मन्दिरहरूमा पूजा गरिन्छ र बौद्ध सिद्धान्तहरूले हिन्दू रीतिरिवाजहरूलाई सूचित गर्छन्। एउटै परिवारले दुवै हिन्दू र बौद्ध अभ्यासकर्ताहरू समावेश गर्न सक्छ, प्रायः एक अर्काका समारोहहरूमा सहभागी हुन्छन्। यस अद्वितीय दृष्टिकोणले एक आध्यात्मिक इकोसिस्टम सिर्जना गरेको छ जहाँ दुवै धर्महरूबीचको सीमाहरू सुन्दर रूपमा अस्पष्ट छन्।",
      "description3": "यो सद्भावको आधार काठमाडौं उपत्यकाको साझा सांस्कृतिक म्याट्रिक्समा छ, जहाँ लिच्छवी अवधि (लगभग ४००-७५० ईस्वी) देखि दुवै धर्महरू सँगै विकास भएका छन्। नेवार दृष्टिकोणले देखाउँछ कि धार्मिक विविधता संघर्षको स्रोत नभई सांस्कृतिक शक्तिको स्रोत हुन सक्छ।"
    },
    "stats": {
      "religions": "प्रमुख धर्महरू",
      "temples": "पवित्र मन्दिरहरू",
      "festivals": "वार्षिक चाडपर्वहरू",
      "rituals": "जीवन चक्र रीतिरिवाजहरू"
    },
    "hinduism": {
      "badge": "नेवार हिन्दू धर्म",
      "title": "नेवार हिन्दू धर्म: तान्त्रिक परम्पराहरू र स्थानीय देवताहरू",
      "description1": "नेवार हिन्दू धर्मले हिन्दू अभ्यासको एक विशिष्ट शाखाको प्रतिनिधित्व गर्छ जसले काठमाडौं उपत्यकामा विशिष्ट रूपमा विकास गरेको छ। मुख्यधाराको हिन्दू धर्मसँग मुख्य विश्वासहरू साझा गर्दै, यसले बलियो तान्त्रिक प्रभावहरू, मातृ देवी पूजा, र प्रमुख हिन्दू देवताहरूसँगै विशिष्ट रूपमा नेवार देवताहरू जस्तै मच्छेन्द्रनाथ, तलेजु, र कुमारीको आराधना समावेश गर्छ।",
      "description2": "नेवार हिन्दू पन्थले शिव, विष्णु, र देवी जस्ता संस्कृतिका देवताहरू समावेश गर्छ, साथै विशिष्ट रूपमा नेवार देवताहरू जस्तै मच्छेन्द्रनाथ, तलेजु, र कुमारी। के नेवार हिन्दू धर्मलाई विशिष्ट बनाउँछ भनेको व्यावहारिक आध्यात्मिकतामा यसको जोड हो, जहाँ रीतिरिवाजहरू ब्रह्माण्डीय क्रम कायम राख्न र समुदाय कल्याण सुनिश्चित गर्न डिजाइन गरिएका छन्।",
      "description3": "नेवार हिन्दूहरूबीचको जाति प्रणाली जटिल संरचनाको पालना गर्छ जसले विशिष्ट अनुष्ठानिक भूमिकाहरू राख्छ। यद्यपि, रूढिवादी हिन्दू धर्मभन्दा फरक, नेवार अभ्यासले ठूलो लचिलोपन अनुमति दिन्छ र धेरै बौद्ध तत्वहरू समावेश गर्छ, जसले सांस्कृतिक आदानप्रदानको सयौं वर्षहरूलाई प्रतिबिम्बित गर्छ।",
      "practices": {
        "title": "मुख्य अभ्यासहरू",
        "list": [
          "घरेलु श्रृंगारहरूमा दैनिक पूजा (नित्य पूजा)",
          "मन्त्रहरू र यन्त्रहरूसहित तान्त्रिक रीतिरिवाजहरू",
          "रथ जुलुसहरूसहित मन्दिर चाडपर्वहरू",
          "जीवन चक्र रीतिरिवाजहरू (संस्कारहरू)",
          "स्थानीय र क्षेत्रीय तीर्थस्थलहरूमा तीर्थयात्रा",
          "विशेष समारोहहरूमा पशु बलि"
        ]
      },
      "features": {
        "title": "विशिष्ट विशेषताहरू",
        "list": [
          "तान्त्रिक प्रभावहरू",
          "मातृ देवी केन्द्रित",
          "स्थानीय देवता एकीकरण",
          "बौद्ध धर्मसँग समन्वयात्मक",
          "जटिल अनुष्ठान क्यालेन्डर"
        ]
      },
      "unique": {
        "title": "अद्वितीय विशेषताहरू",
        "description": "नेवार हिन्दू धर्मले अन्यत्र हराएका प्राचीन वैदिक परम्पराहरू कायम राख्छ भने पूजाका नयाँ रूपहरू नवीनता गर्छ। जीवित देवी कुमारी, तान्त्रिक अभ्यासहरू, र जटिल मुखौटा नृत्यहरूले हिन्दू धर्मका पक्षहरूको प्रतिनिधित्व गर्छन् जुन नेवार परम्परामा मात्र संरक्षित छन्।"
      },
      "bhimsen": {
        "title": "भीमसेन पूजा: व्यापार र वाणिज्यको देवता",
        "significance": "ऐतिहासिक महत्त्व",
        "significanceDesc": "महाभारतका पाण्डव भाइहरू मध्ये एक भीमसेनले व्यापारीहरू र व्यापारीहरूको संरक्षक देवताको रूपमा नेवारहरूको लागि विशेष महत्त्व राख्छ। लिच्छवी अवधिको दोलखा भीमसेन मन्दिरले नेवार व्यवसाय समुदायहरूको लागि सबैभन्दा महत्त्वपूर्ण तीर्थस्थलहरू मध्ये एकको रूपमा सेवा गर्छ।",
        "worship": "पूजा अभ्यासहरू",
        "worshipDesc": "दैनिक पूजाले रक्सी, अण्डाहरू, र पशु बलि समावेश गर्ने अद्वितीय बलिहरू समावेश गर्छ, जसले नेवार हिन्दू धर्ममा तान्त्रिक प्रभावहरूलाई प्रतिबिम्बित गर्छ। व्यापारीहरूले व्यावसायिक सफलताको लागि आशीर्वाद खोज्दा मन्दिरले विशेष गरी प्रमुख चाडपर्वहरूमा ठूलो सभा देख्छ।",
        "dolakhaTitle": "दोलखा भीमसेन मन्दिर",
        "dolakhaDesc": "दोलखा जिल्लामा अवस्थित, यो मन्दिरले भीमसेनको अद्वितीय स्व-प्रकट ढुङ्गाको मूर्ति समावेश गर्छ जुन महत्त्वपूर्ण घटनाहरूको समयमा पसिना आउने विश्वास गरिन्छ, जुन समुदायको लागि अपशकुनको रूपमा सेवा गर्छ।"
      }
    },
    "buddhism": {
      "badge": "नेवार बौद्ध धर्म",
      "title": "नेवार बौद्ध धर्म: प्राचीन परम्पराहरूको संरक्षक",
      "description1": "नेवार बौद्ध धर्म, जसलाई वज्रयान बौद्ध धर्म पनि भनिन्छ,ले एक अद्वितीय परम्पराको प्रतिनिधित्व गर्छ जसले अन्यत्र एसियाबाट हराएका धेरै प्राचीन बौद्ध अभ्यासहरू संरक्षण गरेको छ। यसले महायान र वज्रयान बौद्ध धर्मका तत्वहरूलाई हिन्दू तान्त्रिक अभ्यासहरूसँग जोड्छ, जसले काठमाडौं उपत्यकामा मात्र भेटिने बौद्ध धर्मको विशिष्ट रूप सिर्जना गर्छ।",
      "description2": "नेवार बौद्ध समुदायले हिन्दूहरू जस्तै जाति प्रणाली कायम राख्छ, जसले पुजारीहरू (बज्राचार्य र शाक्यहरू) को लागि विशिष्ट भूमिकाहरू राख्छ जसले प्राचीन ग्रन्थहरू र रीतिरिवाजहरू संरक्षण गर्छन्। थेरवाद बौद्ध धर्मभन्दा फरक, नेवार बौद्ध धर्मले अनुष्ठान, प्रतीकवाद, र देवताहरूको जटिल पन्थको आराधनामा जोड दिन्छ।",
      "description3": "यस परम्पराले संस्कृत बौद्ध ग्रन्थहरू संरक्षण गरेको छ जुन अन्य बौद्ध देशहरूमा हराएका थिए र अभ्यासको निरन्तर वंशावलीहरू कायम राख्छ जुन प्राचीन भारतमा फर्किन्छ। बहा र बही मठहरूले बौद्ध कला, वास्तुकला, र अनुष्ठान अभ्यासको जीवित संग्रहालयको रूपमा सेवा गर्छन्।",
      "schools": {
        "title": "बौद्ध परम्पराहरू",
        "list": [
          "वज्रयान (डायमन्ड वाहन)",
          "महायान (ग्रेट वाहन)",
          "थेरवाद (हालको प्रभाव)"
        ]
      },
      "texts": {
        "title": "पवित्र ग्रन्थहरू",
        "list": [
          "प्रज्ञापारमिता सूत्रहरू",
          "बौद्ध तन्त्रहरू",
          "स्थानीय liturgical ग्रन्थहरू",
          "संस्कृत पाण्डुलिपिहरू"
        ]
      },
      "practices": {
        "title": "मुख्य अभ्यासहरू",
        "list": [
          "सन्ध्या आरती (साँझको पूजा)",
          "गुन्ला उपवास महिना पालनाहरू",
          "पञ्च बुद्ध पूजा",
          "मठ-आधारित रीतिरिवाजहरू",
          "जीवन चक्र समारोहहरू"
        ]
      },
      "monasteries": {
        "title": "मठ संस्थाहरू",
        "description": "बहा (आँगन मठहरू) र बही (खुला मठहरू) ले बौद्ध सिकाइ र अभ्यासको केन्द्रको रूपमा सेवा गर्छन्, प्राचीन परम्पराहरू संरक्षण गर्छन्।",
        "list": [
          "हिरण्य वर्ण महाविहार",
          "इतुम बहल",
          "क्वबहल",
          "बिक्रमशी महाविहार"
        ]
      },
      "unique": {
        "title": "अद्वितीय संरक्षण",
        "description": "नेवार बौद्ध धर्मले भारत र अन्य बौद्ध देशहरूबाट हराएका रीतिरिवाजहरू, कला रूपहरू, र ग्रन्थ परम्पराहरू संरक्षण गरेको छ, जसले बौद्ध इतिहास बुझ्नको लागि यसलाई अमूल्य बनाउँछ।"
      }
    },
    "deities": {
      "title": "नेवार देवताहरूको पन्थ",
      "subtitle": "नेवार हिन्दू र बौद्ध धर्ममा पूजा गरिने दिव्य प्राणीहरू अन्वेषण गर्दै",
      "significance": "महत्त्व",
      "machhendranath": "मच्छेन्द्रनाथ (करुणामय)",
      "machhendranathDesc": "करुणाको बोधिसत्त्व जसलाई हिन्दू र बौद्ध दुवैले पूजा गर्छन्, उपत्यकामा वर्षा र समृद्धि ल्याउनेको लागि परिचित।",
      "machhendranathSig": "नेपालको सबैभन्दा लामो रथ चाडको केन्द्र, बौद्धहरूद्वारा अवलोकितेश्वरको रूपमा र हिन्दूहरूद्वारा शिवको रूपमा पूजा गरिन्छ।",
      "taleju": "तलेजु भवानी",
      "talejuDesc": "मल्ल राजाहरूकी राजकीय देवी, मूल रूपमा एक tutelary देवी जसले काठमाडौं उपत्यकाको संरक्षक बने।",
      "talejuSig": "राजकीय शक्ति र सुरक्षाको प्रतिनिधित्व गर्छ, विशेष पुजारीहरू र विशेष चाडपर्वहरूको समयमा मात्र पहुँचयोग्य मन्दिरहरूसहित।",
      "kumari": "कुमारी (जीवित देवी)",
      "kumariDesc": "देवी तलेजुको जीवित अवतारको रूपमा पूजा गरिने प्रा-यौवन कन्या, दिव्य महिला शक्तिको प्रतिनिधित्व गर्छ।",
      "kumariSig": "नेवार संस्कृतिको लागि अद्वितीय, कुमारीले हिन्दू र बौद्ध परम्पराहरूको संलयन र राजकीय वैधतालाई प्रतीकात्मक बनाउँछ।",
      "bhimsen": "भीमसेन",
      "bhimsenDesc": "नेवार व्यापारीहरूद्वारा व्यापार, वाणिज्य, र व्यवसाय सफलताको देवताको रूपमा पूजा गरिने पाण्डव भाइ।",
      "bhimsenSig": "नेवार व्यवसाय समुदायको लागि विशेष गरी महत्त्वपूर्ण, प्रमुख व्यापार केन्द्रहरूमा मन्दिरहरूसहित।",
      "ganesh": "गणेश",
      "ganeshDesc": "ज्ञानको हात्ती-टाउको भएको देवता र बाधाहरू हटाउने, हिन्दू र बौद्ध दुवै सन्दर्भहरूमा पूजा गरिन्छ।",
      "ganeshSig": "चार दिशात्मक गणेश मन्दिरहरूले काठमाडौं शहरलाई सुरक्षा गर्छन्, शहरी योजनामा एकीकरण देखाउँछ।",
      "bhairab": "भैरव",
      "bhairabDesc": "विनाश र रूपान्तरणको प्रतिनिधित्व गर्ने शिवको उग्र अभिव्यक्ति, तान्त्रिक रीतिरिवाजहरूमा पूजा गरिन्छ।",
      "bhairabSig": "सुरक्षा र तान्त्रिक अभ्यासहरूको लागि महत्त्वपूर्ण, हिन्दू र बौद्ध दुवै रूपहरूसँग पूजा गरिन्छ।"
    },
    "rituals": {
      "badge": "जीवन चक्र रीतिरिवाजहरू",
      "title": "संस्कारहरू: जीवनका रीतिरिवाजहरू",
      "subtitle": "मानव जीवनको हरेक महत्त्वपूर्ण चरणलाई चिन्ह लगाउने जटिल समारोहहरू",
      "introduction": "नेवारहरूसँग जीवन चक्र रीतिरिवाजहरू (संस्कारहरू) को विश्वको सबैभन्दा जटिल प्रणालीहरू मध्ये एक छ, जसमा जन्मदेखि मृत्युसम्म प्रत्येक महत्त्वपूर्ण सङ्क्रमणको लागि समारोहहरू छन्। यी रीतिरिवाजहरूले हिन्दू र बौद्ध तत्वहरूलाई मिश्रण गर्छन् र व्यक्तिहरूलाई उनीहरूको समुदायमा एकीकृत गर्ने साथै आध्यात्मिक सुरक्षा सुनिश्चित गर्ने काम गर्छन्।",
      "importance": "प्रत्येक अनुष्ठानले सामाजिक बन्धनहरूलाई बलियो बनाउँछ, सांस्कृतिक ज्ञान स्थानान्तरण गर्छ, र ब्रह्माण्डीय क्रम कायम राख्छ। तिनीहरूले दैनिक जीवनमा धार्मिक सिद्धान्तहरूको व्यावहारिक अनुप्रयोगलाई प्रतिनिधित्व गर्छन्।",
      "download": {
        "title": "व्यापक अनुष्ठान गाइड",
        "description": "गहिरो बुझाइको लागि नेवारी रीतिरिवाजहरू र प्रक्रियाहरूको हाम्रो विस्तृत गाइड डाउनलोड गर्नुहोस्",
        "button": "अनुष्ठान PDF डाउनलोड गर्नुहोस्"
      },
      "types": {
        "title": "रीतिरिवाजहरूका प्रकारहरू",
        "list": [
          "जन्म र बाल्यकाल समारोहहरू",
          "दीक्षा रीतिरिवाजहरू (ब्रतबन्ध)",
          "विवाह समारोहहरू",
          "वृद्धावस्था उत्सवहरू",
          "मृत्यु र पूर्वज रीतिरिवाजहरू"
        ]
      },
      "symbolism": {
        "title": "प्रतीकात्मक अर्थ",
        "description": "प्रत्येक अनुष्ठानले आध्यात्मिक सत्यहरू र ब्रह्माण्डीय सिद्धान्तहरूलाई प्रतिनिधित्व गर्ने गहिरो प्रतीकात्मक अर्थहरू समावेश गर्छ, व्यक्तिहरूलाई ठूलो ब्रह्माण्डसँग जोड्छ।"
      },
      "priests": {
        "title": "अनुष्ठान विशेषज्ञहरू",
        "description": "विभिन्न प्रकारका पुजारीहरूले जाति र परम्पराको आधारमा विशिष्ट रीतिरिवाजहरू प्रदर्शन गर्छन्।",
        "types": ["बज्राचार्य", "शाक्य", "राजोपाध्याय", "देव ब्राह्मण", "झा ब्राह्मण"]
      },
      "machabuByanke": "मचाबु ब्याङ्के (नामकरण समारोह)",
      "machabuByankeDesc": "जन्म पछिको पहिलो प्रमुख समारोह जहाँ बच्चाले आफ्नो औपचारिक नाम प्राप्त गर्छ।",
      "machabuByankeTime": "जन्म पछि ६औं वा १२औं दिन",
      "machabuByankeSig": "बच्चालाई समाजमा परिचय गराउँछ र पहिचान प्रदान गर्छ",
      "machabuByankePart": "परिवार, पुजारी, नजिकका नातेदारहरू",
      "ihi": "इही (प्रा-यौवन विवाह)",
      "ihiDesc": "सुवर्ण कुमार (सुनको केटा), जसले भगवान विष्णुको प्रतिनिधित्व गर्छ, सँग युवतीहरूको प्रतीकात्मक विवाह।",
      "ihiTime": "रजस्वला भन्दा अगाडि, सामान्यतया ५-९ वर्षको उमेर",
      "ihiSig": "आध्यात्मिक सुरक्षा र सामाजिक स्थिति सुनिश्चित गर्छ",
      "ihiPart": "युवतीहरू, पुजारीहरू, समुदाय",
      "baraTayegu": "बारा टायगु (केटीको एकान्त)",
      "baraTayeguDesc": "पहिलो रजस्वला समारोह जहाँ केटीहरूलाई १२ दिनको लागि एकान्तमा राखिन्छ।",
      "baraTayeguTime": "पहिलो रजस्वलामा",
      "baraTayeguSig": "महिलापनमा सङ्क्रमणलाई चिन्ह लगाउँछ",
      "baraTayeguPart": "युवती, महिला नातेदारहरू",
      "gufaRakhne": "गुफा राख्ने (सूर्य विवाह)",
      "gufaRakhneDesc": "शाक्य र बज्राचार्य केटीहरूको लागि इही समारोह, जसमा अँध्यारो कोठामा एकान्त समावेश छ।",
      "gufaRakhneTime": "रजस्वला भन्दा अगाडि",
      "gufaRakhneSig": "इहीको बौद्ध समकक्ष",
      "gufaRakhnePart": "बौद्ध केटीहरू, पुजारीहरू",
      "belBibaha": "बेल बिबाह (फल विवाह)",
      "belBibahaDesc": "बेल फलसँग प्रतीकात्मक विवाह समावेश गर्ने विवाह समारोह।",
      "belBibahaTime": "इही पछि, वास्तविक विवाह भन्दा अगाडि",
      "belBibahaSig": "थप आध्यात्मिक सुरक्षा",
      "belBibahaPart": "विवाहित महिलाहरू",
      "janko": "जाँको (वृद्धावस्था समारोह)",
      "jankoDesc": "दीर्घायु र वृद्ध स्थिति प्रदान गर्ने दीर्घायु समारोह।",
      "jankoTime": "७७ वर्ष, ७ महिना, ७ दिन पछि",
      "jankoSig": "वृद्धहरू र उनीहरूको ज्ञानलाई सम्मान गर्छ",
      "jankoPart": "वृद्ध, परिवार, समुदाय"
    },
    "festivals": {
      "title": "चाडपर्वहरू र उत्सवहरू",
      "subtitle": "धार्मिक भक्तिलाई समुदाय उत्सवसँग जोड्ने जीवन्त चाडपर्वहरू",
      "traditions": "मुख्य परम्पराहरू",
      "indrajatra": "इन्द्र जात्रा",
      "indrajatraDesc": "देवताहरूका राजा इन्द्रलाई सम्मान गर्ने आठ दिने चाड, जसमा मुखौटा नृत्यहरू र रथ जुलुसहरू समावेश छन्।",
      "indrajatraDur": "सेप्टेम्बरमा ८ दिन",
      "indrajatraSig": "मन्सुनको अन्त्य र चाडपर्वको मौसमको सुरुवातलाई चिन्ह लगाउँछ",
      "indrajatraTrad": ["कुमारी रथ जुलुस", "लाखे नृत्यहरू", "पुलुकिसी प्रदर्शन", "योसिन थानेगु"],
      "machhindranath": "मच्छिन्द्रनाथ जात्रा",
      "machhindranathDesc": "वर्षा ल्याउने देवता मच्छिन्द्रनाथलाई सम्मान गर्ने नेपालको सबैभन्दा लामो रथ चाड।",
      "machhindranathDur": "धेरै महिना (अप्रिल-जुन)",
      "machhindranathSig": "कृषिको लागि समयमा मन्सुन वर्षा सुनिश्चित गर्छ",
      "machhindranathTrad": ["रातो मच्छिन्द्रनाथ रथ", "भोटो प्रदर्शन", "गाउँ-देखि-गाउँ जुलुस"],
      "bisket": "बिस्केट जात्रा",
      "bisketDesc": "भक्तपुरमा नयाँ वर्ष चाड, जसमा रथ तान्ने र जिब्रो छेड्ने समारोहहरू समावेश छन्।",
      "bisketDur": "अप्रिलमा ९ दिन",
      "bisketSig": "नेपाली नयाँ वर्ष र नराम्रोमाथिको जित मनाउँछ",
      "bisketTrad": ["रथ तान्ने प्रतियोगिता", "जिब्रो छेड्ने", "खम्बा उठाउने समारोह"],
      "yomari": "योमरी पुन्ही",
      "yomariDesc": "चामलको देवतालाई समर्पित बाली चाड जहाँ विशेष चामलको पिठोको मोमोहरू तयार गरिन्छ।",
      "yomariDur": "डिसेम्बरमा पूर्णिमा",
      "yomariSig": "चामल बालीको लागि धन्यवाद",
      "yomariTrad": ["योमरी बनाउने", "परिवार सभाहरू", "पूर्वज पूजा"],
      "gunla": "गुन्ला",
      "gunlaDesc": "ध्यान, उपवास, र धार्मिक पालनाहरूमा समर्पित बौद्ध पवित्र महिना।",
      "gunlaDur": "अगस्टको सम्पूर्ण महिना",
      "gunlaSig": "रमजानको बौद्ध समकक्ष",
      "gunlaTrad": ["बिहानैको प्रार्थनाहरू", "मठ भ्रमणहरू", "उपवास", "ग्रन्थ पढ्ने"],
      "sithi": "सिथि नखा",
      "sithiDesc": "युद्धको देवता कुमारलाई समर्पित चाड, जसमा पानीको स्रोतहरू सफा गर्ने समावेश छ।",
      "sithiDur": "मे/जुनमा एक दिन",
      "sithiSig": "वातावरणीय सफाइ र पानीको स्रोत पूजा",
      "sithiTrad": ["कुँवा सफाइ", "परिवार भोजहरू", "कुमार पूजा"]
    },
    "spirituality": {
      "badge": "आध्यात्मिक जीवन",
      "title": "दैनिक आध्यात्मिकता र ब्रह्माण्डीय क्रम",
      "description1": "नेवार आध्यात्मिकता दैनिक जीवनमा यसको गहिरो एकीकरणद्वारा विशेषता छ, जहाँ धार्मिक अभ्यास विश्वव्यापी गतिविधिहरूबाट अलग नभई अस्तित्वको हरेक पक्षलाई सूचित गर्छ। यो समग्र दृष्टिकोणले भौतिक खोजी र आध्यात्मिक दायित्वहरूबीच सन्तुलन कायम राख्छ।",
      "description2": "धर्म (ब्रह्माण्डीय क्रम) को अवधारणाले नेवार आध्यात्मिकतालाई आधार प्रदान गर्छ, जसमा मानव, प्राकृतिक, र दिव्य क्षेत्रहरूबीच सद्भाव कायम राख्न रीतिरिवाजहरू डिजाइन गरिएका छन्। हरेक कार्य, व्यवसाय लेनदेनदेखि परिवार जीवनसम्म, आध्यात्मिक महत्त्व बोक्छ।",
      "description3": "यस आध्यात्मिक ढाँचाले नेवार संस्कृतिलाई सयौं वर्षसम्म बच्न अनुमति दिएको छ भने परिवर्तनशील परिस्थितिहरूमा ढल्न, गहिरो दार्शनिक बुझाइमा जडित परम्पराहरूको लचिलोपन देखाउँछ।",
      "dailyLife": {
        "title": "दैनिक अभ्यास",
        "description": "बिहानको प्रार्थनाहरू, मन्दिर भ्रमणहरू, घरेलु रीतिरिवाजहरू, र उपवास दिनहरूको पालनाले दैनिक आध्यात्मिक जीवनको लय बनाउँछ।"
      },
      "festivals": {
        "title": "चाडपर्व आध्यात्मिकता",
        "description": "प्रमुख चाडपर्वहरूले समुदाय पूजा, आध्यात्मिक नवीनीकरण, र सामाजिक बन्धनहरूको पुनः पुष्टिको अवसरहरू प्रदान गर्छन्।"
      },
      "principles": {
        "title": "मुख्य आध्यात्मिक सिद्धान्तहरू",
        "list": [
          "धर्महरूबीच सद्भाव (हिन्दू-बौद्ध समन्वय)",
          "सबै जीवन रूपहरूको लागि सम्मान (अहिंसा)",
          "समुदायको महत्त्व (सङ्घ)",
          "ब्रह्माण्डीय क्रमको रखरखाव (धर्म)",
          "करुणाको अभ्यास (करुणा)",
          "ज्ञानको खोज (प्रज्ञा)"
        ]
      },
      "impact": {
        "title": "सामाजिक प्रभाव",
        "description": "नेवार आध्यात्मिकताले एक यस्तो समाज सिर्जना गरेको छ जहाँ धार्मिक विविधता मनाइन्छ, कलात्मक अभिव्यक्ति फस्टाउँछ, र समुदाय कल्याणलाई प्राथमिकता दिइन्छ।"
      }
    },
    "resources": {
      "title": "सिकाइ स्रोतहरू",
      "subtitle": "नेवार धर्म र आध्यात्मिकताको बारेमा तपाईंको बुझाइलाई गहिरो बनाउनुहोस्",
      "explore": "पुस्तकहरू अन्वेषण गर्नुहोस्",
      "watch": "भिडियोहरू हेर्नुहोस्",
      "visit": "संस्थाहरू भ्रमण गर्नुहोस्",
      "books": {
        "title": "सिफारिश गरिएका पुस्तकहरू",
        "list": [
          "द नेवार्स: एन एथ्नो-सोसियोलोजिकल स्टडी",
          "बुद्धिज्म इन नेपाल",
          "हिन्दुइज्म इन द काठमाण्डु भ्याली",
          "नेवार रिचुअल्स एन्ड सेरेमोनिज"
        ]
      },
      "videos": {
        "title": "वृत्तचित्र फिल्महरू",
        "list": [
          "नेवार धार्मिक सद्भाव",
          "लिभिंग गडेस कुमारी",
          "फेस्टिभल्स अफ काठमाण्डु भ्याली",
          "एन्सियन्ट बुद्धिस्ट ट्रेडिशन्स"
        ]
      },
      "institutions": {
        "title": "अनुसन्धान संस्थाहरू",
        "list": [
          "नेपाल भाषा एकेडेमी",
          "त्रिभुवन विश्वविद्यालय",
          "सिनास अनुसन्धान केन्द्र",
          "नेवार स्टडिज इन्स्टिच्युट"
        ]
      }
    },
    "religion": {
      "title": "नेवार मानिसहरूको धर्म र विश्वासहरू",
      "subtitle": "काठमाडौं उपत्यकामा हिन्दू र बौद्ध धर्मको अद्वितीय समन्वयात्मक मिश्रण अन्वेषण गर्नुहोस्",
      "nav": {
        "overview": "अवलोकन",
        "hinduism": "हिन्दू धर्म",
        "buddhism": "बौद्ध धर्म",
        "deities": "देवताहरू र पन्थ",
        "rituals": "जीवन चक्र रीतिरिवाजहरू",
        "festivals": "चाडपर्वहरू र क्यालेन्डर",
        "temples": "पवित्र वास्तुकला",
        "spirituality": "आध्यात्मिक दर्शन",
        "resources": "अकादमिक स्रोतहरू"
      },
      "overview": {
        "title": "नेवार धार्मिक सद्भाव: समन्वयको एक मोडेल",
        "description1": "काठमाडौं उपत्यकाका नेवार मानिसहरूले विश्वको सबैभन्दा उल्लेखनीय र टिकाउ सिन्क्रेटिक धार्मिक संस्कृतिहरू विकास गरेका छन्। दुई सहस्राब्दीभन्दा बढी समयमा, उनीहरूले हिन्दू र बौद्ध धर्मका दार्शनिक सिद्धान्तहरू, अनुष्ठानिक अभ्यासहरू, र ब्रह्माण्डविद्या ढाँचाहरूलाई एकल, सुसंगत प्रणालीमा सिपालु रूपमा बुनिएका छन्। यो अद्वितीय संश्लेषण केवल सह-अस्तित्व होइन तर गहिरो एकीकृत विश्वदृष्टि हो जहाँ दुवै परम्पराहरूबीचको सीमाहरू प्रायः तरल र पूरक हुन्छन्, जसले गहिरो व्यावहारिक र दार्शनिक सहिष्णुतालाई प्रतिबिम्बित गर्छ।",
        "description2": "नेवारहरूको लागि, धार्मिक पहिचान एक विशेष विकल्प होइन तर दोहोरो विरासत हो। एउटै परिवारले महत्त्वपूर्ण जीवन घटनाहरूमा हिन्दू र बौद्ध दुवै पुजारीहरूलाई सम्मान गर्नु, र व्यक्तिहरूले दुवै परम्पराहरूका चाडपर्वहरू र पवित्र स्थलहरूमा पूर्ण रूपमा सहभागी हुनु सामान्य छ। यो सद्भाव काठमाडौं उपत्यकाको पवित्र भूगोलको नै तानामा स्पष्ट छ, जहाँ हिन्दू मन्दिरहरू र बौद्ध स्तुपहरूले प्रायः उही आँगन साझा गर्छन्, र दुवै पन्थका देवताहरू एकै अनुष्ठान ढाँचाभित्र सम्मान गरिन्छन्।",
        "description3": "यो धार्मिक सद्भाव नेवार सभ्यताको सबैभन्दा विशिष्ट विशेषता हो। यसले दिव्यको एक परिष्कृत बुझाइलाई प्रतिनिधित्व गर्छ जसले साम्प्रदायिक लेबलहरूलाई ट्रान्सेन्ड गर्छ, एक जीवित प्रमाण प्रस्तुत गर्छ कि कसरी विविध आध्यात्मिक मार्गहरू एक समृद्ध, बहुपक्षीय, र लचिलो सांस्कृतिक पहिचान सिर्जना गर्न अभिसरण गर्न सक्छन्। भारतबाट हराएपछि नेवार समुदायभित्र प्राचीन संस्कृत बौद्ध ग्रन्थहरू र वज्रयान अभ्यासहरूको अस्तित्वले उनीहरूको भूमिकालाई एक अद्वितीय आध्यात्मिक विरासतका संरक्षकको रूपमा थप उजागर गर्छ।"
      },
      "hinduism": {
        "title": "नेवार हिन्दू धर्म: तान्त्रिक र देवी-केन्द्रित परम्पराहरू",
        "description1": "नेवार हिन्दू धर्म दिव्य महिला (शाक्त परम्परा) को पूजामा यसको बलियो जोडद्वारा विशिष्ट छ, विशेष गरी शक्तिशाली मातृ देवीहरू जस्तै तलेजु (राजकीय देवी), कुमारी (जीवित देवी), र दक्षिणकालीको आराधनामार्फत। यो परम्परा तान्त्रिक सिद्धान्तहरूद्वारा गहिरो रूपमा संक्रमित छ, जटिल रीतिरिवाजहरू, मन्त्रहरू (पवित्र जप), यन्त्रहरू (रहस्यमय आरेखहरू), र गूढ ज्ञानलाई आध्यात्मिक शक्तिमा पहुँच गर्न प्रयोग गर्दै। पन्थले मच्छेन्द्रनाथ र करुणामय (लोकेश्वर) जस्ता विशिष्ट स्थानीय देवताहरू समावेश गर्छ, जो उपत्यकाको पहिचानको केन्द्रमा छन्।",
        "description2": "शिव, विष्णु, र गणेश जस्ता मुख्य देवताहरूलाई प्यान-इण्डियन हिन्दू धर्मसँग साझा गर्दै, नेवार व्याख्या विशिष्ट रूपमा स्थानीयकृत छ। नेवार हिन्दूहरूबीचको जाति प्रणाली, पुजारीहरू (राजोपाध्याय ब्राह्मणहरू), मन्दिर हेरचेरकर्ताहरू, र कारीगरहरूको लागि विशिष्ट भूमिकाहरूसहित, सामाजिक र धार्मिक दुवै जीवनलाई संरचना गर्छ। उनीहरूका रीतिरिवाजहरू जटिल बलिहरू, जटिल पंचांग पालनाहरू, र उपत्यकाको कृषि र शहरी चक्रहरूसँग गहिरो जडानद्वारा विशेषता छन्।",
        "description3": "नेवार हिन्दू परम्परा यसैगरी हिन्दू धर्मको एक महत्त्वपूर्ण र गतिशील स्ट्रेन्ड हो जसले आद्यवस्तुहरू संरक्षण गरेको छ भने आफ्नो विशिष्ट पहिचान विकास गरेको छ। यो दक्षिण एसियाभर तान्त्रिक र देवी-उन्मुख अभ्यासहरूको ऐतिहासिक विकास बुझ्नको लागि एक महत्त्वपूर्ण लिङ्कको रूपमा सेवा गर्छ।",
        "practices": {
          "title": "मुख्य अनुष्ठानिक अभ्यासहरू"
        }
      },
      "buddhism": {
        "title": "नेवार बौद्ध धर्म: अन्तिम निरन्तर संस्कृत बौद्ध परम्परा",
        "description1": "नेवार बौद्ध धर्म, जसलाई नवयान पनि भनिन्छ, ऐतिहासिक महत्त्वको छ किनभने यसले विश्वमा संस्कृत-आधारित महायान र वज्रयान बौद्ध धर्मको अन्तिम निरन्तर परम्पराको प्रतिनिधित्व गर्छ। जब बौद्ध धर्म भारतमा कम भयो, काठमाडौं उपत्यकाका नेवार व्यापारीहरू र भिक्षुहरू यसका प्राथमिक संरक्षक बने, संस्कृत पाण्डुलिपिहरू, अनुष्ठान म्यानुअलहरू, र कलात्मक परम्पराहरूको विशाल भण्डार संरक्षण गरे जुन अन्यथा हराउने थियो। यो परम्परा महायानको आदर्श बोधिसत्त्वमा बलियो जोड दिन्छ - सबैको लाभको लागि ज्ञानोदय प्राप्त गर्न समर्पित एक प्राणी।",
        "description2": "नेवार बौद्ध धर्मको एक अद्वितीय सामाजिक विशेषता यसको समुदायभित्र जाति-जस्तो संरचनाको एकीकरण हो। बज्राचार्य र शाक्यहरूले पुजारी वर्गहरू बनाउँछन्, जसले जटिल तान्त्रिक रीतिरिवाजहरू सञ्चालन गर्न र पवित्र ग्रन्थहरू र मठहरू (बहा र बही) कायम राख्न जिम्मेवार छन्। अन्यत्र मठ परम्पराहरूभन्दा फरक, नेवार बौद्ध पुजारीहरू गृहस्थी हुन्, विवाह गर्छन् र समुदायभित्र बस्छन्, जुन परम्पराको निरन्तरताको लागि महत्त्वपूर्ण छ। मुख्य अभ्यासहरूमा घरेलु वेदीहरूमा दैनिक पूजा (पूजा), जटिल जीवनचक्र रीतिरिवाजहरू (संस्कारहरू), र बौद्ध प्रतीकवादले भरिपूर्ण चाडपर्व क्यालेन्डरको पालन समावेश छ।",
        "practices": {
          "title": "मुख्य सिद्धान्तगत र अनुष्ठानिक अभ्यासहरू"
        }
      },
      "deities": {
        "title": "नेवार देवताहरूको समन्वयात्मक पन्थ",
        "subtitle": "हिन्दू र बौद्ध संसारहरूलाई जोड्ने दिव्य प्राणीहरू अन्वेषण गर्दै",
        "significance": "धार्मिक महत्त्व र भूमिका"
      },
      "rituals": {
        "title": "जटिल जीवन चक्र रीतिरिवाजहरू (संस्कारहरू)",
        "introduction": "नेवार संस्कृति जीवनचक्र रीतिरिवाजहरू (संस्कारहरू) को लागि परिचित छ जसले जन्मदेखि मृत्यु र त्यसपछिको हरेक चरणलाई पवित्र बनाउँछ। यी रीतिरिवाजहरू, जसको संख्या सोह्र (गृहस्थ षोडश संस्कार) सम्म पुग्छ, व्यक्तिलाई शुद्ध गर्ने, सामाजिक मान्यता सुनिश्चित गर्ने, र ब्रह्माण्डीय क्रम कायम राख्ने आवश्यक छन्। मुख्य समारोहहरूमा पहिलो चामल खुवाउने (मचा जंक्वा), युवतीहरूको नक्कली विवाह समारोह (इही वा बेल बिबाह), केटाहरूको भिक्षुत्वमा दीक्षा (बरे चुयेगु), र अन्तिम अन्त्येष्टि संस्कार (सगण र क्रिया) समावेश छन्। प्रत्येक अनुष्ठान एक गहिरो समुदाय घटना हो जसले सामाजिक बन्धनहरूलाई बलियो बनाउँछ र सांस्कृतिक मूल्यहरूलाई पुस्ताहरूमा स्थानान्तरण गर्छ।",
        "download": {
          "title": "नेवारी संस्कारहरूको एक व्यापक गाइड",
          "description": "सबै प्रमुख नेवार जीवनचक्र रीतिरिवाजहरूको दार्शनिक अर्थहरू, चरण-दर-चरण प्रक्रियाहरू, र सामाजिक महत्त्वको अन्वेषण गर्ने हाम्रो विस्तृत PDF गाइड डाउनलोड गर्नुहोस्।",
          "button": "अनुष्ठान गाइड PDF डाउनलोड गर्नुहोस्"
        }
      },
      "festivals": {
        "title": "जीवन्त चाडपर्व चक्र",
        "subtitle": "भक्ति, समुदाय, र संस्कृतिलाई एकताबद्ध गर्ने वार्षिक उत्सवहरू",
        "traditions": "मुख्य अनुष्ठानहरू र प्रतीकात्मक अर्थहरू"
      },
      "temples": {
        "title": "पवित्र वास्तुकला: पगोडाहरू, स्तुपहरू, र शिखरहरू",
        "viewAll": "पवित्र भूगोल अन्वेषण गर्नुहोस्"
      },
      "spirituality": {
        "title": "अन्तर्निहित आध्यात्मिक दर्शन",
        "description1": "नेवार आध्यात्मिकता मूलतः व्यावहारिक र विश्व-पुष्टि गर्ने छ, जसले दैनिक जीवन र समुदायको सन्दर्भभित्र पवित्र खोज्न खोज्छ। यो गैर-द्वैतवादी प्रवृत्तिद्वारा विशेषता छ जसले दिव्यलाई विश्वमा निहित देख्छ बरु विशुद्ध रूपमा पारलौिक भन्दा। यो दृष्टिकोण हिन्दू भक्ति (भक्ति), बौद्ध करुणा (करुणा), र तान्त्रिक अभ्यासहरूको सहज एकीकरणको लागि अनुमति दिन्छ जसले विश्वव्यापी अनुभवलाई मुक्तिको मार्गमा रूपान्तरण गर्न लक्ष्य राख्छ। आध्यात्मिक जीवन दैनिक घरेलु प्रार्थनाहरू, मौसमी चाडपर्वहरू, र प्रकृति, पूर्वजहरू, र गुरु-शिष्य परम्पराहरूको लागि गहिरो श्रद्धाद्वारा पोषित हुन्छ।",
        "description2": "यस आध्यात्मिक ढाँचाले एक मजबूत नैतिक र ब्रह्माण्डविद्या प्रणाली प्रदान गर्छ जसले व्यक्तिगत आध्यात्मिक खोज र सामूहिक सामाजिक जिम्मेवारीबीच सन्तुलन कायम राख्छ। यसले नेवारहरूलाई आधुनिक परिवर्तनहरू नेविगेट गर्न सशक्त बनाउँछ भने एक बलियो पहिचानको भावना कायम राख्छ, एक बढ्दो वैश्विक संसारमा धार्मिक बहुलवाद र सांस्कृतिक लचिलोपनको टिकाउ मोडेलहरूमा मूल्यवान अन्तर्दृष्टिहरू प्रदान गर्छ।",
        "principles": {
          "title": "मुख्य दार्शनिक सिद्धान्तहरू"
        }
      },
      "resources": {
        "title": "गहिरो सिकाइ स्रोतहरू",
        "subtitle": "गहिरो अध्ययनको लागि अकादमिक र मल्टिमिडिया सामग्रीहरूको एक क्युरेटेड चयन",
        "books": {
          "title": "मौलिक अकादमिक ग्रन्थहरू र नृवंशविज्ञानहरू"
        },
        "videos": {
          "title": "वृत्तचित्र फिल्महरू र व्याख्यान श्रृंखलाहरू"
        },
        "institutions": {
          "title": "अग्रणी अनुसन्धान केन्द्रहरू र अभिलेखहरू"
        },
        "explore": "ग्रन्थसूची ब्राउज गर्नुहोस्",
        "watch": "फिल्मोग्राफी हेर्नुहोस्",
        "visit": "डिजिटल अभिलेखहरूमा पहुँच गर्नुहोस्"
      }
    },
    "events": {
      "upcomingEvents": "आगामी कार्यक्रमहरू",
      "pastEvents": "वित्तकालीन कार्यक्रमहरू",
      "monthlyMeeting": "मासिक समुदाय बैठक",
      "culturalFestival": "सांस्कृतिक चाडपर्व",
      "youthProgram": "युवा सशक्तिकरण कार्यक्रम",
      "heritageTour": "सम्पदा स्थल भ्रमण",
      "date": "मिति",
      "time": "समय",
      "location": "स्थान",
      "description": "विवरण",
      "attendees": "सहभागीहरू",
      "register": "दर्ता गर्नुहोस्",
      "viewDetails": "विवरण हेर्नुहोस्",
      "addToCalendar": "क्यालेन्डरमा थप्नुहोस्",
      "noEvents": "कुनै आगामी कार्यक्रमहरू छैनन्",
      "meetingDescription": "समुदाय मामिलाहरू, सांस्कृतिक संरक्षण, र भविष्यको योजनाको छलफल गर्न नेवार समुदाय सदस्यहरूको मासिक सभा।",
      "festivalDescription": "हाम्रो समृद्ध विरासत प्रदर्शन गर्ने परम्परागत संगीत, नृत्य, खाना, र रीतिरिवाजहरूसहित नेवार संस्कृतिको उत्सव।",
      "youthDescription": "कौशलहरू, सांस्कृतिक ज्ञान, र नेतृत्व प्रशिक्षणसहित युवा नेवार पुस्तालाई सशक्त बनाउने कार्यक्रमहरूमा केन्द्रित।",
      "heritageDescription": "हाम्रो वास्तुकला र सांस्कृतिक विरासतको बारेमा सदस्यहरूलाई शिक्षित गर्न ऐतिहासिक नेवार स्थलहरूमा निर्देशित भ्रमणहरू।"
    },
    "contact": {
      "hero": {
        "badge": "सम्पर्कमा रहनुहोस्",
        "title": "नेवार समाजलाई सम्पर्क गर्नुहोस्",
        "subtitle": "नेवार संस्कृतिको समृद्ध विरासत संरक्षण र मनाउन हामीसँग जडान हुनुहोस्"
      },
      "form": {
        "title": "हामीलाई सन्देश पठाउनुहोस्",
        "subtitle": "हामी तपाईंबाट सुन्न रुचाउँछौं। हामीलाई सन्देश पठाउनुहोस् र हामी चाँडै भन्दा चाँडै जवाफ दिनेछौं।",
        "fullName": "पूरा नाम",
        "fullNamePlaceholder": "आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्",
        "email": "ईमेल ठेगाना",
        "emailPlaceholder": "आफ्नो ईमेल ठेगाना प्रविष्ट गर्नुहोस्",
        "password": "पासवर्ड",
        "passwordPlaceholder": "सुरक्षित पासवर्ड सिर्जना गर्नुहोस्",
        "country": "देश",
        "selectCountry": "आफ्नो देश चयन गर्नुहोस्",
        "message": "तपाईंको सन्देश",
        "messagePlaceholder": "तपाईंको विचारहरू, प्रश्नहरू, वा तपाईं कसरी योगदान गर्न चाहनुहुन्छ भन्ने बारेमा हामीलाई भन्नुहोस्...",
        "submit": "सन्देश पठाउनुहोस्",
        "submitting": "पठाइँदै...",
        "successMessage": "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइएको छ।",
        "errorMessage": "केही गलत भयो। कृपया फेरि प्रयास गर्नुहोस्।"
      },
      "importance": {
        "title": "किन यो वेबसाइट आवश्यक छ",
        "description1": "नेवार समाज वेबसाइटले विश्वभरका नेवार समुदायहरूलाई जडान गर्ने एक महत्त्वपूर्ण डिजिटल ब्रिजको रूपमा सेवा गर्छ भने आउँदा पुस्ताहरूको लागि हाम्रो प्राचीन सांस्कृतिक विरासत संरक्षण गर्छ। तीव्र वैश्वीकरणको युगमा, यस्ता प्लेटफर्महरू सांस्कृतिक पहिचान कायम राख्नको लागि महत्त्वपूर्ण छन्।",
        "description2": "यो वेबसाइट मात्र सूचना पोर्टल भन्दा बढी हो - यो जीवित अभिलेख, समुदाय हब, र शैक्षिक स्रोत हो जसले हाम्रो समृद्ध परम्पराहरू, भाषा, र रीतिरिवाजहरू डिजिटल युगमा फस्टिरहने सुनिश्चित गर्छ।",
        "cultural": {
          "title": "सांस्कृतिक संरक्षण",
          "description": "प्राचीन नेवार परम्पराहरू, रीतिरिवाजहरू, र ज्ञानलाई कागजातमा उतार्ने र संरक्षण गर्ने जुन समयको साथमा हराउन सक्छ।"
        },
        "preservation": {
          "title": "विरासत सुरक्षा",
          "description": "डिजिटल संरक्षण प्रयासहरू मार्फत हाम्रो अद्वितीय वास्तुकला, कलात्मक, र आध्यात्मिक विरासतलाई सुरक्षा गर्ने।"
        },
        "global": {
          "title": "वैश्विक जडान",
          "description": "विश्वभरका नेवार प्रवासी समुदायहरूलाई जडान गर्ने, एकता र सांस्कृतिक आदानप्रदानलाई बढावा दिने।"
        },
        "education": {
          "title": "शैक्षिक स्रोत",
          "description": "विद्यार्थीहरू, शोधकर्ताहरू, र उत्साहीहरूको लागि नेवार संस्कृतिको बारेमा प्रामाणिक सिकाइ सामग्रीहरू प्रदान गर्ने।"
        }
      },
      "info": {
        "title": "सम्पर्क जानकारी",
        "email": "ईमेल",
        "phone": "फोन",
        "address": "ठेगाना",
        "addressDetail": "नुवाकोट, नेपाल - वैश्विक नेवार समुदाय",
        "hours": "प्रतिक्रिया समय",
        "hoursDetail": "सामान्यतया २४-४८ घण्टाभित्र"
      },
      "stats": {
        "title": "हाम्रो समुदाय प्रभाव",
        "members": "समुदाय सदस्यहरू",
        "countries": "पुगेका देशहरू",
        "articles": "सांस्कृतिक लेखहरू",
        "years": "विरासतको वर्षहरू"
      },
      "cta": {
        "title": "हाम्रो सांस्कृतिक संरक्षण आन्दोलनमा सामेल हुनुहोस्",
        "description": "आउँदा पुस्ताहरूको लागि नेवार विरासत संरक्षण र प्रवर्द्धन गर्न समर्पित वैश्विक समुदायको भाग बन्नुहोस्।",
        "join": "समुदायमा सामेल हुनुहोस्",
        "donate": "हामीलाई समर्थन गर्नुहोस्"
      }
    },
    "donate": {
      "title": "हाम्रो समुदायलाई समर्थन गर्नुहोस्",
      "description": "तपाईंको दानले नेवार संस्कृति संरक्षण र समुदाय पहलहरूलाई समर्थन गर्न मद्दत गर्छ",
      "success": {
        "title": "तपाईंको उदारताको लागि धन्यवाद!",
        "message": "तपाईंको दान रेकर्ड गरिएको छ र भविष्यको राम्रो कामको लागि प्रयोग गरिनेछ।"
      },
      "impact": {
        "futureWork": "भविष्यको राम्रो काम",
        "futureWorkDesc": "तपाईंको भुक्तानीले भविष्यको समुदाय विकास र सांस्कृतिक संरक्षणलाई समर्थन गर्नेछ",
        "recorded": "दान रेकर्ड गरियो",
        "recordedDesc": "पारदर्शिताको लागि प्रत्येक दान हाम्रो इतिहासमा सावधानीपूर्वक रेकर्ड गरिन्छ",
        "languageEducation": "निःशुल्क भाषा शिक्षा",
        "languageEducationDesc": "सबै समुदाय सदस्यहरूको लागि निःशुल्क नेवा भाषा पाठ्यक्रमहरूमा पहुँच",
        "deathSupport": "मृत्यु सहयोग सेवा",
        "deathSupportDesc": "अन्त्येष्टि व्यवस्था र १२-१३ दिनको रीतिरिवाजहरूको लागि प्रति घर रु १००० सहयोग",
        "culturePreservation": "संस्कृति संरक्षण",
        "culturePreservationDesc": "लाखे जात्रा, कृष्ण अष्टमी, भजन कार्यक्रमहरू र गुथी घर निर्माणलाई समर्थन"
      },
      "form": {
        "title": "फरक बनाउनुहोस्",
        "subtitle": "तपाईंको योगदानले धेरै समुदाय पहलहरूलाई समर्थन गर्छ",
        "donationType": "दान उद्देश्य",
        "name": "पूरा नाम",
        "email": "ईमेल ठेगाना",
        "phone": "फोन नम्बर",
        "amount": "दान रकम",
        "address": "ठेगाना",
        "paymentMethod": "भुक्तानी विधि",
        "message": "सन्देश",
        "submit": "अहिले दान गर्नुहोस्",
        "processing": "तपाईंको दान प्रशोधन गर्दै..."
      },
      "types": {
        "general": "सामान्य समुदाय निधि",
        "deathSupport": "मृत्यु सहयोग सेवा",
        "guthi": "गुथी घर निर्माण",
        "culture": "सांस्कृतिक कार्यक्रमहरू र चाडपर्वहरू",
        "education": "भाषा शिक्षा कार्यक्रम"
      },
      "methods": {
        "esewa": "ईसेवा",
        "imepay": "आइएमइ पे",
        "bank": "बैंक स्थानान्तरण",
        "credit": "क्रेडिट/डेबिट कार्ड"
      },
      "instructions": {
        "title": "भुक्तानी निर्देशनहरू",
        "esewa": "कृपया आफ्नो दान हाम्रो ईसेवा आईडीमा पठाउनुहोस्:",
        "imepay": "कृपया आफ्नो दान हाम्रो आइएमइ पे आईडीमा पठाउनुहोस्:",
        "bank": "कृपया हाम्रो बैंक खातामा स्थानान्तरण गर्नुहोस्:",
        "credit": "तपाईंलाई सुरक्षित भुक्तानी गेटवेमा पुनः निर्देशित गरिनेछ"
      }
    },
    "auth": {
      "login": {
        "title": "फेरि स्वागत छ",
        "subtitle": "जारी राख्न आफ्नो खातामा साइन इन गर्नुहोस्",
        "email": "ईमेल ठेगाना",
        "emailPlaceholder": "तपाईंको@ईमेल.com",
        "password": "पासवर्ड",
        "passwordPlaceholder": "आफ्नो पासवर्ड प्रविष्ट गर्नुहोस्",
        "rememberMe": "मलाई सम्झनुहोस्",
        "forgotPassword": "तपाईंको पासवर्ड बिर्सनुभयो?",
        "signIn": "साइन इन गर्नुहोस्",
        "noAccount": "खाता छैन?",
        "createAccount": "खाता सिर्जना गर्नुहोस्"
      },
      "signup": {
        "title": "आफ्नो खाता सिर्जना गर्नुहोस्",
        "subtitle": "विश्वभरका हजारौं नेवार समुदाय सदस्यहरूमा सामेल हुनुहोस्",
        "firstName": "पहिलो नाम",
        "firstNamePlaceholder": "आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्",
        "lastName": "थर",
        "lastNamePlaceholder": "आफ्नो थर प्रविष्ट गर्नुहोस्",
        "email": "ईमेल ठेगाना",
        "emailPlaceholder": "तपाईंको@ईमेल.com",
        "password": "पासवर्ड",
        "passwordPlaceholder": "पासवर्ड सिर्जना गर्नुहोस्",
        "confirmPassword": "पासवर्ड पुष्टि गर्नुहोस्",
        "confirmPasswordPlaceholder": "आफ्नो पासवर्ड फेरि प्रविष्ट गर्नुहोस्",
        "agreeToTerms": "म सर्तहरू र शर्तहरूसँग सहमत छु",
        "signUp": "साइन अप गर्नुहोस्",
        "alreadyHaveAccount": "पहिले नै खाता छ?",
        "signIn": "साइन इन गर्नुहोस्",
        "benefitsTitle": "किन हाम्रो समुदायमा सामेल हुनुहोस्?",
        "benefit1": "विश्वभरका नेवार समुदाय सदस्यहरूसँग जडान हुनुहोस्",
        "benefit2": "विशेष सांस्कृतिक कार्यक्रमहरू र स्रोतहरूमा पहुँच",
        "benefit3": "नेवार परम्पराहरू र भाषा साझा र संरक्षण गर्नुहोस्"
      }
    },
    "calendar": {
      "title": "नेपाली क्यालेन्डर",
      "subtitle": "विक्रम सम्बत क्यालेन्डर",
      "selectYear": "वर्ष चयन गर्नुहोस्",
      "currentYear": "हालको वर्ष",
      "today": "आज",
      "holiday": "बिदा",
      "events": "कार्यक्रमहरू",
      "addEvent": "कार्यक्रम थप्नुहोस्",
      "noEvents": "कुनै कार्यक्रमहरू छैनन्"
    },
    "months": {
      "baishakh": "बैशाख",
      "jestha": "जेठ",
      "ashadh": "असार",
      "shrawan": "श्रावण",
      "bhadra": "भदौ",
      "ashwin": "आश्विन",
      "kartik": "कार्तिक",
      "mangsir": "मंसिर",
      "poush": "पुष",
      "magh": "माघ",
      "falgun": "फागुन",
      "chaitra": "चैत्र"
    },
    "meetup": {
      "title": "वैश्विक नेवार समाज भेटघाट",
      "subtitle": "प्रविधि मार्फत विश्वभरका नेवारहरूलाई जडान गर्दै",
      "description": "हाम्रो आभासी सभा स्थानमा सामेल हुनुहोस् जहाँ विश्वभरका नेवार समुदाय सदस्यहरू सँगै जडान हुन सक्छन्, छलफल गर्न सक्छन्, र हाम्रो समृद्ध संस्कृतिलाई सँगै मनाउन सक्छन्।",
      "importance": {
        "title": "किन आभासी भेटघाटहरू आवश्यक छन्",
        "points": [
          "विभिन्न देशहरूमा रहेका नेवारहरूबीच भौगोलिक दूरीहरूलाई पुल गर्ने",
          "समुदाय कार्यक्रमहरू, चाडपर्वहरू, र महत्त्वपूर्ण मामिलाहरूको छलफल गर्ने",
          "नेवार संस्कृति र परम्पराहरू संरक्षण र प्रवर्द्धन गर्ने",
          "पुस्ताहरू पार गरेर ज्ञान र अनुभवहरू साझा गर्ने",
          "महत्त्वपूर्ण घटनाहरूको समयमा आपतकालीन समुदाय बैठकहरू"
        ]
      },
      "features": {
        "title": "बैठक उद्देश्यहरू र विषयहरू",
        "items": [
          "सांस्कृतिक कार्यक्रम योजना र समन्वय",
          "नेवार भाषा संरक्षण छलफलहरू",
          "युवा संलग्नता र नेतृत्व कार्यक्रमहरू",
          "समुदाय सदस्यहरूबीच व्यवसाय नेटवर्किंग",
          "शैक्षिक वर्कशपहरू र कौशल साझेदारी",
          "चाडपर्व उत्सवहरू र अनुष्ठान छलफलहरू",
          "समुदाय कल्याण र सहयोग पहलहरू"
        ]
      },
      "techBenefits": {
        "title": "सँगै प्रविधिलाई अंगीकार गर्दै",
        "description": "जब हामी आभासी रूपमा जडान हुन्छौं, हामी प्रविधिसँग सिक्छौं र बढ्छौं। प्रत्येक बैठक हाम्रो डिजिटल कौशलहरू बढाउने र आधुनिक उपकरणहरूसँग अद्यावधिक रहने अवसर हो।"
      },
      "joinButton": "अहिले वैश्विक भेटमा सामेल हुनुहोस्",
      "instructions": "हाम्रो गुगल मिटमा सामेल हुन माथिको बटन क्लिक गर्नुहोस्। कुनै दर्ता आवश्यक छैन - केवल क्लिक गर्नुहोस् र जडान हुनुहोस्!",
      "schedule": {
        "title": "नियमित बैठक तालिका",
        "weekly": "हरेक शनिबार: राति ७:०० बजे NPT",
        "monthly": "पहिलो आइतबार: समुदाय सामान्य बैठक",
        "special": "विशेष कार्यक्रमहरू अग्रिम रूपमा घोषणा गरिने"
      }
    },
    "notices": {
      "title": "समुदाय सूचनाहरू र घोषणाहरू",
      "subtitle": "नवीनतम समुदाय समाचार र कार्यक्रमहरूसँग अद्यावधिक रहनुहोस्",
      "description": "विश्वभरका सबै नेवार समाज सदस्यहरूको लागि महत्त्वपूर्ण घोषणाहरू, बैठक तालिकाहरू, र समुदाय अपडेटहरू।",
      "recentNotices": "हालैका सूचनाहरू",
      "allNotices": "सबै सूचनाहरू",
      "noNotices": "कुनै सूचनाहरू उपलब्ध छैनन्",
      "createNotice": "नयाँ सूचना सिर्जना गर्नुहोस्",
      "editNotice": "सूचना सम्पादन गर्नुहोस्",
      "noticeTitle": "सूचना शीर्षक",
      "noticeContent": "सूचना सामग्री",
      "noticeCategory": "श्रेणी",
      "noticePriority": "प्राथमिकता",
      "sendToAll": "सबै सदस्यहरूलाई पठाउनुहोस्",
      "scheduleSend": "पठाउने तालिका बनाउनुहोस्",
      "attachments": "अनुलग्नकहरू",
      "categories": {
        "meeting": "बैठक",
        "event": "कार्यक्रम",
        "urgent": "अत्यावश्यक",
        "cultural": "सांस्कृतिक",
        "financial": "आर्थिक सहयोग",
        "language": "भाषा कक्षा",
        "festival": "चाडपर्व",
        "general": "सामान्य"
      },
      "priorities": {
        "high": "उच्च",
        "medium": "मध्यम",
        "low": "निम्न"
      },
      "actions": {
        "send": "सूचना पठाउनुहोस्",
        "save": "ड्रफ्ट बचत गर्नुहोस्",
        "cancel": "रद्द गर्नुहोस्",
        "delete": "मेटाउनुहोस्",
        "edit": "सम्पादन गर्नुहोस्"
      },
      "status": {
        "sent": "पठाइयो",
        "draft": "ड्रफ्ट",
        "scheduled": "तालिकाबद्ध"
      },
      "recipients": "प्रापकहरू",
      "sentDate": "पठाइएको मिति",
      "createdBy": "द्वारा सिर्जना गरियो",
      "adminPanel": "एड्मिन प्यानल",
      "memberView": "सदस्य दृश्य",
      "statistics": "तथ्याङ्क",
      "totalNotices": "कुल सूचनाहरू",
      "totalRecipients": "कुल प्रापकहरू",
      "todayNotices": "आजका सूचनाहरू"
    },


 "features": {
    "title": "नेवार समाज अन्वेषण गर्नुहोस्",
    "subtitle": "हाम्रो समृद्ध सांस्कृतिक विरासत, भाषा स्रोतहरू, र समुदाय पहलहरू खोज्नुहोस्",
    "culturalHeritage": {
      "title": "सांस्कृतिक विरासत",
      "subtitle": "मन्दिर, कला र चाडपर्वहरू",
      "description": "५०+ प्राचीन मन्दिरहरू, परम्परागत कलाहरू, र २५+ जीवन्त चाडपर्वहरू अन्वेषण गर्नुहोस्"
    },
    "languageLearning": {
      "title": "भाषा सिकाइ",
      "subtitle": "AI शिक्षक र पाठहरू",
      "description": "अन्तरक्रियात्मक AI शिक्षक र संरचित पाठहरूसँग नेवार भाषा सिक्नुहोस्"
    },
    "community": {
      "title": "समुदाय",
      "subtitle": "सामेल हुनुहोस् र जडान हुनुहोस्",
      "description": "विश्वभरिका १०,०००+ नेवार समुदाय सदस्यहरूसँग जडान हुनुहोस्"
    },
    "calendar": {
      "title": "नेपाली पात्रो",
      "subtitle": "कार्यक्रम र चाडपर्वहरू",
      "description": "चाडपर्व मितिहरूसहित परम्परागत विक्रम सम्बत पात्रो"
    },


     "sections": {
    "featuredTemples": {
      "title": "मुख्य सांस्कृतिक स्थलहरू",
      "description": "प्राचीन नेवार वास्तुकला र युनेस्को विरासत स्थलहरू अन्वेषण गर्नुहोस्",
      "viewAll": "सबै मन्दिरहरू अन्वेषण गर्नुहोस्"
    }
  },
  "common": {
    "lessons": "पाठहरू",
    "explore": "अन्वेषण गर्नुहोस्",
    "learnMore": "थप जान्नुहोस्",
    "viewAll": "सबै हेर्नुहोस्",
    "joinNow": "अहिले सामेल हुनुहोस्",
    "scrollToExplore": "अन्वेषण गर्न स्क्रोल गर्नुहोस्"
  },
    


    "features": {
      "flashcards": {
        "title": "इन्टरएक्टिभ फ्ल्याशकार्डहरू",
        "description": "अन्तराल दोहोराइसँग शब्दावली अभ्यास गर्नुहोस्"
      },
      "chatroom": {
        "title": "भाषा विनिमय",
        "description": "मूल वक्ताहरूसँग अभ्यास गर्नुहोस्"
      },
      "aiTutor": {
        "title": "एआई ट्यूटर",
        "description": "व्यक्तिगतकृत मद्दत २४/७ प्राप्त गर्नुहोस्"
      },
      "translation": {
        "title": "अनुवाद उपकरण",
        "description": "अंग्रेजी, नेपाली, र नेवार बीच अनुवाद गर्नुहोस्"
      },
      "title": "नेवार समाज अन्वेषण गर्नुहोस्",
    "subtitle": "हाम्रो समृद्ध सांस्कृतिक विरासत, भाषा स्रोतहरू, र समुदाय पहलहरू खोज्नुहोस्",
    "culturalHeritage": {
      "title": "सांस्कृतिक विरासत",
      "subtitle": "मन्दिर, कला र चाडपर्वहरू",
      "description": "५०+ प्राचीन मन्दिरहरू, परम्परागत कलाहरू, र २५+ जीवन्त चाडपर्वहरू अन्वेषण गर्नुहोस्"
    },
    "languageLearning": {
      "title": "भाषा सिकाइ",
      "subtitle": "AI शिक्षक र पाठहरू",
      "description": "अन्तरक्रियात्मक AI शिक्षक र संरचित पाठहरूसँग नेवार भाषा सिक्नुहोस्"
    },
    "community": {
      "title": "समुदाय",
      "subtitle": "सामेल हुनुहोस् र जडान हुनुहोस्",
      "description": "विश्वभरिका 3,०००+ नेवार समुदाय सदस्यहरूसँग जडान हुनुहोस्"
    },
    "calendar": {
      "title": "नेपाली पात्रो",
      "subtitle": "कार्यक्रम र चाडपर्वहरू",
      "description": "चाडपर्व मितिहरूसहित परम्परागत विक्रम सम्बत पात्रो"
    }

    },
  },

 "sections": {
    "featuredTemples": {
      "title": "मुख्य सांस्कृतिक स्थलहरू",
      "description": "प्राचीन नेवार वास्तुकला र युनेस्को विरासत स्थलहरू अन्वेषण गर्नुहोस्",
      "viewAll": "सबै मन्दिरहरू अन्वेषण गर्नुहोस्"
    }
  },

 "common": {
    "lessons": "पाठहरू",
    "explore": "अन्वेषण गर्नुहोस्",
    "learnMore": "थप जान्नुहोस्",
    "viewAll": "सबै हेर्नुहोस्",
    "joinNow": "अहिले सामेल हुनुहोस्",
    "scrollToExplore": "अन्वेषण गर्न स्क्रोल गर्नुहोस्"
  },
  
    "footer": {
"about": {
      "title": "हाम्रो बारेमा",
      "description": "सन् २०८० देखि नेवार संस्कृति, भाषा, र विरासत विश्वव्यापी रूपमा संरक्षण र प्रवर्द्धन गर्दै।",
      "history": "हाम्रो इतिहास",
      "mission": "लक्ष्य र दृष्टि",
      "values": "मुख्य मूल्यहरू",
      "leadership": "नेतृत्व"
    },
    "quickLinks": "द्रुत लिङ्कहरू",
    "aboutUs": "हाम्रो बारेमा",
    "connect": "हामीसँग जडान हुनुहोस्",
    "visit": "DANGOL AI",
    "developedBy": "विकासकर्ता"
  },



      "developedBy": "डंगोल एआई द्वारा विकसित",
      "visit": "डंगोल एआई भ्रमण गर्नुहोस्",
      "quote": "आउँदा पुस्ताहरूको लागि नेवार संस्कृति, भाषा, र विरासत संरक्षण र प्रवर्द्धन गर्दै।",
      "social": {
        "facebook": "फेसबुक",
        "instagram": "इन्स्टाग्राम",
        "youtube": "यूट्यूब",
        "twitter": "ट्विटर"
      },
      
},



  
  "new": {
     "nav": {
      "home": "घर",
      "about": "जाःया बारे",
      "language": "भाय्",
      "heritage": "विरासत",
      "resources": "स्रोत",
      "events": "कार्यक्रम",
      "community": "समुदाय",
      "notices": "सूचना",
      "contact": "सम्पर्क",
      "donate": "दान",
      "signIn": "साइन इन",
      "signUp": "साइन अप",
        "culture": "संस्कृति",

      "aboutItems": {
        "our_history": "जाःया इतिहास",
        "mission_vision": "मिशन र दृष्टि",
        "vision_values": "दृष्टि र मूल्य",
        "leadership_community": "नेतृत्व र समुदाय"
      },
      "aboutItemsDesc": {
        "our_history": "इन्टरएक्टिभ टाइमलाइन, भिडियो, छायाचित्र, AI च्याटबट प्रश्नोत्तर",
        "mission_vision": "एनिमेटेड कार्ड, काउन्टर, होवर प्रभाव",
        "vision_values": "मूल्य प्रतिनिधित्व याइगु आइकन, 3D फ्लिप कार्ड, AI क्विज",
        "leadership_community": "प्रोफाइल कार्ड, होवर 3D लिफ्ट, सोशल लिङ्क"
      },
      "languageItems": {
        "learn_newar_language": "नेवार भाय् सिक्",
        "language_exchange_chatroom": "भाय् विनिमय च्याटरूम",
        "culture_religion_language": "संस्कृति, धर्म र भाय्",
        "culture_school": "संस्कृति स्कूल"
      },
      "languageItemsDesc": {
        "learn_newar_language": "AI शिक्षक सहायता याउगु संरचित शिक्षा",
        "language_exchange_chatroom": "AI-सहायता सुझाव याउगु रियलटाइम च्याट",
        "culture_religion_language": "मिडिया ग्यालरी, चाडपर्व याइगु भिडियो, AI सारांश",
        "culture_school": "भिडियो पाठ, AI अनुकूल क्विज, प्रगति ट्र्याकिंग"
      },
      "heritageItems": {
        "culture_customs": "संस्कृति र चलन",
        "religion_beliefs": "धर्म र विश्वास",
        "festivals_celebrations": "चाडपर्व र उत्सव",
        "caste_occupation": "जात र धन्दा"
      },
      "heritageItemsDesc": {
        "culture_customs": "परम्परा, जीवनशैली, र सांस्कृतिक अभ्यास समृद्ध मिडिया र AI अन्तर्दृष्टि याउगु अन्वेषण",
        "religion_beliefs": "विश्वास, रीतिरिवाज, देगः, र आध्यात्मिक अभ्यास मार्गदर्शित व्याख्या याउगु सिक्",
        "festivals_celebrations": "चाडपर्व क्यालेन्डर, उत्सव याइगु भिडियो, र AI-शक्ति प्राप्त सारांश याइगु कथा",
        "caste_occupation": "परम्परागत जात प्रणाली र धन्दा याइगु जानकारी"
      },
      "eventItems": {
        "upcoming_events": "आगामी कार्यक्रम",
        "festival_calendar": "चाडपर्व क्यालेन्डर"
      },
      "eventItemsDesc": {
        "upcoming_events": "3D कार्ड सूची, काउन्टाउन टाइमर, आरएसभिपी",
        "festival_calendar": "चाडपर्व छायाचित्र याउगु इन्टरएक्टिभ, स्क्रोल याइगु क्यालेन्डर"
      },
      "communityItems": {
        "join_us": "जू जुना यान",
        "news_updates": "खबर र अद्यावधिक",
        "meetup": "भेटघाट",
        "notices": "सूचना"
      },
      "communityItemsDesc": {
        "join_us": "साइनअप फर्म, रियलटाइम भ्यालिडेसन, AI मार्गदर्शन",
        "news_updates": "इन्टरएक्टिभ कार्ड-आधारित लेआउट, AI सारांश",
        "meetup": "ग्रुप कल र दकलं नेवा सदस्यता संदेश",
        "notices": "न्हूगु अद्यावधिक याइगु सूचना"
      }
  },

  "hero": {
    "badge": "सन् २०८० निसा नेवार विरासत संरक्षण",
    "title": "नेवार समाज",
    "subtitle": "संस्कृति संरक्षण • भाषा प्रवर्द्धन • समुदाय निर्माण",
    "subtitleNative": "संस्कृति संरक्षण • भाषा प्रवर्द्धन • समुदाय निर्माण",
    "description": "विश्वभरि हजारौं नेवार समुदाय सदस्यतेसं हाम्रो समृद्ध विरासत याये, हाम्रो प्राचीन भाषा सिक्ने आधुनिक प्रविधिद्वारा हाम्रो जीवन्त संस्कृतिसं जोडिने।",
    "cta1": "हाम्रो समुदायं सामेल यान",
    "cta2": "थप चिंये",
    "stats": {
      "artifacts": "५०+",
      "artifactsLabel": "सांस्कृतिक थलहरू",
      "lessons": "६०+", 
      "lessonsLabel": "भाषा पाठहरू",
      "assistant": "३ हजार+",
      "assistantLabel": "समुदाय सदस्यहरू",
      "festivals": "२५+",
      "festivalsLabel": "वार्षिक चाडहरू"
    }
  },
    "about": {
    "badge": "नेवार समाज जिले",
    "title": {
      "part1": "विरासत संरक्षण,",
      "part2": "भविष्य निर्माण"
    },
    "subtitle": "जिउ नेवार संस्कृति संरक्षण, जिउ भाषा प्रवर्द्धन, र विश्वभरि समुदाय सदस्यतेसं प्रविधि र परम्पराद्वारा जोड्न समर्पित छौं।",
    "links": {
      "0": {
        "title": "जिउ इतिहास",
        "description": "१२००+ वर्षको समृद्ध सांस्कृतिक विरासत"
      },
      "1": {
        "title": "लक्ष्य र दृष्टि",
        "description": "सांस्कृतिक संरक्षणको लागि जिउ लक्ष्यहरू"
      },
      "2": {
        "title": "मुख्य मूल्यहरू", 
        "description": "जिउ समुदायलाई मार्गदर्शन गर्ने सिद्धान्तहरू"
      },
      "3": {
        "title": "नेतृत्व",
        "description": "जिउ समर्पित टिमलाई भेट्ने"
      }
    },
    "mission": {
      "title": "जिउ मिशन",
      "description": "शिक्षा, प्रविधि, र समुदाय संलग्नताद्वारा नेवार सांस्कृतिक विरासत संरक्षण र प्रवर्द्धन गर्दै जिउ समृद्ध परम्पराहरूलाई भविष्यका पुस्ताहरूको लागि सुलभ बनाउने।"
    },
    "vision": {
      "title": "जिउ दृष्टि", 
      "description": "एक यस्तो विश्व जहाँ नेवार संस्कृति विश्वव्यापी रूपमा फस्टाउँछ, जिउ भाषा गर्वले बोलिन्छ, र जिउ समुदाय पुस्ता र सीमाहरू पारि जडान हुन्छ।"
    },
    "leadership": {
      "title": "जिउ नेतृत्व टिम",
      "description": "नेवार संस्कृतिलाई विश्वव्यापी रूपमा संरक्षण र प्रवर्द्धन गर्न अथक रूपमा काम गर्ने समर्पित व्यक्तिहरू",
      "viewFullTeam": "पूर्ण टिम भेट्ने",
      "leaders": {
        "0": {
          "name": "महेश डंगोल",
          "role": "अध्यक्ष",
          "image": "/mahesh.jpg",
          "bio": "दृष्टि र समर्पणसाथ नेवार समाजलाई नेतृत्व गर्दै, जिउ सांस्कृतिक विरासत संरक्षण"
        },
        "1": {
          "name": "ज्ञान कुमार डंगोल",
          "role": "उपाध्यक्ष", 
          "image": "/gyan.jpg",
          "bio": "व्यापक अनुभवसहित संचालन र समुदाय सम्बन्धहरू व्यवस्थापन"
        },
        "2": {
          "name": "रामहरि डंगोल",
          "role": "बैठक समन्वयक",
          "image": "/ramhari.jpg",
          "bio": "समुदाय कार्यक्रमहरू व्यवस्थापन र सहज संचालन सुनिश्चित गर्दै"
        },
        "3": {
          "name": "प्रकाश डंगोल", 
          "role": "सोशल मिडिया र मार्केटिंग",
          "image": "/prakash.jpg",
          "bio": "जिउ डिजिटल उपस्थिति विस्तार र नयाँ अवसरहरू खोज्दै"
        }
      }
    },
    "stats": {
      "members": "१,०००+",
      "membersLabel": "समुदाय सदस्यहरू",
      "articles": "५०+", 
      "articlesLabel": "सांस्कृतिक लेखहरू",
      "countries": "१५+",
      "countriesLabel": "देशहरूमा पुग्यो"
    },
    "cta": {
      "title": "जिउ समुदायं सामेल हुन तयार छ?",
      "description": "विश्वभरि हजारौं नेवार समुदाय सदस्यतेसं जडान हुनुहोस् र भविष्यका पुस्ताहरूको लागि जिउ समृद्ध सांस्कृतिक विरासत संरक्षणको भाग बन्नुहोस्।",
      "signUp": "अहिले साइन अप गर्ने",
      "contact": "जिउते संपर्क गर्ने"
    }
  },
   
    "donate": {
      "title": "ध्येय समर्थन दियाः",
      "description": "दान स्वाहा नेपाल संस्कृति त भाय् भविष्य सुरक्षित।",
      "methods": {
        "esewa": "eSewa",
        "imepay": "IME Pay",
        "bank": "बैंक स्थानान्तरण",
        "credit": "क्रेडिट कार्ड"
      },
      "form": {
        "name": "पूरा न्हं",
        "email": "इमेल",
        "amount": "दान रकम",
        "message": "सन्देश (वैकल्पिक)",
        "submit": "दान दियाः"
      }
    },

  "features": {
    "title": "नेवार समाज अन्वेषण यान",
    "subtitle": "जिउ समृद्ध सांस्कृतिक विरासत, भाषा स्रोतहरू, र समुदाय पहलहरू चिंये",
    "culturalHeritage": {
      "title": "सांस्कृतिक विरासत",
      "subtitle": "मन्दिर, कला र चाडहरू",
      "description": "५०+ प्राचीन मन्दिरहरू, परम्परागत कलाहरू, र २५+ जीवन्त चाडहरू अन्वेषण यान"
    },
    "languageLearning": {
      "title": "भाषा सिकाइ",
      "subtitle": "AI शिक्षक र पाठहरू",
      "description": "अन्तरक्रियात्मक AI शिक्षक र संरचित पाठहरूसं नेवार भाषा सिक्ने"
    },
    "community": {
      "title": "समुदाय",
      "subtitle": "सामेल यान र जडान यान",
      "description": "विश्वभरि १०,०००+ नेवार समुदाय सदस्यतेसं जडान यान"
    },
    "calendar": {
      "title": "नेपाली पात्रो",
      "subtitle": "कार्यक्रम र चाडहरू",
      "description": "चाड मितिहरूसहित परम्परागत विक्रम सम्बत पात्रो"
    },
     "flashcards": {
      "title": "इन्टरएक्टिभ फ्ल्याशकार्ड",
      "description": "स्पेस्ड रिपिटिसन स्वाहा शब्दावली अभ्यास"
    },
    "chatroom": {
      "title": "भाषा आदानप्रदान",
      "description": "मातृभाषी स्वाहा अभ्यास"
    },
    "aiTutor": {
      "title": "AI शिक्षक",
      "description": "२४/७ व्यक्तिगत मद्दत"
    },
    "translation": {
      "title": "अनुवाद उपकरण",
      "description": "अंग्रेजी, नेपाली आ नेवार बीच अनुवाद"
    }
  },
  "sections": {
    "featuredTemples": {
      "title": "मुख्य सांस्कृतिक स्थलहरू",
      "description": "प्राचीन नेवार वास्तुकला र युनेस्को विरासत स्थलहरू अन्वेषण यान",
      "viewAll": "सबै मन्दिरहरू अन्वेषण यान"
    }
  },
  "common": {

    "language": "भाषा",
    "theme": "थिम",
    "back": "पछाडि",
    

    "monthly": "महिनाका",
    "annual": "बर्षेका",
    "quarterly": "तिन महिनाय्का",
    "weekly": "हप्ताका",
    "location": {
      "bhattathok": "भट्टाथोक, लिखु नगरपालिका",
      "nuwakot": "नुवाकोट जिल्ला",
      "kathmandu": "येँ उपत्यका",
      "samajBuilding": "समाज भवन, भट्टाथोक"
    }, 
    "lessons": "पाठहरू",
    "explore": "अन्वेषण यान",
    "learnMore": "थप चिंये",
    "viewAll": "सबै न्ये",
    "joinNow": "अहिले सामेल यान",
    "scrollToExplore": "अन्वेषण यान स्क्रोल यान",
    
    "signUp": "साइन अप",
    "contact": "सम्पर्क",
    "readMore": "थप पढ्ने",
    "viewDetails": "विवरण हेर्ने",
    
    "complete": "पूरा",
    "continue": "जारी राख्ने",
    "start": "सुरु गर्ने",
    "review": "समीक्षा",
    "locked": "ताल्चा लागेको",
    "unlockRequirements": "अनलक गर्न अघिल्लो पाठ पूरा गर्नुहोस्",
    "words": "शब्दहरू",
    "minutes": "मिनेट",
    "join": "सामेल हुन",
    "chat": "च्याट",
    "translate": "अनुवाद गर्ने",
    "online": "अनलाइन",
    "available": "उपलब्ध",
    "unlocked": "अनलक भएको",
    "lock": "ताल्चा लागेको"
  },
 
 "dashboard": {
    "title": "भाषा सिकाइ ड्याशबोर्ड",
    "subtitle": "इन्टरएक्टिभ पाठ र सांस्कृतिक निमज्जन मार्फत नेवार भाषा मास्टर गर्नुहोस्",
    "wordsLearned": "सिकिएका शब्दहरू",
    "wordsRemaining": "शब्दहरू बाँकी",
    "currentStreak": "वर्तमान स्ट्रिक",
    "daysInARow": "दिन लगातार",
    "level": "स्तर",
    "xpEarned": "XP कमाइयो",
    "lessons": "पाठहरू",
    "continueLearning": "सिकाइ जारी राख्नुहोस्",
    "achievements": {
      "title": "उपलब्धिहरू",
      "unlocked": "अनलक भएको"
    },
    "flashcards": {
      "title": "इन्टरएक्टिभ फ्ल्याशकार्ड",
      "description": "तपाईंको सिकाइ गतिको अनुसार अनुकूल हुने स्मार्ट फ्ल्याशकार्डहरूसँग शब्दावली अभ्यास गर्नुहोस्"
    },
    "chatroom": {
      "languageExchange": "भाषा आदानप्रदान",
      "online": "अनलाइन",
      "aiTutor": "AI भाषा शिक्षक",
      "available": "उच्चारण, व्याकरण, र सांस्कृतिक सन्दर्भमा मद्दत गर्न २४/७ उपलब्ध"
    }
  },

  "categories": {
    "greetings": "अभिवादनहरू",
    "numbers": "सङ्ख्याहरू",
    "family": "परिवार",
    "food": "खाना",
    "travel": "यात्रा",
    "shopping": "किनमेल",
    "colors": "रङ्गहरू",
    "time": "समय",
    "animals": "जनावरहरू",
    "body": "शरीर",
    "clothing": "लुगाफाटा",
    "professions": "पेशाहरू",
    "nature": "प्रकृति",
    "places": "स्थानहरू",
    "emotions": "भावनाहरू",
    "education": "शिक्षा",
    "hobbies": "शौकहरू",
    "culture": "संस्कृति",
    "home": "घर",
    "technology": "प्रविधि",
    "arts": "कलाहरू",
    "safety": "सुरक्षा",
    "verbs": "क्रियाहरू",
    "adjectives": "विशेषणहरू",
    "stories": "कथाहरू"
  },


    "quickFeatures": {
      "title": "ज्याः विरासत जुइगु",
      "culturalHeritage": {
        "title": "सांस्कृतिक विरासत",
        "subtitle": "द्यः, जत्रा त परम्परा जुइगु",
        "description": "नेपाल वास्तुकला, धार्मिक अभ्यास त सांस्कृतिक उत्सव ज्याः समृद्ध इतिहास जुइगु जे सयौं वर्ष संरक्षित छ।"
      },
      "languageLearning": {
        "title": "भाय् सिकाइ",
        "subtitle": "एआई स्वाहा नेपाल भाय् शिक्षा",
        "description": "इन्टरएक्टिभ पाठ, एआई ट्यूटर त नेवा, नेपाली त अंग्रेजी बीच वास्तविक-समय अनुवाद स्वाहा नेपाल भाय् सुइगु।"
      },
      "community": {
        "title": "गुठि",
        "subtitle": "साथी गुठि सदस्य स्वः जुयाः",
        "description": "पुं न्हायेक, छलफल त सांस्कृतिक गतिविधि स्वाहा जीवन्त गुठि जुयाः जे विश्वभर नेपाल मनु जुयाः।"
      }
    },


 "languageSchool": {
    "title": "नेवारी भाषा स्कूल",
    "subtitle": "हाम्रा विरासत भाषा बचाउने र सिकाउने",
    "description": "संरचित पाठ्यक्रम, सांस्कृतिक निमज्जन, र अन्तरक्रियात्मक सिकाइ विधि द्वारा नेवारी सिक्न हाम्रा समर्पित भाषा स्कूलमा सामेल होला।",
    "hero": {
      "title": "नेवारी सहि तरिका ले सिकला",
      "subtitle": "संरचित पाठ्यक्रम, विशेषज्ञ शिक्षक, र सांस्कृतिक सन्दर्भ"
    },
    "features": {
      "title": "किन हाम्रा स्कूल संग सिकला?",
      "structured": {
        "title": "संरचित पाठ्यक्रम",
        "description": "बुनियादी देखि उन्नत स्तर सम्म प्रगतिशील सिकाइ प्रमाणित पाठ्यक्रम संग"
      },
      "cultural": {
        "title": "सांस्कृतिक सन्दर्भ",
        "description": "सांस्कृतिक कथा, परम्परा, र वास्तविक जीवन परिदृश्य द्वारा भाषा सिकला"
      },
      "expert": {
        "title": "विशेषज्ञ शिक्षक",
        "description": "शिक्षण अनुभव भया मातृभाषी नेवारी वक्ता संग सिकला"
      },
      "interactive": {
        "title": "अन्तरक्रियात्मक सिकाइ",
        "description": "समूह गतिविधि, कुराकानी, र व्यावहारिक अभ्यास"
      }
    },
    "courses": {
      "title": "हाम्रा पाठ्यक्रम",
      "beginner": {
        "title": "सुरुवाती स्तर",
        "duration": "३ महिना",
        "topics": ["बुनियादी अभिवादन", "संख्या १-१००", "दैनिक शब्दावली", "साधारण वाक्य"]
      },
      "intermediate": {
        "title": "मध्यवर्ती स्तर",
        "duration": "४ महिना",
        "topics": ["व्याकरण नियम", "कुराकानी कौशल", "पढाइ अभ्यास", "सांस्कृतिक सन्दर्भ"]
      },
      "advanced": {
        "title": "उन्नत स्तर",
        "duration": "५ महिना",
        "topics": ["जटिल व्याकरण", "लेखन कौशल", "साहित्य", "व्यावसायिक प्रयोग"]
      },
      "children": {
        "title": "बच्चा ला कक्षा",
        "duration": "निरन्तर",
        "topics": ["मजाको गतिविधि", "गीत र कथा", "बुनियादी शब्दावली", "सांस्कृतिक खेल"]
      }
    },
    "onlineLearning": {
      "title": "अनलाइन सिकाइ प्लेटफर्म",
      "description": "हाम्रा भौतिक स्कूल बनाउन नभएसम्म, लाइभ कक्षा र रेकर्ड गरिया सत्र संग हाम्रा व्यापक अनलाइन सिकाइ कार्यक्रममा सामेल होला।",
      "features": [
        "शिक्षक संग लाइभ अन्तरक्रियात्मक कक्षा",
        "लचिलो सिकाइ लागि रेकर्ड सत्र",
        "अभ्यास र प्रश्नोत्तर",
        "सांस्कृतिक निमज्जन गतिविधि",
        "प्रगति ट्र्याकिंग र प्रमाणपत्र"
      ],
      "cta": "अहिले अनलाइन सिकाइ सुरु गर्ला"
    },
    "enrollment": {
      "title": "दर्ता प्रक्रिया",
      "steps": [
        "दर्ता फारम भर्ला",
        "प्लेसमेन्ट टेस्ट लिला",
        "आफ्नो कक्षा समय चयन गर्ला",
        "भुक्तानी गर्ला र पहुँच प्राप्त गर्ला"
      ]
    },
    "teachers": {
      "title": "हाम्रा शिक्षक संग भेटघाट गर्ला",
      "description": "अनुभवी नेवारी भाषा शिक्षक संग सिकला"
    }
  },

 "learningStats": {
    "totalWords": 500,
    "totalLessons": 20,
    "levels": ["सुरुवाती", "मध्यवर्ती", "उन्नत", "विशेषज्ञ", "मास्टर"],
    "xpPerLesson": 100,
    "xpPerWord": 10
  },
 "leaderboard": {
    "title": "समुदाय लिडरबोर्ड",
    "you": "तपाईं",
    "rank": "र्याङ्क",
    "name": "नाम",
    "level": "स्तर",
    "xp": "XP"
  },



    "news": {
    "title": "खबर र अद्यावधिक",
    "subtitle": "नयाँ समुदाय खबर, कार्यक्रम, र घोषणाहरूसँग जडान रहनुहोस्",
    "todaysHighlight": "आजको मुख्य आकर्षण",
    "latestUpdates": "नयाँ अपडेटहरू",
    "readMore": "थप पढ्नुहोस्",
    "readFullStory": "पूर्ण कथा पढ्नुहोस्",
    "aiSummary": "AI सारांश",
    "aiSummaryAvailable": "AI सारांश उपलब्ध छ",
    "comments": "टिप्पणीहरू",
    "noNewsFound": "तपाईंको खोजी मिल्ने कुनै खबर भेटिएन",
    "tryChangingFilters": "फिल्टर वा खोज शब्द परिवर्तन गरेर प्रयास गर्नुहोस्",
    "categories": {
      "community": "समुदाय",
      "event": "कार्यक्रमहरू",
      "culture": "संस्कृति",
      "member": "सदस्य स्पटलाइट",
      "opportunity": "अवसरहरू",
      "national": "राष्ट्रिय",
      "international": "अन्तर्राष्ट्रिय"
    },
    "filters": "फिल्टरहरू",
    "searchPlaceholder": "खबर, ट्यागहरू, लेखकहरू खोज्नुहोस्...",
    "categoriesFilter": "श्रेणीहरू",
    "allCategories": "सबै श्रेणीहरू",
    "sortBy": "क्रमबद्ध गर्नुहोस्",
    "newest": "नयाँ पहिले",
    "oldest": "पुरानो पहिले",
    "mostPopular": "सबैभन्दा लोकप्रिय",
    "dateRange": "मिति दायरा",
    "popularTags": "लोकप्रिय ट्यागहरू",
    "resetFilters": "सबै फिल्टर रिसेट गर्नुहोस्",
    "stayUpdated": "अद्यावधिक रहनुहोस्",
    "subscriptionDescription": "तपाईंको इनबक्समा दैनिक समुदाय अपडेट प्राप्त गर्नुहोस्",
    "subscriptionSuccess": "सदस्यता सफल भयो!",
    "welcomeMessage": "हाम्रो समुदाय न्यूजलेटरमा स्वागत छ!",
    "emailPlaceholder": "तपाईंको.ईमेल@उदाहरण.com",
    "subscribeNow": "अहिले सदस्यता लिनुहोस्",
    "privacyNotice": "हामी तपाईंको गोपनीयताको सम्मान गर्छौं। कुनै पनि समयमा सदस्यता रद्द गर्न सक्नुहुन्छ।",
    "newsArchive": "खबर अभिलेख",
    "viewFullArchive": "पूर्ण अभिलेख हेर्नुहोस्",
    "communityStats": "समुदाय तथ्याङ्क",
    "totalArticles": "कुल लेखहरू",
    "thisMonth": "यस महिना",
    "activeUsers": "सक्रिय पाठकहरू"
  },


missionVision: {
  new: {
    title: "मिशन आ दिस्‍ति",
    subtitle: "भविष्य पिढीखं नेवार संस्कृति ग्वाह् आ प्रवर्द्धन"
  },
  mission: {
    new: {
      title: "हामः मिशन",
      description: "नेवार सांस्कृतिक सम्पदा, भाषा आ परम्परा ग्वाह्, प्रवर्द्धन आ बलियो बनाउने",
      language_preservation: "नेपाल भासा ग्वाह्",
      language_preservation_desc: "विद्यालय, डिजिटल प्लेटफर्म आ कार्यशाला मार्फत नेवार भाषा प्रवर्द्धन",
      language_preservation_long: "हामः मिशन नेवार भाषा (नेपाल भासा) शिक्षाको समग्र कार्यक्रम, डिजिटल स्रोत आ समुदाय कार्यशालाहरू मार्फत फस्टाउने सुनिश्चित ग्वाह् हो। हामी सिकाइ सामग्री सिर्जना, भाषा शिक्षक समर्थन, आ एआई-उपयुक्त उपकरण विकास गर्छौं जसले नेपाल भासा सबैखं पहुँचयोग्य बनाउँछ।",
      cultural_identity: "सांस्कृतिक पहिचान",
      cultural_identity_desc: "नेवार सांस्कृतिक पहिचान, परम्परा, संगीत, कला आ हस्तकला बलियो बनाउने",
      cultural_identity_long: "हामी नेवार सांस्कृतिक पहिचानको धनी विरासत ग्वाह् संरक्षणमा प्रतिबद्ध छौं। हामः पहलमा सांस्कृतिक चाड, कलाकार समर्थन कार्यक्रम, आ डिजिटल अभिलेखमार्फत परम्परागत अभ्यास, संगीत, नृत्य, कला आ हस्तकला प्रवर्द्धन।",
      intergenerational_learning: "पिढीबीच सिकाइ",
      intergenerational_learning_desc: "युवा खं परम्परागत रीतिरिवाज, चाडपर्व आ मौखिक इतिहास बुझ्न प्रेरित",
      intergenerational_learning_long: "पिढीबीच ज्ञान हस्तान्तरण सांस्कृतिक जीवितताको लागि महत्वपूर्ण। हामः संरक्षक कार्यक्रम, समुदाय सभा आ डिजिटल प्लेटफर्म मार्फत वृद्ध खं युवामा ज्ञान बाँड्न सुविधा। मौखिक इतिहास परियोजना पूर्वजहरूको ज्ञान दस्तावेज।",
      global_awareness: "विश्वव्यापी जागरूकता",
      global_awareness_desc: "सांस्कृतिक गर्व बनाउने आ नेवार संस्कृति अन्तर्राष्ट्रिय स्तरमा प्रदर्शन",
      global_awareness_long: "हामी नेवार संस्कृतिलाई विश्व स्तरमा राख्न अन्तर्राष्ट्रिय सहयोग, सांस्कृतिक आदान-प्रदान आ डिजिटल उपस्थिति मार्फत काम। विश्व सांस्कृतिक चाडमा सहभागिता, सह-महानगर सम्बन्ध आ बहुमाध्यम सामग्री निर्माण।",
      unity_in_diversity: "विविधतामा एकता",
      unity_in_diversity_desc: "हिन्दू आ बौद्ध नेवारबीच एकता प्रवर्द्धन, विविधता सम्मान गर्दै",
      unity_in_diversity_long: "नेवार संस्कृतिमा विविधता मनाउँदै, हामः हिन्दू आ बौद्ध समुदायबीच संवाद आ सहयोग प्रवर्द्धन। कार्यक्रम साझा मूल्य आ परम्परा उजागर, धार्मिक भिन्नता सम्मान। हामः विश्वास हामः शक्ति विविधता अङ्ग एकतामा छ।"
    }
  },
  vision: {
    new: {
      title: "हामः दिस्‍ति",
      description: "नेवार संस्कृति विश्वव्यापी फस्टाउने आ धनी विरासत कायम राख्ने भविष्य",
      language_future: "व्यापक भासा",
      language_future_desc: "नेपाल भासा व्यापक बोलीने आ शिक्षालयमा पढाइने",
      language_future_long: "हामी भविष्य कल्पना जस्मा नेपाल भासा केवल ग्वाह् नभई जीवित भाषा खं फस्टाउने। लक्ष्य विद्यालयमा पढाइने, मिडिया खं प्रयोग, घर आ समुदायमा गर्वपूर्वक बोलीने।",
      cultural_institutions: "बलियो सांस्कृतिक संस्था",
      cultural_institutions_desc: "जीवित गुथी प्रणाली, चाडपर्व आ समुदाय केन्द्र विरासत ग्वाह्",
      cultural_institutions_long: "हामः दिस्‍ति समावेश बलियो सांस्कृतिक संस्था, नेवार समुदाय खं आधार। गुथी प्रणाली फस्टाउने, समुदाय केन्द्र सक्रिय, चाडपर्व परम्परा ग्वाह् आ नयाँ पिढी समावेश। डिजिटल संरचना विश्वव्यापी नेवार समुदाय जडान।",
      youth_engagement: "युवा संलग्नता",
      youth_engagement_desc: "नेवार युवा कला, वास्तुकला, साहित्य आ विश्व नेटवर्क सक्रिय",
      youth_engagement_long: "हामी भविष्य कल्पना जस्मा नेवार युवा केवल सहभागी नभई सांस्कृतिक संरक्षण आ नवप्रवर्तन नेतृत्व। संरक्षकता, शिक्षा आ प्रविधि मार्फत युवा नेवार परम्परागत कला, वास्तुकला आ साहित्य आधुनिक सन्दर्भमा पुनः व्याख्या सक्षम।",
      tradition_modernity: "परम्परा आ आधुनिकता",
      tradition_modernity_desc: "सांस्कृतिक जरा आ प्रविधि बीच सन्तुलन",
      tradition_modernity_long: "हामः दिस्‍ति परम्परा आ नवप्रवर्तन सन्तुलन। एआई-समर्थित भाषा सिकाइ आ चाड भर्चुअल अनुभव नेवार संस्कृति फस्टाउने। प्राचीन ज्ञान संरक्षण, आधुनिक पुस्ता खं प्रासंगिक।",
      international_recognition: "अन्तर्राष्ट्रिय मान्यता",
      international_recognition_desc: "UNESCO आ सांस्कृतिक कूटनीति मार्फत नेवार संस्कृति विश्वव्यापी मूल्याङ्कन",
      international_recognition_long: "हामी नेवार संस्कृतिको अन्तर्राष्ट्रिय मान्यता लागि काम। UNESCO सूचीकरण, विश्व पाठ्यक्रम समावेश, वैश्विक सांस्कृतिक मंच प्रतिनिधित्व।"
    }
  },
  focusAreas: {
    new: {
      title: "हामः फोकस क्षेत्र",
      language: "भासा",
      religion: "धर्म",
      festivals: "चाडपर्व",
      art: "कला आ हस्तकला",
      youth: "युवा",
      global: "विश्व जडान",
      learn_more: "थप घ्याय्",
      language_desc: "शिक्षा आ डिजिटल प्लेटफर्म मार्फत नेपाल भासा ग्वाह् आ प्रवर्द्धन",
      language_long: "भासा पहलमा सिकाइ सामग्री, शिक्षक समर्थन, एआई उपकरण, immersive भाषा शिक्षा।",
      religion_desc: "नेवार संस्कृति भित्र हिन्दू आ बौद्ध परम्परा सम्मान",
      religion_long: "हामः हिन्दू आ बौद्ध परम्परा सम्मान, अन्तरधार्मिक संवाद, साझा चाड, शिक्षा।",
      festivals_desc: "परम्परागत चाडपर्व आ रीतिहरू संरक्षण आ मनाउने",
      festivals_long: "नेवार चाडपर्व सांस्कृतिक पहिचान अभिव्यक्ति। दस्तावेज, संरक्षण, प्रवर्द्धन, डिजिटल अभिलेख, समुदाय उत्सव।",
      art_desc: "परम्परागत कला, हस्तकला, संगीत आ वास्तुकला समर्थन",
      art_long: "नेवार कला शताब्दी सांस्कृतिक धरोहर। पारंपरिक कलाकार अनुदान, प्रशिक्षण, बजार पहुँच। डिजिटल अभिलेख, नवप्रवर्तन समावेश।",
      youth_desc: "युवा पुस्ता सांस्कृतिक संरक्षण संलग्न",
      youth_long: "हामी युवालाई संस्कृति र नवप्रवर्तनमा संलग्न। प्रविधि, सामाजिक मिडिया, नेतृत्व कार्यक्रम मार्फत युवा सृजनात्मक सक्रियता।",
      global_desc: "अन्तर्राष्ट्रिय जडान आ जागरूकता निर्माण",
      global_long: "हामी विश्वभर नेवार समुदाय पुल। सांस्कृतिक आदान-प्रदान, नेटवर्क प्लेटफर्म, सहयोग परियोजना।"
    }
  },
  infographic: {
    new: {
      title: "सांस्कृतिक दृष्टान्त",
      mission_title: "मिशन फोकस क्षेत्र",
      vision_title: "दृष्टि उद्देश्य"
    }
  },
  globalCommunity: {
    new: {
      title: "विश्व नेवार समुदाय",
      description: "विश्वभर नेवार ज्वालो, साझा विरासत ग्वाह् आ उत्सव",
      members: "समुदाय सदस्य",
      countries: "देश",
      events: "वार्षिक कार्यक्रम",
      languages: "समर्थित भासा"
    }
  },
  cta: {
    new: {
      title: "हामः मिशन खं ज्वालो",
      description: "नेवार संस्कृति विश्वभर ग्वाह् आ प्रवर्द्धन आन्दोलनमा सहभागी",
      join_button: "नेवार समाज सामेल",
      learn_button: "थप घ्याय्",
      quiz_button: "सांस्कृतिक प्रश्नोत्तरी"
    }
  },
  quiz: {
    new: {
      title: "नेवार संस्कृति प्रश्नोत्तरी",
      progress: "प्रश्न {current} / {total}",
      result_title: "प्रश्नोत्तरी परिणाम",
      score: "{total} मध्ये {score} अंक",
      try_again: "फेरि प्रयास",
      close: "बन्द",
      question_1: "नेवार संस्कृतिमा 'प्रकाशको चाड' कुन?",
      option_1_1: "तिहार",
      option_1_2: "दशैं",
      option_1_3: "होली",
      option_1_4: "दिवाली",
      question_2: "नेवार परम्परागत पोशाक के भनिन्छ?",
      option_2_1: "सारी",
      option_2_2: "धोती",
      option_2_3: "हाकु पतासी",
      option_2_4: "कुर्ता",
      question_3: "कुन नेवार परम्परागत संगीत उपकरण?",
      option_3_1: "तबला",
      option_3_2: "धिमय",
      option_3_3: "सितार",
      option_3_4: "बाँसुरी"
    }
  }
},
 "calendar": {
    "title": "नेपाली पात्रो",
    "subtitle": "विक्रम सम्बत पात्रो",
    "selectYear": "वर्ष चयन गर्नुहोस्",
    "currentYear": "हालको वर्ष",
    "today": "आज",
    "holiday": "बिदा",
    "events": "कार्यक्रमहरू",
    "addEvent": "कार्यक्रम थप्नुहोस्",
    "noEvents": "कुनै कार्यक्रम छैन"
  },


 "months": {
    "baishakh": "बैशाख",
    "jestha": "जेठ",
    "ashadh": "असार",
    "shrawan": "श्रावण",
    "bhadra": "भाद्र",
    "ashwin": "आश्विन",
    "kartik": "कार्तिक",
    "mangsir": "मंसिर",
    "poush": "पुष",
    "magh": "माघ",
    "falgun": "फागुन",
    "chaitra": "चैत्र"
  },

  "contact": {
    "hero": {
      "badge": "सम्पर्क गर्नुहोस्",
      "title": "नेवार समाजसँग सम्पर्क गर्नुहोस्",
      "subtitle": "हामीसँग जडान हुनुहोस् र सँगै नेवार संस्कृतिको समृद्ध विरासतलाई संरक्षण र मनाउनुहोस्"
    },
    "form": {
      "title": "हामीलाई सन्देश पठाउनुहोस्",
      "subtitle": "हामी तपाईंबाट सुन्न चाहन्छौं। हामीलाई सन्देश पठाउनुहोस् र हामी चाँडै जवाफ दिनेछौं।",
      "fullName": "पूरा नाम",
      "fullNamePlaceholder": "तपाईंको पूरा नाम प्रविष्ट गर्नुहोस्",
      "email": "ईमेल ठेगाना",
      "emailPlaceholder": "तपाईंको ईमेल ठेगाना प्रविष्ट गर्नुहोस्",
      "password": "पासवर्ड",
      "passwordPlaceholder": "सुरक्षित पासवर्ड सिर्जना गर्नुहोस्",
      "country": "देश",
      "selectCountry": "तपाईंको देश चयन गर्नुहोस्",
      "message": "तपाईंको सन्देश",
      "messagePlaceholder": "हामीलाई तपाईंका विचारहरू, प्रश्नहरू, वा तपाईं कसरी योगदान दिन चाहनुहुन्छ भन्नेबारे बताउनुहोस्...",
      "submit": "सन्देश पठाउनुहोस्",
      "submitting": "पठाइँदै...",
      "successMessage": "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।",
      "errorMessage": "केही गलत भयो। कृपया पुनः प्रयास गर्नुहोस्।"
    },
    "importance": {
      "title": "किन यो वेबसाइट आवश्यक छ",
      "description1": "नेवार समाज वेबसाइटले विश्वभरि नेवार समुदायहरूलाई जोड्ने महत्वपूर्ण डिजिटल सेतुको रूपमा काम गर्दछ र भविष्यका पुस्ताहरूको लागि हाम्रो प्राचीन सांस्कृतिक विरासतलाई संरक्षण गर्दछ।",
      "description2": "यो वेबसाइट मात्र सूचना पोर्टल भन्दा बढी हो—यो जीवित अभिलेख, समुदाय केन्द्र, र शैक्षिक स्रोत हो जसले हाम्रो समृद्ध परम्पराहरू, भाषा, र रीतिरिवाजहरू डिजिटल युगमा जीवित रहन सुनिश्चित गर्दछ।",
      "cultural": {
        "title": "सांस्कृतिक संरक्षण",
        "description": "प्राचीन नेवार परम्पराहरू, रीतिरिवाजहरू, र ज्ञानलाई दस्तावेजीकरण र संरक्षण गर्दै"
      },
      "preservation": {
        "title": "विरासत संरक्षण",
        "description": "डिजिटल संरक्षण प्रयासहरू मार्फत हाम्रो अद्वितीय वास्तुकला, कलात्मक, र आध्यात्मिक विरासतलाई सुरक्षित गर्दै"
      },
      "global": {
        "title": "वैश्विक जडान",
        "description": "विश्वभरि नेवार डायस्पोरा समुदायहरूलाई जोड्दै, एकता र सांस्कृतिक आदानप्रदानलाई बढावा दिँदै"
      },
      "education": {
        "title": "शैक्षिक स्रोत",
        "description": "विद्यार्थीहरू, शोधकर्ताहरू, र उत्साहीहरूको लागि नेवार संस्कृतिको बारेमा प्रामाणिक सिकाइ सामग्री प्रदान गर्दै"
      }
    },
    "info": {
      "title": "सम्पर्क जानकारी",
      "email": "ईमेल",
      "phone": "फोन",
      "address": "ठेगाना",
      "addressDetail": "नुवाकोट, नेपाल - वैश्विक नेवार समुदाय",
      "hours": "प्रतिक्रिया समय",
      "hoursDetail": "सामान्यतया २४-४८ घण्टाभित्र"
    },
    "stats": {
      "title": "हाम्रो समुदाय प्रभाव",
      "members": "समुदाय सदस्यहरू",
      "countries": "देशहरूमा पुग्यो",
      "articles": "सांस्कृतिक लेखहरू",
      "years": "विरासतका वर्षहरू"
    },
    "cta": {
      "title": "हाम्रो सांस्कृतिक संरक्षण आन्दोलनमा सामेल हुनुहोस्",
      "description": "आउँदो पुस्ताहरूको लागि नेवार विरासतलाई संरक्षण र प्रवर्द्धन गर्न समर्पित वैश्विक समुदायको भाग बन्नुहोस्।",
      "join": "समुदायमा सामेल हुनुहोस्",
      "donate": "हामीलाई समर्थन गर्नुहोस्"
    }
  },
   
  "auth": {
    "login": {
      "title": "फेरि स्वागत छ",
      "subtitle": "जारी राख्न तपाईंको खातामा साइन इन गर्नुहोस्",
      "email": "ईमेल ठेगाना",
      "emailPlaceholder": "तपाईंको@ईमेल.com",
      "password": "पासवर्ड",
      "passwordPlaceholder": "तपाईंको पासवर्ड प्रविष्ट गर्नुहोस्",
      "rememberMe": "मलाई सम्झनुहोस्",
      "forgotPassword": "पासवर्ड बिर्सनुभयो?",
      "signIn": "साइन इन गर्नुहोस्",
      "noAccount": "खाता छैन?",
      "createAccount": "खाता सिर्जना गर्नुहोस्"
    },
    "signup": {
      "title": "तपाईंको खाता सिर्जना गर्नुहोस्",
      "subtitle": "विश्वभरि हजारौं नेवार समुदाय सदस्यहरूमा सामेल हुनुहोस्",
      "firstName": "पहिलो नाम",
      "firstNamePlaceholder": "तपाईंको पहिलो नाम प्रविष्ट गर्नुहोस्",
      "lastName": "थर",
      "lastNamePlaceholder": "तपाईंको थर प्रविष्ट गर्नुहोस्",
      "email": "ईमेल ठेगाना",
      "emailPlaceholder": "तपाईंको@ईमेल.com",
      "password": "पासवर्ड",
      "passwordPlaceholder": "पासवर्ड सिर्जना गर्नुहोस्",
      "confirmPassword": "पासवर्ड पुष्टि गर्नुहोस्",
      "confirmPasswordPlaceholder": "तपाईंको पासवर्ड पुनः प्रविष्ट गर्नुहोस्",
      "agreeToTerms": "म सर्तहरू र शर्तहरूसँग सहमत छु",
      "signUp": "साइन अप गर्नुहोस्",
      "alreadyHaveAccount": "पहिले नै खाता छ?",
      "signIn": "साइन इन गर्नुहोस्",
      "benefitsTitle": "किन हाम्रो समुदायमा सामेल हुनुहोस्?",
      "benefit1": "विश्वभरि नेवार समुदाय सदस्यहरूसँग जडान हुनुहोस्",
      "benefit2": "विशेष सांस्कृतिक कार्यक्रमहरू र स्रोतहरूमा पहुँच प्राप्त गर्नुहोस्",
      "benefit3": "नेवार परम्पराहरू र भाषालाई साझा र संरक्षण गर्नुहोस्"
    }
  },
values: {
    hero: {
      title: "नेवाः पहिचान् ग्वाह्: दिस्‍ति आ मोल्",
      subtitle: "सदिस्वां सभ्यता खं स्यज्‍याय्",
      description: "हामः जिब, कला, धर्म आ परम्परा वय् हाय् स्यगुं स्युं",
      cta: "हामः मोल् स्यं घ्‍याय्"
    },
    vision: {
      title: "हामः दिस्‍ति",
      language: {
        title: "भासा संरक्षण",
        subtitle: "नेपाल भासा प्रर्वद्धन",
        description: "स्कूल, अनलाइन कोर्स, डिजिटल कथाकथन खं हाय् हामः भासा डिजिटल जुग खं फुं ज्वः।"
      },
      culture: {
        title: "सांस्कृतिक निरन्तरता",
        subtitle: "हामः जात्रा उत्सव",
        description: "इन्द्र जात्रा, गुन्ला, सम्प्रदायक, बिस्केट जात्रा खं जीवित समुदाय उत्सव हाय्।"
      },
      arts: {
        title: "कला आ हस्तकला",
        subtitle: "परम्परागत कला ग्वाह्",
        description: "पौभा चित्र, काठकला, धातुकला आ पागोडा वास्तुकला स्यं सिखाय् हाय्।"
      },
      community: {
        title: "समुदाय एकता",
        subtitle: "गुथी प्रणाली सुदृढ",
        description: "सामाजिक जिम्मेवारी, जातीय सद्भाव आ समुदाय समर्थन प्रवर्द्धन।"
      },
      diaspora: {
        title: "विश्वव्यापी नेवार ज्वालो",
        subtitle: "नेवार worldwide खं ज्वालो",
        description: "विदेश नेवार खं सांस्कृतिक गतिविधि आ परम्परा खं ज्वालो प्लेटफर्म स्रिज्‍याय्।"
      },
      timeline: {
        title: "AI सांस्कृतिक समयरेखा",
        subtitle: "हामः इतिहास स्यं घ्याय्",
        description: "Interactive timeline showing the evolution of Newar culture and values through the centuries",
        cta: "समयरेखा हेर"
      }
    },
    coreValues: {
      title: "हामः मुख्य मोल्",
      subtitle: "हामः समुदाय् परिभाषा मार्गदर्शक सिद्धान्त्"
    },
    language: {
      title: "भासा आ साहित्य",
      description: "नेपाल भासा ग्वाह् आ प्रर्वद्धन",
      details: "हामी नेपाल भासा साक्षरता, पाण्डुलिपि, कविता, परम्परागत गीत आ कथाकथन स्यं ध्यान दिन्छौं।"
    },
    religion: {
      title: "धर्म आ रीतिरिवाज",
      description: "हिन्दू-बौद्ध मिश्रण सम्मान",
      details: "हामी हिन्दू आ बौद्ध परम्परा मिश्रण मान्छौं, जातीय-आधारित रीतिहरू (राजोपाध्याय, वज्राचार्य) संरक्षण।"
    },
    arts: {
      title: "कला आ हस्तकला",
      description: "परम्परागत कलालाई दिगो बनाउनु",
      details: "पागोडा मन्दिर, काठ आ धातु नक्काशी, पौभा चित्र आ संगीत उपकरण अप्रेन्टिसशिप आ डिजिटल संरक्षण।"
    },
    festivals: {
      title: "जात्रा आ सम्पदा",
      description: "सांस्कृतिक पात्रो उत्सव",
      details: "इन्द्र जात्रा, गुन्ला, सम्प्रदायक, बिस्केट जात्रा आयोजन आ दस्तावेजीकरण।"
    },
    unity: {
      title: "एकता आ सामाजिक सद्भाव",
      description: "समुदाय सम्बन्ध बलियो",
      details: "अन्तर-जातीय सहयोग, आपसी सम्मान आ सामुदायिक जिम्मेवारी प्रवर्द्धन।"
    },
    media: {
      title: "सांस्कृतिक प्रदर्शन",
      subtitle: "माध्यम खं सम्पदा स्यं घ्याय्",
      cta: "सबै मिडिया हेर",
      item1: {
        title: "इन्द्र जात्रा",
        description: "स्वर्ग राजा इन्द्र खं वार्षिक पर्व"
      },
      item2: {
        title: "पौभा कला",
        description: "नेवार बौद्ध पवित्र चित्रकला"
      },
      item3: {
        title: "नेवार वास्तुकला",
        description: "पागोडा शैली मन्दिर"
      },
      item4: {
        title: "परम्परागत संगीत",
        description: "नेवार संगीत उपकरण आ प्रदर्शन"
      },
      item5: {
        title: "पारम्परिक पाककला",
        description: "नेवार खाना आ पकाउने तरिका"
      },
      item6: {
        title: "धार्मिक समारोह",
        description: "हिन्दू-बौद्ध रीतिहरू आ अभ्यास"
      }
    },
    community: {
      title: "विश्वव्यापी नेवार समुदाय",
      subtitle: "विश्वभर नेवार ज्वालो",
      members: "सक्रिय सदस्य",
      activities: "मुख्य गतिविधि",
      cta: "तपाईंको स्थानीय समुदाय सामेल"
    },
    cta: {
      title: "नेवार सम्पदा ग्वाह् स्यं हामीसँग ज्वालो",
      subtitle: "तपाईंको सहभागिता खं संस्कृति भविष्यका पुस्ता जीवित",
      join: "सदस्य बन्छ",
      donate: "दान कर"
    }
  },




leadershipPage: {
    title: "नेवार समाज याः नेतृत्व आ पुक्हु",
    subtitle: "हामः पँचः, हामः परम्परा, आ हामः १००० बलियो एकजाः नेवार पुक्हु मनाम्हा।",
    intro: "झँ १००० पुक्हु वने हामः समाज नेवा संस्कृति, भाषा, धर्म आ समाज एकता ग्वाह् या थुकि नेतृत्व, सल्लाह आ समाज निर्णय मार्फत समर्पित या।"
  },
  leadershipSection: {
      title: "हामः नेतृत्व गुठि"

  },
  leaders: {
    rajesh: {
       "name": "महेश डंगोल",
      "role": "अदक्षा",
      "bio": "दृष्टि तः समर्पणया समाजय् न्हायेक्वा महेशया, हम्बा सांस्कृतिक सम्पदा बचाःगु तः एकता मजबुतगु तः या च्वंगु थुकःय्।",
      "contributions": [
        "सांस्कृतिक बचाःया न्हायेक्वा",
        "गुथि तः समाजय् विकासया पहल",
        "संगठनय् दृष्टि मजबुत"
      ]
      }
    },
    sunita: {
      "name": "ज्ञान कुमार डंगोल",
      "role": "उपदक्षा",
      "bio": "ज्ञानया समाजया न्ह्यःगु तः गुथिसय् म्यः सम्बन्ध मजबुतगु थ्वःय् अनुभवया च्वंगु थुकःय्।",
      "contributions": [
        "समाजया न्ह्यःगु संयोजन",
        "गुथिसय् सम्बन्ध मजबुत",
        "संगठनया वधः सहयोग"
      ]
      
    },
    bikash: {
        "name": "रामहरी डंगोल",
      "role": "भाय्ह संयोजक",
      "bio": "रामहरिया समाजया भाय्ह तः कार्यक्रमया प्रभावकारीया न्ह्यःगु थुकःय्।",
      "contributions": [
        "भाय्ह तः मीटिंगया आयोजन",
        "कार्यक्रम संयोजन",
        "गुथिसय् सहभागिता वधः"
      ]
      
    },
    anita: {
        "name": "प्रकाश डंगोल",
      "role": "सोसल मिडिया तः बजारगु",
      "bio": "प्रकाशया डिजिटलया उपस्थिति वधाःगु तः समाजया न्ह्यः अवसरगुया या च्वंगु थुकःय्।",
      "contributions": [
        "डिजिटलया पहुच वधाः",
        "सोसल मिडिया न्ह्यःगु",
        "न्ह्यः अवसरया सृजना"
      ]
    
  },
  communitySection: {
      title: "हामः नेवार समाज पुक्हु",
      aboutTitle: "हामः पुक्हु ग्वहः",
      aboutText: "झँ १०० पुक्हु वने हामः नेवार समाज समृद्ध सांस्कृतिक विरासत, भाषा आ परम्परा ग्वाह् समर्पित या, आ पुक्हु भावना आ परस्पर सहयोग प्रवर्द्धन या।",
      valuesText: "हामी जिम्मेवारी, सल्लाह आ समाज निर्णयया मूल्य करुँ, परम्परा भावी पिढी खं हस्तान्तरण आ आधुनिक समयमा अनुकूलन सुनिश्चित करुँ।",
      programsTitle: "मुख्य कार्यक्रम आ पहल",
      program1: "सांस्कृतिक कार्यशाला आ भाषा कक्षा",
      program2: "पर्व मनायाः आ धार्मिक पूजा",
      program3: "युवा सल्लाह आ शैक्षिक कार्यक्रम",
      program4: "समाज सहयोग आ कल्याण पहल",
      joinButton: "समाज छलफल सामेल ज्या",
      photosTitle: "समाजया क्षण",
      testimonialTitle: "हामः सदस्यया भन्या",
      testimonial: "नेवार समाजया अंश बनाम्हया म न्ह्यः मूल जड जडान या आ समान सांस्कृतिक मूल्यया मानुसयाः संलग्नता पाः। नेतृत्वया हामः विरासत ग्वाह् साँच्चै समर्पित या।",
      memberName: "सीता मल्ल, समाज सदस्य"
    
  },
  culturalSection: {
      title: "सांस्कृतिक नेतृत्व आ शिक्षा",
      languageTitle: "नेवार भाषा ग्वाह्",
      languageText: "हामः ज्येष्ठया संरचित कक्षा, कुराकानी अभ्यास आ सांस्कृतिक immersion मार्फत नेपाल भासा सल्लाह या। सिकाइ सामग्री आ डिजिटल स्रोत विकास या जस्याः भाषा शिक्षा पिढीखं पहुँचयोग्य या।",
      learnButton: "नेवार भाषा स्या",
      eventsTitle: "सांस्कृतिक कार्यक्रम नेतृत्व",
      eventsText: "हामः सांस्कृतिक पँचया संस्कार, पर्व परम्परा, संगीत आ नृत्य स्याय्, विरासत निरन्तरता सुनिश्चित या। दशैं, तिहार आ न्ह्यः वर्ष पर्वमा युवायाः ज्ञान हस्तान्तरण कार्यशाला आयोजन या।",
      volunteerButton: "कार्यक्रम स्वयंसेवक ज्या",
      artsTitle: "परम्परागत कला ग्वाह्",
      artsText: "हामी परम्परागत नेवार कला—माटि भाँडा, चित्रकला, धातुकाम आ काठकाम—पँचया प्रशिक्षु स्याय्। समाजया कारीगर प्रदर्शनी आ शिल्प टिकाउ लागि स्रोत आ मञ्च प्रदान या।",
      supportButton: "परम्परागत कला समर्थन ज्या",
      continuityTitle: "सांस्कृतिक निरन्तरता सुनिश्चित",
      mentorship: "ज्येष्ठ-युवा सल्लाह",
      mentorshipText: "सांस्कृतिक ज्ञान हस्तान्तरण लागि ज्येष्ठ आ युवा जोड्या संरचित कार्यक्रम",
      documentation: "सांस्कृतिक अभिलेख",
      documentationText: "भावी पिढी लागि संस्कार, कथा आ परम्परा दस्तावेज",
      events: "समाज कार्यक्रम",
      eventsText2: "सांस्कृतिक अभ्यास आ समाज बन्ध बलियो बनाय् नियमित सभा"
    
  },
  tabs: {
      leadership: "नेतृत्व",
      community: "पुक्हु आ सन्देश"
    
  },
  messagingSection: {
      title: "समाज गुठि आ सन्देश",
      groupsTitle: "समाज गुठि",
      members: "सदस्य",
      createGroup: "न्या गुठि निर्माण ज्या",
      aiName: "समाज AI सहाय",
      welcomeMessage: "ज्वजलपा! म समाज, नेतृत्व आ कार्यक्रमया प्रश्न उत्तर मदत या। नि:संकोच मलाई जेनि स्या!",
      justNow: "अइ",
      sampleQuestion: "नेवारया कुन कुन पर्व मनाम्हा?",
      sampleResponse: "हामी दशैं, तिहार, होली आ नेवार विशेष पर्व—इन्द्र जात्रा, बिस्केत जात्रा—मनाम्हा। वार्षभर संस्कार आ पूजा पनि मनाम्हा।",
      placeholder: "सन्देश टाइप ज्या...",
      send: "पठाय्",
      aiHint: "हामः AI सहाय नेतृत्व, कार्यक्रम आ समाज क्रियाकलापया प्रश्न उत्तर या।"
    
  },
  messaging: {
      you: "छँया",
      aiName: "समाज AI सहाय"
    
  },
  aiResponses: {
      adaxai: "हामः अदक्षै राजेश श्रेष्ठ, २०२० तः सेवा करुँ। वः समाज निर्णय आ पूजायाः हेरचाह करुँ।",
      sachib: "सुनिता महर्जन हामः सचिब (सचिव)। वः कार्यक्रम आयोजन आ समाज संचार व्यवस्थापन करुँ।",
      sadasai: "हामी वने विकास डंगोल सहि धेरै सदसै (कमिटी सदस्य) थ्व, समाज outreach, शिक्षा आ कल्याण परियोजना फोकस करुँ।",
      festival: "हामी दशैं, तिहार, होली आ नेवार विशेष पर्व—इन्द्र जात्रा, बिस्केत जात्रा—मनाम्हा।",
      join: "समाज सामेल हुन, कृपया वेबसाइट सदस्यता खण्ड या secretary@newarsamaj.org सम्र्पक ज्या।",
      language: "हामी प्रत्येक शनिवार समाज केन्द्रया नेवार भाषा कक्षा प्रदान करुँ। अनलाइन भाषा आदानप्रदान कार्यक्रम सामेल प्या।",
      default: "सन्देशया लागि धन्यवाद। समाज टिम चाँडै उत्तर या। ताः बीच, नेतृत्व वा समाज क्रियाकलाप बारे विशेष थ्व बुझन्या चाहं त?",
    
  },
  communityGroups: {
      general: {
        name: "सामान्य छलफल",
        description: "सामान्य समाज छलफल आ घोषणा"
      },
      cultural: {
        name: "सांस्कृतिक कार्यक्रम",
        description: "सांस्कृतिक कार्यक्रम आ पर्व योजना आ छलफल"
      },
      language: {
        name: "भासा स्या",
        description: "नेवार भाषा स्या आ अभ्यास गुठि"
      },
      youth: {
        name: "युवा शाखा",
        description: "युवा समाज सदस्यया लागि क्रियाकलाप आ छलफल"
      } 
  },




  "events": {
    "youthProgram": "युवा सशक्तिकरण कार्यक्रम",
    "date": "तिथि",
    "time": "समय",
    "location": "स्थान",
    "description": "विवरण",
    "attendees": "सहभागी",
    "register": "दर्ता याये",
    "viewDetails": "विवरण न्ह्येचिं",
    "addToCalendar": "पात्रो त थप्चिं",
    "noEvents": "लामो कार्यक्रम मदु",
    "youthDescription": "युवा नेवार पुस्ता लाई कौशल, सांस्कृतिक ज्ञान ल च नेतृत्व प्रशिक्षण संग सशक्त बनाउने कार्यक्रम।",
    "loading": "कार्यक्रम लोड जुइगु...",
    "upcomingEvents": "लामो कार्यक्रम",
    "monthlyMeeting": "महिनाका समुदाय बैठक",
    "meetingDescription": "समाज याके गतिविधि, सांस्कृतिक संरक्षण ल च समुदाय विकास याके परियोजना खँल्हाय्के नियमित समुदाय सभा।",
    "languageSchool": "नेवार भाय् कक्षा",
    "languageDescription": "सब उमेर समूह तइ नेवार भाय् याके आधारभूत ज्ञान, कुराकानी कौशल ल च सांस्कृतिक संदर्भ सिक्चिं।",
    "culturalWorkshop": "सांस्कृतिक कार्यशाला",
    "workshopDescription": "परम्परागत नेवार कला, शिल्प ल च सांस्कृतिक अभ्यास त प्रायोगिक कार्यशाला।",
    "heritageTour": "सम्पदा भ्रमण",
    "heritageDescription": "नुवाकोट जिल्ला त ऐतिहासिक नेवार स्थल याके निर्देशित भ्रमण।",
    "culturalFestival": "सांस्कृतिक महोत्सव",
    "festivalDescription": "नेवार परम्परा, खाना, संगीत ल च नृत्य प्रदर्शन प्रदर्शन याके बर्षेका सांस्कृतिक महोत्सव।"
  },



culture: {
  
    "architecture": "वास्तुकला",
    "architectureDesc": "पुलांगु पगोडा-शैलीका चैत्य, चूक गुंकि जटिल सिं कार्की",
    "art": "कला गुंकि शिल्प",
    "artDesc": "ल्हाकू चित्रकला, मूर्तिकला, धातुकाम गुंकि हस्तशिल्प",
    "festivals": "चहड",
    "festivalsDesc": "अनौठा रीतिरिवाजत संग वर्षैभरि रंगीन चहडत",
    "cuisine": "खाना पान",
    "cuisineDesc": "विविध स्वाद गुंकि खानात संग अनौठा पाकपद्धति",



title: "नेवाः संस्कृति तः जाति",
description: "नेवाः समृद्ध सांस्कृतिक तानाबानाय् डुबेढु...",
tabs: {
temples: "द्यः तः जाति",
festivals: "चह्रे",
practices: "सांस्कृतिक परम्परा"
},
cta: {
title: "जुजुः जाति लसकु",
description: "जुजुः जाति लसकाय् ल्हासेढु...",
join: "जुजुः समुदायय् ल्हासेढु",
learn: "मल्ले वनेढु"
}
},
temples: {
title: "द्यः तः जाति ल्हाके",
description: "नेवाः संस्कृतिका भव्य द्यः तः पवित्र ल्हाके अन्वेषण वनेढु...",
tabs: {
gallery: "द्यः ग्यालरी",
architecture: "वास्तुकला",
timeline: "समयरेखा",
map: "अन्तरक्रियात्मक नक्सा"
},
details: {
history: "ऐतिहासिक महत्व",
architecture: "वास्तुकला विशेषताहरू",
timings: "खुल्ने समय",
entryFee: "प्रवेश शुल्क",
contact: "सम्पर्क"
},
actions: {
virtualTour: "भर्चुअल भ्रमण",
directions: "बाटो निर्देशन"
}
},

  "caste": {
    "title": "नेवार जाति प्रणाली र जनसङ्ख्या",
    "subtitle": "नेवार जातिहरूको व्यापक अवलोकन, तिनीहरूको परम्परागत भूमिका, जनसङ्ख्या वितरण र सांस्कृतिक महत्व",
    "casteList": "जाति सूची",
    "selectPrompt": "जाति चयन गर्नुहोस्",
    "selectDescription": "तिनीहरूको परम्परागत भूमिका, जनसङ्ख्या र सांस्कृतिक महत्वको विस्तृत जानकारी हेर्न जाति सूचीबाट चयन गर्नुहोस्",
    "populationShare": "जनसङ्ख्या हिस्सा",
    "approximatePopulation": "अनुमानित जनसङ्ख्या",
    "heritageTitle": "सांस्कृतिक सम्पदा",
    "heritageDescription": "नेवार समुदायको समृद्ध सांस्कृतिक सम्पदा अन्वेषण गर्नुहोस्",
    "heritageItems": {
      "architecture": "वास्तुकला",
      "art": "कला र शिल्प",
      "festivals": "चाडपर्व",
      "cuisine": "खानपान",
      "language": "भाषा"
    },
    "roles": {
      "merchantsAdministrators": "व्यापारी र प्रशासक",
      "farmers": "किसान र कृषक",
      "traders": "व्यापारी र व्यवसायी",
      "priests": "हिन्दु पुजारी",
      "painters": "चित्रकार र कलाकार",
      "oilPressers": "तेल पेल्ने",
      "blacksmiths": "लोहार र धातुकर्मी",
      "buddhistPriests": "बौद्ध पुजारी",
      "metalworkers": "धातु शिल्पी"
    },
    "descriptions": {
      "shrestha": "परम्परागत व्यापारी, प्रशासक र शासक। व्यापार, सरकार र सांस्कृतिक नेतृत्वमा संलग्न प्रमुख नेवार जातिहरू मध्ये एक।",
      "maharjan": "परम्परागत किसान र कृषक, ज्यापूको रूपमा पनि चिनिन्छ। तिनीहरूको कृषि विशेषज्ञता र नेवार खानपानमा योगदानको लागि परिचित।",
      "dangol": "कृषि र परम्परागत पेशामा विशेषज्ञता भएको किसान समुदाय। नेवार कृषि पद्धतिमा महत्वपूर्ण योगदानकर्ता।",
      "tuladhar": "तिनीहरूको व्यवसायिक कुशलताको लागि परिचित परम्परागत व्यापारी र सौदागर। नेपाल र बाहिर व्यापारमा संलग्न।",
      "karmacharya": "rituअनुष्ठान र समारोह सम्पादन गर्ने हिन्दु पुजारी। नेवार समाजमा हिन्दु धार्मिक परम्पराका संरक्षक।",
      "chitrakar": "धार्मिक र सांस्कृतिक कलाकृति सिर्जना गर्ने परम्परागत चित्रकार र कलाकार। पौभा र अन्य कला विधाका विशेषज्ञ।",
      "manandhar": "परम्परागत तेल पेल्ने र प्रशोधक। तेल निकासी र सम्बन्धित उत्पादनमा तिनीहरूको विशेषज्ञताको लागि परिचित।",
      "nakarmi": "उपकरण, हतियार र अनुष्ठानिक वस्तुहरू सिर्जना गर्ने लोहार र धातुकर्मी। धातुकाममा कुशल शिल्पी।",
      "bajracharya": "बौद्ध पुजारी र आध्यात्मिक नेता। वज्रयान बौद्ध परम्पराका संरक्षक।",
      "shakya": "धातु शिल्पी र सुनार। परम्परागत रूपमा धार्मिक मूर्तिहरू र गहनाहरू सिर्जनामा संलग्न।"
    }
  },
  "statistics": {
    "totalPopulation": "कुल नेवार जनसङ्ख्या",
    "populationPercentage": "नेपालको जनसङ्ख्याको लगभग ४.६%",
    "motherTongue": "नेवार भाषा बोल्नेहरू",
    "languagePercentage": "६४.४% नेवारहरूले नेवार भाषा बोल्छन्",
    "totalCastes": "कुल जातिहरू",
    "uniqueOccupations": "अनौठो परम्परागत पेशाहरू"
  },
  "search": {
    "placeholder": "नाम, भूमिका, वा श्रेणी अनुसार जातिहरू खोज्नुहोस्...",
    "selectCaste": "जाति चयन गर्नुहोस्"
  },
  "districts": {
    "title": "जिल्ला अनुसार नेवार जनसङ्ख्या",
    "dominantCastes": "प्रमुख जातिहरू",
    "kathmandu": "काठमाडौं",
    "lalitpur": "ललितपुर",
    "bhaktapur": "भक्तपुर",
    "kavre": "काभ्रेपलान्चोक",
    "makwanpur": "मकवानपुर"
  },
 
 "meetup": {
    "title": "विश्वव्यापी नेवार समाज भेटघाट",
    "subtitle": "प्रविधि द्वारा विश्वभरी नेवार ला जोड्ने",
    "description": "हाम्रा आभासी सभास्थलमा सामेल होला जतै विश्वभरी नेवार समुदाय ला मनिसहरू जडान होला, कुराकानी गर्ला, र हाम्रा समृद्ध संस्कृति लाई सँगै मनाउला।",
    "importance": {
      "title": "किन आभासी भेटघाट चाहिन्छ",
      "points": [
        "अलग अलग देसमी रयाका नेवार ला बीचको दूरी पटाउने",
        "समुदाय का कार्यक्रम, चाडपर्व र गरूर विषयहरूमी कुराकानी",
        "नेवार संस्कृति र परम्परा ला बचाउने र बढाउने",
        "पुस्ता ला बीच ज्ञान र अनुभव साट्ने",
        "गरूर अवसरमी आपत्कालीन समुदाय बैठक"
      ]
    },
    "features": {
      "title": "बैठक का उद्देश्य र विषयहरू",
      "items": [
        "सांस्कृतिक कार्यक्रम योजना र समन्वय",
        "नेवार भाषा संरक्षण कुराकानी",
        "युवा संलग्नता र नेतृत्व कार्यक्रम",
        "समुदाय सदस्य ला बीच व्यापारिक सम्बन्ध",
        "शिक्षा कार्यशाला र कौशल साझा",
        "चाडपर्व मनाउने र रीतिरिवाज कुराकानी",
        "समुदाय कल्याण र सहयोग काम"
      ]
    },
    "techBenefits": {
      "title": "सँगै प्रविधि अपनाउदै",
      "description": "जसरी हामी आभासी रूपमी जडान होला, हामी प्रविधि संग सिक्छौ र बढ्छौ। हरेक बैठक हाम्रो डिजिटल कौशल बढाउने र आधुनिक उपकरण संग अद्यावधिक रहने अवसर हो।"
    },
    "joinButton": "अहिले विश्वव्यापी भेटमा सामेल होला",
    "instructions": "हाम्रो Google Meet मा सामेल होला माथिको बटनमा क्लिक गर्ने। दर्ता चाहिन्न - केवल क्लिक गर्ने र जडान होला!",
    "schedule": {
      "title": "नियमित बैठक समय",
      "weekly": "हरेक शनिबार: ७:०० बजे NPT",
      "monthly": "पहिलो आइतबार: समुदाय सामान्य बैठक",
      "special": "विशेष कार्यक्रम अगाडि घोषणा होला"
    }
  },
 
 "notices": {
    "title": "समुदाय सूचना र घोषणा",
    "subtitle": "नया समुदाय खबर र कार्यक्रम संग अद्यावधिक रहला",
    "description": "विश्वभरी सबै नेवार समाज सदस्य ला लागि गरूर घोषणा, बैठक समय, र समुदाय अद्यावधिक।",
    "recentNotices": "हालका सूचना",
    "allNotices": "सबै सूचना",
    "noNotices": "सूचना छैन",
    "createNotice": "नया सूचना बनाउला",
    "editNotice": "सूचना सच्याउला",
    "noticeTitle": "सूचना शीर्षक",
    "noticeContent": "सूचना सामग्री",
    "noticeCategory": "श्रेणी",
    "noticePriority": "प्राथमिकता",
    "sendToAll": "सबै सदस्य ला पठाउला",
    "scheduleSend": "पठाउने समय",
    "attachments": "अट्याचमेन्ट",
    "categories": {
      "meeting": "बैठक",
      "event": "कार्यक्रम",
       "financial": "आर्थिक सहयोग",
      "language": "भाषा कक्षा", 
      "festival": "चाडपर्व",
      "urgent": "अत्यावश्यक",
      "general": "सामान्य",
      "cultural": "सांस्कृतिक"
    },
    "priorities": {
      "high": "उच्च",
      "medium": "मध्यम",
      "low": "निम्न"
    },
    "actions": {
      "send": "सूचना पठाउला",
      "save": "ड्राफ्ट बचत गर्ला",
      "cancel": "रद्द गर्ला",
      "delete": "मेटाउला",
      "edit": "सच्याउला"
    },
    "status": {
      "sent": "पठाइयो",
      "draft": "ड्राफ्ट",
      "scheduled": "समय तालिका"
    },
    "recipients": "प्राप्तकर्ता",
    "sentDate": "पठाइएको मिति",
    "createdBy": "बनाउने",
    "adminPanel": "एड्मिन प्यानल",
    "memberView": "सदस्य देखाउला",
    "statistics": "तथ्याङ्क",
    "totalNotices": "कुल सूचना",
    "totalRecipients": "कुल प्राप्तकर्ता",
    "todayNotices": "आजका सूचना"
  },
 

  
  "religion": {
    "title": "नेवाः जातिइ धर्म ल्हा बिल्हा",
    "subtitle": "हिन्दु बुद्ध धर्मयात उत्कृष्ट समन्वय स्वरूपया अन्वेषण याना",
    
    "nav": {
      "overview": "मू ल्हा",
      "hinduism": "हिन्दु धर्म",
      "buddhism": "बुद्ध धर्म",
      "deities": "द्यः देवता",
      "rituals": "पूजा पाटा ल्हाकुगु",
      "festivals": "व्हेः संस्कार",
      "temples": "चैत्य द्यःचें",
      "spirituality": "आध्यात्मिक जिंलागु",
      "resources": "शिक्षण सामग्री"
    },

    "overview": {
      "title": "नेवाः धार्मिक सहिष्णुता",
      "description1": "नेवाः जातिइ हिन्दु बुद्ध धर्मया अद्वितीय समन्वय स्वरूप बनेत यक विशिष्ट धार्मिक संस्कृतिया विकास याना। थ्व संस्कृतिइ नेवाः जातिया इतिहास, कला, सामाजिक बनावट थःगु गहन प्रभाव अर्पित याना।",
      "description2": "नेवाःतयेसं यक अथे धार्मिक प्रणाली पालना याना बियात हिन्दु बुद्ध धर्मया तत्वत धापा धापं मिश्रित दयाच्वन। यकल्हां घरय् हिन्दु बुद्ध दुवां परम्पराया अनुयायी च्वनि र संयुक्त रूपं व्हेः संस्कार मनुयाना।",
      "description3": "थ्व धार्मिक सहिष्णुता नेपाः भाषा संस्कृतिया सबेय् विशिष्ट लक्षण खः। येँ उपत्यकाया हजारौं वर्ष तक्क दयाच्वनिगु द्यःचें, स्तुप, ल्हाय् थासं थ्व सांस्कृतिक एकताया ज्वलंत प्रमाण खः।"
    },

    "hinduism": {
      "title": "नेवाः हिन्दु धर्म",
      "description1": "नेवाः हिन्दु धर्म थःगु विशिष्ट देवता समूह, तान्त्रिक परम्परा, गुथिइ ल्हायेम्ह स्थानीय द्यः बिज्याः ब्वयाच्वं। विशेष याना आमा द्यः (महाशक्ति) तयेत बिज्याः याना, जथे तलेजू, दक्षिणकाली, कुमारी आदिया पूजा याना महत्त्वपूर्ण मनुयाना।",
      "description2": "तान्त्रिक अभ्यास, मन्त्र, यन्त्र, गूढ विद्याया प्रयोग नेवाः हिन्दु धर्मया अभिन्न अंग खः। थन्यागु पद्धतितेसं मुख्यधाराया हिन्दु धर्म स्वनाइगु विशिष्ट पहिचान द्याना।",
      "description3": "मुख्यधाराया हिन्दु धर्म नापं बहुतेक साझा तत्व दुसां नेवाः हिन्दु धर्मइ थःगु ऐतिहासिक विकास, दार्शनिक व्याख्या, येँ उपत्यकाया सांस्कृतिक संदर्भ नापं जुयाच्वनिगु विशेषता संरक्षण याना।",
      "practices": {
        "title": "मू पूजा पाटा"
      }
    },

    "buddhism": {
      "title": "नेवाः बुद्ध धर्म",
      "description1": "नेवाः बुद्ध धर्मं भारतय् बुद्ध धर्म लुप्त जुइबिलय् तक्क प्राचीन संस्कृति, संस्कृत बौद्ध ग्रन्थ, बज्रयान (वज्रयान) तान्त्रिक परम्परातेत संरक्षण याना। थ्व बुद्ध धर्मया इतिहासया यक जीवंत संग्रहालयया रूपय् काम याना।",
      "description2": "नेवाः बुद्ध समुदायं थःगु जातीय व्यवस्था कायम राख्तःगु दयाच्वन, जथे गुह्यजमा (वज्राचार्य) पुजारी नं शाक्यतयेसं धार्मिक नेतृत्व याना। थ्व व्यवस्था हिन्दु जातिप्रथा नापं मेमेगु खः बियात बुद्ध धर्मया दृष्टिकोण बठेइ चलनिगु खः।",
      "practices": {
        "title": "मू पूजा पाटा"
      }
    },

    "deities": {
      "title": "नेवाः द्यः देवताया समूह",
      "subtitle": "नेवाः हिन्दु बुद्ध धर्मय् पूजा यायेम्ह दिव्य शक्तितयेगु अन्वेषण याना",
      "significance": "महत्त्व"
    },

    "rituals": {
      "title": "जिउदुगु चक्रया संस्कार",
      "introduction": "नेवाःतयेगु जिउदुगु चक्रया न्हापांगु पाइथं म्हो जुयाबिलय् तक्कया लागि विस्तृत संस्कार दयाच्वन। थ्व संस्कारतयेसं मनुया जिउलाई पवित्र बनाना व सामुदायिक बन्धन मजबूत याना।",
      "download": {
        "title": "संस्कारतयेगु बारेय् ग्वहालि सिइ",
        "description": "नेवाः संस्कारतयेगु विस्तृत मार्गदर्शन डाउनलोड याना",
        "button": "संस्कार मार्गदर्शन डाउनलोड याना"
      }
    },

    "festivals": {
      "title": "व्हेः संस्कार ल्हाकुगु",
      "subtitle": "धार्मिक भक्ति व सामुदायिक सहकार्यया रंगीन मिश्रण जुयाम्ह व्हेःतयेगु अन्वेषण याना",
      "traditions": "मू परम्परा"
    },

    "temples": {
      "title": "पवित्र द्यःचें तयेगु",
      "viewAll": "सकल द्यःचें क्येना"
    },

    "spirituality": {
      "title": "आध्यात्मिक जिंलागु",
      "description1": "नेवाः जातिया आध्यात्मिकता दैनिक जिंलागुय् धर्मलाई एकीकृत याना, प्रकृतितेगु प्रति सम्मान, पूर्वजतयेगु स्मरण आदिया कार्यं परिभाषित याना। आध्यात्मिकता नेवाःतयेगु कला, वास्तुकला, सामाजिक रीतिरिवाजय् गहिरोरूपं जडित दयाच्वन।",
      "description2": "थ्व आध्यात्मिक संरचनां भौतिक ल अभौतिक संसार, व्यक्तिगत ध्यान व सामुदायिक उत्सव, हिन्दु बुद्ध दार्शनिकताया सन्तुलन कायम राखाना। थन्यागु संरचनां नेवाःतयेसं परिवर्तनशील संसारय् थःगु पहिचान व सांस्कृतिक अखण्डता कायम राख्न मद्दत याना।",
      "principles": {
        "title": "मू आध्यात्मिक सिद्धान्ततयेगु"
      }
    },

    "resources": {
      "title": "सिक्ने स्रोततयेगु",
      "subtitle": "नेवाः धर्मया बारेय् त्वःगु बुझाइलाई अझ गहिरो बनौनाच्वाना",
      "books": {
        "title": "सिफारिस याना म्हो पुस्तक"
      },
      "videos": {
        "title": "वृत्तचित्र फिल्मतयेगु"
      },
      "institutions": {
        "title": "अनुसन्धान संस्थातयेगु"
      },
      "explore": "पुस्तक खोजया",
      "watch": "भिडियो हेयाना",
      "visit": "संस्था भ्रमण याना"
    }
  },


   "footer": {
    "about": {
      "title": "जिउ बारे",
      "description": "सन् २०२४ निसा नेवार संस्कृति, भाषा, र विरासत विश्वव्यापी रूपमा संरक्षण र प्रवर्द्धन यान।",
      "history": "जिउ इतिहास",
      "mission": "लक्ष्य र दृष्टि",
      "values": "मुख्य मूल्यहरू",
      "leadership": "नेतृत्व"
    },
    "social": {
        "facebook": "फेसबुक",
        "instagram": "इन्स्टाग्राम",
        "youtube": "युट्युब",
        "twitter": "ट्विटर"
      },
    "quickLinks": "द्रुत लिङ्कहरू",
    "aboutUs": "जिउ बारे",
    "connect": "जिउतेसं जडान यान",
    "visit": "DANGOL AI",
          "quote": "भविष्य पुँत जुइगु नेपाल संस्कृति, भाय् त विरासत संरक्षण त प्रवर्द्धन।",

    "developedBy": "विकासकर्ता"
  },


    
  }
}
export function useTranslation() {
  const { currentLanguage } = useLanguage() // Get current language from context
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage] // Use currentLanguage from context
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Return the key itself if translation not found
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  return { t, locale: currentLanguage }
}