import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RoomTypesSortType {
  Default = 'Default', // デフォルトソート
  ManageSourceAsc = 'ManageSourceAsc', // 在庫連携物件を後方にソート
  ManageSourceDesc = 'ManageSourceDesc', // 在庫連携物件を前方にソート
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RoomTypesSortType.ManageSourceAsc]: '在庫連携物件を後方にソート',
    [RoomTypesSortType.ManageSourceDesc]: '在庫連携物件を前方にソート',
  },
  en: {
    [RoomTypesSortType.ManageSourceAsc]: 'Manage Source Asc',
    [RoomTypesSortType.ManageSourceDesc]: 'Manage Source Desc',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomTypesSortTypeEncoder = generateEncoder<RoomTypesSortType>(
  translations,
);
export const roomTypesSortTypeDecoder = generateDecoder<RoomTypesSortType>(
  reverseTranslations,
);
