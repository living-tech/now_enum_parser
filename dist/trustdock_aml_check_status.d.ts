export declare enum TrustdockAmlCheckStatus {
    ACCEPTED = 0,
    CONFIRMED = 1
}
export declare const trustdockAmlCheckStatusEncoder: (raw: TrustdockAmlCheckStatus, lang: string) => string;
export declare const trustdockAmlCheckStatusDecoder: (text: string, lang: string) => TrustdockAmlCheckStatus;
