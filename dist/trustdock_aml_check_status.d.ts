export declare enum TrustdockAmlCheckStatus {
    ACCEPTED = 0,
    CONFIRMED = 1
}
export declare const trustdockAmlCheckStatusEncoder: (raw: TrustdockAmlCheckStatus, lang: import(".").Language) => string;
export declare const trustdockAmlCheckStatusDecoder: (text: string, lang: import(".").Language) => TrustdockAmlCheckStatus;
