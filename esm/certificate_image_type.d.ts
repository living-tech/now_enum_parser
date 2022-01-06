export declare enum CertificateImageType {
    Minpaku = "Minpaku",
    RegistrationNumber = "RegistrationNumber",
    MunicipalityAcceptedMail = "MunicipalityAcceptedMail",
    MinpakuManagementSystem = "MinpakuManagementSystem",
    MinpakuAcceptedMail = "MinpakuAcceptedMail",
    HotelBusinessLicense = "HotelBusinessLicense",
    NationalStrategicSpecialZone = "NationalStrategicSpecialZone"
}
export declare const certificateImageTypeEncoder: (raw: CertificateImageType, lang: import("./index").Language) => string;
export declare const certificateImageTypeDecoder: (text: string, lang: import("./index").Language) => CertificateImageType;
