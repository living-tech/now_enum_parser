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
  OneDK = 'OneDK', // 1DK
  OneLDK = 'OneLDK', // 1LDK
  TwoK = 'TwoK', // 2K
  TwoDK = 'TwoDK', // 2DK
  TwoLDK = 'TwoLDK', // 2LDK
  ThreeK = 'ThreeK', // 3K
  ThreeDK = 'ThreeDK', // 3DK
  ThreeLDK = 'ThreeLDK', // 3LDK
  FourK = 'FourK', // 4K
  FourDK = 'FourDK', // 4DK
  MoreThanFourLDK = 'MoreThanFourLDK', // 4LDK以上
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RoomFloorPlan.OneRoom]: 'ワンルーム',
    [RoomFloorPlan.OneK]: '1K',
    [RoomFloorPlan.OneDK]: '1DK',
    [RoomFloorPlan.OneLDK]: '1LDK',
    [RoomFloorPlan.TwoK]: '2K',
    [RoomFloorPlan.TwoDK]: '2DK',
    [RoomFloorPlan.TwoLDK]: '2LDK',
    [RoomFloorPlan.ThreeK]: '3K',
    [RoomFloorPlan.ThreeDK]: '3DK',
    [RoomFloorPlan.ThreeLDK]: '3LDK',
    [RoomFloorPlan.FourK]: '4K',
    [RoomFloorPlan.FourDK]: '4DK',
    [RoomFloorPlan.MoreThanFourLDK]: '4LDK以上',
  },
  en: {
    [RoomFloorPlan.OneRoom]: 'One Room',
    [RoomFloorPlan.OneK]: '1K',
    [RoomFloorPlan.OneDK]: '1DK',
    [RoomFloorPlan.OneLDK]: '1LDK',
    [RoomFloorPlan.TwoK]: '2K',
    [RoomFloorPlan.TwoDK]: '2DK',
    [RoomFloorPlan.TwoLDK]: '2LDK',
    [RoomFloorPlan.ThreeK]: '3K',
    [RoomFloorPlan.ThreeDK]: '3DK',
    [RoomFloorPlan.ThreeLDK]: '3LDK',
    [RoomFloorPlan.FourK]: '4K',
    [RoomFloorPlan.FourDK]: '4DK',
    [RoomFloorPlan.MoreThanFourLDK]: '4LDK or More',
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
