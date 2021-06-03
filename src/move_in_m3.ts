import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MoveInM3 { // 1:上旬 2:中旬 3:下旬（引渡/入居時期で期日指定をした場合のみ)
  Early = 'Early',
  Mid = 'Mid',
  Late = 'Late',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MoveInM3.Early]: '上旬',
    [MoveInM3.Mid]: '中旬',
    [MoveInM3.Late]: '下旬',
  },
  en: {
    [MoveInM3.Early]: 'Early',
    [MoveInM3.Mid]: 'Mid',
    [MoveInM3.Late]: 'Late',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const moveInM3Encoder = generateEncoder<MoveInM3>(translations);
export const moveInM3Decoder = generateDecoder<MoveInM3>(reverseTranslations);
