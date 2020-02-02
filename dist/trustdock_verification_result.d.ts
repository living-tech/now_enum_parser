export declare enum TrustdockVerificationResult {
    REJECTED = 0,
    APPROVED = 1
}
export declare const trustdockVerificationResultEncoder: (raw: TrustdockVerificationResult, lang: string) => string;
export declare const trustdockVerificationResultDecoder: (text: string, lang: string) => TrustdockVerificationResult;
