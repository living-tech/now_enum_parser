import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum IdentityDocumentStatus {
  NotSubmitted = 'NotSubmitted', // 未提出
  Accepted = 'Accepted', // 受入済
  PlanSelected = 'PlanSelected', // プラン選択済
  DocumentReceived = 'DocumentReceived', // 書類受領済
  InProgress = 'InProgress', // 進捗中
  Confirmed = 'Confirmed', // 確認済
  Rejected = 'Rejected', // 却下
  ToBeConfirmed = 'ToBeConfirmed', // 要確認
  Approved = 'Approved', // 承認済
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const identityDocumentStatusEncoder = generateEncoder<
  IdentityDocumentStatus
>(translations);
export const identityDocumentStatusDecoder = generateDecoder<
  IdentityDocumentStatus
>(reverseTranslations);
