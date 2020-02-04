import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RegistrationStatus {
  NotYet = 'NotYet', // 未承認
  InProgress = 'InProgess', // 承認待
  Approved = 'Approved', // 承認済
  Rejected = 'Rejected', // 却下
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const registrationStatusEncoder = generateEncoder<RegistrationStatus>(
  translations,
);
export const registrationStatusDecoder = generateDecoder<RegistrationStatus>(
  reverseTranslations,
);
