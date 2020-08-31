import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CancelReason {
  InventoryShortage = 'InventoryShortage', // 別の予約による在庫不足
  BusinessDifficulties= 'BusinessDifficulties', // 営業の継続が困難
  ConditionMismatch = 'ConditionMismatch', // 募集条件に不一致
  PaymentNotPossible = 'PaymentNotPossible', // 届出情報に誤りがある
  Other = 'Other', // その他
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CancelReason.InventoryShortage]: '別の予約による在庫不足',
    [CancelReason.BusinessDifficulties]: '営業の継続が困難',
    [CancelReason.ConditionMismatch]: '募集条件に不一致',
    [CancelReason.PaymentNotPossible]: '決済不可',
    [CancelReason.Other]: 'その他',
  },
  en: {
    [CancelReason.InventoryShortage]:
      'Shortage of stock due to another reservation',
    [CancelReason.BusinessDifficulties]:
      'It is difficult to continue sales',
    [CancelReason.ConditionMismatch]:
      'Mismatched recruitment conditions',
    [CancelReason.PaymentNotPossible]:
      'Payment not possible',
    [CancelReason.Other]: 'Other Reasons',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export const cancelReasonEncoder = generateEncoder<
  CancelReason
>(translations);
export const cancelReasonDecoder = generateDecoder<
  CancelReason
>(reverseTranslations);
