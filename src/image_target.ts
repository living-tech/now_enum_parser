import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ImageTarget {
  Room = 'Room',
  Kitchen = 'Kitchen',
  Toilet = 'Toilet',
  Entrance = 'Entrance',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ImageTarget.Room]: '部屋',
    [ImageTarget.Kitchen]: 'キッチン',
    [ImageTarget.Toilet]: 'トイレ・風呂・洗面台',
    [ImageTarget.Entrance]: '玄関・バルコニー・景色',
    [ImageTarget.Other]: 'その他',
  },
  en: {
    [ImageTarget.Room]: 'Room',
    [ImageTarget.Kitchen]: 'Kitchen',
    [ImageTarget.Toilet]: 'Toilet, Bathroom, WashStand',
    [ImageTarget.Entrance]: 'Entrance, Balcony, Scenery',
    [ImageTarget.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const imageTargetEncoder = generateEncoder<ImageTarget>(
  translations,
);
export const imageTargetDecoder = generateDecoder<ImageTarget>(
  reverseTranslations,
);
