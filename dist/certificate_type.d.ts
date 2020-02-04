export declare enum CertificateType {
    Minpaku = "Minpaku",
    Hotel = "Hotel",
    NationalStrategicSpecialZone = "NationalStrategicSpecialZone"
}
export declare const certificateTypeEncoder: (raw: CertificateType, lang: import(".").Language) => string;
export declare const certificateTypeDecoder: (text: string, lang: import(".").Language) => CertificateType;
