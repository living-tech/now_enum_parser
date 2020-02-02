import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CertificateRejectReason {
  OTHER, // その他
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const certificateRejectReasonEncoder = generateEncoder<
  CertificateRejectReason
>(translations);
export const certificateRejectReasonDecoder = generateDecoder<
  CertificateRejectReason
>(reverseTranslations);
