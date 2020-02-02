import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum RoomTypeChargeType {
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
export const roomTypeChargeTypeEncoder = generateEncoder<RoomTypeChargeType>(
  translations,
);
export const roomTypeChargeTypeDecoder = generateDecoder<RoomTypeChargeType>(
  reverseTranslations,
);
