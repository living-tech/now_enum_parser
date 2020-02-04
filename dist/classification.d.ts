export declare enum Classification {
    User = "User",
    Owner = "Owner",
    Admin = "Admin"
}
export declare const classificationEncoder: (raw: Classification, lang: import(".").Language) => string;
export declare const classificationDecoder: (text: string, lang: import(".").Language) => Classification;
