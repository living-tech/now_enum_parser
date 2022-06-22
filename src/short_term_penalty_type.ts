import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum ShortTermPenaltyType {
  LessThanTwoYears = 'LessThanTwoYears',
  LessThanOneYear = 'LessThanOneYear',
  LessThanSixMonths = 'LessThanSixMonths',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ShortTermPenaltyType.LessThanTwoYears]: '2年未満',
    [ShortTermPenaltyType.LessThanOneYear]: '1年未満',
    [ShortTermPenaltyType.LessThanSixMonths]: '6か月未満',
  },
  en: {
    [ShortTermPenaltyType.LessThanTwoYears]: 'LessThanTwoYears',
    [ShortTermPenaltyType.LessThanOneYear]: 'LessThanOneYear',
    [ShortTermPenaltyType.LessThanSixMonths]: 'LessThanSixMonths',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const shortTermPenaltyTypeEncoder = generateEncoder<ShortTermPenaltyType>(translations);
export const shortTermPenaltyTypeDecoder = generateDecoder<ShortTermPenaltyType>(
  reverseTranslations,
);
