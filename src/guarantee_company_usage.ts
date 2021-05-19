import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum GuaranteeCompanyUsage { // 1:利用可 2:加入要 3:不要
  Available = 'Available',
  SubscriptionRequired = 'SubscriptionRequired',
  NotRequired = 'NotRequired',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [GuaranteeCompanyUsage.Available]: '利用可',
    [GuaranteeCompanyUsage.SubscriptionRequired]: '加入要',
    [GuaranteeCompanyUsage.NotRequired]: '不要',
  },
  en: {
    [GuaranteeCompanyUsage.Available]: 'Available', // 1: Available 2: Subscription required 3: Not required
    [GuaranteeCompanyUsage.SubscriptionRequired]: 'Subscription required',
    [GuaranteeCompanyUsage.NotRequired]: 'Not required',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const guaranteeCompanyUsageEncoder = generateEncoder<GuaranteeCompanyUsage>(translations);
export const guaranteeCompanyUsageDecoder = generateDecoder<GuaranteeCompanyUsage>(
  reverseTranslations,
);
