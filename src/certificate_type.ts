import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CertificateType {
  Minpaku = 'Minpaku', // 住宅宿泊事業法
  Hotel = 'Hotel', // 旅館業法
  NationalStrategicSpecialZone = 'NationalStrategicSpecialZone', // 国家戦略特別区域法
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CertificateType.Minpaku]: '住宅宿泊事業法',
    [CertificateType.Hotel]: '旅館業法',
    [CertificateType.NationalStrategicSpecialZone]: '国家戦略特別区域法',
  },
  en: {
    [CertificateType.Minpaku]: 'Residential Accommodation Business',
    [CertificateType.Hotel]: 'Ryokan Business Law',
    [CertificateType.NationalStrategicSpecialZone]:
      'National Strategic Special Zones Act',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const certificateTypeEncoder = generateEncoder<CertificateType>(
  translations,
);
export const certificateTypeDecoder = generateDecoder<CertificateType>(
  reverseTranslations,
);
