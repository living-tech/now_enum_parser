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
  Occupied = 'Occupied', // 入居中
  Exited = 'Exited', // 退去済
  Canceled = 'Canceled', // キャンセル済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReserveStatus.Requested]: '予約リクエスト',
    [ReserveStatus.Approved]: '予約承認済',
    [ReserveStatus.Occupied]: '入居中',
    [ReserveStatus.Exited]: '退去済',
    [ReserveStatus.Canceled]: 'キャンセル済',
  },
  en: {
    [ReserveStatus.Requested]: 'Reserve requested',
    [ReserveStatus.Approved]: 'Reserve approved',
    [ReserveStatus.Occupied]: 'Now ocupied',
    [ReserveStatus.Exited]: 'Exited',
    [ReserveStatus.Canceled]: 'Canceled',
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
