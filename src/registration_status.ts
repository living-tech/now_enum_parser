import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RegistrationStatus {
  NOT_YET, // 未承認
  IN_PROGRESS, // 承認待
  APPROVED, // 承認済
  REJECTED, // 却下
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
