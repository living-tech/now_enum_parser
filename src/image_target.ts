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
  Exterior = 'Exterior',
  Map = 'Map',
  Surroundings = 'Surroundings',
  Interior = 'Interior',
  OtherImage = 'Other image',
  Door = 'Door',
  LivingRoom = 'Living room',
  Kitchen = 'Kitchen',
  Bedroom = 'Bedroom',
  ChildrensRoom = 'Childrens room',
  Bath = 'Bath',
  Toilet = 'Toilet',
  Washbasin = 'Washbasin',
  Storage = 'Storage',
  Facilities = 'Facilities',
  Balcony = 'Balcony',
  Entrance = 'Entrance',
  ParkingLot = 'Parking lot',

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
    // 1:間取 2:外観 3:地図 4:周辺 5:内装 9:その他画像 10:玄関 11:居間  12:キッチン 13:寝室 14:子供部屋 
    // 15:風呂 16:トイレ 17:洗面 18:収納 19:設備 20:バルコニー 21:エントランス 22:駐車場
    [ImageTarget.Exterior]: '外観',
    [ImageTarget.Map]: '地図',
    [ImageTarget.Surroundings]: '周辺',
    [ImageTarget.Interior]: '内装',
    [ImageTarget.OtherImage]: 'その他画像',
    [ImageTarget.Door]: '玄関',
    [ImageTarget.LivingRoom]: '居間',
    [ImageTarget.Kitchen]: 'キッチン',
    [ImageTarget.Bedroom]: '寝室',
    [ImageTarget.ChildrensRoom]: '子供部屋',
    [ImageTarget.Bath]: '風呂',
    [ImageTarget.Toilet]: 'トイレ',
    [ImageTarget.Washbasin]: '洗面',
    [ImageTarget.Storage]: '収納',
    [ImageTarget.Facilities]: '設備',
    [ImageTarget.Balcony]: 'バルコニー',
    [ImageTarget.Entrance]: 'エントランス',
    [ImageTarget.ParkingLot]: '駐車場',
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
    // 1: Floor plan 2: Exterior 3: Map 4: Surroundings 5: Interior 9: Other image 10: Door 11: Living room 12: Kitchen 13: Bedroom 14: Children's room 
    // 15: Bath 16: Toilet 17: Washbasin 18: Storage 19: Facilities 20: Balcony 21: Entrance 22: Parking lot
    [ImageTarget.Exterior]: 'Exterior',
    [ImageTarget.Map]: 'Map',
    [ImageTarget.Surroundings]: 'Surroundings',
    [ImageTarget.Interior]: 'Interior',
    [ImageTarget.OtherImage]: 'Other image',
    [ImageTarget.Door]: 'Door',
    [ImageTarget.LivingRoom]: 'Living room',
    [ImageTarget.Kitchen]: 'Kitchen',
    [ImageTarget.Bedroom]: 'Bedroom',
    [ImageTarget.ChildrensRoom]: 'Childrens room',
    [ImageTarget.Bath]: 'Bath',
    [ImageTarget.Toilet]: 'Toilet',
    [ImageTarget.Washbasin]: 'Washbasin',
    [ImageTarget.Storage]: 'Storage',
    [ImageTarget.Facilities]: 'Facilities',
    [ImageTarget.Balcony]: 'Balcony',
    [ImageTarget.Entrance]: 'Entrance',
    [ImageTarget.ParkingLot]: 'Parking lot',


  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const imageTargetEncoder = generateEncoder<ImageTarget>(translations);
export const imageTargetDecoder = generateDecoder<ImageTarget>(
  reverseTranslations,
);
