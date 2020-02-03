export declare enum RegistrationStatus {
    NOT_YET = 0,
    IN_PROGRESS = 1,
    APPROVED = 2,
    REJECTED = 3
}
export declare const registrationStatusEncoder: (raw: RegistrationStatus, lang: import(".").Language) => string;
export declare const registrationStatusDecoder: (text: string, lang: import(".").Language) => RegistrationStatus;
