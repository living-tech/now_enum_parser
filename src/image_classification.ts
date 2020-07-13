import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ImageClassification {
  Private = 'Private',
  Share = 'Share',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ImageClassification.Private]: '専有部',
    [ImageClassification.Share]: '共有部',
  },
  en: {
    [ImageClassification.Private]: 'Private Part',
    [ImageClassification.Share]: 'Shared Part',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const imageClassificationEncoder = generateEncoder<ImageClassification>(
  translations,
);
export const imageClassificationDecoder = generateDecoder<ImageClassification>(
  reverseTranslations,
);
