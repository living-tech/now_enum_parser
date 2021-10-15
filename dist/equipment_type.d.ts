import { Translations } from './lib/interfaces';
export declare enum EquipmentType {
    Internet = "Internet",
    AutoLock = "AutoLock",
    AirConditioner = "AirConditioner",
    Closet = "Closet",
    SeparateBathroomAndToilet = "SeparateBathroomAndToilet",
    IndependentWashBasin = "IndependentWashBasin",
    ParkingLotIncluded = "ParkingLotIncluded",
    DeliveryBox = "DeliveryBox",
    Pet = "Pet"
}
export declare const equipmentTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const equipmentTypeDecoder: (text: string, lang: import(".").Language) => Translations;
