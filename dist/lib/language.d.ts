export declare enum Language {
    JAPANESE = "ja",
    ENGLISH = "en"
}
export declare const languageEncoder: (lang: Language) => string;
export declare const languageDecoder: (lang: string) => Language;
