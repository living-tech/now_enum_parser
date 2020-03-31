import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TransactionReserveStatus {
  Request = 'Request', // 予約リクエスト
  Reserve = 'Reserve', // 予約
  PreCancele = 'PreCancele', // 事前キャンセル
  MidCancele = 'MidCancele', // 中途解約
  Overstay = 'Overstay', // オーバーステイ
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TransactionReserveStatus.Request]: '予約リクエスト',
    [TransactionReserveStatus.Reserve]: '予約',
    [TransactionReserveStatus.PreCancele]: '事前キャンセル',
    [TransactionReserveStatus.MidCancele]: '中途解約',
    [TransactionReserveStatus.Overstay]: 'オーバーステイ',
  },
  en: {
    [TransactionReserveStatus.Request]: 'Booking Request',
    [TransactionReserveStatus.Reserve]: 'Reservation',
    [TransactionReserveStatus.PreCancele]: 'Advance Cancellation',
    [TransactionReserveStatus.MidCancele]:
      'Premature Termination of a Contract',
    [TransactionReserveStatus.Overstay]: 'Overstay',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const transactionReserveStatusEncoder = generateEncoder<
  TransactionReserveStatus
>(translations);
export const transactionReserveStatusDecoder = generateDecoder<
  TransactionReserveStatus
>(reverseTranslations);
