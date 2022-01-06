export declare enum TrustdockAmlCheckResult {
    ToBeConfirmed = "ToBeConfirmed",
    Approved = "Approved"
}
export declare const trustdockAmlCheckResultEncoder: (raw: TrustdockAmlCheckResult, lang: import("./index").Language) => string;
export declare const trustdockAmlCheckResultDecoder: (text: string, lang: import("./index").Language) => TrustdockAmlCheckResult;
