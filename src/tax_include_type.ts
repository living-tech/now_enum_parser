import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TaxIncludeType { // 2:税込み 3:税表示無し(税発生せず)
  TaxIncluded = 'TaxIncluded',
  TaxFree = 'TaxFree',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TaxIncludeType.TaxIncluded]: '税込み',
    [TaxIncludeType.TaxFree]: '税表示無し(税発生せず)',
  },
  en: {
    [TaxIncludeType.TaxIncluded]: 'Tax Included',
    [TaxIncludeType.TaxFree]: 'Tax Free',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const taxIncludeTypeEncoder = generateEncoder<TaxIncludeType>(
  translations,
);
export const taxIncludeTypeDecoder = generateDecoder<TaxIncludeType>(
  reverseTranslations,
);
