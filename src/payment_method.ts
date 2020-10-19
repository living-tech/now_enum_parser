import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PaymentMethod {
  CreditCard = 'CreditCard',
  AccountTransfer = 'AccountTransfer',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PaymentMethod.CreditCard]: 'クレジットカード',
    [PaymentMethod.AccountTransfer]: '口座振替',
  },
  en: {
    [PaymentMethod.CreditCard]: 'Credit card',
    [PaymentMethod.AccountTransfer]: 'Account transfer',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const paymentMethodEncoder = generateEncoder<PaymentMethod>(
  translations,
);
export const paymentMethodDecoder = generateDecoder<PaymentMethod>(
  reverseTranslations,
);
