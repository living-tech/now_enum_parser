export declare enum ReserveStatus {
    Requested = "Requested",
    Approved = "Approved",
    Rejected = "Rejected",
    Occupied = "Occupied",
    Exited = "Exited",
    PreCanceled = "PreCanceled",
    MidCanceled = "MidCanceled",
    Displaced = "Displaced"
}
export declare const reserveStatusEncoder: (raw: ReserveStatus, lang: import(".").Language) => string;
export declare const reserveStatusDecoder: (text: string, lang: import(".").Language) => ReserveStatus;
