import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Classification {
  User = 'User',
  Owner = 'Owner',
  Admin = 'Admin',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Classification.User]: 'ユーザー',
    [Classification.Owner]: 'オーナー',
    [Classification.Admin]: '管理者',
  },
  en: {
    [Classification.User]: 'User',
    [Classification.Owner]: 'Owner',
    [Classification.Admin]: 'Admin',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const classificationEncoder = generateEncoder<Classification>(
  translations,
);
export const classificationDecoder = generateDecoder<Classification>(
  reverseTranslations,
);
