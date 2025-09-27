// app/api/ai-tutor/route.ts
import { NextRequest, NextResponse } from 'next/server'

// Fallback responses for different query types
const FALLBACK_RESPONSES: { [key: string]: string } = {
  greeting: "Hello! I'm your Newar language AI tutor. How can I help you learn today?",
  thank_you: "In Newar, 'Thank you' is said as 'धुं लासा' (Dhuṁ lāsā). You can use this in most situations to express gratitude.",
  greetings: "Formal greeting: 'ज्वजलपा' (Jwajalapā), Informal: 'लासा' (Lāsā). Use formal greetings with elders and informal with friends.",
  numbers: "Numbers 1-10: १-चा (cha), २-नी (ni), ३-सो (so), ४-पी (pi), ५-ङा (nga), ६-खु (khu), ७-न्हे (nhe), ८-च्ये (chye), ९-गु (gu), १०-सी (si)",
  culture: "Newar culture is rich with festivals like Yomari Punhi (rice cake festival), Indra Jatra (masked dance festival), and Bhoto Jatra (vest exhibition). Each festival has unique traditions, foods, and cultural significance!",
  grammar: "Newar grammar follows Subject-Object-Verb order. Nouns have genders and cases, and verbs change based on tense and politeness level.",
  default: "I'd be happy to help you learn Newar! Could you please rephrase your question or ask about specific phrases, grammar rules, cultural aspects, or vocabulary?"
}

function getSmartResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  if (input.includes('thank') || input.includes('धन्यवाद') || input.includes('gratitude')) {
    return FALLBACK_RESPONSES.thank_you;
  } else if (input.includes('hello') || input.includes('hi') || input.includes('नमस्ते') || input.includes('greet')) {
    return FALLBACK_RESPONSES.greetings + " For example: 'नमस्ते, त्वं पा कसरी छौ?' means 'Hello, how are you?'";
  } else if (input.includes('number') || input.includes('count') || input.includes('संख्या') || input.includes('math')) {
    return FALLBACK_RESPONSES.numbers;
  } else if (input.includes('culture') || input.includes('festival') || input.includes('संस्कृति') || input.includes('त्योहार')) {
    return FALLBACK_RESPONSES.culture;
  } else if (input.includes('grammar') || input.includes('sentence') || input.includes('वाक्य') || input.includes('structure')) {
    return FALLBACK_RESPONSES.grammar;
  } else if (input.includes('what is') || input.includes('what are') || input.includes('के हो') || input.includes('explain')) {
    return "I can explain various Newar language concepts. Could you be more specific about what you'd like to know? For example, you could ask about specific words, phrases, or grammar rules.";
  } else if (input.includes('how to') || input.includes('how do i') || input.includes('कसरी')) {
    return "I can help you learn how to say or do things in Newar. Please specify what you'd like to learn - for example, 'How to introduce myself' or 'How to order food'.";
  }
  
  return FALLBACK_RESPONSES.default;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversation } = await request.json()

    // Try to use OpenRouter API if API key is available
    const openRouterApiKey = process.env.OPENROUTER_API_KEY;
    
    if (openRouterApiKey && openRouterApiKey !== 'your-api-key-here') {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${openRouterApiKey}`,
          "HTTP-Referer": "https://newar-samaj-web.vercel.app",
          "X-Title": "Newar Samaj Web",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1:free",
          "messages": [
            {
              "role": "system",
              "content": "You are a helpful AI tutor specializing in teaching the Newar language (Nepal Bhasa). Provide clear explanations, cultural context, and practical examples. Be patient and encouraging. Always include both Devanagari script and Roman transliteration when teaching Newar words."
            },
            ...conversation.map((msg: any) => ({
              role: msg.role,
              content: msg.content
            })),
            {
              "role": "user",
              "content": message
            }
          ],
          "max_tokens": 800,
          "temperature": 0.7
        })
      })

      if (response.ok) {
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          return NextResponse.json({ 
            response: data.choices[0].message.content,
            source: "openrouter"
          });
        }
      }
    }

    // Fallback to smart response
    const smartResponse = getSmartResponse(message);
    return NextResponse.json({ 
      response: smartResponse,
      source: "smart-fallback"
    });

  } catch (error) {
    console.error('AI Tutor API error:', error)
    const smartResponse = getSmartResponse('error');
    return NextResponse.json({ 
      response: smartResponse,
      source: "error-fallback"
    });
  }
}