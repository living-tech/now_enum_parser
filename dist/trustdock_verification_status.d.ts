export declare enum TrustdockVerificationStatus {
    Accepted = "Accepted",
    PlanSelected = "PlanSelected",
    DocumentReceived = "DocumentReceived",
    InProgress = "InProgress",
    Confirmed = "Confirmed"
}
export declare const trustdockVerificationStatusEncoder: (raw: TrustdockVerificationStatus, lang: import(".").Language) => string;
export declare const trustdockVerificationStatusDecoder: (text: string, lang: import(".").Language) => TrustdockVerificationStatus;
