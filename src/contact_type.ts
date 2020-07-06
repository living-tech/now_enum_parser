import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ContactType {
  Application = 'Application',
  Payment = 'Payment',
  Account = 'Account',
  BeforeMoveIn = 'BeforeMoveIn',
  MoveIn = 'MoveIn',
  MoveOut = 'MoveOut',
  BeforeMoveOut = 'BeforeMoveOut',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ContactType.Application]: 'アプリケーション',
    [ContactType.Payment]: '料金・支払い',
    [ContactType.Account]: 'アカウント',
    [ContactType.BeforeMoveIn]: '入居前',
    [ContactType.MoveIn]: '入居時',
    [ContactType.BeforeMoveOut]: '退去前',
    [ContactType.MoveOut]: '退去時',
    [ContactType.Other]: 'その他',
  },
  en: {
    [ContactType.Application]: 'Application',
    [ContactType.Payment]: 'Payment',
    [ContactType.Account]: 'Account',
    [ContactType.BeforeMoveIn]: 'Before move in',
    [ContactType.MoveIn]: 'Move in',
    [ContactType.BeforeMoveOut]: 'Before move out',
    [ContactType.MoveOut]: 'Move out',
    [ContactType.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const contactTypeEncoder = generateEncoder<ContactType>(translations);
export const contactTypeDecoder = generateDecoder<ContactType>(
  reverseTranslations,
);
