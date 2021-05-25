import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TenancyTerm {
  LessThanOneMonth = 'LessThanOneMonth',
  OneToThreeMonths = 'OneToThreeMonths',
  ThreeToSevenMonths = 'ThreeToSevenMonths',
  SevenMonthsToOneYear = 'SevenMonthsToOneYear',
  MoreThanOneYear = 'MoreThanOneYear',
  // MoreThanTwoYear = 'MoreThanTwoYear',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TenancyTerm.LessThanOneMonth]: '1週間以上～1ヶ月未満',
    [TenancyTerm.OneToThreeMonths]: '1ヶ月以上～3ヶ月未満',
    [TenancyTerm.ThreeToSevenMonths]: '3ヶ月以上～7ヶ月未満',
    [TenancyTerm.SevenMonthsToOneYear]: '7ヶ月以上～1年未満',
    [TenancyTerm.MoreThanOneYear]: '1年以上',
    // [TenancyTerm.MoreThanTwoYear]: '2年以上',
  },
  en: {
    [TenancyTerm.LessThanOneMonth]: 'one week to one month',
    [TenancyTerm.OneToThreeMonths]: 'one to three months',
    [TenancyTerm.ThreeToSevenMonths]: 'three to seven months',
    [TenancyTerm.SevenMonthsToOneYear]: 'seven months to one year',
    [TenancyTerm.MoreThanOneYear]: 'more than one year',
    // [TenancyTerm.MoreThanTwoYear]: 'more than two year',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const tenancyTermEncoder = generateEncoder<TenancyTerm>(translations);
export const tenancyTermDecoder = generateDecoder<TenancyTerm>(
  reverseTranslations,
);
