import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Transportation {
  Walk = 'Walk', // 徒歩
  Car = 'Car', // 車
  Bus = 'Bus', // バス
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Transportation.Walk]: '徒歩',
    [Transportation.Car]: '車',
    [Transportation.Bus]: 'バス',
  },
  en: {
    [Transportation.Walk]: 'Walk',
    [Transportation.Car]: 'Car',
    [Transportation.Bus]: 'Bus',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const transportationEncoder = generateEncoder<Transportation>(
  translations,
);
export const transportationDecoder = generateDecoder<Transportation>(
  reverseTranslations,
);
