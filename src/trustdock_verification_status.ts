import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockVerificationStatus {
  ACCEPTED, // 受入済
  PLAN_SELECTED, // プラン選択済
  DOCUMENT_RECEIVED, // 書類受領済
  IN_PROGRESS, // 進捗中
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
export const trustdockVerificationStatusEncoder = generateEncoder<
  TrustdockVerificationStatus
>(translations);
export const trustdockVerificationStatusDecoder = generateDecoder<
  TrustdockVerificationStatus
>(reverseTranslations);
