import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ApplicationStatus {
  NotSubmitted = 'NotSubmitted', // 未提出
  InProgress = 'InProgress', // 進捗中
  Rejected = 'Rejected', // 却下
  Approved = 'Approved', // 承認済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ApplicationStatus.NotSubmitted]: '未提出',
    [ApplicationStatus.InProgress]: '進捗中',
    [ApplicationStatus.Rejected]: '非承認',
    [ApplicationStatus.Approved]: '承認済',
  },
  en: {
    [ApplicationStatus.NotSubmitted]: 'Unsubmitted',
    [ApplicationStatus.InProgress]: 'In Progress',
    [ApplicationStatus.Rejected]: 'Not Approved',
    [ApplicationStatus.Approved]: 'Approved',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const applicationStatusEncoder = generateEncoder<
  ApplicationStatus
>(translations);
export const applicationStatusDecoder = generateDecoder<
  ApplicationStatus
>(reverseTranslations);
