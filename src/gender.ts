import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Gender.MALE]: '男性',
    [Gender.FEMALE]: '女性',
    [Gender.OTHER]: 'その他',
  },
  en: {
    [Gender.MALE]: 'male',
    [Gender.FEMALE]: 'female',
    [Gender.OTHER]: 'other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const genderEncoder = generateEncoder<Gender>(translations);
export const genderDecoder = generateDecoder<Gender>(reverseTranslations);
