import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum PayoutStatus {
  PayoutSchedule = 'PayoutSchedule', // 入金予定
  PayoutDone = 'PayoutDone', // 入金済
}

// Edit contexts
const translations: Translations = {
  ja: {
    [PayoutStatus.PayoutSchedule]: '入金予定',
    [PayoutStatus.PayoutDone]: '入金済',
  },
  en: {
    [PayoutStatus.PayoutSchedule]: 'Payout Schedule',
    [PayoutStatus.PayoutDone]: 'Payout Done',
  },
};

// DO NOT EDIT
const payoutTranslations = generateReverseTranslations(translations);

// Edit constants name
export const payoutStatusEncoder = generateEncoder<PayoutStatus>(translations);
export const payoutStatusDecoder = generateDecoder<PayoutStatus>(
  payoutTranslations,
);
