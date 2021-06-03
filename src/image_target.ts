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
  ExteriorMapSurroundingsOther = 'ExteriorMapSurroundingsOther',
  DoorBalcony = 'DoorBalcony',
  ToiletBathWashbasin = 'ToiletBathWashbasin',
  EntranceParkingLot = 'EntranceParkingLot',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ImageTarget.PrivateRoom]: '専有部 - 部屋', // 内装・居間・寝室・子供部屋・収納・設備
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
    // 1:間取 2:外観 3:地図 4:周辺 5:内装 9:その他画像 10:玄関 11:居間  12:キッチン 13:寝室 14:子供部屋
    // 15:風呂 16:トイレ 17:洗面 18:収納 19:設備 20:バルコニー 21:エントランス 22:駐車場
    [ImageTarget.ExteriorMapSurroundingsOther]: '外観・地図・周辺・その他画像',
    [ImageTarget.DoorBalcony]: '専有部 - 玄関・バルコニー', 
    [ImageTarget.ToiletBathWashbasin]: '専有部 - トイレ・風呂・洗面',
    [ImageTarget.EntranceParkingLot]: '共有部 - エントランス・駐車場',
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
    [ImageTarget.ExteriorMapSurroundingsOther]: 'Exterior, Map, Surroundings, Other',
    [ImageTarget.DoorBalcony]: 'Private - Door, Balcony',
    [ImageTarget.ToiletBathWashbasin]: 'Private - Toilet, Bath, Washbasin',
    [ImageTarget.EntranceParkingLot]: 'Public - Entrance, Parking Lot',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const imageTargetEncoder = generateEncoder<ImageTarget>(translations);
export const imageTargetDecoder = generateDecoder<ImageTarget>(
  reverseTranslations,
);
