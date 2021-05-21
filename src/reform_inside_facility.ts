import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReformInsideFacility {
  OverallInterior = 'OverallInterior',
  WallsCeiling = 'WallsCeiling',
  AllRoomsClothReCovered = 'AllRoomsClothReCovered',
  Floor = 'Floor',
  Joinery = 'Joinery',
  Sash = 'Sash',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReformInsideFacility.OverallInterior]: '内装全面（床、壁、天井、建具すべて）', //1:内装全面（床、壁、天井、建具すべて） 2:壁、天井（クロス、塗装等） 3:全室クロス張替 4:床（フローリング等） 5:建具（室内ドア等） 6:サッシ
    [ReformInsideFacility.WallsCeiling]: '壁、天井（クロス、塗装等）',
    [ReformInsideFacility.AllRoomsClothReCovered]: '全室クロス張替',
    [ReformInsideFacility.Floor]: '床（フローリング等）',
    [ReformInsideFacility.Joinery]: '建具（室内ドア等）',
    [ReformInsideFacility.Sash]: 'サッシ',
  },
  en: {
    [ReformInsideFacility.OverallInterior]: 'Overall interior', // 1: Overall interior (floor, wall, ceiling, fittings) 2: Walls, ceiling (cloth, paint, etc.) 3: All rooms cloth re-covered 4: Floor (flooring, etc.) 5: Joinery (indoor doors, etc.) 6: Sash
    [ReformInsideFacility.WallsCeiling]: 'Walls ceiling',
    [ReformInsideFacility.AllRoomsClothReCovered]: 'All rooms cloth re-covered',
    [ReformInsideFacility.Floor]: 'Floor',
    [ReformInsideFacility.Joinery]: 'Joinery',
    [ReformInsideFacility.Sash]: 'Sash',
  }
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const reformInsideFacilityEncoder = generateEncoder<ReformInsideFacility>(translations);
export const reformInsideFacilityDecoder = generateDecoder<ReformInsideFacility>(
  reverseTranslations,
);
