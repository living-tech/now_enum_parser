import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum BuildingStructure {
  Wood = 'Wood', // 木造
  Stell = 'Stell', // 鉄骨造
  Rc = 'Rc', // 鉄筋コンクリート造
  Src = 'Src', // 鉄筋鉄骨コンクリート造
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
