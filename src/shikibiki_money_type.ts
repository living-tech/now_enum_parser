import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ShikibikiMoneyType {
  WhenMovingOut = 'WhenMovingOut',
  EveryYear = 'EveryYear',
  WhenRenewing = 'WhenRenewing',
}

// Edit contexts
const translations: Translations = {
  // 1:退去時 2:毎年 3:更新時
  ja: {
    [ShikibikiMoneyType.WhenMovingOut]: '退去時',
    [ShikibikiMoneyType.EveryYear]: '毎年',
    [ShikibikiMoneyType.WhenRenewing]: '更新時',
  },
  en: {
    [ShikibikiMoneyType.WhenMovingOut]: 'When moving out ',
    [ShikibikiMoneyType.EveryYear]: 'Every year',
    [ShikibikiMoneyType.WhenRenewing]: 'When renewing',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const shikibikiMoneyTypeEncoder = generateEncoder<ShikibikiMoneyType>(
  translations,
);
export const shikibikiMoneyTypeDecoder = generateDecoder<ShikibikiMoneyType>(
  reverseTranslations,
);
