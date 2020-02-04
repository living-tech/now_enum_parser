export declare enum Language {
    Ja = "ja",
    En = "en"
}
export declare const languageEncoder: (lang: Language) => string;
export declare const languageDecoder: (lang: string) => Language;
