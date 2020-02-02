import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockAmlCheckStatus {
  ACCEPTED, // 受付済
  CONFIRMED, // 確認済
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const trustdockAmlCheckStatusEncoder = generateEncoder<
  TrustdockAmlCheckStatus
>(translations);
export const trustdockAmlCheckStatusDecoder = generateDecoder<
  TrustdockAmlCheckStatus
>(reverseTranslations);
