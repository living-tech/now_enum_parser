import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ImageTarget {
  PrivateRoom = 'PrivateRoom',
  ShareRoom = 'ShareRoom',
  PrivateKitchen = 'PrivateKitchen',
  ShareKitchen = 'ShareKitchen',
  PrivateToilet = 'PrivateToilet',
  ShareToilet = 'ShareToilet',
  PrivateEntrance = 'PrivateEntrance',
  ShareEntrance = 'ShareEntrance',
  PrivateOther = 'PrivateOther',
  ShareOther = 'ShareOther',
  PrivateNone = 'PrivateNone',
  ShareNone = 'ShareNone',
  FloorPlan = 'FloorPlan',
  KeyVisual = 'KeyVisual',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ImageTarget.PrivateRoom]: '専有部 - 部屋',
    [ImageTarget.ShareRoom]: '共有部 - 部屋',
    [ImageTarget.PrivateKitchen]: '専有部 - キッチン',
    [ImageTarget.ShareKitchen]: '共有部 - キッチン',
    [ImageTarget.PrivateToilet]: '専有部 - トイレ・風呂・洗面台',
    [ImageTarget.ShareToilet]: '共有部 - トイレ・風呂・洗面台',
    [ImageTarget.PrivateEntrance]: '専有部 - 玄関・バルコニー・景色',
    [ImageTarget.ShareEntrance]: '共有部 - 玄関・バルコニー・景色',
    [ImageTarget.PrivateOther]: '専有部 - その他',
    [ImageTarget.ShareOther]: '共有部 - その他',
    [ImageTarget.PrivateNone]: '専有部 - 区分なし',
    [ImageTarget.ShareNone]: '共有部 - 区分なし',
    [ImageTarget.FloorPlan]: '間取り',
    [ImageTarget.KeyVisual]: 'KV',
  },
  en: {
    [ImageTarget.PrivateRoom]: 'Private - Room',
    [ImageTarget.ShareRoom]: 'Public - Room',
    [ImageTarget.PrivateKitchen]: 'Private - Kitchen',
    [ImageTarget.ShareKitchen]: 'Public - Kitchen',
    [ImageTarget.PrivateToilet]: 'Private - Toilet, Bathroom, WashStand',
    [ImageTarget.ShareToilet]: 'Public - Toilet, Bathroom, WashStand',
    [ImageTarget.PrivateEntrance]: 'Private - Entrance, Balcony, Scenery',
    [ImageTarget.ShareEntrance]: 'Public - Entrance, Balcony, Scenery',
    [ImageTarget.PrivateOther]: 'Private - Other',
    [ImageTarget.ShareOther]: 'Public - Other',
    [ImageTarget.PrivateNone]: 'Private - None',
    [ImageTarget.ShareNone]: 'Public - None',
    [ImageTarget.FloorPlan]: 'Floor Plan',
    [ImageTarget.KeyVisual]: 'KV',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const imageTargetEncoder = generateEncoder<ImageTarget>(translations);
export const imageTargetDecoder = generateDecoder<ImageTarget>(
  reverseTranslations,
);
