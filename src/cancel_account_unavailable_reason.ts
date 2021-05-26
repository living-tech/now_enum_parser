import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CancelAccountUnavailableReason {
   ReservationExists = 'ReservationExists',
   PaymentNotComplete = 'PaymentNotComplete',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CancelAccountUnavailableReason.ReservationExists]: '予約中の物件があります',
    [CancelAccountUnavailableReason.PaymentNotComplete]: 'お支払いが完了していない物件があります'
  },
  en: {
    [CancelAccountUnavailableReason.ReservationExists]: 'There exists a future reservation',
    [CancelAccountUnavailableReason.PaymentNotComplete]: 'There is a reservation whose payment is not complete',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export const cancelAccountUnavailableReasonEncoder = generateEncoder<CancelAccountUnavailableReason>(translations);
export const cancelAccountUnavailableReasonDecoder = generateDecoder<CancelAccountUnavailableReason>(
  reverseTranslations,
);
