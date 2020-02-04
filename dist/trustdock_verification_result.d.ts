export declare enum TrustdockVerificationResult {
    Rejected = "Rejected",
    Approved = "Approved"
}
export declare const trustdockVerificationResultEncoder: (raw: TrustdockVerificationResult, lang: import(".").Language) => string;
export declare const trustdockVerificationResultDecoder: (text: string, lang: import(".").Language) => TrustdockVerificationResult;
