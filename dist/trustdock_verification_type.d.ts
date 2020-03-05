export declare enum TrustdockVerificationType {
    Passport = "Passport",
    DriverLicense = "DriverLicense",
    JukiCard = "JukiCard",
    ZaiRyuCard = "ZaiRyuCard",
    MyNumberCard = "MyNumberCard"
}
export declare const trustdockVerificationTypeEncoder: (raw: TrustdockVerificationType, lang: import(".").Language) => string;
export declare const trustdockVerificationTypeDecoder: (text: string, lang: import(".").Language) => TrustdockVerificationType;
