export declare enum TrustdockVerificationType {
    Passport = "Passport",
    DriverLicense = "DriverLicense",
    DrivingHistoryCertification = "DrivingHistoryCertification",
    BasicResidentRegisterCard = "BasicResidentRegisterCard",
    ResidencyCard = "ResidencyCard",
    SpecialPermanentResidentCertificate = "SpecialPermanentResidentCertificate",
    MyNumberCard = "MyNumberCard"
}
export declare const trustdockVerificationTypeEncoder: (raw: TrustdockVerificationType, lang: import(".").Language) => string;
export declare const trustdockVerificationTypeDecoder: (text: string, lang: import(".").Language) => TrustdockVerificationType;
