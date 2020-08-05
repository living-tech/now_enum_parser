import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RentChargeDiscountType {
  Coupon = 'Amount',
  JustBefore = 'Rate',
  None = 'None'
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RentChargeDiscountType.Coupon]: 'クーポン',
    [RentChargeDiscountType.JustBefore]: '直前',
    [RentChargeDiscountType.None]: 'なし',
  },
  en: {
    [RentChargeDiscountType.Coupon]: 'coupon',
    [RentChargeDiscountType.JustBefore]: 'just before',
    [RentChargeDiscountType.None]: 'none',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const rentChargeDiscountTypeEncoder = generateEncoder<RentChargeDiscountType>(translations);
export const rentChargeDiscountTypeDecoder = generateDecoder<RentChargeDiscountType>(
  reverseTranslations,
);
