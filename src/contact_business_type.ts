import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum ContactBusinessType {
  Rent = 'Rent', // 賃貸
  MonthlyRental = 'MonthlyRental', // マンスリー賃貸
  Hotel = 'Hotel', // ホテル
  Ryokan = 'Ryokan', //旅館
  GuestHouse = 'GuestHouse', // ゲストハウス
  ShareHouse = 'ShareHouse', // シェアハウス
  Minpaku = 'Minpaku', // 民泊
  Other = 'Other', // その他
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ContactBusinessType.Rent]: '賃貸',
    [ContactBusinessType.MonthlyRental]: 'マンスリー賃貸',
    [ContactBusinessType.Hotel]: 'ホテル',
    [ContactBusinessType.Ryokan]: '旅館',
    [ContactBusinessType.GuestHouse]: 'ゲストハウス',
    [ContactBusinessType.ShareHouse]: 'シェアハウス',
    [ContactBusinessType.Minpaku]: '民泊',
    [ContactBusinessType.Other]: 'その他',
  },
  en: {
    [ContactBusinessType.Rent]: 'Rent',
    [ContactBusinessType.MonthlyRental]: 'Monthly Rental',
    [ContactBusinessType.Hotel]: 'Hotel',
    [ContactBusinessType.Ryokan]: 'Ryokan',
    [ContactBusinessType.GuestHouse]: 'Guest House',
    [ContactBusinessType.ShareHouse]: 'Share House',
    [ContactBusinessType.Minpaku]: 'Minpaku',
    [ContactBusinessType.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const contactBussinessTypeEncoder = generateEncoder<ContactBusinessType>(
  translations,
);
export const contactBussinessTypeDecoder = generateDecoder<ContactBusinessType>(
  reverseTranslations,
);
