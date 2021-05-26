import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum AccountCancellingReason {
  DIDNT_LIKE_ROOMS = 'DidntLikeRooms',
  DIFFICULT_TO_USE = 'DifficultToUse',
  BAD_APPLICATION_UI = 'BadApplicationUI',
  Others = 'Others',
}

const translations: Translations = {
  ja: {
    [AccountCancellingReason.DIDNT_LIKE_ROOMS]: '気に入った物件がなかった',
    [AccountCancellingReason.DIFFICULT_TO_USE]: '使い方がわからなかった',
    [AccountCancellingReason.BAD_APPLICATION_UI]: 'サイト/アプリの操作感が悪かった',
    [AccountCancellingReason.Others]: 'その他',
  },
  en: {
    [AccountCancellingReason.DIDNT_LIKE_ROOMS]: 'Did not like any of the rooms',
    [AccountCancellingReason.DIFFICULT_TO_USE]: 'Difficult to use',
    [AccountCancellingReason.BAD_APPLICATION_UI]: 'Website/Application UI is bad',
    [AccountCancellingReason.Others]: 'Others',
  }
}

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export const accountCancelReasonEncoder = generateEncoder<AccountCancellingReason>(translations);
export const accountCancelReasonDecoder = generateDecoder<AccountCancellingReason>(
  reverseTranslations,
);