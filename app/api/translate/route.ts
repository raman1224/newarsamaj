// app/api/translate/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock translation database
const translationDictionary: Record<string, { ne: string; new: string }> = {
  "hello": { ne: "नमस्कार", new: "ज्वजलपा" },
  "thank you": { ne: "धन्यवाद", new: "सुभाय्" },
  "how are you": { ne: "तपाईंलाई कस्तो छ?", new: "छिगु थ्व कसरी छ?" },
  "good morning": { ne: "शुभ प्रभात", new: "शुभ प्रभात" },
  "good night": { ne: "शुभ रात्री", new: "शुभ रात्री" },
  "welcome": { ne: "स्वागतम्", new: "स्वागतम्" },
  "please": { ne: "कृपया", new: "कृपया" },
  "sorry": { ne: "माफ गर्नुहोस्", new: "माफ यानाह" },
  "excuse me": { ne: "माफ गर्नुहोस्", new: "माफ यानाह" },
  "yes": { ne: "हो", new: "हो" },
  "no": { ne: "होइन", new: "होइन" },
  "maybe": { ne: "हुनसक्छ", new: "हुनसक्छ" },
  "i don't understand": { ne: "मैले बुझिन", new: "जिले बुझिन" },
  "what is your name": { ne: "तपाईंको नाम के हो?", new: "छिगु नाम के ख?" },
  "my name is": { ne: "मेरो नाम ... हो", new: "जिगु नाम ... ख" },
  "where are you from": { ne: "तपाईं कहाँबाट हुनुहुन्छ?", new: "छिइ कता बट्टा यानि?" },
  "i am from": { ne: "म ... बाट हुँ", new: "जि ... बट्टा यानि" },
  "how much is this": { ne: "यो कति हो?", new: "थ्व कति ख?" },
  "goodbye": { ne: "अलविदा", new: "अलविदा" },
  "see you later": { ne: "पछि भेटौला", new: "पछि भेटौंला" },
  "please speak slowly": { ne: "कृपया बिस्तारै बोल्नुहोस्", new: "कृपया बिस्तारै बोल्नाह" },
  "i love you": { ne: "म तपाईंलाई माया गर्छु", new: "जि छिइ लागि माया याना" },
  "family": { ne: "परिवार", new: "परिवार" },
  "friend": { ne: "साथी", new: "साथी" },
  "food": { ne: "खाना", new: "खाना" },
  "water": { ne: "पानी", new: "पानी" },
  "house": { ne: "घर", new: "छेँ" },
  "school": { ne: "स्कूल", new: "स्कूल" },
  "work": { ne: "काम", new: "काम" },
  "money": { ne: "पैसा", new: "पैसा" },
  "day": { ne: "दिन", new: "दिन" },
  "night": { ne: "रात", new: "रात" },
  "today": { ne: "आज", new: "आज" },
  "tomorrow": { ne: "भोलि", new: "भोलि" },
  "yesterday": { ne: "हिजो", new: "हिजो" },
  "now": { ne: "अहिले", new: "अहिले" },
  "later": { ne: "पछि", new: "पछि" },
  "beautiful": { ne: "सुन्दर", new: "सुन्दर" },
  "happy": { ne: "खुशी", new: "खुशी" },
  "sad": { ne: "दु:खी", new: "दु:खी" },
  "hungry": { ne: "भोकाइलो", new: "भोकाइलो" },
  "thirsty": { ne: "तिर्खाइलो", new: "तिर्खाइलो" },
  "tired": { ne: "थाकिएको", new: "थाकिएको" },
  "one": { ne: "एक", new: "एक" },
  "two": { ne: "दुई", new: "दुई" },
  "three": { ne: "तीन", new: "तीन" },
  "four": { ne: "चार", new: "चार" },
  "five": { ne: "पाँच", new: "पाँच" },
  "six": { ne: "छ", new: "छ" },
  "seven": { ne: "सात", new: "सात" },
  "eight": { ne: "आठ", new: "आठ" },
  "nine": { ne: "नौ", new: "नौ" },
  "ten": { ne: "दश", new: "दश" }
};

export async function POST(request: NextRequest) {
  try {
    const { text, fromLang, toLang } = await request.json();
    
    if (!text || !fromLang || !toLang) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Convert to lowercase for case-insensitive matching
    const searchText = text.toLowerCase().trim();
    
    // Find translation in our dictionary
    const translation = translationDictionary[searchText];
    
    if (!translation) {
      return NextResponse.json(
        { 
          translation: `Translation not found for "${text}"`,
          note: "This is a demo translation system. In a full implementation, this would connect to a proper translation API."
        }
      );
    }

    let result: string;
    
    if (fromLang === 'en' && toLang === 'ne') {
      result = translation.ne;
    } else if (fromLang === 'en' && toLang === 'new') {
      result = translation.new;
    } else if (fromLang === 'ne' && toLang === 'en') {
      // Reverse lookup - this is simplified for demo purposes
      result = Object.entries(translationDictionary)
        .find(([key, value]) => value.ne === text)?.[0] || `English translation for "${text}"`;
    } else if (fromLang === 'new' && toLang === 'en') {
      result = Object.entries(translationDictionary)
        .find(([key, value]) => value.new === text)?.[0] || `English translation for "${text}"`;
    } else if (fromLang === 'ne' && toLang === 'new') {
      result = translation.new; // Assuming same structure
    } else if (fromLang === 'new' && toLang === 'ne') {
      result = translation.ne; // Assuming same structure
    } else {
      return NextResponse.json(
        { error: 'Unsupported language pair' },
        { status: 400 }
      );
    }

    return NextResponse.json({ translation: result });
  } catch (error) {
    console.error('Translation API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process translation' },
      { status: 500 }
    );
  }
}