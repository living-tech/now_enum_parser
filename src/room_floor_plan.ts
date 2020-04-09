import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RoomFloorPlan {
  OneRoom = 'OneRoom', // ワンルーム
  OneK = 'OneK', // 1K
  OneDk = 'OneDk', // 1DK
  OneLdk = 'OneLdk', // 1LDK
  TwoK = 'TwoK', // 2K
  TwoDk = 'TwoDk', // 2DK
  TwoLdk = 'TwoLdk', // 2LDK
  ThreeK = 'ThreeK', // 3K
  ThreeDk = 'ThreeDk', // 3DK
  ThreeLdk = 'ThreeLdk', // 3LDK
  FourK = 'FourK', // 4K
  FourDk = 'FourDk', // 4DK
  MoreThanFourLdk = 'MoreThanFourLdk', // 4LDK以上
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RoomFloorPlan.OneRoom]: 'ワンルーム',
    [RoomFloorPlan.OneK]: '1K',
    [RoomFloorPlan.OneDk]: '1DK',
    [RoomFloorPlan.OneLdk]: '1LDK',
    [RoomFloorPlan.TwoK]: '2K',
    [RoomFloorPlan.TwoDk]: '2DK',
    [RoomFloorPlan.TwoLdk]: '2LDK',
    [RoomFloorPlan.ThreeK]: '3K',
    [RoomFloorPlan.ThreeDk]: '3DK',
    [RoomFloorPlan.ThreeLdk]: '3LDK',
    [RoomFloorPlan.FourK]: '4K',
    [RoomFloorPlan.FourDk]: '4DK',
    [RoomFloorPlan.MoreThanFourLdk]: '4LDK以上',
  },
  en: {
    [RoomFloorPlan.OneRoom]: 'Studio Apartment',
    [RoomFloorPlan.OneK]: '1K',
    [RoomFloorPlan.OneDk]: '1DK',
    [RoomFloorPlan.OneLdk]: '1LDK',
    [RoomFloorPlan.TwoK]: '2K',
    [RoomFloorPlan.TwoDk]: '2DK',
    [RoomFloorPlan.TwoLdk]: '2LDK',
    [RoomFloorPlan.ThreeK]: '3K',
    [RoomFloorPlan.ThreeDk]: '3DK',
    [RoomFloorPlan.ThreeLdk]: '3LDK',
    [RoomFloorPlan.FourK]: '4K',
    [RoomFloorPlan.FourDk]: '4DK',
    [RoomFloorPlan.MoreThanFourLdk]: '4LDK or more',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomFloorPlanEncoder = generateEncoder<RoomFloorPlan>(
  translations,
);
export const roomFloorPlanDecoder = generateDecoder<RoomFloorPlan>(
  reverseTranslations,
);
