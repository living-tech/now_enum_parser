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
  ja: {
    [CertificateRejectReason.NotDesignated]: '指定された公的書類ではない',
    [CertificateRejectReason.Unclearness]: '不鮮明のため読み取れない',
    [CertificateRejectReason.HidenessOrDamage]:
      '隠れ・破損などのため読み取れない',
    [CertificateRejectReason.NoRegistrationNumber]: '許可番号が見つからない',
    [CertificateRejectReason.WrongInfo]: '届出情報に誤りがある',
    [CertificateRejectReason.Other]: 'その他',
  },
  en: {
    [CertificateRejectReason.NotDesignated]:
      'This is not a designated official document.',
    [CertificateRejectReason.Unclearness]:
      'The image is not clear and cannot be read.',
    [CertificateRejectReason.HidenessOrDamage]:
      'Unreadable due to concealment, damage, etc',
    [CertificateRejectReason.NoRegistrationNumber]:
      'The permit number is unrecognizable',
    [CertificateRejectReason.WrongInfo]:
      'WThere is an error in the information reported.',
    [CertificateRejectReason.Other]: 'Other Reasons',
  },
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
