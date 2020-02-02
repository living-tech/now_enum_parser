import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Prefecture {
  HOKKAIDO,
  AOMORI,
  IWATE,
  MIYAGI,
  AKITA,
  YAMAGATA,
  FUKUSHIMA,
  IBARAKI,
  TOCHIGI,
  GUNMA,
  SAITAMA,
  CHIBA,
  TOKYO,
  KANAGAWA,
  NIIGATA,
  TOYAMA,
  ISHIKAWA,
  FUKUI,
  YAMANASHI,
  NAGANO,
  GIFU,
  SHIZUOKA,
  AICHI,
  MIE,
  SHIGA,
  KYOTO,
  OSAKA,
  HYOGO,
  NARA,
  WAKAYAMA,
  TOTTORI,
  SHIMANE,
  OKAYAMA,
  HIROSHIMA,
  YAMAGUCHI,
  TOKUSHIMA,
  KAGAWA,
  EHIME,
  KOCHI,
  FUKUOKA,
  SAGA,
  NAGASAKI,
  KUMAMOTO,
  OITA,
  MIYAZAKI,
  KAGOSHIMA,
  OKINAWA,
}

// Edit contexts
const translations: Translations = {
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const prefectureEncoder = generateEncoder<Prefecture>(translations);
export const prefectureDecoder = generateDecoder<Prefecture>(
  reverseTranslations,
);
