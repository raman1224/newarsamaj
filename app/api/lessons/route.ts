// app/api/lessons/route.ts
import { NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const lessons = [
  {
    id: 1,
    title: "Greetings",
    description: "Learn common Newar greetings and responses",
    content: [
       {
    "english": "Hello",
    "nepali": "नमस्कार",
    "newar": "ज्वजलपा",
    "pronunciation": "jwa-ja-la-pa"
  },
  {
    "english": "Thank you",
    "nepali": "धन्यवाद",
    "newar": "सुभाय्",
    "pronunciation": "su-bha-ay"
  },
  {
    "english": "How are you?",
    "nepali": "तपाईंलाई कस्तो छ?",
    "newar": "छिगु थ्व कसरी छ?",
    "pronunciation": "chi-gu thwa ka-sa-ri cha?"
  },
  {
    "english": "I'm fine",
    "nepali": "मलाई राम्रो छ",
    "newar": "जिगु मिजं छ",
    "pronunciation": "ji-gu mi-jang cha"
  },
  {
    "english": "What is your name?",
    "nepali": "तपाईंको नाम के हो?",
    "newar": "छिगु मिं के खः?",
    "pronunciation": "chi-gu ming ke khah?"
  },
  {
    "english": "My name is...",
    "nepali": "मेरो नाम ... हो",
    "newar": "जिगु मिं ... खः",
    "pronunciation": "ji-gu ming ... khah"
  },
  {
    "english": "Where are you from?",
    "nepali": "तपाईं कहाँबाट हो?",
    "newar": "छिगु सुस्तः बाट खः?",
    "pronunciation": "chi-gu sustah bata khah?"
  },
  {
    "english": "Nice to meet you",
    "nepali": "तपाईंलाई भेटेर खुशी लाग्यो",
    "newar": "छिगु ला भेटेर खुशी लाग्यो",
    "pronunciation": "chi-gu laa bheter khusi lagyo"
  },
  {
    "english": "Good morning",
    "nepali": "शुभ प्रभात",
    "newar": "शुभ प्रभात",
    "pronunciation": "shubha prabhat"
  },
  {
    "english": "Good afternoon",
    "nepali": "शुभ दिउँसो",
    "newar": "शुभ दिउँसो",
    "pronunciation": "shubha diuso"
  },
  {
    "english": "Good evening",
    "nepali": "शुभ साँझ",
    "newar": "शुभ साँझ",
    "pronunciation": "shubha saanjh"
  },
  {
    "english": "Good night",
    "nepali": "शुभ रात्री",
    "newar": "शुभ रात्री",
    "pronunciation": "shubha ratri"
  },
  {
    "english": "Please",
    "nepali": "कृपया",
    "newar": "कृपया",
    "pronunciation": "kripaya"
  },
  {
    "english": "Excuse me",
    "nepali": "माफ गर्नुहोस्",
    "newar": "माफ गर्नुहोस्",
    "pronunciation": "maaf garnuhos"
  },
  {
    "english": "I'm sorry",
    "nepali": "माफ गर्नुहोस्",
    "newar": "माफ गर्नुहोस्",
    "pronunciation": "maaf garnuhos"
  },
  {
    "english": "Yes",
    "nepali": "हो",
    "newar": "हो",
    "pronunciation": "ho"
  },
  {
    "english": "No",
    "nepali": "होइन",
    "newar": "मखु",
    "pronunciation": "makhu"
  },
  {
    "english": "Maybe",
    "nepali": "हुनसक्छ",
    "newar": "हुनसक्छ",
    "pronunciation": "huna sakcha"
  },
  {
    "english": "See you later",
    "nepali": "पछि भेटौला",
    "newar": "पछि भेटौंला",
    "pronunciation": "pachi bhetaula"
  },
  {
    "english": "Take care",
    "nepali": "हेरचाह गर्नुहोस्",
    "newar": "हेरचाह गर्नुहोस्",
    "pronunciation": "herachah garnuhos"
  },
  {
    "english": "Welcome",
    "nepali": "स्वागतम्",
    "newar": "स्वागतम्",
    "pronunciation": "swagatam"
  },
  {
    "english": "How old are you?",
    "nepali": "तपाईं कति वर्षको हुनुहुन्छ?",
    "newar": "छिगु कति वर्षका हुनुहुन्छ?",
    "pronunciation": "chi-gu kati varsaka hunuhuncha?"
  },
  {
    "english": "I am ... years old",
    "nepali": "म ... वर्षको हुँ",
    "newar": "जिउ ... वर्षका हूँ",
    "pronunciation": "jiu ... varsaka hum"
  },
  {
    "english": "Where do you live?",
    "nepali": "तपाईं कहाँ बस्नुहुन्छ?",
    "newar": "छिगु सुस्तः बस्नुहुन्छ?",
    "pronunciation": "chi-gu sustah basnuhuncha?"
  },
  {
    "english": "I live in...",
    "nepali": "म ... मा बस्छु",
    "newar": "जिउ ... मा बस्छु",
    "pronunciation": "jiu ... ma baschu"
  },
  {
    "english": "What do you do?",
    "nepali": "तपाईं के गर्नुहुन्छ?",
    "newar": "छिगु के गर्नुहुन्छ?",
    "pronunciation": "chi-gu ke garnuhuncha?"
  },
  {
    "english": "I am a student",
    "nepali": "म विद्यार्थी हुँ",
    "newar": "जिउ विद्यार्थी हूँ",
    "pronunciation": "jiu vidyarthi hum"
  },
  {
    "english": "I work as...",
    "nepali": "म ... को रूपमा काम गर्छु",
    "newar": "जिउ ... को रूपमा काम गर्छु",
    "pronunciation": "jiu ... ko rupama kam garchu"
  },
  {
    "english": "Do you speak English?",
    "nepali": "तपाईं अङ्ग्रेजी बोल्नुहुन्छ?",
    "newar": "छिगु अङ्ग्रेजी बोल्नुहुन्छ?",
    "pronunciation": "chi-gu angreji bolnuhuncha?"
  },
  {
    "english": "I don't understand",
    "nepali": "मैले बुझिन",
    "newar": "जिगुले बुझिन",
    "pronunciation": "jigule bujhina"
  },
  {
    "english": "Could you repeat that?",
    "nepali": "कृपया फेरि भन्नुहोस्",
    "newar": "कृपया फेरि भन्नुहोस्",
    "pronunciation": "kripaya pheri bhannuhos"
  },
  {
    "english": "Speak slowly please",
    "nepali": "कृपया बिस्तारै बोल्नुहोस्",
    "newar": "कृपया बिस्तारै बोल्नुहोस्",
    "pronunciation": "kripaya bistarai bolnuhos"
  },
  {
    "english": "How do you say this in Newar?",
    "nepali": "यसलाई नेवारीमा कसरी भनिन्छ?",
    "newar": "यसलाई नेवारीमा कसरी भनिन्छ?",
    "pronunciation": "yaslai newarima kasari bhanincha?"
  },
  {
    "english": "What does this mean?",
    "nepali": "यसको मतलब के हो?",
    "newar": "यसको मतलब के हो?",
    "pronunciation": "yasko matlab ke ho?"
  },
  {
    "english": "I'm learning Newar",
    "nepali": "म नेवारी सिक्दै छु",
    "newar": "जिउ नेवारी सिक्दै छु",
    "pronunciation": "jiu newari sikdai chu"
  },
  {
    "english": "It's nice weather today",
    "nepali": "आजको मौसम राम्रो छ",
    "newar": "आजको मौसम राम्रो छ",
    "pronunciation": "ajko mausam ramro cha"
  },
  {
    "english": "It's hot today",
    "nepali": "आज गर्मी छ",
    "newar": "आज गर्मी छ",
    "pronunciation": "aj garmi cha"
  },
  {
    "english": "It's cold today",
    "nepali": "आज जाडो छ",
    "newar": "आज जाडो छ",
    "pronunciation": "aj jado cha"
  },
  {
    "english": "It's raining",
    "nepali": "पानी परिरहेको छ",
    "newar": "पानी परिरहेको छ",
    "pronunciation": "pani pariraheko cha"
  },
  {
    "english": "How is your family?",
    "nepali": "तपाईंको परिवार कस्तो छ?",
    "newar": "छिगु परिवार कस्तो छ?",
    "pronunciation": "chi-gu paribar kasto cha?"
  },
  {
    "english": "My family is fine",
    "nepali": "मेरो परिवार राम्रो छ",
    "newar": "जिगु परिवार राम्रो छ",
    "pronunciation": "ji-gu paribar ramro cha"
  },
  {
    "english": "How is your health?",
    "nepali": "तपाईंको स्वास्थ्य कस्तो छ?",
    "newar": "छिगु स्वास्थ्य कस्तो छ?",
    "pronunciation": "chi-gu swasthya kasto cha?"
  },
  {
    "english": "I'm not feeling well",
    "nepali": "मलाई अस्वस्थ लागिरहेको छ",
    "newar": "जिगु अस्वस्थ लागिरहेको छ",
    "pronunciation": "ji-gu aswasth lagiraheko cha"
  },
  {
    "english": "Get well soon",
    "nepali": "चाँडो निको हुनुहोस्",
    "newar": "चाँडो निको हुनुहोस्",
    "pronunciation": "chando niko hunuhos"
  },
  {
    "english": "Congratulations",
    "nepali": "बधाई छ",
    "newar": "बधाई छ",
    "pronunciation": "badhai cha"
  },
  {
    "english": "Happy birthday",
    "nepali": "जन्मदिनको शुभकामना",
    "newar": "जन्मदिनको शुभकामना",
    "pronunciation": "janmadinko shubhakamana"
  },
  {
    "english": "Happy festival",
    "nepali": "शुभ चाड",
    "newar": "शुभ चाड",
    "pronunciation": "shubha chad"
  },
  {
    "english": "Happy new year",
    "nepali": "नयाँ वर्षको शुभकामना",
    "newar": "नयाँ वर्षको शुभकामना",
    "pronunciation": "naya varsako shubhakamana"
  },
  {
    "english": "Good luck",
    "nepali": "शुभकामना",
    "newar": "शुभकामना",
    "pronunciation": "shubhakamana"
  },
  {
    "english": "I miss you",
    "nepali": "मलाई तपाईंको सम्झना आउँछ",
    "newar": "जिगु छिगु सम्झना आउँछ",
    "pronunciation": "ji-gu chi-gu samjhana aucha"
  },
  {
    "english": "I love you",
    "nepali": "म तपाईंलाई माया गर्छु",
    "newar": "जिउ छिगु ला माया गर्छु",
    "pronunciation": "jiu chi-gu la maya garchu"
  },
  {
    "english": "I like this",
    "nepali": "मलाई यो मन पर्छ",
    "newar": "जिगु यो मन पर्छ",
    "pronunciation": "ji-gu yo man parcha"
  },
  {
    "english": "I don't like this",
    "nepali": "मलाई यो मन पर्दैन",
    "newar": "जिगु यो मन पर्दैन",
    "pronunciation": "ji-gu yo man pardaina"
  },
  {
    "english": "It's delicious",
    "nepali": "यो मिठो छ",
    "newar": "यो मिठो छ",
    "pronunciation": "yo mitho cha"
  },
  {
    "english": "It's too spicy",
    "nepali": "यो धेरै पिरो छ",
    "newar": "यो धेरै पिरो छ",
    "pronunciation": "yo dherai piro cha"
  },
  {
    "english": "I'm hungry",
    "nepali": "मलाई भोक लाग्यो",
    "newar": "जिगु भोक लाग्यो",
    "pronunciation": "ji-gu bhok lagyo"
  },
  {
    "english": "I'm thirsty",
    "nepali": "मलाई पिर्सना लाग्यो",
    "newar": "जिगु तिर्खा लाग्यो",
    "pronunciation": "ji-gu tirkha lagyo"
  },
  {
    "english": "I'm tired",
    "nepali": "म थाकेको छु",
    "newar": "जिउ थाकेको छु",
    "pronunciation": "jiu thakeko chu"
  },
  {
    "english": "I'm busy",
    "nepali": "म व्यस्त छु",
    "newar": "जिउ व्यस्त छु",
    "pronunciation": "jiu byast chu"
  },
  {
    "english": "What time is it?",
    "nepali": "कति बज्यो?",
    "newar": "कति बज्यो?",
    "pronunciation": "kati bajyo?"
  },
  {
    "english": "It's ... o'clock",
    "nepali": "... बजेको छ",
    "newar": "... बजेको छ",
    "pronunciation": "... bajeko cha"
  },
  {
    "english": "Today",
    "nepali": "आज",
    "newar": "आज",
    "pronunciation": "aj"
  },
  {
    "english": "Tomorrow",
    "nepali": "भोलि",
    "newar": "भोलि",
    "pronunciation": "bholi"
  },
  {
    "english": "Yesterday",
    "nepali": "हिजो",
    "newar": "हिजो",
    "pronunciation": "hijo"
  },
  {
    "english": "Now",
    "nepali": "अहिले",
    "newar": "अहिले",
    "pronunciation": "ahile"
  },
  {
    "english": "Later",
    "nepali": "पछि",
    "newar": "पछि",
    "pronunciation": "pachi"
  },
  {
    "english": "Soon",
    "nepali": "चाँडै",
    "newar": "चाँडै",
    "pronunciation": "chandai"
  },
  {
    "english": "Always",
    "nepali": "सधैं",
    "newar": "सधैं",
    "pronunciation": "sadhai"
  },
  {
    "english": "Never",
    "nepali": "कहिल्यै",
    "newar": "कहिल्यै",
    "pronunciation": "kahilyai"
  },
  {
    "english": "Sometimes",
    "nepali": "कहिलेकाहीं",
    "newar": "कहिलेकाहीं",
    "pronunciation": "kahilekahi"
  },
  {
    "english": "Every day",
    "nepali": "हरेक दिन",
    "newar": "हरेक दिन",
    "pronunciation": "harek din"
  },
  {
    "english": "This week",
    "nepali": "यो हप्ता",
    "newar": "यो हप्ता",
    "pronunciation": "yo hapta"
  },
  {
    "english": "Next month",
    "nepali": "अर्को महिना",
    "newar": "अर्को महिना",
    "pronunciation": "arko mahina"
  },
  {
    "english": "Last year",
    "nepali": "गत वर्ष",
    "newar": "गत वर्ष",
    "pronunciation": "gat varsha"
  },
  {
    "english": "How much is this?",
    "nepali": "यो कति हो?",
    "newar": "यो कति हो?",
    "pronunciation": "yo kati ho?"
  },
  {
    "english": "It's expensive",
    "nepali": "यो महँगो छ",
    "newar": "यो महँगो छ",
    "pronunciation": "yo mahango cha"
  },
  {
    "english": "It's cheap",
    "nepali": "यो सस्तो छ",
    "newar": "यो सस्तो छ",
    "pronunciation": "yo sasto cha"
  },
  {
    "english": "Can you reduce the price?",
    "nepali": "कृपया मूल्य घटाउन सक्नुहुन्छ?",
    "newar": "कृपया मूल्य घटाउन सक्नुहुन्छ?",
    "pronunciation": "kripaya mulya ghatauna saknuhuncha?"
  },
  {
    "english": "I'll take it",
    "nepali": "म यो लिन्छु",
    "newar": "जिउ यो लिन्छु",
    "pronunciation": "jiu yo linchu"
  },
  {
    "english": "I don't want it",
    "nepali": "मलाई यो चाहिदैन",
    "newar": "जिगु यो चाहिदैन",
    "pronunciation": "ji-gu yo chahidaina"
  },
  {
    "english": "Do you have...?",
    "nepali": "तपाईंसँग ... छ?",
    "newar": "छिगु सँग ... छ?",
    "pronunciation": "chi-gu sang ... cha?"
  },
  {
    "english": "Where is the toilet?",
    "nepali": "शौचालय कहाँ छ?",
    "newar": "शौचालय सुस्त छ?",
    "pronunciation": "shauchalay susta cha?"
  },
  {
    "english": "Where is the hospital?",
    "nepali": "अस्पताल कहाँ छ?",
    "newar": "अस्पताल सुस्त छ?",
    "pronunciation": "aspatal susta cha?"
  },
  {
    "english": "I need help",
    "nepali": "मलाई सहयोग चाहियो",
    "newar": "जिगु सहयोग चाहियो",
    "pronunciation": "ji-gu sahayog chahiyo"
  },
  {
    "english": "Call the police",
    "nepali": "प्रहरीलाई बोलाउनुहोस्",
    "newar": "प्रहरी हे बोलाउ",
    "pronunciation": "prahari he bolau"
  },
  {
    "english": "I'm lost",
    "nepali": "म हराएको छु",
    "newar": "जिउ हराएको छु",
    "pronunciation": "jiu haraeko chu"
  },
  {
    "english": "Where is ...?",
    "nepali": "... कहाँ छ?",
    "newar": "... सुस्त छ?",
    "pronunciation": "... susta cha?"
  },
  {
    "english": "How far is it?",
    "nepali": "यो कति टाढा छ?",
    "newar": "यो कति टाढा छ?",
    "pronunciation": "yo kati tadha cha?"
  },
  {
    "english": "Go straight",
    "nepali": "सिधा जानुहोस्",
    "newar": "सिधा वऺ",
    "pronunciation": "sidha wa"
  },
  {
    "english": "Turn left",
    "nepali": "बायाँ मोड्नुहोस्",
    "newar": "बायाँ मोड",
    "pronunciation": "baya mod"
  },
  {
    "english": "Turn right",
    "nepali": "दायाँ मोड्नुहोस्",
    "newar": "दायाँ मोड",
    "pronunciation": "daya mod"
  },
  {
    "english": "Stop here",
    "nepali": "यहाँ रोक्नुहोस्",
    "newar": "यता रोक्नुहोस्",
    "pronunciation": "yata roknu hos"
  },
  {
    "english": "Wait a moment",
    "nepali": "एक छिन पर्खनुहोस्",
    "newar": "एक छिन पर्खनुहोस्",
    "pronunciation": "ek chhin parkhanuhos"
  },
  {
    "english": "Hurry up",
    "nepali": "छिटो गर्नुहोस्",
    "newar": "छिटो गर्नुहोस्",
    "pronunciation": "chhito garnuhos"
  },
  {
    "english": "Be careful",
    "nepali": "सावधान हुनुहोस्",
    "newar": "सावधान हुनुहोस्",
    "pronunciation": "sawadhan hunuhos"
  },
  {
    "english": "What happened?",
    "nepali": "के भयो?",
    "newar": "के भयो?",
    "pronunciation": "ke bhayo?"
  },
  {
    "english": "It's okay",
    "nepali": "ठिक छ",
    "newar": "ठिक छ",
    "pronunciation": "thik cha"
  },
  {
    "english": "No problem",
    "nepali": "कुनै समस्या छैन",
    "newar": "कुनै समस्या छैन",
    "pronunciation": "kunai samasya chaina"
  },
  {
    "english": "Don't worry",
    "nepali": "चिन्ता नगर्नुहोस्",
    "newar": "चिन्ता नगर्नुहोस्",
    "pronunciation": "chinta nagarnuhos"
  },
  {
    "english": "Of course",
    "nepali": "अवश्य",
    "newar": "अवश्य",
    "pronunciation": "awashya"
  },
  {
    "english": "That's right",
    "nepali": "त्यो सही छ",
    "newar": "त्यो सही छ",
    "pronunciation": "tyo sahi cha"
  },
  {
    "english": "I think so",
    "nepali": "मलाई पनि त्यस्तै लाग्छ",
    "newar": "जिगु पनि त्यस्तै लाग्छ",
    "pronunciation": "ji-gu pani tyastai lagchha"
  },
  {
    "english": "I don't think so",
    "nepali": "मलाई त्यस्तो लाग्दैन",
    "newar": "जिगु त्यस्तो लाग्दैन",
    "pronunciation": "ji-gu tyasto lagdaina"
  },
  {
    "english": "I agree",
    "nepali": "म सहमत छु",
    "newar": "जिउ सहमत छु",
    "pronunciation": "jiu sahamat chu"
  },
  {
    "english": "I disagree",
    "nepali": "म असहमत छु",
    "newar": "जिउ असहमत छु",
    "pronunciation": "jiu asahamat chu"
  },
  {
    "english": "I don't know",
    "nepali": "मलाई थाहा छैन",
    "newar": "जिगु थाहा छैन",
    "pronunciation": "ji-gu thaha chaina"
  },
  {
    "english": "I forgot",
    "nepali": "म बिर्से",
    "newar": "जिउ बिर्से",
    "pronunciation": "jiu birse"
  },
  {
    "english": "Remember this",
    "nepali": "यो सम्झनुहोस्",
    "newar": "यो सम्झनुहोस्",
    "pronunciation": "yo samjhanuhos"
  },
  {
    "english": "Let's go",
    "nepali": "जाऔं",
    "newar": "जाऔं",
    "pronunciation": "jaun"
  },
  {
    "english": "Come here",
    "nepali": "यहाँ आउनुहोस्",
    "newar": "यता आउनुहोस्",
    "pronunciation": "yata aunuhos"
  },
  {
    "english": "Let's eat",
    "nepali": "खाऔं",
    "newar": "खाऔं",
    "pronunciation": "khaun"
  },
  {
    "english": "Let's drink",
    "nepali": "पिऔं",
    "newar": "पिऔं",
    "pronunciation": "piun"
  }
    ]
  },



{
  "id": 2,
  "title": "Numbers",
  "description": "Learn numbers in Newar language",
  "content": [
    {
      "english": "Zero",
      "nepali": "सुन्ना",
      "newar": "सिफार",
      "pronunciation": "si-phar"
    },
    {
      "english": "One",
      "nepali": "एक",
      "newar": "छे",
      "pronunciation": "che"
    },
    {
      "english": "Two",
      "nepali": "दुई",
      "newar": "न्ये",
      "pronunciation": "nye"
    },
    {
      "english": "Three",
      "nepali": "तीन",
      "newar": "स्वाँ",
      "pronunciation": "swa"
    },
    {
      "english": "Four",
      "nepali": "चार",
      "newar": "प्ये",
      "pronunciation": "pye"
    },
    {
      "english": "Five",
      "nepali": "पाँच",
      "newar": "न्याँ",
      "pronunciation": "nya"
    },
    {
      "english": "Six",
      "nepali": "छ",
      "newar": "खु",
      "pronunciation": "khu"
    },
    {
      "english": "Seven",
      "nepali": "सात",
      "newar": "न्हे",
      "pronunciation": "nhe"
    },
    {
      "english": "Eight",
      "nepali": "आठ",
      "newar": "च्ये",
      "pronunciation": "chye"
    },
    {
      "english": "Nine",
      "nepali": "नौ",
      "newar": "गु",
      "pronunciation": "gu"
    },
    {
      "english": "Ten",
      "nepali": "दश",
      "newar": "सि",
      "pronunciation": "si"
    },
    {
      "english": "Eleven",
      "nepali": "एघार",
      "newar": "सि-छे",
      "pronunciation": "si-che"
    },
    {
      "english": "Twelve",
      "nepali": "बाह्र",
      "newar": "सि-न्ये",
      "pronunciation": "si-nye"
    },
    {
      "english": "Thirteen",
      "nepali": "तेह्र",
      "newar": "सि-स्वाँ",
      "pronunciation": "si-swa"
    },
    {
      "english": "Fourteen",
      "nepali": "चौध",
      "newar": "सि-प्ये",
      "pronunciation": "si-pye"
    },
    {
      "english": "Fifteen",
      "nepali": "पन्ध्र",
      "newar": "सि-न्याँ",
      "pronunciation": "si-nya"
    },
    {
      "english": "Sixteen",
      "nepali": "सोह्र",
      "newar": "सि-खु",
      "pronunciation": "si-khu"
    },
    {
      "english": "Seventeen",
      "nepali": "सत्र",
      "newar": "सि-न्हे",
      "pronunciation": "si-nhe"
    },
    {
      "english": "Eighteen",
      "nepali": "अठार",
      "newar": "सि-च्ये",
      "pronunciation": "si-chye"
    },
    {
      "english": "Nineteen",
      "nepali": "उन्नाइस",
      "newar": "सि-गु",
      "pronunciation": "si-gu"
    },
    {
      "english": "Twenty",
      "nepali": "बीस",
      "newar": "न्ह्ये",
      "pronunciation": "nhye"
    },
    {
      "english": "Twenty-one",
      "nepali": "एक्काइस",
      "newar": "न्ह्ये-छे",
      "pronunciation": "nhye-che"
    },
    {
      "english": "Twenty-two",
      "nepali": "बाइस",
      "newar": "न्ह्ये-न्ये",
      "pronunciation": "nhye-nye"
    },
    {
      "english": "Twenty-three",
      "nepali": "तेईस",
      "newar": "न्ह्ये-स्वाँ",
      "pronunciation": "nhye-swa"
    },
    {
      "english": "Twenty-four",
      "nepali": "चौबिस",
      "newar": "न्ह्ये-प्ये",
      "pronunciation": "nhye-pye"
    },
    {
      "english": "Twenty-five",
      "nepali": "पच्चिस",
      "newar": "न्ह्ये-न्याँ",
      "pronunciation": "nhye-nya"
    },
    {
      "english": "Twenty-six",
      "nepali": "छब्बिस",
      "newar": "न्ह्ये-खु",
      "pronunciation": "nhye-khu"
    },
    {
      "english": "Twenty-seven",
      "nepali": "सत्ताइस",
      "newar": "न्ह्ये-न्हे",
      "pronunciation": "nhye-nhe"
    },
    {
      "english": "Twenty-eight",
      "nepali": "अठ्ठाइस",
      "newar": "न्ह्ये-च्ये",
      "pronunciation": "nhye-chye"
    },
    {
      "english": "Twenty-nine",
      "nepali": "उनन्तीस",
      "newar": "न्ह्ये-गु",
      "pronunciation": "nhye-gu"
    },
    {
      "english": "Thirty",
      "nepali": "तीस",
      "newar": "साँय्",
      "pronunciation": "saay"
    },
    {
      "english": "Forty",
      "nepali": "चालीस",
      "newar": "व्जाय्",
      "pronunciation": "bjaay"
    },
    {
      "english": "Fifty",
      "nepali": "पचास",
      "newar": "याय्",
      "pronunciation": "yaay"
    },
    {
      "english": "Sixty",
      "nepali": "साठी",
      "newar": "कहय्",
      "pronunciation": "kahay"
    },
    {
      "english": "Seventy",
      "nepali": "सत्तरी",
      "newar": "न्हय्",
      "pronunciation": "nhay"
    },
    {
      "english": "Eighty",
      "nepali": "असी",
      "newar": "च्याय्",
      "pronunciation": "chyaay"
    },
    {
      "english": "Ninety",
      "nepali": "नब्बे",
      "newar": "गुय्",
      "pronunciation": "guay"
    },
    {
      "english": "One Hundred",
      "nepali": "एक सय",
      "newar": "छे सय",
      "pronunciation": "che say"
    }
  ]
},

  // Add more lessons here...
];

export async function GET() {
  return NextResponse.json(lessons);
}