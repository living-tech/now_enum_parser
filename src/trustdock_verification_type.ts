import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TrustdockVerificationType {
  Passport = 'Passport', // パスポート
  DriverLicense = 'DriverLicense', // 運転免許証
  DrivingHistoryCertification = 'DrivingHistoryCertification', // 運転経歴証明書
  BasicResidentRegisterCard = 'BasicResidentRegisterCard', // 住民基本台帳カード
  ResidencyCard = 'ResidencyCard', // 在留カード
  SpecialPermanentResidentCertificate = 'SpecialPermanentResidentCertificate', // 特別永住者証明書
  MyNumberCard = 'MyNumberCard', // マイナンバーカード
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TrustdockVerificationType.Passport]: 'パスポート',
    [TrustdockVerificationType.DriverLicense]: '運転免許証',
    [TrustdockVerificationType.DrivingHistoryCertification]: '運転経歴証明書',
    [TrustdockVerificationType.BasicResidentRegisterCard]: '住民基本台帳カード',
    [TrustdockVerificationType.ResidencyCard]: '在留カード',
    [TrustdockVerificationType.SpecialPermanentResidentCertificate]:
      '特別永住者証明書',
    [TrustdockVerificationType.MyNumberCard]: 'マイナンバーカード',
  },
  en: {
    [TrustdockVerificationType.Passport]: 'Passport',
    [TrustdockVerificationType.DriverLicense]: 'Driver license',
    [TrustdockVerificationType.DrivingHistoryCertification]:
      'Driving hisory certification',
    [TrustdockVerificationType.BasicResidentRegisterCard]:
      'Basic resident register card',
    [TrustdockVerificationType.ResidencyCard]: 'Residency card',
    [TrustdockVerificationType.SpecialPermanentResidentCertificate]:
      'Special permanent resident certificate',
    [TrustdockVerificationType.MyNumberCard]: 'My number card',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const trustdockVerificationTypeEncoder = generateEncoder<
  TrustdockVerificationType
>(translations);
export const trustdockVerificationTypeDecoder = generateDecoder<
  TrustdockVerificationType
>(reverseTranslations);
