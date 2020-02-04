export declare enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export declare const genderEncoder: (raw: Gender, lang: import(".").Language) => string;
export declare const genderDecoder: (text: string, lang: import(".").Language) => Gender;
