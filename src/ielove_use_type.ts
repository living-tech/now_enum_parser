import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum IeloveUseType {
  ResidentialUseWithGuarantee = 'ResidentialUseWithGuarantee', // 住居用（保険付）
  Other = 'Other', // その他
  None = 'None', // なし
}

// Edit contexts
const translations: Translations = {
  ja: {
    [IeloveUseType.ResidentialUseWithGuarantee]: '住居用（保険付）',
    [IeloveUseType.Other]: 'その他',
    [IeloveUseType.None]: 'なし',
  },
  en: {
    [IeloveUseType.ResidentialUseWithGuarantee]:
      'Residential Use with Guarantee',
    [IeloveUseType.Other]: 'Other',
    [IeloveUseType.None]: 'None',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const ieloveUseTypeEncoder = generateEncoder<IeloveUseType>(
  translations,
);
export const ieloveUseTypeDecoder = generateDecoder<IeloveUseType>(
  reverseTranslations,
);
