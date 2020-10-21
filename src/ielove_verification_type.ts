import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum IeloveVerificationType {
  DriverLicense = 'DriverLicense', // 運転免許証
  SealCertificate = 'SealCertificate', // 印鑑証明書
  BasicResidentRegisterCard = 'BasicResidentRegisterCard', // 住民基本台帳カード
  HealthInsuranceCard = 'HealthInsuranceCard', // 健康保険証
  Passport = 'Passport', // パスポート
  MyNumberCard = 'MyNumberCard', // マイナンバーカード
  AlienRegistrationCertificate = 'AlienRegistrationCertificate', // 外国人登録証明書
  ResidencyCard = 'ResidencyCard', // 在留カード
}

// Edit contexts
const translations: Translations = {
  ja: {
    [IeloveVerificationType.DriverLicense]: '運転免許証',
    [IeloveVerificationType.SealCertificate]: '印鑑証明書',
    [IeloveVerificationType.BasicResidentRegisterCard]: '住民基本台帳カード',
    [IeloveVerificationType.HealthInsuranceCard]: '健康保険証',
    [IeloveVerificationType.Passport]: 'パスポート',
    [IeloveVerificationType.MyNumberCard]: 'マイナンバーカード',
    [IeloveVerificationType.AlienRegistrationCertificate]: '外国人登録証明書',
    [IeloveVerificationType.ResidencyCard]: '在留カード',
  },
  en: {
    [IeloveVerificationType.DriverLicense]: `Driver's License`,
    [IeloveVerificationType.SealCertificate]: 'Seal Certificate',
    [IeloveVerificationType.BasicResidentRegisterCard]:
      'Basic Resident Register Card',
    [IeloveVerificationType.HealthInsuranceCard]: 'Health Insurance Card',
    [IeloveVerificationType.Passport]: 'Passport',
    [IeloveVerificationType.MyNumberCard]: 'My Number Card',
    [IeloveVerificationType.AlienRegistrationCertificate]:
      'Alien Registration Certificate',
    [IeloveVerificationType.ResidencyCard]: 'Residence Card',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const ieloveVerificationTypeEncoder = generateEncoder<
  IeloveVerificationType
>(translations);
export const ieloveVerificationTypeDecoder = generateDecoder<
  IeloveVerificationType
>(reverseTranslations);
