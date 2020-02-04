import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum BuildingChargeType {
  Hotel = 'Hotel', // 旅館業
  ShareHouse = 'ShareHouse', // シェアハウス
  Minpaku = 'Minpaku', // 住宅宿泊施設
  RentalProperty = 'RentalProperty', // 賃貸
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const buildingChargeTypeEncoder = generateEncoder<BuildingChargeType>(
  translations,
);
export const buildingChargeTypeDecoder = generateDecoder<BuildingChargeType>(
  reverseTranslations,
);
