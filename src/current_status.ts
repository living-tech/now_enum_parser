import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CurrentStatus { // 【改REINS】(戸建・マン・外全・外一)1:居住中(居住用物件) 2:空家 3:賃貸中(投資用物件) 4:未完成
  Resident = 'Resident',
  Empty = 'Empty',
  Rent = 'Rent',
  Unfinished = 'Unfinished',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CurrentStatus.Resident]: '居住中',
    [CurrentStatus.Empty]: '空家',
    [CurrentStatus.Rent]: '賃貸中',
    [CurrentStatus.Unfinished]: '未完成',
  },
  en: {
    [CurrentStatus.Resident]: 'Resident',
    [CurrentStatus.Empty]: 'Empty',
    [CurrentStatus.Rent]: 'Rent',
    [CurrentStatus.Unfinished]: 'Unfinished',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const currentStatusEncoder = generateEncoder<CurrentStatus>(translations);
export const currentStatusDecoder = generateDecoder<CurrentStatus>(
  reverseTranslations,
);
