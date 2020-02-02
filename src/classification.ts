import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Classification {
  USER,
  OWNER,
  ADMIN,
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const classificationEncoder = generateEncoder<Classification>(
  translations,
);
export const classificationDecoder = generateDecoder<Classification>(
  reverseTranslations,
);
