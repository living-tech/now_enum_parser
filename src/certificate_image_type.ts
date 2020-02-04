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
  ja: {},
  en: {},
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
