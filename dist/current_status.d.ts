export declare enum CurrentStatus {
    Resident = "Resident",
    Empty = "Empty",
    Rent = "Rent",
    Unfinished = "Unfinished"
}
export declare const currentStatusEncoder: (raw: CurrentStatus, lang: import(".").Language) => string;
export declare const currentStatusDecoder: (text: string, lang: import(".").Language) => CurrentStatus;
