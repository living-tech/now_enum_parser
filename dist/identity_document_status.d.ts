export declare enum IdentityDocumentStatus {
    Accepted = "Accepted",
    PlanSelected = "PlanSelected",
    DocumentReceived = "DocumentReceived",
    InProgress = "InProgress",
    Confirmed = "Confirmed",
    Rejected = "Rejected",
    ToBeConfirmed = "ToBeConfirmed",
    Approved = "Approved"
}
export declare const identityDocumentStatusEncoder: (raw: IdentityDocumentStatus, lang: import(".").Language) => string;
export declare const identityDocumentStatusDecoder: (text: string, lang: import(".").Language) => IdentityDocumentStatus;
