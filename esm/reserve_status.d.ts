export declare enum ReserveStatus {
    IeloveRequested = "IeloveRequested",
    Requested = "Requested",
    Approved = "Approved",
    Occupied = "Occupied",
    Exited = "Exited",
    Canceled = "Canceled"
}
export declare const reserveStatusEncoder: (raw: ReserveStatus, lang: import("./index").Language) => string;
export declare const reserveStatusDecoder: (text: string, lang: import("./index").Language) => ReserveStatus;
