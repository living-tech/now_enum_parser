import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum PetType {
  SmallDog = 'SmallDog',
  MiddleDog = 'MiddleDog',
  LargeDog = 'LargeDog',
  Cat = 'Cat',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PetType.SmallDog]: '小型犬',
    [PetType.MiddleDog]: '中型犬',
    [PetType.LargeDog]: '大型犬',
    [PetType.Cat]: '猫',
    [PetType.Other]: 'その他',
  },
  en: {
    [PetType.SmallDog]: 'SmallDog',
    [PetType.MiddleDog]: 'MiddleDog',
    [PetType.LargeDog]: 'LargeDog',
    [PetType.Cat]: 'Cat',
    [PetType.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const petTypeEncoder = generateEncoder<Translations>(translations);
export const petTypeDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
