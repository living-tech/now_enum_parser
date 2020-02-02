import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Occupation {
  SPECIALIST, // 専門的･技術的職
  CLERICAL, // 事務職
  SALES, // 販売職
  SERVICE, // サービス職
  SECURITY, // 保安職
  MANUFACTURING, // 生産工程職
  TRANSPORT, // 輸送・機械運転職
  CONSTRUCTION, // 建設・採掘職
  CARRYING, // 運搬・清掃・包装等職
  AGRICULTURE, // 農林漁業職
  ADMINISTRATIVE, // 管理職
  OTHER, // その他
  NONE, // なし
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const occupationEncoder = generateEncoder<Occupation>(translations);
export const occupationDecoder = generateDecoder<Occupation>(
  reverseTranslations,
);
