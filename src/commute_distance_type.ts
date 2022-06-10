import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum CommuteDistanceType {
  Way = 'Way',
  Straight = 'Straight',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CommuteDistanceType.Way]: '道のり',
    [CommuteDistanceType.Straight]: '直線距離',
  },
  en: {
    [CommuteDistanceType.Way]: 'Way',
    [CommuteDistanceType.Straight]: 'Straight',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const commuteDistanceTypeEncoder = generateEncoder<Translations>(translations);
export const commuteDistanceTypeDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
