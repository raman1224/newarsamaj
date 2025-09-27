// // lib/i18n.ts
// 'use client'

// const translations = {
//   en: {
//     // Your English translations here
//   },
//   ne: {
//     // Your Nepali translations here  
//   },
//   new: {
//     // Your Newa translations here
//   }
// }

// export function useTranslation(locale: string = 'en') {
//   const t = (key: string): string => {
//     const keys = key.split('.')
//     let value: any = translations[locale]
    
//     for (const k of keys) {
//       if (value && typeof value === 'object' && k in value) {
//         value = value[k]
//       } else {
//         return key // Return key if translation not found
//       }
//     }
    
//     return typeof value === 'string' ? value : key
//   }
  
//   return { t }
// }