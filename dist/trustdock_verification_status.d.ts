export declare enum TrustdockVerificationStatus {
    ACCEPTED = 0,
    PLAN_SELECTED = 1,
    DOCUMENT_RECEIVED = 2,
    IN_PROGRESS = 3,
    CONFIRMED = 4
}
export declare const trustdockVerificationStatusEncoder: (raw: TrustdockVerificationStatus, lang: string) => string;
export declare const trustdockVerificationStatusDecoder: (text: string, lang: string) => TrustdockVerificationStatus;
