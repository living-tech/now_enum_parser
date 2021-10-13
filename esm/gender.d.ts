export declare enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export declare const genderEncoder: (raw: Gender, lang: import("./index").Language) => string;
export declare const genderDecoder: (text: string, lang: import("./index").Language) => Gender;
