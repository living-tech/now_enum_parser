import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum AccountType {
  OrdinaryDeposit = 'OrdinaryDeposit', // 普通預金
  CurrentAccount = 'CurrentAccount', //当座預金
}

// Edit contexts
const translations: Translations = {
  ja: {
    [AccountType.OrdinaryDeposit]: '普通預金',
    [AccountType.CurrentAccount]: '当座預金',
  },
  en: {
    [AccountType.OrdinaryDeposit]: 'Ordinary Deposit',
    [AccountType.CurrentAccount]: 'Current Account',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const AccountTypeEncoder = generateEncoder<AccountType>(
  translations,
);
export const AccountTypeDecoder = generateDecoder<AccountType>(
  reverseTranslations,
);