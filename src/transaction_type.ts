import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TransactionType {
  Credit = 'Credit', // 与信
  Payment = 'Payment', // 支払い
  Refund = 'Refund', // 払い戻し
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TransactionType.Credit]: '与信',
    [TransactionType.Payment]: '支払い',
    [TransactionType.Refund]: '払い戻し',
  },
  en: {
    [TransactionType.Credit]: 'Credit',
    [TransactionType.Payment]: 'Payment',
    [TransactionType.Refund]: 'Refund',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const transactionTypeEncoder = generateEncoder<TransactionType>(
  translations,
);
export const transactionTypeDecoder = generateDecoder<TransactionType>(
  reverseTranslations,
);
