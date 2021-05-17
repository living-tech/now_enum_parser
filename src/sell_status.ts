import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum SellStatus {
  OnSale = 'OnSale', // 1:空有/売出中
  SoldOut = 'SoldOut', // 3:空無/売止
  ContractSigned = 'ContractSigned', // 4:成約
  Deleted = 'Deleted', // 9:削除 (1:空有/売出中 の場合に掲載されます)
}

// Edit contexts
const translations: Translations = {
  ja: {
    [SellStatus.OnSale]: '空有/売出中',
    [SellStatus.SoldOut]: '空無/売止',
    [SellStatus.ContractSigned]: '成約',
    [SellStatus.Deleted]: '削除',
  },
  en: {
    [SellStatus.OnSale]: 'On Sale',
    [SellStatus.SoldOut]: 'Sold Out',
    [SellStatus.ContractSigned]: 'Contract Signed',
    [SellStatus.Deleted]: 'Deleted',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const sellStatusEncoder = generateEncoder<SellStatus>(
  translations,
);
export const sellStatusDecoder = generateDecoder<SellStatus>(
  reverseTranslations,
);
