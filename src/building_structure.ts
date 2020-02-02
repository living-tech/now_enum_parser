import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum BuildingStructure {
  WOOD, // 木造
  STEEL, // 鉄骨造
  RC, // 鉄筋コンクリート造
  SRC, // 鉄筋鉄骨コンクリート造
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const buildingStructureEncoder = generateEncoder<BuildingStructure>(
  translations,
);
export const buildingStructureDecoder = generateDecoder<BuildingStructure>(
  reverseTranslations,
);
