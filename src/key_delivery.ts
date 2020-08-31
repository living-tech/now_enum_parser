import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum KeyDelivery {
  Direct = 'Direct', // 接客内見
  Self = 'Self', // セルフ内見
  Unsupported = 'Unsupported', // 対応不可
}

// Edit contexts
const translations: Translations = {
  ja: {
    [KeyDelivery.Direct]: '接客内見',
    [KeyDelivery.Self]: 'セルフ内見',
    [KeyDelivery.Unsupported]: '対応不可',
  },
  en: {
    [KeyDelivery.Direct]: 'direct',
    [KeyDelivery.Self]: 'self',
    [KeyDelivery.Unsupported]: 'unsupported',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const keyDeliveryEncoder = generateEncoder<KeyDelivery>(translations);
export const keyDeliveryDecoder = generateDecoder<KeyDelivery>(
  reverseTranslations,
);
