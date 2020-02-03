export declare enum CertificateType {
    MINPAKU = 0,
    HOTEL = 1,
    NATIONAL_STRATEGIC_SPECIAL_ZONE = 2
}
export declare const certificateTypeEncoder: (raw: CertificateType, lang: import(".").Language) => string;
export declare const certificateTypeDecoder: (text: string, lang: import(".").Language) => CertificateType;
