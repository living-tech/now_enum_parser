import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Occupation {
  Specialist = 'Specialist', // 専門的･技術的職
  Clerical = 'Clerical', // 事務職
  Sales = 'Sales', // 販売職
  Service = 'Service', // サービス職
  Security = 'Security', // 保安職
  Manufacturing = 'Manufacturing', // 生産工程職
  Transport = 'Transport', // 輸送・機械運転職
  Construction = 'Construction', // 建設・採掘職
  Carrying = 'Carrying', // 運搬・清掃・包装等職
  Agriculture = 'Agriculture', // 農林漁業職
  Administrative = 'Administrative', // 管理職
  Other = 'Other', // その他
  None = 'None', // なし
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Occupation.Specialist]: '専門的･技術的職',
    [Occupation.Clerical]: '事務職',
    [Occupation.Sales]: '販売職',
    [Occupation.Service]: 'サービス職',
    [Occupation.Security]: '保安職',
    [Occupation.Manufacturing]: '生産工程職',
    [Occupation.Transport]: '輸送・機械運転職',
    [Occupation.Construction]: '建設・採掘職',
    [Occupation.Carrying]: '運搬・清掃・包装等職',
    [Occupation.Agriculture]: '農林漁業職',
    [Occupation.Administrative]: '管理職',
    [Occupation.Other]: 'その他',
    [Occupation.None]: 'なし',
  },
  en: {
    [Occupation.Specialist]: 'Professional and Technical Positions',
    [Occupation.Clerical]: 'Clerical Position',
    [Occupation.Sales]: 'Sales Position',
    [Occupation.Service]: 'Service',
    [Occupation.Security]: 'Security/Law Enforcement',
    [Occupation.Manufacturing]: 'Production Process',
    [Occupation.Transport]: 'Transportation & Machine Operation',
    [Occupation.Construction]: 'Construction & Mining',
    [Occupation.Carrying]: 'Transportation, Cleaning, Packaging & Related',
    [Occupation.Agriculture]: 'Agriculture, Forestry and Fisheries',
    [Occupation.Administrative]: 'Managerial Position',
    [Occupation.Other]: 'Other',
    [Occupation.None]: 'None',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const occupationEncoder = generateEncoder<Occupation>(translations);
export const occupationDecoder = generateDecoder<Occupation>(
  reverseTranslations,
);
