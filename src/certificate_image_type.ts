import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CertificateImageType {
  // [住宅宿泊事業法]
  Minpaku = 'Minpaku', // 住宅宿泊事業法の標本の写し
  RegistrationNumber = 'RegistrationNumber', // 届出番号通知書の写し
  MunicipalityAcceptedMail = 'MunicipalityAcceptedMail', // 自治体からの届出受理メールのスクリーンショット
  MinpakuManagementSystem = 'MinpakuManagementSystem', // 民泊制度運営システムのスクリーンショット
  MinpakuAcceptedMail = 'MinpakuAcceptedMail', // 民泊制度運営システムからの届出受理メールのスクリーンショット
  // [旅館業]
  HotelBusinessLicense = 'HotelBusinessLicense', // 旅館業の営業許可証
  // [国家戦略特区法]
  NationalStrategicSpecialZone = 'NationalStrategicSpecialZone', // 国家戦略特区法の認定書
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CertificateImageType.Minpaku]: '住宅宿泊事業法の標本の写し',
    [CertificateImageType.RegistrationNumber]: '届出番号通知書の写し',
    [CertificateImageType.MunicipalityAcceptedMail]:
      '自治体からの届出受理メールのスクリーンショット',
    [CertificateImageType.MinpakuManagementSystem]:
      '民泊制度運営システムのスクリーンショット',
    [CertificateImageType.MinpakuAcceptedMail]:
      '民泊制度運営システムからの届出受理メールのスクリーンショット',
    [CertificateImageType.HotelBusinessLicense]: '旅館業の営業許可証',
    [CertificateImageType.NationalStrategicSpecialZone]:
      '国家戦略特区法の認定書',
  },
  en: {
    [CertificateImageType.Minpaku]:
      'A copy of a specimen of the Residential Accommodation Business Act',
    [CertificateImageType.RegistrationNumber]:
      'A copy of the notification of the notification number',
    [CertificateImageType.MunicipalityAcceptedMail]:
      'A screenshot of the notification acceptance email from the local government',
    [CertificateImageType.MinpakuManagementSystem]:
      'A screenshot of the system for managing the private home stay system',
    [CertificateImageType.MinpakuAcceptedMail]:
      'A screenshot of the notification acceptance email from the private nightclub management system',
    [CertificateImageType.HotelBusinessLicense]:
      'Hotel business operation permit',
    [CertificateImageType.NationalStrategicSpecialZone]:
      'Certification of the National Strategic Special Zones Act',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const certificateImageTypeEncoder = generateEncoder<
  CertificateImageType
>(translations);
export const certificateImageTypeDecoder = generateDecoder<
  CertificateImageType
>(reverseTranslations);
