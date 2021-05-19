import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MoveInType { // 1:即時 2:相談 3:期日指定
  Immediate = 'Immediate',
  Consultation = 'Consultation',
  SpecifyDueDate = 'SpecifyDueDate',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MoveInType.Immediate]: '即時',
    [MoveInType.Consultation]: '相談',
    [MoveInType.SpecifyDueDate]: '期日指定',
  },
  en: {
    [MoveInType.Immediate]: 'Immediate',
    [MoveInType.Consultation]: 'Consultation',
    [MoveInType.SpecifyDueDate]: 'SpecifyDueDate',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const moveInTypeEncoder = generateEncoder<MoveInType>(translations);
export const moveInTypeDecoder = generateDecoder<MoveInType>(
  reverseTranslations,
);
