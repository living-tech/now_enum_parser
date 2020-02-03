export declare enum CertificateRejectReason {
    OTHER = 0
}
export declare const certificateRejectReasonEncoder: (raw: CertificateRejectReason, lang: import(".").Language) => string;
export declare const certificateRejectReasonDecoder: (text: string, lang: import(".").Language) => CertificateRejectReason;
