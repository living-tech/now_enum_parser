import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ContractPeriodType { // 1: xx年xx月まで(期限表示) 2: xx年xx月(期間表示)
  DateType = 'DateType', // 期限表示
  PeriodType = 'PeriodType', // 期間表示
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ContractPeriodType.DateType]: '期限表示',
    [ContractPeriodType.PeriodType]: '期間表示',
  },
  en: {
    [ContractPeriodType.DateType]: 'Date Type',
    [ContractPeriodType.PeriodType]: 'Period Type',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const contractPeriodTypeEncoder = generateEncoder<ContractPeriodType>(
  translations,
);
export const contractPeriodTypeDecoder = generateDecoder<ContractPeriodType>(
  reverseTranslations,
);
