import { Translations } from './lib/interfaces';
export declare enum SearchType {
    SearchByCity = "SearchByCity",
    SearchByRailway = "SearchByRailway",
    SearchByTime = "SearchByTime"
}
export declare const searchTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const searchTypeDecoder: (text: string, lang: import(".").Language) => Translations;
