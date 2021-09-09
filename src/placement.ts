import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Placement { //  0:客付け不可 1:客付け可/広告転載不可(店頭紹介のみ可) 2:客付け可/他社HPへの広告店転載可 3:客付け可/LIFULL HOME'S、他社HPへの広告転載可
  PlacementNg = 'PlacementNg',
  PlacementOkReprintNg = 'PlacementOkReprintNg',
  PlacementOkReprintOk = 'PlacementOkReprintOk',
  PlacementOkReprintAllOk = 'PlacementOkReprintAllOk',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Placement.PlacementNg]: '客付け不可',
    [Placement.PlacementOkReprintNg]: '客付け可/広告転載不可(店頭紹介のみ可)',
    [Placement.PlacementOkReprintOk]: '客付け可/他社HPへの広告店転載可',
    [Placement.PlacementOkReprintAllOk]:
      "客付け可/LIFULL HOME'S、他社HPへの広告転載可",
  },
  en: {
    [Placement.PlacementNg]: 'Placement Not Allowed',
    [Placement.PlacementOkReprintNg]:
      'Placement OK/Advertisement Reprint Not Allowed',
    [Placement.PlacementOkReprintOk]: 'Placement OK/Advertisement Reprint OK',
    [Placement.PlacementOkReprintAllOk]:
      'Placement OK/Advertisement Reprint All OK',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const placementEncoder = generateEncoder<Placement>(translations);
export const placementDecoder = generateDecoder<Placement>(reverseTranslations);
