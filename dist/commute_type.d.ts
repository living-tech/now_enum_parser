import { Translations } from './lib/interfaces';
export declare enum CommuteType {
    Railway = "Railway",
    Bus = "Bus",
    Walk = "Walk",
    Car = "Car",
    Bicycle = "Bicycle"
}
export declare const commuteTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const commuteTypeDecoder: (text: string, lang: import(".").Language) => Translations;
