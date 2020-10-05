export declare enum ApplicationStatus {
    NotSubmitted = "NotSubmitted",
    InProgress = "InProgress",
    Rejected = "Rejected",
    Approved = "Approved"
}
export declare const applicationStatusEncoder: (raw: ApplicationStatus, lang: import(".").Language) => string;
export declare const applicationStatusDecoder: (text: string, lang: import(".").Language) => ApplicationStatus;
