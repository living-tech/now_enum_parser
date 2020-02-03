export declare enum TrustdockVerificationResult {
    REJECTED = 0,
    APPROVED = 1
}
export declare const trustdockVerificationResultEncoder: (raw: TrustdockVerificationResult, lang: import(".").Language) => string;
export declare const trustdockVerificationResultDecoder: (text: string, lang: import(".").Language) => TrustdockVerificationResult;
