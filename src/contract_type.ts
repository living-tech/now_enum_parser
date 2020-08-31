import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ContractType {
  FixedTerm = 'FixedTerm', // 定期借家契約
  Standard = 'Standard', // 普通借家契約
  Hotel = 'Hotel', // 旅館業
  Temporary = 'Temporary', // 一時利用
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ContractType.FixedTerm]: '定期借家契約',
    [ContractType.Standard]: '普通借家契約',
    [ContractType.Hotel]: '旅館業',
    [ContractType.Temporary]: '一時利用',
  },
  en: {
    [ContractType.FixedTerm]: 'fixed term lease contract',
    [ContractType.Standard]: 'standard lease contract',
    [ContractType.Hotel]: 'hotel',
    [ContractType.Temporary]: 'temporary use',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const contractTypeEncoder = generateEncoder<ContractType>(translations);
export const contractTypeDecoder = generateDecoder<ContractType>(
  reverseTranslations,
);
