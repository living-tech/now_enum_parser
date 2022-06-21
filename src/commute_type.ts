import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum CommuteType {
  Railway = 'Railway',
  Bus = 'Bus',
  Walk = 'Walk',
  Car = 'Car',
  Bicycle = 'Bicycle',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CommuteType.Railway]: '電車',
    [CommuteType.Bus]: 'バス',
    [CommuteType.Walk]: '徒歩',
    [CommuteType.Car]: '車',
    [CommuteType.Bicycle]: '自転車',
  },
  en: {
    [CommuteType.Railway]: 'Railway',
    [CommuteType.Bus]: 'Bus',
    [CommuteType.Walk]: 'Walk',
    [CommuteType.Car]: 'Car',
    [CommuteType.Bicycle]: 'Bicycle',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const commuteTypeEncoder = generateEncoder<CommuteType>(translations);
export const commuteTypeDecoder = generateDecoder<CommuteType>(
  reverseTranslations,
);
