import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum HomesproKeyDeliveryType { // 
  OurCompany = 'OurCompany',
  Deposit = 'Deposit',
  Local = 'Local',
  Presence = 'Presence',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [HomesproKeyDeliveryType.OurCompany]: '当社', // 1:当社 2:預託 3:現地 4:立会 5:その他
    [HomesproKeyDeliveryType.Deposit]: '預託',
    [HomesproKeyDeliveryType.Local]: '現地',
    [HomesproKeyDeliveryType.Presence]: '立会',
    [HomesproKeyDeliveryType.Other]: 'その他',
  },
  en: {
    [HomesproKeyDeliveryType.OurCompany]: 'Our company', // 1: Our company 2: Deposit 3: Local 4: Presence 5: Other
    [HomesproKeyDeliveryType.Deposit]: 'Deposit',
    [HomesproKeyDeliveryType.Local]: 'Local',
    [HomesproKeyDeliveryType.Presence]: 'Presence',
    [HomesproKeyDeliveryType.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const homesproKeyDeliveryTypeEncoder = generateEncoder<HomesproKeyDeliveryType>(translations);
export const homesproKeyDeliveryTypeDecoder = generateDecoder<HomesproKeyDeliveryType>(
  reverseTranslations,
);
