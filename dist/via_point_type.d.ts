import { Translations } from './lib/interfaces';
export declare enum ViaPointType {
    Station = "Station",
    BusStop = "BusStop"
}
export declare const viaPointTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const viaPointTypeDecoder: (text: string, lang: import(".").Language) => Translations;
