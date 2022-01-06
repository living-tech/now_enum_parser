export declare enum TrustdockVerificationResult {
    Rejected = "Rejected",
    Approved = "Approved"
}
export declare const trustdockVerificationResultEncoder: (raw: TrustdockVerificationResult, lang: import("./index").Language) => string;
export declare const trustdockVerificationResultDecoder: (text: string, lang: import("./index").Language) => TrustdockVerificationResult;
