export declare enum CertificateRejectReason {
    OTHER = 0
}
export declare const certificateRejectReasonEncoder: (raw: CertificateRejectReason, lang: string) => string;
export declare const certificateRejectReasonDecoder: (text: string, lang: string) => CertificateRejectReason;
