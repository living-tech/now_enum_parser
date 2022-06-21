import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum AdmissionDayType {
  Soonest = 'Soonest',
  Early = 'Early',
  Middle = 'Middle',
  Late = 'Late',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [AdmissionDayType.Soonest]: '最短入居',
    [AdmissionDayType.Early]: '上旬',
    [AdmissionDayType.Middle]: '中旬',
    [AdmissionDayType.Late]: '下旬',
  },
  en: {
    [AdmissionDayType.Soonest]: 'Soonest',
    [AdmissionDayType.Early]: 'Early',
    [AdmissionDayType.Middle]: 'Middle',
    [AdmissionDayType.Late]: 'Late',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const admissionDayTypeEncoder = generateEncoder<AdmissionDayType>(translations);
export const admissionDayTypeDecoder = generateDecoder<AdmissionDayType>(
  reverseTranslations,
);
