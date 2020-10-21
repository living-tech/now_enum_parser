export declare enum IeloveVerificationType {
    DriverLicense = "DriverLicense",
    SealCertificate = "SealCertificate",
    BasicResidentRegisterCard = "BasicResidentRegisterCard",
    HealthInsuranceCard = "HealthInsuranceCard",
    Passport = "Passport",
    MyNumberCard = "MyNumberCard",
    AlienRegistrationCertificate = "AlienRegistrationCertificate",
    ResidencyCard = "ResidencyCard"
}
export declare const ieloveVerificationTypeEncoder: (raw: IeloveVerificationType, lang: import(".").Language) => string;
export declare const ieloveVerificationTypeDecoder: (text: string, lang: import(".").Language) => IeloveVerificationType;
