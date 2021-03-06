export declare enum ContactType {
    Application = "Application",
    Payment = "Payment",
    Account = "Account",
    BeforeMoveIn = "BeforeMoveIn",
    MoveIn = "MoveIn",
    MoveOut = "MoveOut",
    BeforeMoveOut = "BeforeMoveOut",
    Other = "Other"
}
export declare const contactTypeEncoder: (raw: ContactType, lang: import(".").Language) => string;
export declare const contactTypeDecoder: (text: string, lang: import(".").Language) => ContactType;
