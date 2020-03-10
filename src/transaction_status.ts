import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TransactionStatus {
  Unpaid = 'Unpaid', // 未払い
  CreditOK = 'CreditOK', // 与信OK
  CreditNG = 'CreditNG', // 与信NG
  Paid = 'Paid', // 支払い済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TransactionStatus.Unpaid]: '未払い',
    [TransactionStatus.CreditOK]: '与信OK',
    [TransactionStatus.CreditNG]: '与信NG',
    [TransactionStatus.Paid]: '支払い済',
  },
  en: {
    [TransactionStatus.Unpaid]: 'Unpaid',
    [TransactionStatus.CreditOK]: 'Credit OK',
    [TransactionStatus.CreditNG]: 'Credit NG',
    [TransactionStatus.Paid]: 'Paid',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const transactionStatusEncoder = generateEncoder<TransactionStatus>(
  translations,
);
export const transactionStatusDecoder = generateDecoder<TransactionStatus>(
  reverseTranslations,
);
