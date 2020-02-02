export declare enum Classification {
    USER = 0,
    OWNER = 1,
    ADMIN = 2
}
export declare const classificationEncoder: (raw: Classification, lang: string) => string;
export declare const classificationDecoder: (text: string, lang: string) => Classification;
