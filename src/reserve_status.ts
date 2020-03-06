import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReserveStatus {
  Requested = 'Requested', // 予約リクエスト
  Approved = 'Approved', // 予約承認済
  Rejected = 'Rejected', // 予約却下済
  Occupied = 'Occupied', // 入居中
  Exited = 'Exited', // 退去済
  PreCanceled = 'PreCanceled', // 事前キャンセル済
  MidCanceled = 'MidCanceled', // 中途解約済
  Displaced = 'Displaced', // 強制退去済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReserveStatus.Requested]: '予約リクエスト',
    [ReserveStatus.Approved]: '予約承認済',
    [ReserveStatus.Rejected]: '予約却下済',
    [ReserveStatus.Occupied]: '入居中',
    [ReserveStatus.Exited]: '退去済',
    [ReserveStatus.PreCanceled]: '事前キャンセル済',
    [ReserveStatus.MidCanceled]: '中途解約済',
    [ReserveStatus.Displaced]: '強制退去済',
  },
  en: {
    [ReserveStatus.Requested]: 'Reserve requested',
    [ReserveStatus.Approved]: 'Reserve approved',
    [ReserveStatus.Rejected]: 'Reserve rejected',
    [ReserveStatus.Occupied]: 'Now ocupied',
    [ReserveStatus.Exited]: 'Exited',
    [ReserveStatus.PreCanceled]: 'Canceled in advance',
    [ReserveStatus.MidCanceled]: 'Canceled at the middle',
    [ReserveStatus.Displaced]: 'Displaced',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const reserveStatusEncoder = generateEncoder<ReserveStatus>(
  translations,
);
export const reserveStatusDecoder = generateDecoder<ReserveStatus>(
  reverseTranslations,
);
