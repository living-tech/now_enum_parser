import { Language } from './language';
import { Translations } from './interfaces';

export const generateReverseTranslations = (
  translations: Translations,
): Translations => {
  const reverseTranslations: Translations = {};
  Object.keys(translations).forEach((lang: string) => {
    const translation = translations[lang];
    reverseTranslations[lang] = {};
    Object.keys(translation).forEach((enumKey) => {
      reverseTranslations[lang][translations[lang][enumKey]] = enumKey;
    });
  });
  return reverseTranslations;
};

export const generateEncoder = <T>(
  translations: Translations,
): ((raw: T, lang: Language) => string) => {
  return (raw: T, lang: Language): string => {
    if (typeof raw !== 'string') {
      throw new Error('Invalid enum.');
    }
    if (!translations[lang]) {
      throw new Error('No language.');
    }
    if (!translations[lang][raw]) {
      console.error('No translation');
      return raw as string;
    }
    return translations[lang][raw];
  };
};

export const generateDecoder = <T>(
  reverseTranslations: Translations,
): ((text: string, lang: Language) => T) => {
  return (text: string, lang: Language): T => {
    if (typeof text !== 'string') {
      throw new Error('Invalid text.');
    }
    if (!reverseTranslations[lang]) {
      throw new Error('No language');
    }
    if (!reverseTranslations[lang][text]) {
      console.error('No translation');
      return (text as unknown) as T;
    }
    return (reverseTranslations[lang][text] as unknown) as T;
  };
};
