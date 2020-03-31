import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReserveStatus {
  Requested = 'Requested', // 予約リクエスト
  Approved = 'Approved', // 入居前
  Occupied = 'Occupied', // 入居中
  Exited = 'Exited', // 退去済み
  Canceled = 'Canceled', // キャンセル
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReserveStatus.Requested]: '予約リクエスト',
    [ReserveStatus.Approved]: '入居前',
    [ReserveStatus.Occupied]: '入居中',
    [ReserveStatus.Exited]: '退去済み',
    [ReserveStatus.Canceled]: 'キャンセル',
  },
  en: {
    [ReserveStatus.Requested]: 'Booking Request',
    [ReserveStatus.Approved]: 'Before Move In',
    [ReserveStatus.Occupied]: 'Moving In',
    [ReserveStatus.Exited]: 'Moved Out',
    [ReserveStatus.Canceled]: 'Cancelled',
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
