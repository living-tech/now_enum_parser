import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum RoomChargeType {
  BY_ROOM, // ルームチャージ型
  BY_PERSON, // 一人単価型
  NONE, // 区分なし
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
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
