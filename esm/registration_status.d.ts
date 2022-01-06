export declare enum RegistrationStatus {
    NotYet = "NotYet",
    InProgress = "InProgress",
    Approved = "Approved",
    Rejected = "Rejected"
}
export declare const registrationStatusEncoder: (raw: RegistrationStatus, lang: import("./index").Language) => string;
export declare const registrationStatusDecoder: (text: string, lang: import("./index").Language) => RegistrationStatus;
