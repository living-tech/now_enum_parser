export declare enum CertificateImageType {
    MINPAKU = 0,
    REGISTRATION_NUMBER = 1,
    MUNICIPALITY_ACCEPTED_MAIL = 2,
    MINPAKU_MANAGEMENT_SYSTEM = 3,
    MINPAKU_ACCEPTED_MAIL = 4,
    HOTEL_BUSINESS_LICENSE = 5,
    NATIONAL_STRATEGIC_SPECIAL_ZONE = 6
}
export declare const certificateImageTypeEncoder: (raw: CertificateImageType, lang: string) => string;
export declare const certificateImageTypeDecoder: (text: string, lang: string) => CertificateImageType;
