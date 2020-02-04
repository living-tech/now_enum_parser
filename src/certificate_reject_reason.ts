import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CertificateRejectReason {
  NotDesignated = 'NotDesignated', // 指定された公的書類ではない
  Unclearness = 'Unclearness', // 不鮮明のため読み取れない
  HidenessOrDamage = 'HidenessOrDamage', // 隠れ・破損などのため読み取れない
  NoRegistrationNumber = 'NoRegistrationNumber', // 許可番号が見つからない
  WrongInfo = 'WrongInfo', // 届出情報に誤りがある
  Other = 'Other', // その他
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
