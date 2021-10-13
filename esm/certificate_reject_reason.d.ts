export declare enum CertificateRejectReason {
    NotDesignated = "NotDesignated",
    Unclearness = "Unclearness",
    HidenessOrDamage = "HidenessOrDamage",
    NoRegistrationNumber = "NoRegistrationNumber",
    WrongInfo = "WrongInfo",
    Other = "Other"
}
export declare const certificateRejectReasonEncoder: (raw: CertificateRejectReason, lang: import("./index").Language) => string;
export declare const certificateRejectReasonDecoder: (text: string, lang: import("./index").Language) => CertificateRejectReason;
