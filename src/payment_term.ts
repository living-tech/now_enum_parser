import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PaymentTerm {
  LastMonthEnd = 'LastMonthEnd', // 前月末
  NextMonthEnd = 'NextMonthEnd', // 翌月末
  AfterNextMonthEnd = 'AfterNextMonthEnd', // 翌々月末
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PaymentTerm.LastMonthEnd]: '前月末',
    [PaymentTerm.NextMonthEnd]: '翌月末',
    [PaymentTerm.AfterNextMonthEnd]: '翌々月末',
  },
  en: {
    [PaymentTerm.LastMonthEnd]: 'payment end of last month',
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
