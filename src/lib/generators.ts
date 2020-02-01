import { Translations } from "./interfaces"

export const generateReverseTranslations = (translations: Translations): Translations => {
  const reverseTranslations: Translations = {}
  Object.keys(translations).forEach(lang => {
    const translation = translations[lang];
    reverseTranslations[lang] = {}
    Object.keys(translation).forEach(enumKey => {
      reverseTranslations[lang][translations[lang][Number(enumKey)]] = enumKey
    })
  })
  return reverseTranslations;
}

export const generateEncoder = <T>(translations: Translations): (raw: T, lang: string) => string => {
  return (raw: T, lang: string): string => {
    return translations[lang][raw as unknown as number];
  }
}

export const generateDecoder = <T>(reverseTranslations: Translations): (text: string, lang: string) => T => {
  return (text: string, lang: string): T => {
    return Number(reverseTranslations[lang][text]) as unknown as T;
  }
}
