import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RoomClassification {
  Private = 'Private',
  Share = 'Share',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RoomClassification.Private]: '個室',
    [RoomClassification.Share]: '共有',
  },
  en: {
    [RoomClassification.Private]: 'Private',
    [RoomClassification.Share]: 'Share',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomClassificationEncoder = generateEncoder<RoomClassification>(
  translations,
);
export const roomClassificationDecoder = generateDecoder<RoomClassification>(
  reverseTranslations,
);
