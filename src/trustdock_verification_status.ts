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
  ja: {
    [TrustdockVerificationStatus.Accepted]: '受入済',
    [TrustdockVerificationStatus.PlanSelected]: 'プラン選択済',
    [TrustdockVerificationStatus.DocumentReceived]: '書類受領済',
    [TrustdockVerificationStatus.InProgress]: '進捗中',
    [TrustdockVerificationStatus.Confirmed]: '確認済',
  },
  en: {
    [TrustdockVerificationStatus.Accepted]: 'Accepted',
    [TrustdockVerificationStatus.PlanSelected]: 'Plan selected',
    [TrustdockVerificationStatus.DocumentReceived]: 'Document received',
    [TrustdockVerificationStatus.InProgress]: 'In Progress',
    [TrustdockVerificationStatus.Confirmed]: 'Confirmed',
  },
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
