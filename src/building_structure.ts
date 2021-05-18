import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum BuildingStructure {
  Wood = 'Wood', // 1,木造 // 【改REINS】1:木造 2:ブロック 3:鉄骨造 4:RC 5:SRC 6:PC 7:HPC 9:その他 10:軽量鉄骨 11:ALC 12:鉄筋ブロック 13:CFT(コンクリート充填鋼管)
  Stell = 'Stell', // 3, 鉄骨造
  Rc = 'Rc', // 4, 鉄筋コンクリート造
  Src = 'Src', // 5, 鉄筋鉄骨コンクリート造
  Block = 'Block', // 2:ブロック
  PC = 'PC', // 6:PC
  HPC = 'HPC', // 7:HPC
  Other = 'Other', // 9:その他
  LightStell = 'LightStell', // 10:軽量鉄骨
  Alc = 'Alc', // 11:ALC
  RBlock = 'RBlock', // 12:鉄筋ブロック
  CFT = 'CFT', // 13:CFT(コンクリート充填鋼管)
}

// Edit contexts
const translations: Translations = {
  ja: {
    [BuildingStructure.Wood]: '木造',
    [BuildingStructure.Stell]: '鉄骨造',
    [BuildingStructure.Rc]: '鉄筋コンクリート造',
    [BuildingStructure.Src]: '鉄筋鉄骨コンクリート造',
    [BuildingStructure.Block]: 'ブロック',
    [BuildingStructure.PC]: 'PC',
    [BuildingStructure.HPC]: 'HPC',
    [BuildingStructure.Other]: 'その他',
    [BuildingStructure.LightStell]: '軽量鉄骨',
    [BuildingStructure.Alc]: 'ALC',
    [BuildingStructure.RBlock]: '鉄筋ブロック',
    [BuildingStructure.CFT]: 'CFT(コンクリート充填鋼管)',
  },
  en: {
    [BuildingStructure.Wood]: 'Wooden',
    [BuildingStructure.Stell]: 'Steel Frame Construction',
    [BuildingStructure.Rc]: 'Reinforced Concrete Construction',
    [BuildingStructure.Src]: 'Steel-Framed Concrete Construction',
    [BuildingStructure.Block]: 'Block',
    [BuildingStructure.PC]: 'PC',
    [BuildingStructure.HPC]: 'HPC',
    [BuildingStructure.Other]: 'Other',
    [BuildingStructure.LightStell]: 'Light Stell',
    [BuildingStructure.Alc]: 'ALC',
    [BuildingStructure.RBlock]: 'Steel Block',
    [BuildingStructure.CFT]: 'CFT',
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
