import { Translations } from './lib/interfaces';
export declare enum CommuteDistanceType {
    Way = "Way",
    Straight = "Straight"
}
export declare const commuteDistanceTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const commuteDistanceTypeDecoder: (text: string, lang: import(".").Language) => Translations;
