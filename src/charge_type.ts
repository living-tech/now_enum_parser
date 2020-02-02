import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum ChargeType {
  YET,
  // 旅館業
  // シェアハウス
  // 住宅宿泊施設
  // 賃貸
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const chargeTypeEncoder = generateEncoder<ChargeType>(translations);
export const chargeTypeDecoder = generateDecoder<ChargeType>(
  reverseTranslations,
);
