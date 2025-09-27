// app/language/lessons/[id]/page.tsx
import LessonContent from "@/components/language/lesson-content";

// Expanded lessons data for all 25 categories
const lessonsData = {
  1: {
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
        "english": "Good morning",
        "nepali": "शुभ प्रभात",
        "newar": "शुभ प्रभात",
        "pronunciation": "shubha prabhat"
      },
      {
        "english": "Good night",
        "nepali": "शुभ रात्री",
        "newar": "शुभ रात्री",
        "pronunciation": "shubha ratri"
      },
      {
        "english": "Welcome",
        "nepali": "स्वागतम्",
        "newar": "स्वागतम्",
        "pronunciation": "swagatam"
      },
      {
        "english": "Please",
        "nepali": "कृपया",
        "newar": "कृपया",
        "pronunciation": "kripaya"
      },
      {
        "english": "Sorry",
        "nepali": "माफ गर्नुहोस्",
        "newar": "माफ यानाह",
        "pronunciation": "maaf yanah"
      },
      {
        "english": "Excuse me",
        "nepali": "माफ गर्नुहोस्",
        "newar": "माफ यानाह",
        "pronunciation": "maaf yanah"
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
        "newar": "होइन",
        "pronunciation": "hoina"
      },
      {
        "english": "Maybe",
        "nepali": "हुनसक्छ",
        "newar": "हुनसक्छ",
        "pronunciation": "hunasakcha"
      },
      {
        "english": "I don't understand",
        "nepali": "मैले बुझिन",
        "newar": "जिले बुझिन",
        "pronunciation": "jile bujhina"
      },
      {
        "english": "Could you repeat that?",
        "nepali": "कृपया फेरि भन्नुहोस्",
        "newar": "कृपया फेरि भन्नाह",
        "pronunciation": "kripaya pheri bhannah"
      },
      {
        "english": "What is your name?",
        "nepali": "तपाईंको नाम के हो?",
        "newar": "छिगु नाम के ख?",
        "pronunciation": "chhigu naam ke kha?"
      },
      // ... (add more content for greetings)
    ],
    difficulty: "beginner",
    duration: 15,
    wordsCount: 15
  },
  2: {
    id: 2,
    title: "Numbers",
    description: "Learn numbers in Newar language",
    content: [
      {
        "english": "One",
        "nepali": "एक",
        "newar": "एक",
        "pronunciation": "ek"
      },
      {
        "english": "Two",
        "nepali": "दुई",
        "newar": "दुई",
        "pronunciation": "dui"
      }, {
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
      "english": "Thirty-one",
      "nepali": "एकत्तीस",
      "newar": "साँय्-छे",
      "pronunciation": "saay-che"
    },
    {
      "english": "Thirty-two",
      "nepali": "बत्तीस",
      "newar": "साँय्-न्ये",
      "pronunciation": "saay-nye"
    },
    {
      "english": "Thirty-three",
      "nepali": "तेत्तीस",
      "newar": "साँय्-स्वाँ",
      "pronunciation": "saay-swa"
    },
    {
      "english": "Thirty-four",
      "nepali": "चौंतीस",
      "newar": "साँय्-प्ये",
      "pronunciation": "saay-pye"
    },
    {
      "english": "Thirty-five",
      "nepali": "पैंतीस",
      "newar": "साँय्-न्याँ",
      "pronunciation": "saay-nya"
    },
    {
      "english": "Thirty-six",
      "nepali": "छत्तीस",
      "newar": "साँय्-खु",
      "pronunciation": "saay-khu"
    },
    {
      "english": "Thirty-seven",
      "nepali": "सैंतीस",
      "newar": "साँय्-न्हे",
      "pronunciation": "saay-nhe"
    },
    {
      "english": "Thirty-eight",
      "nepali": "अठतीस",
      "newar": "साँय्-च्ये",
      "pronunciation": "saay-chye"
    },
    {
      "english": "Thirty-nine",
      "nepali": "उनन्चालीस",
      "newar": "साँय्-गु",
      "pronunciation": "saay-gu"
    },
    {
      "english": "Forty",
      "nepali": "चालीस",
      "newar": "व्जाय्",
      "pronunciation": "bjaay"
    },
    {
      "english": "Forty-one",
      "nepali": "एकचालीस",
      "newar": "व्जाय्-छे",
      "pronunciation": "bjaay-che"
    },
    {
      "english": "Forty-two",
      "nepali": "बयालीस",
      "newar": "व्जाय्-न्ये",
      "pronunciation": "bjaay-nye"
    },
    {
      "english": "Forty-three",
      "nepali": "त्रियालीस",
      "newar": "व्जाय्-स्वाँ",
      "pronunciation": "bjaay-swa"
    },
    {
      "english": "Forty-four",
      "nepali": "चवालीस",
      "newar": "व्जाय्-प्ये",
      "pronunciation": "bjaay-pye"
    },
    {
      "english": "Forty-five",
      "nepali": "पैंतालीस",
      "newar": "व्जाय्-न्याँ",
      "pronunciation": "bjaay-nya"
    },
    {
      "english": "Forty-six",
      "nepali": "छयालीस",
      "newar": "व्जाय्-खु",
      "pronunciation": "bjaay-khu"
    },
    {
      "english": "Forty-seven",
      "nepali": "सतचालीस",
      "newar": "व्जाय्-न्हे",
      "pronunciation": "bjaay-nhe"
    },
    {
      "english": "Forty-eight",
      "nepali": "अठचालीस",
      "newar": "व्जाय्-च्ये",
      "pronunciation": "bjaay-chye"
    },
    {
      "english": "Forty-nine",
      "nepali": "उनन्चास",
      "newar": "व्जाय्-गु",
      "pronunciation": "bjaay-gu"
    },
    {
      "english": "Fifty",
      "nepali": "पचास",
      "newar": "याय्",
      "pronunciation": "yaay"
    },
    {
      "english": "Fifty-one",
      "nepali": "एकाउन्न",
      "newar": "याय्-छे",
      "pronunciation": "yaay-che"
    },
    {
      "english": "Fifty-two",
      "nepali": "बाउन्न",
      "newar": "याय्-न्ये",
      "pronunciation": "yaay-nye"
    },
    {
      "english": "Fifty-three",
      "nepali": "त्रिपन्न",
      "newar": "याय्-स्वाँ",
      "pronunciation": "yaay-swa"
    },
    {
      "english": "Fifty-four",
      "nepali": "चउन्न",
      "newar": "याय्-प्ये",
      "pronunciation": "yaay-pye"
    },
    {
      "english": "Fifty-five",
      "nepali": "पचपन्न",
      "newar": "याय्-न्याँ",
      "pronunciation": "yaay-nya"
    },
    {
      "english": "Fifty-six",
      "nepali": "छपन्न",
      "newar": "याय्-खु",
      "pronunciation": "yaay-khu"
    },
    {
      "english": "Fifty-seven",
      "nepali": "सन्ताउन्न",
      "newar": "याय्-न्हे",
      "pronunciation": "yaay-nhe"
    },
    {
      "english": "Fifty-eight",
      "nepali": "अन्ठाउन्न",
      "newar": "याय्-च्ये",
      "pronunciation": "yaay-chye"
    },
    {
      "english": "Fifty-nine",
      "nepali": "उनन्साठी",
      "newar": "याय्-गु",
      "pronunciation": "yaay-gu"
    },
    {
      "english": "Sixty",
      "nepali": "साठी",
      "newar": "कहय्",
      "pronunciation": "kahay"
    },
    {
      "english": "Sixty-one",
      "nepali": "एकसट्ठी",
      "newar": "कहय्-छे",
      "pronunciation": "kahay-che"
    },
    {
      "english": "Sixty-two",
      "nepali": "बयसट्ठी",
      "newar": "कहय्-न्ये",
      "pronunciation": "kahay-nye"
    },
    {
      "english": "Sixty-three",
      "nepali": "त्रिसट्ठी",
      "newar": "कहय्-स्वाँ",
      "pronunciation": "kahay-swa"
    },
    {
      "english": "Sixty-four",
      "nepali": "चौंसट्ठी",
      "newar": "कहय्-प्ये",
      "pronunciation": "kahay-pye"
    },
    {
      "english": "Sixty-five",
      "nepali": "पैंसट्ठी",
      "newar": "कहय्-न्याँ",
      "pronunciation": "kahay-nya"
    },
    {
      "english": "Sixty-six",
      "nepali": "छयसट्ठी",
      "newar": "कहय्-खु",
      "pronunciation": "kahay-khu"
    },
    {
      "english": "Sixty-seven",
      "nepali": "सतसट्ठी",
      "newar": "कहय्-न्हे",
      "pronunciation": "kahay-nhe"
    },
    {
      "english": "Sixty-eight",
      "nepali": "अठसट्ठी",
      "newar": "कहय्-च्ये",
      "pronunciation": "kahay-chye"
    },
    {
      "english": "Sixty-nine",
      "nepali": "उनन्सत्तरी",
      "newar": "कहय्-गु",
      "pronunciation": "kahay-gu"
    },
    {
      "english": "Seventy",
      "nepali": "सत्तरी",
      "newar": "न्हय्",
      "pronunciation": "nhay"
    },
    {
      "english": "Seventy-one",
      "nepali": "एकहत्तर",
      "newar": "न्हय्-छे",
      "pronunciation": "nhay-che"
    },
    {
      "english": "Seventy-two",
      "nepali": "बहत्तर",
      "newar": "न्हय्-न्ये",
      "pronunciation": "nhay-nye"
    },
    {
      "english": "Seventy-three",
      "nepali": "त्रिहत्तर",
      "newar": "न्हय्-स्वाँ",
      "pronunciation": "nhay-swa"
    },
    {
      "english": "Seventy-four",
      "nepali": "चौहत्तर",
      "newar": "न्हय्-प्ये",
      "pronunciation": "nhay-pye"
    },
    {
      "english": "Seventy-five",
      "nepali": "पचहत्तर",
      "newar": "न्हय्-न्याँ",
      "pronunciation": "nhay-nya"
    },
    {
      "english": "Seventy-six",
      "nepali": "छयहत्तर",
      "newar": "न्हय्-खु",
      "pronunciation": "nhay-khu"
    },
    {
      "english": "Seventy-seven",
      "nepali": "सतहत्तर",
      "newar": "न्हय्-न्हे",
      "pronunciation": "nhay-nhe"
    },
    {
      "english": "Seventy-eight",
      "nepali": "अठहत्तर",
      "newar": "न्हय्-च्ये",
      "pronunciation": "nhay-chye"
    },
    {
      "english": "Seventy-nine",
      "nepali": "उनासी",
      "newar": "न्हय्-गु",
      "pronunciation": "nhay-gu"
    },
    {
      "english": "Eighty",
      "nepali": "असी",
      "newar": "च्याय्",
      "pronunciation": "chyaay"
    },
    {
      "english": "Eighty-one",
      "nepali": "एकासी",
      "newar": "च्याय्-छे",
      "pronunciation": "chyaay-che"
    },
    {
      "english": "Eighty-two",
      "nepali": "बयासी",
      "newar": "च्याय्-न्ये",
      "pronunciation": "chyaay-nye"
    },
    {
      "english": "Eighty-three",
      "nepali": "त्रियासी",
      "newar": "च्याय्-स्वाँ",
      "pronunciation": "chyaay-swa"
    },
    {
      "english": "Eighty-four",
      "nepali": "चौरासी",
      "newar": "च्याय्-प्ये",
      "pronunciation": "chyaay-pye"
    },
    {
      "english": "Eighty-five",
      "nepali": "पचासी",
      "newar": "च्याय्-न्याँ",
      "pronunciation": "chyaay-nya"
    },
    {
      "english": "Eighty-six",
      "nepali": "छयासी",
      "newar": "च्याय्-खु",
      "pronunciation": "chyaay-khu"
    },
    {
      "english": "Eighty-seven",
      "nepali": "सतासी",
      "newar": "च्याय्-न्हे",
      "pronunciation": "chyaay-nhe"
    },
    {
      "english": "Eighty-eight",
      "nepali": "अठासी",
      "newar": "च्याय्-च्ये",
      "pronunciation": "chyaay-chye"
    },
    {
      "english": "Eighty-nine",
      "nepali": "उनन्नब्बे",
      "newar": "च्याय्-गु",
      "pronunciation": "chyaay-gu"
    },
    {
      "english": "Ninety",
      "nepali": "नब्बे",
      "newar": "गुय्",
      "pronunciation": "guay"
    },
    {
      "english": "Ninety-one",
      "nepali": "एकान्नब्बे",
      "newar": "गुय्-छे",
      "pronunciation": "guay-che"
    },
    {
      "english": "Ninety-two",
      "nepali": "बयान्नब्बे",
      "newar": "गुय्-न्ये",
      "pronunciation": "guay-nye"
    },
    {
      "english": "Ninety-three",
      "nepali": "त्रियान्नब्बे",
      "newar": "गुय्-स्वाँ",
      "pronunciation": "guay-swa"
    },
    {
      "english": "Ninety-four",
      "nepali": "चौरान्नब्बे",
      "newar": "गुय्-प्ये",
      "pronunciation": "guay-pye"
    },
    {
      "english": "Ninety-five",
      "nepali": "पचान्नब्बे",
      "newar": "गुय्-न्याँ",
      "pronunciation": "guay-nya"
    },
    {
      "english": "Ninety-six",
      "nepali": "छयान्नब्बे",
      "newar": "गुय्-खु",
      "pronunciation": "guay-khu"
    },
    {
      "english": "Ninety-seven",
      "nepali": "सतान्नब्बे",
      "newar": "गुय्-न्हे",
      "pronunciation": "guay-nhe"
    },
    {
      "english": "Ninety-eight",
      "nepali": "अठान्नब्बे",
      "newar": "गुय्-च्ये",
      "pronunciation": "guay-chye"
    },
    {
      "english": "Ninety-nine",
      "nepali": "उनान्सय",
      "newar": "गुय्-गु",
      "pronunciation": "guay-gu"
    },
    {
      "english": "One Hundred",
      "nepali": "एक सय",
      "newar": "छे सय",
      "pronunciation": "che say"
    }
      // ... (add more content for numbers)
    ],
    difficulty: "beginner",
    duration: 25,
    wordsCount: 101
  },
  3: {
    id: 3,
    title: "Family Members",
    description: "Names for family relationships in Newar",
    content: [
        {
      "english": "Father",
      "nepali": "बुबा",
      "newar": "अबु",
      "pronunciation": "a-bu"
    },
    {
      "english": "Mother",
      "nepali": "आमा",
      "newar": "अमा",
      "pronunciation": "a-ma"
    },
    {
      "english": "Elder Brother",
      "nepali": "दाई",
      "newar": "दाजु",
      "pronunciation": "da-ju"
    },
    {
      "english": "Younger Brother",
      "nepali": "भाई",
      "newar": "भाइ",
      "pronunciation": "bha-i"
    },
    {
      "english": "Elder Sister",
      "nepali": "दिदी",
      "newar": "ताता",
      "pronunciation": "ta-ta"
    },
    {
      "english": "Younger Sister",
      "nepali": "बहिनी",
      "newar": "भवन्ति",
      "pronunciation": "bha-wan-ti"
    },
    {
      "english": "Grandfather",
      "nepali": "बाजे",
      "newar": "अजु",
      "pronunciation": "a-ju"
    },
    {
      "english": "Grandmother",
      "nepali": "बज्यै",
      "newar": "अजि",
      "pronunciation": "a-ji"
    },
    {
      "english": "Son",
      "nepali": "छोरा",
      "newar": "स्वाँ",
      "pronunciation": "swa"
    },
    {
      "english": "Daughter",
      "nepali": "छोरी",
      "newar": "म्हैसि",
      "pronunciation": "mhai-si"
    },
    {
      "english": "Husband",
      "nepali": "लोग्ने",
      "newar": "मिसा",
      "pronunciation": "mi-sa"
    },
    {
      "english": "Wife",
      "nepali": "श्रीमती",
      "newar": "मिसि",
      "pronunciation": "mi-si"
    },
    {
      "english": "Uncle (Father's brother)",
      "nepali": "काका",
      "newar": "काका",
      "pronunciation": "ka-ka"
    },
    {
      "english": "Aunt (Father's sister)",
      "nepali": "फुपू",
      "newar": "पिपि",
      "pronunciation": "pi-pi"
    },
    {
      "english": "Uncle (Mother's brother)",
      "nepali": "मामा",
      "newar": "मामा",
      "pronunciation": "ma-ma"
    },
    {
      "english": "Aunt (Mother's sister)",
      "nepali": "माइजू",
      "newar": "थिनि",
      "pronunciation": "thi-ni"
    },
    {
      "english": "Nephew",
      "nepali": "भतिजा",
      "newar": "भतिज",
      "pronunciation": "bha-tij"
    },
    {
      "english": "Niece",
      "nepali": "भतिजी",
      "newar": "भतिजी",
      "pronunciation": "bha-ti-ji"
    },
    {
      "english": "Cousin",
      "nepali": "भाइबहिनी",
      "newar": "साथी",
      "pronunciation": "sa-thi"
    },
    {
      "english": "Father-in-law",
      "nepali": "ससुरा",
      "newar": "बेहेन",
      "pronunciation": "be-hen"
    },
    {
      "english": "Mother-in-law",
      "nepali": "सासू",
      "newar": "बेहेनि",
      "pronunciation": "be-he-ni"
    },
    {
      "english": "Brother-in-law",
      "nepali": "देवर",
      "newar": "देवर",
      "pronunciation": "de-war"
    },
    {
      "english": "Sister-in-law",
      "nepali": "नन्द",
      "newar": "नन्द",
      "pronunciation": "nan-da"
    },
    {
      "english": "Son-in-law",
      "nepali": "ज्वाइँ",
      "newar": "ज्वाइँ",
      "pronunciation": "jwai"
    },
    {
      "english": "Daughter-in-law",
      "nepali": "बुहारी",
      "newar": "बुहारी",
      "pronunciation": "bu-ha-ri"
    },
    {
      "english": "Grandson",
      "nepali": "नाति",
      "newar": "नाति",
      "pronunciation": "na-ti"
    },
    {
      "english": "Granddaughter",
      "nepali": "नातिनी",
      "newar": "नातिनी",
      "pronunciation": "na-ti-ni"
    },
    {
      "english": "Great-grandfather",
      "nepali": "परबाजे",
      "newar": "परअजु",
      "pronunciation": "par-a-ju"
    },
    {
      "english": "Great-grandmother",
      "nepali": "परबज्यै",
      "newar": "परअजि",
      "pronunciation": "par-a-ji"
    },
    {
      "english": "Family",
      "nepali": "परिवार",
      "newar": "परिवार",
      "pronunciation": "pa-ri-war"
    },
    {
      "english": "Relatives",
      "nepali": "नातागोता",
      "newar": "नातागोता",
      "pronunciation": "na-ta-go-ta"
    },
    {
      "english": "Ancestors",
      "nepali": "पूर्खा",
      "newar": "पूर्खा",
      "pronunciation": "pur-kha"
    },
    {
      "english": "Descendants",
      "nepali": "वंशज",
      "newar": "वंशज",
      "pronunciation": "wan-shaj"
    },
    {
      "english": "This is my father",
      "nepali": "यो मेरो बुबा हो",
      "newar": "या जिगु अबु खः",
      "pronunciation": "ya ji-gu a-bu khah"
    },
    {
      "english": "This is my mother",
      "nepali": "यो मेरो आमा हो",
      "newar": "या जिगु अमा खः",
      "pronunciation": "ya ji-gu a-ma khah"
    },
    {
      "english": "I have two brothers",
      "nepali": "मेरो दुई भाई छन्",
      "newar": "जिगु न्ये भाइ छन्",
      "pronunciation": "ji-gu nye bha-i chan"
    },
    {
      "english": "I have one sister",
      "nepali": "मेरो एक बहिनी छ",
      "newar": "जिगु छे भवन्ति छ",
      "pronunciation": "ji-gu che bha-wan-ti cha"
    },
    {
      "english": "Where is your father?",
      "nepali": "तपाईंको बुबा कहाँ छन्?",
      "newar": "छिगु अबु सुस्त छन्?",
      "pronunciation": "chi-gu a-bu susta chan?"
    },
    {
      "english": "My mother is at home",
      "nepali": "मेरो आमा घरमा छिन्",
      "newar": "जिगु अमा छेन्मा छिन्",
      "pronunciation": "ji-gu a-ma chen-ma chin"
    },
    {
      "english": "How many people are in your family?",
      "nepali": "तपाईंको परिवारमा कति जना छन्?",
      "newar": "छिगु परिवारमा कति जना छन्?",
      "pronunciation": "chi-gu pa-ri-war-ma ka-ti ja-na chan?"
    },
    {
      "english": "There are five people in my family",
      "nepali": "मेरो परिवारमा पाँच जना छन्",
      "newar": "जिगु परिवारमा न्याँ जना छन्",
      "pronunciation": "ji-gu pa-ri-war-ma nya ja-na chan"
    },
    {
      "english": "This is my elder brother",
      "nepali": "यो मेरो दाई हो",
      "newar": "या जिगु दाजु खः",
      "pronunciation": "ya ji-gu da-ju khah"
    },
    {
      "english": "This is my younger sister",
      "nepali": "यो मेरो बहिनी हो",
      "newar": "या जिगु भवन्ति खः",
      "pronunciation": "ya ji-gu bha-wan-ti khah"
    },
    {
      "english": "My grandfather is old",
      "nepali": "मेरो बाजे बुढो छन्",
      "newar": "जिगु अजु बुढो छन्",
      "pronunciation": "ji-gu a-ju bu-dho chan"
    },
    {
      "english": "My grandmother cooks well",
      "nepali": "मेरो बज्यै राम्रो पकाउँछिन्",
      "newar": "जिगु अजि राम्रो पकाउँछिन्",
      "pronunciation": "ji-gu a-ji ram-ro pa-kaun-chin"
    },
    {
      "english": "I love my family",
      "nepali": "मलाई मेरो परिवारसँग माया छ",
      "newar": "जिगु जिगु परिवारसँग माया छ",
      "pronunciation": "ji-gu ji-gu pa-ri-war-sang ma-ya cha"
    },
    {
      "english": "We are a big family",
      "nepali": "हामी ठूलो परिवार हौं",
      "newar": "जिउहरू ठूलो परिवार हौं",
      "pronunciation": "jiu-ha-ru thu-lo pa-ri-war haun"
    },
    {
      "english": "My son goes to school",
      "nepali": "मेरो छोरा स्कूल जान्छ",
      "newar": "जिगु स्वाँ स्कूल वऺछ",
      "pronunciation": "ji-gu swa skul wa-chha"
    },
    {
      "english": "My daughter is studying",
      "nepali": "मेरो छोरी पढिरहेकी छ",
      "newar": "जिगु म्हैसि पढिरहेकी छ",
      "pronunciation": "ji-gu mhai-si pa-dhi-ra-he-ki cha"
    },
    {
      "english": "Where is your husband?",
      "nepali": "तपाईंको लोग्ने कहाँ छ?",
      "newar": "छिगु मिसा सुस्त छ?",
      "pronunciation": "chi-gu mi-sa susta cha?"
    },
    {
      "english": "My wife is working",
      "nepali": "मेरो श्रीमती काम गर्दै छिन्",
      "newar": "जिगु मिसि काम गर्दै छिन्",
      "pronunciation": "ji-gu mi-si kam gar-dai chin"
    },
    {
      "english": "I live with my parents",
      "nepali": "म आमाबुबासँग बस्छु",
      "newar": "जिउ अमाअबुसँग बस्छु",
      "pronunciation": "jiu a-ma-a-bu-sang bas-chu"
    },
    {
      "english": "We are visiting our relatives",
      "nepali": "हामी हाम्रा नातागोता भेट्न जादै छौं",
      "newar": "जिउहरू जिगु नातागोता भेट्न वऺदै छौं",
      "pronunciation": "jiu-ha-ru ji-gu na-ta-go-ta bhet-na wa-dai chaun"
    },
    {
      "english": "My uncle is coming tomorrow",
      "nepali": "मेरो काका भोलि आउँदै छन्",
      "newar": "जिगु काका भोलि आउँदै छन्",
      "pronunciation": "ji-gu ka-ka bho-li aun-dai chan"
    },
    {
      "english": "My aunt gave me a gift",
      "nepali": "मेरी फुपूले मलाई उपहार दिइन्",
      "newar": "जिगु पिपिले जिगु ला उपहार दिइन्",
      "pronunciation": "ji-gu pi-pi-le ji-gu la u-pa-har di-in"
    },
    {
      "english": "I have many cousins",
      "nepali": "मेरा धेरै साथीभाइ छन्",
      "newar": "जिगु धेरै साथी छन्",
      "pronunciation": "ji-gu dhe-rai sa-thi chan"
    },
    {
      "english": "This is my nephew",
      "nepali": "यो मेरो भतिजा हो",
      "newar": "या जिगु भतिज खः",
      "pronunciation": "ya ji-gu bha-tij khah"
    },
    {
      "english": "This is my niece",
      "nepali": "यो मेरो भतिजी हो",
      "newar": "या जिगु भतिजी खः",
      "pronunciation": "ya ji-gu bha-ti-ji khah"
    },
    {
      "english": "My father-in-law is kind",
      "nepali": "मेरो ससुरा दयालु छन्",
      "newar": "जिगु बेहेन दयालु छन्",
      "pronunciation": "ji-gu be-hen da-ya-lu chan"
    },
    {
      "english": "My mother-in-law cooks delicious food",
      "nepali": "मेरो सासू मिठो खाना पकाउँछिन्",
      "newar": "जिगु बेहेनि मिठो खाना पकाउँछिन्",
      "pronunciation": "ji-gu be-he-ni mi-tho kha-na pa-kaun-chin"
    },
    {
      "english": "I have a brother-in-law",
      "nepali": "मेरो एक देवर छ",
      "newar": "जिगु छे देवर छ",
      "pronunciation": "ji-gu che de-war cha"
    },
    {
      "english": "My sister-in-law is helpful",
      "nepali": "मेरो नन्द सहयोगी छिन्",
      "newar": "जिगु नन्द सहयोगी छिन्",
      "pronunciation": "ji-gu nan-da sa-ha-yo-gi chin"
    },
    {
      "english": "My son-in-law is a doctor",
      "nepali": "मेरो ज्वाइँ डाक्टर हो",
      "newar": "जिगु ज्वाइँ डाक्टर खः",
      "pronunciation": "ji-gu jwai dak-tar khah"
    },
    {
      "english": "My daughter-in-law is a teacher",
      "nepali": "मेरो बुहारी शिक्षिका हुन्",
      "newar": "जिगु बुहारी शिक्षिका हुन्",
      "pronunciation": "ji-gu bu-ha-ri shik-shika hun"
    },
    {
      "english": "I have two grandchildren",
      "nepali": "मेरा दुई नातिनाति छन्",
      "newar": "जिगु न्ये नातिनाति छन्",
      "pronunciation": "ji-gu nye na-ti-na-ti chan"
    },
    {
      "english": "My grandson is cute",
      "nepali": "मेरो नाति राम्रो छ",
      "newar": "जिगु नाति राम्रो छ",
      "pronunciation": "ji-gu na-ti ram-ro cha"
    },
    {
      "english": "My granddaughter is smart",
      "nepali": "मेरो नातिनी होशियार छ",
      "newar": "जिगु नातिनी होशियार छ",
      "pronunciation": "ji-gu na-ti-ni ho-shi-yar cha"
    },
    {
      "english": "We remember our ancestors",
      "nepali": "हामी हाम्रा पूर्खालाई सम्झन्छौं",
      "newar": "जिउहरू जिगु पूर्खालाई सम्झन्छौं",
      "pronunciation": "jiu-ha-ru ji-gu pur-kha-lai sam-jhan-chaun"
    },
    {
      "english": "Family is important",
      "nepali": "परिवार महत्त्वपूर्ण छ",
      "newar": "परिवार महत्त्वपूर्ण छ",
      "pronunciation": "pa-ri-war ma-hat-twa-pur-na cha"
    },
    {
      "english": "I respect my elders",
      "nepali": "म बडालाई आदर गर्छु",
      "newar": "जिउ बडालाई आदर गर्छु",
      "pronunciation": "jiu ba-da-lai a-dar gar-chu"
    },
    {
      "english": "We take care of our children",
      "nepali": "हामी हाम्रा बच्चाहरूको हेरचाह गर्छौं",
      "newar": "जिउहरू जिगु बच्चाहरूको हेरचाह गर्छौं",
      "pronunciation": "jiu-ha-ru ji-gu bac-ca-ha-ru-ko he-ra-chah gar-chaun"
    },
    {
      "english": "My family supports me",
      "nepali": "मेरो परिवारले मलाई सहयोग गर्छ",
      "newar": "जिगु परिवारले जिगु ला सहयोग गर्छ",
      "pronunciation": "ji-gu pa-ri-war-le ji-gu la sa-ha-yog gar-cha"
    },
    {
      "english": "We celebrate festivals together",
      "nepali": "हामी सँगै चाडपर्व मनाउँछौं",
      "newar": "जिउहरू सँगै चाडपर्व मनाउँछौं",
      "pronunciation": "jiu-ha-ru sang-gai chad-par-wa ma-naun-chaun"
    },
    {
      "english": "I miss my family",
      "nepali": "मलाई मेरो परिवारको सम्झना आउँछ",
      "newar": "जिगु जिगु परिवारको सम्झना आउँछ",
      "pronunciation": "ji-gu ji-gu pa-ri-war-ko sam-jha-na aun-cha"
    },
    {
      "english": "We share happiness and sorrow",
      "nepali": "हामी सुखदुख साझा गर्छौं",
      "newar": "जिउहरू सुखदुख साझा गर्छौं",
      "pronunciation": "jiu-ha-ru sukh-dukh sa-jha gar-chaun"
    },
    {
      "english": "My parents are my inspiration",
      "nepali": "मेरा आमाबुबा मेरा प्रेरणा हुन्",
      "newar": "जिगु अमाअबु जिगु प्रेरणा हुन्",
      "pronunciation": "ji-gu a-ma-a-bu ji-gu pre-ra-na hun"
    },
    {
      "english": "I am proud of my family",
      "nepali": "म मेरो परिवारमा गर्व गर्छु",
      "newar": "जिउ जिगु परिवारमा गर्व गर्छु",
      "pronunciation": "jiu ji-gu pa-ri-war-ma gar-wa gar-chu"
    },
    {
      "english": "We help each other",
      "nepali": "हामी एकअर्कालाई मद्दत गर्छौं",
      "newar": "जिउहरू एकअर्कालाई मद्दत गर्छौं",
      "pronunciation": "jiu-ha-ru ek-ar-ka-lai mad-dat gar-chaun"
    },
    {
      "english": "Family is forever",
      "nepali": "परिवार सधैंको लागि हो",
      "newar": "परिवार सधैंको लागि खः",
      "pronunciation": "pa-ri-war sa-dhai-ko la-gi khah"
    },
    {
      "english": "I cherish family moments",
      "nepali": "म परिवारका क्षणहरूलाई मन पराउँछु",
      "newar": "जिउ परिवारका क्षणहरूलाई मन पराउँछु",
      "pronunciation": "jiu pa-ri-war-ka ksha-na-ha-ru-lai man pa-raun-chu"
    },
    {
      "english": "We eat together",
      "nepali": "हामी सँगै खान्छौं",
      "newar": "जिउहरू सँगै खान्छौं",
      "pronunciation": "jiu-ha-ru sang-gai khan-chaun"
    },
    {
      "english": "My family gives me strength",
      "nepali": "मेरो परिवारले मलाई बल दिन्छ",
      "newar": "जिगु परिवारले जिगु ला बल दिन्छ",
      "pronunciation": "ji-gu pa-ri-war-le ji-gu la bal din-cha"
    },
    {
      "english": "We pray together",
      "nepali": "हामी सँगै प्रार्थना गर्छौं",
      "newar": "जिउहरू सँगै प्रार्थना गर्छौं",
      "pronunciation": "jiu-ha-ru sang-gai prar-tha-na gar-chaun"
    },
    {
      "english": "I learn from my elders",
      "nepali": "म बडाहरूबाट सिक्छु",
      "newar": "जिउ बडाहरूबाट सिक्छु",
      "pronunciation": "jiu ba-da-ha-ru-bat sik-chu"
    },
    {
      "english": "We respect our traditions",
      "nepali": "हामी हाम्रा परम्पराहरूलाई आदर गर्छौं",
      "newar": "जिउहरू जिगु परम्पराहरूलाई आदर गर्छौं",
      "pronunciation": "jiu-ha-ru ji-gu par-am-pa-ra-ha-ru-lai a-dar gar-chaun"
    },
    {
      "english": "My family is my home",
      "nepali": "मेरो परिवार नै मेरो घर हो",
      "newar": "जिगु परिवार नै जिगु छेन् खः",
      "pronunciation": "ji-gu pa-ri-war nai ji-gu chen khah"
    },
    {
      "english": "We are bonded by love",
      "nepali": "हामी मायाले जोडिएका छौं",
      "newar": "जिउहरू मायाले जोडिएका छौं",
      "pronunciation": "jiu-ha-ru ma-ya-le jo-di-e-ka chaun"
    },
    {
      "english": "I thank my family",
      "nepali": "म मेरो परिवारलाई धन्यवाद दिन्छु",
      "newar": "जिउ जिगु परिवारलाई सुभाय् दिन्छु",
      "pronunciation": "jiu ji-gu pa-ri-war-lai su-bhay din-chu"
    },
    {
      "english": "We are happy together",
      "nepali": "हामी सँगै खुशी छौं",
      "newar": "जिउहरू सँगै खुशी छौं",
      "pronunciation": "jiu-ha-ru sang-gai khu-shi chaun"
    },
    {
      "english": "My family understands me",
      "nepali": "मेरो परिवारले मलाई बुझ्छ",
      "newar": "जिगु परिवारले जिगु ला बुझ्छ",
      "pronunciation": "ji-gu pa-ri-war-le ji-gu la buj-cha"
    },
    {
      "english": "We grow together",
      "nepali": "हामी सँगै बढ्छौं",
      "newar": "जिउहरू सँगै बढ्छौं",
      "pronunciation": "jiu-ha-ru sang-gai badh-chaun"
    },
    {
      "english": "I protect my family",
      "nepali": "म मेरो परिवारलाई जोगाउँछु",
      "newar": "जिउ जिगु परिवारलाई जोगाउँछु",
      "pronunciation": "jiu ji-gu pa-ri-war-lai jo-gaun-chu"
    },
    {
      "english": "We are blessed with a good family",
      "nepali": "हामी राम्रो परिवारले आशीर्वादित छौं",
      "newar": "जिउहरू राम्रो परिवारले आशीर्वादित छौं",
      "pronunciation": "jiu-ha-ru ram-ro pa-ri-war-le a-shir-wa-dit chaun"
    },
    {
      "english": "My family is my identity",
      "nepali": "मेरो परिवार नै मेरो पहिचान हो",
      "newar": "जिगु परिवार नै जिगु पहिचान खः",
      "pronunciation": "ji-gu pa-ri-war nai ji-gu pa-hi-chan khah"
    },
    {
      "english": "We stand by each other",
      "nepali": "हामी एकअर्काको साथ दिन्छौं",
      "newar": "जिउहरू एकअर्काको साथ दिन्छौं",
      "pronunciation": "jiu-ha-ru ek-ar-ka-ko sath din-chaun"
    },
    {
      "english": "I value family time",
      "nepali": "म परिवारको समयलाई मूल्यवान मान्छु",
      "newar": "जिउ परिवारको समयलाई मूल्यवान मान्छु",
      "pronunciation": "jiu pa-ri-war-ko sa-may-lai mul-ya-wan man-chu"
    },
    {
      "english": "We create memories together",
      "nepali": "हामी सँगै सम्झनाहरू सिर्जना गर्छौं",
      "newar": "जिउहरू सँगै सम्झनाहरू सिर्जना गर्छौं",
      "pronunciation": "jiu-ha-ru sang-gai sam-jha-na-ha-ru sir-ja-na gar-chaun"
    },
    {
      "english": "My family is my strength",
      "nepali": "मेरो परिवार नै मेरो शक्ति हो",
      "newar": "जिगु परिवार नै जिगु शक्ति खः",
      "pronunciation": "ji-gu pa-ri-war nai ji-gu shak-ti khah"
    },
    {
      "english": "We are a united family",
      "nepali": "हामी एकताबद्ध परिवार हौं",
      "newar": "जिउहरू एकताबद्ध परिवार हौं",
      "pronunciation": "jiu-ha-ru ek-ta-bad-dha pa-ri-war haun"
    },
    {
      "english": "I honor my family",
      "nepali": "म मेरो परिवारलाई सम्मान गर्छु",
      "newar": "जिउ जिगु परिवारलाई सम्मान गर्छु",
      "pronunciation": "jiu ji-gu pa-ri-war-lai sam-man gar-chu"
    },
    {
      "english": "We support each other's dreams",
      "nepali": "हामी एकअर्काका सपनाहरूलाई सहयोग गर्छौं",
      "newar": "जिउहरू एकअर्काका सपनाहरूलाई सहयोग गर्छौं",
      "pronunciation": "jiu-ha-ru ek-ar-ka-ka sap-na-ha-ru-lai sa-ha-yog gar-chaun"
    },
    {
      "english": "My family is my world",
      "nepali": "मेरो परिवार नै मेरो संसार हो",
      "newar": "जिगु परिवार नै जिगु संसार खः",
      "pronunciation": "ji-gu pa-ri-war nai ji-gu san-sar khah"
    },
    ],
    difficulty: "beginner",
    duration: 25,
    wordsCount: 28
  },
  4: {
    id: 4,
    title: "Food & Drinks",
    description: "Food vocabulary and dining phrases",
    content: [
       {
      "english": "Rice",
      "nepali": "भात",
      "newar": "जा",
      "pronunciation": "ja"
    },
    {
      "english": "Water",
      "nepali": "पानी",
      "newar": "लः",
      "pronunciation": "lah"
    },
    {
      "english": "Tea",
      "nepali": "चिया",
      "newar": "च्यः",
      "pronunciation": "chyah"
    },
    {
      "english": "Coffee",
      "nepali": "कफी",
      "newar": "कफी",
      "pronunciation": "kaphi"
    },
    {
      "english": "Milk",
      "nepali": "दुध",
      "newar": "दु",
      "pronunciation": "du"
    },
    {
      "english": "Bread",
      "nepali": "पाउरोटी",
      "newar": "पाउरोटी",
      "pronunciation": "pauroti"
    },
    {
      "english": "Vegetables",
      "nepali": "तरकारी",
      "newar": "तरकारी",
      "pronunciation": "tarkari"
    },
    {
      "english": "Meat",
      "nepali": "मासु",
      "newar": "लाः",
      "pronunciation": "laah"
    },
    {
      "english": "Fish",
      "nepali": "माछा",
      "newar": "न्याः",
      "pronunciation": "nyaah"
    },
    {
      "english": "Chicken",
      "nepali": "कुखुरा",
      "newar": "कुखुरा",
      "pronunciation": "kukhura"
    },
    {
      "english": "Egg",
      "nepali": "अण्डा",
      "newar": "खेँ",
      "pronunciation": "khen"
    },
    {
      "english": "Fruit",
      "nepali": "फल",
      "newar": "फल",
      "pronunciation": "phal"
    },
    {
      "english": "Apple",
      "nepali": "स्याउ",
      "newar": "स्याउ",
      "pronunciation": "syau"
    },
    {
      "english": "Banana",
      "nepali": "केरा",
      "newar": "केरा",
      "pronunciation": "kera"
    },
    {
      "english": "Mango",
      "nepali": "आँप",
      "newar": "आँप",
      "pronunciation": "aap"
    },
    {
      "english": "Salt",
      "nepali": "नुन",
      "newar": "चि",
      "pronunciation": "chi"
    },
    {
      "english": "Sugar",
      "nepali": "चिनी",
      "newar": "चिनी",
      "pronunciation": "chini"
    },
    {
      "english": "Oil",
      "nepali": "तेल",
      "newar": "न्ह्ये",
      "pronunciation": "nhye"
    },
    {
      "english": "Spicy",
      "nepali": "पिरो",
      "newar": "पिरो",
      "pronunciation": "piro"
    },
    {
      "english": "Sweet",
      "nepali": "गुलियो",
      "newar": "मिठो",
      "pronunciation": "mitho"
    },
    {
      "english": "Sour",
      "nepali": "अमिलो",
      "newar": "अमिलो",
      "pronunciation": "amilo"
    },
    {
      "english": "Bitter",
      "nepali": "तितो",
      "newar": "तितो",
      "pronunciation": "tito"
    },
    {
      "english": "Delicious",
      "nepali": "मिठो",
      "newar": "मिठो",
      "pronunciation": "mitho"
    },
    {
      "english": "I'm hungry",
      "nepali": "मलाई भोक लाग्यो",
      "newar": "जिगु भोक लाग्यो",
      "pronunciation": "jigu bhok lagyo"
    },
    {
      "english": "I'm thirsty",
      "nepali": "मलाई पिर्सना लाग्यो",
      "newar": "जिगु तिर्खा लाग्यो",
      "pronunciation": "jigu tirkha lagyo"
    },
    {
      "english": "Let's eat",
      "nepali": "खाऔं",
      "newar": "न्ह्येगु",
      "pronunciation": "nhyegu"
    },
    {
      "english": "This is delicious",
      "nepali": "यो मिठो छ",
      "newar": "या मिठो छ",
      "pronunciation": "ya mitho cha"
    },
    {
      "english": "It's too spicy",
      "nepali": "यो धेरै पिरो छ",
      "newar": "या धेरै पिरो छ",
      "pronunciation": "ya dherai piro cha"
    },
    {
      "english": "Please give me water",
      "nepali": "कृपया मलाई पानी दिनुहोस्",
      "newar": "कृपया जिगु ला लः हे मेग",
      "pronunciation": "kripaya jigu la lah he meg"
    },
    {
      "english": "I want to eat",
      "nepali": "म खान चाहन्छु",
      "newar": "जिउ न्ह्येना मन छ",
      "pronunciation": "jiu nhyena man cha"
    },
    {
      "english": "What is this food called?",
      "nepali": "यो खानालाई के भनिन्छ?",
      "newar": "या न्ह्येनालाई के भनिन्छ?",
      "pronunciation": "ya nhyenalaai ke bhanincha?"
    },
    {
      "english": "I'm full",
      "nepali": "मलाई पुग्यो",
      "newar": "जिगु पुग्यो",
      "pronunciation": "jigu pugyo"
    },
    {
      "english": "I don't eat meat",
      "nepali": "म मासु खाँदिन",
      "newar": "जिउ लाः न्ह्येना मखु",
      "pronunciation": "jiu laah nhyena makhu"
    },
    {
      "english": "I'm vegetarian",
      "nepali": "म शाकाहारी हुँ",
      "newar": "जिउ शाकाहारी हूँ",
      "pronunciation": "jiu shakahari hum"
    },
    {
      "english": "Please serve food",
      "nepali": "कृपया खाना परोस्नुहोस्",
      "newar": "कृपया न्ह्येना परोस्नुहोस्",
      "pronunciation": "kripaya nhyena parosnuhos"
    },
    {
      "english": "More rice please",
      "nepali": "कृपया थप भात",
      "newar": "कृपया थप जा",
      "pronunciation": "kripaya thap ja"
    },
    {
      "english": "Less spicy please",
      "nepali": "कृपया कम पिरो",
      "newar": "कृपया कम पिरो",
      "pronunciation": "kripaya kam piro"
    },
    {
      "english": "I would like tea",
      "nepali": "मलाई चिया चाहियो",
      "newar": "जिगु च्यः चाहियो",
      "pronunciation": "jigu chyah chahiyo"
    },
    {
      "english": "With sugar or without?",
      "nepali": "चिनी हाल्ने की हाल्ने होइन?",
      "newar": "चिनी हाल्ने की मखु?",
      "pronunciation": "chini halne ki makhu?"
    },
    {
      "english": "No sugar please",
      "nepali": "कृपया चिनी नहाल्नुहोस्",
      "newar": "कृपया चिनी मखु",
      "pronunciation": "kripaya chini makhu"
    },
    {
      "english": "This tastes good",
      "nepali": "यसको स्वाद राम्रो छ",
      "newar": "यागु स्वाद राम्रो छ",
      "pronunciation": "yagu swad ramro cha"
    },
    {
      "english": "What's for dinner?",
      "nepali": "रातिको खाना के हो?",
      "newar": "रातिको न्ह्येना के खः?",
      "pronunciation": "ratiko nhyena ke khah?"
    },
    {
      "english": "I'll have the same",
      "nepali": "म पनि त्यही लिन्छु",
      "newar": "जिउ पनि त्यही लिन्छु",
      "pronunciation": "jiu pani tyahi linchu"
    },
    {
      "english": "Cheers!",
      "nepali": "चियर्स!",
      "newar": "चियर्स!",
      "pronunciation": "chyars!"
    },
    {
      "english": "To your health!",
      "nepali": "तपाईंको स्वास्थ्यको लागि!",
      "newar": "छिगु स्वास्थ्यको लागि!",
      "pronunciation": "chigu swasthyako lagi!"
    },
    {
      "english": "Can I have the menu?",
      "nepali": "कृपया मेनु ल्याउन सक्नुहुन्छ?",
      "newar": "कृपया मेनु हे ल्याउन मेग?",
      "pronunciation": "kripaya menu he lyauna meg?"
    },
    {
      "english": "What do you recommend?",
      "nepali": "तपाईं के सिफारिस गर्नुहुन्छ?",
      "newar": "छिगु के सिफारिस गर्नुहुन्छ?",
      "pronunciation": "chigu ke sifaris garnuhuncha?"
    },
    {
      "english": "I'm allergic to...",
      "nepali": "मलाई ... एलर्जी छ",
      "newar": "जिगु ... एलर्जी छ",
      "pronunciation": "jigu ... elarji cha"
    },
    {
      "english": "Is this vegetarian?",
      "nepali": "के यो शाकाहारी हो?",
      "newar": "छ की या शाकाहारी खः?",
      "pronunciation": "cha ki ya shakahari khah?"
    },
    {
      "english": "The bill please",
      "nepali": "कृपया बिल ल्याउनुहोस्",
      "newar": "कृपया बिल हे ल्याउ",
      "pronunciation": "kripaya bil he lyau"
    },
    {
      "english": "Keep the change",
      "nepali": "सुन्ती राख्नुहोस्",
      "newar": "सुन्ती राख्नुहोस्",
      "pronunciation": "sunti rakhnuhos"
    },
    {
      "english": "I'll pay",
      "nepali": "म तिर्छु",
      "newar": "जिउ तिर्छु",
      "pronunciation": "jiu tirchu"
    },
    {
      "english": "Let me pay",
      "nepali": "मलाई तिर्न दिनुहोस्",
      "newar": "जिगु ला तिर्न मेग",
      "pronunciation": "jigu la tirna meg"
    },
    {
      "english": "We'll split the bill",
      "nepali": "हामी बिल बाँड्छौं",
      "newar": "जिउहरू बिल बाँड्छौं",
      "pronunciation": "jiuharu bil bandchaun"
    },
    {
      "english": "This is too expensive",
      "nepali": "यो धेरै महँगो छ",
      "newar": "या धेरै महँगो छ",
      "pronunciation": "ya dherai mahango cha"
    },
    {
      "english": "Do you have...?",
      "nepali": "तपाईंसँग ... छ?",
      "newar": "छिगु सँग ... छ?",
      "pronunciation": "chigu sang ... cha?"
    },
    {
      "english": "I'd like to order",
      "nepali": "म अर्डर गर्न चाहन्छु",
      "newar": "जिउ अर्डर गर्न मन छ",
      "pronunciation": "jiu order garn man cha"
    },
    {
      "english": "To go please",
      "nepali": "कृपया बाहिर लिने",
      "newar": "कृपया बाहिर लिने",
      "pronunciation": "kripaya bahir line"
    },
    {
      "english": "For here please",
      "nepali": "कृपया यहाँ खाने",
      "newar": "कृपया यता न्ह्येना",
      "pronunciation": "kripaya yata nhyena"
    },
    {
      "english": "Is this fresh?",
      "nepali": "के यो ताजा हो?",
      "newar": "छ की या ताजा खः?",
      "pronunciation": "cha ki ya taja khah?"
    },
    {
      "english": "I don't like this",
      "nepali": "मलाई यो मन पर्दैन",
      "newar": "जिगु यो मन पर्दैन",
      "pronunciation": "jigu yo man pardaina"
    },
    {
      "english": "Can you make it less spicy?",
      "nepali": "कृपया यसलाई कम पिरो बनाउन सक्नुहुन्छ?",
      "newar": "कृपया यसलाई कम पिरो बनाउन मेग?",
      "pronunciation": "kripaya yaslai kam piro banauna meg?"
    },
    {
      "english": "I need a spoon",
      "nepali": "मलाई चम्चा चाहियो",
      "newar": "जिगु चम्चा चाहियो",
      "pronunciation": "jigu chamcha chahiyo"
    },
    {
      "english": "Where is the restroom?",
      "nepali": "शौचालय कहाँ छ?",
      "newar": "शौचालय सुस्त छ?",
      "pronunciation": "shauchalay susta cha?"
    },
    {
      "english": "This is too salty",
      "nepali": "यो धेरै नुनिलो छ",
      "newar": "या धेरै नुनिलो छ",
      "pronunciation": "ya dherai nunilo cha"
    },
    {
      "english": "This is too sweet",
      "nepali": "यो धेरै गुलियो छ",
      "newar": "या धेरै मिठो छ",
      "pronunciation": "ya dherai mitho cha"
    },
    {
      "english": "I'll try this",
      "nepali": "म यो कोसिस गर्छु",
      "newar": "जिउ यो कोसिस गर्छु",
      "pronunciation": "jiu yo kosis garchu"
    },
    {
      "english": "What's in this dish?",
      "nepali": "यस पकवानमा के छ?",
      "newar": "यस पकवानमा के छ?",
      "pronunciation": "yas pakwanma ke cha?"
    },
    {
      "english": "I'm on a diet",
      "nepali": "म डाइटमा छु",
      "newar": "जिउ डाइटमा छु",
      "pronunciation": "jiu dietma chu"
    },
    {
      "english": "No ice please",
      "nepali": "कृपया बरफ नहाल्नुहोस्",
      "newar": "कृपया बरफ मखु",
      "pronunciation": "kripaya baraph makhu"
    },
    {
      "english": "Extra... please",
      "nepali": "कृपया थप ...",
      "newar": "कृपया थप ...",
      "pronunciation": "kripaya thap ..."
    },
    {
      "english": "Without... please",
      "nepali": "कृपया ... बिना",
      "newar": "कृपया ... बिना",
      "pronunciation": "kripaya ... bina"
    },
    {
      "english": "Is this local food?",
      "nepali": "के यो स्थानिय खाना हो?",
      "newar": "छ की या स्थानिय न्ह्येना खः?",
      "pronunciation": "cha ki ya sthaniya nhyena khah?"
    },
    {
      "english": "What's the special today?",
      "nepali": "आजको विशेष के हो?",
      "newar": "आजको विशेष के खः?",
      "pronunciation": "ajko vishesh ke khah?"
    },
    {
      "english": "I'd like breakfast",
      "nepali": "मलाई बिहानको खाना चाहियो",
      "newar": "जिगु बिहानको न्ह्येना चाहियो",
      "pronunciation": "jigu bihanko nhyena chahiyo"
    },
    {
      "english": "I'd like lunch",
      "nepali": "मलाई दिउँसोको खाना चाहियो",
      "newar": "जिगु दिउँसोको न्ह्येना चाहियो",
      "pronunciation": "jigu diusoko nhyena chahiyo"
    },
    {
      "english": "I'd like dinner",
      "nepali": "मलाई रातिको खाना चाहियो",
      "newar": "जिगु रातिको न्ह्येना चाहियो",
      "pronunciation": "jigu ratiko nhyena chahiyo"
    },
    {
      "english": "Can I have some more?",
      "nepali": "के मलाई थप पाउँछु?",
      "newar": "छ की जिगु ला थप पाउँछु?",
      "pronunciation": "cha ki jigu la thap paunchu?"
    },
    {
      "english": "That was delicious",
      "nepali": "त्यो मिठो थियो",
      "newar": "त्यो मिठो थियो",
      "pronunciation": "tyo mitho thiyo"
    },
    {
      "english": "Thank you for the meal",
      "nepali": "खानाको लागि धन्यवाद",
      "newar": "न्ह्येनाको लागि सुभाय्",
      "pronunciation": "nhyenako lagi subhay"
    },
    {
      "english": "I cooked this",
      "nepali": "मैले यो पकाएको",
      "newar": "जिगुले यो पकाएको",
      "pronunciation": "jigule yo pakaeko"
    },
    {
      "english": "Can you teach me this recipe?",
      "nepali": "के तपाईं मलाई यो विधि सिकाउनुहुन्छ?",
      "newar": "छ की छिगु जिगु ला यो विधि सिकाउनुहुन्छ?",
      "pronunciation": "cha ki chigu jigu la yo vidhi sikaunuhuncha?"
    },
    {
      "english": "I'll have coffee",
      "nepali": "म कफी लिन्छु",
      "newar": "जिउ कफी लिन्छु",
      "pronunciation": "jiu kaphi linchu"
    },
    {
      "english": "Black coffee please",
      "nepali": "कृपया कालो कफी",
      "newar": "कृपया ह्यांगु कफी",
      "pronunciation": "kripaya hyangu kaphi"
    },
    {
      "english": "With milk please",
      "nepali": "कृपया दुधसँग",
      "newar": "कृपया दु सँग",
      "pronunciation": "kripaya du sang"
    },
    {
      "english": "Hot water please",
      "nepali": "कृपया तातो पानी",
      "newar": "कृपया तातो लः",
      "pronunciation": "kripaya tato lah"
    },
    {
      "english": "Cold water please",
      "nepali": "कृपया चिसो पानी",
      "newar": "कृपया चिसो लः",
      "pronunciation": "kripaya chiso lah"
    },
    {
      "english": "I'm allergic to nuts",
      "nepali": "मलाई नट्सले एलर्जी छ",
      "newar": "जिगु नट्सले एलर्जी छ",
      "pronunciation": "jigu nutsle elarji cha"
    },
    {
      "english": "Is this gluten-free?",
      "nepali": "के यो ग्लुटेनमुक्त हो?",
      "newar": "छ की या ग्लुटेनमुक्त खः?",
      "pronunciation": "cha ki ya glutenmukta khah?"
    },
    {
      "english": "Can I see the kitchen?",
      "nepali": "के म रसोईघर हेर्न सक्छु?",
      "newar": "छ की जिउ रसोईघर हेर्न सक्छु?",
      "pronunciation": "cha ki jiu rasoighar herna sakchu?"
    },
    {
      "english": "This is too greasy",
      "nepali": "यो धेरै चिल्लो छ",
      "newar": "या धेरै चिल्लो छ",
      "pronunciation": "ya dherai chillo cha"
    },
    {
      "english": "I prefer mild food",
      "nepali": "मलाई हल्का खाना मन पर्छ",
      "newar": "जिगु हल्का न्ह्येना मन पर्छ",
      "pronunciation": "jigu halka nhyena man parcha"
    },
    {
      "english": "I love spicy food",
      "nepali": "मलाई पिरो खाना मन पर्छ",
      "newar": "जिगु पिरो न्ह्येना मन पर्छ",
      "pronunciation": "jigu piro nhyena man parcha"
    },
    {
      "english": "This is traditional Newari food",
      "nepali": "यो पारम्परिक नेवारी खाना हो",
      "newar": "या पारम्परिक नेवारी न्ह्येना खः",
      "pronunciation": "ya paramparik newari nhyena khah"
    },
    {
      "english": "What's in Newari cuisine?",
      "nepali": "नेवारी खानामा के के हुन्छ?",
      "newar": "नेवारी न्ह्येनामा के के हुन्छ?",
      "pronunciation": "newari nhyenama ke ke huncha?"
    },
    {
      "english": "I want to try Newari food",
      "nepali": "म नेवारी खाना कोसिस गर्न चाहन्छु",
      "newar": "जिउ नेवारी न्ह्येना कोसिस गर्न मन छ",
      "pronunciation": "jiu newari nhyena kosis garn man cha"
    },
    {
      "english": "This is my first time trying this",
      "nepali": "मैले पहिलो पटक यो कोसिस गर्दै छु",
      "newar": "जिगुले पहिलो पटक यो कोसिस गर्दै छु",
      "pronunciation": "jigule pahilo patak yo kosis gardai chu"
    },
    {
      "english": "How do you eat this?",
      "nepali": "यसलाई कसरी खाने?",
      "newar": "यसलाई कसरी न्ह्येना?",
      "pronunciation": "yaslai kasari nhyena?"
    },
    {
      "english": "With hands or utensils?",
      "nepali": "हातले की भाँडाले?",
      "newar": "हातले की भाँडाले?",
      "pronunciation": "hatle ki bhandale?"
    },
    {
      "english": "I'll have what they're having",
      "nepali": "म के उनीहरूले लिइरहेका छन् त्यही लिन्छु",
      "newar": "जिउ के उनीहरूले लिइरहेका छन् त्यही लिन्छु",
      "pronunciation": "jiu ke uniharule liiraheka chan tyahi linchu"
    },
    {
      "english": "Can you make it vegetarian?",
      "nepali": "के तपाईं यसलाई शाकाहारी बनाउन सक्नुहुन्छ?",
      "newar": "छ की छिगु यसलाई शाकाहारी बनाउन सक्नुहुन्छ?",
      "pronunciation": "cha ki chigu yaslai shakahari banauna saknuhuncha?"
    },
    {
      "english": "I don't eat pork",
      "nepali": "म पिँजडा खाँदिन",
      "newar": "जिउ पिँजडा न्ह्येना मखु",
      "pronunciation": "jiu pinjada nhyena makhu"
    },
    {
      "english": "I don't eat beef",
      "nepali": "म गाईको मासु खाँदिन",
      "newar": "जिउ गाईको लाः न्ह्येना मखु",
      "pronunciation": "jiu gaiko laah nhyena makhu"
    },
    {
      "english": "Is this halal?",
      "nepali": "के यो हलाल हो?",
      "newar": "छ की या हलाल खः?",
      "pronunciation": "cha ki ya halal khah?"
    },
    {
      "english": "Do you have vegetarian options?",
      "nepali": "तपाईंसँग शाकाहारी विकल्पहरू छन्?",
      "newar": "छिगु सँग शाकाहारी विकल्पहरू छन्?",
      "pronunciation": "chigu sang shakahari wikalpaharu chan?"
    },
    {
      "english": "What's the soup of the day?",
      "nepali": "आजको सूप के हो?",
      "newar": "आजको सूप के खः?",
      "pronunciation": "ajko soup ke khah?"
    },
    {
      "english": "I'd like the set meal",
      "nepali": "मलाई सेट मिल चाहियो",
      "newar": "जिगु सेट मिल चाहियो",
      "pronunciation": "jigu set mil chahiyo"
    },
    {
      "english": "Can I have a doggy bag?",
      "nepali": "के मलाई बाँकी खाना लैजान सक्छु?",
      "newar": "छ की जिगु ला बाँकी न्ह्येना लैजान सक्छु?",
      "pronunciation": "cha ki jigu la baki nhyena laijan sakchu?"
    },
    {
      "english": "This is too cold",
      "nepali": "यो धेरै चिसो छ",
      "newar": "या धेरै चिसो छ",
      "pronunciation": "ya dherai chiso cha"
    },
    {
      "english": "Can you heat this up?",
      "nepali": "कृपया यसलाई तताउन सक्नुहुन्छ?",
      "newar": "कृपया यसलाई तताउन मेग?",
      "pronunciation": "kripaya yaslai tatauna meg?"
    },
    {
      "english": "I ordered this",
      "nepali": "मैले यो अर्डर गरेको",
      "newar": "जिगुले यो अर्डर गरेको",
      "pronunciation": "jigule yo order gareko"
    },
    {
      "english": "This isn't what I ordered",
      "nepali": "यो मैले अर्डर गरेको होइन",
      "newar": "या जिगुले अर्डर गरेको मखु",
      "pronunciation": "ya jigule order gareko makhu"
    },
    {
      "english": "Can I change my order?",
      "nepali": "के म अर्डर परिवर्तन गर्न सक्छु?",
      "newar": "छ की जिउ अर्डर परिवर्तन गर्न सक्छु?",
      "pronunciation": "cha ki jiu order paribartan garn sakchu?"
    },
    {
      "english": "I'll have another one",
      "nepali": "म अर्को लिन्छु",
      "newar": "जिउ अर्को लिन्छु",
      "pronunciation": "jiu arko linchu"
    },
    {
      "english": "This is perfect",
      "nepali": "यो उत्तम छ",
      "newar": "या उत्तम छ",
      "pronunciation": "ya uttam cha"
    },
    {
      "english": "I'll come again",
      "nepali": "म फेरि आउँछु",
      "newar": "जिउ फेरि आउँछु",
      "pronunciation": "jiu pheri aunchu"
    },
    {
      "english": "I'll recommend this place",
      "nepali": "म यो ठाउँको सिफारिस गर्छु",
      "newar": "जिउ यो ठाउँको सिफारिस गर्छु",
      "pronunciation": "jiu yo thaumko sifaris garchu"
    },
    {
      "english": "The service was excellent",
      "nepali": "सेवा उत्तम थियो",
      "newar": "सेवा उत्तम थियो",
      "pronunciation": "sewa uttam thiyo"
    },
    {
      "english": "The atmosphere is nice",
      "nepali": "वातावरण राम्रो छ",
      "newar": "वातावरण राम्रो छ",
      "pronunciation": "batawaran ramro cha"
    },
    {
      "english": "I'm enjoying the meal",
      "nepali": "म खाना रमाइरहेको छु",
      "newar": "जिउ न्ह्येना रमाइरहेको छु",
      "pronunciation": "jiu nhyena ramairaheko chu"
    },
    {
      "english": "This is a beautiful restaurant",
      "nepali": "यो सुन्दर रेस्टुरेन्ट हो",
      "newar": "या सुन्दर रेस्टुरेन्ट खः",
      "pronunciation": "ya sundar restaurant khah"
    },
    {
      "english": "I'm celebrating today",
      "nepali": "आज म उत्सव मनाउँदै छु",
      "newar": "आज जिउ उत्सव मनाउँदै छु",
      "pronunciation": "aj jiu utsab manaundai chu"
    },
    {
      "english": "It's my birthday",
      "nepali": "आज मेरो जन्मदिन हो",
      "newar": "आज जिगु जन्मदिन खः",
      "pronunciation": "aj jigu janmadin khah"
    },
    {
      "english": "Can you sing happy birthday?",
      "nepali": "के तपाईं हैपी बर्थडे गाउन सक्नुहुन्छ?",
      "newar": "छ की छिगु हैपी बर्थडे गाउन सक्नुहुन्छ?",
      "pronunciation": "cha ki chigu happy birthday gauna saknuhuncha?"
    },
    {
      "english": "I'm here on vacation",
      "nepali": "म यहाँ बिदामा आएको",
      "newar": "जिउ यता बिदामा आएको",
      "pronunciation": "jiu yata bidama aeko"
    },
    {
      "english": "I'm a food blogger",
      "nepali": "म खाना ब्लगर हुँ",
      "newar": "जिउ न्ह्येना ब्लगर हूँ",
      "pronunciation": "jiu nhyena blogger hum"
    },
    {
      "english": "Can I take photos?",
      "nepali": "के म फोटो खिच्न सक्छु?",
      "newar": "छ की जिउ फोटो खिच्न सक्छु?",
      "pronunciation": "cha ki jiu photo khichna sakchu?"
    },
    {
      "english": "The presentation is beautiful",
      "nepali": "प्रस्तुति सुन्दर छ",
      "newar": "प्रस्तुति सुन्दर छ",
      "pronunciation": "prastuti sundar cha"
    },
    {
      "english": "This is Instagram worthy",
      "nepali": "यो इन्स्टाग्राममा हाल्न योग्य छ",
      "newar": "या इन्स्टाग्राममा हाल्न योग्य छ",
      "pronunciation": "ya instagramma halna yogya cha"
    },
    {
      "english": "I'll tag you on social media",
      "nepali": "म सोशल मिडियामा तपाईंलाई ट्याग गर्छु",
      "newar": "जिउ सोशल मिडियामा छिगु ला ट्याग गर्छु",
      "pronunciation": "jiu social mediama chigu la tag garchu"
    },
    {
      "english": "What's your specialty?",
      "nepali": "तपाईंको विशेषता के हो?",
      "newar": "छिगु विशेषता के खः?",
      "pronunciation": "chigu visheshata ke khah?"
    },
    {
      "english": "How long have you been open?",
      "nepali": "तपाईंले कति बेर देखि खोलेको?",
      "newar": "छिगुले कति बेर देखि खोलेको?",
      "pronunciation": "chigule kati ber dekhi kholeko?"
    },
    {
      "english": "Who is the chef?",
      "nepali": "बुढो शेफ को हो?",
      "newar": "बुढो शेफ को खः?",
      "pronunciation": "budho shef ko khah?"
    },
    {
      "english": "Compliments to the chef",
      "nepali": "शेफलाई प्रशंसा",
      "newar": "शेफलाई प्रशंसा",
      "pronunciation": "sheflai prashansa"
    },
    {
      "english": "I'd like to meet the chef",
      "nepali": "म शेफसँग भेट्न चाहन्छु",
      "newar": "जिउ शेफसँग भेट्न मन छ",
      "pronunciation": "jiu shefsang bhetna man cha"
    },
    {
      "english": "This is the best food I've ever had",
      "nepali": "यो मैले खाएको सबैभन्दा राम्रो खाना हो",
      "newar": "या जिगुले न्ह्येको सबैभन्दा राम्रो न्ह्येना खः",
      "pronunciation": "ya jigule nhyeko sabaibhanda ramro nhyena khah"
    },
    {
      "english": "I'll never forget this taste",
      "nepali": "म यो स्वाद कहिल्यै बिर्सिन्न",
      "newar": "जिउ यो स्वाद कहिल्यै बिर्सिन्न",
      "pronunciation": "jiu yo swad kahilyai birsinna"
    },
    {
      "english": "This brings back memories",
      "nepali": "यसले सम्झनाहरू फर्काउँछ",
      "newar": "यसले सम्झनाहरू फर्काउँछ",
      "pronunciation": "yasle samjhanaharu pharkauncha"
    },
    {
      "english": "Tastes like home",
      "nepali": "घरजस्तै स्वाद",
      "newar": "छेन्जस्तै स्वाद",
      "pronunciation": "chenjastai swad"
    },
    {
      "english": "My grandmother used to make this",
      "nepali": "मेरी बज्यैले यस्तै बनाउनुहुन्थ्यो",
      "newar": "जिगु अजिले यस्तै बनाउनुहुन्थ्यो",
      "pronunciation": "jigu ajile yastai banaunuhunthyo"
    },
    {
      "english": "This is comfort food",
      "nepali": "यो आरामदायी खाना हो",
      "newar": "या आरामदायी न्ह्येना खः",
      "pronunciation": "ya aramdayi nhyena khah"
    },
    {
      "english": "I feel nostalgic",
      "nepali": "मलाई सम्झनाहरू आउँछ",
      "newar": "जिगु सम्झनाहरू आउँछ",
      "pronunciation": "jigu samjhanaharu auncha"
    },
    {
      "english": "This is authentic",
      "nepali": "यो प्रामाणिक हो",
      "newar": "या प्रामाणिक ख�",
      "pronunciation": "ya pramanik khah"
    },
    {
      "english": "I can taste the love",
      "nepali": "म माया स्वाद्न सक्छु",
      "newar": "जिउ माया स्वाद्न सक्छु",
      "pronunciation": "jiu maya swadna sakchu"
    },
    {
      "english": "Every bite is perfect",
      "nepali": "हरेक टुक्रा उत्तम छ",
      "newar": "हरेक टुक्रा उत्तम छ",
      "pronunciation": "harek tukra uttam cha"
    },
    {
      "english": "I'm in food heaven",
      "nepali": "म खानाको स्वर्गमा छु",
      "newar": "जिउ न्ह्येनाको स्वर्गमा छु",
      "pronunciation": "jiu nhyenako swargama chu"
    },
    {
      "english": "This is food poetry",
      "nepali": "यो खानाको कविता हो",
      "newar": "या न्ह्येनाको कविता खः",
      "pronunciation": "ya nhyenako kawita khah"
    },
    {
      "english": "I'm speechless",
      "nepali": "म बोल्न असमर्थ छु",
      "newar": "जिउ बोल्न असमर्थ छु",
      "pronunciation": "jiu bolna asamarth chu"
    },
    {
      "english": "This is incredible",
      "nepali": "यो अविश्वसनीय छ",
      "newar": "या अविश्वसनीय छ",
      "pronunciation": "ya awiswasaniya cha"
    },
    {
      "english": "My taste buds are dancing",
      "nepali": "मेरा स्वाद कलिकाहरू नाचिरहेका छन्",
      "newar": "जिगु स्वाद कलिकाहरू नाचिरहेका छन्",
      "pronunciation": "jigu swad kalikaharu nachiraheka chan"
    },
    {
      "english": "This is a flavor explosion",
      "nepali": "यो स्वादको विस्फोट हो",
      "newar": "या स्वादको विस्फोट खः",
      "pronunciation": "ya swadako wisphot khah"
    },
    {
      "english": "I'm having a foodgasm",
      "nepali": "मलाई खानाले आनन्द भइरहेको छ",
      "newar": "जिगु न्ह्येनाले आनन्द भइरहेको छ",
      "pronunciation": "jigu nhyenale anand bhairaheko cha"
    },
    {
      "english": "This is better than sex",
      "nepali": "यो सेक्सभन्दा राम्रो छ",
      "newar": "या सेक्सभन्दा राम्रो छ",
      "pronunciation": "ya sexbhanda ramro cha"
    },
    {
      "english": "I want to marry this food",
      "nepali": "म यो खानासँग विवाह गर्न चाहन्छु",
      "newar": "जिउ यो न्ह्येनासँग विवाह गर्न मन छ",
      "pronunciation": "jiu yo nhyenasang biwah garn man cha"
    },
    {
      "english": "I'll dream about this",
      "nepali": "म यसको बारेमा सपना देख्छु",
      "newar": "जिउ यसको बारेमा सपना देख्छु",
      "pronunciation": "jiu yasko barema sapna dekchhu"
    },
    {
      "english": "This is life-changing",
      "nepali": "यो जीवन परिवर्तन गर्ने छ",
      "newar": "या जीवन परिवर्तन गर्ने छ",
      "pronunciation": "ya jiban paribartan garne cha"
    },
    {
      "english": "I'm reborn through this food",
      "nepali": "म यो खानाबाट पुनर्जन्म भएको छु",
      "newar": "जिउ यो न्ह्येनाबाट पुनर्जन्म भएको छु",
      "pronunciation": "jiu yo nhyenabata punarjanma bhaeko chu"
    },
    {
      "english": "This is spiritual",
      "nepali": "यो आध्यात्मिक छ",
      "newar": "या आध्यात्मिक छ",
      "pronunciation": "ya adhyatmik cha"
    },
    {
      "english": "I've reached enlightenment",
      "nepali": "मले ज्ञान प्राप्त गरेको छु",
      "newar": "जिगुले ज्ञान प्राप्त गरेको छु",
      "pronunciation": "jigule gyan prapt gareko chu"
    },
    {
      "english": "This is the meaning of life",
      "nepali": "यो जीवनको अर्थ हो",
      "newar": "या जीवनको अर्थ खः",
      "pronunciation": "ya jibanako artha khah"
    },
    {
      "english": "I'm complete",
      "nepali": "म पूर्ण भएको छु",
      "newar": "जिउ पूर्ण भएको छु",
      "pronunciation": "jiu purna bhaeko chu"
    },
    {
      "english": "This is everything",
      "nepali": "यो सबै कुरा हो",
      "newar": "या सबै कुरा खः",
      "pronunciation": "ya sabai kura khah"
    },
    {
      "english": "I can die happy now",
      "nepali": "म अब खुशी मर्न सक्छु",
      "newar": "जिउ अब खुशी मर्न सक्छु",
      "pronunciation": "jiu aba khushi marna sakchu"
    },
    {
      "english": "This is worth the calories",
      "nepali": "यो क्यालोरीको लागि उचित छ",
      "newar": "या क्यालोरीको लागि उचित छ",
      "pronunciation": "ya caloriesko lagi uchit cha"
    },
    {
      "english": "I have no regrets",
      "nepali": "मलाई पछुतो छैन",
      "newar": "जिगु पछुतो छैन",
      "pronunciation": "jigu pachhuto chaina"
    },
    {
      "english": "This was worth the wait",
      "nepali": "यो पर्खाइको लागि उचित थियो",
      "newar": "या पर्खाइको लागि उचित थियो",
      "pronunciation": "ya parkhaiko lagi uchit thiyo"
    },
    {
      "english": "I'd wait again for this",
      "nepali": "म यसको लागि फेरि पर्खन तयार छु",
      "newar": "जिउ यसको लागि फेरि पर्खन तयार छु",
      "pronunciation": "jiu yasko lagi pheri parkhan tayar chu"
    },
    {
      "english": "This is better than I imagined",
      "nepali": "यो मैले सोचेकोभन्दा राम्रो छ",
      "newar": "या जिगुले सोचेकोभन्दा राम्रो छ",
      "pronunciation": "ya jigule sochekobhanda ramro cha"
    },
    {
      "english": "Beyond my expectations",
      "nepali": "मेरा अपेक्षाभन्दा पर",
      "newar": "जिगु अपेक्षाभन्दा पर",
      "pronunciation": "jigu apekshabhanda par"
    },
    {
      "english": "This exceeded all expectations",
      "nepali": "यो सबै अपेक्षाहरूभन्दा बढी थियो",
      "newar": "या सबै अपेक्षाहरूभन्दा बढी थियो",
      "pronunciation": "ya sabai apekshaharubhanda badhi thiyo"
    },
    {
      "english": "I'm impressed",
      "nepali": "म प्रभावित भएको छु",
      "newar": "जिउ प्रभावित भएको छु",
      "pronunciation": "jiu prabhawit bhaeko chu"
    },
    {
      "english": "This is restaurant quality",
      "nepali": "यो रेस्टुरेन्टको गुणस्तरको छ",
      "newar": "या रे스्टुरेन्टको गुणस्तरको छ",
      "pronunciation": "ya restaurantko gunastarko cha"
    },
    {
      "english": "Better than restaurant quality",
      "nepali": "रेस्टुरेन्टभन्दा राम्रो गुणस्तर",
      "newar": "रेस्टुरेन्टभन्दा राम्रो गुणस्तर",
      "pronunciation": "restaurantbhanda ramro gunastar"
    },
    {
      "english": "This is homemade goodness",
      "nepali": "यो घरायसी राम्राई हो",
      "newar": "या छेनायसी राम्राई खः",
      "pronunciation": "ya chenayisi ramrai khah"
    },
    {
      "english": "Made with love",
      "nepali": "मायासँग बनाइएको",
      "newar": "मायासँग बनाइएको",
      "pronunciation": "mayasang banaieko"
    },
    {
      "english": "You can taste the craftsmanship",
      "nepali": "तपाईंले कलाकारिता स्वाद्न सक्नुहुन्छ",
      "newar": "छिगुले कलाकारिता स्वाद्न सक्नुहुन्छ",
      "pronunciation": "chigule kalakarita swadna saknuhuncha"
    },
    {
      "english": "This is art",
      "nepali": "यो कला हो",
      "newar": "या कला खः",
      "pronunciation": "ya kala khah"
    },
    {
      "english": "This belongs in a museum",
      "nepali": "यो संग्रहालयमा हुनुपर्छ",
      "newar": "या संग्रहालयमा हुनुपर्छ",
      "pronunciation": "ya sangrahalayama hunuparcha"
    },
    {
      "english": "This is too beautiful to eat",
      "nepali": "यो खान धेरै सुन्दर छ",
      "newar": "या न्ह्येना धेरै सुन्दर छ",
      "pronunciation": "ya nhyena dherai sundar cha"
    },
    {
      "english": "But I'll eat it anyway",
      "nepali": "तर म जे भए पनि खान्छु",
      "newar": "तर जिउ जे भए पनि न्ह्येछु",
      "pronunciation": "tar jiu je bhae pani nhyechu"
    },
    {
      "english": "This is worth every penny",
      "nepali": "यो हरेक पैसाको लागि उचित छ",
      "newar": "या हरेक पैसाको लागि उचित छ",
      "pronunciation": "ya hareka paisako lagi uchit cha"
    },
    {
      "english": "I'd pay double for this",
      "nepali": "म यसको लागि दोब्बर तिर्छु",
      "newar": "जिउ यसको लागि दोब्बर तिर्छु",
      "pronunciation": "jiu yasko lagi dobbar tirchu"
    },
    {
      "english": "This is priceless",
      "nepali": "यो अमूल्य छ",
      "newar": "या अमूल्य छ",
      "pronunciation": "ya amulya cha"
    },
    {
      "english": "Money can't buy this experience",
      "nepali": "पैसाले यो अनुभव किन्न सक्दैन",
      "newar": "पैसाले यो अनुभव किन्न सक्दैन",
      "pronunciation": "paisale yo anubhav kinna sakdaina"
    },
    {
      "english": "This is unforgettable",
      "nepali": "यो बिर्सन नसकिने छ",
      "newar": "या बिर्सन नसकिने छ",
      "pronunciation": "ya birsan nasakine cha"
    },
    {
      "english": "I'll remember this forever",
      "nepali": "म यो सधैं सम्झन्छु",
      "newar": "जिउ यो सधैं सम्झन्छु",
      "pronunciation": "jiu yo sadhai samjhanchu"
    },
    {
      "english": "This is core memory",
      "nepali": "यो मुख्य सम्झना हो",
      "newar": "या मुख्य सम्झना खः",
      "pronunciation": "ya mukhya samjhana khah"
    },
    {
      "english": "I'll tell my grandchildren about this",
      "nepali": "म यो बारे मेरा नातिनातिलाई भन्छु",
      "newar": "जिउ यो बारे जिगु नातिनातिलाई भन्छु",
      "pronunciation": "jiu yo bare jigu natinatilai banchu"
    },
    {
      "english": "This is legendary",
      "nepali": "यो पौराणिक छ",
      "newar": "या पौराणिक छ",
      "pronunciation": "ya pauranik cha"
    },
    {
      "english": "This will go down in history",
      "nepali": "यो इतिहासमा जानेछ",
      "newar": "या इतिहासमा वऺनेछ",
      "pronunciation": "ya itihasmaa wanecha"
    },
    {
      "english": "I'm witnessing history",
      "nepali": "म इतिहास हेर्दै छु",
      "newar": "जिउ इतिहास हेर्दै छु",
      "pronunciation": "jiu itihas herdai chu"
    },
    {
      "english": "This is a cultural experience",
      "nepali": "यो सांस्कृतिक अनुभव हो",
      "newar": "या सांस्कृतिक अनुभव खः",
      "pronunciation": "ya sanskritik anubhav khah"
    },
    {
      "english": "I understand your culture through this food",
      "nepali": "म यो खानाबाट तपाईंको संस्कृति बुझ्छु",
      "newar": "जिउ यो न्ह्येनाबाट छिगु संस्कृति बुझ्छु",
      "pronunciation": "jiu yo nhyenabata chigu sanskriti bujchu"
    },
    {
      "english": "This tells a story",
      "nepali": "यसले कथा सुनाउँछ",
      "newar": "यसले कथा सुनाउँछ",
      "pronunciation": "yasle katha sunauncha"
    },
    {
      "english": "Each ingredient has a purpose",
      "nepali": "हरेक घटकको उद्देश्य छ",
      "newar": "हरेक घटकको उद्देश्य छ",
      "pronunciation": "harek ghatakko uddeshya cha"
    },
    {
      "english": "This is well balanced",
      "nepali": "यो राम्रोसँग सन्तुलित छ",
      "newar": "या राम्रोसँग सन्तुलित छ",
      "pronunciation": "ya ramrosang santulit cha"
    },
    {
      "english": "Perfect harmony of flavors",
      "nepali": "स्वादहरूको सिद्ध सामंजस्य",
      "newar": "स्वादहरूको सिद्ध सामंजस्य",
      "pronunciation": "swadaharuko siddha samanjasy"
    },
    {
      "english": "This is symphony in my mouth",
      "nepali": "यो मेरो मुखमा सिम्फनी हो",
      "newar": "या जिगु मुखमा सिम्फनी खः",
      "pronunciation": "ya jigu mukhma symphony khah"
    },
    {
      "english": "Each note is perfect",
      "nepali": "हरेक स्वर उत्तम छ",
      "newar": "हरेक स्वर उत्तम छ",
      "pronunciation": "harek swar uttam cha"
    },
    {
      "english": "This is culinary perfection",
      "nepali": "यो पाककलाको सिद्धि हो",
      "newar": "या पाककलाको सिद्धि खः",
      "pronunciation": "ya pakkalkako siddhi khah"
    },
    {
      "english": "The chef is a genius",
      "nepali": "बुढो शेफ प्रतिभाशाली छ",
      "newar": "बुढो शेफ प्रतिभाशाली छ",
      "pronunciation": "budho shef pratibhashali cha"
    },
    {
      "english": "This is magic",
      "nepali": "यो जादू हो",
      "newar": "या जादू खः",
      "pronunciation": "ya jadu khah"
    },
    {
      "english": "You're a wizard",
      "nepali": "तपाईं जादूगर हुनुहुन्छ",
      "newar": "छिगु जादूगर हुनुहुन्छ",
      "pronunciation": "chigu jadugar hunuhuncha"
    },
    {
      "english": "This is alchemy",
      "nepali": "यो कीमिया हो",
      "newar": "या कीमिया खः",
      "pronunciation": "ya kimiya khah"
    },
    {
      "english": "You turned ingredients into gold",
      "nepali": "तपाईंले सामग्रीहरूलाई सुनमा परिणत गर्नुभयो",
      "newar": "छिगुले सामग्रीहरूलाई सुनमा परिणत गर्नुभयो",
      "pronunciation": "chigule samagriharulai sunma parinat garnubhayo"
    },
    {
      "english": "This is transformative",
      "nepali": "यो रूपान्तरणकारी छ",
      "newar": "या रूपान्तरणकारी छ",
      "pronunciation": "ya rupantarnakari cha"
    },
    {
      "english": "I'm a new person after eating this",
      "nepali": "यो खाएपछि म नयाँ मानिस भएको छु",
      "newar": "या न्ह्येपछि जिउ नयाँ मानिस भएको छु",
      "pronunciation": "ya nhyepachi jiu naya manis bhaeko chu"
    },
    {
      "english": "This healed my soul",
      "nepali": "यसले मेरो आत्मालाई निको बनायो",
      "newar": "यसले जिगु आत्मालाई निको बनायो",
      "pronunciation": "yasle jigu atmalai niko banayo"
    },
    {
      "english": "This cured my depression",
      "nepali": "यसले मेरो डिप्रेसन निको बनायो",
      "newar": "यसले जिगु डिप्रेसन निको बनायो",
      "pronunciation": "yasle jigu depression niko banayo"
    },
    {
      "english": "This is better than therapy",
      "nepali": "यो उपचारभन्दा राम्रो छ",
      "newar": "या उपचारभन्दा राम्रो छ",
      "pronunciation": "ya upacharbhanda ramro cha"
    },
    {
      "english": "This is medicine for the soul",
      "nepali": "यो आत्माको लागि औषधि हो",
      "newar": "या आत्माको लागि औषधि खः",
      "pronunciation": "ya atmako lagi aushadhi khah"
    },
    {
      "english": "I'm healed",
      "nepali": "म निको भएको छु",
      "newar": "जिउ निको भएको छु",
      "pronunciation": "jiu niko bhaeko chu"
    },
    {
      "english": "This is divine intervention",
      "nepali": "यो दैवी हस्तक्षेप हो",
      "newar": "या दैवी हस्तक्षेप खः",
      "pronunciation": "ya daiwi hastakshep khah"
    },
    {
      "english": "Angus cooked this",
      "nepali": "देवताले यो पकाएको",
      "newar": "देवताले यो पकाएको",
      "pronunciation": "dewataleyo pakaeko"
    },
    {
      "english": "This is blessed",
      "nepali": "यो आशीर्वादित छ",
      "newar": "या आशीर्वादित छ",
      "pronunciation": "ya ashirbadit cha"
    },
    {
      "english": "I feel blessed",
      "nepali": "म आशीर्वादित महसुस गर्छु",
      "newar": "जिउ आशीर्वादित महसुस गर्छु",
      "pronunciation": "jiu ashirbadit mahasus garchu"
    },
    {
      "english": "This is a religious experience",
      "nepali": "यो धार्मिक अनुभव हो",
      "newar": "या धार्मिक अनुभव खः",
      "pronunciation": "ya dharmik anubhav khah"
    },
    {
      "english": "I've seen God through this food",
      "nepali": "मैले यो खानाबाट भगवान देखेको छु",
      "newar": "जिगुले यो न्ह्येनाबाट भगवान देखेको छु",
      "pronunciation": "jigule yo nhyenabata bhagwan dekheko chu"
    },
    {
      "english": "This is my religion now",
      "nepali": "यो अब मेरो धर्म हो",
      "newar": "या अब जिगु धर्म खः",
      "pronunciation": "ya aba jigu dharma khah"
    },
    {
      "english": "I worship this food",
      "nepali": "म यो खानाको पूजा गर्छु",
      "newar": "जिउ यो न्ह्येनाको पूजा गर्छु",
      "pronunciation": "jiu yo nhyenako puja garchu"
    },
    {
      "english": "This is sacred",
      "nepali": "यो पवित्र छ",
      "newar": "या पवित्र छ",
      "pronunciation": "ya pawitra cha"
    },
    {
      "english": "I need a moment of silence",
      "nepali": "मलाई एक क्षण मौन चाहियो",
      "newar": "जिगु एक क्षण मौन चाहियो",
      "pronunciation": "jigu ek kshan maun chahiyo"
    },
    {
      "english": "This deserves a standing ovation",
      "nepali": "यसले उभिँदै तालीको योग्य छ",
      "newar": "यसले उभिँदै तालीको योग्य छ",
      "pronunciation": "yasle ubhinda taliko yogya cha"
    },
    {
      "english": "Bravo!",
      "nepali": "ब्राभो!",
      "newar": "ब्राभो!",
      "pronunciation": "bravo!"
    },
    {
      "english": "Encore!",
      "nepali": "एन्कोर!",
      "newar": "एन्कोर!",
      "pronunciation": "encore!"
    },
    {
      "english": "I demand an encore",
      "nepali": "म एन्कोर माग्छु",
      "newar": "जिउ एन्कोर माग्छु",
      "pronunciation": "jiu encore magchu"
    },
    {
      "english": "I need more",
      "nepali": "मलाई थप चाहियो",
      "newar": "जिगु थप चाहियो",
      "pronunciation": "jigu thap chahiyo"
    },
    {
      "english": "I can't get enough",
      "nepali": "मलाई पुग्दैन",
      "newar": "जिगु पुग्दैन",
      "pronunciation": "jigu pugdaina"
    },
    {
      "english": "I'm addicted",
      "nepali": "म लत लागेको छु",
      "newar": "जिउ लत लागेको छु",
      "pronunciation": "jiu lat lageko chu"
    },
    {
      "english": "This is my drug",
      "nepali": "यो मेरो मादक पदार्थ हो",
      "newar": "या जिगु मादक पदार्थ खः",
      "pronunciation": "ya jigu madak padartha khah"
    },
    {
      "english": "I need my daily fix",
      "nepali": "मलाई दैनिक खुराक चाहियो",
      "newar": "जिगु दैनिक खुराक चाहियो",
      "pronunciation": "jigu dainik khurak chahiyo"
    },
    {
      "english": "I'll be back tomorrow",
      "nepali": "म भोलि फर्कनेछु",
      "newar": "जिउ भोलि फर्कनेछु",
      "pronunciation": "jiu bholi pharkanechu"
    },
    {
      "english": "And the day after",
      "nepali": "र भोलिपछिको दिन",
      "newar": "र भोलिपछिको दिन",
      "pronunciation": "ra bholipachhiko din"
    },
    {
      "english": "And every day after that",
      "nepali": "र त्यसपछिको हरेक दिन",
      "newar": "र त्यसपछिको हरेक दिन",
      "pronunciation": "ra tyaspachhiko hareka din"
    },
    ],
    difficulty: "intermediate",
    duration: 30,
    wordsCount: 36
  },
  5: {
    id: 5,
    title: "Travel & Transportation",
    description: "Transportation and travel phrases",
    content: [
     {
      "english": "Bus",
      "nepali": "बस",
      "newar": "बस",
      "pronunciation": "bas"
    },
    {
      "english": "Car",
      "nepali": "कार",
      "newar": "गाडी",
      "pronunciation": "gadi"
    },
    {
      "english": "Taxi",
      "nepali": "ट्याक्सी",
      "newar": "ट्याक्सी",
      "pronunciation": "taxi"
    },
    {
      "english": "Motorcycle",
      "nepali": "मोटरसाइकल",
      "newar": "मोटरसाइकल",
      "pronunciation": "motorsaikal"
    },
    {
      "english": "Bicycle",
      "nepali": "साइकल",
      "newar": "साइकल",
      "pronunciation": "saikal"
    },
    {
      "english": "Airplane",
      "nepali": "हवाईजहाज",
      "newar": "हवाईजहाज",
      "pronunciation": "hawai jahaj"
    },
    {
      "english": "Train",
      "nepali": "रेल",
      "newar": "रेल",
      "pronunciation": "rel"
    },
    {
      "english": "Boat",
      "nepali": "डुङ्गा",
      "newar": "डुङ्गा",
      "pronunciation": "dunga"
    },
    {
      "english": "Helicopter",
      "nepali": "हेलिकप्टर",
      "newar": "हेलिकप्टर",
      "pronunciation": "helikopter"
    },
    {
      "english": "Rickshaw",
      "nepali": "रिक्शा",
      "newar": "रिक्शा",
      "pronunciation": "riksha"
    },
    {
      "english": "Where is the bus stop?",
      "nepali": "बस स्टप कहाँ छ?",
      "newar": "बस स्टप सुस्त छ?",
      "pronunciation": "bas stop susta cha?"
    },
    {
      "english": "How much is the fare?",
      "nepali": "किराया कति हो?",
      "newar": "किराया कति खः?",
      "pronunciation": "kiraya kati khah?"
    },
    {
      "english": "One ticket please",
      "nepali": "कृपया एक टिकट",
      "newar": "कृपया छे टिकट",
      "pronunciation": "kripaya che ticket"
    },
    {
      "english": "Two tickets to...",
      "nepali": "... को लागि दुई टिकट",
      "newar": "... को लागि न्ये टिकट",
      "pronunciation": "... ko lagi nye ticket"
    },
    {
      "english": "When does the bus leave?",
      "nepali": "बस कति बजे जान्छ?",
      "newar": "बस कति बजे वऺछ?",
      "pronunciation": "bas kati baje wachha?"
    },
    {
      "english": "When will we arrive?",
      "nepali": "हामी कति बजे पुग्छौं?",
      "newar": "जिउहरू कति बजे पुग्छौं?",
      "pronunciation": "jiuharu kati baje pugchaun?"
    },
    {
      "english": "Is this seat taken?",
      "nepali": "के यो सिट खाली छ?",
      "newar": "छ की या सिट खाली छ?",
      "pronunciation": "cha ki ya seat khali cha?"
    },
    {
      "english": "Can I sit here?",
      "nepali": "के म यहाँ बस्न सक्छु?",
      "newar": "छ की जिउ यता बस्न सक्छु?",
      "pronunciation": "cha ki jiu yata basna sakchu?"
    },
    {
      "english": "Next stop please",
      "nepali": "कृपया अर्को स्टप",
      "newar": "कृपया अर्को स्टप",
      "pronunciation": "kripaya arko stop"
    },
    {
      "english": "I want to get off here",
      "nepali": "म यहाँ उत्रन चाहन्छु",
      "newar": "जिउ यता उत्रन मन छ",
      "pronunciation": "jiu yata utran man cha"
    },
    {
      "english": "Where is this bus going?",
      "nepali": "यो बस कहाँ जान्छ?",
      "newar": "या बस सुस्त वऺछ?",
      "pronunciation": "ya bus susta wachha?"
    },
    {
      "english": "Does this go to...?",
      "nepali": "के यो ... जान्छ?",
      "newar": "छ की या ... वऺछ?",
      "pronunciation": "cha ki ya ... wachha?"
    },
    {
      "english": "How long is the journey?",
      "nepali": "यात्रा कति लामो छ?",
      "newar": "यात्रा कति लामो छ?",
      "pronunciation": "yatra kati lamo cha?"
    },
    {
      "english": "I'm feeling carsick",
      "nepali": "मलाई गाडी चल्दा असजिलो लाग्यो",
      "newar": "जिगु गाडी चल्दा असजिलो लाग्यो",
      "pronunciation": "jigu gadi chalda asajilo lagyo"
    },
    {
      "english": "Can you open the window?",
      "nepali": "कृपया झ्याल खोल्नुहोस्",
      "newar": "कृपया झ्याल खोल्नुहोस्",
      "pronunciation": "kripaya jhyal kholnuhos"
    },
    {
      "english": "Can you close the window?",
      "nepali": "कृपया झ्याल बन्द गर्नुहोस्",
      "newar": "कृपया झ्याल बन्द गर्नुहोस्",
      "pronunciation": "kripaya jhyal band garnuhos"
    },
    {
      "english": "It's too hot",
      "nepali": "धेरै गर्मी छ",
      "newar": "धेरै गर्मी छ",
      "pronunciation": "dherai garmi cha"
    },
    {
      "english": "It's too cold",
      "nepali": "धेरै जाडो छ",
      "newar": "धेरै जाडो छ",
      "pronunciation": "dherai jado cha"
    },
    {
      "english": "Stop here please",
      "nepali": "कृपया यहाँ रोक्नुहोस्",
      "newar": "कृपया यता रोक्नुहोस्",
      "pronunciation": "kripaya yata roknuhos"
    },
    {
      "english": "How much to...?",
      "nepali": "... कति पर्छ?",
      "newar": "... कति पर्छ?",
      "pronunciation": "... kati parchha?"
    },
    {
      "english": "That's too expensive",
      "nepali": "त्यो धेरै महँगो छ",
      "newar": "त्यो धेरै महँगो छ",
      "pronunciation": "tyo dherai mahango cha"
    },
    {
      "english": "Can you use the meter?",
      "nepali": "कृपया मिटर प्रयोग गर्नुहोस्",
      "newar": "कृपया मिटर प्रयोग गर्नुहोस्",
      "pronunciation": "kripaya meter prayog garnuhos"
    },
    {
      "english": "I'm in a hurry",
      "nepali": "म हतारमा छु",
      "newar": "जिउ हतारमा छु",
      "pronunciation": "jiu hatarma chu"
    },
    {
      "english": "Please drive faster",
      "nepali": "कृपया छिटो चलाउनुहोस्",
      "newar": "कृपया छिटो चलाउनुहोस्",
      "pronunciation": "kripaya chhito chalaunuhos"
    },
    {
      "english": "Please drive slower",
      "nepali": "कृपया बिस्तारै चलाउनुहोस्",
      "newar": "कृपया बिस्तारै चलाउनुहोस्",
      "pronunciation": "kripaya bistara chalaunuhos"
    },
    {
      "english": "Be careful",
      "nepali": "सावधान हुनुहोस्",
      "newar": "सावधान हुनुहोस्",
      "pronunciation": "sawadhan hunuhos"
    },
    {
      "english": "Watch out!",
      "nepali": "हेर!",
      "newar": "हेर!",
      "pronunciation": "her!"
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
      "english": "Go straight",
      "nepali": "सिधा जानुहोस्",
      "newar": "सिधा वऺ",
      "pronunciation": "sidha wa"
    },
    {
      "english": "Stop at the traffic light",
      "nepali": "ट्राफिक लाइटमा रोक्नुहोस्",
      "newar": "ट्राफिक लाइटमा रोक्नुहोस्",
      "pronunciation": "traffic lightma roknuhos"
    },
    {
      "english": "Where can I find a taxi?",
      "nepali": "म ट्याक्सी कहाँ पाउँछु?",
      "newar": "जिउ ट्याक्सी सुस्त पाउँछु?",
      "pronunciation": "jiu taxi susta paunchu?"
    },
    {
      "english": "Call me a taxi",
      "nepali": "मलाई ट्याक्सी बोलाउनुहोस्",
      "newar": "जिगु ला ट्याक्सी बोलाउनुहोस्",
      "pronunciation": "jigu la taxi bolaunuhos"
    },
    {
      "english": "I need to go to...",
      "nepali": "मलाई ... जानुपर्छ",
      "newar": "जिगु ... वऺनुपर्छ",
      "pronunciation": "jigu ... wanuparchha"
    },
    {
      "english": "What's the address?",
      "nepali": "ठेगाना के हो?",
      "newar": "ठेगाना के खः?",
      "pronunciation": "thegana ke khah?"
    },
    {
      "english": "Do you know this place?",
      "nepali": "तपाईं यो ठाउँ चिन्नुहुन्छ?",
      "newar": "छिगु यो ठाउँ चिन्नुहुन्छ?",
      "pronunciation": "chigu yo thaum chinnuhuncha?"
    },
    {
      "english": "I'm lost",
      "nepali": "म हराएको छु",
      "newar": "जिउ हराएको छु",
      "pronunciation": "jiu haraeko chu"
    },
    {
      "english": "Can you show me on the map?",
      "nepali": "कृपया नक्सामा देखाउनुहोस्",
      "newar": "कृपया नक्सामा देखाउनुहोस्",
      "pronunciation": "kripaya naksama dekhaunuhos"
    },
    {
      "english": "I have a reservation",
      "nepali": "मेरो आरक्षण छ",
      "newar": "जिगु आरक्षण छ",
      "pronunciation": "jigu arakchan cha"
    },
    {
      "english": "My name is...",
      "nepali": "मेरो नाम ... हो",
      "newar": "जिगु मिं ... खः",
      "pronunciation": "jigu ming ... khah"
    },
    {
      "english": "Check-in please",
      "nepali": "कृपया चेक-इन गर्नुहोस्",
      "newar": "कृपया चेक-इन गर्नुहोस्",
      "pronunciation": "kripaya check-in garnuhos"
    },
    {
      "english": "Check-out please",
      "nepali": "कृपया चेक-आउट गर्नुहोस्",
      "newar": "कृपया चेक-आउट गर्नुहोस्",
      "pronunciation": "kripaya check-out garnuhos"
    },
    {
      "english": "What time is check-out?",
      "nepali": "चेक-आउट कति बजे हो?",
      "newar": "चेक-आउट कति बजे खः?",
      "pronunciation": "check-out kati baje khah?"
    },
    {
      "english": "Can I leave my luggage?",
      "nepali": "के म मेरो सामान राख्न सक्छु?",
      "newar": "छ की जिउ जिगु सामान राख्न सक्छु?",
      "pronunciation": "cha ki jiu jigu saman rakhn sakchu?"
    },
    {
      "english": "Where is the airport?",
      "nepali": "विमानस्थल कहाँ छ?",
      "newar": "विमानस्थल सुस्त छ?",
      "pronunciation": "wimansthal susta cha?"
    },
    {
      "english": "Where is the train station?",
      "nepali": "रेलवे स्टेशन कहाँ छ?",
      "newar": "रेलवे स्टेशन सुस्त छ?",
      "pronunciation": "railway station susta cha?"
    },
    {
      "english": "Departure",
      "nepali": "प्रस्थान",
      "newar": "प्रस्थान",
      "pronunciation": "prasthan"
    },
    {
      "english": "Arrival",
      "nepali": "आगमन",
      "newar": "आगमन",
      "pronunciation": "agaman"
    },
    {
      "english": "Boarding pass",
      "nepali": "बोर्डिङ पास",
      "newar": "बोर्डिङ पास",
      "pronunciation": "boarding pass"
    },
    {
      "english": "Passport",
      "nepali": "राहदानी",
      "newar": "राहदानी",
      "pronunciation": "rahadani"
    },
    {
      "english": "Visa",
      "nepali": "भिसा",
      "newar": "भिसा",
      "pronunciation": "visa"
    },
    {
      "english": "Customs",
      "nepali": "कस्टम",
      "newar": "कस्टम",
      "pronunciation": "custom"
    },
    {
      "english": "Immigration",
      "nepali": "इमिग्रेसन",
      "newar": "इमिग्रेसन",
      "pronunciation": "immigration"
    },
    {
      "english": "Security check",
      "nepali": "सुरक्षा जाँच",
      "newar": "सुरक्षा जाँच",
      "pronunciation": "suraksha janch"
    },
    {
      "english": "Gate number",
      "nepali": "गेट नम्बर",
      "newar": "गेट नम्बर",
      "pronunciation": "gate number"
    },
    {
      "english": "Flight delay",
      "nepali": "उडान ढिला",
      "newar": "उडान ढिला",
      "pronunciation": "udan dhila"
    },
    {
      "english": "Flight cancellation",
      "nepali": "उडान रद्द",
      "newar": "उडान रद्द",
      "pronunciation": "udan radda"
    },
    {
      "english": "Baggage claim",
      "nepali": "सामान प्राप्ति",
      "newar": "सामान प्राप्ति",
      "pronunciation": "saman prapti"
    },
    {
      "english": "Lost and found",
      "nepali": "हराएको सामान",
      "newar": "हराएको सामान",
      "pronunciation": "haraeko saman"
    },
    {
      "english": "Information desk",
      "nepali": "जानकारी डेस्क",
      "newar": "जानकारी डेス्क",
      "pronunciation": "jankari desk"
    },
    {
      "english": "Where is the toilet?",
      "nepali": "शौचालय कहाँ छ?",
      "newar": "शौचालय सुस्त छ?",
      "pronunciation": "shauchalay susta cha?"
    },
    {
      "english": "Where is the restaurant?",
      "nepali": "रेस्टुरेन्ट कहाँ छ?",
      "newar": "रेस्टुरेन्ट सुस्त छ?",
      "pronunciation": "restaurant susta cha?"
    },
    {
      "english": "Where can I buy a ticket?",
      "nepali": "म टिकट कहाँ किन्न सक्छु?",
      "newar": "जिउ टिकट सुस्त किन्न सक्छु?",
      "pronunciation": "jiu ticket susta kinna sakchu?"
    },
    {
      "english": "Platform number",
      "nepali": "प्लेटफर्म नम्बर",
      "newar": "प्लेटफर्म नम्बर",
      "pronunciation": "platform number"
    },
    {
      "english": "Is this the right platform?",
      "nepali": "के यो सही प्लेटफर्म हो?",
      "newar": "छ की या सही प्लेटफर्म खः?",
      "pronunciation": "cha ki ya sahi platform khah?"
    },
    {
      "english": "Which way to the metro?",
      "nepali": "मेट्रो कुन बाटो हो?",
      "newar": "मेट्रो कुन बाटो खः?",
      "pronunciation": "metro kun bato khah?"
    },
    {
      "english": "Do you have a city map?",
      "nepali": "तपाईंसँग शहरको नक्सा छ?",
      "newar": "छिगु सँग शहरको नक्सा छ?",
      "pronunciation": "chigu sang sahar ko naksa cha?"
    },
    {
      "english": "I want to rent a car",
      "nepali": "म कार भाडामा लिन चाहन्छु",
      "newar": "जिउ कार भाडामा लिन मन छ",
      "pronunciation": "jiu car bhadama lin man cha"
    },
    {
      "english": "I need a driver",
      "nepali": "मलाई ड्राइभर चाहियो",
      "newar": "जिगु ड्राइभर चाहियो",
      "pronunciation": "jigu driver chahiyo"
    },
    {
      "english": "How much per day?",
      "nepali": "प्रतिदिन कति?",
      "newar": "प्रतिदिन कति?",
      "pronunciation": "pratidin kati?"
    },
    {
      "english": "Do you have insurance?",
      "nepali": "तपाईंसँग बीमा छ?",
      "newar": "छिगु सँग बीमा छ?",
      "pronunciation": "chigu sang bima cha?"
    },
    {
      "english": "I need gas/petrol",
      "nepali": "मलाई पेट्रोल चाहियो",
      "newar": "जिगु पेट्रोल चाहियो",
      "pronunciation": "jigu petrol chahiyo"
    },
    {
      "english": "Fill it up please",
      "nepali": "कृपया पूरा भर्नुहोस्",
      "newar": "कृपया पूरा भर्नुहोस्",
      "pronunciation": "kripaya pura bharnuhos"
    },
    {
      "english": "Where is the gas station?",
      "nepali": "पेट्रोल पम्प कहाँ छ?",
      "newar": "पेट्रोल पम्प सुस्त छ?",
      "pronunciation": "petrol pump susta cha?"
    },
    {
      "english": "The car broke down",
      "nepali": "गाडी बिग्रियो",
      "newar": "गाडी बिग्रियो",
      "pronunciation": "gadi bigriyo"
    },
    {
      "english": "I have a flat tire",
      "nepali": "टायर पंक्चर भयो",
      "newar": "टायर पंक्चर भयो",
      "pronunciation": "tire puncture bhayo"
    },
    {
      "english": "I need a mechanic",
      "nepali": "मलाई मेकानिक चाहियो",
      "newar": "जिगु मेकानिक चाहियो",
      "pronunciation": "jigu mechanic chahiyo"
    },
    {
      "english": "Can you help me?",
      "nepali": "के तपाईं मलाई मद्दत गर्नुहुन्छ?",
      "newar": "छ की छिगु जिगु ला मद्दत गर्नुहुन्छ?",
      "pronunciation": "cha ki chigu jigu la maddat garnuhuncha?"
    },
    {
      "english": "Call the police",
      "nepali": "प्रहरीलाई बोलाउनुहोस्",
      "newar": "प्रहरी हे बोलाउ",
      "pronunciation": "prahari he bolau"
    },
    {
      "english": "Call an ambulance",
      "nepali": "एम्बुलेन्स बोलाउनुहोस्",
      "newar": "एम्बुलेन्स हे बोलाउ",
      "pronunciation": "ambulance he bolau"
    },
    {
      "english": "I need a doctor",
      "nepali": "मलाई डाक्टर चाहियो",
      "newar": "जिगु डाक्टर चाहियो",
      "pronunciation": "jigu doctor chahiyo"
    },
    {
      "english": "Where is the hospital?",
      "nepali": "अस्पताल कहाँ छ?",
      "newar": "अस्पताल सुस्त छ?",
      "pronunciation": "aspatal susta cha?"
    },
    {
      "english": "I'm not feeling well",
      "nepali": "मलाई अस्वस्थ लागिरहेको छ",
      "newar": "जिगु अस्वस्थ लागिरहेको छ",
      "pronunciation": "jigu aswasth lagiraheko cha"
    },
    {
      "english": "Is it far?",
      "nepali": "के यो टाढा छ?",
      "newar": "छ की या टाढा छ?",
      "pronunciation": "cha ki ya tadha cha?"
    },
    {
      "english": "Is it near?",
      "nepali": "के यो नजिक छ?",
      "newar": "छ की या नजिक छ?",
      "pronunciation": "cha ki ya najik cha?"
    },
    {
      "english": "How many kilometers?",
      "nepali": "कति किलोमिटर?",
      "newar": "कति किलोमिटर?",
      "pronunciation": "kati kilometer?"
    },
    {
      "english": "Can you write the address?",
      "nepali": "कृपया ठेगाना लेख्नुहोस्",
      "newar": "कृपया ठेगाना लेख्नुहोस्",
      "pronunciation": "kripaya thegana lekhnuhos"
    },
    {
      "english": "I'll show you",
      "nepali": "म तपाईंलाई देखाउँछु",
      "newar": "जिउ छिगु ला देखाउँछु",
      "pronunciation": "jiu chigu la dekhaunchu"
    },
    {
      "english": "Follow me",
      "nepali": "मेरो पछि आउनुहोस्",
      "newar": "जिगु पछि आउनुहोस्",
      "pronunciation": "jigu pachi aunuhos"
    },
    {
      "english": "Wait for me",
      "nepali": "मेरो लागि पर्खनुहोस्",
      "newar": "जिगु लागि पर्खनुहोス्",
      "pronunciation": "jigu lagi parkhanuhos"
    },
    {
      "english": "I'll be right back",
      "nepali": "म झट्टै फर्कँछु",
      "newar": "जिउ झट्टै फर्कँछु",
      "pronunciation": "jiu jhatai pharkanchu"
    },
    {
      "english": "Let's go",
      "nepali": "जाऔं",
      "newar": "जाऔं",
      "pronunciation": "jaun"
    },
    {
      "english": "Hurry up",
      "nepali": "छिटो गर्नुहोस्",
      "newar": "छिटो गर्नुहोस्",
      "pronunciation": "chhito garnuhos"
    },
    {
      "english": "Take your time",
      "nepali": "बिस्तारै गर्नुहोस्",
      "newar": "बिस्तारै गर्नुहोस्",
      "pronunciation": "bistarai garnuhos"
    },
    {
      "english": "Be safe",
      "nepali": "सुरक्षित रहनुहोस्",
      "newar": "सुरक्षित रहनुहोस्",
      "pronunciation": "surakshit rahanuhos"
    },
    {
      "english": "Have a good trip",
      "nepali": "राम्रो यात्रा होस्",
      "newar": "राम्रो यात्रा होस्",
      "pronunciation": "ramro yatra hos"
    },
    {
      "english": "Welcome to Nepal",
      "nepali": "नेपालमा स्वागतम्",
      "newar": "नेपालमा स्वागतम्",
      "pronunciation": "nepalma swagatam"
    },
    {
      "english": "Enjoy your stay",
      "nepali": "तपाईंको बसाइ राम्रो होस्",
      "newar": "छिगु बसाइ राम्रो होस्",
      "pronunciation": "chigu basai ramro hos"
    },
    {
      "english": "I love traveling",
      "nepali": "मलाई यात्रा गर्न मन पर्छ",
      "newar": "जिगु यात्रा गर्न मन पर्छ",
      "pronunciation": "jigu yatra garn man parcha"
    },
    {
      "english": "This is beautiful",
      "nepali": "यो सुन्दर छ",
      "newar": "या सुन्दर छ",
      "pronunciation": "ya sundar cha"
    },
    {
      "english": "Take a photo please",
      "nepali": "कृपया फोटो खिच्नुहोस्",
      "newar": "कृपया फोटो खिच्नुहोस्",
      "pronunciation": "kripaya photo khichnuhos"
    },
    {
      "english": "Can you take our picture?",
      "nepali": "कृपया हाम्रो तस्विर खिच्नुहोस्",
      "newar": "कृपया जिउहरूको तस्विर खिच्नुहोस्",
      "pronunciation": "kripaya jiuharuko taswir khichnuhos"
    },
    {
      "english": "Smile!",
      "nepali": "हाँस्नुहोस्!",
      "newar": "हाँस्नुहोस्!",
      "pronunciation": "hansnuhos!"
    },
    {
      "english": "Thank you for the ride",
      "nepali": "सवारीको लागि धन्यवाद",
      "newar": "सवारीको लागि सुभाय्",
      "pronunciation": "sawariko lagi subhay"
    },
    {
      "english": "Until next time",
      "nepali": "अर्को पटक सम्म",
      "newar": "अर्को पटक सम्म",
      "pronunciation": "arko patak samma"
    },
    {
      "english": "Safe travels",
      "nepali": "सुरक्षित यात्रा",
      "newar": "सुरक्षित यात्रा",
      "pronunciation": "surakshit yatra"
    },
    ],
    difficulty: "intermediate",
    duration: 25,
    wordsCount: 100
  },


6: {
  "id": 6,
  "title": "Shopping & Money",
  "description": "Shopping vocabulary and money-related phrases for daily use",
  "content": [
    {
      "english": "How much does this cost?",
      "nepali": "यसको कति पर्छ?",
      "newar": "यागु कति पर्छ?",
      "pronunciation": "ya-gu kati parchha?"
    },
    {
      "english": "What is the price?",
      "nepali": "मूल्य कति हो?",
      "newar": "मूल्य कति खः?",
      "pronunciation": "mulya kati khah?"
    },
    {
      "english": "This is too expensive",
      "nepali": "यो धेरै महँगो छ",
      "newar": "या धेरै महँगो छ",
      "pronunciation": "ya dherai mahango cha"
    },
    {
      "english": "Can you reduce the price?",
      "nepali": "कृपया मूल्य घटाउन सक्नुहुन्छ?",
      "newar": "कृपया मूल्य घटाउन मेग?",
      "pronunciation": "kripaya mulya ghatauna meg?"
    },
    {
      "english": "Do you have a discount?",
      "nepali": "तपाईंसँग छुट छ?",
      "newar": "छिगु सँग छुट छ?",
      "pronunciation": "chigu sang chhut cha?"
    },
    {
      "english": "I'm just looking",
      "nepali": "म हेर्दै छु",
      "newar": "जिउ हेर्दै छु",
      "pronunciation": "jiu herdai chu"
    },
    {
      "english": "I want to buy this",
      "nepali": "म यो किन्न चाहन्छु",
      "newar": "जिउ यो किन्न मन छ",
      "pronunciation": "jiu yo kinna man cha"
    },
    {
      "english": "Do you accept credit cards?",
      "nepali": "तपाईं क्रेडिट कार्ड स्वीकार गर्नुहुन्छ?",
      "newar": "छिगु क्रेडिट कार्ड स्वीकार गर्नुहुन्छ?",
      "pronunciation": "chigu credit card swikar garnuhuncha?"
    },
    {
      "english": "Cash only",
      "nepali": "नगद मात्र",
      "newar": "नगद मात्र",
      "pronunciation": "nagad matra"
    },
    {
      "english": "Where can I pay?",
      "nepali": "म कहाँ तिर्न सक्छु?",
      "newar": "जिउ सुस्त तिर्न सक्छु?",
      "pronunciation": "jiu susta tirna sakchu?"
    },
    {
      "english": "Do you have change?",
      "nepali": "तपाईंसँग सुन्ती छ?",
      "newar": "छिगु सँग सुन्ती छ?",
      "pronunciation": "chigu sang sunti cha?"
    },
    {
      "english": "Keep the change",
      "nepali": "सुन्ती राख्नुहोस्",
      "newar": "सुन्ती राख्नुहोस्",
      "pronunciation": "sunti rakhnuhos"
    },
    {
      "english": "This is defective",
      "nepali": "यो खराब छ",
      "newar": "या खराब छ",
      "pronunciation": "ya kharab cha"
    },
    {
      "english": "Can I exchange this?",
      "nepali": "के म यो साट्न सक्छु?",
      "newar": "छ की जिउ यो साट्न सक्छु?",
      "pronunciation": "cha ki jiu yo satna sakchu?"
    },
    {
      "english": "I want to return this",
      "nepali": "म यो फिर्ता गर्न चाहन्छु",
      "newar": "जिउ यो फिर्ता गर्न मन छ",
      "pronunciation": "jiu yo phirta garn man cha"
    },
    {
      "english": "Do you have a warranty?",
      "nepali": "तपाईंसँग वारेन्टी छ?",
      "newar": "छिगु सँग वारेन्टी छ?",
      "pronunciation": "chigu sang warranty cha?"
    },
    {
      "english": "Where is the market?",
      "nepali": "बजार कहाँ छ?",
      "newar": "बजार सुस्त छ?",
      "pronunciation": "bajar susta cha?"
    },
    {
      "english": "Shopping mall",
      "nepali": "शपिङ मल",
      "newar": "शपिङ मल",
      "pronunciation": "shopping mall"
    },
    {
      "english": "Grocery store",
      "nepali": "किराना पसल",
      "newar": "किराना पसल",
      "pronunciation": "kirana pasal"
    },
    {
      "english": "Clothing store",
      "nepali": "लुगा पसल",
      "newar": "लुगा पसल",
      "pronunciation": "luga pasal"
    },
    {
      "english": "Money",
      "nepali": "पैसा",
      "newar": "पैसा",
      "pronunciation": "paisa"
    },
    {
      "english": "Currency",
      "nepali": "मुद्रा",
      "newar": "मुद्रा",
      "pronunciation": "mudra"
    },
    {
      "english": "Nepalese Rupee",
      "nepali": "नेपाली रुपैयाँ",
      "newar": "नेपाली रुपैयाँ",
      "pronunciation": "nepali rupaiya"
    },
    {
      "english": "Dollar",
      "nepali": "डलर",
      "newar": "डलर",
      "pronunciation": "dollar"
    },
    {
      "english": "Euro",
      "nepali": "युरो",
      "newar": "युरो",
      "pronunciation": "euro"
    },
    {
      "english": "Bank",
      "nepali": "बैंक",
      "newar": "बैंक",
      "pronunciation": "bank"
    },
    {
      "english": "ATM",
      "nepali": "एटिएम",
      "newar": "एटिएम",
      "pronunciation": "ATM"
    },
    {
      "english": "Credit card",
      "nepali": "क्रेडिट कार्ड",
      "newar": "क्रेडिट कार्ड",
      "pronunciation": "credit card"
    },
    {
      "english": "Debit card",
      "nepali": "डेबिट कार्ड",
      "newar": "डेबिट कार्ड",
      "pronunciation": "debit card"
    },
    {
      "english": "Cash",
      "nepali": "नगद",
      "newar": "नगद",
      "pronunciation": "nagad"
    },
    {
      "english": "Coin",
      "nepali": "सिक्का",
      "newar": "सिक्का",
      "pronunciation": "sikka"
    },
    {
      "english": "Note",
      "nepali": "नोट",
      "newar": "नोट",
      "pronunciation": "note"
    },
    {
      "english": "Expensive",
      "nepali": "महँगो",
      "newar": "महँगो",
      "pronunciation": "mahango"
    },
    {
      "english": "Cheap",
      "nepali": "सस्तो",
      "newar": "सस्तो",
      "pronunciation": "sasto"
    },
    {
      "english": "Discount",
      "nepali": "छुट",
      "newar": "छुट",
      "pronunciation": "chhut"
    },
    {
      "english": "Sale",
      "nepali": "बिक्री",
      "newar": "बिक्री",
      "pronunciation": "bikri"
    },
    {
      "english": "Bargain",
      "nepali": "सौदा",
      "newar": "सौदा",
      "pronunciation": "sauda"
    },
    {
      "english": "Price tag",
      "nepali": "मूल्य ट्याग",
      "newar": "मूल्य ट्याग",
      "pronunciation": "mulya tag"
    },
    {
      "english": "Receipt",
      "nepali": "रसिद",
      "newar": "रसिद",
      "pronunciation": "rasid"
    },
    {
      "english": "Bill",
      "nepali": "बिल",
      "newar": "बिल",
      "pronunciation": "bill"
    },
    {
      "english": "Invoice",
      "nepali": "इन्भ्वाइस",
      "newar": "इन्भ्वाइस",
      "pronunciation": "invoice"
    },
    {
      "english": "Refund",
      "nepali": "फिर्ता",
      "newar": "फिर्ता",
      "pronunciation": "phirta"
    },
    {
      "english": "Exchange",
      "nepali": "साटफेर",
      "newar": "साटफेर",
      "pronunciation": "satpher"
    },
    {
      "english": "Quality",
      "nepali": "गुणस्तर",
      "newar": "गुणस्तर",
      "pronunciation": "gunastar"
    },
    {
      "english": "Brand",
      "nepali": "ब्रान्ड",
      "newar": "ब्रान्ड",
      "pronunciation": "brand"
    },
    {
      "english": "Size",
      "nepali": "नाप",
      "newar": "नाप",
      "pronunciation": "nap"
    },
    {
      "english": "Color",
      "nepali": "रङ्ग",
      "newar": "रङ्ग",
      "pronunciation": "rang"
    },
    {
      "english": "Small",
      "nepali": "सानो",
      "newar": "सानो",
      "pronunciation": "sano"
    },
    {
      "english": "Medium",
      "nepali": "मध्यम",
      "newar": "मध्यम",
      "pronunciation": "madhyam"
    },
    {
      "english": "Large",
      "nepali": "ठूलो",
      "newar": "ठूलो",
      "pronunciation": "thulo"
    },
    {
      "english": "Extra large",
      "nepali": "धेरै ठूलो",
      "newar": "धेरै ठूलो",
      "pronunciation": "dherai thulo"
    },
    {
      "english": "Try on",
      "nepali": "लगाएर हेर्नु",
      "newar": "लगाएर हेर्नु",
      "pronunciation": "lagaera hernu"
    },
    {
      "english": "Fitting room",
      "nepali": "प्रयोग कोठा",
      "newar": "प्रयोग कोठा",
      "pronunciation": "prayog kotha"
    },
    {
      "english": "It fits well",
      "nepali": "यो राम्रोसँग फिट भयो",
      "newar": "या राम्रोसँग फिट भयो",
      "pronunciation": "ya ramrosang fit bhayo"
    },
    {
      "english": "It's too tight",
      "nepali": "यो धेरै टाँसिएको छ",
      "newar": "या धेरै टाँसिएको छ",
      "pronunciation": "ya dherai tansieko cha"
    },
    {
      "english": "It's too loose",
      "nepali": "यो धेरै ढिलो छ",
      "newar": "या धेरै ढिलो छ",
      "pronunciation": "ya dherai dhilo cha"
    },
    {
      "english": "Do you have a different color?",
      "nepali": "तपाईंसँग फरक रङ्ग छ?",
      "newar": "छिगु सँग फरक रङ्ग छ?",
      "pronunciation": "chigu sang pharak rang cha?"
    },
    {
      "english": "Do you have a smaller size?",
      "nepali": "तपाईंसँग सानो नाप छ?",
      "newar": "छिगु सँग सानो नाप छ?",
      "pronunciation": "chigu sang sano nap cha?"
    },
    {
      "english": "Do you have a larger size?",
      "nepali": "तपाईंसँग ठूलो नाप छ?",
      "newar": "छिगु सँग ठूलो नाप छ?",
      "pronunciation": "chigu sang thulo nap cha?"
    },
    {
      "english": "This is perfect",
      "nepali": "यो उत्तम छ",
      "newar": "या उत्तम छ",
      "pronunciation": "ya uttam cha"
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
      "pronunciation": "jigu yo chahidaina"
    },
    {
      "english": "Let me think about it",
      "nepali": "मलाई यसको बारेमा सोच्न दिनुहोस्",
      "newar": "जिगु ला यसको बारेमा सोच्न मेग",
      "pronunciation": "jigu la yasko barema sochna meg"
    },
    {
      "english": "I'll come back later",
      "nepali": "म पछि फर्कनेछु",
      "newar": "जिउ पछि फर्कनेछु",
      "pronunciation": "jiu pachi pharkanechu"
    },
    {
      "english": "Where is the cashier?",
      "nepali": "क्यासियर कहाँ छ?",
      "newar": "क्यासियर सुस्त छ?",
      "pronunciation": "cashier susta cha?"
    },
    {
      "english": "Shopping bag",
      "nepali": "शपिङ थैलो",
      "newar": "शपिङ थैलो",
      "pronunciation": "shopping thailo"
    },
    {
      "english": "Plastic bag",
      "nepali": "प्लास्टिक थैलो",
      "newar": "प्लास्टिक थैलो",
      "pronunciation": "plastic thailo"
    },
    {
      "english": "Paper bag",
      "nepali": "कागज थैलो",
      "newar": "कागज थैलो",
      "pronunciation": "kagaj thailo"
    },
    {
      "english": "Can I have a bag?",
      "nepali": "के मलाई थैलो पाउँछु?",
      "newar": "छ की जिगु ला थैलो पाउँछु?",
      "pronunciation": "cha ki jigu la thailo paunchu?"
    },
    {
      "english": "Is this authentic?",
      "nepali": "के यो असल हो?",
      "newar": "छ की या असल खः?",
      "pronunciation": "cha ki ya asal khah?"
    },
    {
      "english": "Is this real?",
      "nepali": "के यो वास्तविक हो?",
      "newar": "छ की या वास्तविक खः?",
      "pronunciation": "cha ki ya wastawik khah?"
    },
    {
      "english": "Is this fake?",
      "nepali": "के यो नक्कली हो?",
      "newar": "छ की या नक्कली खः?",
      "pronunciation": "cha ki ya nakkali khah?"
    },
    {
      "english": "Local product",
      "nepali": "स्थानीय उत्पादन",
      "newar": "स्थानीय उत्पादन",
      "pronunciation": "sthaniya utpadan"
    },
    {
      "english": "Imported",
      "nepali": "आयातित",
      "newar": "आयातित",
      "pronunciation": "ayait"
    },
    {
      "english": "Made in Nepal",
      "nepali": "नेपालमा बनेको",
      "newar": "नेपालमा बनेको",
      "pronunciation": "nepalma baneko"
    },
    {
      "english": "Handmade",
      "nepali": "हातले बनेको",
      "newar": "हातले बनेको",
      "pronunciation": "hatle baneko"
    },
    {
      "english": "Traditional",
      "nepali": "पारम्परिक",
      "newar": "पारम्परिक",
      "pronunciation": "paramparik"
    },
    {
      "english": "Modern",
      "nepali": "आधुनिक",
      "newar": "आधुनिक",
      "pronunciation": "adhunik"
    },
    {
      "english": "Beautiful",
      "nepali": "सुन्दर",
      "newar": "सुन्दर",
      "pronunciation": "sundar"
    },
    {
      "english": "Ugly",
      "nepali": "बदसुरत",
      "newar": "बदसुरत",
      "pronunciation": "badasurat"
    },
    {
      "english": "Useful",
      "nepali": "उपयोगी",
      "newar": "उपयोगी",
      "pronunciation": "upayogi"
    },
    {
      "english": "Useless",
      "nepali": "बेकाम",
      "newar": "बेकाम",
      "pronunciation": "bekam"
    },
    {
      "english": "Strong",
      "nepali": "बलियो",
      "newar": "बलियो",
      "pronunciation": "balio"
    },
    {
      "english": "Weak",
      "nepali": "कमजोर",
      "newar": "कमजोर",
      "pronunciation": "kamjor"
    },
    {
      "english": "Heavy",
      "nepali": "गह्रौं",
      "newar": "गह्रौं",
      "pronunciation": "garhaun"
    },
    {
      "english": "Light",
      "nepali": "हलुका",
      "newar": "हलुका",
      "pronunciation": "halka"
    },
    {
      "english": "Fragile",
      "nepali": "सजिलै भाँचिने",
      "newar": "सजिलै भाँचिने",
      "pronunciation": "sajilai bhanchine"
    },
    {
      "english": "Durable",
      "nepali": "टिकाउ",
      "newar": "टिकाउ",
      "pronunciation": "tikau"
    },
    {
      "english": "New",
      "nepali": "नयाँ",
      "newar": "नयाँ",
      "pronunciation": "naya"
    },
    {
      "english": "Old",
      "nepali": "पुरानो",
      "newar": "पुरानो",
      "pronunciation": "purano"
    },
    {
      "english": "Second-hand",
      "nepali": "प्रयोग गरिएको",
      "newar": "प्रयोग गरिएको",
      "pronunciation": "prayog gareko"
    },
    {
      "english": "Brand new",
      "nepali": "नयाँ ब्रान्ड",
      "newar": "नयाँ ब्रान्ड",
      "pronunciation": "naya brand"
    },
    {
      "english": "On sale",
      "nepali": "बिक्रीमा",
      "newar": "बिक्रीमा",
      "pronunciation": "bikrima"
    },
    {
      "english": "Out of stock",
      "nepali": "स्टक समाप्त",
      "newar": "स्टक समाप्त",
      "pronunciation": "stock samapta"
    },
    {
      "english": "Available",
      "nepali": "उपलब्ध",
      "newar": "उपलब्ध",
      "pronunciation": "upalabdha"
    },
    {
      "english": "Not available",
      "nepali": "उपलब्ध छैन",
      "newar": "उपलब्ध छैन",
      "pronunciation": "upalabdha chaina"
    },
    {
      "english": "Coming soon",
      "nepali": "चाँडै आउँदै",
      "newar": "चाँडै आउँदै",
      "pronunciation": "chandai aundai"
    },
    {
      "english": "Limited edition",
      "nepali": "सीमित संस्करण",
      "newar": "सीमित संस्करण",
      "pronunciation": "simit sanskaran"
    },
    {
      "english": "Exclusive",
      "nepali": "अनन्य",
      "newar": "अनन्य",
      "pronunciation": "ananya"
    },
    {
      "english": "Common",
      "nepali": "साधारण",
      "newar": "साधारण",
      "pronunciation": "sadharan"
    },
    {
      "english": "Rare",
      "nepali": "दुर्लभ",
      "newar": "दुर्लभ",
      "pronunciation": "durlabha"
    },
    {
      "english": "Special offer",
      "nepali": "विशेष प्रस्ताव",
      "newar": "विशेष प्रस्ताव",
      "pronunciation": "vishesh prastab"
    },
    {
      "english": "Buy one get one free",
      "nepali": "एक किन्नु, एक फ्री",
      "newar": "एक किन्नु, एक फ्री",
      "pronunciation": "ek kinu, ek free"
    },
    {
      "english": "50% off",
      "nepali": "५०% छुट",
      "newar": "५०% छुट",
      "pronunciation": "pachas pratishat chhut"
    },
    {
      "english": "Clearance sale",
      "nepali": "क्लियरेन्स सेल",
      "newar": "क्लियरेन्स सेल",
      "pronunciation": "clearance sale"
    },
    {
      "english": "Opening soon",
      "nepali": "चाँडै खुल्ने",
      "newar": "चाँडै खुल्ने",
      "pronunciation": "chandai khulne"
    },
    {
      "english": "Closing down",
      "nepali": "बन्द हुदै",
      "newar": "बन्द हुदै",
      "pronunciation": "banda hudai"
    },
    {
      "english": "Thank you for shopping",
      "nepali": "किनमेल गर्नुभएकोमा धन्यवाद",
      "newar": "किनमेल गर्नुभएकोमा सुभाय्",
      "pronunciation": "kinmel garnubhaekoma subhay"
    },
    {
      "english": "Please come again",
      "nepali": "कृपया फेरि आउनुहोस्",
      "newar": "कृपया फेरि आउनुहोस्",
      "pronunciation": "kripaya pheri aunuhos"
    },
    {
      "english": "Have a nice day",
      "nepali": "राम्रो दिन होस्",
      "newar": "राम्रो दिन होस्",
      "pronunciation": "ramro din hos"
    }
  ],
    difficulty: "beginner",
    duration: 30,
    wordsCount: 80
},
  7: {
    "id": 7,
    "title": "Colors & Shapes",
    "description": "Common colors, shapes, and descriptive phrases",
    "content": [
      {
        "english": "Red",
        "nepali": "रातो",
        "newar": "ह्यां",
        "pronunciation": "hyāṁ"
      },
      {
        "english": "Blue",
        "nepali": "निलो",
        "newar": "न्ह्ये",
        "pronunciation": "nhyē"
      },
      {
        "english": "Yellow",
        "nepali": "पहेंलो",
        "newar": "म्हासि",
        "pronunciation": "mhāsi"
      },
      {
        "english": "Green",
        "nepali": "हरियो",
        "newar": "हकुसि",
        "pronunciation": "hakusi"
      },
      {
        "english": "White",
        "nepali": "सेतो",
        "newar": "तुयु",
        "pronunciation": "tuyu"
      },
      {
        "english": "Black",
        "nepali": "कालो",
        "newar": "हिकु",
        "pronunciation": "hiku"
      },
      {
        "english": "Orange",
        "nepali": "सुन्तला रंग",
        "newar": "सन्तला",
        "pronunciation": "santalā"
      },
      {
        "english": "Pink",
        "nepali": "गुलाबी",
        "newar": "गुलाबी",
        "pronunciation": "gulābī"
      },
      {
        "english": "Purple",
        "nepali": "बैजनी",
        "newar": "बैजनी",
        "pronunciation": "baijanī"
      },
      {
        "english": "Brown",
        "nepali": "खैरो",
        "newar": "ख्ये",
        "pronunciation": "khyē"
      },
      {
        "english": "Grey",
        "nepali": "खरानी",
        "newar": "फुस्रो",
        "pronunciation": "phusro"
      },
      {
        "english": "Gold",
        "nepali": "सुन",
        "newar": "सुन",
        "pronunciation": "sun"
      },
      {
        "english": "Silver",
        "nepali": "चाँदी",
        "newar": "चाँदी",
        "pronunciation": "cā̃dī"
      },
      {
        "english": "Light Color",
        "nepali": "हल्का रंग",
        "newar": "हल्का",
        "pronunciation": "halkā"
      },
      {
        "english": "Dark Color",
        "nepali": "गाढा रंग",
        "newar": "गाढा",
        "pronunciation": "gāḍhā"
      },
      {
        "english": "Bright",
        "nepali": "उज्यालो",
        "newar": "उज्यालो",
        "pronunciation": "ujyālo"
      },
      {
        "english": "Circle",
        "nepali": "गोलो",
        "newar": "गोल",
        "pronunciation": "gol"
      },
      {
        "english": "Square",
        "nepali": "वर्ग",
        "newar": "वर्ग",
        "pronunciation": "varga"
      },
      {
        "english": "Triangle",
        "nepali": "त्रिकोण",
        "newar": "त्रिकोण",
        "pronunciation": "trikoṇ"
      },
      {
        "english": "Rectangle",
        "nepali": "आयत",
        "newar": "आयत",
        "pronunciation": "āyat"
      },
      {
        "english": "Star",
        "nepali": "तारा",
        "newar": "तारा",
        "pronunciation": "tārā"
      },
      {
        "english": "Heart",
        "nepali": "मुटु",
        "newar": "न्हूगु",
        "pronunciation": "nhūgu"
      },
      {
        "english": "Line",
        "nepali": "रेखा",
        "newar": "रेखा",
        "pronunciation": "rekhā"
      },
      {
        "english": "Round",
        "nepali": "गोलाकार",
        "newar": "गोलाकार",
        "pronunciation": "golākār"
      },
      {
        "english": "What color is this?",
        "nepali": "यो कस्तो रंग हो?",
        "newar": "बि कं रंग खः?",
        "pronunciation": "bi kaṁ raṅga kha?"
      },
      {
        "english": "I like the blue color",
        "nepali": "मलाई निलो रंग मन पर्छ",
        "newar": "जितु न्ह्ये रंग मदु",
        "pronunciation": "jitu nhyē raṅga madu"
      },
      {
        "english": "My favorite color is red",
        "nepali": "मेरो मनपर्ने रंग रातो हो",
        "newar": "जिगु मनपर्ने रंग ह्यां खः",
        "pronunciation": "jigu manparne raṅga hyāṁ kha"
      },
      {
        "english": "This is a big circle",
        "nepali": "यो ठूलो गोलो हो",
        "newar": "बि ज्यापु गोल खः",
        "pronunciation": "bi jyāpu gol kha"
      },
      {
        "english": "That is a small square",
        "nepali": "त्यो सानो वर्ग हो",
        "newar": "ति चिं वर्ग खः",
        "pronunciation": "ti ciṁ varga kha"
      },
      {
        "english": "Draw a triangle",
        "nepali": "त्रिकोण कोर्नुहोस्",
        "newar": "त्रिकोण कुतेय",
        "pronunciation": "trikoṇ kutēya"
      },
      {
        "english": "The sky is blue",
        "nepali": "आकाश निलो छ",
        "newar": "आकास न्ह्ये खः",
        "pronunciation": "ākās nhyē kha"
      },
      {
        "english": "The snow is white",
        "nepali": "हिउँ सेतो छ",
        "newar": "हिउँ तुयु खः",
        "pronunciation": "hiuṁ tuyu kha"
      },
      {
        "english": "A black car",
        "nepali": "कालो कार",
        "newar": "हिकु गाडी",
        "pronunciation": "hiku gāḍī"
      },
      {
        "english": "A green tree",
        "nepali": "हरियो रूख",
        "newar": "हकुसि सिं",
        "pronunciation": "hakusi siṁ"
      },
      {
        "english": "A red shirt",
        "nepali": "रातो सर्ट",
        "newar": "ह्यां सर्ट",
        "pronunciation": "hyāṁ sarṭ"
      },
      {
        "english": "Colorful",
        "nepali": "रंगीन",
        "newar": "रंगीन",
        "pronunciation": "raṅgīn"
      },
      {
        "english": "Plain / Without design",
        "nepali": "सादा",
        "newar": "सादा",
        "pronunciation": "sādā"
      },
      {
        "english": "Striped",
        "nepali": "पाट्दार",
        "newar": "पाट्दार",
        "pronunciation": "pāṭdār"
      },
      {
        "english": "Dotted",
        "nepali": "ठेला भएको",
        "newar": "ठेला",
        "pronunciation": "ṭhelā"
      },
      {
        "english": "Shiny",
        "nepali": "चम्किलो",
        "newar": "चम्किलो",
        "pronunciation": "camkilo"
      },
      {
        "english": "Transparent",
        "nepali": "पारदर्शी",
        "newar": "पारदर्शी",
        "pronunciation": "pārdarśī"
      }
    ],
    difficulty: "beginner",
    duration: 20,
    wordsCount: 30
  
},
  8: {
  
    "id": 8,
    "title": "Time & Calendar",
    "description": "Days, months, years, and telling time",
    "content": [
      {
        "english": "Today",
        "nepali": "आज",
        "newar": "गि",
        "pronunciation": "gi"
      },
      {
        "english": "Tomorrow",
        "nepali": "भोलि",
        "newar": "म्ह्यां",
        "pronunciation": "mhyāṁ"
      },
      {
        "english": "Yesterday",
        "nepali": "हिजो",
        "newar": "न्ह्य",
        "pronunciation": "nhyē"
      },
      {
        "english": "Day",
        "nepali": "दिन",
        "newar": "दिन",
        "pronunciation": "din"
      },
      {
        "english": "Night",
        "nepali": "रात",
        "newar": "बनी",
        "pronunciation": "bani"
      },
      {
        "english": "Morning",
        "nepali": "बिहान",
        "newar": "बिन्हे",
        "pronunciation": "binhe"
      },
      {
        "english": "Evening",
        "nepali": "साँझ",
        "newar": "बाखं",
        "pronunciation": "bākhaṁ"
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
        "newar": "पछ्यां",
        "pronunciation": "pachhyāṁ"
      },
      {
        "english": "Week",
        "nepali": "हप्ता",
        "newar": "सप्ता",
        "pronunciation": "saptā"
      },
      {
        "english": "Month",
        "nepali": "महिना",
        "newar": "तिं",
        "pronunciation": "tiṁ"
      },
      {
        "english": "Year",
        "nepali": "बर्ष",
        "newar": "बर्ष",
        "pronunciation": "barsa"
      },
      {
        "english": "Time",
        "nepali": "समय",
        "newar": "बेला",
        "pronunciation": "belā"
      },
      {
        "english": "What time is it?",
        "nepali": "कति बज्यो?",
        "newar": "कति बजेछ?",
        "pronunciation": "kati bajecha?"
      },
      {
        "english": "It is 3 o'clock",
        "nepali": "तीन बज्यो",
        "newar": "सिं बजेछ",
        "pronunciation": "sīṁ bajecha"
      },
      {
        "english": "Hour",
        "nepali": "घण्टा",
        "newar": "घ्यं",
        "pronunciation": "ghyāṁ"
      },
      {
        "english": "Minute",
        "nepali": "मिनेट",
        "newar": "मिनेट",
        "pronunciation": "minet"
      },
      {
        "english": "Second",
        "nepali": "सेकेन्ड",
        "newar": "सेकेन्ड",
        "pronunciation": "sekenḍ"
      },
      {
        "english": "Monday",
        "nepali": "सोमबार",
        "newar": "सोमबार",
        "pronunciation": "sombār"
      },
      {
        "english": "Tuesday",
        "nepali": "मंगलबार",
        "newar": "मंगलबार",
        "pronunciation": "maṅgalbār"
      },
      {
        "english": "Wednesday",
        "nepali": "बुधबार",
        "newar": "बुधबार",
        "pronunciation": "budhabār"
      },
      {
        "english": "Thursday",
        "nepali": "बिहिबार",
        "newar": "बिहिबार",
        "pronunciation": "bihibār"
      },
      {
        "english": "Friday",
        "nepali": "शुक्रबार",
        "newar": "शुक्रबार",
        "pronunciation": "śukrabār"
      },
      {
        "english": "Saturday",
        "nepali": "शनिबार",
        "newar": "शनिबार",
        "pronunciation": "śanibār"
      },
      {
        "english": "Sunday",
        "nepali": "आइतबार",
        "newar": "आइतबार",
        "pronunciation": "āitbār"
      },
      {
        "english": "January",
        "nepali": "जनवरी",
        "newar": "जनवरी",
        "pronunciation": "janawarī"
      },
      {
        "english": "February",
        "nepali": "फेब्रुअरी",
        "newar": "फेब्रुअरी",
        "pronunciation": "phebruarī"
      },
      {
        "english": "March",
        "nepali": "मार्च",
        "newar": "मार्च",
        "pronunciation": "mārch"
      },
      {
        "english": "April",
        "nepali": "अप्रिल",
        "newar": "अप्रिल",
        "pronunciation": "april"
      },
      {
        "english": "May",
        "nepali": "मे",
        "newar": "मे",
        "pronunciation": "me"
      },
      {
        "english": "June",
        "nepali": "जुन",
        "newar": "जुन",
        "pronunciation": "jun"
      },
      {
        "english": "July",
        "nepali": "जुलाई",
        "newar": "जुलाई",
        "pronunciation": "julāī"
      },
      {
        "english": "August",
        "nepali": "अगस्त",
        "newar": "अगस्त",
        "pronunciation": "agast"
      },
      {
        "english": "September",
        "nepali": "सेप्टेम्बर",
        "newar": "सेप्टेम्बर",
        "pronunciation": "sepṭembar"
      },
      {
        "english": "October",
        "nepali": "अक्टोबर",
        "newar": "अक्टोबर",
        "pronunciation": "akṭobar"
      },
      {
        "english": "November",
        "nepali": "नोभेम्बर",
        "newar": "नोभेम्बर",
        "pronunciation": "nobhembar"
      },
      {
        "english": "December",
        "nepali": "डिसेम्बर",
        "newar": "डिसेम्बर",
        "pronunciation": "ḍisembar"
      },
      {
        "english": "What day is it today?",
        "nepali": "आज कुन बार हो?",
        "newar": "गि कं बार खः?",
        "pronunciation": "gi kāṁ bār kha?"
      },
      {
        "english": "Today is Friday",
        "nepali": "आज शुक्रबार हो",
        "newar": "गि शुक्रबार खः",
        "pronunciation": "gi śukrabār kha"
      },
      {
        "english": "What is the date today?",
        "nepali": "आज कति गते हो?",
        "newar": "गि कति गते खः?",
        "pronunciation": "gi kati gate kha?"
      },
      {
        "english": "Today is the 15th",
        "nepali": "आज पन्ध्र गते हो",
        "newar": "गि पन्ध्र गते खः",
        "pronunciation": "gi pandhra gate kha"
      },
      {
        "english": "Morning time",
        "nepali": "बिहानको बेला",
        "newar": "बिन्हे बेला",
        "pronunciation": "binhe belā"
      },
      {
        "english": "Night time",
        "nepali": "रातको बेला",
        "newar": "बनी बेला",
        "pronunciation": "bani belā"
      },
      {
        "english": "Early",
        "nepali": "बेलुका",
        "newar": "च्वना",
        "pronunciation": "chwanā"
      },
      {
        "english": "Late",
        "nepali": "ढिलो",
        "newar": "ल्ह्य",
        "pronunciation": "lhyē"
      },
      {
        "english": "Soon",
        "nepali": "चाँडो",
        "newar": "चां",
        "pronunciation": "chāṁ"
      },
      {
        "english": "Always",
        "nepali": "सधैं",
        "newar": "जक्क",
        "pronunciation": "jakka"
      },
      {
        "english": "Sometimes",
        "nepali": "कहिलेकाहीं",
        "newar": "ल्हासंल्हासं",
        "pronunciation": "lhāsaṁ-lhāsaṁ"
      },
      {
        "english": "Never",
        "nepali": "कहिल्यै",
        "newar": "ल्हासंम्हातं",
        "pronunciation": "lhāsaṁ-mhātaṁ"
      },
      {
        "english": "All day",
        "nepali": "सारा दिन",
        "newar": "सकल दिन",
        "pronunciation": "sakal din"
      },
      {
        "english": "All night",
        "nepali": "सारा रात",
        "newar": "सकल बनी",
        "pronunciation": "sakal bani"
      },
      {
        "english": "Next week",
        "nepali": "अर्को हप्ता",
        "newar": "फैं सप्ता",
        "pronunciation": "phaiṁ saptā"
      },
      {
        "english": "Last week",
        "nepali": "गएको हप्ता",
        "newar": "पासां सप्ता",
        "pronunciation": "pāsāṁ saptā"
      },
      {
        "english": "Next month",
        "nepali": "अर्को महिना",
        "newar": "फैं तिं",
        "pronunciation": "phaiṁ tiṁ"
      },
      {
        "english": "Last month",
        "nepali": "गएको महिना",
        "newar": "पासां तिं",
        "pronunciation": "pāsāṁ tiṁ"
      },
      {
        "english": "Next year",
        "nepali": "अर्को बर्ष",
        "newar": "फैं बर्ष",
        "pronunciation": "phaiṁ barsa"
      },
      {
        "english": "Last year",
        "nepali": "गएको बर्ष",
        "newar": "पासां बर्ष",
        "pronunciation": "pāsāṁ barsa"
      },
      {
        "english": "Happy New Year",
        "nepali": "नयाँ बर्षको शुभकामना",
        "newar": "न्हूगु बर्षया शुभकामना",
        "pronunciation": "nhūgu barsayā śubhakāmanā"
      },
      {
        "english": "Happy Birthday",
        "nepali": "जन्मदिनको शुभकामना",
        "newar": "जन्मदिनया शुभकामना",
        "pronunciation": "janamdinayā śubhakāmanā"
      },
      {
        "english": "How old are you?",
        "nepali": "तपाईं कति वर्षको हुनुहुन्छ?",
        "newar": "छी कति बर्षया जुय?",
        "pronunciation": "chī kati barsayā juy?"
      },
      {
        "english": "I am 25 years old",
        "nepali": "म पच्चीस वर्षको हुँ",
        "newar": "जि पच्चीस बर्षया जु",
        "pronunciation": "ji paccīs barsayā ju"
      },
      {
        "english": "Season",
        "nepali": "ऋतु",
        "newar": "ऋतु",
        "pronunciation": "ritu"
      },
      {
        "english": "Summer",
        "nepali": "गर्मी",
        "newar": "गर्मी",
        "pronunciation": "garmī"
      },
      {
        "english": "Winter",
        "nepali": "जाडो",
        "newar": "हिउं",
        "pronunciation": "hiuṁ"
      },
      {
        "english": "Rainy season",
        "nepali": "वर्षा",
        "newar": "वर्षा",
        "pronunciation": "barsā"
      },
      {
        "english": "Spring",
        "nepali": "बसन्त",
        "newar": "बसन्त",
        "pronunciation": "basanta"
      },
      {
        "english": "Autumn",
        "nepali": "शरद",
        "newar": "शरद",
        "pronunciation": "śarad"
      },
      {
        "english": "Past",
        "nepali": "वितेको",
        "newar": "पासां",
        "pronunciation": "pāsāṁ"
      },
      {
        "english": "Present",
        "nepali": "वर्तमान",
        "newar": "वर्तमान",
        "pronunciation": "vartamān"
      },
      {
        "english": "Future",
        "nepali": "भविष्य",
        "newar": "फैं",
        "pronunciation": "phaiṁ"
      },
      {
        "english": "A long time",
        "nepali": "धेरै समय",
        "newar": "म्हैं बेला",
        "pronunciation": "mhaiṁ belā"
      },
      {
        "english": "A short time",
        "nepali": "अलिकति समय",
        "newar": "छिं बेला",
        "pronunciation": "chiṁ belā"
      },
      {
        "english": "Wait a moment",
        "nepali": "अलिकति पर्खनुहोस्",
        "newar": "छिंछिं थ्वः",
        "pronunciation": "chinchin thwa"
      },
      {
        "english": "Hurry up",
        "nepali": "चाँडो गर्नुहोस्",
        "newar": "चां वनेय",
        "pronunciation": "chāṁ wanēya"
      },
      {
        "english": "On time",
        "nepali": "समयमा",
        "newar": "बेलासं",
        "pronunciation": "belāsaṁ"
      },
      {
        "english": "Before",
        "nepali": "अगाडि",
        "newar": "अगाडि",
        "pronunciation": "agāḍi"
      },
      {
        "english": "After",
        "nepali": "पछि",
        "newar": "पछ्यां",
        "pronunciation": "pachhyāṁ"
      },
      {
        "english": "During",
        "nepali": "को बेलामा",
        "newar": "या बेलासं",
        "pronunciation": "yā belāsaṁ"
      },
      {
        "english": "Until",
        "nepali": "सम्म",
        "newar": "सम्म",
        "pronunciation": "samma"
      },
      {
        "english": "Since",
        "nepali": "देखि",
        "newar": "देखि",
        "pronunciation": "dekhi"
      },
      {
        "english": "How long?",
        "nepali": "कति लामो?",
        "newar": "कति ल्हां?",
        "pronunciation": "kati lhāṁ?"
      },
      {
        "english": "How often?",
        "nepali": "कति पटक?",
        "newar": "कति पल्ट?",
        "pronunciation": "kati palṭa?"
      },
      {
        "english": "Every day",
        "nepali": "हरेक दिन",
        "newar": "प्रतेक दिन",
        "pronunciation": "pratek din"
      },
      {
        "english": "Every week",
        "nepali": "हरेक हप्ता",
        "newar": "प्रतेक सप्ता",
        "pronunciation": "pratek saptā"
      },
      {
        "english": "Calendar",
        "nepali": "पात्रो",
        "newar": "पात्रो",
        "pronunciation": "pātro"
      },
      {
        "english": "Clock",
        "nepali": "घडी",
        "newar": "घ्यंचा",
        "pronunciation": "ghyāṁchā"
      },
      {
        "english": "Watch",
        "nepali": "हात घडी",
        "newar": "लः घ्यंचा",
        "pronunciation": "la ghyāṁchā"
      },
      {
        "english": "Sunrise",
        "nepali": "सूर्योदय",
        "newar": "सूर्योदय",
        "pronunciation": "sūryodaya"
      },
      {
        "english": "Sunset",
        "nepali": "सूर्यास्त",
        "newar": "सूर्यास्त",
        "pronunciation": "sūryāsta"
      },
      {
        "english": "Noon",
        "nepali": "दिउँसो",
        "newar": "द्ये",
        "pronunciation": "dyē"
      },
      {
        "english": "Midnight",
        "nepali": "मध्यरात",
        "newar": "मज्हा बनी",
        "pronunciation": "majhā bani"
      },
      {
        "english": "Dawn",
        "nepali": "बिहानी",
        "newar": "बिन्हेसि",
        "pronunciation": "binhesi"
      },
      {
        "english": "Dusk",
        "nepali": "बेलुकी",
        "newar": "बाखंसि",
        "pronunciation": "bākhaṁsi"
      },
      {
        "english": "Anniversary",
        "nepali": "वार्षिकोत्सव",
        "newar": "वार्षिकोत्सव",
        "pronunciation": "bārṣikotsav"
      },
      {
        "english": "Holiday",
        "nepali": "बिदा",
        "newar": "बिदा",
        "pronunciation": "bidā"
      },
      {
        "english": "Festival",
        "nepali": "त्यौहार",
        "newar": "त्यौहार",
        "pronunciation": "tyauhār"
      },
      {
        "english": "Day after tomorrow",
        "nepali": "पर्सि",
        "newar": "न्ह्यांम्ह्यां",
        "pronunciation": "nhyāṁ-mhyāṁ"
      },
      {
        "english": "Day before yesterday",
        "nepali": "अस्ति",
        "newar": "न्ह्यांन्ह्य",
        "pronunciation": "nhyāṁ-nhyē"
      },
      {
        "english": "Weekend",
        "nepali": "सप्ताहन्त",
        "newar": "सप्ताहन्त",
        "pronunciation": "saptāhanta"
      },
      {
        "english": "Birthday",
        "nepali": "जन्मदिन",
        "newar": "जन्मदिन",
        "pronunciation": "janamdin"
      },
      {
        "english": "Age",
        "nepali": "उमेर",
        "newar": "वय",
        "pronunciation": "waya"
      },
      {
        "english": "Century",
        "nepali": "शताब्दी",
        "newar": "शताब्दी",
        "pronunciation": "śatābdī"
      },
      {
        "english": "Decade",
        "nepali": "दशक",
        "newar": "दशक",
        "pronunciation": "daśak"
      },
      {
        "english": " Moment",
        "nepali": "क्षण",
        "newar": "क्षण",
        "pronunciation": "kṣaṇ"
      },
      {
        "english": "Period",
        "nepali": "अवधि",
        "newar": "अवधि",
        "pronunciation": "avadhi"
      },
      {
        "english": "Schedule",
        "nepali": "तालिका",
        "newar": "तालिका",
        "pronunciation": "tālikā"
      },
      {
        "english": "Appointment",
        "nepali": "भेटघाट",
        "newar": "भेटघाट",
        "pronunciation": "bheṭghāṭ"
      },
      {
        "english": "Deadline",
        "nepali": "अन्तिम म्याद",
        "newar": "अन्तिम म्याद",
        "pronunciation": "antim myād"
      },
      {
        "english": "Free time",
        "nepali": "फुर्सद",
        "newar": "फुर्सद",
        "pronunciation": "phursad"
      },
      {
        "english": "Busy",
        "nepali": "व्यस्त",
        "newar": "व्यस्त",
        "pronunciation": "vyasta"
      },
      {
        "english": "Leisure",
        "nepali": "बिस्तार",
        "newar": "बिस्तार",
        "pronunciation": "bistār"
      },
      {
        "english": "Timeless",
        "nepali": "कालातीत",
        "newar": "कालातीत",
        "pronunciation": "kālātīt"
      },
      {
        "english": "Time flies",
        "nepali": "समय चाँडो बित्छ",
        "newar": "बेला चां वनेछ",
        "pronunciation": "belā chāṁ wanecha"
      },
      {
        "english": "What's the time?",
        "nepali": "कति बजेको छ?",
        "newar": "कति बजेछ?",
        "pronunciation": "kati bajecha?"
      },
      {
        "english": "Half past two",
        "nepali": "दुई बजेर तीस",
        "newar": "न्हि बजेर पस्तीस",
        "pronunciation": "nhi bajera pastīs"
      },
      {
        "english": "Quarter past three",
        "nepali": "तीन बजेर पन्ध्र",
        "newar": "सिं बजेर पन्ध्र",
        "pronunciation": "sīṁ bajera pandhra"
      },
      {
        "english": "Quarter to four",
        "nepali": "चार बज्न पन्ध्र बाकी",
        "newar": "पि बज्न पन्ध्र बाकी",
        "pronunciation": "pi bajna pandhra bākī"
      }
    ],
    difficulty: "beginner",
    duration: 30,
    wordsCount: 70
  
},

9: {
    "id": 9,
    "title": "Animals & Pets",
    "description": "Common animals, pets, and related phrases",
    "content": [
      {
        "english": "Dog",
        "nepali": "कुकुर",
        "newar": "खिचा",
        "pronunciation": "khichā"
      },
      {
        "english": "Cat",
        "nepali": "बिरालो",
        "newar": "म्हेर्कु",
        "pronunciation": "mherku"
      },
      {
        "english": "Cow",
        "nepali": "गाई",
        "newar": "सा",
        "pronunciation": "sā"
      },
      {
        "english": "Goat",
        "nepali": "बाख्रा",
        "newar": "भे",
        "pronunciation": "bhe"
      },
      {
        "english": "Chicken",
        "nepali": "कुखुरा",
        "newar": "च्याः",
        "pronunciation": "chyāḥ"
      },
      {
        "english": "Bird",
        "nepali": "चरा",
        "newar": "झिं",
        "pronunciation": "jhiṁ"
      },
      {
        "english": "Fish",
        "nepali": "माछा",
        "newar": "ण्या",
        "pronunciation": "ṇyā"
      },
      {
        "english": "Mouse / Rat",
        "nepali": "मुसा",
        "newar": "च्वा",
        "pronunciation": "chwā"
      },
      {
        "english": "Horse",
        "nepali": "घोडा",
        "newar": "गोर्खे",
        "pronunciation": "gorkhe"
      },
      {
        "english": "Elephant",
        "nepali": "हात्ती",
        "newar": "किसि",
        "pronunciation": "kisi"
      },
      {
        "english": "Monkey",
        "nepali": "बाँदर",
        "newar": "माकु",
        "pronunciation": "māku"
      },
      {
        "english": "Tiger",
        "nepali": "बाघ",
        "newar": "ह्वा",
        "pronunciation": "hwā"
      },
      {
        "english": "Snake",
        "nepali": "सर्प",
        "newar": "भे",
        "pronunciation": "bhe"
      },
      {
        "english": "Buffalo",
        "nepali": "भैंसी",
        "newar": "तुं",
        "pronunciation": "tuṁ"
      },
      {
        "english": "Pig",
        "nepali": "सुँगुर",
        "newar": "पाः",
        "pronunciation": "pāḥ"
      },
      {
        "english": "Duck",
        "nepali": "हाँस",
        "newar": "हाँस",
        "pronunciation": "hā̃s"
      },
      {
        "english": "Sheep",
        "nepali": "भेडा",
        "newar": "भेडा",
        "pronunciation": "bheḍā"
      },
      {
        "english": "Pet",
        "nepali": "पाल्तु",
        "newar": "पाल्तु",
        "pronunciation": "pāltu"
      },
      {
        "english": "Animal",
        "nepali": "जनावर",
        "newar": "च्वनिगु",
        "pronunciation": "chwanigu"
      },
      {
        "english": "Tail",
        "nepali": "पुच्छर",
        "newar": "म्हिति",
        "pronunciation": "mhiti"
      },
      {
        "english": "Wing",
        "nepali": "पखेटा",
        "newar": "पखेटा",
        "pronunciation": "pakheṭā"
      },
      {
        "english": "Do you have a pet?",
        "nepali": "तपाईंसँग पाल्तु छ?",
        "newar": "छिंतः पाल्तु छ?",
        "pronunciation": "chhiṁtaḥ pāltu cha?"
      },
      {
        "english": "I have a dog.",
        "nepali": "मसँग कुकुर छ।",
        "newar": "जिगु खिचा छ।",
        "pronunciation": "jigu khichā cha."
      },
      {
        "english": "The cat is sleeping.",
        "nepali": "बिरालो सुतिरहेको छ।",
        "newar": "म्हेर्कु न्ह्यबिगु छ।",
        "pronunciation": "mherku nhyabigu cha."
      },
      {
        "english": "The bird is flying.",
        "nepali": "चरा उडिरहेको छ।",
        "newar": "झिं वायिगु छ।",
        "pronunciation": "jhiṁ vāyigu cha."
      },
      {
        "english": "What is this animal called?",
        "nepali": "यस जनावरलाई के भनिन्छ?",
        "newar": "बि च्वनिगुयात कं भनि?",
        "pronunciation": "bi chwaniguyāta kaṁ bhani?"
      },
      {
        "english": "I am afraid of snakes.",
        "nepali": "मलाई सर्पले डर लाग्छ।",
        "newar": "जितु भेये म्हरि लाग्।",
        "pronunciation": "jitu bheye mhari lāg."
      },
      {
        "english": "The cow gives milk.",
        "nepali": "गाईले दुध दिन्छ।",
        "newar": "साये दु दिन्छ।",
        "pronunciation": "sāye du dincha."
      },
      {
        "english": "That dog is big.",
        "nepali": "त्यो कुकुर ठूलो छ।",
        "newar": "ति खिचा ज्यापु खः।",
        "pronunciation": "ti khichā jyāpu kha."
      },
      {
        "english": "This is a small cat.",
        "nepali": "यो सानो बिरालो हो।",
        "newar": "बि चिं म्हेर्कु खः।",
        "pronunciation": "bi ciṁ mherku kha."
      }
    ],
    "difficulty": "beginner",
    "duration": 20,
    "wordsCount": 30
},


 10: {
    "id": 10,
    "title": "Body & Health",
    "description": "Body parts, health terms, and common medical phrases",
    "content": [
      {
        "english": "Head",
        "nepali": "टाउको",
        "newar": "छें",
        "pronunciation": "chẽ"
      },
      {
        "english": "Hair",
        "nepali": "कपाल",
        "newar": "सा",
        "pronunciation": "sā"
      },
      {
        "english": "Face",
        "nepali": "अनुहार",
        "newar": "म्हुतु",
        "pronunciation": "mhutu"
      },
      {
        "english": "Eye",
        "nepali": "आँखा",
        "newar": "मी",
        "pronunciation": "mī"
      },
      {
        "english": "Ear",
        "nepali": "कान",
        "newar": "न्ह्ये",
        "pronunciation": "nhyē"
      },
      {
        "english": "Nose",
        "nepali": "नाक",
        "newar": "न्हे",
        "pronunciation": "nhē"
      },
      {
        "english": "Mouth",
        "nepali": "मुख",
        "newar": "म्हु",
        "pronunciation": "mhu"
      },
      {
        "english": "Tooth",
        "nepali": "दाँत",
        "newar": "वा",
        "pronunciation": "wā"
      },
      {
        "english": "Tongue",
        "nepali": "जिब्रो",
        "newar": "छे",
        "pronunciation": "che"
      },
      {
        "english": "Neck",
        "nepali": "घाँटी",
        "newar": "घें",
        "pronunciation": "ghẽ"
      },
      {
        "english": "Shoulder",
        "nepali": "काँध",
        "newar": "कां",
        "pronunciation": "kāṁ"
      },
      {
        "english": "Arm",
        "nepali": "हात",
        "newar": "लः",
        "pronunciation": "la"
      },
      {
        "english": "Hand",
        "nepali": "हात",
        "newar": "लः",
        "pronunciation": "la"
      },
      {
        "english": "Finger",
        "nepali": "औंला",
        "newar": "लःछिं",
        "pronunciation": "la-chiṁ"
      },
      {
        "english": "Chest",
        "nepali": "छाती",
        "newar": "न्हापु",
        "pronunciation": "nhāpu"
      },
      {
        "english": "Heart",
        "nepali": "मुटु",
        "newar": "न्हूगु",
        "pronunciation": "nhūgu"
      },
      {
        "english": "Stomach",
        "nepali": "पेट",
        "newar": "न्हेपु",
        "pronunciation": "nhepu"
      },
      {
        "english": "Back",
        "nepali": "ढाड",
        "newar": "प्यू",
        "pronunciation": "pyū"
      },
      {
        "english": "Leg",
        "nepali": "खुट्टा",
        "newar": "ख्वः",
        "pronunciation": "khwa"
      },
      {
        "english": "Foot",
        "nepali": "गोडा",
        "newar": "ख्वःदो",
        "pronunciation": "khwa-do"
      },
      {
        "english": "Skin",
        "nepali": "छाला",
        "newar": "सा",
        "pronunciation": "sā"
      },
      {
        "english": "Bone",
        "nepali": "हड्डी",
        "newar": "हः",
        "pronunciation": "ha"
      },
      {
        "english": "Blood",
        "nepali": "रगत",
        "newar": "हि",
        "pronunciation": "hi"
      },
      {
        "english": "I am sick",
        "nepali": "म बिरामी छु",
        "newar": "जि बिरामी छु",
        "pronunciation": "ji birāmī chu"
      },
      {
        "english": "I have a fever",
        "nepali": "मलाई ज्वरो छ",
        "newar": "जितु ज्वरो छ",
        "pronunciation": "jitu jwaro cha"
      },
      {
        "english": "I have a headache",
        "nepali": "मेरो टाउको दुख्छ",
        "newar": "जिगु छें दुखय्",
        "pronunciation": "jigu chẽ dukhay"
      },
      {
        "english": "I have a stomach ache",
        "nepali": "मेरो पेट दुख्छ",
        "newar": "जिगु न्हेपु दुखय्",
        "pronunciation": "jigu nhepu dukhay"
      },
      {
        "english": "I have a cough",
        "nepali": "मलाई खोकी छ",
        "newar": "जितु खोकी छ",
        "pronunciation": "jitu khokī cha"
      },
      {
        "english": "I have a cold",
        "nepali": "मलाई रुघा छ",
        "newar": "जितु रुघा छ",
        "pronunciation": "jitu rughā cha"
      },
      {
        "english": "I feel dizzy",
        "nepali": "मलाई चक्कर आउँछ",
        "newar": "जितु चक्कर आय्",
        "pronunciation": "jitu chakkar āy"
      },
      {
        "english": "I feel nauseous",
        "nepali": "मलाई मच्काउँछ",
        "newar": "जितु मच्काय्",
        "pronunciation": "jitu machkāy"
      },
      {
        "english": "I am tired",
        "nepali": "म थाकेको छु",
        "newar": "जि थाके छु",
        "pronunciation": "ji thāke chu"
      },
      {
        "english": "I am hungry",
        "nepali": "मलाई भोक लाग्यो",
        "newar": "जितु भ्याखः लागे",
        "pronunciation": "jitu bhyākha lāge"
      },
      {
        "english": "I am thirsty",
        "nepali": "मलाई तिर्खा लाग्यो",
        "newar": "जितु तखाः लागे",
        "pronunciation": "jitu takhā lāge"
      },
      {
        "english": "Medicine",
        "nepali": "औषधि",
        "newar": "वैद्य",
        "pronunciation": "waidya"
      },
      {
        "english": "Doctor",
        "nepali": "डाक्टर",
        "newar": "डाक्टर",
        "pronunciation": "ḍākṭar"
      },
      {
        "english": "Hospital",
        "nepali": "अस्पताल",
        "newar": "अस्पताल",
        "pronunciation": "aspatal"
      },
      {
        "english": "Pain",
        "nepali": "दुखाइ",
        "newar": "दुखः",
        "pronunciation": "dukha"
      },
      {
        "english": "Pain here",
        "nepali": "यहाँ दुख्छ",
        "newar": "सुगं दुखय्",
        "pronunciation": "sugaṁ dukhay"
      },
      {
        "english": "It hurts",
        "nepali": "यो दुख्छ",
        "newar": "बि दुखय्",
        "pronunciation": "bi dukhay"
      },
      {
        "english": "Health",
        "nepali": "स्वास्थ्य",
        "newar": "स्वास्थ्य",
        "pronunciation": "swāsthya"
      },
      {
        "english": "Sick",
        "nepali": "बिरामी",
        "newar": "बिरामी",
        "pronunciation": "birāmī"
      },
      {
        "english": "Healthy",
        "nepali": "स्वस्थ",
        "newar": "स्वस्थ",
        "pronunciation": "swastha"
      },
      {
        "english": "Wound",
        "nepali": "घाउ",
        "newar": "घाउ",
        "pronunciation": "ghāu"
      },
      {
        "english": "Bandage",
        "nepali": "पट्टी",
        "newar": "पट्टी",
        "pronunciation": "paṭṭī"
      },
      {
        "english": "Pharmacy",
        "nepali": "फार्मेसी",
        "newar": "फार्मेसी",
        "pronunciation": "phārmesī"
      },
      {
        "english": "Emergency",
        "nepali": "आपतकाल",
        "newar": "आपतकाल",
        "pronunciation": "āpatkāl"
      },
      {
        "english": "Help me",
        "nepali": "मलाई मद्दत गर्नुहोस्",
        "newar": "जितु मद्दत याये",
        "pronunciation": "jitu maddata yāyē"
      },
      {
        "english": "I need a doctor",
        "nepali": "मलाई डाक्टर चाहियो",
        "newar": "जितु डाक्टर छ्वंग",
        "pronunciation": "jitu ḍākṭar chwanga"
      },
      {
        "english": "Where is the hospital?",
        "nepali": "अस्पताल कहाँ छ?",
        "newar": "अस्पताल सुगं खः?",
        "pronunciation": "aspatal sugaṁ kha?"
      },
      {
        "english": "Call an ambulance",
        "nepali": "एम्बुलेन्स बोलाउनुहोस्",
        "newar": "एम्बुलेन्स वनेय",
        "pronunciation": "embulens wanēya"
      },
      {
        "english": "Accident",
        "nepali": "दुर्घटना",
        "newar": "दुर्घटना",
        "pronunciation": "durghaṭanā"
      },
      {
        "english": "Fracture",
        "nepali": "भाँच्नु",
        "newar": "भाँच्नु",
        "pronunciation": "bhā̃chnu"
      },
      {
        "english": "Burn",
        "nepali": "पोल्नु",
        "newar": "पोल्नु",
        "pronunciation": "polnu"
      },
      {
        "english": "Fever",
        "nepali": "ज्वरो",
        "newar": "ज्वरो",
        "pronunciation": "jwaro"
      },
      {
        "english": "Cough",
        "nepali": "खोकी",
        "newar": "खोकी",
        "pronunciation": "khokī"
      },
      {
        "english": "Cold",
        "nepali": "रुघा",
        "newar": "रुघा",
        "pronunciation": "rughā"
      },
      {
        "english": "Allergy",
        "nepali": "एलर्जी",
        "newar": "एलर्जी",
        "pronunciation": "elarjī"
      },
      {
        "english": "Asthma",
        "nepali": "दम",
        "newar": "दम",
        "pronunciation": "dam"
      },
      {
        "english": "Diabetes",
        "nepali": "मधुमेह",
        "newar": "मधुमेह",
        "pronunciation": "madhumeha"
      },
      {
        "english": "Blood pressure",
        "nepali": "रक्तचाप",
        "newar": "रक्तचाप",
        "pronunciation": "raktachāp"
      },
      {
        "english": "Headache",
        "nepali": "टाउको दुखाइ",
        "newar": "छें दुखः",
        "pronunciation": "chẽ dukha"
      },
      {
        "english": "Stomach ache",
        "nepali": "पेट दुखाइ",
        "newar": "न्हेपु दुखः",
        "pronunciation": "nhepu dukha"
      },
      {
        "english": "Toothache",
        "nepali": "दाँत दुखाइ",
        "newar": "वा दुखः",
        "pronunciation": "wā dukha"
      },
      {
        "english": "Back pain",
        "nepali": "ढाड दुखाइ",
        "newar": "प्यू दुखः",
        "pronunciation": "pyū dukha"
      },
      {
        "english": "Muscle pain",
        "nepali": "मांसपेशी दुखाइ",
        "newar": "मांसपेशी दुखः",
        "pronunciation": "mānsapeshī dukha"
      },
      {
        "english": "Chest pain",
        "nepali": "छाती दुखाइ",
        "newar": "न्हापु दुखः",
        "pronunciation": "nhāpu dukha"
      },
      {
        "english": "Ear pain",
        "nepali": "कान दुखाइ",
        "newar": "न्ह्ये दुखः",
        "pronunciation": "nhyē dukha"
      },
      {
        "english": "Sore throat",
        "nepali": "घाँटी दुखाइ",
        "newar": "घें दुखः",
        "pronunciation": "ghẽ dukha"
      },
      {
        "english": "I feel better",
        "nepali": "म राम्रो महसुस गर्छु",
        "newar": "जि ल्हेये मचेकु",
        "pronunciation": "ji lhēyē macheku"
      },
      {
        "english": "I feel worse",
        "nepali": "म बढी नराम्रो महसुस गर्छु",
        "newar": "जि बढी न्हगु मचेकु",
        "pronunciation": "ji baḍhī nhagu macheku"
      },
      {
        "english": "Get well soon",
        "nepali": "चाँडो निको हुनुहोस्",
        "newar": "चां निको वये",
        "pronunciation": "chāṁ niko wayē"
      },
      {
        "english": "Rest",
        "nepali": "आराम",
        "newar": "आराम",
        "pronunciation": "ārām"
      },
      {
        "english": "Sleep",
        "nepali": "निद्रा",
        "newar": "न्हे",
        "pronunciation": "nhē"
      },
      {
        "english": "Water",
        "nepali": "पानी",
        "newar": "लः",
        "pronunciation": "la"
      },
      {
        "english": "Food",
        "nepali": "खाना",
        "newar": "न्हेगु",
        "pronunciation": "nhegu"
      },
      {
        "english": "Breathe",
        "nepali": "सास फेर्नु",
        "newar": "सास ल्हाये",
        "pronunciation": "sās lhāyē"
      },
      {
        "english": "Deep breath",
        "nepali": "गहिरो सास",
        "newar": "गहिरो सास",
        "pronunciation": "gahiro sās"
      },
      {
        "english": "Exercise",
        "nepali": "व्यायाम",
        "newar": "व्यायाम",
        "pronunciation": "vyāyām"
      },
      {
        "english": "Yoga",
        "nepali": "योग",
        "newar": "योग",
        "pronunciation": "yog"
      },
      {
        "english": "Massage",
        "nepali": "मालिस",
        "newar": "मालिस",
        "pronunciation": "mālis"
      },
      {
        "english": "Operation",
        "nepali": "अपरेशन",
        "newar": "अपरेशन",
        "pronunciation": "apareshan"
      },
      {
        "english": "Medicine",
        "nepali": "दबाई",
        "newar": "दबाई",
        "pronunciation": "dabāī"
      },
      {
        "english": "Injection",
        "nepali": "इन्जेक्सन",
        "newar": "इन्जेक्सन",
        "pronunciation": "injeksan"
      },
      {
        "english": "X-ray",
        "nepali": "एक्स-रे",
        "newar": "एक्स-रे",
        "pronunciation": "eks-re"
      },
      {
        "english": "Test",
        "nepali": "परीक्षण",
        "newar": "परीक्षण",
        "pronunciation": "parīkṣaṇ"
      },
      {
        "english": "Result",
        "nepali": "नतिजा",
        "newar": "नतिजा",
        "pronunciation": "natijā"
      },
      {
        "english": "Appointment",
        "nepali": "भेटघाट",
        "newar": "भेटघाट",
        "pronunciation": "bheṭghāṭ"
      },
      {
        "english": "Prescription",
        "nepali": "निर्धारण",
        "newar": "निर्धारण",
        "pronunciation": "nirdhāraṇ"
      },
      {
        "english": "Dosage",
        "nepali": "मात्रा",
        "newar": "मात्रा",
        "pronunciation": "mātrā"
      },
      {
        "english": "Prevention",
        "nepali": "रोकथाम",
        "newar": "रोकथाम",
        "pronunciation": "rokathām"
      },
      {
        "english": "Treatment",
        "nepali": "उपचार",
        "newar": "उपचार",
        "pronunciation": "upachār"
      },
      {
        "english": "Recovery",
        "nepali": "निको हुनु",
        "newar": "निको वये",
        "pronunciation": "niko wayē"
      },
      {
        "english": "Patient",
        "nepali": "बिरामी",
        "newar": "बिरामी",
        "pronunciation": "birāmī"
      },
      {
        "english": "Nurse",
        "nepali": "नर्स",
        "newar": "नर्स",
        "pronunciation": "nars"
      },
      {
        "english": "Dentist",
        "nepali": "दन्त चिकित्सक",
        "newar": "दन्त चिकित्सक",
        "pronunciation": "danta chikitsak"
      },
      {
        "english": "Specialist",
        "nepali": "विशेषज्ञ",
        "newar": "विशेषज्ञ",
        "pronunciation": "visheshagya"
      },
      {
        "english": "Clinic",
        "nepali": "क्लिनिक",
        "newar": "क्लिनिक",
        "pronunciation": "klinik"
      },
      {
        "english": "Waiting room",
        "nepali": "पर्खने कोठा",
        "newar": "पर्खने छे",
        "pronunciation": "parkhane che"
      },
      {
        "english": "Emergency room",
        "nepali": "आपतकालीन कोठा",
        "newar": "आपतकालीन छे",
        "pronunciation": "āpatkālīn che"
      },
      {
        "english": "Ward",
        "nepali": "वार्ड",
        "newar": "वार्ड",
        "pronunciation": "vārḍ"
      },
      {
        "english": "Surgery",
        "nepali": "सर्जरी",
        "newar": "सर्जरी",
        "pronunciation": "sarjarī"
      },
      {
        "english": "Anesthesia",
        "nepali": "बेहोसी",
        "newar": "बेहोसी",
        "pronunciation": "behosī"
      },
      {
        "english": "Painkiller",
        "nepali": "दुखाइ निवारक",
        "newar": "दुखः निवारक",
        "pronunciation": "dukha nivārak"
      },
      {
        "english": "Antibiotic",
        "nepali": "एन्टिबायोटिक",
        "newar": "एन्टिबायोटिक",
        "pronunciation": "enṭibāyoṭik"
      },
      {
        "english": "Vitamin",
        "nepali": "भिटामिन",
        "newar": "भिटामिन",
        "pronunciation": "bhiṭāmin"
      },
      {
        "english": "Calcium",
        "nepali": "क्याल्सियम",
        "newar": "क्याल्सियम",
        "pronunciation": "kyālsiyam"
      },
      {
        "english": "Iron",
        "nepali": "फलाम",
        "newar": "फलाम",
        "pronunciation": "phalām"
      },
      {
        "english": "Protein",
        "nepali": "प्रोटिन",
        "newar": "प्रोटिन",
        "pronunciation": "proṭin"
      },
      {
        "english": "Diet",
        "nepali": "आहार",
        "newar": "आहार",
        "pronunciation": "āhār"
      },
      {
        "english": "Nutrition",
        "nepali": "पोषण",
        "newar": "पोषण",
        "pronunciation": "poshaṇ"
      },
      {
        "english": "Hygiene",
        "nepali": "सरसफाइ",
        "newar": "सरसफाइ",
        "pronunciation": "sarasaphāī"
      },
      {
        "english": "Clean",
        "nepali": "सफा",
        "newar": "सफा",
        "pronunciation": "saphā"
      },
      {
        "english": "Wash hands",
        "nepali": "हात धुनु",
        "newar": "लः मजाये",
        "pronunciation": "la majāyē"
      },
      {
        "english": "Virus",
        "nepali": "भाइरस",
        "newar": "भाइरस",
        "pronunciation": "bhāiras"
      },
      {
        "english": "Bacteria",
        "nepali": "ब्याक्टेरिया",
        "newar": "ब्याक्टेरिया",
        "pronunciation": "byākṭeriyā"
      },
      {
        "english": "Infection",
        "nepali": "संक्रमण",
        "newar": "संक्रमण",
        "pronunciation": "saṅkramaṇ"
      },
      {
        "english": "Fever",
        "nepali": "तातो",
        "newar": "तातो",
        "pronunciation": "tāto"
      },
      {
        "english": "Cold",
        "nepali": "चिसो",
        "newar": "चिसो",
        "pronunciation": "chiso"
      },
      {
        "english": "Cough syrup",
        "nepali": "खोकी सिरप",
        "newar": "खोकी सिरप",
        "pronunciation": "khokī sirap"
      },
      {
        "english": "Health is wealth",
        "nepali": "स्वास्थ्य नै धन हो",
        "newar": "स्वास्थ्य न्हूगु धन खः",
        "pronunciation": "swāsthya nhūgu dhan kha"
      }
    ],
    "difficulty": "intermediate",
    "duration": 45,
    "wordsCount": 100
  
},

11:{
      "id": 11,
      "title": "Clothes & Accessories",
      "description": "Common clothing items, accessories, and related phrases",
      "content": [
        {
          "english": "Shirt",
          "nepali": "सर्ट",
          "newar": "सर्ट",
          "pronunciation": "sart"
        },
        {
          "english": "Pants / Trousers",
          "nepali": "प्यान्ट",
          "newar": "प्यान्ट",
          "pronunciation": "pyānt"
        },
        {
          "english": "Shoes",
          "nepali": "जुत्ता",
          "newar": "ह्वा",
          "pronunciation": "hwā"
        },
        {
          "english": "Hat",
          "nepali": "टोपी",
          "newar": "टोपी",
          "pronunciation": "ṭopī"
        },
        {
          "english": "Coat",
          "nepali": "कोट",
          "newar": "कोट",
          "pronunciation": "koṭ"
        },
        {
          "english": "Socks",
          "nepali": "मोजा",
          "newar": "मोजा",
          "pronunciation": "mojā"
        },
        {
          "english": "Dress",
          "nepali": "पोशाक",
          "newar": "लासा",
          "pronunciation": "lāsā"
        },
        {
          "english": "Skirt",
          "nepali": "स्कर्ट",
          "newar": "स्कर्ट",
          "pronunciation": "skart"
        },
        {
          "english": "Jacket",
          "nepali": "ज्याकेट",
          "newar": "ज्याकेट",
          "pronunciation": "jyākeṭ"
        },
        {
          "english": "Sweater",
          "nepali": "स्वेटर",
          "newar": "स्वेटर",
          "pronunciation": "sveṭar"
        },
        {
          "english": "Scarf",
          "nepali": "स्कार्फ",
          "newar": "स्कार्फ",
          "pronunciation": "skārf"
        },
        {
          "english": "Gloves",
          "nepali": "पन्जा",
          "newar": "ल्हासा",
          "pronunciation": "lhāsā"
        },
        {
          "english": "Belt",
          "nepali": "बेल्ट",
          "newar": "बेल्ट",
          "pronunciation": "belṭ"
        },
        {
          "english": "Bag",
          "nepali": "झोला",
          "newar": "ब्याग",
          "pronunciation": "byāg"
        },
        {
          "english": "Ring",
          "nepali": "अौंठी",
          "newar": "लासा",
          "pronunciation": "lāsā"
        },
        {
          "english": "Necklace",
          "nepali": "माला",
          "newar": "माला",
          "pronunciation": "mālā"
        },
        {
          "english": "Earrings",
          "nepali": "इयरिंग",
          "newar": "ल्यापा",
          "pronunciation": "lyāpā"
        },
        {
          "english": "Watch",
          "nepali": "घडी",
          "newar": "घडी",
          "pronunciation": "ghaḍī"
        },
        {
          "english": "Sunglasses",
          "nepali": "सनग्लास",
          "newar": "गोगल",
          "pronunciation": "gogal"
        },
        {
          "english": "Umbrella",
          "nepali": "छाता",
          "newar": "हत्ता",
          "pronunciation": "hattā"
        },
        {
          "english": "Uniform",
          "nepali": "वर्दी",
          "newar": "वर्दी",
          "pronunciation": "vardī"
        },
        {
          "english": "T-shirt",
          "nepali": "टी-सर्ट",
          "newar": "टी-सर्ट",
          "pronunciation": "ṭī-sart"
        },
        {
          "english": "Clothes",
          "nepali": "लुगा",
          "newar": "वास",
          "pronunciation": "vās"
        },
        {
          "english": "Pocket",
          "nepali": "खल्ती",
          "newar": "खल्ती",
          "pronunciation": "khaltī"
        },
        {
          "english": "Button",
          "nepali": "बटन",
          "newar": "बटन",
          "pronunciation": "baṭan"
        },
        {
          "english": "Zipper",
          "nepali": "चेन",
          "newar": "जिपर",
          "pronunciation": "jipar"
        },
        {
          "english": "Size",
          "nepali": "नाप",
          "newar": "नाप",
          "pronunciation": "nāp"
        },
        {
          "english": "Color",
          "nepali": "रंग",
          "newar": "रंग",
          "pronunciation": "rang"
        },
        {
          "english": "Fashion",
          "nepali": "फेसन",
          "newar": "फेसन",
          "pronunciation": "phesan"
        },
        {
          "english": "New",
          "nepali": "नयाँ",
          "newar": "न्हू",
          "pronunciation": "nhū"
        },
        {
          "english": "Old",
          "nepali": "पुरानो",
          "newar": "च्वन",
          "pronunciation": "chwan"
        },
        {
          "english": "Clean",
          "nepali": "सफा",
          "newar": "सफा",
          "pronunciation": "saphā"
        },
        {
          "english": "Dirty",
          "nepali": "फोहोर",
          "newar": "म्हिकु",
          "pronunciation": "mhiku"
        },
        {
          "english": "Warm",
          "nepali": "न्यानो",
          "newar": "तातो",
          "pronunciation": "tāto"
        },
        {
          "english": "Cotton",
          "nepali": "कपास",
          "newar": "कपास",
          "pronunciation": "kapās"
        },
        {
          "english": "Wool",
          "nepali": "ऊन",
          "newar": "ऊन",
          "pronunciation": "ūn"
        },
        {
          "english": "Leather",
          "nepali": "चर्म",
          "newar": "चर्म",
          "pronunciation": "carma"
        },
        {
          "english": "Silk",
          "nepali": "रेशम",
          "newar": "रेशम",
          "pronunciation": "reśam"
        },
        {
          "english": "To wear",
          "nepali": "लगाउनु",
          "newar": "लहिं",
          "pronunciation": "lahiṁ"
        },
        {
          "english": "To take off",
          "nepali": "फुकाल्नु",
          "newar": "बिले",
          "pronunciation": "bile"
        },
        {
          "english": "To wash",
          "nepali": "धुनु",
          "newar": "ने",
          "pronunciation": "ne"
        },
        {
          "english": "To buy",
          "nepali": "किन्नु",
          "newar": "किने",
          "pronunciation": "kine"
        },
        {
          "english": "To sell",
          "nepali": "बेच्नु",
          "newar": "बिचे",
          "pronunciation": "bice"
        },
        {
          "english": "Expensive",
          "nepali": "महँगो",
          "newar": "म्हग्ग",
          "pronunciation": "mhagg"
        },
        {
          "english": "Cheap",
          "nepali": "सस्तो",
          "newar": "सस्तो",
          "pronunciation": "sasto"
        },
        {
          "english": "Beautiful",
          "nepali": "सुन्दर",
          "newar": "म्हेकु",
          "pronunciation": "mheku"
        },
        {
          "english": "Comfortable",
          "nepali": "आरामदायी",
          "newar": "आरामदायी",
          "pronunciation": "ārāmdāyī"
        },
        {
          "english": "Tight",
          "nepali": "टाँगो",
          "newar": "टाँगो",
          "pronunciation": "ṭāṁgo"
        },
        {
          "english": "Loose",
          "nepali": "ढिलो",
          "newar": "ढिलो",
          "pronunciation": "ḍhilo"
        },
        {
          "english": "What are you wearing?",
          "nepali": "तपाईं के लगाउनुभएको छ?",
          "newar": "छिंतः कं लहिंबि?",
          "pronunciation": "chhintaḥ kan lahiṁbi?"
        },
        {
          "english": "I am wearing a red shirt.",
          "nepali": "मैले रातो सर्ट लगाएको छु।",
          "newar": "जिगु ह्यां सर्ट लहिंबि।",
          "pronunciation": "jigu hyāṁ sart lahiṁbi."
        },
        {
          "english": "These shoes are new.",
          "nepali": "यी जुत्ता नयाँ छन्।",
          "newar": "बि ह्वा न्हू खः।",
          "pronunciation": "bi hwā nhū kha."
        },
        {
          "english": "That dress is beautiful.",
          "nepali": "त्यो पोशाक सुन्दर छ।",
          "newar": "ति लासा म्हेकु खः।",
          "pronunciation": "ti lāsā mheku kha."
        },
        {
          "english": "I need to buy a warm coat.",
          "nepali": "मलाई न्यानो कोट किन्नु छ।",
          "newar": "जितु तातो कोट किने मजु।",
          "pronunciation": "jitu tāto koṭ kine maju."
        },
        {
          "english": "Where did you buy this bag?",
          "nepali": "तपाईंले यो झोला कहाँ किन्नुभयो?",
          "newar": "छिंतः बि ब्याग कते किने?",
          "pronunciation": "chhintaḥ bi byāg kate kine?"
        },
        {
          "english": "How much does this shirt cost?",
          "nepali": "यो सर्टको कति मूल्य छ?",
          "newar": "बि सर्ट कति मूल्य खः?",
          "pronunciation": "bi sart kati mūlya kha?"
        },
        {
          "english": "This sweater is made of wool.",
          "nepali": "यो स्वेटर ऊनले बनेको हो।",
          "newar": "बि स्वेटर ऊनले बनेगु खः।",
          "pronunciation": "bi sveṭar ūnle banegu kha."
        },
        {
          "english": "I like your hat.",
          "nepali": "मलाई तपाईंको टोपी मन पर्छ।",
          "newar": "जितु छिंतःगु टोपी मदु।",
          "pronunciation": "jitu chhintaḥgu ṭopī madu."
        },
        {
          "english": "Please take off your shoes.",
          "nepali": "कृपया आफ्नो जुत्ता फुकाल्नुहोस्।",
          "newar": "कृपया छिंतःगु ह्वा बिलेय।",
          "pronunciation": "kṛpayā chhintaḥgu hwa bileya."
        },
        {
          "english": "My clothes are dirty.",
          "nepali": "मेरा लुगा फोहोर छन्।",
          "newar": "जिगु वास म्हिकु खः।",
          "pronunciation": "jigu vās mhiku kha."
        },
        {
          "english": "I will wash my clothes tomorrow.",
          "nepali": "म भोलि मेरा लुगा धुन्छु।",
          "newar": "जि न्ह्यबू जिगु वास नेगु।",
          "pronunciation": "ji nhyabū jigu vās negu."
        },
        {
          "english": "This belt is too tight.",
          "nepali": "यो बेल्ट धेरै टाँगो छ।",
          "newar": "बि बेल्ट धेरै टाँगो खः।",
          "pronunciation": "bi belṭ dherai ṭāṁgo kha."
        },
        {
          "english": "Do you have this in a larger size?",
          "nepali": "तपाईंसँग यो ठूलो साइजमा छ?",
          "newar": "छिंतः बि ज्यापु नापया छ?",
          "pronunciation": "chhintaḥ bi jyāpu nāpayā cha?"
        },
        {
          "english": "I prefer cotton clothes in summer.",
          "nepali": "गर्मीमा मलाई कपासको लुगा मन पर्छ।",
          "newar": "गर्मीय् जितु कपासगु वास मदु।",
          "pronunciation": "garmīy jitu kapāsgu vās madu."
        },
        {
          "english": "She is wearing a silk dress.",
          "nepali": "उनले रेशमको पोशाक लगाएकी छिन्।",
          "newar": "वां लासा रेशम लहिंबि।",
          "pronunciation": "vāṁ lāsā reśam lahiṁbi."
        },
        {
          "english": "He lost his gloves.",
          "nepali": "उसको पन्जा हरायो।",
          "newar": "वयगु ल्हासा बिलेबि।",
          "pronunciation": "wayagu lhāsā bilebi."
        },
        {
          "english": "I found a ring.",
          "nepali": "मैले एउटा अौंठी भेट्टाएँ।",
          "newar": "जि लासा भेटाय।",
          "pronunciation": "ji lāsā bheṭāya."
        },
        {
          "english": "This is a traditional dress.",
          "nepali": "यो परम्परागत पोशाक हो।",
          "newar": "बि परम्परागत लासा खः।",
          "pronunciation": "bi paramparāgat lāsā kha."
        },
        {
          "english": "Fashion changes quickly.",
          "nepali": "फेसन चाँडै बदलिन्छ।",
          "newar": "फेसन चाँडै बदलिन्छ।",
          "pronunciation": "phesan cā̃ḍai badalincha."
        }
      ],
      "difficulty": "beginner",
      "duration": 25,
      "wordsCount": 54
},

12: {
    "id": 12,
    "title": "Professions & Occupations",
    "description": "Common jobs, professions, and work-related terms",
    "content": [
      {
        "english": "Teacher",
        "nepali": "शिक्षक",
        "newar": "शिक्षक",
        "pronunciation": "śikṣak"
      },
      {
        "english": "Doctor",
        "nepali": "डाक्टर",
        "newar": "डाक्टर",
        "pronunciation": "ḍākṭar"
      },
      {
        "english": "Engineer",
        "nepali": "इन्जिनियर",
        "newar": "इन्जिनियर",
        "pronunciation": "injiniyar"
      },
      {
        "english": "Farmer",
        "nepali": "किसान",
        "newar": "किसान",
        "pronunciation": "kisān"
      },
      {
        "english": "Student",
        "nepali": "विद्यार्थी",
        "newar": "विद्यार्थी",
        "pronunciation": "vidyārthī"
      },
      {
        "english": "Businessperson",
        "nepali": "व्यवसायी",
        "newar": "व्यवसायी",
        "pronunciation": "vyavasāyī"
      },
      {
        "english": "Shopkeeper",
        "nepali": "पसले",
        "newar": "पसलम्ह",
        "pronunciation": "pasalmha"
      },
      {
        "english": "Driver",
        "nepali": "चालक",
        "newar": "चालक",
        "pronunciation": "chālak"
      },
      {
        "english": "Nurse",
        "nepali": "नर्स",
        "newar": "नर्स",
        "pronunciation": "nars"
      },
      {
        "english": "Tailor",
        "nepali": "दर्जी",
        "newar": "दर्जी",
        "pronunciation": "darjī"
      },
      {
        "english": "Carpenter",
        "nepali": "बढई",
        "newar": "बढई",
        "pronunciation": "baḍhaī"
      },
      {
        "english": "Electrician",
        "nepali": "इलेक्ट्रिसियन",
        "newar": "इलेक्ट्रिसियन",
        "pronunciation": "ilekṭrisiyan"
      },
      {
        "english": "Plumber",
        "nepali": "प्लम्बर",
        "newar": "प्लम्बर",
        "pronunciation": "plambar"
      },
      {
        "english": "Painter",
        "nepali": "रंगमिल",
        "newar": "रंगमिल",
        "pronunciation": "raṁgamil"
      },
      {
        "english": "Cook",
        "nepali": "बुढो",
        "newar": "बुढो",
        "pronunciation": "buḍho"
      },
      {
        "english": "Waiter",
        "nepali": "वेटर",
        "newar": "वेटर",
        "pronunciation": "veṭar"
      },
      {
        "english": "Cleaner",
        "nepali": "सफाई कर्मचारी",
        "newar": "सफाई कर्मचारी",
        "pronunciation": "saphāī karmachārī"
      },
      {
        "english": "Security guard",
        "nepali": "सुरक्षा गार्ड",
        "newar": "सुरक्षा गार्ड",
        "pronunciation": "surakṣā gārḍ"
      },
      {
        "english": "Police officer",
        "nepali": "प्रहरी",
        "newar": "प्रहरी",
        "pronunciation": "praharī"
      },
      {
        "english": "Soldier",
        "nepali": "सैनिक",
        "newar": "सैनिक",
        "pronunciation": "sainik"
      },
      {
        "english": "Journalist",
        "nepali": "पत्रकार",
        "newar": "पत्रकार",
        "pronunciation": "patrakār"
      },
      {
        "english": "Lawyer",
        "nepali": "वकिल",
        "newar": "वकिल",
        "pronunciation": "vakil"
      },
      {
        "english": "Accountant",
        "nepali": "लेखापाल",
        "newar": "लेखापाल",
        "pronunciation": "lekhāpāl"
      },
      {
        "english": "Banker",
        "nepali": "बैंककर्मी",
        "newar": "बैंककर्मी",
        "pronunciation": "baiṅkakarmī"
      },
      {
        "english": "Manager",
        "nepali": "प्रबन्धक",
        "newar": "प्रबन्धक",
        "pronunciation": "prabandhak"
      },
      {
        "english": "Secretary",
        "nepali": "सचिव",
        "newar": "सचिव",
        "pronunciation": "sachiv"
      },
      {
        "english": "What is your occupation?",
        "nepali": "तपाईंको पेशा के हो?",
        "newar": "छीगु पेशा सु खः?",
        "pronunciation": "chīgu peśā su kha?"
      },
      {
        "english": "I am a teacher",
        "nepali": "म एक शिक्षक हुँ",
        "newar": "जि शिक्षक जु",
        "pronunciation": "ji śikṣak ju"
      },
      {
        "english": "Where do you work?",
        "nepali": "तपाईं कहाँ काम गर्नुहुन्छ?",
        "newar": "छी सुगं काम यान?",
        "pronunciation": "chī sugaṁ kām yān?"
      },
      {
        "english": "I work in an office",
        "nepali": "म अफिसमा काम गर्छु",
        "newar": "जि अफिसं काम ये",
        "pronunciation": "ji aphisaṁ kām ye"
      },
      {
        "english": "I'm looking for a job",
        "nepali": "म काम खोजिरहेको छु",
        "newar": "जि काम खुजिरहे छु",
        "pronunciation": "ji kām khujirahe chu"
      },
      {
        "english": "I'm retired",
        "nepali": "म निवृत्त भएको छु",
        "newar": "जि निवृत्त वये छु",
        "pronunciation": "ji nivṛtta waye chu"
      },
      {
        "english": "I'm unemployed",
        "nepali": "म बेरोजगार छु",
        "newar": "जि बेरोजगार छु",
        "pronunciation": "ji berojgār chu"
      },
      {
        "english": "What time do you start work?",
        "nepali": "तपाईं कति बजे काम सुरु गर्नुहुन्छ?",
        "newar": "छी कति बजे काम सुरु यान?",
        "pronunciation": "chī kati baje kām suru yān?"
      },
      {
        "english": "I start at 9 AM",
        "nepali": "म 9 बजे सुरु गर्छु",
        "newar": "जि 9 बजे सुरु ये",
        "pronunciation": "ji 9 baje suru ye"
      },
      {
        "english": "What time do you finish work?",
        "nepali": "तपाईं कति बजे काम सक्नुहुन्छ?",
        "newar": "छी कति बजे काम सक्यान?",
        "pronunciation": "chī kati baje kām sakyān?"
      },
      {
        "english": "I finish at 5 PM",
        "nepali": "म 5 बजे सक्छु",
        "newar": "जि 5 बजे सक्ये",
        "pronunciation": "ji 5 baje sakye"
      },
      {
        "english": "I need to go to work",
        "nepali": "मलाई काममा जानुपर्छ",
        "newar": "जितु कामं वने लागे",
        "pronunciation": "jitu kāmaṁ wane lāge"
      },
      {
        "english": "I have a day off today",
        "nepali": "आज मेरो बिदा छ",
        "newar": "गि जिगु बिदा खः",
        "pronunciation": "gi jigu bidā kha"
      },
      {
        "english": "I'm on vacation",
        "nepali": "म बिदामा छु",
        "newar": "जि बिदां छु",
        "pronunciation": "ji bidāṁ chu"
      },
      {
        "english": "I'm busy with work",
        "nepali": "म कामले व्यस्त छु",
        "newar": "जि कामले व्यस्त छु",
        "pronunciation": "ji kāmale vyasta chu"
      },
      {
        "english": "I have a meeting",
        "nepali": "मेरो बैठक छ",
        "newar": "जिगु बैठक खः",
        "pronunciation": "jigu baiṭhak kha"
      },
      {
        "english": "I need a break",
        "nepali": "मलाई बिराम चाहियो",
        "newar": "जितु बिराम छ्वंग",
        "pronunciation": "jitu birām chwanga"
      },
      {
        "english": "How much is the salary?",
        "nepali": "तलब कति छ?",
        "newar": "तलब कति खः?",
        "pronunciation": "talab kati kha?"
      },
      {
        "english": "This is my workplace",
        "nepali": "यो मेरो काम गर्ने ठाउँ हो",
        "newar": "बि जिगु काम याने थां खः",
        "pronunciation": "bi jigu kām yāne thāṁ kha"
      },
      {
        "english": "I work from home",
        "nepali": "म घरबाट काम गर्छु",
        "newar": "जि छेंबत काम ये",
        "pronunciation": "ji chẽbata kām ye"
      },
      {
        "english": "I have experience in this field",
        "nepali": "मसँग यस क्षेत्रमा अनुभव छ",
        "newar": "जितु बि क्षेत्रं अनुभव खः",
        "pronunciation": "jitu bi kṣetraṁ anubhava kha"
      },
      {
        "english": "I'm learning new skills",
        "nepali": "म नयाँ सीप सिकिरहेको छु",
        "newar": "जि न्हूगु सीप सिकिरहे छु",
        "pronunciation": "ji nhūgu sīp sikirahe chu"
      },
      {
        "english": "This is my profession",
        "nepali": "यो मेरो पेशा हो",
        "newar": "बि जिगु पेशा खः",
        "pronunciation": "bi jigu peśā kha"
      },
      {
        "english": "I love my job",
        "nepali": "मलाई मेरो काम मन पर्छ",
        "newar": "जितु जिगु काम मन पर्छ",
        "pronunciation": "jitu jigu kām man parcha"
      },
      {
        "english": "I'm tired from work",
        "nepali": "म कामबाट थाकेको छु",
        "newar": "जि कामबत थाके छु",
        "pronunciation": "ji kāmabata thāke chu"
      },
      {
        "english": "I need to find a new job",
        "nepali": "मलाई नयाँ काम खोज्नुपर्छ",
        "newar": "जितु न्हूगु काम खुज्ने लागे",
        "pronunciation": "jitu nhūgu kām khujne lāge"
      },
      {
        "english": "Work",
        "nepali": "काम",
        "newar": "काम",
        "pronunciation": "kām"
      },
      {
        "english": "Job",
        "nepali": "जागिर",
        "newar": "जागिर",
        "pronunciation": "jāgir"
      },
      {
        "english": "Office",
        "nepali": "अफिस",
        "newar": "अफिस",
        "pronunciation": "aphis"
      },
      {
        "english": "Company",
        "nepali": "कम्पनी",
        "newar": "कम्पनी",
        "pronunciation": "kampanī"
      },
      {
        "english": "Factory",
        "nepali": "कारखाना",
        "newar": "कारखाना",
        "pronunciation": "kārakhānā"
      },
      {
        "english": "Salary",
        "nepali": "तलब",
        "newar": "तलब",
        "pronunciation": "talab"
      },
      {
        "english": "Experience",
        "nepali": "अनुभव",
        "newar": "अनुभव",
        "pronunciation": "anubhava"
      },
      {
        "english": "Skill",
        "nepali": "सीप",
        "newar": "सीप",
        "pronunciation": "sīp"
      },
      {
        "english": "Education",
        "nepali": "शिक्षा",
        "newar": "शिक्षा",
        "pronunciation": "śikṣā"
      },
      {
        "english": "Training",
        "nepali": "तालिम",
        "newar": "तालिम",
        "pronunciation": "tālim"
      },
      {
        "english": "Interview",
        "nepali": "अन्तर्वार्ता",
        "newar": "अन्तर्वार्ता",
        "pronunciation": "antarvārtā"
      },
      {
        "english": "Resume",
        "nepali": "बियोगपत्र",
        "newar": "बियोगपत्र",
        "pronunciation": "biyogapatra"
      },
      {
        "english": "Application",
        "nepali": "आवेदन",
        "newar": "आवेदन",
        "pronunciation": "āvedan"
      },
      {
        "english": "Employer",
        "nepali": "रोजगारदाता",
        "newar": "रोजगारदाता",
        "pronunciation": "rojgāradātā"
      },
      {
        "english": "Employee",
        "nepali": "कर्मचारी",
        "newar": "कर्मचारी",
        "pronunciation": "karmachārī"
      },
      {
        "english": "Colleague",
        "nepali": "सहकर्मी",
        "newar": "सहकर्मी",
        "pronunciation": "sahakarmī"
      },
      {
        "english": "Boss",
        "nepali": "मालिक",
        "newar": "मालिक",
        "pronunciation": "mālik"
      },
      {
        "english": "Client",
        "nepali": "ग्राहक",
        "newar": "ग्राहक",
        "pronunciation": "grāhak"
      },
      {
        "english": "Customer",
        "nepali": "ग्राहक",
        "newar": "ग्राहक",
        "pronunciation": "grāhak"
      },
      {
        "english": "Meeting",
        "nepali": "बैठक",
        "newar": "बैठक",
        "pronunciation": "baiṭhak"
      },
      {
        "english": "Deadline",
        "nepali": "अन्तिम म्याद",
        "newar": "अन्तिम म्याद",
        "pronunciation": "antim myād"
      },
      {
        "english": "Overtime",
        "nepali": "अतिरिक्त समय",
        "newar": "अतिरिक्त समय",
        "pronunciation": "atirikta samay"
      },
      {
        "english": "Promotion",
        "nepali": "पदोन्नति",
        "newar": "पदोन्नति",
        "pronunciation": "padonnati"
      },
      {
        "english": "Raise",
        "nepali": "तलब बढी",
        "newar": "तलब बढी",
        "pronunciation": "talab baḍhī"
      },
      {
        "english": "Vacation",
        "nepali": "बिदा",
        "newar": "बिदा",
        "pronunciation": "bidā"
      },
      {
        "english": "Holiday",
        "nepali": "बिदा",
        "newar": "बिदा",
        "pronunciation": "bidā"
      },
      {
        "english": "Sick leave",
        "nepali": "बिरामी बिदा",
        "newar": "बिरामी बिदा",
        "pronunciation": "birāmī bidā"
      },
      {
        "english": "Retirement",
        "nepali": "निवृत्ति",
        "newar": "निवृत्ति",
        "pronunciation": "nivṛtti"
      },
      {
        "english": "Pension",
        "nepali": "पेन्सन",
        "newar": "पेन्सन",
        "pronunciation": "pensan"
      },
      {
        "english": "Business",
        "nepali": "व्यवसाय",
        "newar": "व्यवसाय",
        "pronunciation": "vyavasāy"
      },
      {
        "english": "Trade",
        "nepali": "व्यापार",
        "newar": "व्यापार",
        "pronunciation": "vyāpār"
      },
      {
        "english": "Market",
        "nepali": "बजार",
        "newar": "बजार",
        "pronunciation": "bajār"
      },
      {
        "english": "Shop",
        "nepali": "पसल",
        "newar": "पसल",
        "pronunciation": "pasal"
      },
      {
        "english": "Farm",
        "nepali": "फर्म",
        "newar": "फर्म",
        "pronunciation": "pharma"
      },
      {
        "english": "Field",
        "nepali": "क्षेत्र",
        "newar": "क्षेत्र",
        "pronunciation": "kṣetra"
      },
      {
        "english": "Construction",
        "nepali": "निर्माण",
        "newar": "निर्माण",
        "pronunciation": "nirmāṇ"
      },
      {
        "english": "Production",
        "nepali": "उत्पादन",
        "newar": "उत्पादन",
        "pronunciation": "utpādan"
      },
      {
        "english": "Service",
        "nepali": "सेवा",
        "newar": "सेवा",
        "pronunciation": "sevā"
      },
      {
        "english": "Industry",
        "nepali": "उद्योग",
        "newar": "उद्योग",
        "pronunciation": "udyog"
      },
      {
        "english": "Technology",
        "nepali": "प्रविधि",
        "newar": "प्रविधि",
        "pronunciation": "pravidhi"
      },
      {
        "english": "Computer",
        "nepali": "कम्प्युटर",
        "newar": "कम्प्युटर",
        "pronunciation": "kampyuṭar"
      },
      {
        "english": "Internet",
        "nepali": "इन्टरनेट",
        "newar": "इन्टरनेट",
        "pronunciation": "inṭarneṭ"
      },
      {
        "english": "Phone",
        "nepali": "फोन",
        "newar": "फोन",
        "pronunciation": "phon"
      },
      {
        "english": "Email",
        "nepali": "इमेल",
        "newar": "इमेल",
        "pronunciation": "imel"
      },
      {
        "english": "Document",
        "nepali": "कागजात",
        "newar": "कागजात",
        "pronunciation": "kāgjāt"
      },
      {
        "english": "File",
        "nepali": "फाइल",
        "newar": "फाइल",
        "pronunciation": "phāil"
      },
      {
        "english": "Project",
        "nepali": "परियोजना",
        "newar": "परियोजना",
        "pronunciation": "pariyojanā"
      },
      {
        "english": "Team",
        "nepali": "टोली",
        "newar": "टोली",
        "pronunciation": "ṭolī"
      },
      {
        "english": "Goal",
        "nepali": "लक्ष्य",
        "newar": "लक्ष्य",
        "pronunciation": "lakṣya"
      },
      {
        "english": "Success",
        "nepali": "सफलता",
        "newar": "सफलता",
        "pronunciation": "saphalatā"
      },
      {
        "english": "Failure",
        "nepali": "असफलता",
        "newar": "असफलता",
        "pronunciation": "asaphalatā"
      },
      {
        "english": "Challenge",
        "nepali": "चुनौती",
        "newar": "चुनौती",
        "pronunciation": "chunautī"
      },
      {
        "english": "Opportunity",
        "nepali": "अवसर",
        "newar": "अवसर",
        "pronunciation": "avasar"
      },
      {
        "english": "Career",
        "nepali": "कार्यजीवन",
        "newar": "कार्यजीवन",
        "pronunciation": "kāryajīvan"
      },
      {
        "english": "Profession",
        "nepali": "पेशा",
        "newar": "पेशा",
        "pronunciation": "peśā"
      },
      {
        "english": "Occupation",
        "nepali": "व्यवसाय",
        "newar": "व्यवसाय",
        "pronunciation": "vyavasāy"
      },
      {
        "english": "Work hard",
        "nepali": "मेहनत गर्नु",
        "newar": "मेहनत याये",
        "pronunciation": "mehanata yāyē"
      },
      {
        "english": "Do your best",
        "nepali": "सकेसम्म राम्रो गर्नु",
        "newar": "सक्यासम्म ल्हाये याये",
        "pronunciation": "sakyāsamma lhāyē yāyē"
      },
      {
        "english": "Good luck with your work",
        "nepali": "तपाईंको काममा शुभकामना",
        "newar": "छीगु कामं शुभकामना",
        "pronunciation": "chīgu kāmaṁ śubhakāmanā"
      }
    ],
    "difficulty": "intermediate",
    "duration": 30,
    "wordsCount": 80
  },

  13: {
      "id": 13,
      "title": "Nature & Weather",
      "description": "Common nature elements, weather terms, and related phrases",
      "content": [
        {
          "english": "Sun",
          "nepali": "सूर्य",
          "newar": "न्हे",
          "pronunciation": "nhe"
        },
        {
          "english": "Moon",
          "nepali": "चन्द्रमा",
          "newar": "तला",
          "pronunciation": "talā"
        },
        {
          "english": "Star",
          "nepali": "तारा",
          "newar": "तारा",
          "pronunciation": "tārā"
        },
        {
          "english": "Sky",
          "nepali": "आकाश",
          "newar": "आकास",
          "pronunciation": "ākās"
        },
        {
          "english": "Cloud",
          "nepali": "बादल",
          "newar": "स्वां",
          "pronunciation": "svāṁ"
        },
        {
          "english": "Rain",
          "nepali": "वर्षा",
          "newar": "वा",
          "pronunciation": "vā"
        },
        {
          "english": "Wind",
          "nepali": "हावा",
          "newar": "म्हैसा",
          "pronunciation": "mhaisā"
        },
        {
          "english": "Mountain",
          "nepali": "पहाड",
          "newar": "ग्वाः",
          "pronunciation": "gvāḥ"
        },
        {
          "english": "Hill",
          "nepali": "डाँडा",
          "newar": "डाँडा",
          "pronunciation": "ḍāṁḍā"
        },
        {
          "english": "River",
          "nepali": "नदी",
          "newar": "खुसि",
          "pronunciation": "khusi"
        },
        {
          "english": "Water",
          "nepali": "पानी",
          "newar": "लः",
          "pronunciation": "laḥ"
        },
        {
          "english": "Fire",
          "nepali": "आगो",
          "newar": "मे",
          "pronunciation": "me"
        },
        {
          "english": "Earth",
          "nepali": "पृथ्वी",
          "newar": "पृथ्वी",
          "pronunciation": "pṛthvī"
        },
        {
          "english": "Stone",
          "nepali": "ढुङ्गा",
          "newar": "पा",
          "pronunciation": "pā"
        },
        {
          "english": "Tree",
          "nepali": "रूख",
          "newar": "सिं",
          "pronunciation": "siṁ"
        },
        {
          "english": "Forest",
          "nepali": "जङ्गल",
          "newar": "सिंत",
          "pronunciation": "siṁta"
        },
        {
          "english": "Flower",
          "nepali": "फूल",
          "newar": "पु",
          "pronunciation": "pu"
        },
        {
          "english": "Grass",
          "nepali": "घाँस",
          "newar": "छ्वा",
          "pronunciation": "chvā"
        },
        {
          "english": "Leaf",
          "nepali": "पात",
          "newar": "हा",
          "pronunciation": "hā"
        },
        {
          "english": "Soil",
          "nepali": "माटो",
          "newar": "म्हां",
          "pronunciation": "mhāṁ"
        },
        {
          "english": "Sea",
          "nepali": "समुद्र",
          "newar": "समुद्र",
          "pronunciation": "samudra"
        },
        {
          "english": "Lake",
          "nepali": "ताल",
          "newar": "ताल",
          "pronunciation": "tāl"
        },
        {
          "english": "Valley",
          "nepali": "उपत्यका",
          "newar": "उपत्यका",
          "pronunciation": "upatyakā"
        },
        {
          "english": "Lightning",
          "nepali": "बिजुली",
          "newar": "बिजुली",
          "pronunciation": "bijulī"
        },
        {
          "english": "Thunder",
          "nepali": "गर्जन",
          "newar": "गर्जन",
          "pronunciation": "garjan"
        },
        {
          "english": "Rainbow",
          "nepali": "इन्द्रेनी",
          "newar": "इन्द्रेनी",
          "pronunciation": "indrenī"
        },
        {
          "english": "Snow",
          "nepali": "हिउँ",
          "newar": "हिउँ",
          "pronunciation": "hiuṁ"
        },
        {
          "english": "Fog",
          "nepali": "कुहिरो",
          "newar": "कुहिरो",
          "pronunciation": "kuhiro"
        },
        {
          "english": "Dew",
          "nepali": "झिउ",
          "newar": "झिउ",
          "pronunciation": "jhiu"
        },
        {
          "english": "Hot",
          "nepali": "तातो",
          "newar": "तातो",
          "pronunciation": "tāto"
        },
        {
          "english": "Cold",
          "nepali": "जाडो",
          "newar": "जाडो",
          "pronunciation": "jāḍo"
        },
        {
          "english": "Warm",
          "nepali": "न्यानो",
          "newar": "न्यानो",
          "pronunciation": "nyāno"
        },
        {
          "english": "Cool",
          "nepali": "सर्ने",
          "newar": "सर्ने",
          "pronunciation": "sarne"
        },
        {
          "english": "Dry",
          "nepali": "सुक्खा",
          "newar": "सुक्खा",
          "pronunciation": "sukkhā"
        },
        {
          "english": "Wet",
          "nepali": "भिजेको",
          "newar": "भिजेको",
          "pronunciation": "bhijeko"
        },
        {
          "english": "Weather",
          "nepali": "मौसम",
          "newar": "मौसम",
          "pronunciation": "mausam"
        },
        {
          "english": "Season",
          "nepali": "ऋतु",
          "newar": "ऋतु",
          "pronunciation": "ṛtu"
        },
        {
          "english": "Spring",
          "nepali": "बसन्त",
          "newar": "बसन्त",
          "pronunciation": "basanta"
        },
        {
          "english": "Summer",
          "nepali": "गर्मी",
          "newar": "गर्मी",
          "pronunciation": "garmī"
        },
        {
          "english": "Autumn",
          "nepali": "शरद",
          "newar": "शरद",
          "pronunciation": "śarad"
        },
        {
          "english": "Winter",
          "nepali": "जाडो",
          "newar": "जाडो",
          "pronunciation": "jāḍo"
        },
        {
          "english": "Monsoon",
          "nepali": "मनसुन",
          "newar": "मनसुन",
          "pronunciation": "manasun"
        },
        {
          "english": "Sunny",
          "nepali": "गर्मी",
          "newar": "न्हे जु",
          "pronunciation": "nhe ju"
        },
        {
          "english": "Cloudy",
          "nepali": "बादलिएको",
          "newar": "स्वां जु",
          "pronunciation": "svāṁ ju"
        },
        {
          "english": "Rainy",
          "nepali": "वर्षा भएको",
          "newar": "वा जु",
          "pronunciation": "vā ju"
        },
        {
          "english": "Storm",
          "nepali": "आँधी",
          "newar": "आँधी",
          "pronunciation": "āṁdhī"
        },
        {
          "english": "Flood",
          "nepali": "बाढी",
          "newar": "बाढी",
          "pronunciation": "bāḍhī"
        },
        {
          "english": "Earthquake",
          "nepali": "भूकम्प",
          "newar": "भूकम्प",
          "pronunciation": "bhūkamp"
        },
        {
          "english": "Environment",
          "nepali": "वातावरण",
          "newar": "वातावरण",
          "pronunciation": "vātāvaraṇ"
        },
        {
          "english": "Pollution",
          "nepali": "प्रदूषण",
          "newar": "प्रदूषण",
          "pronunciation": "pradūṣaṇ"
        },
        {
          "english": "The sun is shining.",
          "nepali": "सूर्य चम्किरहेको छ।",
          "newar": "न्हे चम्किगु छ।",
          "pronunciation": "nhe camkigu cha."
        },
        {
          "english": "It is raining.",
          "nepali": "पानी परिरहेको छ।",
          "newar": "वा लागिगु छ।",
          "pronunciation": "vā lāgigu cha."
        },
        {
          "english": "The wind is blowing.",
          "nepali": "हावा चलिरहेको छ।",
          "newar": "म्हैसा वायिगु छ।",
          "pronunciation": "mhaisā vāyigu cha."
        },
        {
          "english": "The sky is clear.",
          "nepali": "आकाश सफा छ।",
          "newar": "आकास सफा खः।",
          "pronunciation": "ākās saphā kha."
        },
        {
          "english": "It is very cold today.",
          "nepali": "आज धेरै जाडो छ।",
          "newar": "नी धेरै जाडो खः।",
          "pronunciation": "nī dherai jāḍo kha."
        },
        {
          "english": "The mountains are beautiful.",
          "nepali": "पहाडहरू सुन्दर छन्।",
          "newar": "ग्वाःत म्हेकु खः।",
          "pronunciation": "gvāḥta mheku kha."
        },
        {
          "english": "I love nature.",
          "nepali": "मलाई प्रकृति मन पर्छ।",
          "newar": "जितु प्रकृति मदु।",
          "pronunciation": "jitu prakṛti madu."
        },
        {
          "english": "We should protect the environment.",
          "nepali": "हामीले वातावरण संरक्षण गर्नुपर्छ।",
          "newar": "जिगु वातावरण संरक्षण यायेमजु।",
          "pronunciation": "jigu vātāvaraṇ saṁrakṣaṇ yāyemaju."
        },
        {
          "english": "The river is clean.",
          "nepali": "नदी सफा छ।",
          "newar": "खुसि सफा खः।",
          "pronunciation": "khusi saphā kha."
        },
        {
          "english": "Flowers are blooming.",
          "nepali": "फूलहरू फुलिरहेका छन्।",
          "newar": "पुत फुलिगु छ।",
          "pronunciation": "puta phuligu cha."
        }
      ],
      "difficulty": "beginner",
      "duration": 30,
      "wordsCount": 54
    },

14:{
  "id": 14,
  "title": "Places & Directions",
  "description": "Common locations, landmarks, and essential phrases for navigation and asking for directions",
  "content": [
    {
      "english": "House",
      "nepali": "घर",
      "newar": "छें",
      "pronunciation": "chhen"
    },
    {
      "english": "Home",
      "nepali": "घर",
      "newar": "छें",
      "pronunciation": "chhen"
    },
    {
      "english": "Shop",
      "nepali": "पसल",
      "newar": "पसल",
      "pronunciation": "pasal"
    },
    {
      "english": "Market",
      "nepali": "बजार",
      "newar": "बजार",
      "pronunciation": "bajār"
    },
    {
      "english": "Road",
      "nepali": "सडक",
      "newar": "बाटो",
      "pronunciation": "bāṭo"
    },
    {
      "english": "Street",
      "nepali": "गल्ली",
      "newar": "गल्ली",
      "pronunciation": "gallī"
    },
    {
      "english": "City",
      "nepali": "शहर",
      "newar": "शहर",
      "pronunciation": "śahar"
    },
    {
      "english": "Village",
      "nepali": "गाउँ",
      "newar": "गां",
      "pronunciation": "gāṁ"
    },
    {
      "english": "School",
      "nepali": "स्कूल",
      "newar": "इस्कूल",
      "pronunciation": "iskūl"
    },
    {
      "english": "Temple",
      "nepali": "मन्दिर",
      "newar": "द्यः",
      "pronunciation": "dyah"
    },
    {
      "english": "Hospital",
      "nepali": "अस्पताल",
      "newar": "अस्पताल",
      "pronunciation": "aspatal"
    },
    {
      "english": "Hotel",
      "nepali": "होटल",
      "newar": "होटल",
      "pronunciation": "hoṭal"
    },
    {
      "english": "Restaurant",
      "nepali": "रेस्टुरेन्ट",
      "newar": "ज्यापु",
      "pronunciation": "jyāpu"
    },
    {
      "english": "Bank",
      "nepali": "बैंक",
      "newar": "बैंक",
      "pronunciation": "baiṅk"
    },
    {
      "english": "Post Office",
      "nepali": "हुलाक कार्यालय",
      "newar": "हुलाक कोयाखं",
      "pronunciation": "hulāk koyākhaṁ"
    },
    {
      "english": "Bus Stop",
      "nepali": "बस स्टप",
      "newar": "बस स्टप",
      "pronunciation": "bas sṭap"
    },
    {
      "english": "Airport",
      "nepali": "विमानस्थल",
      "newar": "विमानस्थल",
      "pronunciation": "vimānasthal"
    },
    {
      "english": "Bridge",
      "nepali": "पुल",
      "newar": "पुल",
      "pronunciation": "pul"
    },
    {
      "english": "River",
      "nepali": "नदी",
      "newar": "खुसि",
      "pronunciation": "khusi"
    },
    {
      "english": "Mountain",
      "nepali": "पहाड",
      "newar": "डाँगा",
      "pronunciation": "ḍāṁgā"
    },
    {
      "english": "Park",
      "nepali": "पार्क",
      "newar": "पार्क",
      "pronunciation": "pārk"
    },
    {
      "english": "Garden",
      "nepali": "बगैंचा",
      "newar": "बगैंचा",
      "pronunciation": "bagaincā"
    },
    {
      "english": "Toilet",
      "nepali": "शौचालय",
      "newar": "शौचालय",
      "pronunciation": "śaucālay"
    },
    {
      "english": "Police Station",
      "nepali": "प्रहरी चौकी",
      "newar": "प्रहरी चौकी",
      "pronunciation": "praharī caukī"
    },
    {
      "english": "Here",
      "nepali": "यहाँ",
      "newar": "येथें",
      "pronunciation": "yethen"
    },
    {
      "english": "There",
      "nepali": "त्यहाँ",
      "newar": "तेथें",
      "pronunciation": "tethen"
    },
    {
      "english": "Near",
      "nepali": "नजिक",
      "newar": "लागें",
      "pronunciation": "lāgen"
    },
    {
      "english": "Far",
      "nepali": "टाढा",
      "newar": "पाङें",
      "pronunciation": "pāṅen"
    },
    {
      "english": "Left",
      "nepali": "बायाँ",
      "newar": "दावां",
      "pronunciation": "dāvāṁ"
    },
    {
      "english": "Right",
      "nepali": "दायाँ",
      "newar": "क्वछां",
      "pronunciation": "kvachāṁ"
    },
    {
      "english": "Straight",
      "nepali": "सिधा",
      "newar": "सिधा",
      "pronunciation": "sidhā"
    },
    {
      "english": "Front",
      "nepali": "अगाडि",
      "newar": "अगाडि",
      "pronunciation": "agāḍi"
    },
    {
      "english": "Back",
      "nepali": "पछाडि",
      "newar": "पिछां",
      "pronunciation": "pichāṁ"
    },
    {
      "english": "Up",
      "nepali": "माथि",
      "newar": "माथि",
      "pronunciation": "māthi"
    },
    {
      "english": "Down",
      "nepali": "तल",
      "newar": "तल",
      "pronunciation": "tal"
    },
    {
      "english": "Inside",
      "nepali": "भित्र",
      "newar": "भितर",
      "pronunciation": "bhitar"
    },
    {
      "english": "Outside",
      "nepali": "बाहिर",
      "newar": "बाहिर",
      "pronunciation": "bāhir"
    },
    {
      "english": "North",
      "nepali": "उत्तर",
      "newar": "उत्तर",
      "pronunciation": "uttar"
    },
    {
      "english": "South",
      "nepali": "दक्षिण",
      "newar": "दक्षिण",
      "pronunciation": "dakṣiṇ"
    },
    {
      "english": "East",
      "nepali": "पूर्व",
      "newar": "पूर्व",
      "pronunciation": "pūrva"
    },
    {
      "english": "West",
      "nepali": "पश्चिम",
      "newar": "पश्चिम",
      "pronunciation": "paścim"
    },
    {
      "english": "Map",
      "nepali": "नक्सा",
      "newar": "नक्सा",
      "pronunciation": "naksā"
    },
    {
      "english": "Address",
      "nepali": "ठेगाना",
      "newar": "ठेगाना",
      "pronunciation": "ṭhegānā"
    },
    {
      "english": "Distance",
      "nepali": "दूरी",
      "newar": "दूरी",
      "pronunciation": "dūrī"
    },
    {
      "english": "Direction",
      "nepali": "दिशा",
      "newar": "दिशा",
      "pronunciation": "diśā"
    },
    {
      "english": "To go",
      "nepali": "जानु",
      "newar": "वने",
      "pronunciation": "wane"
    },
    {
      "english": "To come",
      "nepali": "आउनु",
      "newar": "लने",
      "pronunciation": "lane"
    },
    {
      "english": "To turn",
      "nepali": "मोड्नु",
      "newar": "म्वने",
      "pronunciation": "mwane"
    },
    {
      "english": "To walk",
      "nepali": "हिँड्नु",
      "newar": "चलने",
      "pronunciation": "calane"
    },
    {
      "english": "To stop",
      "nepali": "रोक्नु",
      "newar": "अके",
      "pronunciation": "ake"
    },
    {
      "english": "To wait",
      "nepali": "पर्खनु",
      "newar": "खोके",
      "pronunciation": "khoke"
    },
    {
      "english": "To search",
      "nepali": "खोज्नु",
      "newar": "ग्वने",
      "pronunciation": "gwane"
    },
    {
      "english": "To find",
      "nepali": "भेट्टाउनु",
      "newar": "भेटाये",
      "pronunciation": "bheṭāye"
    },
    {
      "english": "Where is the hotel?",
      "nepali": "होटल कहाँ छ?",
      "newar": "होटल कते खः?",
      "pronunciation": "hoṭal kate kha?"
    },
    {
      "english": "My home is near the market.",
      "nepali": "मेरो घर बजार नजिक छ।",
      "newar": "जिगु छें बजार लागें खः।",
      "pronunciation": "jigu chhen bajār lāgen kha."
    },
    {
      "english": "Go straight and then turn right.",
      "nepali": "सिधा जानुहोस् र त्यसपछि दायाँ मोड्नुहोस्।",
      "newar": "सिधा वनेय अनि पछिल्ला क्वछां म्वनेय।",
      "pronunciation": "sidhā waneya ani pachillā kvachāṁ mwaneya."
    },
    {
      "english": "The temple is to the left of the bank.",
      "nepali": "मन्दिर बैंकको बायाँतिर छ।",
      "newar": "द्यः बैंकगु दावां खः।",
      "pronunciation": "dyah baiṅkgu dāvāṁ kha."
    },
    {
      "english": "How far is the airport?",
      "nepali": "विमानस्थल कति टाढा छ?",
      "newar": "विमानस्थल कति पाङें खः?",
      "pronunciation": "vimānasthal kati pāṅen kha?"
    },
    {
      "english": "Is there a restaurant around here?",
      "nepali": "यहाँ को वरिपरि केही रेस्टुरेन्ट छ?",
      "newar": "येथें लागें ज्यापु छ खः?",
      "pronunciation": "yethen lāgen jyāpu cha kha?"
    },
    {
      "english": "I am lost.",
      "nepali": "म हराएको छु।",
      "newar": "जि बाटो भुल्बि।",
      "pronunciation": "ji bāṭo bhulbi."
    },
    {
      "english": "Can you show me on the map?",
      "nepali": "तपाईं मलाई नक्सामा देखाउन सक्नुहुन्छ?",
      "newar": "छिंतः जितु नक्साय् देये सक्छ?",
      "pronunciation": "chhintaḥ jitu naksāy deye sakcha?"
    },
    {
      "english": "What is your address?",
      "nepali": "तपाईंको ठेगाना के हो?",
      "newar": "छिंतःगु ठेगाना कं खः?",
      "pronunciation": "chhintaḥgu ṭhegānā kan kha?"
    },
    {
      "english": "The bus stop is in front of the school.",
      "nepali": "बस स्टप स्कूलको अगाडि छ।",
      "newar": "बस स्टप इस्कूलगु अगाडि खः।",
      "pronunciation": "bas sṭap iskūlgu agāḍi kha."
    },
    {
      "english": "Walk for five minutes.",
      "nepali": "पाँच मिनेट हिँड्नुहोस्।",
      "newar": "पाँच मिनेट चलनेय।",
      "pronunciation": "pā̃c mineṭ calaneya."
    },
    {
      "english": "It is between the hospital and the park.",
      "nepali": "यो अस्पताल र पार्कको बीचमा छ।",
      "newar": "बि अस्पताल अनि पार्कगु मज्याय् खः।",
      "pronunciation": "bi aspatal ani pārkgu majyāy kha."
    },
    {
      "english": "I want to go to the city center.",
      "nepali": "म शहरको केन्द्रमा जान चाहन्छु।",
      "newar": "जि शहरगु केंद्रय् वने मजु।",
      "pronunciation": "ji śahargu kendray wane maju."
    },
    {
      "english": "Is this the way to Thamel?",
      "nepali": "के यो थामेल जाने बाटो हो?",
      "newar": "बि थामेल वने बाटो खः का?",
      "pronunciation": "bi ṭhāmel wane bāṭo kha kā?"
    },
    {
      "english": "Please take me to this address.",
      "nepali": "कृपया मलाई यो ठेगानामा लैजानुहोस्।",
      "newar": "कृपया जितु बि ठेगानाय् लनेय।",
      "pronunciation": "kṛpayā jitu bi ṭhegānāy laneya."
    }
  ],
  "difficulty": "beginner",
  "duration": 30,
  "wordsCount": 108
},

15:{
  "id": 15,
  "title": "Emotions & Feelings",
  "description": "Common words and phrases to express personal emotions, feelings, and states of being",
  "content": [
    {
      "english": "Happy",
      "nepali": "खुशी",
      "newar": "सुख",
      "pronunciation": "sukha"
    },
    {
      "english": "Sad",
      "nepali": "दुःखी",
      "newar": "दुखी",
      "pronunciation": "dukhī"
    },
    {
      "english": "Angry",
      "nepali": "रिसाएको",
      "newar": "कुकुर्मु",
      "pronunciation": "kukurmu"
    },
    {
      "english": "Excited",
      "nepali": "उत्साहित",
      "newar": "उत्साहित",
      "pronunciation": "utsāhit"
    },
    {
      "english": "Scared",
      "nepali": "डराएको",
      "newar": "हाय्बि",
      "pronunciation": "hāybi"
    },
    {
      "english": "Tired",
      "nepali": "थाकेको",
      "newar": "ल्हाय्बि",
      "pronunciation": "lhāybi"
    },
    {
      "english": "Hungry",
      "nepali": "भोकाएको",
      "newar": "न्ह्येबि",
      "pronunciation": "nhyebi"
    },
    {
      "english": "Thirsty",
      "nepali": "तिर्खाएको",
      "newar": "खाय्बि",
      "pronunciation": "khāybi"
    },
    {
      "english": "Sleepy",
      "nepali": "निद्राएको",
      "newar": "न्ह्यबि",
      "pronunciation": "nhyabi"
    },
    {
      "english": "Surprised",
      "nepali": "चकित",
      "newar": "आश्चर्य",
      "pronunciation": "āścarya"
    },
    {
      "english": "Worried",
      "nepali": "चिन्तित",
      "newar": "चिन्तित",
      "pronunciation": "cintit"
    },
    {
      "english": "Calm",
      "nepali": "शान्त",
      "newar": "शान्त",
      "pronunciation": "śānta"
    },
    {
      "english": "Nervous",
      "nepali": "घबराएको",
      "newar": "घबराएको",
      "pronunciation": "ghabarāeko"
    },
    {
      "english": "Proud",
      "nepali": "गर्वित",
      "newar": "गर्वित",
      "pronunciation": "garvit"
    },
    {
      "english": "Shy",
      "nepali": "लजालु",
      "newar": "लज्जा",
      "pronunciation": "lajjā"
    },
    {
      "english": "Bored",
      "nepali": "बियर",
      "newar": "बियर",
      "pronunciation": "biyar"
    },
    {
      "english": "Lonely",
      "nepali": "एक्लो",
      "newar": "छ्येगु",
      "pronunciation": "chhyegu"
    },
    {
      "english": "Love",
      "nepali": "माया",
      "newar": "माया",
      "pronunciation": "māyā"
    },
    {
      "english": "Like",
      "nepali": "मनपर्नु",
      "newar": "मदु",
      "pronunciation": "madu"
    },
    {
      "english": "Dislike",
      "nepali": "मननपर्नु",
      "newar": "ममदु",
      "pronunciation": "mamadu"
    },
    {
      "english": "Hate",
      "nepali": "घृणा",
      "newar": "द्वेष",
      "pronunciation": "dveṣa"
    },
    {
      "english": "Hope",
      "nepali": "आशा",
      "newar": "आशा",
      "pronunciation": "āśā"
    },
    {
      "english": "Miss",
      "nepali": "सम्झनु",
      "newar": "याद",
      "pronunciation": "yāda"
    },
    {
      "english": "Feel",
      "nepali": "महसुस गर्नु",
      "newar": "भाने",
      "pronunciation": "bhāne"
    },
    {
      "english": "Pain",
      "nepali": "पीडा",
      "newar": "दुख",
      "pronunciation": "dukha"
    },
    {
      "english": "Comfortable",
      "nepali": "सुविधाजनक",
      "newar": "आराम",
      "pronunciation": "ārām"
    },
    {
      "english": "Uncomfortable",
      "nepali": "असुविधाजनक",
      "newar": "असजिलो",
      "pronunciation": "asajilo"
    },
    {
      "english": "Confused",
      "nepali": "अलमल्ल",
      "newar": "अलमल्ल",
      "pronunciation": "alamalla"
    },
    {
      "english": "Embarrassed",
      "nepali": "शर्मिन्दा",
      "newar": "लज्जित",
      "pronunciation": "lajjit"
    },
    {
      "english": "Jealous",
      "nepali": "ईर्ष्या",
      "newar": "ईर्ष्या",
      "pronunciation": "īrṣyā"
    },
    {
      "english": "Fun",
      "nepali": "रमाइलो",
      "newar": "मजा",
      "pronunciation": "majā"
    },
    {
      "english": "Strong",
      "nepali": "बलियो",
      "newar": "ज्यु",
      "pronunciation": "jyu"
    },
    {
      "english": "Weak",
      "nepali": "कमजोर",
      "newar": "बलहीन",
      "pronunciation": "balahīn"
    },
    {
      "english": "Courage",
      "nepali": "साहस",
      "newar": "हिम्मत",
      "pronunciation": "himmata"
    },
    {
      "english": "Kind",
      "nepali": "दयालु",
      "newar": "मायालु",
      "pronunciation": "māyālu"
    },
    {
      "english": "Stingy",
      "nepali": "कंजुस",
      "newar": "लोभी",
      "pronunciation": "lobhī"
    },
    {
      "english": "Brave",
      "nepali": "बहादुर",
      "newar": "डरनाश",
      "pronunciation": "ḍaranāśa"
    },
    {
      "english": "Lazy",
      "nepali": "अल्छी",
      "newar": "अल्छी",
      "pronunciation": "alchhī"
    },
    {
      "english": "Busy",
      "nepali": "व्यस्त",
      "newar": "व्यस्त",
      "pronunciation": "vyasta"
    },
    {
      "english": "Free",
      "nepali": "खाली",
      "newar": "खाली",
      "pronunciation": "khālī"
    },
    {
      "english": "Sick",
      "nepali": "बिरामी",
      "newar": "ल्यु",
      "pronunciation": "lyu"
    },
    {
      "english": "Healthy",
      "nepali": "स्वस्थ",
      "newar": "ताजा",
      "pronunciation": "tājā"
    },
    {
      "english": "Fine / Okay",
      "nepali": "राम्रो",
      "newar": "छु",
      "pronunciation": "chhu"
    },
    {
      "english": "Not Okay",
      "nepali": "राम्रो छैन",
      "newar": "मछु",
      "pronunciation": "machhu"
    },
    {
      "english": "How are you?",
      "nepali": "तपाईंलाई कस्तो छ?",
      "newar": "छिंतः कसरी छ?",
      "pronunciation": "chhintaḥ kasarī cha?"
    },
    {
      "english": "I am happy.",
      "nepali": "म खुशी छु।",
      "newar": "जि सुख छु।",
      "pronunciation": "ji sukha chu."
    },
    {
      "english": "I am very tired.",
      "nepali": "म धेरै थाकेको छु।",
      "newar": "जि धेरै ल्हाय्बि।",
      "pronunciation": "ji dherai lhāybi."
    },
    {
      "english": "Are you angry?",
      "nepali": "के तपाईं रिसाउनुभएको छ?",
      "newar": "छिंतः कुकुर्मु छ?",
      "pronunciation": "chhintaḥ kukurmu cha?"
    },
    {
      "english": "Don't be sad.",
      "nepali": "दुःखी नहुनुहोस्।",
      "newar": "दुखी ममहा।",
      "pronunciation": "dukhī mamahā."
    },
    {
      "english": "I am hungry.",
      "nepali": "मलाई भोक लाग्यो।",
      "newar": "जितु न्ह्येबि।",
      "pronunciation": "jitu nhyebi."
    },
    {
      "english": "I love you.",
      "nepali": "म तपाईंलाई माया गर्छु।",
      "newar": "जि छिंतःता माया।",
      "pronunciation": "ji chhintaḥtā māyā."
    },
    {
      "english": "I miss you.",
      "nepali": "म तपाईंलाई सम्झन्छु।",
      "newar": "छिंतःता जितु याद मजु।",
      "pronunciation": "chhintaḥtā jitu yāda maju."
    },
    {
      "english": "I don't like it.",
      "nepali": "मलाई यो मनपर्दैन।",
      "newar": "जितु बि ममदु।",
      "pronunciation": "jitu bi mamadu."
    },
    {
      "english": "I am worried.",
      "nepali": "म चिन्तित छु।",
      "newar": "जि चिन्तित छु।",
      "pronunciation": "ji cintit chu."
    },
    {
      "english": "I feel sick.",
      "nepali": "मलाई अस्वस्थ लाग्यो।",
      "newar": "जितु ल्यु भाने।",
      "pronunciation": "jitu lyu bhāne."
    },
    {
      "english": "I am sorry.",
      "nepali": "माफ गर्नुहोस्।",
      "newar": "माफ येय।",
      "pronunciation": "māpha yeya."
    },
    {
      "english": "Don't worry.",
      "nepali": "चिन्ता नलिनुहोस्।",
      "newar": "चिन्ता ममहा।",
      "pronunciation": "cintā mamahā."
    },
    {
      "english": "It's okay.",
      "nepali": "केही छैन।",
      "newar": "लः, ममखु।",
      "pronunciation": "laḥ, mamakhu."
    },
    {
      "english": "What's wrong?",
      "nepali": "के भयो?",
      "newar": "का भय?",
      "pronunciation": "kā bhaya?"
    },
    {
      "english": "Are you okay?",
      "nepali": "तपाईंलाई केही छैन?",
      "newar": "छिंतः केही ममखु?",
      "pronunciation": "chhintaḥ kehī mamakhu?"
    },
    {
      "english": "I am feeling better now.",
      "nepali": "अहिले मलाई राम्रो लागिरहेको छ।",
      "newar": "जितु अिल राम्रो भाने।",
      "pronunciation": "jitu aila rāmro bhāne."
    },
    {
      "english": "Congratulations!",
      "nepali": "बधाई छ!",
      "newar": "बधाई!",
      "pronunciation": "badhāī!"
    },
    {
      "english": "Good luck!",
      "nepali": "शुभकामना!",
      "newar": "शुभकामना!",
      "pronunciation": "śubhakāmanā!"
    },
    {
      "english": "I am proud of you.",
      "nepali": "म तपाईमा गर्व गर्छु।",
      "newar": "छिंतःता जितु गर्व मजु।",
      "pronunciation": "chhintaḥtā jitu garva maju."
    },
    {
      "english": "That's funny.",
      "nepali": "त्यो रमाइलो छ।",
      "newar": "ति मजा खः।",
      "pronunciation": "ti majā kha."
    },
    {
      "english": "I am bored.",
      "nepali": "म बियर छु।",
      "newar": "जि बियर छु।",
      "pronunciation": "ji biyar chu."
    },
    {
      "english": "I am nervous.",
      "nepali": "म घबराएको छु।",
      "newar": "जि घबराएको छु।",
      "pronunciation": "ji ghabarāeko chu."
    },
    {
      "english": "Be brave.",
      "nepali": "बहादुर बन्नुहोस्।",
      "newar": "बहादुर बनय।",
      "pronunciation": "bahādura banaya."
    },
    {
      "english": "I feel shy.",
      "nepali": "मलाई लज्जा लाग्यो।",
      "newar": "जितु लज्जा भाने।",
      "pronunciation": "jitu lajjā bhāne."
    },
    {
      "english": "I am busy right now.",
      "nepali": "म अहिले व्यस्त छु।",
      "newar": "जि अिल व्यस्त छु।",
      "pronunciation": "ji aila vyasta chu."
    },
    {
      "english": "I will be free tomorrow.",
      "nepali": "म भोलि खाली हुनेछु।",
      "newar": "जि न्ह्यबू खाली वनेछु।",
      "pronunciation": "ji nhyabū khālī wanechu."
    },
    {
      "english": "I hope you feel better.",
      "nepali": "म आशा गर्छु तपाईंलाई राम्रो हुनेछ।",
      "newar": "छिंतःता राम्रो वनेछ भन्जितु आशा मजु।",
      "pronunciation": "chhintaḥtā rāmro wanecha bhanjitu āśā maju."
    },
    {
      "english": "What are you afraid of?",
      "nepali": "तपाईं केबाट डराउनुहुन्छ?",
      "newar": "छिंतः कंबात हाय्बि?",
      "pronunciation": "chhintaḥ kanbāta hāybi?"
    },
    {
      "english": "That surprised me.",
      "nepali": "त्यसले मलाई आश्चर्य लगायो।",
      "newar": "तिंजितु आश्चर्य लगाय।",
      "pronunciation": "tiṁjitu āścarya lagāya."
    },
    {
      "english": "You are very kind.",
      "nepali": "तपाईं धेरै दयालु हुनुहुन्छ।",
      "newar": "छिंतः धेरै मायालु छ।",
      "pronunciation": "chhintaḥ dherai māyālu cha."
    },
    {
      "english": "I feel uncomfortable.",
      "nepali": "मलाई असजिलो लाग्यो।",
      "newar": "जितु असजिलो भाने।",
      "pronunciation": "jitu asajilo bhāne."
    },
    {
      "english": "I understand how you feel.",
      "nepali": "तपाईंले कस्तो महसुस गर्नुभएको छ मैले बुझेँ।",
      "newar": "छिंतः कसरी भानेबि जिबुइ।",
      "pronunciation": "chhintaḥ kasarī bhānebi jibui."
    },
    {
      "english": "Calm down.",
      "nepali": "शान्त हुनुहोस्।",
      "newar": "शान्त बनय।",
      "pronunciation": "śānta banaya."
    },
    {
      "english": "I am so excited for the festival.",
      "nepali": "म पर्वको लागि धेरै उत्साहित छु।",
      "newar": "जि पर्वगु निम्ति धेरै उत्साहित छु।",
      "pronunciation": "ji parvagū nimti dherai utsāhit chu."
    },
    {
      "english": "He is a brave person.",
      "nepali": "उनी एक बहादुर व्यक्ति हुन्।",
      "newar": "वा बहादुर मनुखा खः।",
      "pronunciation": "wā bahādura manukhā kha."
    },
    {
      "english": "She is always happy.",
      "nepali": "उनी सधैं खुशी हुन्छिन्।",
      "newar": "वा न्ह्यापिंगु सुख खः।",
      "pronunciation": "wā nhyāpingū sukha kha."
    },
    {
      "english": "Why are you laughing?",
      "nepali": "तपाईं किन हाँसिरहनुभएको छ?",
      "newar": "छिंतः का हास्बि?",
      "pronunciation": "chhintaḥ kā hāsbi?"
    },
    {
      "english": "Why are you crying?",
      "nepali": "तपाईं किन रुइरहनुभएको छ?",
      "newar": "छिंतः का क्वबि?",
      "pronunciation": "chhintaḥ kā kwabi?"
    },
    {
      "english": "I feel so lonely.",
      "nepali": "मलाई धेरै एक्लो लाग्यो।",
      "newar": "जितु धेरै छ्येगु भाने।",
      "pronunciation": "jitu dherai chhyegu bhāne."
    },
    {
      "english": "I need some rest.",
      "nepali": "मलाई अलिकति आराम चाहियो।",
      "newar": "जितु छुता आराम मजु।",
      "pronunciation": "jitu chhutā ārām maju."
    }
  ],
  "difficulty": "beginner",
  "duration": 30,
  "wordsCount": 108
},

16: {
    
      "id": 16,
      "title": "Education & Schools",
      "description": "Common words and phrases related to schools, studying, and education",
      "content": [
        {
          "english": "School",
          "nepali": "स्कूल",
          "newar": "इस्कूल",
          "pronunciation": "iskūl"
        },
        {
          "english": "Student",
          "nepali": "विद्यार्थी",
          "newar": "विद्यार्थी",
          "pronunciation": "bidyārthī"
        },
        {
          "english": "Teacher",
          "nepali": "शिक्षक",
          "newar": "गुरु",
          "pronunciation": "guru"
        },
        {
          "english": "Book",
          "nepali": "किताब",
          "newar": "पुस्तक",
          "pronunciation": "pustak"
        },
        {
          "english": "Pen",
          "nepali": "कलम",
          "newar": "कलम",
          "pronunciation": "kalam"
        },
        {
          "english": "Pencil",
          "nepali": "सिसाकलम",
          "newar": "पेन्सिल",
          "pronunciation": "pensil"
        },
        {
          "english": "Classroom",
          "nepali": "कक्षा कोठा",
          "newar": "कक्षा कोठा",
          "pronunciation": "kakṣā koṭhā"
        },
        {
          "english": "Desk",
          "nepali": "डेस्क",
          "newar": "डेस्क",
          "pronunciation": "ḍesk"
        },
        {
          "english": "Chair",
          "nepali": "कुर्सी",
          "newar": "कुर्सी",
          "pronunciation": "kursī"
        },
        {
          "english": "Blackboard",
          "nepali": "कालोपाटी",
          "newar": "हिकुपाटी",
          "pronunciation": "hikupāṭī"
        },
        {
          "english": "Homework",
          "nepali": "गृहकार्य",
          "newar": "घरेलु काम",
          "pronunciation": "gharelu kām"
        },
        {
          "english": "Exam",
          "nepali": "परीक्षा",
          "newar": "परीक्षा",
          "pronunciation": "parīkṣā"
        },
        {
          "english": "Test",
          "nepali": "जाँच",
          "newar": "जाँच",
          "pronunciation": "jā̃c"
        },
        {
          "english": "Grade",
          "nepali": "कक्षा",
          "newar": "कक्षा",
          "pronunciation": "kakṣā"
        },
        {
          "english": "Lesson",
          "nepali": "पाठ",
          "newar": "पाठ",
          "pronunciation": "pāṭh"
        },
        {
          "english": "Learn",
          "nepali": "सिक्नु",
          "newar": "वने",
          "pronunciation": "wane"
        },
        {
          "english": "Teach",
          "nepali": "सिकाउनु",
          "newar": "वनाय",
          "pronunciation": "wanāya"
        },
        {
          "english": "Read",
          "nepali": "पढ्नु",
          "newar": "वचे",
          "pronunciation": "wace"
        },
        {
          "english": "Write",
          "nepali": "लेख्नु",
          "newar": "लिके",
          "pronunciation": "like"
        },
        {
          "english": "Count",
          "nepali": "गणना गर्नु",
          "newar": "गुणे",
          "pronunciation": "guṇe"
        },
        {
          "english": "Question",
          "nepali": "प्रश्न",
          "newar": "प्रश्न",
          "pronunciation": "praśna"
        },
        {
          "english": "Answer",
          "nepali": "उत्तर",
          "newar": "उत्तर",
          "pronunciation": "uttar"
        },
        {
          "english": "University",
          "nepali": "विश्वविद्यालय",
          "newar": "विश्वविद्यालय",
          "pronunciation": "viśwabidyālay"
        },
        {
          "english": "College",
          "nepali": "कलेज",
          "newar": "कलेज",
          "pronunciation": "kalej"
        },
        {
          "english": "Knowledge",
          "nepali": "ज्ञान",
          "newar": "ज्ञान",
          "pronunciation": "gyān"
        },
        {
          "english": "Study",
          "nepali": "अध्ययन",
          "newar": "अध्ययन",
          "pronunciation": "adhyayan"
        },
        {
          "english": "Subject",
          "nepali": "विषय",
          "newar": "विषय",
          "pronunciation": "viṣay"
        },
        {
          "english": "Math",
          "nepali": "गणित",
          "newar": "गणित",
          "pronunciation": "gaṇit"
        },
        {
          "english": "Science",
          "nepali": "विज्ञान",
          "newar": "विज्ञान",
          "pronunciation": "bigyān"
        },
        {
          "english": "History",
          "nepali": "इतिहास",
          "newar": "इतिहास",
          "pronunciation": "itihās"
        },
        {
          "english": "Language",
          "nepali": "भाषा",
          "newar": "भाषा",
          "pronunciation": "bhāṣā"
        },
        {
          "english": "Art",
          "nepali": "कला",
          "newar": "कला",
          "pronunciation": "kalā"
        },
        {
          "english": "Music",
          "nepali": "सङ्गीत",
          "newar": "सङ्गीत",
          "pronunciation": "saṅgīt"
        },
        {
          "english": "Pass",
          "nepali": "उत्तीर्ण हुनु",
          "newar": "उत्तीर्ण याये",
          "pronunciation": "uttīrṇa yāye"
        },
        {
          "english": "Fail",
          "nepali": "फेल हुनु",
          "newar": "फेल याये",
          "pronunciation": "phel yāye"
        },
        {
          "english": "Smart",
          "nepali": "हुशियार",
          "newar": "हुशियार",
          "pronunciation": "huśiyār"
        },
        {
          "english": "I go to school.",
          "nepali": "म स्कूल जान्छु।",
          "newar": "जि इस्कूल वने।",
          "pronunciation": "ji iskūl wane."
        },
        {
          "english": "She is a good teacher.",
          "nepali": "उनी एक राम्रो शिक्षक हुन्।",
          "newar": "वा छां गुरु खः।",
          "pronunciation": "wā chāṁ guru kha."
        },
        {
          "english": "We are reading a book.",
          "nepali": "हामी एक किताब पढ्दैछौं।",
          "newar": "जि पुस्तक वचेगु छ।",
          "pronunciation": "ji pustak wacegu cha."
        },
        {
          "english": "Do you understand?",
          "nepali": "तपाईंले बुझ्नुभयो?",
          "newar": "छिंतः बुझिय?",
          "pronunciation": "chhintaḥ bhujiya?"
        },
        {
          "english": "I have a question.",
          "nepali": "मेरो एउटा प्रश्न छ।",
          "newar": "जिगु प्रश्न छ।",
          "pronunciation": "jigu praśna cha."
        },
        {
          "english": "What is the answer?",
          "nepali": "उत्तर के हो?",
          "newar": "उत्तर कं खः?",
          "pronunciation": "uttar kaṁ kha?"
        },
        {
          "english": "Please read this.",
          "nepali": "कृपया यो पढ्नुहोस्।",
          "newar": "कृपया बि वचेय।",
          "pronunciation": "kṛpayā bi wacey."
        },
        {
          "english": "Write your name.",
          "nepali": "आफ्नो नाम लेख्नुहोस्।",
          "newar": "छिंतःगु नां लिकेय।",
          "pronunciation": "chhintaḥgu nāṁ likey."
        },
        {
          "english": "The exam is difficult.",
          "nepali": "परीक्षा गाह्रो छ।",
          "newar": "परीक्षा गाह्रो खः。",
          "pronunciation": "parīkṣā gāhro kha."
        },
        {
          "english": "I need to study.",
          "nepali": "मलाई पढ्नु छ।",
          "newar": "जितु वचे मजु।",
          "pronunciation": "jitu wace maju."
        },
        {
          "english": "He is a university student.",
          "nepali": "उ विश्वविद्यालयको विद्यार्थी हो।",
          "newar": "वा विश्वविद्यालययागु विद्यार्थी खः।",
          "pronunciation": "wā viśwabidyālayyāgu bidyārthī kha."
        },
        {
          "english": "My favorite subject is math.",
          "nepali": "मेरो मनपर्ने विषय गणित हो।",
          "newar": "जिगु मनपर्ने विषय गणित खः।",
          "pronunciation": "jigu manparne viṣay gaṇit kha."
        },
        {
          "english": "I passed the test.",
          "nepali": "म जाँचमा उत्तीर्ण भएँ।",
          "newar": "जि जाँच उत्तीर्ण याय।",
          "pronunciation": "ji jā̃c uttīrṇa yāya."
        },
        {
          "english": "She failed the exam.",
          "nepali": "उनी परीक्षामा फेल भईन्।",
          "newar": "वा परीक्षा फेल याय।",
          "pronunciation": "wā parīkṣā phel yāya."
        },
        {
          "english": "Education is important.",
          "nepali": "शिक्षा महत्त्वपूर्ण छ।",
          "newar": "शिक्षा महत्त्वपूर्ण खः。",
          "pronunciation": "śikṣā mahattvapūrṇa kha."
        }
      ],
      "difficulty": "beginner",
      "duration": 25,
      "wordsCount": 54
    },

    17: {
    "id": 17,
    "title": "Hobbies & Activities",
    "description": "Hobbies, sports, games, and recreational activities",
    "content": [
      {
        "english": "Reading",
        "nepali": "पढ्नु",
        "newar": "वाचन याये",
        "pronunciation": "vāchan yāyē"
      },
      {
        "english": "Writing",
        "nepali": "लेख्नु",
        "newar": "लेखन याये",
        "pronunciation": "lekhan yāyē"
      },
      {
        "english": "Singing",
        "nepali": "गाउनु",
        "newar": "गायन याये",
        "pronunciation": "gāyan yāyē"
      },
      {
        "english": "Dancing",
        "nepali": "नाच्नु",
        "newar": "नाचये",
        "pronunciation": "nāchaye"
      },
      {
        "english": "Painting",
        "nepali": "चित्रकला",
        "newar": "चित्रकला",
        "pronunciation": "chitrakalā"
      },
      {
        "english": "Drawing",
        "nepali": "ड्रिङ्ग",
        "newar": "ड्रिङ्ग",
        "pronunciation": "ḍriṅg"
      },
      {
        "english": "Photography",
        "nepali": "फोटोग्राफी",
        "newar": "फोटोग्राफी",
        "pronunciation": "phoṭogrāphī"
      },
      {
        "english": "Cooking",
        "nepali": "पकाउनु",
        "newar": "पाककला",
        "pronunciation": "pākakalā"
      },
      {
        "english": "Gardening",
        "nepali": "बगैंचा मल्नु",
        "newar": "बगैंचा मल्नु",
        "pronunciation": "bagainchā malnu"
      },
      {
        "english": "Walking",
        "nepali": "हिँड्नु",
        "newar": "हिँडये",
        "pronunciation": "hiṁḍaye"
      },
      {
        "english": "Running",
        "nepali": "दौड्नु",
        "newar": "दौडये",
        "pronunciation": "dauḍaye"
      },
      {
        "english": "Swimming",
        "nepali": "पौडिनु",
        "newar": "पौडये",
        "pronunciation": "pauḍaye"
      },
      {
        "english": "Cycling",
        "nepali": "साइकल चलाउनु",
        "newar": "साइकल चलाये",
        "pronunciation": "sāikal chalāye"
      },
      {
        "english": "Football",
        "nepali": "फुटबल",
        "newar": "फुटबल",
        "pronunciation": "phuṭabal"
      },
      {
        "english": "Cricket",
        "nepali": "क्रिकेट",
        "newar": "क्रिकेट",
        "pronunciation": "krikeṭ"
      },
      {
        "english": "Basketball",
        "nepali": "बास्केटबल",
        "newar": "बास्केटबल",
        "pronunciation": "bāskeṭabal"
      },
      {
        "english": "Volleyball",
        "nepali": "भलिबल",
        "newar": "भलि�बल",
        "pronunciation": "bhalibal"
      },
      {
        "english": "Badminton",
        "nepali": "ब्याडमिन्टन",
        "newar": "ब्याडमिन्टन",
        "pronunciation": "byāḍminṭan"
      },
      {
        "english": "Tennis",
        "nepali": "टेनिस",
        "newar": "टेनिस",
        "pronunciation": "ṭenis"
      },
      {
        "english": "Table tennis",
        "nepali": "टेबल टेनिस",
        "newar": "टेबल टेनिस",
        "pronunciation": "ṭebal ṭenis"
      },
      {
        "english": "Chess",
        "nepali": "बुद्धिचाल",
        "newar": "बुद्धिचाल",
        "pronunciation": "buddhichāl"
      },
      {
        "english": "Cards",
        "nepali": "तास",
        "newar": "तास",
        "pronunciation": "tās"
      },
      {
        "english": "Carrom",
        "nepali": "कैरम",
        "newar": "कैरम",
        "pronunciation": "kairam"
      },
      {
        "english": "Music",
        "nepali": "संगीत",
        "newar": "संगीत",
        "pronunciation": "saṅgīt"
      },
      {
        "english": "Movie",
        "nepali": "चलचित्र",
        "newar": "चलचित्र",
        "pronunciation": "chalachitra"
      },
      {
        "english": "TV",
        "nepali": "टिभी",
        "newar": "टिभी",
        "pronunciation": "ṭibhī"
      },
      {
        "english": "Internet",
        "nepali": "इन्टरनेट",
        "newar": "इन्टरनेट",
        "pronunciation": "inṭarneṭ"
      },
      {
        "english": "Shopping",
        "nepali": "किनमेल",
        "newar": "किनमेल",
        "pronunciation": "kinamel"
      },
      {
        "english": "Travel",
        "nepali": "यात्रा",
        "newar": "यात्रा",
        "pronunciation": "yātrā"
      },
      {
        "english": "Hiking",
        "nepali": "हाइकिङ",
        "newar": "हाइकिङ",
        "pronunciation": "hāikiṅ"
      },
      {
        "english": "Trekking",
        "nepali": "ट्रेकिङ",
        "newar": "ट्रेकिङ",
        "pronunciation": "ṭrekiṅ"
      },
      {
        "english": "Camping",
        "nepali": "क्याम्पिङ",
        "newar": "क्याम्पिङ",
        "pronunciation": "kyāmpiṅ"
      },
      {
        "english": "Fishing",
        "nepali": "माछा मार्नु",
        "newar": "न्य मारये",
        "pronunciation": "nyā māraye"
      },
      {
        "english": "Hunting",
        "nepali": "शिकार",
        "newar": "शिकार",
        "pronunciation": "śikār"
      },
      {
        "english": "Yoga",
        "nepali": "योग",
        "newar": "योग",
        "pronunciation": "yog"
      },
      {
        "english": "Meditation",
        "nepali": "ध्यान",
        "newar": "ध्यान",
        "pronunciation": "dhyān"
      },
      {
        "english": "Exercise",
        "nepali": "व्यायाम",
        "newar": "व्यायाम",
        "pronunciation": "vyāyām"
      },
      {
        "english": "Gym",
        "nepali": "जिम",
        "newar": "जिम",
        "pronunciation": "jim"
      },
      {
        "english": "What is your hobby?",
        "nepali": "तपाईंको शौक के हो?",
        "newar": "छीगु शौक सु खः?",
        "pronunciation": "chīgu śauk su kha?"
      },
      {
        "english": "My hobby is reading",
        "nepali": "मेरो शौक पढ्नु हो",
        "newar": "जिगु शौक वाचन याये खः",
        "pronunciation": "jigu śauk vāchan yāyē kha"
      },
      {
        "english": "I like to play football",
        "nepali": "मलाई फुटबल खेल्न मन पर्छ",
        "newar": "जितु फुटबल खेलये मन पर्छ",
        "pronunciation": "jitu phuṭabal khelaye man parcha"
      },
      {
        "english": "I enjoy watching movies",
        "nepali": "मलाई चलचित्र हेर्न मजा आउँछ",
        "newar": "जितु चलचित्र हेये मजा आय्",
        "pronunciation": "jitu chalachitra heye majā āy"
      },
      {
        "english": "I love listening to music",
        "nepali": "मलाई संगीत सुन्न मन पर्छ",
        "newar": "जितु संगीत सुनये मन पर्छ",
        "pronunciation": "jitu saṅgīt sunaye man parcha"
      },
      {
        "english": "Do you want to play?",
        "nepali": "तपाईं खेल्न चाहनुहुन्छ?",
        "newar": "छी खेलये छ्वंग?",
        "pronunciation": "chī khelaye chwanga?"
      },
      {
        "english": "Let's play together",
        "nepali": "हामी सँगै खेलौं",
        "newar": "जिगु सँगै खेलये",
        "pronunciation": "jigu saṅgai khelaye"
      },
      {
        "english": "I'm good at singing",
        "nepali": "म गाउनमा राम्रो छु",
        "newar": "जि गायनये ल्हाये छु",
        "pronunciation": "ji gāyanaye lhāyē chu"
      },
      {
        "english": "I'm learning to dance",
        "nepali": "म नाच्न सिकिरहेको छु",
        "newar": "जि नाचये सिकिरहे छु",
        "pronunciation": "ji nāchaye sikirahe chu"
      },
      {
        "english": "This is fun",
        "nepali": "यो रमाइलो छ",
        "newar": "बि रमाइलो खः",
        "pronunciation": "bi ramāilo kha"
      },
      {
        "english": "I'm bored",
        "nepali": "म बियर छु",
        "newar": "जि बियर छु",
        "pronunciation": "ji biyar chu"
      },
      {
        "english": "Let's do something",
        "nepali": "हामी केही गरौं",
        "newar": "जिगु सुतेये याये",
        "pronunciation": "jigu suteye yāyē"
      },
      {
        "english": "What should we do?",
        "nepali": "हामीले के गर्नुपर्छ?",
        "newar": "जिगु सु याये लागे?",
        "pronunciation": "jigu su yāyē lāge?"
      },
      {
        "english": "I want to relax",
        "nepali": "म आराम गर्न चाहन्छु",
        "newar": "जि आराम याये छ्वंग",
        "pronunciation": "ji ārām yāyē chwanga"
      },
      {
        "english": "Let's go for a walk",
        "nepali": "हिँड्न जाऔं",
        "newar": "हिँडये वये",
        "pronunciation": "hiṁḍaye wayē"
      },
      {
        "english": "I like to be active",
        "nepali": "मलाई सक्रिय हुन मन पर्छ",
        "newar": "जितु सक्रिय वये मन पर्छ",
        "pronunciation": "jitu sakriya wayē man parcha"
      },
      {
        "english": "This is my favorite game",
        "nepali": "यो मेरो मनपर्ने खेल हो",
        "newar": "बि जिगु मनपर्ने खेल खः",
        "pronunciation": "bi jigu manparne khel kha"
      },
      {
        "english": "I play every day",
        "nepali": "म हरेक दिन खेल्छु",
        "newar": "जि प्रतेक दिन खेलये",
        "pronunciation": "ji pratek din khelaye"
      },
      {
        "english": "I practice regularly",
        "nepali": "म नियमित रूपमा अभ्यास गर्छु",
        "newar": "जि नियमित अभ्यास ये",
        "pronunciation": "ji niyamita abhyās ye"
      },
      {
        "english": "Hobby",
        "nepali": "शौक",
        "newar": "शौक",
        "pronunciation": "śauk"
      },
      {
        "english": "Game",
        "nepali": "खेल",
        "newar": "खेल",
        "pronunciation": "khel"
      },
      {
        "english": "Sport",
        "nepali": "खेलकुद",
        "newar": "खेलकुद",
        "pronunciation": "khelakud"
      },
      {
        "english": "Activity",
        "nepali": "गतिविधि",
        "newar": "गतिविधि",
        "pronunciation": "gatividhi"
      },
      {
        "english": "Fun",
        "nepali": "रमाइलो",
        "newar": "रमाइलो",
        "pronunciation": "ramāilo"
      },
      {
        "english": "Enjoy",
        "nepali": "आनन्द",
        "newar": "आनन्द",
        "pronunciation": "ānanda"
      },
      {
        "english": "Play",
        "nepali": "खेल्नु",
        "newar": "खेलये",
        "pronunciation": "khelaye"
      },
      {
        "english": "Win",
        "nepali": "जित्नु",
        "newar": "जितये",
        "pronunciation": "jitaye"
      },
      {
        "english": "Lose",
        "nepali": "हराउनु",
        "newar": "हराये",
        "pronunciation": "harāye"
      },
      {
        "english": "Team",
        "nepali": "टोली",
        "newar": "टोली",
        "pronunciation": "ṭolī"
      },
      {
        "english": "Player",
        "nepali": "खेलाडी",
        "newar": "खेलाडी",
        "pronunciation": "khelāḍī"
      },
      {
        "english": "Coach",
        "nepali": "प्रशिक्षक",
        "newar": "प्रशिक्षक",
        "pronunciation": "praśikṣak"
      },
      {
        "english": "Practice",
        "nepali": "अभ्यास",
        "newar": "अभ्यास",
        "pronunciation": "abhyās"
      },
      {
        "english": "Competition",
        "nepali": "प्रतियोगिता",
        "newar": "प्रतियोगिता",
        "pronunciation": "pratiyogitā"
      },
      {
        "english": "Tournament",
        "nepali": "टुर्नामेन्ट",
        "newar": "टुर्नामेन्ट",
        "pronunciation": "ṭurnāmenṭ"
      },
      {
        "english": "Score",
        "nepali": "स्कोर",
        "newar": "स्कोर",
        "pronunciation": "skor"
      },
      {
        "english": "Goal",
        "nepali": "गोल",
        "newar": "गोल",
        "pronunciation": "gol"
      },
      {
        "english": "Ball",
        "nepali": "बल",
        "newar": "बल",
        "pronunciation": "bal"
      },
      {
        "english": "Instrument",
        "nepali": "बाजा",
        "newar": "बाजा",
        "pronunciation": "bājā"
      },
      {
        "english": "Song",
        "nepali": "गीत",
        "newar": "गीत",
        "pronunciation": "gīt"
      },
      {
        "english": "Dance",
        "nepali": "नाच",
        "newar": "नाच",
        "pronunciation": "nāch"
      },
      {
        "english": "Art",
        "nepali": "कला",
        "newar": "कला",
        "pronunciation": "kalā"
      },
      {
        "english": "Craft",
        "nepali": "शिल्प",
        "newar": "शिल्प",
        "pronunciation": "śilpa"
      },
      {
        "english": "Collection",
        "nepali": "संग्रह",
        "newar": "संग्रह",
        "pronunciation": "saṅgraha"
      },
      {
        "english": "Stamp collecting",
        "nepali": "टिकट संग्रह",
        "newar": "टिकट संग्रह",
        "pronunciation": "ṭikaṭ saṅgraha"
      },
      {
        "english": "Coin collecting",
        "nepali": "सिक्का संग्रह",
        "newar": "सिक्का संग्रह",
        "pronunciation": "sikkā saṅgraha"
      },
      {
        "english": "Outdoor",
        "nepali": "बाहिरी",
        "newar": "बाहिरी",
        "pronunciation": "bāhirī"
      },
      {
        "english": "Indoor",
        "nepali": "भित्री",
        "newar": "भित्री",
        "pronunciation": "bhitrī"
      },
      {
        "english": "Adventure",
        "nepali": "साहस",
        "newar": "साहस",
        "pronunciation": "sāhas"
      },
      {
        "english": "Relaxation",
        "nepali": "आराम",
        "newar": "आराम",
        "pronunciation": "ārām"
      },
      {
        "english": "Entertainment",
        "nepali": "मनोरञ्जन",
        "newar": "मनोरञ्जन",
        "pronunciation": "manorañjan"
      },
      {
        "english": "Leisure",
        "nepali": "फुर्सद",
        "newar": "फुर्सद",
        "pronunciation": "phursad"
      },
      {
        "english": "Free time",
        "nepali": "खाली समय",
        "newar": "खाली समय",
        "pronunciation": "khālī samay"
      },
      {
        "english": "Weekend",
        "nepali": "सप्ताहन्त",
        "newar": "सप्ताहन्त",
        "pronunciation": "saptāhanta"
      },
      {
        "english": "Vacation",
        "nepali": "बिदा",
        "newar": "बिदा",
        "pronunciation": "bidā"
      },
      {
        "english": "Holiday",
        "nepali": "बिदा",
        "newar": "बिदा",
        "pronunciation": "bidā"
      },
      {
        "english": "Party",
        "nepali": "पार्टी",
        "newar": "पार्टी",
        "pronunciation": "pārṭī"
      },
      {
        "english": "Celebration",
        "nepali": "उत्सव",
        "newar": "उत्सव",
        "pronunciation": "utsav"
      },
      {
        "english": "Festival",
        "nepali": "त्यौहार",
        "newar": "त्यौहार",
        "pronunciation": "tyauhār"
      },
      {
        "english": "Performance",
        "nepali": "प्रदर्शन",
        "newar": "प्रदर्शन",
        "pronunciation": "pradarśan"
      },
      {
        "english": "Concert",
        "nepali": "कन्सर्ट",
        "newar": "कन्सर्ट",
        "pronunciation": "kansarṭ"
      },
      {
        "english": "Exhibition",
        "nepali": "प्रदर्शनी",
        "newar": "प्रदर्शनी",
        "pronunciation": "pradarśanī"
      },
      {
        "english": "Museum",
        "nepali": "संग्रहालय",
        "newar": "संग्रहालय",
        "pronunciation": "saṅgrahālay"
      },
      {
        "english": "Gallery",
        "nepali": "ग्यालरी",
        "newar": "ग्यालरी",
        "pronunciation": "gyālarī"
      },
      {
        "english": "Theater",
        "nepali": "थिएटर",
        "newar": "थिएटर",
        "pronunciation": "thieṭar"
      },
      {
        "english": "Cinema",
        "nepali": "सिनेमा",
        "newar": "सिनेमा",
        "pronunciation": "sinemā"
      },
      {
        "english": "Park",
        "nepali": "पार्क",
        "newar": "पार्क",
        "pronunciation": "pārk"
      },
      {
        "english": "Playground",
        "nepali": "खेल मैदान",
        "newar": "खेल मैदान",
        "pronunciation": "khel maidān"
      },
      {
        "english": "Stadium",
        "nepali": "स्टेडियम",
        "newar": "स्टेडियम",
        "pronunciation": "sṭeḍiyam"
      },
      {
        "english": "Pool",
        "nepali": "पूल",
        "newar": "पूल",
        "pronunciation": "pūl"
      },
      {
        "english": "Beach",
        "nepali": "बीच",
        "newar": "बीच",
        "pronunciation": "bīch"
      },
      {
        "english": "Mountain",
        "nepali": "पहाड",
        "newar": "पहाड",
        "pronunciation": "pahāḍ"
      },
      {
        "english": "Forest",
        "nepali": "जङ्गल",
        "newar": "जङ्गल",
        "pronunciation": "jaṅgal"
      },
      {
        "english": "River",
        "nepali": "नदी",
        "newar": "नदी",
        "pronunciation": "nadī"
      },
      {
        "english": "Lake",
        "nepali": "ताल",
        "newar": "ताल",
        "pronunciation": "tāl"
      },
      {
        "english": "Skill",
        "nepali": "सीप",
        "newar": "सीप",
        "pronunciation": "sīp"
      },
      {
        "english": "Talent",
        "nepali": "प्रतिभा",
        "newar": "प्रतिभा",
        "pronunciation": "pratibhā"
      },
      {
        "english": "Creative",
        "nepali": "सृजनशील",
        "newar": "सृजनशील",
        "pronunciation": "sṛjanśīl"
      },
      {
        "english": "Active",
        "nepali": "सक्रिय",
        "newar": "सक्रिय",
        "pronunciation": "sakriya"
      },
      {
        "english": "Healthy",
        "nepali": "स्वस्थ",
        "newar": "स्वस्थ",
        "pronunciation": "swastha"
      },
      {
        "english": "Happy",
        "nepali": "खुशी",
        "newar": "खुशी",
        "pronunciation": "khuśī"
      },
      {
        "english": "Relaxed",
        "nepali": "आराम",
        "newar": "आराम",
        "pronunciation": "ārām"
      },
      {
        "english": "Tired",
        "nepali": "थाकेको",
        "newar": "थाके",
        "pronunciation": "thāke"
      },
      {
        "english": "Excited",
        "nepali": "उत्साहित",
        "newar": "उत्साहित",
        "pronunciation": "utsāhit"
      },
      {
        "english": "Bored",
        "nepali": "बियर",
        "newar": "बियर",
        "pronunciation": "biyar"
      },
      {
        "english": "Interested",
        "nepali": "रुचि",
        "newar": "रुचि",
        "pronunciation": "ruchi"
      },
      {
        "english": "Passionate",
        "nepali": "उत्सुक",
        "newar": "उत्सुक",
        "pronunciation": "utsuk"
      },
      {
        "english": "What do you do for fun?",
        "nepali": "तपाईं रमाइलोको लागि के गर्नुहुन्छ?",
        "newar": "छी रमाइलोया लागि सु यान?",
        "pronunciation": "chī ramāiloyā lāgi su yān?"
      },
      {
        "english": "I have many hobbies",
        "nepali": "मेरा धेरै शौकहरू छन्",
        "newar": "जिगु म्हैं शौकत छ",
        "pronunciation": "jigu mhaiṁ śaukata cha"
      },
      {
        "english": "This is my passion",
        "nepali": "यो मेरो जुनून हो",
        "newar": "बि जिगु जुनून खः",
        "pronunciation": "bi jigu junūn kha"
      },
      {
        "english": "I spend my free time reading",
        "nepali": "म आफ्नो खाली समय पढेर बिताउँछु",
        "newar": "जि जिगु खाली समय वाचन याये बिताये",
        "pronunciation": "ji jigu khālī samay vāchan yāyē bitāye"
      },
      {
        "english": "Let's have fun together",
        "nepali": "हामी सँगै रमाइलो गरौं",
        "newar": "जिगु सँगै रमाइलो याये",
        "pronunciation": "jigu saṅgai ramāilo yāyē"
      },
      {
        "english": "I need a new hobby",
        "nepali": "मलाई नयाँ शौक चाहियो",
        "newar": "जितु न्हूगु शौक छ्वंग",
        "pronunciation": "jitu nhūgu śauk chwanga"
      },
      {
        "english": "This activity is relaxing",
        "nepali": "यो गतिविधि आरामदायी छ",
        "newar": "बि गतिविधि आरामदायी खः",
        "pronunciation": "bi gatividhi ārāmdāyī kha"
      },
      {
        "english": "I feel energized after exercise",
        "nepali": "म व्यायाम पछि ऊर्जावान महसुस गर्छु",
        "newar": "जि व्यायाम पछ्यां ऊर्जावान मचेकु",
        "pronunciation": "ji vyāyām pachhyāṁ ūrjāvān macheku"
      },
      {
        "english": "Playing sports is good for health",
        "nepali": "खेलकुद खेल्नु स्वास्थ्यको लागि राम्रो छ",
        "newar": "खेलकुद खेलये स्वास्थ्यया लागि ल्हाये खः",
        "pronunciation": "khelakud khelaye swāsthyayā lāgi lhāyē kha"
      },
      {
        "english": "Everyone should have a hobby",
        "nepali": "सबैको शौक हुनुपर्छ",
        "newar": "सकल मनुय् शौक वने लागे",
        "pronunciation": "sakal manuy śauk wane lāge"
      }
    ],
    "difficulty": "intermediate",
    "duration": 30,
    "wordsCount": 80
  },

18:{
  "id": 18,
  "title": "Culture, Festivals & Religion",
  "description": "Essential vocabulary and phrases related to Nepali and Newar traditions, major festivals, religious practices, and cultural etiquette",
  "content": [
    {
      "english": "Culture",
      "nepali": "संस्कृति",
      "newar": "संस्कृति",
      "pronunciation": "sanskṛti"
    },
    {
      "english": "Tradition",
      "nepali": "परम्परा",
      "newar": "परम्परा",
      "pronunciation": "paramparā"
    },
    {
      "english": "Custom",
      "nepali": "चलन",
      "newar": "चलन",
      "pronunciation": "calan"
    },
    {
      "english": "Religion",
      "nepali": "धर्म",
      "newar": "धर्म",
      "pronunciation": "dharma"
    },
    {
      "english": "Festival",
      "nepali": "पर्व",
      "newar": "पर्व",
      "pronunciation": "parva"
    },
    {
      "english": "Celebration",
      "nepali": "उत्सव",
      "newar": "उत्सव",
      "pronunciation": "utsav"
    },
    {
      "english": "God",
      "nepali": "भगवान",
      "newar": "द्यः",
      "pronunciation": "dyah"
    },
    {
      "english": "Goddess",
      "nepali": "देवी",
      "newar": "देवी",
      "pronunciation": "devī"
    },
    {
      "english": "Temple",
      "nepali": "मन्दिर",
      "newar": "द्यःचें",
      "pronunciation": "dyahchen"
    },
    {
      "english": "Monastery",
      "nepali": "गुम्बा",
      "newar": "बही",
      "pronunciation": "bahī"
    },
    {
      "english": "Church",
      "nepali": "चर्च",
      "newar": "चर्च",
      "pronunciation": "carca"
    },
    {
      "english": "Mosque",
      "nepali": "मस्जिद",
      "newar": "मस्जिद",
      "pronunciation": "masjid"
    },
    {
      "english": "Prayer",
      "nepali": "प्रार्थना",
      "newar": "पूजा",
      "pronunciation": "pūjā"
    },
    {
      "english": "To pray",
      "nepali": "प्रार्थना गर्नु",
      "newar": "पूजा येने",
      "pronunciation": "pūjā yene"
    },
    {
      "english": "To worship",
      "nepali": "पूजा गर्नु",
      "newar": "पूजा येने",
      "pronunciation": "pūjā yene"
    },
    {
      "english": "Offering",
      "nepali": "प्रसाद",
      "newar": "लासा",
      "pronunciation": "lāsā"
    },
    {
      "english": "Flower",
      "nepali": "फूल",
      "newar": "स्वां",
      "pronunciation": "swāṁ"
    },
    {
      "english": "Incense",
      "nepali": "धूप",
      "newar": "धूप",
      "pronunciation": "dhūp"
    },
    {
      "english": "Bell",
      "nepali": "घण्टी",
      "newar": "घं",
      "pronunciation": "ghaṁ"
    },
    {
      "english": "Lamp",
      "nepali": "दियो",
      "newar": "तुयु",
      "pronunciation": "tuyu"
    },
    {
      "english": "Flag",
      "nepali": "झण्डा",
      "newar": "झण्डा",
      "pronunciation": "jhaṇḍā"
    },
    {
      "english": "Respect",
      "nepali": "आदर",
      "newar": "मान",
      "pronunciation": "māna"
    },
    {
      "english": "Greeting (Namaste)",
      "nepali": "नमस्ते",
      "newar": "ज्वजलपा",
      "pronunciation": "jwajalapā"
    },
    {
      "english": "Blessing",
      "nepali": "आशीर्वाद",
      "newar": "आशीर्वाद",
      "pronunciation": "āśīrvād"
    },
    {
      "english": "Fate",
      "nepali": "भाग्य",
      "newar": "भाग्य",
      "pronunciation": "bhāgya"
    },
    {
      "english": "Community",
      "nepali": "समुदाय",
      "newar": "समुदाय",
      "pronunciation": "samudāy"
    },
    {
      "english": "Family",
      "nepali": "परिवार",
      "newar": "परिवार",
      "pronunciation": "parivār"
    },
    {
      "english": "Guest",
      "nepali": "पाहुना",
      "newar": "पाहु",
      "pronunciation": "pāhu"
    },
    {
      "english": "Welcome",
      "nepali": "स्वागतम्",
      "newar": "लसकुस",
      "pronunciation": "lasakus"
    },
    {
      "english": "Hindu",
      "nepali": "हिन्दू",
      "newar": "हिन्दू",
      "pronunciation": "hindū"
    },
    {
      "english": "Buddhist",
      "nepali": "बौद्ध",
      "newar": "बौद्ध",
      "pronunciation": "bauddha"
    },
    {
      "english": "Christian",
      "nepali": "क्रिश्चियन",
      "newar": "क्रिश्चियन",
      "pronunciation": "kriściyan"
    },
    {
      "english": "Muslim",
      "nepali": "मुस्लिम",
      "newar": "मुस्लिम",
      "pronunciation": "muslim"
    },
    {
      "english": "Dashain (Biggest Hindu festival)",
      "nepali": "दशैं",
      "newar": "मोहनी",
      "pronunciation": "mohanī"
    },
    {
      "english": "Tika (rice mixture placed on forehead)",
      "nepali": "टिका",
      "newar": "टिका",
      "pronunciation": "ṭikā"
    },
    {
      "english": "Jamara (barley grass)",
      "nepali": "जमरा",
      "newar": "जमरा",
      "pronunciation": "jamarā"
    },
    {
      "english": "Swing (built during Dashain)",
      "nepali": "पिंग",
      "newar": "पिंग",
      "pronunciation": "piṅg"
    },
    {
      "english": "Tihar (Festival of Lights)",
      "nepali": "तिहार",
      "newar": "स्वन्ति",
      "pronunciation": "swanti"
    },
    {
      "english": "Laxmi Puja (Worship of Goddess of Wealth)",
      "nepali": "लक्ष्मी पूजा",
      "newar": "लक्ष्मी पूजा",
      "pronunciation": "lakṣmī pūjā"
    },
    {
      "english": "Bhaitika (Brother's day)",
      "nepali": "भाइटीका",
      "newar": "किजा पूजा",
      "pronunciation": "kijā pūjā"
    },
    {
      "english": "Deusi/Bhailo (folk songs during Tihar)",
      "nepali": "देउसी/भैलो",
      "newar": "देउसी/भैलो",
      "pronunciation": "deusī/bhailo"
    },
    {
      "english": "Mha Puja (Newari self-worship ritual)",
      "nepali": "म्ह पूजा",
      "newar": "म्ह पूजा",
      "pronunciation": "mha pūjā"
    },
    {
      "english": "New Year (Nepali)",
      "nepali": "नयाँ बर्ष",
      "newar": "बहा दन्या",
      "pronunciation": "bahā danyā"
    },
    {
      "english": "New Year (Newar)",
      "nepali": "नया बर्ष",
      "newar": "घ्यः तुच्छा",
      "pronunciation": "ghyah tucchā"
    },
    {
      "english": "Indra Jatra (Festival of Indra)",
      "nepali": "इन्द्र जात्रा",
      "newar": "येँया",
      "pronunciation": "yeṁyā"
    },
    {
      "english": "Kumari (Living Goddess)",
      "nepali": "कुमारी",
      "newar": "कुमारी",
      "pronunciation": "kumārī"
    },
    {
      "english": "Chariot",
      "nepali": "रथ",
      "newar": "रथ",
      "pronunciation": "ratha"
    },
    {
      "english": "Gai Jatra (Cow Festival)",
      "nepali": "गाई जात्रा",
      "newar": "सा पारु",
      "pronunciation": "sā pāru"
    },
    {
      "english": "Holī (Festival of Colors)",
      "nepali": "होली",
      "newar": "होली",
      "pronunciation": "holī"
    },
    {
      "english": "Color",
      "nepali": "रंग",
      "newar": "रंग",
      "pronunciation": "raṅg"
    },
    {
      "english": "Buddha Jayanti (Buddha's Birthday)",
      "nepali": "बुद्ध जयन्ती",
      "newar": "बुद्ध जयन्ती",
      "pronunciation": "buddha jayantī"
    },
    {
      "english": "Christmas",
      "nepali": "क्रिसमस",
      "newar": "क्रिसमस",
      "pronunciation": "krismas"
    },
    {
      "english": "Eid",
      "nepali": "ईद",
      "newar": "ईद",
      "pronunciation": "īd"
    },
    {
      "english": "Ritual",
      "nepali": "रिति",
      "newar": "रिति",
      "pronunciation": "riti"
    },
    {
      "english": "Ceremony",
      "nepali": "समारोह",
      "newar": "समारोह",
      "pronunciation": "samāroha"
    },
    {
      "english": "Marriage",
      "nepali": "विवाह",
      "newar": "बिहे",
      "pronunciation": "bihe"
    },
    {
      "english": "Bride",
      "nepali": "दुलही",
      "newar": "म्हति",
      "pronunciation": "mhati"
    },
    {
      "english": "Groom",
      "nepali": "दुलहा",
      "newar": "म्हतिजु",
      "pronunciation": "mhatiju"
    },
    {
      "english": "Funeral",
      "nepali": "अन्त्येष्टि",
      "newar": "सिगा",
      "pronunciation": "sigā"
    },
    {
      "english": "Music",
      "nepali": "संगीत",
      "newar": "संगीत",
      "pronunciation": "saṅgīt"
    },
    {
      "english": "Dance",
      "nepali": "नृत्य",
      "newar": "प्याखं",
      "pronunciation": "pyākhaṁ"
    },
    {
      "english": "Traditional song",
      "nepali": "लोक गीत",
      "newar": "लोक गीत",
      "pronunciation": "lok gīt"
    },
    {
      "english": "Drum",
      "nepali": "मादल",
      "newar": "धा",
      "pronunciation": "dhā"
    },
    {
      "english": "Food offered to gods",
      "nepali": "भोग",
      "newar": "भ्वं",
      "pronunciation": "bhwaṁ"
    },
    {
      "english": "Fasting",
      "nepali": "व्रत",
      "newar": "न्हेपा",
      "pronunciation": "nhepā"
    },
    {
      "english": "To fast",
      "nepali": "व्रत बस्नु",
      "newar": "न्हेपा बजने",
      "pronunciation": "nhepā bajane"
    },
    {
      "english": "Pilgrimage",
      "nepali": "तीर्थयात्रा",
      "newar": "तीर्थयात्रा",
      "pronunciation": "tīrthayātrā"
    },
    {
      "english": "Sacred",
      "nepali": "पवित्र",
      "newar": "पवित्र",
      "pronunciation": "pavitra"
    },
    {
      "english": "Happy Dashain!",
      "nepali": "दशैंको शुभकामना!",
      "newar": "मोहनी भयान्हा!",
      "pronunciation": "mohanī bhayānhā!"
    },
    {
      "english": "Happy Tihar!",
      "nepali": "तिहारको शुभकामना!",
      "newar": "स्वन्ति भयान्हा!",
      "pronunciation": "swanti bhayānhā!"
    },
    {
      "english": "Happy New Year!",
      "nepali": "नयाँ बर्षको शुभकामना!",
      "newar": "घ्यः तुच्छा भयान्हा!",
      "pronunciation": "ghyah tucchā bhayānhā!"
    },
    {
      "english": "What is your religion?",
      "nepali": "तपाईंको धर्म के हो?",
      "newar": "छिंतःगु धर्म कं खः?",
      "pronunciation": "chhintaḥgu dharma kan kha?"
    },
    {
      "english": "I am Hindu/Buddhist.",
      "nepali": "म हिन्दू/बौद्ध हुँ।",
      "newar": "जि हिन्दू/बौद्ध छु।",
      "pronunciation": "ji hindū/bauddha chu."
    },
    {
      "english": "Which festival is your favorite?",
      "nepali": "तपाईंको मनपर्ने पर्व कुन हो?",
      "newar": "छिंतःगु मनपर्ने पर्व कं खः?",
      "pronunciation": "chhintaḥgu manparne parva kan kha?"
    },
    {
      "english": "I love Dashain.",
      "nepali": "मलाई दशैं मन पर्छ।",
      "newar": "जितु मोहनी मदु।",
      "pronunciation": "jitu mohanī madu."
    },
    {
      "english": "Where is the temple?",
      "nepali": "मन्दिर कहाँ छ?",
      "newar": "द्यःचें कते खः?",
      "pronunciation": "dyahchen kate kha?"
    },
    {
      "english": "Can I go inside?",
      "nepali": "के म भित्र जान सक्छु?",
      "newar": "जि भितर वने सक्छु का?",
      "pronunciation": "ji bhitar wane sakchū kā?"
    },
    {
      "english": "We are going to pray.",
      "nepali": "हामी प्रार्थना गर्न जादैछौं।",
      "newar": "जि पूजा येने वने।",
      "pronunciation": "ji pūjā yene wane."
    },
    {
      "english": "This is a sacred place.",
      "nepali": "यो पवित्र ठाउँ हो।",
      "newar": "बि पवित्र थां खः।",
      "pronunciation": "bi pavitra thāṁ kha."
    },
    {
      "english": "Take off your shoes here.",
      "nepali": "यहाँ जुत्ता फुकाल्नुहोस्।",
      "newar": "येथें ह्वा बिलेय।",
      "pronunciation": "yethen hwā bileya."
    },
    {
      "english": "Please be quiet.",
      "nepali": "कृपया शान्त रहनुहोस्।",
      "newar": "कृपया शान्त बजनेय।",
      "pronunciation": "kṛpayā śānta bajaneya."
    },
    {
      "english": "What is this festival for?",
      "nepali": "यो पर्व कसको लागि मनाइन्छ?",
      "newar": "बि पर्व कंगु निम्ति मनाइन्छ?",
      "pronunciation": "bi parva kangu nimti manāincha?"
    },
    {
      "english": "This celebrates the victory of good.",
      "nepali": "यसले राम्रोको जितलाई मनाउँछ।",
      "newar": "बिं राम्रोगु जित मनाउँछ।",
      "pronunciation": "biṁ rāmrogu jita manāuncha."
    },
    {
      "english": "What should I wear for the ceremony?",
      "nepali": "समारोहको लागि मैले के लगाउनु?",
      "newar": "समारोहगु निम्ति जिइ कं लहिं?",
      "pronunciation": "jii kan lahiṁ?"
    },
    {
      "english": "Traditional clothes are best.",
      "nepali": "पारम्परिक लुगा सबैभन्दा राम्रो हो।",
      "newar": "पारम्परिक वास सबैभन्दा राम्रो खः।",
      "pronunciation": "pāramparika vās sabaibhandā rāmro kha."
    },
    {
      "english": "Can you explain this ritual?",
      "nepali": "के तपाईंले यो रिति बुझाउन सक्नुहुन्छ?",
      "newar": "छिंतः बि रिति बुझाउन सक्छ?",
      "pronunciation": "chhintaḥ bi riti bujhāuna sakcha?"
    },
    {
      "english": "This is for good luck.",
      "nepali": "यो राम्रो भाग्यको लागि हो।",
      "newar": "बि राम्रो भाग्यगु निम्ति खः।",
      "pronunciation": "bi rāmro bhāgyagu nimti kha."
    },
    {
      "english": "Will you celebrate with your family?",
      "nepali": "के तपाईं आफ्नो परिवारसंग मनाउनुहुन्छ?",
      "newar": "छिंतः छिंतःगु परिवारसंग मनाउछ?",
      "pronunciation": "chhintaḥ chhintaḥgu parivārsaṅga manāucha?"
    },
    {
      "english": "Yes, we all gather together.",
      "nepali": "हो, हामी सबै जम्मा हुनेछौं।",
      "newar": "हो, जि सबै जम्मा वनेछौं।",
      "pronunciation": "ho, ji sabai jammā wanechauṁ."
    },
    {
      "english": "We eat special food during festivals.",
      "nepali": "हामी पर्वहरूमा विशेष खाना खान्छौं।",
      "newar": "जि पर्वते विशेष खाय् खानछ।",
      "pronunciation": "ji parvata viśeṣa khāy khānacha."
    },
    {
      "english": "This food is offered to God first.",
      "nepali": "यो खाना पहिले भगवानलाई चढाइन्छ।",
      "newar": "बि खाय् न्हापिंगु द्यःता लासा लागय।",
      "pronunciation": "bi khāy nhāpingū dyah tā lāsā lāgaya."
    },
    {
      "english": "Can I take a photo?",
      "nepali": "के म फोटो खिच्न सक्छु?",
      "newar": "जि फोटो खिच्न सक्छु का?",
      "pronunciation": "ji phoṭo khichna sakchū kā?"
    },
    {
      "english": "It is better not to here.",
      "nepali": "यहाँ नखिच्नु नै राम्रो।",
      "newar": "येथें मखिच्नु राम्रो।",
      "pronunciation": "yethen makhichnu rāmro."
    },
    {
      "english": "I respect your customs.",
      "nepali": "म तपाईंको चलनको आदर गर्छु।",
      "newar": "जि छिंतःगु चलन माने।",
      "pronunciation": "ji chhintaḥgu calana māne."
    },
    {
      "english": "Thank you for explaining.",
      "nepali": "बुझाउनुभएकोमा धन्यवाद।",
      "newar": "बुझायेबिगु निम्ति धन्यवाद।",
      "pronunciation": "bujhāyebigu nimti dhanyavād."
    },
    {
      "english": "Nepal has many cultures.",
      "nepali": "नेपालमा धेरै संस्कृतिहरू छन्।",
      "newar": "नेपालय् धेरै संस्कृति खः।",
      "pronunciation": "nepālay dherai sanskṛti kha."
    },
    {
      "english": "This is a Newari tradition.",
      "nepali": "यो नेवार परम्परा हो।",
      "newar": "बि नेवाः परम्परा खः।",
      "pronunciation": "bi newāḥ paramparā kha."
    },
    {
      "english": "Culture is important.",
      "nepali": "संस्कृति महत्त्वपूर्ण छ।",
      "newar": "संस्कृति महत्त्वपूर्ण खः।",
      "pronunciation": "sanskṛti mahattvapūrṇa kha."
    }
  ],
  "difficulty": "intermediate",
  "duration": 45,
  "wordsCount": 200
},

19: {

      "id": 19,
      "title": "Home & Household Items",
      "description": "Common words and phrases for items and activities found in the home",
      "content": [
        {
          "english": "House",
          "nepali": "घर",
          "newar": "छें",
          "pronunciation": "chẽ"
        },
        {
          "english": "Room",
          "nepali": "कोठा",
          "newar": "कोठा",
          "pronunciation": "koṭhā"
        },
        {
          "english": "Kitchen",
          "nepali": "भान्छा कोठा",
          "newar": "भान्छा कोठा",
          "pronunciation": "bhānchā koṭhā"
        },
        {
          "english": "Bedroom",
          "nepali": "सुत्ने कोठा",
          "newar": "न्ह्यबे कोठा",
          "pronunciation": "nhyabe koṭhā"
        },
        {
          "english": "Bathroom",
          "nepali": "स्नान कोठा",
          "newar": "न्हाने कोठा",
          "pronunciation": "nhāne koṭhā"
        },
        {
          "english": "Door",
          "nepali": "ढोका",
          "newar": "खपा",
          "pronunciation": "khapā"
        },
        {
          "english": "Window",
          "nepali": "झ्याल",
          "newar": "ज्याल",
          "pronunciation": "jyāl"
        },
        {
          "english": "Wall",
          "nepali": "पर्खाल",
          "newar": "पाखा",
          "pronunciation": "pākhā"
        },
        {
          "english": "Floor",
          "nepali": "भुइँ",
          "newar": "पि",
          "pronunciation": "pi"
        },
        {
          "english": "Ceiling",
          "nepali": "छाना",
          "newar": "छेंना",
          "pronunciation": "chẽnā"
        },
        {
          "english": "Bed",
          "nepali": "खाट",
          "newar": "खाट",
          "pronunciation": "khāṭ"
        },
        {
          "english": "Pillow",
          "nepali": "सिरानी",
          "newar": "सिरानी",
          "pronunciation": "sirānī"
        },
        {
          "english": "Blanket",
          "nepali": "कम्बल",
          "newar": "रजाई",
          "pronunciation": "rajāī"
        },
        {
          "english": "Table",
          "nepali": "टेबुल",
          "newar": "मेज",
          "pronunciation": "mej"
        },
        {
          "english": "Chair",
          "nepali": "कुर्सी",
          "newar": "कुर्सी",
          "pronunciation": "kursī"
        },
        {
          "english": "Sofa",
          "nepali": "सोफा",
          "newar": "सोफा",
          "pronunciation": "sophā"
        },
        {
          "english": "Cabinet",
          "nepali": "क्याबिनेट",
          "newar": "अलमारी",
          "pronunciation": "almārī"
        },
        {
          "english": "Shelf",
          "nepali": "ठेक",
          "newar": "ताक",
          "pronunciation": "tāk"
        },
        {
          "english": "Clock",
          "nepali": "घडी",
          "newar": "घडी",
          "pronunciation": "ghaḍī"
        },
        {
          "english": "Light",
          "nepali": "बत्ती",
          "newar": "बत्ती",
          "pronunciation": "battī"
        },
        {
          "english": "Lamp",
          "nepali": "दियो",
          "newar": "दियो",
          "pronunciation": "diyo"
        },
        {
          "english": "Fan",
          "nepali": "पंखा",
          "newar": "पंखा",
          "pronunciation": "paṅkhā"
        },
        {
          "english": "Television",
          "nepali": "टेलिभिजन",
          "newar": "टिभी",
          "pronunciation": "ṭibhī"
        },
        {
          "english": "Refrigerator",
          "nepali": "फ्रिज",
          "newar": "फ्रिज",
          "pronunciation": "phrij"
        },
        {
          "english": "Stove",
          "nepali": "चुल्हो",
          "newar": "चुया",
          "pronunciation": "cuyā"
        },
        {
          "english": "Pot",
          "nepali": "भाँडो",
          "newar": "भाँडो",
          "pronunciation": "bhā̃ḍo"
        },
        {
          "english": "Pan",
          "nepali": "कराही",
          "newar": "कराही",
          "pronunciation": "karāhī"
        },
        {
          "english": "Plate",
          "nepali": "थाल",
          "newar": "थाल",
          "pronunciation": "thāl"
        },
        {
          "english": "Bowl",
          "nepali": "कचौरा",
          "newar": "कचौरा",
          "pronunciation": "kacaurā"
        },
        {
          "english": "Cup",
          "nepali": "कप",
          "newar": "कप",
          "pronunciation": "kap"
        },
        {
          "english": "Glass",
          "nepali": "गिलास",
          "newar": "गिलास",
          "pronunciation": "gilās"
        },
        {
          "english": "Spoon",
          "nepali": "चम्चा",
          "newar": "चम्चा",
          "pronunciation": "camcā"
        },
        {
          "english": "Fork",
          "nepali": "काँटा",
          "newar": "काँटा",
          "pronunciation": "kā̃ṭā"
        },
        {
          "english": "Knife",
          "nepali": "चक्कु",
          "newar": "चक्कु",
          "pronunciation": "cakku"
        },
        {
          "english": "Broom",
          "nepali": "झाडू",
          "newar": "झार",
          "pronunciation": "jhār"
        },
        {
          "english": "Bucket",
          "nepali": "बाल्टिन",
          "newar": "बाल्टिन",
          "pronunciation": "bālṭin"
        },
        {
          "english": "Soap",
          "nepali": "साबुन",
          "newar": "साबुन",
          "pronunciation": "sābun"
        },
        {
          "english": "Towel",
          "nepali": "तौलिया",
          "newar": "तौलिया",
          "pronunciation": "tauliyā"
        },
        {
          "english": "Mirror",
          "nepali": "ऐना",
          "newar": "म्हुतु",
          "pronunciation": "mhutu"
        },
        {
          "english": "Comb",
          "nepali": "काइँ",
          "newar": "काइँ",
          "pronunciation": "kāĩ"
        },
        {
          "english": "Toothbrush",
          "nepali": "दाँत ब्रश",
          "newar": "म्हे ब्रश",
          "pronunciation": "mhe braś"
        },
        {
          "english": "Key",
          "nepali": "चाबी",
          "newar": "चाबी",
          "pronunciation": "cābī"
        },
        {
          "english": "Lock",
          "nepali": "ताल्चा",
          "newar": "ताल्चा",
          "pronunciation": "tālcā"
        },
        {
          "english": "Garden",
          "nepali": "बगैंचा",
          "newar": "बगैंचा",
          "pronunciation": "bagaĩcā"
        },
        {
          "english": "Yard",
          "nepali": "अग्ग्लो",
          "newar": "आंगन",
          "pronunciation": "āṅgan"
        },
        {
          "english": "Fence",
          "nepali": "बार",
          "newar": "बार",
          "pronunciation": "bār"
        },
        {
          "english": "Welcome to my home.",
          "nepali": "मेरो घरमा स्वागत छ।",
          "newar": "जिगु छें स्वागत खः।",
          "pronunciation": "jigu chẽ swāgat kha."
        },
        {
          "english": "Please come in.",
          "nepali": "कृपया भित्र आउनुहोस्।",
          "newar": "कृपया भित्र वय।",
          "pronunciation": "kṛpayā bhitra waya."
        },
        {
          "english": "Make yourself at home.",
          "nepali": "आफ्नै घर जस्तै महसुस गर्नुहोस्।",
          "newar": "छिंतःगु छें जस्तै महसुस यायेय।",
          "pronunciation": "chhintaḥgu chẽ jastai mahasus yāyeya."
        },
        {
          "english": "This is the living room.",
          "nepali": "यो बस्ने कोठा हो।",
          "newar": "बि बस्ने कोठा खः।",
          "pronunciation": "bi basne koṭhā kha."
        },
        {
          "english": "The kitchen is clean.",
          "nepali": "भान्छा कोठा सफा छ।",
          "newar": "भान्छा कोठा सफा खः।",
          "pronunciation": "bhānchā koṭhā saphā kha."
        },
        {
          "english": "Where is the bathroom?",
          "nepali": "स्नान कोठा कहाँ छ?",
          "newar": "न्हाने कोठा कते खः?",
          "pronunciation": "nhāne koṭhā kate kha?"
        },
        {
          "english": "I'm going to sleep.",
          "nepali": "म सुत्न जान्छु।",
          "newar": "जि न्ह्यबे वने।",
          "pronunciation": "ji nhyabe wane."
        },
        {
          "english": "Turn on the light.",
          "nepali": "बत्ती बाल्नुहोस्।",
          "newar": "बत्ती बालय।",
          "pronunciation": "battī bālaya."
        },
        {
          "english": "Turn off the fan.",
          "nepali": "पंखा बन्द गर्नुहोस्।",
          "newar": "पंखा बन्द यायेय।",
          "pronunciation": "paṅkhā banda yāyeya."
        },
        {
          "english": "I'm watching television.",
          "nepali": "म टेलिभिजन हेर्दैछु।",
          "newar": "जि टिभी हेर्गु छ।",
          "pronunciation": "ji ṭibhī hergu cha."
        },
        {
          "english": "The food is in the refrigerator.",
          "nepali": "खाना फ्रिजमा छ।",
          "newar": "ज्याः फ्रिजय् छ।",
          "pronunciation": "jyāḥ phrijay cha."
        },
        {
          "english": "Please wash the dishes.",
          "nepali": "कृपया भाँडा धुनुहोस्।",
          "newar": "कृपया भाँडा नेय।",
          "pronunciation": "kṛpayā bhā̃ḍā neya."
        },
        {
          "english": "Set the table.",
          "nepali": "टेबुल सेट गर्नुहोस्。",
          "newar": "मेज सेट यायेय。",
          "pronunciation": "mej seṭ yāyeya."
        },
        {
          "english": "I need a towel.",
          "nepali": "मलाई तौलिया चाहियो।",
          "newar": "जितु तौलिया मजु।",
          "pronunciation": "jitu tauliyā maju."
        },
        {
          "english": "Where is the key?",
          "nepali": "चाबी कहाँ छ?",
          "newar": "चाबी कते खः?",
          "pronunciation": "cābī kate kha?"
        },
        {
          "english": "Lock the door.",
          "nepali": "ढोका ताल्चा लगाउनुहोस्।",
          "newar": "खपा ताल्चा लहिंय।",
          "pronunciation": "khapā tālcā lahiṁya."
        },
        {
          "english": "The garden is beautiful.",
          "nepali": "बगैंचा सुन्दर छ।",
          "newar": "बगैंचा म्हेकु खः।",
          "pronunciation": "bagaĩcā mheku kha."
        },
        {
          "english": "I'm cleaning the house.",
          "nepali": "म घर सफा गर्दैछु।",
          "newar": "जि छें सफा यायेगु छ।",
          "pronunciation": "ji chẽ saphā yāyegu cha."
        }
      ],
      "difficulty": "beginner",
      "duration": 30,
      "wordsCount": 75
    },

    20: {
    "id": 20,
    "title": "Technology & Communication",
    "description": "Modern technology, devices, and communication methods",
    "content": [
      {
        "english": "Mobile Phone",
        "nepali": "मोबाइल फोन",
        "newar": "मोबाइल फोन",
        "pronunciation": "mobāil phon"
      },
      {
        "english": "Computer",
        "nepali": "कम्प्युटर",
        "newar": "कम्प्युटर",
        "pronunciation": "kampyuṭar"
      },
      {
        "english": "Laptop",
        "nepali": "ल्यापटप",
        "newar": "ल्यापटप",
        "pronunciation": "lyāpaṭap"
      },
      {
        "english": "Tablet",
        "nepali": "ट्याब्लेट",
        "newar": "ट्याब्लेट",
        "pronunciation": "ṭyābleṭ"
      },
      {
        "english": "Internet",
        "nepali": "इन्टरनेट",
        "newar": "इन्टरनेट",
        "pronunciation": "inṭarneṭ"
      },
      {
        "english": "Wi-Fi",
        "nepali": "वाइ-फाइ",
        "newar": "वाइ-फाइ",
        "pronunciation": "wāi-phāi"
      },
      {
        "english": "Email",
        "nepali": "इमेल",
        "newar": "इमेल",
        "pronunciation": "imel"
      },
      {
        "english": "Message",
        "nepali": "सन्देश",
        "newar": "सन्देश",
        "pronunciation": "sandeś"
      },
      {
        "english": "Call",
        "nepali": "कल",
        "newar": "कल",
        "pronunciation": "kal"
      },
      {
        "english": "Video Call",
        "nepali": "भिडियो कल",
        "newar": "भिडियो कल",
        "pronunciation": "bhiḍiyo kal"
      },
      {
        "english": "Camera",
        "nepali": "क्यामेरा",
        "newar": "क्यामेरा",
        "pronunciation": "kyāmerā"
      },
      {
        "english": "Photo",
        "nepali": "फोटो",
        "newar": "फोटो",
        "pronunciation": "phoṭo"
      },
      {
        "english": "Video",
        "nepali": "भिडियो",
        "newar": "भिडियो",
        "pronunciation": "bhiḍiyo"
      },
      {
        "english": "App",
        "nepali": "एप",
        "newar": "एप",
        "pronunciation": "ep"
      },
      {
        "english": "Website",
        "nepali": "वेबसाइट",
        "newar": "वेबसाइट",
        "pronunciation": "websāiṭ"
      },
      {
        "english": "Social Media",
        "nepali": "सोशल मिडिया",
        "newar": "सोशल मिडिया",
        "pronunciation": "sośal miḍiyā"
      },
      {
        "english": "Facebook",
        "nepali": "फेसबुक",
        "newar": "फेसबुक",
        "pronunciation": "phesbuk"
      },
      {
        "english": "WhatsApp",
        "nepali": "व्हाट्सएप",
        "newar": "व्हाट्सएप",
        "pronunciation": "vhāṭsep"
      },
      {
        "english": "Instagram",
        "nepali": "इन्स्टाग्राम",
        "newar": "इन्स्टाग्राम",
        "pronunciation": "insṭāgrām"
      },
      {
        "english": "YouTube",
        "nepali": "यूट्यूब",
        "newar": "यूट्यूब",
        "pronunciation": "yūṭyūb"
      },
      {
        "english": "Password",
        "nepali": "पासवर्ड",
        "newar": "पासवर्ड",
        "pronunciation": "pāsavarḍ"
      },
      {
        "english": "Account",
        "nepali": "खाता",
        "newar": "खाता",
        "pronunciation": "khātā"
      },
      {
        "english": "Login",
        "nepali": "लगइन",
        "newar": "लगइन",
        "pronunciation": "lagain"
      },
      {
        "english": "Logout",
        "nepali": "लगआउट",
        "newar": "लगआउट",
        "pronunciation": "lagāuṭ"
      },
      {
        "english": "Search",
        "nepali": "खोज्नु",
        "newar": "खुजये",
        "pronunciation": "khujaye"
      },
      {
        "english": "Download",
        "nepali": "डाउनलोड",
        "newar": "डाउनलोड",
        "pronunciation": "ḍāunloḍ"
      },
      {
        "english": "Upload",
        "nepali": "अपलोड",
        "newar": "अपलोड",
        "pronunciation": "aploḍ"
      },
      {
        "english": "File",
        "nepali": "फाइल",
        "newar": "फाइल",
        "pronunciation": "phāil"
      },
      {
        "english": "Folder",
        "nepali": "फोल्डर",
        "newar": "फोल्डर",
        "pronunciation": "pholḍar"
      },
      {
        "english": "Software",
        "nepali": "सफ्टवेयर",
        "newar": "सफ्टवेयर",
        "pronunciation": "saphṭveyar"
      },
      {
        "english": "Hardware",
        "nepali": "हार्डवेयर",
        "newar": "हार्डवेयर",
        "pronunciation": "hārḍveyar"
      },
      {
        "english": "Charge",
        "nepali": "चार्ज",
        "newar": "चार्ज",
        "pronunciation": "cārj"
      },
      {
        "english": "Battery",
        "nepali": "ब्याट्री",
        "newar": "ब्याट्री",
        "pronunciation": "byāṭrī"
      },
      {
        "english": "Power",
        "nepali": "पावर",
        "newar": "पावर",
        "pronunciation": "pāvar"
      },
      {
        "english": "Electricity",
        "nepali": "बिजुली",
        "newar": "बिजुली",
        "pronunciation": "bijulī"
      },
      {
        "english": "Screen",
        "nepali": "स्क्रिन",
        "newar": "स्क्रिन",
        "pronunciation": "skrin"
      },
      {
        "english": "Keyboard",
        "nepali": "कीबोर्ड",
        "newar": "कीबोर्ड",
        "pronunciation": "kīborḍ"
      },
      {
        "english": "Mouse",
        "nepali": "माउस",
        "newar": "माउस",
        "pronunciation": "māus"
      },
      {
        "english": "Printer",
        "nepali": "प्रिन्टर",
        "newar": "प्रिन्टर",
        "pronunciation": "prinṭar"
      },
      {
        "english": "Scanner",
        "nepali": "स्क्यानर",
        "newar": "स्क्यानर",
        "pronunciation": "skyānar"
      },
      {
        "english": "Speaker",
        "nepali": "स्पिकर",
        "newar": "स्पिकर",
        "pronunciation": "spikar"
      },
      {
        "english": "Headphones",
        "nepali": "हेडफोन",
        "newar": "हेडफोन",
        "pronunciation": "heḍphon"
      },
      {
        "english": "Microphone",
        "nepali": "माइक",
        "newar": "माइक",
        "pronunciation": "māik"
      },
      {
        "english": "Bluetooth",
        "nepali": "ब्लुटुथ",
        "newar": "ब्लुटुथ",
        "pronunciation": "bluṭuth"
      },
      {
        "english": "Data",
        "nepali": "डाटा",
        "newar": "डाटा",
        "pronunciation": "ḍāṭā"
      },
      {
        "english": "Network",
        "nepali": "नेटवर्क",
        "newar": "नेटवर्क",
        "pronunciation": "neṭvark"
      },
      {
        "english": "Signal",
        "nepali": "सिग्नल",
        "newar": "सिग्नल",
        "pronunciation": "signal"
      },
      {
        "english": "Connection",
        "nepali": "जडान",
        "newar": "जडान",
        "pronunciation": "jaḍān"
      },
      {
        "english": "Error",
        "nepali": "त्रुटि",
        "newar": "त्रुटि",
        "pronunciation": "truṭi"
      },
      {
        "english": "Update",
        "nepali": "अपडेट",
        "newar": "अपडेट",
        "pronunciation": "apḍeṭ"
      },
      {
        "english": "Upgrade",
        "nepali": "अपग्रेड",
        "newar": "अपग्रेड",
        "pronunciation": "apgreḍ"
      },
      {
        "english": "Install",
        "nepali": "इन्स्टल",
        "newar": "इन्स्टल",
        "pronunciation": "insṭal"
      },
      {
        "english": "Uninstall",
        "nepali": "अनइन्स्टल",
        "newar": "अनइन्स्टल",
        "pronunciation": "aninsṭal"
      },
      {
        "english": "Setting",
        "nepali": "सेटिङ",
        "newar": "सेटिङ",
        "pronunciation": "seṭiṅ"
      },
      {
        "english": "Notification",
        "nepali": "सूचना",
        "newar": "सूचना",
        "pronunciation": "sūchanā"
      },
      {
        "english": "Alert",
        "nepali": "अलर्ट",
        "newar": "अलर्ट",
        "pronunciation": "alarṭ"
      },
      {
        "english": "Virus",
        "nepali": "भाइरस",
        "newar": "भाइरस",
        "pronunciation": "bhāiras"
      },
      {
        "english": "Security",
        "nepali": "सुरक्षा",
        "newar": "सुरक्षा",
        "pronunciation": "surakṣā"
      },
      {
        "english": "Privacy",
        "nepali": "गोपनीयता",
        "newar": "गोपनीयता",
        "pronunciation": "gopanīyatā"
      },
      {
        "english": "Cloud",
        "nepali": "क्लाउड",
        "newar": "क्लाउड",
        "pronunciation": "klāuḍ"
      },
      {
        "english": "Storage",
        "nepali": "भण्डारण",
        "newar": "भण्डारण",
        "pronunciation": "bhaṇḍāraṇ"
      },
      {
        "english": "Memory",
        "nepali": "मेमोरी",
        "newar": "मेमोरी",
        "pronunciation": "memorī"
      },
      {
        "english": "RAM",
        "nepali": "र्याम",
        "newar": "र्याम",
        "pronunciation": "ryām"
      },
      {
        "english": "Processor",
        "nepali": "प्रोसेसर",
        "newar": "प्रोसेसर",
        "pronunciation": "prosesar"
      },
      {
        "english": "Speed",
        "nepali": "गति",
        "newar": "गति",
        "pronunciation": "gati"
      },
      {
        "english": "Slow",
        "nepali": "ढिलो",
        "newar": "ढिलो",
        "pronunciation": "ḍhilo"
      },
      {
        "english": "Fast",
        "nepali": "चाँडो",
        "newar": "चाँडो",
        "pronunciation": "cā̃do"
      },
      {
        "english": "Can you help me?",
        "nepali": "के तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?",
        "newar": "छी जितु मद्दत याये सक्यान?",
        "pronunciation": "chī jitu maddata yāyē sakyān?"
      },
      {
        "english": "My phone is not working",
        "nepali": "मेरो फोन काम गर्दैन",
        "newar": "जिगु फोन काम याना",
        "pronunciation": "jigu phon kām yānā"
      },
      {
        "english": "I need to charge my phone",
        "nepali": "मलाई मेरो फोन चार्ज गर्नुपर्छ",
        "newar": "जितु जिगु फोन चार्ज याये लागे",
        "pronunciation": "jitu jigu phon cārj yāyē lāge"
      },
      {
        "english": "The internet is slow",
        "nepali": "इन्टरनेट ढिलो छ",
        "newar": "इन्टरनेट ढिलो खः",
        "pronunciation": "inṭarneṭ ḍhilo kha"
      },
      {
        "english": "I can't connect to Wi-Fi",
        "nepali": "म वाइ-फाइमा जडान गर्न सक्दिन",
        "newar": "जि वाइ-फाइं जडान याये सकिना",
        "pronunciation": "ji wāi-phāiṁ jaḍān yāyē sakinā"
      },
      {
        "english": "Send me a message",
        "nepali": "मलाई सन्देश पठाउनुहोस्",
        "newar": "जितु सन्देश पठाये",
        "pronunciation": "jitu sandeś paṭhāye"
      },
      {
        "english": "Call me later",
        "nepali": "पछि मलाई कल गर्नुहोस्",
        "newar": "पछ्यां जितु कल याये",
        "pronunciation": "pachhyāṁ jitu kal yāyē"
      },
      {
        "english": "I will text you",
        "nepali": "म तपाईंलाई मेसेज गर्छु",
        "newar": "जि छीत मेसेज ये",
        "pronunciation": "ji chīta mesej ye"
      },
      {
        "english": "Check your email",
        "nepali": "आफ्नो इमेल जाँच्नुहोस्",
        "newar": "छीगु इमेल जांचये",
        "pronunciation": "chīgu imel jāñchaye"
      },
      {
        "english": "I need your phone number",
        "nepali": "मलाई तपाईंको फोन नम्बर चाहियो",
        "newar": "जितु छीगु फोन नम्बर छ्वंग",
        "pronunciation": "jitu chīgu phon nambar chwanga"
      },
      {
        "english": "What is your email address?",
        "nepali": "तपाईंको इमेल ठेगाना के हो?",
        "newar": "छीगु इमेल ठेगाना सु खः?",
        "pronunciation": "chīgu imel ṭhegānā su kha?"
      },
      {
        "english": "The battery is low",
        "nepali": "ब्याट्री कम छ",
        "newar": "ब्याट्री कम खः",
        "pronunciation": "byāṭrī kam kha"
      },
      {
        "english": "I'm out of data",
        "nepali": "मेरो डाटा सकियो",
        "newar": "जिगु डाटा सक्ये",
        "pronunciation": "jigu ḍāṭā sakye"
      },
      {
        "english": "Take a photo",
        "nepali": "फोटो खिच्नुहोस्",
        "newar": "फोटो खिचये",
        "pronunciation": "phoṭo khichaye"
      },
      {
        "english": "Record a video",
        "nepali": "भिडियो रेकर्ड गर्नुहोस्",
        "newar": "भिडियो रेकर्ड याये",
        "pronunciation": "bhiḍiyo rekarḍ yāyē"
      },
      {
        "english": "Share this file",
        "nepali": "यो फाइल साझा गर्नुहोस्",
        "newar": "बि फाइल साझा याये",
        "pronunciation": "bi phāil sājhā yāyē"
      },
      {
        "english": "Save the document",
        "nepali": "डकुमेन्ट सेभ गर्नुहोस्",
        "newar": "डकुमेन्ट सेभ याये",
        "pronunciation": "ḍakumeṇṭ sebh yāyē"
      },
      {
        "english": "Delete this",
        "nepali": "यो मेटाउनुहोस्",
        "newar": "बि मेटाये",
        "pronunciation": "bi meṭāye"
      },
      {
        "english": "Turn on the computer",
        "nepali": "कम्प्युटर अन गर्नुहोस्",
        "newar": "कम्प्युटर अन याये",
        "pronunciation": "kampyuṭar an yāyē"
      },
      {
        "english": "Turn off the phone",
        "nepali": "फोन अफ गर्नुहोस्",
        "newar": "फोन अफ याये",
        "pronunciation": "phon aph yāyē"
      },
      {
        "english": "Restart the device",
        "nepali": "यन्त्र पुन: सुरु गर्नुहोस्",
        "newar": "यन्त्र पुन: सुरु याये",
        "pronunciation": "yantra punaḥ suru yāyē"
      },
      {
        "english": "The screen is broken",
        "nepali": "स्क्रिन भाँचिएको छ",
        "newar": "स्क्रिन भाँच्ये खः",
        "pronunciation": "skrin bhā̃chye kha"
      },
      {
        "english": "I forgot my password",
        "nepali": "मेरो पासवर्ड बिर्सिएको छ",
        "newar": "जिगु पासवर्ड बिर्स्ये खः",
        "pronunciation": "jigu pāsavarḍ birsye kha"
      },
      {
        "english": "Create a new account",
        "nepali": "नयाँ खाता खोल्नुहोस्",
        "newar": "न्हूगु खाता खुलये",
        "pronunciation": "nhūgu khātā khulaye"
      },
      {
        "english": "Technology is changing fast",
        "nepali": "प्रविधि चाँडो परिवर्तन भइरहेको छ",
        "newar": "प्रविधि चां परिवर्तन भयिरहे खः",
        "pronunciation": "pravidhi cāṁ parivartan bhayirahe kha"
      },
      {
        "english": "Everyone uses smartphones now",
        "nepali": "अहिले सबैले स्मार्टफोन प्रयोग गर्छन्",
        "newar": "अहिले सकल मनुय् स्मार्टफोन प्रयोग ये",
        "pronunciation": "ahile sakal manuy smartphon prayog ye"
      },
      {
        "english": "The world is connected",
        "nepali": "संसार जडान भएको छ",
        "newar": "संसार जडान वये खः",
        "pronunciation": "sansār jaḍān waye kha"
      },
      {
        "english": "Digital payment is easy",
        "nepali": "डिजिटल भुक्तानी सजिलो छ",
        "newar": "डिजिटल भुक्तानी सजिलो खः",
        "pronunciation": "ḍijiṭal bhuktānī sajilo kha"
      },
      {
        "english": "Be careful online",
        "nepali": "अनलाइन सावधान रहनुहोस्",
        "newar": "अनलाइन सावधान थ्वः",
        "pronunciation": "anlāin sāvdhān thwa"
      },
      {
        "english": "Don't share personal information",
        "nepali": "व्यक्तिगत जानकारी साझा नगर्नुहोस्",
        "newar": "व्यक्तिगत जानकारी साझा मये",
        "pronunciation": "vyaktigat jānkārī sājhā mayē"
      },
      {
        "english": "Technology makes life easier",
        "nepali": "प्रविधिले जीवन सजिलो बनाउँछ",
        "newar": "प्रविधिले जीवन सजिलो स्वय्",
        "pronunciation": "pravidhile jīvan sajilo sway"
      }
    ],
    "difficulty": "intermediate",
    "duration": 35,
    "wordsCount": 70
  },

21: {
  "id": 116,
  "title": "Music, Arts & Crafts",
  "description": "Vocabulary and phrases related to music, visual arts, traditional crafts, and creative expression in daily life",
  "content": [
    {
      "english": "Music",
      "nepali": "संगीत",
      "newar": "संगीत",
      "pronunciation": "sangeet"
    },
    {
      "english": "Song",
      "nepali": "गीत",
      "newar": "गीत",
      "pronunciation": "geet"
    },
    {
      "english": "To sing",
      "nepali": "गाउनु",
      "newar": "म्हने",
      "pronunciation": "mhane"
    },
    {
      "english": "Singer",
      "nepali": "गायक/गायिका",
      "newar": "म्हनाम्ह",
      "pronunciation": "mhanāmha"
    },
    {
      "english": "To play (an instrument)",
      "nepali": "बजाउनु",
      "newar": "बजने",
      "pronunciation": "bajane"
    },
    {
      "english": "Musician",
      "nepali": "संगीतकार",
      "newar": "संगीतकार",
      "pronunciation": "sangeetkaār"
    },
    {
      "english": "Sound",
      "nepali": "आवाज",
      "newar": "सः",
      "pronunciation": "sah"
    },
    {
      "english": "Melody",
      "nepali": "सुर",
      "newar": "सुर",
      "pronunciation": "sur"
    },
    {
      "english": "Rhythm",
      "nepali": "ताल",
      "newar": "ताल",
      "pronunciation": "tāl"
    },
    {
      "english": "Drum",
      "nepali": "ढोल",
      "newar": "धाः",
      "pronunciation": "dhāh"
    },
    {
      "english": "Flute",
      "nepali": "मुरली",
      "newar": "बाँसुरी",
      "pronunciation": "bā̃surī"
    },
    {
      "english": "Guitar",
      "nepali": "गितार",
      "newar": "गितार",
      "pronunciation": "gitār"
    },
    {
      "english": "Madal (Nepali drum)",
      "nepali": "मादल",
      "newar": "मादल",
      "pronunciation": "mādal"
    },
    {
      "english": "Concert",
      "nepali": "कन्सर्ट",
      "newar": "कन्सर्ट",
      "pronunciation": "kansart"
    },
    {
      "english": "Art",
      "nepali": "कला",
      "newar": "कला",
      "pronunciation": "kalā"
    },
    {
      "english": "Artist",
      "nepali": "कलाकार",
      "newar": "कलाकार",
      "pronunciation": "kalākār"
    },
    {
      "english": "To draw",
      "nepali": "चित्र कोर्नु",
      "newar": "चिना बने",
      "pronunciation": "cinā bane"
    },
    {
      "english": "Drawing",
      "nepali": "चित्र",
      "newar": "चिना",
      "pronunciation": "cinā"
    },
    {
      "english": "Painting",
      "nepali": "चित्रकला",
      "newar": "रंग चिना",
      "pronunciation": "rang cinā"
    },
    {
      "english": "To paint",
      "nepali": "रंग कोर्नु",
      "newar": "रंग बने",
      "pronunciation": "rang bane"
    },
    {
      "english": "Color",
      "nepali": "रंग",
      "newar": "रंग",
      "pronunciation": "rang"
    },
    {
      "english": "Brush",
      "nepali": "कूची",
      "newar": "कूची",
      "pronunciation": "kūcī"
    },
    {
      "english": "Pencil",
      "nepali": "सिसाकलम",
      "newar": "पेन्सिल",
      "pronunciation": "pensil"
    },
    {
      "english": "Craft",
      "nepali": "हस्तकला",
      "newar": "हस्तकला",
      "pronunciation": "hastakalā"
    },
    {
      "english": "Pottery",
      "nepali": "माटोको काम",
      "newar": "दबलीगु",
      "pronunciation": "dabalīgu"
    },
    {
      "english": "Potter",
      "nepali": "कुमाल",
      "newar": "दबलीम्ह",
      "pronunciation": "dabalīmha"
    },
    {
      "english": "Sculpture",
      "nepali": "मूर्ति",
      "newar": "द्यः",
      "pronunciation": "dyah"
    },
    {
      "english": "Statue",
      "nepali": "प्रतिमा",
      "newar": "प्रतिमा",
      "pronunciation": "pratimā"
    },
    {
      "english": "Weaving",
      "nepali": "बुनाई",
      "newar": "वेपागु",
      "pronunciation": "wepāgu"
    },
    {
      "english": "Thread",
      "nepali": "धागो",
      "newar": "धागो",
      "pronunciation": "dhāgo"
    },
    {
      "english": "Wood carving",
      "nepali": "काठको काम",
      "newar": "साः काइगु",
      "pronunciation": "sāh kāigu"
    },
    {
      "english": "Carpenter",
      "nepali": "दार्जी",
      "newar": "साःकिम्ह",
      "pronunciation": "sāhimha"
    },
    {
      "english": "Metalwork",
      "nepali": "धातुको काम",
      "newar": "ताय्कागु",
      "pronunciation": "tāykāgu"
    },
    {
      "english": "Jewelry",
      "nepali": "गहना",
      "newar": "गहना",
      "pronunciation": "gahanā"
    },
    {
      "english": "Beautiful",
      "nepali": "सुन्दर",
      "newar": "म्हेकु",
      "pronunciation": "mheku"
    },
    {
      "english": "Creative",
      "nepali": "सृजनशील",
      "newar": "सृजनशील",
      "pronunciation": "srijanaśīl"
    },
    {
      "english": "Skill",
      "nepali": "सिप",
      "newar": "सिप",
      "pronunciation": "sip"
    },
    {
      "english": "To learn",
      "nepali": "सिक्नु",
      "newar": "व्हने",
      "pronunciation": "whane"
    },
    {
      "english": "To practice",
      "nepali": "अभ्यास गर्नु",
      "newar": "अभ्यास येने",
      "pronunciation": "abhyās yene"
    },
    {
      "english": "Traditional",
      "nepali": "पारम्परिक",
      "newar": "पारम्परिक",
      "pronunciation": "pāramparik"
    },
    {
      "english": "Modern",
      "nepali": "आधुनिक",
      "newar": "आधुनिक",
      "pronunciation": "ādhunik"
    },
    {
      "english": "Exhibition",
      "nepali": "प्रदर्शनी",
      "newar": "प्रदर्शनी",
      "pronunciation": "pradarśanī"
    },
    {
      "english": "I love music.",
      "nepali": "मलाई संगीत मन पर्छ।",
      "newar": "जितु संगीत मदु।",
      "pronunciation": "jitu sangeet madu."
    },
    {
      "english": "Can you sing?",
      "nepali": "के तपाईं गाउनुहुन्छ?",
      "newar": "छिंतः म्हने सक्छ?",
      "pronunciation": "chhintaḥ mhane sakcha?"
    },
    {
      "english": "What instrument do you play?",
      "nepali": "तपाईं कुन बाजा बजाउनुहुन्छ?",
      "newar": "छिंतः कं बाजा बजने सक्छ?",
      "pronunciation": "chhintaḥ kan bājā bajane sakcha?"
    },
    {
      "english": "I play the madal.",
      "nepali": "म मादल बजाउँछु।",
      "newar": "जि मादल बजने।",
      "pronunciation": "ji mādal bajane."
    },
    {
      "english": "This song is beautiful.",
      "nepali": "यो गीत सुन्दर छ।",
      "newar": "बि गीत म्हेकु खः।",
      "pronunciation": "bi geet mheku kha."
    },
    {
      "english": "Please play that again.",
      "nepali": "कृपया त्यो फेरि बजाउनुहोस्।",
      "newar": "कृपया ति पल्टा बजनेय।",
      "pronunciation": "kṛpayā ti paḷṭā bajaneya."
    },
    {
      "english": "Do you like to draw?",
      "nepali": "के तपाईंलाई चित्र कोर्न मन पर्छ?",
      "newar": "छिंतः चिना बने मदु?",
      "pronunciation": "chhintaḥ cinā bane madu?"
    },
    {
      "english": "I am learning to paint.",
      "nepali": "म रंग कोर्न सिकिरहेको छु।",
      "newar": "जि रंग बने व्हन्बि।",
      "pronunciation": "ji rang bane whanbi."
    },
    {
      "english": "This is a traditional craft.",
      "nepali": "यो पारम्परिक हस्तकला हो।",
      "newar": "बि पारम्परिक हस्तकला खः।",
      "pronunciation": "bi pāramparik hastakalā kha."
    },
    {
      "english": "It is made by hand.",
      "nepali": "यो हातले बनेको हो।",
      "newar": "बि लःते बनेगु खः।",
      "pronunciation": "bi laḥte banegu kha."
    },
    {
      "english": "This pottery is very famous.",
      "nepali": "यो माटोको काम धेरै प्रसिद्ध छ।",
      "newar": "बि दबलीगु धेरै प्रसिद्ध खः।",
      "pronunciation": "bi dabalīgu dherai prasiddha kha."
    },
    {
      "english": "She is a skilled artist.",
      "nepali": "उनी सिपालु कलाकार हुन्।",
      "newar": "वा सिपालु कलाकार खः।",
      "pronunciation": "wā sipālu kalākār kha."
    },
    {
      "english": "Where did you learn this?",
      "nepali": "तपाईंले यो कहाँ सिक्नुभयो?",
      "newar": "छिंतः बि कते व्हने?",
      "pronunciation": "chhintaḥ bi kate whane?"
    },
    {
      "english": "I need more practice.",
      "nepali": "मलाई थप अभ्यास चाहियो।",
      "newar": "जितु थप अभ्यास मजु।",
      "pronunciation": "jitu thapa abhyās maju."
    },
    {
      "english": "What is this statue made of?",
      "nepali": "यो प्रतिमा केले बनेको हो?",
      "newar": "बि प्रतिमा कंले बनेगु खः?",
      "pronunciation": "bi pratimā kanle banegu kha?"
    },
    {
      "english": "It is made of wood/stone.",
      "nepali": "यो काठ/ढुङ्गाले बनेको हो।",
      "newar": "बि साः/द्हाले बनेगु खः।",
      "pronunciation": "bi sāh/dhāle banegu kha."
    },
    {
      "english": "Can you teach me?",
      "nepali": "के तपाईंले मलाई सिकाउन सक्नुहुन्छ?",
      "newar": "छिंतः जितु व्हनाये सक्छ?",
      "pronunciation": "chhintaḥ jitu whanāye sakcha?"
    },
    {
      "english": "This requires patience.",
      "nepali": "यसको लागि धैर्य चाहिन्छ।",
      "newar": "बिगु निम्ति धैर्य मजु।",
      "pronunciation": "bigu nimti dhairya maju."
    },
    {
      "english": "Your drawing is very good.",
      "nepali": "तपाईंको चित्र धेरै राम्रो छ।",
      "newar": "छिंतःगु चिना धेरै राम्रो खः।",
      "pronunciation": "chhintaḥgu cinā dherai rāmro kha."
    },
    {
      "english": "Thank you, I am still learning.",
      "nepali": "धन्यवाद, म अहिले पनि सिकिरहेको छु।",
      "newar": "धन्यवाद, जि अिल पनि व्हन्बि।",
      "pronunciation": "dhanyavād, ji aila pani whanbi."
    },
    {
      "english": "Is there a concert tonight?",
      "nepali": "आज राती कन्सर्ट छ?",
      "newar": "बेलुकी कन्सर्ट छ?",
      "pronunciation": "belukī kansart cha?"
    },
    {
      "english": "Let's go to the art exhibition.",
      "nepali": "हामी कला प्रदर्शनीमा जाऔं।",
      "newar": "जि कला प्रदर्शनीय् वन।",
      "pronunciation": "ji kalā pradarśanīy wana."
    },
    {
      "english": "I want to buy a traditional painting.",
      "nepali": "म पारम्परिक चित्रकला किन्न चाहन्छु।",
      "newar": "जि पारम्परिक रंग चिना किने मजु।",
      "pronunciation": "ji pāramparik rang cinā kine maju."
    },
    {
      "english": "This jewelry is handmade.",
      "nepali": "यो गहना हातले बनेको हो।",
      "newar": "बि गहना लःते बनेगु खः।",
      "pronunciation": "bi gahanā laḥte banegu kha."
    },
    {
      "english": "Music makes me happy.",
      "nepali": "संगीतले मलाई खुशी बनाउँछ।",
      "newar": "संगीतले जितु सुख बनाय।",
      "pronunciation": "sangeetle jitu sukha banāya."
    },
    {
      "english": "Art is important for culture.",
      "nepali": "संस्कृतिको लागि कला महत्त्वपूर्ण छ।",
      "newar": "संस्कृतिगु निम्ति कला महत्त्वपूर्ण खः।",
      "pronunciation": "sanskṛtigu nimti kalā mahattvapūrṇa kha."
    }
  ],
  "difficulty": "intermediate",
  "duration": 40,
  "wordsCount": 180
},


  "22": {
      "id": 22,
      "title": "Safety & Emergencies",
      "description": "Essential words and phrases for staying safe and handling emergency situations",
      "content": [
        {
          "english": "Help",
          "nepali": "मद्दत",
          "newar": "ग्वहाल",
          "pronunciation": "gwahāl"
        },
        {
          "english": "Emergency",
          "nepali": "आपतकाल",
          "newar": "आपतकाल",
          "pronunciation": "āpatkāl"
        },
        {
          "english": "Danger",
          "nepali": "खतरा",
          "newar": "खतरा",
          "pronunciation": "khatarā"
        },
        {
          "english": "Safe",
          "nepali": "सुरक्षित",
          "newar": "सुरक्षित",
          "pronunciation": "surakṣit"
        },
        {
          "english": "Stop",
          "nepali": "रोक्नुहोस्",
          "newar": "थ्वये",
          "pronunciation": "thwaye"
        },
        {
          "english": "Careful",
          "nepali": "सावधान",
          "newar": "सावधान",
          "pronunciation": "sāvdhān"
        },
        {
          "english": "Police",
          "nepali": "प्रहरी",
          "newar": "प्रहरी",
          "pronunciation": "praharī"
        },
        {
          "english": "Hospital",
          "nepali": "अस्पताल",
          "newar": "अस्पताल",
          "pronunciation": "aspatal"
        },
        {
          "english": "Doctor",
          "nepali": "डाक्टर",
          "newar": "डाक्टर",
          "pronunciation": "ḍākṭar"
        },
        {
          "english": "Ambulance",
          "nepali": "एम्बुलेन्स",
          "newar": "एम्बुलेन्स",
          "pronunciation": "embulens"
        },
        {
          "english": "Fire",
          "nepali": "आगो",
          "newar": "मे",
          "pronunciation": "me"
        },
        {
          "english": "Firefighter",
          "nepali": "अग्निशमन",
          "newar": "अग्निशमन",
          "pronunciation": "agniśaman"
        },
        {
          "english": "Accident",
          "nepali": "दुर्घटना",
          "newar": "दुर्घटना",
          "pronunciation": "durghaṭanā"
        },
        {
          "english": "Injury",
          "nepali": "घाउ",
          "newar": "घाउ",
          "pronunciation": "ghāu"
        },
        {
          "english": "Blood",
          "nepali": "रगत",
          "newar": "हि",
          "pronunciation": "hi"
        },
        {
          "english": "Pain",
          "nepali": "पीडा",
          "newar": "दुख",
          "pronunciation": "dukh"
        },
        {
          "english": "Medicine",
          "nepali": "औषधि",
          "newar": "औषधि",
          "pronunciation": "auṣadhi"
        },
        {
          "english": "First aid",
          "nepali": "प्राथमिक उपचार",
          "newar": "प्राथमिक उपचार",
          "pronunciation": "prāthamik upacār"
        },
        {
          "english": "Warning",
          "nepali": "चेतावनी",
          "newar": "चेतावनी",
          "pronunciation": "cetāwanī"
        },
        {
          "english": "Caution",
          "nepali": "सतर्कता",
          "newar": "सतर्कता",
          "pronunciation": "satarkatā"
        },
        {
          "english": "Exit",
          "nepali": "निस्कने ढोका",
          "newar": "निस्कने खपा",
          "pronunciation": "niskane khapā"
        },
        {
          "english": "Entrance",
          "nepali": "प्रवेश ढोका",
          "newar": "प्रवेश खपा",
          "pronunciation": "praveś khapā"
        },
        {
          "english": "Lost",
          "nepali": "हराएको",
          "newar": "विलेबि",
          "pronunciation": "bilebi"
        },
        {
          "english": "Thief",
          "nepali": "चोर",
          "newar": "चोर",
          "pronunciation": "cor"
        },
        {
          "english": "Attack",
          "nepali": "आक्रमण",
          "newar": "आक्रमण",
          "pronunciation": "ākramaṇ"
        },
        {
          "english": "Protect",
          "nepali": "रक्षा गर्नु",
          "newar": "रक्षा याये",
          "pronunciation": "rakṣā yāye"
        },
        {
          "english": "Alarm",
          "nepali": "अलार्म",
          "newar": "अलार्म",
          "pronunciation": "alārm"
        },
        {
          "english": "Siren",
          "nepali": "सायरन",
          "newar": "सायरन",
          "pronunciation": "sāyaran"
        },
        {
          "english": "Emergency number",
          "nepali": "आपतकालीन नम्बर",
          "newar": "आपतकालीन नम्बर",
          "pronunciation": "āpatkālīn nambar"
        },
        {
          "english": "Fire extinguisher",
          "nepali": "आगो निभाउने यन्त्र",
          "newar": "मे निभाउने यन्त्र",
          "pronunciation": "me nibhāune yantra"
        },
        {
          "english": "Call for help!",
          "nepali": "मद्दतको लागि बोलाउनुहोस्!",
          "newar": "ग्वहाल वने ब्वायेय!",
          "pronunciation": "gwahāl wane bwayeya!"
        },
        {
          "english": "I need a doctor.",
          "nepali": "मलाई डाक्टर चाहियो।",
          "newar": "जितु डाक्टर मजु।",
          "pronunciation": "jitu ḍākṭar maju."
        },
        {
          "english": "Call an ambulance!",
          "nepali": "एम्बुलेन्स बोलाउनुहोस्!",
          "newar": "एम्बुलेन्स ब्वायेय!",
          "pronunciation": "embulens bwayeya!"
        },
        {
          "english": "Where is the hospital?",
          "nepali": "अस्पताल कहाँ छ?",
          "newar": "अस्पताल कते खः?",
          "pronunciation": "aspatal kate kha?"
        },
        {
          "english": "There's been an accident.",
          "nepali": "दुर्घटना भएको छ।",
          "newar": "दुर्घटना यायिगु छ।",
          "pronunciation": "durghaṭanā yāyigu cha."
        },
        {
          "english": "I'm injured.",
          "nepali": "म घाइते भएको छु।",
          "newar": "जि घाइते याय।",
          "pronunciation": "ji ghāite yāya."
        },
        {
          "english": "It hurts here.",
          "nepali": "यहाँ दुख्छ।",
          "newar": "यता दुख लाग्।",
          "pronunciation": "yatā dukh lāg."
        },
        {
          "english": "I'm lost.",
          "nepali": "म हराएको छु।",
          "newar": "जि विलेबि।",
          "pronunciation": "ji bilebi."
        },
        {
          "english": "Where is the police station?",
          "nepali": "प्रहरी कार्यालय कहाँ छ?",
          "newar": "प्रहरी कार्यालय कते खः?",
          "pronunciation": "praharī kāryālay kate kha?"
        },
        {
          "english": "Be careful!",
          "nepali": "सावधान हुनुहोस्!",
          "newar": "सावधान वय!",
          "pronunciation": "sāvdhān waya!"
        },
        {
          "english": "Watch out!",
          "nepali": "होस् गर्नुहोस्!",
          "newar": "होस् यायेय!",
          "pronunciation": "hos yāyeya!"
        },
        {
          "english": "It's dangerous.",
          "nepali": "यो खतरनाक छ।",
          "newar": "बि खतरनाक खः।",
          "pronunciation": "bi khataranāk kha."
        },
        {
          "english": "Go away!",
          "nepali": "टाढा जानुहोस्!",
          "newar": "पाछें वनेय!",
          "pronunciation": "pāchẽ waneya!"
        },
        {
          "english": "Leave me alone!",
          "nepali": "मलाई एक्लै छोड्नुहोस्!",
          "newar": "जितु एक्लै छोडय!",
          "pronunciation": "jitu eklai choḍaya!"
        },
        {
          "english": "Fire! Help!",
          "nepali": "आगो लाग्यो! मद्दत!",
          "newar": "मे लागिगु! ग्वहाल!",
          "pronunciation": "me lāgigu! gwahāl!"
        },
        {
          "english": "Call the police!",
          "nepali": "प्रहरी बोलाउनुहोस्!",
          "newar": "प्रहरी ब्वायेय!",
          "pronunciation": "praharī bwayeya!"
        },
        {
          "english": "Where is the exit?",
          "nepali": "निस्कने ढोका कहाँ छ?",
          "newar": "निस्कने खपा कते खः?",
          "pronunciation": "niskane khapā kate kha?"
        },
        {
          "english": "I need first aid.",
          "nepali": "मलाई प्राथमिक उपचार चाहियो।",
          "newar": "जितु प्राथमिक उपचार मजु।",
          "pronunciation": "jitu prāthamik upacār maju."
        },
        {
          "english": "Is everyone safe?",
          "nepali": "सबैजना सुरक्षित छन्?",
          "newar": "सबै सुरक्षित छ?",
          "pronunciation": "sabai surakṣit cha?"
        },
        {
          "english": "Please help me.",
          "nepali": "कृपया मलाई मद्दत गर्नुहोस्।",
          "newar": "कृपया जितु ग्वहाल यायेय।",
          "pronunciation": "kṛpayā jitu gwahāl yāyeya."
        },
        {
          "english": "I feel sick.",
          "nepali": "मलाई अस्वस्थ लागिरहेको छ।",
          "newar": "जितु अस्वस्थ लागिगु छ।",
          "pronunciation": "jitu aswastha lāgigu cha."
        },
        {
          "english": "Stay calm.",
          "nepali": "शान्त रहनुहोस्।",
          "newar": "शान्त बिय।",
          "pronunciation": "śānt biya."
        },
        {
          "english": "Follow me.",
          "nepali": "मेरो पछि आउनुहोस्।",
          "newar": "जिगु पाछें वय।",
          "pronunciation": "jigu pāchẽ waya."
        },
        {
          "english": "Wait here.",
          "nepali": "यहाँ पर्खनुहोस्।",
          "newar": "यता पर्खय।",
          "pronunciation": "yatā parkhaya."
        }
      ],
      "difficulty": "advanced",
      "duration": 25,
      "wordsCount": 54
    
  
},



23: {
    "id": 23,
    "title": "Verbs & Daily Activities",
    "description": "Common action words and phrases for daily routines",
    "content": [
      {
        "english": "To eat",
        "nepali": "खानु",
        "newar": "नाये",
        "pronunciation": "nāye"
      },
      {
        "english": "To drink",
        "nepali": "पिउनु",
        "newar": "स्वाये",
        "pronunciation": "swāye"
      },
      {
        "english": "To sleep",
        "nepali": "सुत्नु",
        "newar": "न्हेये",
        "pronunciation": "nheye"
      },
      {
        "english": "To wake up",
        "nepali": "उठ्नु",
        "newar": "बिज्याये",
        "pronunciation": "bijyāye"
      },
      {
        "english": "To work",
        "nepali": "काम गर्नु",
        "newar": "काम याये",
        "pronunciation": "kām yāye"
      },
      {
        "english": "To go",
        "nepali": "जानु",
        "newar": "वये",
        "pronunciation": "waye"
      },
      {
        "english": "To come",
        "nepali": "आउनु",
        "newar": "वाये",
        "pronunciation": "wāye"
      },
      {
        "english": "To speak",
        "nepali": "बोल्नु",
        "newar": "भाये",
        "pronunciation": "bhāye"
      },
      {
        "english": "To talk",
        "nepali": "कुरा गर्नु",
        "newar": "गुथे याये",
        "pronunciation": "guthe yāye"
      },
      {
        "english": "To listen",
        "nepali": "सुन्नु",
        "newar": "सुनये",
        "pronunciation": "sunaye"
      },
      {
        "english": "To see",
        "nepali": "हेर्नु",
        "newar": "हेये",
        "pronunciation": "heye"
      },
      {
        "english": "To look",
        "nepali": "हेर्नु",
        "newar": "हेये",
        "pronunciation": "heye"
      },
      {
        "english": "To watch",
        "nepali": "हेर्नु",
        "newar": "हेये",
        "pronunciation": "heye"
      },
      {
        "english": "To read",
        "nepali": "पढ्नु",
        "newar": "वाचन याये",
        "pronunciation": "vāchan yāye"
      },
      {
        "english": "To write",
        "nepali": "लेख्नु",
        "newar": "लेखन याये",
        "pronunciation": "lekhan yāye"
      },
      {
        "english": "To learn",
        "nepali": "सिक्नु",
        "newar": "सिकये",
        "pronunciation": "sikaye"
      },
      {
        "english": "To teach",
        "nepali": "सिकाउनु",
        "newar": "सिकाये",
        "pronunciation": "sikāye"
      },
      {
        "english": "To play",
        "nepali": "खेल्नु",
        "newar": "खेलये",
        "pronunciation": "khelaye"
      },
      {
        "english": "To run",
        "nepali": "दौड्नु",
        "newar": "दौडये",
        "pronunciation": "dauḍaye"
      },
      {
        "english": "To walk",
        "nepali": "हिँड्नु",
        "newar": "हिँडये",
        "pronunciation": "hiṁḍaye"
      },
      {
        "english": "To sit",
        "nepali": "बस्नु",
        "newar": "बुसये",
        "pronunciation": "busaye"
      },
      {
        "english": "To stand",
        "nepali": "उभिनु",
        "newar": "उबये",
        "pronunciation": "ubaye"
      },
      {
        "english": "To give",
        "nepali": "दिनु",
        "newar": "दिये",
        "pronunciation": "diye"
      },
      {
        "english": "To take",
        "nepali": "लिनु",
        "newar": "लिये",
        "pronunciation": "liye"
      },
      {
        "english": "To buy",
        "nepali": "किन्नु",
        "newar": "किनये",
        "pronunciation": "kinaye"
      },
      {
        "english": "To sell",
        "nepali": "बेच्नु",
        "newar": "बेचये",
        "pronunciation": "bechaye"
      },
      {
        "english": "To open",
        "nepali": "खोल्नु",
        "newar": "खुलये",
        "pronunciation": "khulaye"
      },
      {
        "english": "To close",
        "nepali": "बन्द गर्नु",
        "newar": "बं याये",
        "pronunciation": "baṁ yāye"
      },
      {
        "english": "To cook",
        "nepali": "पकाउनु",
        "newar": "स्वः",
        "pronunciation": "swa"
      },
      {
        "english": "To wash",
        "nepali": "धुनु",
        "newar": "मजाये",
        "pronunciation": "majāye"
      },
      {
        "english": "To clean",
        "nepali": "सफा गर्नु",
        "newar": "सफा याये",
        "pronunciation": "saphā yāye"
      },
      {
        "english": "To love",
        "nepali": "माया गर्नु",
        "newar": "माया याये",
        "pronunciation": "māyā yāye"
      },
      {
        "english": "To like",
        "nepali": "मन पर्नु",
        "newar": "मन पर्नु",
        "pronunciation": "man parnu"
      },
      {
        "english": "To want",
        "nepali": "चाहनु",
        "newar": "छ्वंग",
        "pronunciation": "chwanga"
      },
      {
        "english": "To need",
        "nepali": "चाहिनु",
        "newar": "लागे",
        "pronunciation": "lāge"
      },
      {
        "english": "To think",
        "nepali": "सोच्नु",
        "newar": "सुचये",
        "pronunciation": "suchaye"
      },
      {
        "english": "To know",
        "nepali": "थाहा हुनु",
        "newar": "वाः वये",
        "pronunciation": "wāḥ waye"
      },
      {
        "english": "To understand",
        "nepali": "बुझ्नु",
        "newar": "बुझये",
        "pronunciation": "bujhaye"
      },
      {
        "english": "To forget",
        "nepali": "बिर्सनु",
        "newar": "बिर्सये",
        "pronunciation": "birsaye"
      },
      {
        "english": "To remember",
        "nepali": "सम्झनु",
        "newar": "सम्झये",
        "pronunciation": "samjhaye"
      },
      {
        "english": "To ask",
        "nepali": "सोध्नु",
        "newar": "सोधये",
        "pronunciation": "sodhaye"
      },
      {
        "english": "To answer",
        "nepali": "जवाफ दिनु",
        "newar": "जबाब दिये",
        "pronunciation": "jabāb diye"
      },
      {
        "english": "To call",
        "nepali": "बोलाउनु",
        "newar": "वनेय",
        "pronunciation": "waneye"
      },
      {
        "english": "To wait",
        "nepali": "पर्खनु",
        "newar": "थ्वः",
        "pronunciation": "thwa"
      },
      {
        "english": "To find",
        "nepali": "भेट्टाउनु",
        "newar": "भेटये",
        "pronunciation": "bheṭaye"
      },
      {
        "english": "To lose",
        "nepali": "हराउनु",
        "newar": "हराये",
        "pronunciation": "harāye"
      },
      {
        "english": "To try",
        "nepali": "प्रयास गर्नु",
        "newar": "प्रयास याये",
        "pronunciation": "prayās yāye"
      },
      {
        "english": "To use",
        "nepali": "प्रयोग गर्नु",
        "newar": "प्रयोग याये",
        "pronunciation": "prayog yāye"
      },
      {
        "english": "To help",
        "nepali": "मद्दत गर्नु",
        "newar": "मद्दत याये",
        "pronunciation": "maddata yāye"
      },
      {
        "english": "To begin",
        "nepali": "सुरु गर्नु",
        "newar": "सुरु याये",
        "pronunciation": "suru yāye"
      },
      {
        "english": "To finish",
        "nepali": "सक्नु",
        "newar": "सक्ये",
        "pronunciation": "sakye"
      },
      {
        "english": "To stop",
        "nepali": "रोक्नु",
        "newar": "रोकये",
        "pronunciation": "rokaye"
      },
      {
        "english": "To meet",
        "nepali": "भेट्नु",
        "newar": "भेटये",
        "pronunciation": "bheṭaye"
      },
      {
        "english": "To feel",
        "nepali": "महसुस गर्नु",
        "newar": "मचेकु",
        "pronunciation": "macheku"
      },
      {
        "english": "To live",
        "nepali": "बाच्नु",
        "newar": "जिउनु",
        "pronunciation": "jiunu"
      },
      {
        "english": "I eat breakfast at 8 AM",
        "nepali": "म बिहान ८ बजे खान्छु",
        "newar": "जि बिन्हे ८ बजे नाये",
        "pronunciation": "ji binhe 8 baje nāye"
      },
      {
        "english": "She drinks tea every morning",
        "nepali": "उनी हरेक बिहान चिया पिउछिन्",
        "newar": "्वा प्रतेक बिन्हे च्या स्वाये",
        "pronunciation": "wā pratek binhe chyā swāye"
      },
      {
        "english": "We go to school",
        "nepali": "हामी विद्यालय जान्छौं",
        "newar": "जि विद्यालय वये",
        "pronunciation": "ji vidyālay waye"
      },
      {
        "english": "He comes home at 6 PM",
        "nepali": "उ बेलुका ६ बजे घर आउँछ",
        "newar": "्वो बाखं ६ बजे छें वाये",
        "pronunciation": "wo bākhaṁ 6 baje chẽ wāye"
      },
      {
        "english": "Please speak slowly",
        "nepali": "कृपया बिस्तारै बोल्नुहोस्",
        "newar": "कृपया बिस्तारै भाये",
        "pronunciation": "kripayā bistārai bhāye"
      },
      {
        "english": "I can't hear you",
        "nepali": "म तपाईंलाई सुन्न सक्दिन",
        "newar": "जि छीत सुनये सकिना",
        "pronunciation": "ji chīt sunaye sakinā"
      },
      {
        "english": "Look at this",
        "nepali": "यसलाई हेर्नुहोस्",
        "newar": "बिल हेये",
        "pronunciation": "bila heye"
      },
      {
        "english": "I read a book",
        "nepali": "म किताब पढ्छु",
        "newar": "जि पुस्तक वाचन ये",
        "pronunciation": "ji pustak vāchan ye"
      },
      {
        "english": "Write your name",
        "nepali": "आफ्नो नाम लेख्नुहोस्",
        "newar": "छीगु नां लेखन याये",
        "pronunciation": "chīgu nāṁ lekhan yāye"
      },
      {
        "english": "I want to learn Nepali",
        "nepali": "म नेपाली सिक्न चाहन्छु",
        "newar": "जि नेपाली सिकये छ्वंग",
        "pronunciation": "ji nepālī sikaye chwanga"
      },
      {
        "english": "Can you teach me?",
        "nepali": "के तपाईं मलाई सिकाउन सक्नुहुन्छ?",
        "newar": "छी जितु सिकाये सक्यान?",
        "pronunciation": "chī jitu sikāye sakyān?"
      },
      {
        "english": "Children play outside",
        "nepali": "बच्चाहरू बाहिर खेल्छन्",
        "newar": "बच्चात बाहिर खेलये",
        "pronunciation": "bacchāta bāhir khelaye"
      },
      {
        "english": "I walk to the market",
        "nepali": "म बजार हिँडेर जान्छु",
        "newar": "जि बजार हिँडये वये",
        "pronunciation": "ji bajār hiṁḍaye waye"
      },
      {
        "english": "Please sit down",
        "nepali": "कृपया बस्नुहोस्",
        "newar": "कृपया बुसये",
        "pronunciation": "kripayā busaye"
      },
      {
        "english": "Give me water",
        "nepali": "मलाई पानी दिनुहोस्",
        "newar": "जितु लः दिये",
        "pronunciation": "jitu la diye"
      },
      {
        "english": "I will take this",
        "nepali": "म यो लिन्छु",
        "newar": "जि बि लिये",
        "pronunciation": "ji bi liye"
      },
      {
        "english": "I need to buy food",
        "nepali": "मलाई खाना किन्नुपर्छ",
        "newar": "जितु न्हेगु किनये लागे",
        "pronunciation": "jitu nhegu kinaye lāge"
      },
      {
        "english": "Open the window",
        "nepali": "झ्याल खोल्नुहोस्",
        "newar": "झ्याल खुलये",
        "pronunciation": "jhyāl khulaye"
      },
      {
        "english": "Close the door",
        "nepali": "ढोका बन्द गर्नुहोस्",
        "newar": "भें बं याये",
        "pronunciation": "bheṁ baṁ yāye"
      },
      {
        "english": "My mother cooks food",
        "nepali": "मेरी आमाले खाना पकाउँछिन्",
        "newar": "जिगु मां न्हेगु स्वय्",
        "pronunciation": "jigu māṁ nhegu sway"
      },
      {
        "english": "Wash your hands",
        "nepali": "आफ्ना हात धुनुहोस्",
        "newar": "छीगु लः मजाये",
        "pronunciation": "chīgu la majāye"
      },
      {
        "english": "I love my family",
        "nepali": "म मेरो परिवारलाई माया गर्छु",
        "newar": "जि जिगु परिवारत माया ये",
        "pronunciation": "ji jigu parivārata māyā ye"
      },
      {
        "english": "I like this song",
        "nepali": "मलाई यो गीत मन पर्छ",
        "newar": "जितु बि गीत मन पर्छ",
        "pronunciation": "jitu bi gīt man parcha"
      },
      {
        "english": "What do you want?",
        "nepali": "तपाईं के चाहनुहुन्छ?",
        "newar": "छी सु छ्वंग?",
        "pronunciation": "chī su chwanga?"
      },
      {
        "english": "I need help",
        "nepali": "मलाई मद्दत चाहियो",
        "newar": "जितु मद्दत छ्वंग",
        "pronunciation": "jitu maddata chwanga"
      },
      {
        "english": "I think so",
        "nepali": "म त्यसो सोच्छु",
        "newar": "जि ते सुचये",
        "pronunciation": "ji te suchaye"
      },
      {
        "english": "Do you know?",
        "nepali": "तपाईंलाई थाहा छ?",
        "newar": "छीत वाः छ?",
        "pronunciation": "chīta wāḥ cha?"
      },
      {
        "english": "I understand",
        "nepali": "म बुझें",
        "newar": "जि बुझ्यें",
        "pronunciation": "ji bujhyẽ"
      },
      {
        "english": "I forgot",
        "nepali": "म बिर्सें",
        "newar": "जि बिर्स्यें",
        "pronunciation": "jı birsyẽ"
      },
      {
        "english": "Please remember",
        "nepali": "कृपया सम्झनुहोस्",
        "newar": "कृपया सम्झये",
        "pronunciation": "kripayā samjhaye"
      },
      {
        "english": "Ask him",
        "nepali": "उसलाई सोध्नुहोस्",
        "newar": "्वत सोधये",
        "pronunciation": "wata sodhaye"
      },
      {
        "english": "Answer me",
        "nepali": "मलाई जवाफ दिनुहोस्",
        "newar": "जितु जबाब दिये",
        "pronunciation": "jitu jabāb diye"
      },
      {
        "english": "Call the doctor",
        "nepali": "डाक्टरलाई बोलाउनुहोस्",
        "newar": "डाक्टरत वनेय",
        "pronunciation": "ḍākṭarata waneye"
      },
      {
        "english": "Wait for me",
        "nepali": "मेरो लागि पर्खनुहोस्",
        "newar": "जिगु लागि थ्वः",
        "pronunciation": "jigu lāgi thwa"
      },
      {
        "english": "I can't find my keys",
        "nepali": "मेरो साँचो भेट्टाउन सक्दिन",
        "newar": "जिगु साँचो भेटये सकिना",
        "pronunciation": "jigu sā̃cho bheṭaye sakinā"
      },
      {
        "english": "I lost my phone",
        "nepali": "मेरो फोन हरायो",
        "newar": "जिगु फोन हराये",
        "pronunciation": "jigu phon harāye"
      },
      {
        "english": "Try again",
        "nepali": "फेरी प्रयास गर्नुहोस्",
        "newar": "फेरि प्रयास याये",
        "pronunciation": "pheri prayās yāye"
      },
      {
        "english": "Use this",
        "nepali": "यो प्रयोग गर्नुहोस्",
        "newar": "बि प्रयोग याये",
        "pronunciation": "bi prayog yāye"
      },
      {
        "english": "Can you help me?",
        "nepali": "के तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?",
        "newar": "छी जितु मद्दत याये सक्यान?",
        "pronunciation": "chī jitu maddata yāye sakyān?"
      },
      {
        "english": "Let's begin",
        "nepali": "सुरु गरौं",
        "newar": "सुरु याये",
        "pronunciation": "suru yāye"
      },
      {
        "english": "I finished my work",
        "nepali": "मेरो काम सक्यो",
        "newar": "जिगु काम सक्ये",
        "pronunciation": "jigu kām sakye"
      },
      {
        "english": "Stop here",
        "nepali": "यहाँ रोक्नुहोस्",
        "newar": "सुगं रोकये",
        "pronunciation": "sugaṁ rokaye"
      },
      {
        "english": "Nice to meet you",
        "nepali": "तपाईंलाई भेटेर खुशी लाग्यो",
        "newar": "छीत भेटेर खुशी लागे",
        "pronunciation": "chīta bheṭera khuśī lāge"
      },
      {
        "english": "How do you feel?",
        "nepali": "तपाईंलाई कस्तो लाग्छ?",
        "newar": "छीत कं मचेकु?",
        "pronunciation": "chīta kaṁ macheku?"
      },
      {
        "english": "I live in Kathmandu",
        "nepali": "म काठमाडौंमा बस्छु",
        "newar": "जि येँ बस्छु",
        "pronunciation": "ji yẽ baschu"
      },
      {
        "english": "I am going home",
        "nepali": "म घर जादै छु",
        "newar": "जि छें वदि छु",
        "pronunciation": "ji chẽ wadi chu"
      },
      {
        "english": "She is coming tomorrow",
        "nepali": "उनी भोलि आउँदै छिन्",
        "newar": "्वा म्ह्यां वादि छ",
        "pronunciation": "wā mhyāṁ wādi cha"
      },
      {
        "english": "We are eating dinner",
        "nepali": "हामी खाना खादै छौं",
        "newar": "जि न्हेगु नादि छ",
        "pronunciation": "ji nhegu nādi cha"
      },
      {
        "english": "They are playing football",
        "nepali": "तिनीहरू फुटबल खेल्दै छन्",
        "newar": "तित फुटबल खेलदि छ",
        "pronunciation": "tita phuṭabal kheladi cha"
      },
      {
        "english": "What are you doing?",
        "nepali": "तपाईं के गर्दै हुनुहुन्छ?",
        "newar": "छी सु यादि यान?",
        "pronunciation": "chī su yādi yān?"
      },
      {
        "english": "I was sleeping",
        "nepali": "म सुतिरहेको थिए",
        "newar": "जि न्हेदि थें",
        "pronunciation": "ji nhedi theṁ"
      },
      {
        "english": "He will come later",
        "nepali": "उ पछि आउनेछ",
        "newar": "्वो पछ्यां वाने",
        "pronunciation": "wo pachhyāṁ wāne"
      },
      {
        "english": "We should go now",
        "nepali": "हामी अहिले जानुपर्छ",
        "newar": "जि अहिले वने लागे",
        "pronunciation": "ji ahile wane lāge"
      },
      {
        "english": "You must study",
        "nepali": "तपाईंले पढ्नुपर्छ",
        "newar": "छीले वाचन याये लागे",
        "pronunciation": "chīle vāchan yāye lāge"
      },
      {
        "english": "Can I help you?",
        "nepali": "के म तपाईंलाई मद्दत गर्न सक्छु?",
        "newar": "जि छीत मद्दत याये सकु?",
        "pronunciation": "ji chīt maddata yāye saku?"
      },
      {
        "english": "Would you like some tea?",
        "nepali": "के तपाईंलाई चिया चाहिन्छ?",
        "newar": "छीत च्या लागे?",
        "pronunciation": "chīt chyā lāge?"
      },
      {
        "english": "Let me try",
        "nepali": "मलाई प्रयास गर्न दिनुहोस्",
        "newar": "जितु प्रयास याये दिये",
        "pronunciation": "jitu prayās yāye diye"
      },
      {
        "english": "I have to work",
        "nepali": "मलाई काम गर्नुपर्छ",
        "newar": "जितु काम याये लागे",
        "pronunciation": "jitu kām yāye lāge"
      },
      {
        "english": "She wants to sleep",
        "nepali": "उनी सुत्न चाहन्छिन्",
        "newar": "्वा न्हेये छ्वंग",
        "pronunciation": "wā nheye chwanga"
      },
      {
        "english": "We love to travel",
        "nepali": "हामीलाई यात्रा गर्न मन पर्छ",
        "newar": "जितु यात्रा याये मन पर्छ",
        "pronunciation": "jitu yātrā yāye man parcha"
      },
      {
        "english": "They like to sing",
        "nepali": "तिनीहरूलाई गाउन मन पर्छ",
        "newar": "तित गायन याये मन पर्छ",
        "pronunciation": "tita gāyan yāye man parcha"
      },
      {
        "english": "I need to buy a ticket",
        "nepali": "मलाई टिकट किन्नुपर्छ",
        "newar": "जितु टिकट किनये लागे",
        "pronunciation": "jitu ṭikaṭ kinaye lāge"
      },
      {
        "english": "Please come in",
        "nepali": "कृपया भित्र आउनुहोस्",
        "newar": "कृपया भित्र वाये",
        "pronunciation": "kripayā bhitra wāye"
      },
      {
        "english": "Sit here",
        "nepali": "यहाँ बस्नुहोस्",
        "newar": "सुगं बुसये",
        "pronunciation": "sugaṁ busaye"
      },
      {
        "english": "Listen carefully",
        "nepali": "ध्यान दिएर सुन्नुहोस्",
        "newar": "ध्यान दिये सुनये",
        "pronunciation": "dhyān diye sunaye"
      },
      {
        "english": "Speak loudly",
        "nepali": "ठूलो स्वरमा बोल्नुहोस्",
        "newar": "ज्यापु आवाजं भाये",
        "pronunciation": "jyāpu āvājaṁ bhāye"
      },
      {
        "english": "Write it down",
        "nepali": "यसलाई लेख्नुहोस्",
        "newar": "बिल लेखन याये",
        "pronunciation": "bila lekhan yāye"
      },
      {
        "english": "Read this letter",
        "nepali": "यो पत्र पढ्नुहोस्",
        "newar": "बि पत्र वाचन याये",
        "pronunciation": "bi patra vāchan yāye"
      },
      {
        "english": "Think before you speak",
        "nepali": "बोल्नु अगाडि सोच्नुहोस्",
        "newar": "भाये अगाडि सुचये",
        "pronunciation": "bhāye agāḍi suchaye"
      },
      {
        "english": "Try to understand",
        "nepali": "बुझ्न प्रयास गर्नुहोस्",
        "newar": "बुझये प्रयास याये",
        "pronunciation": "bujhaye prayās yāye"
      },
      {
        "english": "Don't forget",
        "nepali": "नबिर्सनुहोस्",
        "newar": "मबिर्सये",
        "pronunciation": "mabirsaye"
      },
      {
        "english": "Remember me",
        "nepali": "मलाई सम्झनुहोस्",
        "newar": "जितु सम्झये",
        "pronunciation": "jitu samjhaye"
      },
      {
        "english": "Ask your teacher",
        "nepali": "आफ्नो शिक्षकलाई सोध्नुहोस्",
        "newar": "छीगु शिक्षकत सोधये",
        "pronunciation": "chīgu śikṣakata sodhaye"
      },
      {
        "english": "Answer the question",
        "nepali": "प्रश्नको जवाफ दिनुहोस्",
        "newar": "प्रश्नया जबाब दिये",
        "pronunciation": "praśnayā jabāb diye"
      },
      {
        "english": "Call me tomorrow",
        "nepali": "भोलि मलाई कल गर्नुहोस्",
        "newar": "म्ह्यां जितु कल याये",
        "pronunciation": "mhyāṁ jitu kal yāye"
      },
      {
        "english": "Wait a minute",
        "nepali": "एक मिनेट पर्खनुहोस्",
        "newar": "छिं मिनेट थ्वः",
        "pronunciation": "chiṁ minet thwa"
      },
      {
        "english": "Find a job",
        "nepali": "काम भेट्टाउनुहोस्",
        "newar": "काम भेटये",
        "pronunciation": "kām bheṭaye"
      },
      {
        "english": "Don't lose hope",
        "nepali": "आशा नहराउनुहोस्",
        "newar": "आशा महराये",
        "pronunciation": "āśā maharāye"
      },
      {
        "english": "Use your time well",
        "nepali": "आफ्नो समय राम्रोसँग प्रयोग गर्नुहोस्",
        "newar": "छीगु बेला ल्हाये प्रयोग याये",
        "pronunciation": "chīgu belā lhāyē prayog yāye"
      },
      {
        "english": "Help each other",
        "nepali": "एक अर्काको मद्दत गर्नुहोस्",
        "newar": "छ्यंगु छ्यंगुया मद्दत याये",
        "pronunciation": "chyaṁgu chyaṁguyā maddata yāye"
      },
      {
        "english": "Let's finish this",
        "nepali": "यो सक्यौं",
        "newar": "बि सक्ये",
        "pronunciation": "bi sakye"
      },
      {
        "english": "Stop talking",
        "nepali": "बोल्न बन्द गर्नुहोस्",
        "newar": "भाये बं याये",
        "pronunciation": "bhāye baṁ yāye"
      },
      {
        "english": "I enjoy cooking",
        "nepali": "मलाई पकाउन मन पर्छ",
        "newar": "जितु स्वये मन पर्छ",
        "pronunciation": "jitu swaye man parcha"
      },
      {
        "english": "He works hard",
        "nepali": "उसले गाह्रो मेहनत गर्छ",
        "newar": "्वाले गाह्रो मेहनत ये",
        "pronunciation": "wāle gāhro mehanata ye"
      },
      {
        "english": "We learn every day",
        "nepali": "हामी हरेक दिन सिक्छौं",
        "newar": "जि प्रतेक दिन सिकये",
        "pronunciation": "ji pratek din sikaye"
      },
      {
        "english": "Life goes on",
        "nepali": "जीवन चल्दै रहन्छ",
        "newar": "जीवन चलदि रहने",
        "pronunciation": "jīvan chaladi rahane"
      }
    ],
     difficulty: "advanced",
    duration: 40,
    wordsCount: 40
  },


24: {
  "id": 117,
  "title": "Adjectives & Descriptions",
  "description": "Essential adjectives and descriptive phrases to characterize people, objects, feelings, and situations in daily conversation",
  "content": [
    {
      "english": "Good",
      "nepali": "राम्रो",
      "newar": "राम्रो",
      "pronunciation": "rāmro"
    },
    {
      "english": "Bad",
      "nepali": "नराम्रो",
      "newar": "मराम्रो",
      "pronunciation": "marāmro"
    },
    {
      "english": "Big",
      "nepali": "ठूलो",
      "newar": "ज्यापु",
      "pronunciation": "jyāpu"
    },
    {
      "english": "Small",
      "nepali": "सानो",
      "newar": "पिचु",
      "pronunciation": "picu"
    },
    {
      "english": "New",
      "nepali": "नयाँ",
      "newar": "न्हू",
      "pronunciation": "nhū"
    },
    {
      "english": "Old",
      "nepali": "पुरानो",
      "newar": "च्वन",
      "pronunciation": "chwan"
    },
    {
      "english": "Young",
      "nepali": "जवान",
      "newar": "यलाया",
      "pronunciation": "yalāyā"
    },
    {
      "english": "Hot",
      "nepali": "तातो",
      "newar": "तातो",
      "pronunciation": "tāto"
    },
    {
      "english": "Cold",
      "nepali": "चिसो",
      "newar": "ह्य्घु",
      "pronunciation": "hyaghu"
    },
    {
      "english": "Warm",
      "nepali": "न्यानो",
      "newar": "न्यानो",
      "pronunciation": "nyāno"
    },
    {
      "english": "Cool",
      "nepali": "सुहाउँदो",
      "newar": "सुहाउँदो",
      "pronunciation": "suhāundo"
    },
    {
      "english": "Fast",
      "nepali": "छिटो",
      "newar": "ल्हे",
      "pronunciation": "lhe"
    },
    {
      "english": "Slow",
      "nepali": "बिस्तारै",
      "newar": "म्है",
      "pronunciation": "mhai"
    },
    {
      "english": "Easy",
      "nepali": "सजिलो",
      "newar": "सजिलो",
      "pronunciation": "sajilo"
    },
    {
      "english": "Difficult",
      "nepali": "गाह्रो",
      "newar": "मस्कि",
      "pronunciation": "maski"
    },
    {
      "english": "Expensive",
      "nepali": "महँगो",
      "newar": "म्हग्ग",
      "pronunciation": "mhagg"
    },
    {
      "english": "Cheap",
      "nepali": "सस्तो",
      "newar": "सस्तो",
      "pronunciation": "sasto"
    },
    {
      "english": "Rich",
      "nepali": "धनी",
      "newar": "धनी",
      "pronunciation": "dhanī"
    },
    {
      "english": "Poor",
      "nepali": "गरिब",
      "newar": "गरिब",
      "pronunciation": "garib"
    },
    {
      "english": "Strong",
      "nepali": "बलियो",
      "newar": "ज्यु",
      "pronunciation": "jyu"
    },
    {
      "english": "Weak",
      "nepali": "कमजोर",
      "newar": "बलहीन",
      "pronunciation": "balahīn"
    },
    {
      "english": "Hard",
      "nepali": "गाह्रो",
      "newar": "खपु",
      "pronunciation": "khapu"
    },
    {
      "english": "Soft",
      "nepali": "नरम",
      "newar": "म्हैम्है",
      "pronunciation": "mhaimhai"
    },
    {
      "english": "Heavy",
      "nepali": "गह्रौं",
      "newar": "ज्यु",
      "pronunciation": "jyu"
    },
    {
      "english": "Light",
      "nepali": "हलुका",
      "newar": "हलुका",
      "pronunciation": "halkā"
    },
    {
      "english": "Long",
      "nepali": "लामो",
      "newar": "तुडु",
      "pronunciation": "tuḍu"
    },
    {
      "english": "Short",
      "nepali": "चोटो",
      "newar": "ख्वँ",
      "pronunciation": "khwã"
    },
    {
      "english": "Tall",
      "nepali": "अग्लो",
      "newar": "अग्लो",
      "pronunciation": "aglo"
    },
    {
      "english": "Short (height)",
      "nepali": "होचो",
      "newar": "होचो",
      "pronunciation": "hoco"
    },
    {
      "english": "Wide",
      "nepali": "फराकिलो",
      "newar": "फराकिलो",
      "pronunciation": "pharākilo"
    },
    {
      "english": "Narrow",
      "nepali": "साँघुरो",
      "newar": "साँघुरो",
      "pronunciation": "sā̃ghuro"
    },
    {
      "english": "Clean",
      "nepali": "सफा",
      "newar": "सफा",
      "pronunciation": "saphā"
    },
    {
      "english": "Dirty",
      "nepali": "फोहोर",
      "newar": "म्हिकु",
      "pronunciation": "mhiku"
    },
    {
      "english": "Beautiful",
      "nepali": "सुन्दर",
      "newar": "म्हेकु",
      "pronunciation": "mheku"
    },
    {
      "english": "Ugly",
      "nepali": "बदसूरत",
      "newar": "न्हेकु",
      "pronunciation": "nheku"
    },
    {
      "english": "Kind",
      "nepali": "दयालु",
      "newar": "मायालु",
      "pronunciation": "māyālu"
    },
    {
      "english": "Mean",
      "nepali": "नराम्रो",
      "newar": "खोकःम्ह",
      "pronunciation": "khokahmha"
    },
    {
      "english": "Happy",
      "nepali": "खुशी",
      "newar": "सुख",
      "pronunciation": "sukha"
    },
    {
      "english": "Sad",
      "nepali": "दुःखी",
      "newar": "दुखी",
      "pronunciation": "dukhī"
    },
    {
      "english": "Smart",
      "nepali": "हुशियार",
      "newar": "बुज्याक",
      "pronunciation": "bujyāk"
    },
    {
      "english": "Stupid",
      "nepali": "मुर्ख",
      "newar": "मुर्ख",
      "pronunciation": "murkha"
    },
    {
      "english": "Funny",
      "nepali": "रमाइलो",
      "newar": "हास्य",
      "pronunciation": "hāsya"
    },
    {
      "english": "Boring",
      "nepali": "बोरिंग",
      "newar": "बोरिंग",
      "pronunciation": "boring"
    },
    {
      "english": "Interesting",
      "nepali": "चाखलाग्दो",
      "newar": "चाखलाग्दो",
      "pronunciation": "cākhlāgdo"
    },
    {
      "english": "Delicious",
      "nepali": "मिठो",
      "newar": "मिठो",
      "pronunciation": "miṭho"
    },
    {
      "english": "Tasty",
      "nepali": "स्वादिलो",
      "newar": "स्वादिलो",
      "pronunciation": "swādilo"
    },
    {
      "english": "Spicy",
      "nepali": "पिरो",
      "newar": "पिरो",
      "pronunciation": "piro"
    },
    {
      "english": "Sweet",
      "nepali": "गुलियो",
      "newar": "गुलियो",
      "pronunciation": "guliyo"
    },
    {
      "english": "Sour",
      "nepali": "अमिलो",
      "newar": "च्वाम्ह",
      "pronunciation": "cwāmha"
    },
    {
      "english": "Salty",
      "nepali": "नुनिलो",
      "newar": "नुनिलो",
      "pronunciation": "nunilo"
    },
    {
      "english": "Bitter",
      "nepali": "तितो",
      "newar": "तितो",
      "pronunciation": "tito"
    },
    {
      "english": "Full",
      "nepali": "भरिएको",
      "newar": "भरि",
      "pronunciation": "bhari"
    },
    {
      "english": "Empty",
      "nepali": "खाली",
      "newar": "हाक्ला",
      "pronunciation": "hāklā"
    },
    {
      "english": "Wet",
      "nepali": "भिजेको",
      "newar": "छ्यां",
      "pronunciation": "chyā̃"
    },
    {
      "english": "Dry",
      "nepali": "सुक्खा",
      "newar": "हिन",
      "pronunciation": "hina"
    },
    {
      "english": "Dark",
      "nepali": "अन्धकार",
      "newar": "म्ह्ये",
      "pronunciation": "mhye"
    },
    {
      "english": "Bright",
      "nepali": "उज्यालो",
      "newar": "ज्याला",
      "pronunciation": "jyālā"
    },
    {
      "english": "Noisy",
      "nepali": "हल्लाएको",
      "newar": "हल्ला",
      "pronunciation": "hallā"
    },
    {
      "english": "Quiet",
      "nepali": "शान्त",
      "newar": "शान्त",
      "pronunciation": "śānta"
    },
    {
      "english": "Dangerous",
      "nepali": "खतरनाक",
      "newar": "खतरनाक",
      "pronunciation": "khatarnāk"
    },
    {
      "english": "Safe",
      "nepali": "सुरक्षित",
      "newar": "सुरक्षित",
      "pronunciation": "surakṣit"
    },
    {
      "english": "This is very good.",
      "nepali": "यो धेरै राम्रो छ।",
      "newar": "बि धेरै राम्रो खः।",
      "pronunciation": "bi dherai rāmro kha."
    },
    {
      "english": "That house is very big.",
      "nepali": "त्यो घर धेरै ठूलो छ।",
      "newar": "ति छें धेरै ज्यापु खः।",
      "pronunciation": "ti chhen dherai jyāpu kha."
    },
    {
      "english": "The water is too cold.",
      "nepali": "पानी धेरै चिसो छ।",
      "newar": "लः धेरै ह्य्घु खः।",
      "pronunciation": "laḥ dherai hyaghu kha."
    },
    {
      "english": "This food is delicious.",
      "nepali": "यो खाना मिठो छ।",
      "newar": "बि खाय् मिठो खः।",
      "pronunciation": "bi khāy miṭho kha."
    },
    {
      "english": "He is a kind person.",
      "nepali": "उनी दयालु व्यक्ति हुन्।",
      "newar": "वा मायालु मनु खः।",
      "pronunciation": "wā māyālu manu kha."
    },
    {
      "english": "She is very smart.",
      "nepali": "उनी धेरै हुशियार छिन्।",
      "newar": "वा धेरै बुज्याक खः।",
      "pronunciation": "wā dherai bujyāk kha."
    },
    {
      "english": "This bag is too heavy.",
      "nepali": "यो झोला धेरै गह्रौं छ।",
      "newar": "बि ब्याग धेरै ज्यु खः।",
      "pronunciation": "bi byāg dherai jyu kha."
    },
    {
      "english": "The road is narrow.",
      "nepali": "बाटो साँघुरो छ।",
      "newar": "बाटो साँघुरो खः।",
      "pronunciation": "bāṭo sā̃ghuro kha."
    },
    {
      "english": "Please be quiet.",
      "nepali": "कृपया शान्त रहनुहोस्।",
      "newar": "कृपया शान्त बजनेय।",
      "pronunciation": "kṛpayā śānta bajaneya."
    },
    {
      "english": "I am very tired.",
      "nepali": "म धेरै थाकेको छु।",
      "newar": "जि धेरै ल्हाय्बि।",
      "pronunciation": "ji dherai lhāybi."
    },
    {
      "english": "The movie was interesting.",
      "nepali": "चलचित्र चाखलाग्दो थियो।",
      "newar": "चलचित्र चाखलाग्दो म्हय्।",
      "pronunciation": "calacitra cākhlāgdo mhay."
    },
    {
      "english": "This is too expensive.",
      "nepali": "यो धेरै महँगो छ।",
      "newar": "बि धेरै म्हग्ग खः।",
      "pronunciation": "bi dherai mhagg kha."
    },
    {
      "english": "Do you have a cheaper one?",
      "nepali": "तपाईंसँग सस्तो छ?",
      "newar": "छिंतःता सस्तो छ?",
      "pronunciation": "chhintaḥtā sasto cha?"
    },
    {
      "english": "The room is clean.",
      "nepali": "कोठा सफा छ।",
      "newar": "भायं सफा खः।",
      "pronunciation": "bhāyaṁ saphā kha."
    },
    {
      "english": "My clothes are dirty.",
      "nepali": "मेरा लुगा फोहोर छन्।",
      "newar": "जिगु वास म्हिकु खः।",
      "pronunciation": "jigu vās mhiku kha."
    },
    {
      "english": "It's a beautiful day.",
      "nepali": "आज सुन्दर दिन छ।",
      "newar": "बेला सुन्दर दिन खः।",
      "pronunciation": "belā sundara dina kha."
    },
    {
      "english": "This work is difficult.",
      "nepali": "यो काम गाह्रो छ।",
      "newar": "बि काम मस्कि खः।",
      "pronunciation": "bi kāma maski kha."
    },
    {
      "english": "That was very easy.",
      "nepali": "त्यो धेरै सजिलो थियो।",
      "newar": "ति धेरै सजिलो म्हय्।",
      "pronunciation": "ti dherai sajilo mhay."
    },
    {
      "english": "He is a strong man.",
      "nepali": "उनी बलियो मानिस हुन्।",
      "newar": "वा ज्यु मनु खः।",
      "pronunciation": "wā jyu manu kha."
    },
    {
      "english": "Be careful, it's dangerous.",
      "nepali": "सावधान हुनुहोस्, यो खतरनाक छ।",
      "newar": "हुशियार बजनेय, बि खतरनाक खः।",
      "pronunciation": "huśiyāra bajaneya, bi khatarnāk kha."
    }
  ],
  "difficulty": "beginner",
  "duration": 30,
  "wordsCount": 108
},


25: {
  "id": 25,
  "title": "Storytelling & Conversation",
  "description": "Essential phrases, idioms, and narrative tools for engaging in conversations and telling stories in daily life",
  "content": [
    {
      "english": "Once upon a time",
      "nepali": "एक समय",
      "newar": "एक समय",
      "pronunciation": "ek samay"
    },
    {
      "english": "Good luck",
      "nepali": "शुभकामना",
      "newar": "शुभकामना",
      "pronunciation": "shubhakamana"
    },
    {
      "english": "A long time ago",
      "nepali": "धेरै पहिले",
      "newar": "धेरै न्हापिंगु",
      "pronunciation": "dherai nhāpingū"
    },
    {
      "english": "It is said that...",
      "nepali": "भनिन्छ कि...",
      "newar": "भनाछ कि...",
      "pronunciation": "bhanācha ki..."
    },
    {
      "english": "Listen to this story",
      "nepali": "यो कथा सुन्नुहोस्",
      "newar": "बि कथा सुनय",
      "pronunciation": "bi kathā sunaya"
    },
    {
      "english": "What happened next?",
      "nepali": "त्यसपछि के भयो?",
      "newar": "अनि का भय?",
      "pronunciation": "ani kā bhaya?"
    },
    {
      "english": "And then...",
      "nepali": "र त्यसपछि...",
      "newar": "अनि...",
      "pronunciation": "ani..."
    },
    {
      "english": "Suddenly",
      "nepali": "अचानक",
      "newar": "अचानक",
      "pronunciation": "achānak"
    },
    {
      "english": "Finally",
      "nepali": "अन्त्यमा",
      "newar": "अन्त्यय्",
      "pronunciation": "antyay"
    },
    {
      "english": "In the end",
      "nepali": "अन्तमा",
      "newar": "म्होलय्",
      "pronunciation": "mholay"
    },
    {
      "english": "To make a long story short",
      "nepali": "छोट्करीमा",
      "newar": "च्वंकरी",
      "pronunciation": "chwankari"
    },
    {
      "english": "Believe it or not",
      "nepali": "विश्वास गर्नुहोस् वा नगर्नुहोस्",
      "newar": "विश्वास येय वा मयेय",
      "pronunciation": "viśvās yeya vā mayeya"
    },
    {
      "english": "No way!",
      "nepali": "हुन्न कहिल्यै!",
      "newar": "मवने!",
      "pronunciation": "mawane!"
    },
    {
      "english": "You won't believe this",
      "nepali": "तपाईंले यो विश्वास गर्नुहुन्न",
      "newar": "छिंतः बि विश्वास मये",
      "pronunciation": "chhintaḥ bi viśvās maye"
    },
    {
      "english": "I'm serious",
      "nepali": "म गम्भीर छु",
      "newar": "जि गम्भीर छु",
      "pronunciation": "ji gambhīra chu"
    },
    {
      "english": "Just kidding",
      "nepali": "मजाक गर्दैछु",
      "newar": "मजाक यान्बि",
      "pronunciation": "majāk yānbi"
    },
    {
      "english": "By the way",
      "nepali": "अनि कुरा",
      "newar": "अनि कुरा",
      "pronunciation": "ani kurā"
    },
    {
      "english": "Speaking of which",
      "nepali": "को कुरा गर्दा",
      "newar": "गु कुरा यानाबिले",
      "pronunciation": "gu kurā yānābile"
    },
    {
      "english": "What do you think?",
      "nepali": "तपाईं के सोच्नुहुन्छ?",
      "newar": "छिंतः का लाग्छ?",
      "pronunciation": "chhintaḥ kā lāgcha?"
    },
    {
      "english": "In my opinion",
      "nepali": "मेरो विचारमा",
      "newar": "जिगु विचारय्",
      "pronunciation": "jigu vicāray"
    },
    {
      "english": "To be honest",
      "nepali": "साच्चै भन्दा",
      "newar": "साच्चै भनाबिले",
      "pronunciation": "sāccai bhanābile"
    },
    {
      "english": "Frankly speaking",
      "nepali": "खुलस्तै भन्दा",
      "newar": "खुलस्तै भनाबिले",
      "pronunciation": "khulastai bhanābile"
    },
    {
      "english": "As a matter of fact",
      "nepali": "वास्तवमा",
      "newar": "वास्तवय्",
      "pronunciation": "vāstavay"
    },
    {
      "english": "Actually",
      "nepali": "वास्तवमा",
      "newar": "दस्सं",
      "pronunciation": "dassaṁ"
    },
    {
      "english": "To tell the truth",
      "nepali": "सत्य भन्दा",
      "newar": "सत्य भनाबिले",
      "pronunciation": "satya bhanābile"
    },
    {
      "english": "It's true",
      "nepali": "यो सत्य हो",
      "newar": "बि सत्य खः",
      "pronunciation": "bi satya kha"
    },
    {
      "english": "That's a lie",
      "nepali": "त्यो झूट हो",
      "newar": "ति झूट खः",
      "pronunciation": "ti jhūṭa kha"
    },
    {
      "english": "I promise",
      "nepali": "म वाचा गर्छु",
      "newar": "जि वाचा याने",
      "pronunciation": "ji vācā yāne"
    },
    {
      "english": "I swear",
      "nepali": "म शपथ लिन्छु",
      "newar": "जि शपथ लिने",
      "pronunciation": "ji śapatha line"
    },
    {
      "english": "Can you keep a secret?",
      "nepali": "तपाईं गोप्य कुरा राख्न सक्नुहुन्छ?",
      "newar": "छिंतः गोप्य कुरा राख्न सक्छ?",
      "pronunciation": "chhintaḥ gopya kurā rākhna sakcha?"
    },
    {
      "english": "Between you and me",
      "nepali": "तपाईं र म बिच",
      "newar": "छिंतः अनि जि मज्याय्",
      "pronunciation": "chhintaḥ ani ji majyāy"
    },
    {
      "english": "Word of mouth",
      "nepali": "मुखबाट",
      "newar": "म्हुतुबाट",
      "pronunciation": "mhutubāṭa"
    },
    {
      "english": "Rumor has it",
      "nepali": "अफवाह छ कि",
      "newar": "अफवाह खः कि",
      "pronunciation": "aphavāha kha ki"
    },
    {
      "english": "They say that",
      "nepali": "उनीहरू भन्छन् कि",
      "newar": "वाम्ह भनाछ कि",
      "pronunciation": "wāmha bhanācha ki"
    },
    {
      "english": "According to",
      "nepali": "अनुसार",
      "newar": "अनुसार",
      "pronunciation": "anusāra"
    },
    {
      "english": "For example",
      "nepali": "उदाहरणको लागि",
      "newar": "उदाहरणगु निम्ति",
      "pronunciation": "udāharanagu nimti"
    },
    {
      "english": "Such as",
      "nepali": "जस्तै",
      "newar": "जस्तै",
      "pronunciation": "jastai"
    },
    {
      "english": "Like this",
      "nepali": "यस्तो",
      "newar": "बिस्का",
      "pronunciation": "biskā"
    },
    {
      "english": "Like that",
      "nepali": "त्यस्तो",
      "newar": "तिस्का",
      "pronunciation": "tiskā"
    },
    {
      "english": "More or less",
      "nepali": "कमवा बढी",
      "newar": "कम वा बढी",
      "pronunciation": "kam vā baḍhī"
    },
    {
      "english": "Sort of",
      "nepali": "यस्तै किसिमको",
      "newar": "बिस्का किसिमगु",
      "pronunciation": "biskā kisimagu"
    },
    {
      "english": "Kind of",
      "nepali": "किसिमको",
      "newar": "किसिमगु",
      "pronunciation": "kisimagu"
    },
    {
      "english": "What's up?",
      "nepali": "के छ?",
      "newar": "का छ?",
      "pronunciation": "kā cha?"
    },
    {
      "english": "How's it going?",
      "nepali": "कस्तो छ?",
      "newar": "कसरी छ?",
      "pronunciation": "kasarī cha?"
    },
    {
      "english": "What's new?",
      "nepali": "के नयाँ छ?",
      "newar": "का न्हू छ?",
      "pronunciation": "kā nhū cha?"
    },
    {
      "english": "Long time no see",
      "nepali": "धेरै समय देखि भेट छैन",
      "newar": "धेरै समय न्हुताये मभेट",
      "pronunciation": "dherai samaya nhutāye mabheṭa"
    },
    {
      "english": "What have you been up to?",
      "nepali": "तपाईं के गर्दै हुनुहुन्छ?",
      "newar": "छिंतः का यान्बि?",
      "pronunciation": "chhintaḥ kā yānbi?"
    },
    {
      "english": "Same as usual",
      "nepali": "साधारण जस्तै",
      "newar": "साधारण जस्तै",
      "pronunciation": "sādhāraṇa jastai"
    },
    {
      "english": "Nothing much",
      "nepali": "धेरै केही छैन",
      "newar": "धेरै मखु",
      "pronunciation": "dherai makhu"
    },
    {
      "english": "You know what I mean?",
      "nepali": "तपाईंले बुझ्नुभयो?",
      "newar": "छिंतः बुझिय?",
      "pronunciation": "chhintaḥ bujhiya?"
    },
    {
      "english": "Know what?",
      "nepali": "थाहा छ?",
      "newar": "थाहा छ?",
      "pronunciation": "thāhā cha?"
    },
    {
      "english": "Let me tell you",
      "nepali": "म भन्छु",
      "newar": "जि भनाछु",
      "pronunciation": "ji bhanāchu"
    },
    {
      "english": "Let me think",
      "nepali": "मलाई सोच्न दिनुहोस्",
      "newar": "जितु सोच्न दिय",
      "pronunciation": "jitu socna diya"
    },
    {
      "english": "I have no idea",
      "nepali": "मलाई थाहा छैन",
      "newar": "जितु थाहा मखु",
      "pronunciation": "jitu thāhā makhu"
    },
    {
      "english": "It depends",
      "nepali": "यो निर्भर गर्छ",
      "newar": "बि निर्भर याने",
      "pronunciation": "bi nirbhara yāne"
    },
    {
      "english": "Of course",
      "nepali": "अवश्य",
      "newar": "अवश्य",
      "pronunciation": "avaśya"
    },
    {
      "english": "Definitely",
      "nepali": "निश्चित रूपमा",
      "newar": "निश्चित रूपय्",
      "pronunciation": "niścita rūpay"
    },
    {
      "english": "Absolutely",
      "nepali": "पूर्ण रूपमा",
      "newar": "पूर्ण रूपय्",
      "pronunciation": "pūrṇa rūpay"
    },
    {
      "english": "Probably",
      "nepali": "सम्भवतः",
      "newar": "सम्भवतः",
      "pronunciation": "sambhavataḥ"
    },
    {
      "english": "Maybe",
      "nepali": "हुनसक्छ",
      "newar": "हुनसक्छ",
      "pronunciation": "hun sakcha"
    },
    {
      "english": "Perhaps",
      "nepali": "शायद",
      "newar": "शायद",
      "pronunciation": "śāyada"
    },
    {
      "english": "I doubt it",
      "nepali": "मलाई शंका छ",
      "newar": "जितु शंका छ",
      "pronunciation": "jitu śaṅkā cha"
    },
    {
      "english": "I guess so",
      "nepali": "मैले यस्तो अनुमान गर्छु",
      "newar": "जि बिस्का अनुमान याने",
      "pronunciation": "ji biskā anumāna yāne"
    },
    {
      "english": "It sounds good",
      "nepali": "यो राम्रो लाग्यो",
      "newar": "बि राम्रो भाने",
      "pronunciation": "bi rāmro bhāne"
    },
    {
      "english": "That reminds me",
      "nepali": "यसले मलाई सम्झाउँछ",
      "newar": "बिं जितु सम्झाय",
      "pronunciation": "biṁ jitu samjhāya"
    },
    {
      "english": "Come to think of it",
      "nepali": "सोच्दा",
      "newar": "सोचाबिले",
      "pronunciation": "socābile"
    },
    {
      "english": "On the other hand",
      "nepali": "अर्कोतर्फ",
      "newar": "अर्कोतर्फ",
      "pronunciation": "arkotarpha"
    },
    {
      "english": "In other words",
      "nepali": "अर्को शब्दमा",
      "newar": "अर्को शब्दय्",
      "pronunciation": "arko śabday"
    },
    {
      "english": "That is to say",
      "nepali": "त्यो भन्नाले",
      "newar": "ति भनाबिले",
      "pronunciation": "ti bhanābile"
    },
    {
      "english": "What do you mean?",
      "nepali": "तपाईं के भन्नुभयो?",
      "newar": "छिंतः का भनाबि?",
      "pronunciation": "chhintaḥ kā bhanābi?"
    },
    {
      "english": "What does that mean?",
      "nepali": "त्यसको मतलब के हो?",
      "newar": "तिगु अर्थ कं खः?",
      "pronunciation": "tigu artha kan kha?"
    },
    {
      "english": "How do you say this?",
      "nepali": "यसलाई कसरी भनिन्छ?",
      "newar": "बिता कसरी भनाछ?",
      "pronunciation": "bitā kasarī bhanācha?"
    },
    {
      "english": "What is this called?",
      "nepali": "यसलाई के भनिन्छ?",
      "newar": "बिता कं भनाछ?",
      "pronunciation": "bitā kan bhanācha?"
    },
    {
      "english": "I don't understand",
      "nepali": "मैले बुझिन",
      "newar": "जितु बुझिन",
      "pronunciation": "jitu bujhina"
    },
    {
      "english": "Could you repeat that?",
      "nepali": "के तपाईं फेरि भन्न सक्नुहुन्छ?",
      "newar": "छिंतः पल्टा भन्न सक्छ?",
      "pronunciation": "chhintaḥ paḷṭā bhanna sakcha?"
    },
    {
      "english": "Could you speak slowly?",
      "nepali": "के तपाईं बिस्तारै बोल्न सक्नुहुन्छ?",
      "newar": "छिंतः बिस्तारै भण्ण सक्छ?",
      "pronunciation": "chhintaḥ bistārai bhaṇṇa sakcha?"
    },
    {
      "english": "How interesting!",
      "nepali": "कति चाखलाग्दो!",
      "newar": "कति चाखलाग्दो!",
      "pronunciation": "kati cākhlāgdo!"
    },
    {
      "english": "How wonderful!",
      "nepali": "कति अचम्म!",
      "newar": "कति अचम्म!",
      "pronunciation": "kati acamma!"
    },
    {
      "english": "What a pity!",
      "nepali": "कति दुःख!",
      "newar": "कति दुःख!",
      "pronunciation": "kati duḥkha!"
    },
    {
      "english": "What a shame!",
      "nepali": "कति लाज!",
      "newar": "कति लाज!",
      "pronunciation": "kati lāja!"
    },
    {
      "english": "Congratulations!",
      "nepali": "बधाई छ!",
      "newar": "बधाई!",
      "pronunciation": "badhāī!"
    },
    {
      "english": "Well done!",
      "nepali": "राम्रो भयो!",
      "newar": "राम्रो म्हय्!",
      "pronunciation": "rāmro mhay!"
    },
    {
      "english": "Good job!",
      "nepali": "राम्रो काम!",
      "newar": "राम्रो काम!",
      "pronunciation": "rāmro kāma!"
    },
    {
      "english": "That's great!",
      "nepali": "त्यो धेरै राम्रो!",
      "newar": "ति धेरै राम्रो!",
      "pronunciation": "ti dherai rāmro!"
    },
    {
      "english": "That's terrible!",
      "nepali": "त्यो भयानक!",
      "newar": "ति भयानक!",
      "pronunciation": "ti bhayānaka!"
    },
    {
      "english": "That's enough",
      "nepali": "त्यो पर्याप्त छ",
      "newar": "ति पर्याप्त खः",
      "pronunciation": "ti paryāpta kha"
    },
    {
      "english": "Never mind",
      "nepali": "चिन्ता नलिनुहोस्",
      "newar": "चिन्ता ममहा",
      "pronunciation": "cintā mamahā"
    },
    {
      "english": "Don't worry",
      "nepali": "चिन्ता नगर्नुहोस्",
      "newar": "चिन्ता मयेय",
      "pronunciation": "cintā mayeya"
    },
    {
      "english": "Take it easy",
      "nepali": "आरामसंग",
      "newar": "आरामसंग",
      "pronunciation": "ārāmasaṅga"
    },
    {
      "english": "Calm down",
      "nepali": "शान्त हुनुहोस्",
      "newar": "शान्त बजनेय",
      "pronunciation": "śānta bajaneya"
    },
    {
      "english": "What nonsense!",
      "nepali": "कस्तो बकवास!",
      "newar": "कस्तो बकवास!",
      "pronunciation": "kasto bakavāsa!"
    },
    {
      "english": "That's ridiculous!",
      "nepali": "त्यो हास्यास्पद छ!",
      "newar": "ति हास्यास्पद खः!",
      "pronunciation": "ti hāsyāspada kha!"
    },
    {
      "english": "You're joking!",
      "nepali": "तपाईं मजाक गर्दै हुनुहुन्छ!",
      "newar": "छिंतः मजाक यान्बि!",
      "pronunciation": "chhintaḥ majāk yānbi!"
    },
    {
      "english": "I'm just saying",
      "nepali": "म भनिरहेको छु",
      "newar": "जि भनाबि",
      "pronunciation": "ji bhanābi"
    },
    {
      "english": "Let's change the subject",
      "nepali": "विषय परिवर्तन गरौं",
      "newar": "विषय परिवर्तन यान",
      "pronunciation": "viṣaya parivartana yāna"
    },
    {
      "english": "That's another story",
      "nepali": "त्यो अर्को कथा हो",
      "newar": "ति अर्को कथा खः",
      "pronunciation": "ti arko kathā kha"
    },
    {
      "english": "And they lived happily ever after",
      "nepali": "र उनीहरू सधैंको लागि खुशीसाथ बसे",
      "newar": "अनि वाम्ह न्ह्यापिंगु सुखसंग बस्य",
      "pronunciation": "ani wāmha nhyāpingū sukha-saṅga basya"
    },
    {
      "english": "The moral of the story is",
      "nepali": "यस कथाको सीप यो हो",
      "newar": "बि कथागु सीप बि खः",
      "pronunciation": "bi kathāgu sīpa bi kha"
    }
  ],
  "difficulty": "advanced",
  "duration": 50,
  "wordsCount": 108
}
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  // Await the params first
  const { id } = await params;
  const lessonId = parseInt(id);
  const lesson = lessonsData[lessonId as keyof typeof lessonsData];
  
  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
        <p>The requested lesson could not be found.</p>
      </div>
    );
  }

  return <LessonContent lesson={lesson} />;
}

export async function generateStaticParams() {
  return Object.keys(lessonsData).map(id => ({
    id: id
  }));
}









