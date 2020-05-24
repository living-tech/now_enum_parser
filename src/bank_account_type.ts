import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum BankAccountType {
  OrdinaryDeposit = 'OrdinaryDeposit', // 普通預金
  CurrentAccount = 'CurrentAccount', // 当座預金
}

// Edit contexts
const translations: Translations = {
  ja: {
    [BankAccountType.OrdinaryDeposit]: '普通預金',
    [BankAccountType.CurrentAccount]: '当座預金',
  },
  en: {
    [BankAccountType.OrdinaryDeposit]: 'Ordinary Deposit',
    [BankAccountType.CurrentAccount]: 'Current Account',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const bankAccountTypeEncoder = generateEncoder<BankAccountType>(
  translations,
);
export const bankAccountTypeDecoder = generateDecoder<BankAccountType>(
  reverseTranslations,
);