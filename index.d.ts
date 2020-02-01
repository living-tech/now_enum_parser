declare module "lib/interfaces" {
    interface Translation {
        [key: string]: string;
    }
    export interface Translations {
        [key: string]: Translation;
    }
}
declare module "lib/generators" {
    import { Translations } from "lib/interfaces";
    export const generateReverseTranslations: (translations: Translations) => Translations;
    export const generateEncoder: <T>(translations: Translations) => (raw: T, lang: string) => string;
    export const generateDecoder: <T>(reverseTranslations: Translations) => (text: string, lang: string) => T;
}
declare module "gender" {
    export enum Gender {
        MALE = 0,
        FEMALE = 1,
        OTHER = 2
    }
    export const encoder: (raw: Gender, lang: string) => string;
    export const decoder: (text: string, lang: string) => Gender;
}
