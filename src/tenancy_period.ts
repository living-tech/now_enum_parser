import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TenancyPeriod {
  LessThanOneMonth = 'LessThanOneMonth',
  OneToThreeMonths = 'OneToThreeMonths',
  ThreeToSevenMonths = 'ThreeToSevenMonths',
  SevenMonthsToOneYear = 'SevenMonthsToOneYear',
  MoreThanOneYear = 'MoreThanOneYear',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TenancyPeriod.LessThanOneMonth]: '1ヶ月未満',
    [TenancyPeriod.OneToThreeMonths]: '1ヶ月以上～3ヶ月未満',
    [TenancyPeriod.ThreeToSevenMonths]: '3ヶ月以上～7ヶ月未満',
    [TenancyPeriod.SevenMonthsToOneYear]: '7ヶ月以上～1年未満',
    [TenancyPeriod.MoreThanOneYear]: '1年以上',
  },
  en: {
    [TenancyPeriod.LessThanOneMonth]: 'less than one month',
    [TenancyPeriod.OneToThreeMonths]: 'one to three months',
    [TenancyPeriod.ThreeToSevenMonths]: 'three to seven months',
    [TenancyPeriod.SevenMonthsToOneYear]: 'seven months to one year',
    [TenancyPeriod.MoreThanOneYear]: 'more than one year',

  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const tenancyPeriodEncoder = generateEncoder<TenancyPeriod>(translations);
export const tenancyPeriodDecoder = generateDecoder<TenancyPeriod>(
  reverseTranslations,
);
