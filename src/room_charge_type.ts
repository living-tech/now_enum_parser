import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum RoomChargeType {
  ByRoom = 'ByRoom', // ルームチャージ型
  ByPerson = 'ByPerson', // 一人単価型
  None = 'None', // 区分なし
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RoomChargeType.ByRoom]: 'ルームチャージ型',
    [RoomChargeType.ByPerson]: '一人単価型',
    [RoomChargeType.None]: '区分なし',
  },
  en: {
    [RoomChargeType.ByRoom]: 'Price by room',
    [RoomChargeType.ByPerson]: 'Price by number of person',
    [RoomChargeType.None]: 'None',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomChargeTypeEncoder = generateEncoder<RoomChargeType>(
  translations,
);
export const roomChargeTypeDecoder = generateDecoder<RoomChargeType>(
  reverseTranslations,
);
