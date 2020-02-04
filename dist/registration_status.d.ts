export declare enum RegistrationStatus {
    NotYet = "NotYet",
    InProgress = "InProgess",
    Approved = "Approved",
    Rejected = "Rejected"
}
export declare const registrationStatusEncoder: (raw: RegistrationStatus, lang: import(".").Language) => string;
export declare const registrationStatusDecoder: (text: string, lang: import(".").Language) => RegistrationStatus;
