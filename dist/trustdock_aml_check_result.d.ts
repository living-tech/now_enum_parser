export declare enum TrustdockAmlCheckResult {
    TO_BE_CONFIRMED = 0,
    APPROVED = 1
}
export declare const trustdockAmlCheckResultEncoder: (raw: TrustdockAmlCheckResult, lang: import(".").Language) => string;
export declare const trustdockAmlCheckResultDecoder: (text: string, lang: import(".").Language) => TrustdockAmlCheckResult;
