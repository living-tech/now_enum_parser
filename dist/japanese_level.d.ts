import { Translations } from './lib/interfaces';
export declare enum JapaneseLevel {
    Level1 = "Level1",
    Level2 = "Level2",
    Level3 = "Level3"
}
export declare const japaneseLevelEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const japaneseLevelDecoder: (text: string, lang: import(".").Language) => Translations;
