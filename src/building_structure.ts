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
  ja: {
    [BuildingStructure.Wood]: '木造',
    [BuildingStructure.Stell]: '鉄骨造',
    [BuildingStructure.Rc]: '鉄筋コンクリート造',
    [BuildingStructure.Src]: '鉄筋鉄骨コンクリート造',
  },
  en: {
    [BuildingStructure.Wood]: 'Wood',
    [BuildingStructure.Stell]: 'Steel',
    [BuildingStructure.Rc]: 'Reinforced Concrete',
    [BuildingStructure.Src]: 'Steel Reinforced Concrete',
  },
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
