export declare enum TrustdockAmlCheckStatus {
    Accpted = "Accepted",
    Confirmed = "Confirmed"
}
export declare const trustdockAmlCheckStatusEncoder: (raw: TrustdockAmlCheckStatus, lang: import("./index").Language) => string;
export declare const trustdockAmlCheckStatusDecoder: (text: string, lang: import("./index").Language) => TrustdockAmlCheckStatus;
