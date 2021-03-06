import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockVerificationResult {
  Rejected = 'Rejected', // 却下
  Approved = 'Approved', // 承認済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TrustdockVerificationResult.Rejected]: '却下',
    [TrustdockVerificationResult.Approved]: '承認済',
  },
  en: {
    [TrustdockVerificationResult.Rejected]: 'Rejected',
    [TrustdockVerificationResult.Approved]: 'Approved',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const trustdockVerificationResultEncoder = generateEncoder<
  TrustdockVerificationResult
>(translations);
export const trustdockVerificationResultDecoder = generateDecoder<
  TrustdockVerificationResult
>(reverseTranslations);
