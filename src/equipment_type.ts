import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum EquipmentType {
  Internet = 'Internet',
  AutoLock = 'AutoLock',
  AirConditioner = 'AirConditioner',
  Closet = 'Closet',
  SeparateBathroomAndToilet = 'SeparateBathroomAndToilet',
  IndependentWashBasin = 'IndependentWashBasin',
  ParkingLotIncluded = 'ParkingLotIncluded',
  DeliveryBox = 'DeliveryBox',
  Pet = 'Pet',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [EquipmentType.Internet]: 'インターネット',
    [EquipmentType.AutoLock]: 'オートロック',
    [EquipmentType.AirConditioner]: 'エアコン',
    [EquipmentType.Closet]: 'クローゼット',
    [EquipmentType.SeparateBathroomAndToilet]: 'バス・トイレ別',
    [EquipmentType.IndependentWashBasin]: '洗面所独立',
    [EquipmentType.ParkingLotIncluded]: '駐車場',
    [EquipmentType.DeliveryBox]: '宅配ボックス',
    [EquipmentType.Pet]: 'ペット',
  },
  en: {
    [EquipmentType.Internet]: 'Internet',
    [EquipmentType.AutoLock]: 'AutoLock',
    [EquipmentType.AirConditioner]: 'AirConditioner',
    [EquipmentType.Closet]: 'Closet',
    [EquipmentType.SeparateBathroomAndToilet]: 'SeparateBathroomAndToilet',
    [EquipmentType.IndependentWashBasin]: 'IndependentWashBasin',
    [EquipmentType.ParkingLotIncluded]: 'ParkingLotIncluded',
    [EquipmentType.DeliveryBox]: 'DeliveryBox',
    [EquipmentType.Pet]: 'Pet',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const equipmentTypeEncoder = generateEncoder<Translations>(translations);
export const equipmentTypeDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
