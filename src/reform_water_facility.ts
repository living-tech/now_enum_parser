import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReformWaterFacility { //  1:キッチン 2:浴室 3:トイレ 4:洗面所 5:給湯器 6:給排水管
  Kitchen = 'Kitchen',
  Bathroom = 'Bathroom',
  Toilet = 'Toilet',
  Washroom = 'Washroom',
  WaterHeater = 'WaterHeater',
  WaterSupply = 'WaterSupply',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReformWaterFacility.Kitchen]: 'キッチン', //1:キッチン 2:浴室 3:トイレ 4:洗面所 5:給湯器 6:給排水管
    [ReformWaterFacility.Bathroom]: '浴室',
    [ReformWaterFacility.Toilet]: 'トイレ',
    [ReformWaterFacility.Washroom]: '洗面所',
    [ReformWaterFacility.WaterHeater]: '給湯器',
    [ReformWaterFacility.WaterSupply]: '給排水管',
  },
  en: {
    [ReformWaterFacility.Kitchen]: 'Kitchen', // 1: Kitchen 2: Bathroom 3: Toilet 4: Washroom 5: Water heater 6: Water supply and drainage pipe
    [ReformWaterFacility.Bathroom]: 'Bathroom',
    [ReformWaterFacility.Toilet]: 'Toilet',
    [ReformWaterFacility.Washroom]: 'Washroom',
    [ReformWaterFacility.WaterHeater]: 'Water heater',
    [ReformWaterFacility.WaterSupply]: 'Water supply and drainage pipe',
  }
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const reformWaterFacilityEncoder = generateEncoder<ReformWaterFacility>(translations);
export const reformWaterFacilityDecoder = generateDecoder<ReformWaterFacility>(
  reverseTranslations,
);
