export declare enum ReserveStatus {
    IeloveRequested = "IeloveRequested",
    Requested = "Requested",
    Approved = "Approved",
    Occupied = "Occupied",
    Exited = "Exited",
    Canceled = "Canceled",
    Rejected = "Rejected"
}
export declare const reserveStatusEncoder: (raw: ReserveStatus, lang: import(".").Language) => string;
export declare const reserveStatusDecoder: (text: string, lang: import(".").Language) => ReserveStatus;
