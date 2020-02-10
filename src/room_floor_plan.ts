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
  TwoK = 'TwoK', // 2DK
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
  ja: {},
  en: {},
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomFloorTypeEncoder = generateEncoder<RoomFloorType>(
  translations,
);
export const roomFloorTypeDecoder = generateDecoder<RoomFloorType>(
  reverseTranslations,
);
