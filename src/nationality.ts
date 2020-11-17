import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Nationality {
  Japan = 'Japan',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Nationality.Japan]: '日本',
    [Nationality.Other]: 'その他',
  },
  en: {
    [Nationality.Japan]: 'Japan',
    [Nationality.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const nationalityEncoder = generateEncoder<Nationality>(translations);
export const nationalityDecoder = generateDecoder<Nationality>(reverseTranslations);
