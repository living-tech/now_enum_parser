import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum BuildingConstructedRange {
  OneYear = 'OneYear',                 // 1年以内
  ThreeYear = 'ThreeYear',             // 3年以内
  FiveYear = 'FiveYear',               // 5年以内
  SevenYear = 'SevenYear',             // 7年以内
  TenYear = 'TenYear',                 // 10年以内
  FifteenYear = 'FifteenYear',         // 15年以内
  TwentyYear = 'TwentyYear',           // 20年以内
  TwentyFiveYear = 'TwentyFiveYear',   // 25年以内
  ThirtyYear = 'ThirtyYear',           // 30年以内
}

const translations: Translations = {
  ja: {
    [BuildingConstructedRange.OneYear]: '1年以内',
    [BuildingConstructedRange.ThreeYear]: '3年以内',
    [BuildingConstructedRange.FiveYear]: '5年以内',
    [BuildingConstructedRange.SevenYear]: '7年以内',
    [BuildingConstructedRange.TenYear]: '10年以内',
    [BuildingConstructedRange.FifteenYear]: '15年以内',
    [BuildingConstructedRange.TwentyYear]: '20年以内',
    [BuildingConstructedRange.TwentyFiveYear]: '25年以内',
    [BuildingConstructedRange.ThirtyYear]: '30年以内',
  },
  en: {
    [BuildingConstructedRange.OneYear]: 'Within a year',
    [BuildingConstructedRange.ThreeYear]: 'Within three years',
    [BuildingConstructedRange.FiveYear]: 'Within five years',
    [BuildingConstructedRange.SevenYear]: 'Within seven years',
    [BuildingConstructedRange.TenYear]: 'Within ten years',
    [BuildingConstructedRange.FifteenYear]: 'Within fifteen years',
    [BuildingConstructedRange.TwentyYear]: 'Within twenty years',
    [BuildingConstructedRange.TwentyFiveYear]: 'Within twentyfive years',
    [BuildingConstructedRange.ThirtyYear]: 'Within Thirty years',
  },
};

const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const buildingConstructedRangeEncoder = generateEncoder<BuildingConstructedRange>(
  translations,
);
export const buildingConstructedRangeDecoder = generateDecoder<BuildingConstructedRange>(
  reverseTranslations,
);
