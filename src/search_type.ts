import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum SearchType {
  SearchByCity = 'SearchByCity',
  SearchByRailway = 'SearchByRailway',
  SearchByTime = 'SearchByTime',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [SearchType.SearchByCity]: '市区町村から探す',
    [SearchType.SearchByRailway]: '沿線・駅から探す',
    [SearchType.SearchByTime]: '通勤時間・通勤距離から探す',
  },
  en: {
    [SearchType.SearchByCity]: 'SearchByCity',
    [SearchType.SearchByRailway]: 'SearchByRailway',
    [SearchType.SearchByTime]: 'SearchByTime',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const searchTypeEncoder = generateEncoder<Translations>(translations);
export const searchTypeDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
