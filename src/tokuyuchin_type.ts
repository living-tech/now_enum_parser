import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TokuyuchinType { // 1:傾斜型 2:フラット型
  InclinedType = 'InclinedType',
  FlatType = 'FlatType',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TokuyuchinType.InclinedType]: '傾斜型',
    [TokuyuchinType.FlatType]: 'フラット型',
  },
  en: {
    [TokuyuchinType.InclinedType]: 'Inclined type', // 1: Inclined type 2: Flat type
    [TokuyuchinType.FlatType]: 'Flat type',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const tokuyuchinTypeEncoder = generateEncoder<TokuyuchinType>(translations);
export const tokuyuchinTypeDecoder = generateDecoder<TokuyuchinType>(
  reverseTranslations,
);
