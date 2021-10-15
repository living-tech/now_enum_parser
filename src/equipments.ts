import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Equipments {
  Internet = "Internet",
  AutoLock = "AutoLock",
  AirConditioner = "AirConditioner",
  Closet = "Closet",
  SeparateBathroomAndToilet = "SeparateBathroomAndToilet",
  IndependentWashBasin ="IndependentWashBasin",
  ParkingLotIncluded = "ParkingLotIncluded",
  DeliveryBox = "DeliveryBox",
  Pet = "Pet"
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Equipments.Internet]: 'インターネット',
    [Equipments.AutoLock]: 'オートロック',
    [Equipments.AirConditioner]: 'エアコン',
    [Equipments.Closet]: 'クローゼット',
    [Equipments.SeparateBathroomAndToilet]: 'バス・トイレ別',
    [Equipments.IndependentWashBasin]: '洗面所独立',
    [Equipments.ParkingLotIncluded]: '駐車場',
    [Equipments.DeliveryBox]: '宅配ボックス',
    [Equipments.Pet]: 'ペット',
  },
  en: {
    [Equipments.Internet]: 'Internet',
    [Equipments.AutoLock]: 'AutoLock',
    [Equipments.AirConditioner]: 'AirConditioner',
    [Equipments.Closet]: 'Closet',
    [Equipments.SeparateBathroomAndToilet]: 'SeparateBathroomAndToilet',
    [Equipments.IndependentWashBasin]: 'IndependentWashBasin',
    [Equipments.ParkingLotIncluded]: 'ParkingLotIncluded',
    [Equipments.DeliveryBox]: 'DeliveryBox',
    [Equipments.Pet]: 'Pet',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const equipmentsEncoder = generateEncoder<Translations>(translations);
export const equipmentsDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
