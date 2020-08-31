import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MapCardSize {
  Large = 'Large',
  Small = 'Small',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MapCardSize.Large]: '大',
    [MapCardSize.Small]: '小',
  },
  en: {
    [MapCardSize.Large]: 'large',
    [MapCardSize.Small]: 'small',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const mapCardSizeEncoder = generateEncoder<MapCardSize>(translations);
export const mapCardSizeDecoder = generateDecoder<MapCardSize>(
  reverseTranslations,
);
