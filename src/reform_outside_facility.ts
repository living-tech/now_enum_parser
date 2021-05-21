import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReformOutsideFacility {
  Roof = 'Roof',
  ExteriorWall = 'ExteriorWall',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReformOutsideFacility.Roof]: '屋根', // 1:屋根 2:外壁
    [ReformOutsideFacility.ExteriorWall]: '外壁',
  },
  en: {
    [ReformOutsideFacility.Roof]: 'Roof', // 1: Roof 2: Exterior wall
    [ReformOutsideFacility.ExteriorWall]: 'Exterior wall',
  }
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const reformOutsideFacilityEncoder = generateEncoder<ReformOutsideFacility>(translations);
export const reformOutsideFacilityDecoder = generateDecoder<ReformOutsideFacility>(
  reverseTranslations,
);
