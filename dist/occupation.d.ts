export declare enum Occupation {
    SPECIALIST = 0,
    CLERICAL = 1,
    SALES = 2,
    SERVICE = 3,
    SECURITY = 4,
    MANUFACTURING = 5,
    TRANSPORT = 6,
    CONSTRUCTION = 7,
    CARRYING = 8,
    AGRICULTURE = 9,
    ADMINISTRATIVE = 10,
    OTHER = 11,
    NONE = 12
}
export declare const occupationEncoder: (raw: Occupation, lang: import(".").Language) => string;
export declare const occupationDecoder: (text: string, lang: import(".").Language) => Occupation;
