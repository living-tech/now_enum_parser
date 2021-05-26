import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CancelAccountUnavailableReason {
   ReserationExists = 'ReservationExists',
   PaymentNotComplete = 'PaymentNotComplete',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CancelAccountUnavailableReason.ReserationExists]: '予約中の物件があります',
    [CancelAccountUnavailableReason.PaymentNotComplete]: 'お支払いが完了していない物件があります'
  },
  en: {
    [CancelAccountUnavailableReason.ReserationExists]: 'There exists a future reservation',
    [CancelAccountUnavailableReason.PaymentNotComplete]: 'There is a reservation whose payment is not complete',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export const cancelReasonEncoder = generateEncoder<CancelAccountUnavailableReason>(translations);
export const cancelReasonDecoder = generateDecoder<CancelAccountUnavailableReason>(
  reverseTranslations,
);
