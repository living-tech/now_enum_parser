import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockAmlCheckResult {
  ToBeConfirmed = 'ToBeConfirmed', // 要確認
  Approved = 'Approved', // 承認済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TrustdockAmlCheckResult.ToBeConfirmed]: '要確認',
    [TrustdockAmlCheckResult.Approved]: '承認済',
  },
  en: {
    [TrustdockAmlCheckResult.ToBeConfirmed]: 'Confirmation Required',
    [TrustdockAmlCheckResult.Approved]: 'Approved',
  },
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
