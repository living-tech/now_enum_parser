import { Translations } from './lib/interfaces';
export declare enum Equipments {
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
export declare const equipmentsEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const equipmentsDecoder: (text: string, lang: import(".").Language) => Translations;
