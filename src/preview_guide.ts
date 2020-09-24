import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PreviewGuide {
  Direct = 'Direct', // 接客内見
  Self = 'Self', // セルフ内見
  Unsupported = 'Unsupported', // 対応不可
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PreviewGuide.Direct]: '接客内見',
    [PreviewGuide.Self]: 'セルフ内見',
    [PreviewGuide.Unsupported]: '対応不可',
  },
  en: {
    [PreviewGuide.Direct]: 'direct',
    [PreviewGuide.Self]: 'self',
    [PreviewGuide.Unsupported]: 'unsupported',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const previewGuideEncoder = generateEncoder<PreviewGuide>(translations);
export const previewGuideDecoder = generateDecoder<PreviewGuide>(
  reverseTranslations,
);
