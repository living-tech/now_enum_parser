import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum JapaneseLevel {
  Level1 = 'Level1',
  Level2 = 'Level2',
  Level3 = 'Level3',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [JapaneseLevel.Level1]: '日常会話ができる',
    [JapaneseLevel.Level2]: '片言で会話ができる',
    [JapaneseLevel.Level3]: '全く会話ができない',
  },
  en: {
    [JapaneseLevel.Level1]: 'Level1',
    [JapaneseLevel.Level2]: 'Level2',
    [JapaneseLevel.Level3]: 'Level3',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const japaneseLevelEncoder = generateEncoder<JapaneseLevel>(translations);
export const japaneseLevelDecoder = generateDecoder<JapaneseLevel>(
  reverseTranslations,
);
