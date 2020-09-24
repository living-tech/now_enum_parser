import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum KeyDelivery {
  Direct = 'Direct',
  Noncontact = 'Noncontact',
  SmartLock = 'SmartLock',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [KeyDelivery.Direct]: '直接お渡し',
    [KeyDelivery.Noncontact]: '非接触受け渡し',
    [KeyDelivery.SmartLock]: 'スマートロック',
    [KeyDelivery.Other]: 'その他',
  },
  en: {
    [KeyDelivery.Direct]: 'direct',
    [KeyDelivery.Noncontact]: 'noncontact',
    [KeyDelivery.SmartLock]: 'smart lock',
    [KeyDelivery.Other]: 'other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const keyDeliveryEncoder = generateEncoder<KeyDelivery>(translations);
export const keyDeliveryDecoder = generateDecoder<KeyDelivery>(
  reverseTranslations,
);
