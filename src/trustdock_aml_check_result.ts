import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockAmlCheckResult {
  TO_BE_CONFIRMED, // 要確認
  APPROVED, // 承認済
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const trustdockAmlCheckResultEncoder = generateEncoder<
  TrustdockAmlCheckResult
>(translations);
export const trustdockAmlCheckResultDecoder = generateDecoder<
  TrustdockAmlCheckResult
>(reverseTranslations);
