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
  },
  en: {
    [ImageTarget.PrivateRoom]: '専有部 - Room',
    [ImageTarget.ShareRoom]: '共有部 - Room',
    [ImageTarget.PrivateKitchen]: '専有部 - Kitchen',
    [ImageTarget.ShareKitchen]: '共有部 - Kitchen',
    [ImageTarget.PrivateToilet]: '専有部 - Toilet, Bathroom, WashStand',
    [ImageTarget.ShareToilet]: '共有部 - Toilet, Bathroom, WashStand',
    [ImageTarget.PrivateEntrance]: '専有部 - Entrance, Balcony, Scenery',
    [ImageTarget.ShareEntrance]: '共有部 - Entrance, Balcony, Scenery',
    [ImageTarget.PrivateOther]: '専有部 - Other',
    [ImageTarget.ShareOther]: '共有部 - Other',
    [ImageTarget.PrivateNone]: '専有部 - None',
    [ImageTarget.ShareNone]: '共有部 - None',
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
