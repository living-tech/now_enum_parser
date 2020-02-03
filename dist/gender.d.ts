export declare enum Gender {
    MALE = 0,
    FEMALE = 1,
    OTHER = 2
}
export declare const genderEncoder: (raw: Gender, lang: import(".").Language) => string;
export declare const genderDecoder: (text: string, lang: import(".").Language) => Gender;
