import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReserveStatus {
  IeloveRequested = 'IeloveRequested', // いえらぶへ保証リクエスト中
  Requested = 'Requested', // オーナーへ予約リクエスト中
  Approved = 'Approved', // 確定済み
  Occupied = 'Occupied', // 入居中
  Exited = 'Exited', // 退去済み
  Canceled = 'Canceled', // ゲストからのキャンセル
  Rejected = 'Rejected', // ホスト、管理者側からの予約リクエスト却下
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReserveStatus.IeloveRequested]: '保証リクエスト',
    [ReserveStatus.Requested]: '予約リクエスト',
    [ReserveStatus.Approved]: '確定済み',
    [ReserveStatus.Occupied]: '入居中',
    [ReserveStatus.Exited]: '退去済み',
    [ReserveStatus.Canceled]: 'キャンセル',
    [ReserveStatus.Rejected]: '予約リクエスト却下',
  },
  en: {
    [ReserveStatus.IeloveRequested]: 'Guarantee Request',
    [ReserveStatus.Requested]: 'Booking Request',
    [ReserveStatus.Approved]: 'Confirmed',
    [ReserveStatus.Occupied]: 'Moving In',
    [ReserveStatus.Exited]: 'Moved Out',
    [ReserveStatus.Canceled]: 'Cancelled',
    [ReserveStatus.Rejected]: 'Rejected',
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
