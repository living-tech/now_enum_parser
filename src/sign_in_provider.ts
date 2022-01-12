import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum SignInProvider {
  Password = 'Password',
  Phone = 'Phone',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [SignInProvider.Password]: 'パスワード',
    [SignInProvider.Phone]: '電話',
  },
  en: {
    [SignInProvider.Password]: 'password',
    [SignInProvider.Phone]: 'phone',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const signInProviderEncoder = generateEncoder<SignInProvider>(
  translations,
);
export const signInProviderDecoder = generateDecoder<SignInProvider>(
  reverseTranslations,
);
