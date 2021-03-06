import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockAmlCheckStatus {
  Accpted = 'Accepted', // 受付済
  Confirmed = 'Confirmed', // 確認済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TrustdockAmlCheckStatus.Accpted]: '受付済',
    [TrustdockAmlCheckStatus.Confirmed]: '確認済',
  },
  en: {
    [TrustdockAmlCheckStatus.Accpted]: 'Received',
    [TrustdockAmlCheckStatus.Confirmed]: 'Confirmed',
  },
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
