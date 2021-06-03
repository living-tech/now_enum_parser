import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum HomesType {
  Mansion = 'Mansion', // 【居住用賃貸】3101:マンション 3102:アパート 3103:一戸建 3104:テラスハウス 3105:タウンハウス 3106:シェアハウス 3110:寮・下宿
  Apartment = 'Apartment', //
  House = 'House', //
  TerracedHouse = 'TerracedHouse', //
  TownHouse = 'TownHouse', //
  ShareHouse = 'ShareHouse', //
  Dormitory = 'Dormitory', //
}

// Edit contexts
const translations: Translations = {
  ja: {
    [HomesType.Mansion]: 'マンション', // 【居住用賃貸】3101:マンション 3102:アパート 3103:一戸建 3104:テラスハウス 3105:タウンハウス 3106:シェアハウス 3110:寮・下宿
    [HomesType.Apartment]: 'アパート',
    [HomesType.House]: '一戸建',
    [HomesType.TerracedHouse]: 'テラスハウス',
    [HomesType.TownHouse]: 'タウンハウス',
    [HomesType.ShareHouse]: 'シェアハウス',
    [HomesType.Dormitory]: '寮・下宿',
  },
  en: {
    [HomesType.Mansion]: 'Mansion',
    [HomesType.Apartment]: 'Apartment',
    [HomesType.House]: 'House',
    [HomesType.TerracedHouse]: 'Terraced House',
    [HomesType.TownHouse]: 'Town House',
    [HomesType.ShareHouse]: 'Share House',
    [HomesType.Dormitory]: 'Dormitory',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const homesTypeEncoder = generateEncoder<HomesType>(translations);
export const homesTypeDecoder = generateDecoder<HomesType>(reverseTranslations);
