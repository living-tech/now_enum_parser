import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PaymentType {
  First = 'First',
  Monthly = 'Monthly',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PaymentType.First]: '初月支払い',
    [PaymentType.Monthly]: '月々定額支払い',
  },
  en: {
    [PaymentType.First]: 'first payment',
    [PaymentType.Monthly]: 'monthly payment',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const paymentTypeEncoder = generateEncoder<PaymentType>(translations);
export const paymentTypeDecoder = generateDecoder<PaymentType>(
  reverseTranslations,
);
