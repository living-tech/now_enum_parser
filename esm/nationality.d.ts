export declare enum Nationality {
    Japan = "Japan",
    Other = "Other"
}
export declare const nationalityEncoder: (raw: Nationality, lang: import("./index").Language) => string;
export declare const nationalityDecoder: (text: string, lang: import("./index").Language) => Nationality;
