import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum JustBeforeDiscountThresholdDay {
  TwoWeeks = 'TwoWeeks',
  OneMonth = 'OneMonth',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [JustBeforeDiscountThresholdDay.TwoWeeks]: '2週間',
    [JustBeforeDiscountThresholdDay.OneMonth]: '1ヶ月',
  },
  en: {
    [JustBeforeDiscountThresholdDay.TwoWeeks]: 'two weeks',
    [JustBeforeDiscountThresholdDay.OneMonth]: 'one month',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const justBeforeDiscountThresholdDayEncoder = generateEncoder<
  JustBeforeDiscountThresholdDay
>(translations);
export const justBeforeDiscountThresholdDayDecoder = generateDecoder<
  JustBeforeDiscountThresholdDay
>(reverseTranslations);
