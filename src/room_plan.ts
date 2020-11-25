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
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TenancyTerm.LessThanOneMonth]: 'スーパーショート',
    [TenancyTerm.OneToThreeMonths]: 'ショート',
    [TenancyTerm.ThreeToSevenMonths]: 'ミドル',
    [TenancyTerm.SevenMonthsToOneYear]: 'ロング',
    [TenancyTerm.MoreThanOneYear]: 'スーパーロング',
  },
  en: {
    [TenancyTerm.LessThanOneMonth]: 'super short',
    [TenancyTerm.OneToThreeMonths]: 'short',
    [TenancyTerm.ThreeToSevenMonths]: 'middle',
    [TenancyTerm.SevenMonthsToOneYear]: 'long',
    [TenancyTerm.MoreThanOneYear]: 'super long',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomPlanEncoder = generateEncoder<TenancyTerm>(translations);
export const roomPlanDecoder = generateDecoder<TenancyTerm>(
  reverseTranslations,
);
