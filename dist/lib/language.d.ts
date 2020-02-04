export declare enum Language {
    ja = "ja",
    en = "en"
}
export declare const languageEncoder: (lang: Language) => string;
export declare const languageDecoder: (lang: string) => Language;
