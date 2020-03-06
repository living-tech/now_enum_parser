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
  ja: {
    [IdentityDocumentStatus.Approved]: '受入済',
    [IdentityDocumentStatus.PlanSelected]: 'プラン選択済',
    [IdentityDocumentStatus.DocumentReceived]: '書類受領済',
    [IdentityDocumentStatus.InProgress]: '進捗中',
    [IdentityDocumentStatus.Confirmed]: '確認済',
    [IdentityDocumentStatus.Rejected]: '却下',
    [IdentityDocumentStatus.ToBeConfirmed]: '要確認',
    [IdentityDocumentStatus.Approved]: '承認済',
  },
  en: {
    [IdentityDocumentStatus.Approved]: 'Approved',
    [IdentityDocumentStatus.PlanSelected]: 'Plan selected',
    [IdentityDocumentStatus.DocumentReceived]: 'Document received',
    [IdentityDocumentStatus.InProgress]: 'In progress',
    [IdentityDocumentStatus.Confirmed]: 'Confirmed',
    [IdentityDocumentStatus.Rejected]: 'Rejected',
    [IdentityDocumentStatus.ToBeConfirmed]: 'To be Confirmed',
    [IdentityDocumentStatus.Approved]: 'Approved',
  },
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
