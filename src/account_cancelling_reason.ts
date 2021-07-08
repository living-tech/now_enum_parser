import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// NotSubmitted
export enum AccountCancellingReason {
  DidntLikeRooms = 'DidntLikeRooms',
  DifficultToUse = 'DifficultToUse',
  BadApplicationUI = 'BadApplicationUI',
  Others = 'Others',
}

const translations: Translations = {
  ja: {
    [AccountCancellingReason.DidntLikeRooms]: '気に入った物件がなかった',
    [AccountCancellingReason.DifficultToUse]: '使い方がわからなかった',
    [AccountCancellingReason.BadApplicationUI]:
      'サイト/アプリの操作感が悪かった',
    [AccountCancellingReason.Others]: 'その他',
  },
  en: {
    [AccountCancellingReason.DidntLikeRooms]: 'Did not like any of the rooms',
    [AccountCancellingReason.DifficultToUse]: 'Difficult to use',
    [AccountCancellingReason.BadApplicationUI]: 'Website/Application UI is bad',
    [AccountCancellingReason.Others]: 'Others',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export const accountCancelReasonEncoder = generateEncoder<
  AccountCancellingReason
>(translations);
export const accountCancelReasonDecoder = generateDecoder<
  AccountCancellingReason
>(reverseTranslations);
