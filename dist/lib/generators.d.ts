import { Translations } from "./interfaces";
export declare const generateReverseTranslations: (translations: Translations) => Translations;
export declare const generateEncoder: <T>(translations: Translations) => (raw: T, lang: string) => string;
export declare const generateDecoder: <T>(reverseTranslations: Translations) => (text: string, lang: string) => T;
