export declare enum TrustdockAmlCheckStatus {
    Accpted = "Accepted",
    Confirmed = "Confirmed"
}
export declare const trustdockAmlCheckStatusEncoder: (raw: TrustdockAmlCheckStatus, lang: import(".").Language) => string;
export declare const trustdockAmlCheckStatusDecoder: (text: string, lang: import(".").Language) => TrustdockAmlCheckStatus;
