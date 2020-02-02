export declare enum TrustdockAmlCheckResult {
    TO_BE_CONFIRMED = 0,
    APPROVED = 1
}
export declare const trustdockAmlCheckResultEncoder: (raw: TrustdockAmlCheckResult, lang: string) => string;
export declare const trustdockAmlCheckResultDecoder: (text: string, lang: string) => TrustdockAmlCheckResult;
