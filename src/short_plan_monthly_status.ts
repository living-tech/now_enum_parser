import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ShortPlanMonthlyStatus { // 1：短期のみ空、2：マンスリーのみ空、3：短期/マンスリーどちらも空
  ShortPlanOnly = 'ShortPlanOnly',
  MonthlyOnly = 'MonthlyOnly',
  ShortPlanAndMonthly = 'ShortPlanAndMonthly',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ShortPlanMonthlyStatus.ShortPlanOnly]: '短期のみ空',
    [ShortPlanMonthlyStatus.MonthlyOnly]: 'マンスリーのみ空',
    [ShortPlanMonthlyStatus.ShortPlanAndMonthly]: '短期/マンスリーどちらも空',
  },
  en: {
    [ShortPlanMonthlyStatus.ShortPlanOnly]: 'ShortPlan Only',
    [ShortPlanMonthlyStatus.MonthlyOnly]: 'Monthly Only',
    [ShortPlanMonthlyStatus.ShortPlanAndMonthly]: 'ShortPlan And Monthly',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const shortPlanMonthlyStatusEncoder = generateEncoder<ShortPlanMonthlyStatus>(translations);
export const shortPlanMonthlyStatusDecoder = generateDecoder<ShortPlanMonthlyStatus>(
  reverseTranslations,
);
