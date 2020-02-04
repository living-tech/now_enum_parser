import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Gender.Male]: '男性',
    [Gender.Female]: '女性',
    [Gender.Other]: 'その他',
  },
  en: {
    [Gender.Male]: 'male',
    [Gender.Female]: 'female',
    [Gender.Other]: 'other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const genderEncoder = generateEncoder<Gender>(translations);
export const genderDecoder = generateDecoder<Gender>(reverseTranslations);
