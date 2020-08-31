import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ListCardColumnLength {
  One = 'One',
  Two = 'Two',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ListCardColumnLength.One]: '1列',
    [ListCardColumnLength.Two]: '2列',
  },
  en: {
    [ListCardColumnLength.One]: '1 column',
    [ListCardColumnLength.Two]: '2 columns',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const listCardColumnLengthEncoder = generateEncoder<ListCardColumnLength>(translations);
export const listCardColumnLengthDecoder = generateDecoder<ListCardColumnLength>(
  reverseTranslations,
);
