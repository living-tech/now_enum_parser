import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum DiscountType {
  Amount = 'Amount',
  Rate = 'Rate',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [DiscountType.Amount]: '金額',
    [DiscountType.Rate]: '比率',
  },
  en: {
    [DiscountType.Amount]: 'Amount',
    [DiscountType.Rate]: 'Rate',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const discountTypeEncoder = generateEncoder<DiscountType>(translations);
export const discountTypeDecoder = generateDecoder<DiscountType>(
  reverseTranslations,
);
