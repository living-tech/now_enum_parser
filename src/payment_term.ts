import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PaymentTerm {
  NextMonthEnd = 'NextMonthEnd', // 翌月末
  AfterNextMonthEnd = 'AfterNextMonthEnd', // 翌々月末
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PaymentTerm.NextMonthEnd]: '翌月末',
    [PaymentTerm.AfterNextMonthEnd]: '翌々月末',
  },
  en: {
    [PaymentTerm.NextMonthEnd]: 'payment end of next month',
    [PaymentTerm.AfterNextMonthEnd]: 'payment end of month after next',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const paymentTermEncoder = generateEncoder<PaymentTerm>(translations);
export const paymentTermDecoder = generateDecoder<PaymentTerm>(
  reverseTranslations,
);
