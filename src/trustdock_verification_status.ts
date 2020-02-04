import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockVerificationStatus {
  Accepted = 'Accepted', // 受入済
  PlanSelected = 'PlanSelected', // プラン選択済
  DocumentReceived = 'DocumentReceived', // 書類受領済
  InProgress = 'InProgress', // 進捗中
  Confirmed = 'Confirmed', // 確認済
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
