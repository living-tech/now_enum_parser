import { Translations } from './lib/interfaces';
export declare enum ShortTermPenaltyType {
    LessThanTwoYears = "LessThanTwoYears",
    LessThanOneYear = "LessThanOneYear",
    LessThanSixMonths = "LessThanSixMonths"
}
export declare const shortTermPenaltyTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const shortTermPenaltyTypeDecoder: (text: string, lang: import(".").Language) => Translations;
