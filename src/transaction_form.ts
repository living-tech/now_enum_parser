import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TransactionForm { // 【改REINS】1:売主/貸主 2:代理 3:専属専任媒介 4: 専任媒介 5:一般媒介 6:仲介
  SellerLender = 'SellerLender',
  Deputy = 'Deputy',
  DedicatedExclusiveMedia = 'DedicatedExclusiveMedia',
  DedicatedMedia = 'DedicatedMedia',
  GeneralMedia = 'GeneralMedia',
  Media = 'Media',
}

// Edit contexts
const translations: Translations = {
  ja: {
    // 大東の部屋詳細表示修正
    [TransactionForm.SellerLender]: '貸主',
    [TransactionForm.Deputy]: '代理',
    [TransactionForm.DedicatedExclusiveMedia]: '専属専任媒介',
    [TransactionForm.DedicatedMedia]: '専任媒介',
    [TransactionForm.GeneralMedia]: '一般媒介',
    [TransactionForm.Media]: '仲介',
  },
  en: {
    [TransactionForm.SellerLender]: 'Seller / Lender',
    [TransactionForm.Deputy]: 'Deputy',
    [TransactionForm.DedicatedExclusiveMedia]: 'Dedicated exclusive media',
    [TransactionForm.DedicatedMedia]: 'Dedicated media',
    [TransactionForm.GeneralMedia]: 'General media',
    [TransactionForm.Media]: 'Media',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const transactionFormEncoder = generateEncoder<TransactionForm>(
  translations,
);
export const transactionFormDecoder = generateDecoder<TransactionForm>(
  reverseTranslations,
);
