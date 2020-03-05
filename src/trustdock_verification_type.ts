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
  JukiCard = 'JukiCard', // 住民基本台帳カード
  ZaiRyuCard = 'ZaiRyuCard', // 在留カード
  MyNumberCard = 'MyNumberCard', // マイナンバーカード
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TrustdockVerificationType.Passport]: 'パスポート',
    [TrustdockVerificationType.DriverLicense]: '運転免許証',
    [TrustdockVerificationType.JukiCard]: '住民基本台帳カード',
    [TrustdockVerificationType.ZaiRyuCard]: '在留カード',
    [TrustdockVerificationType.MyNumberCard]: 'マイナンバーカード',
  },
  en: {
    [TrustdockVerificationType.Passport]: 'Passport',
    [TrustdockVerificationType.DriverLicense]: 'Driver license',
    [TrustdockVerificationType.JukiCard]: '',
    [TrustdockVerificationType.ZaiRyuCard]: '',
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
