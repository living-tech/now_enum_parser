export declare enum ReserveStatus {
    Requested = "Requested",
    Approved = "Approved",
    Occupied = "Occupied",
    Exited = "Exited",
    Canceled = "Canceled"
}
export declare const reserveStatusEncoder: (raw: ReserveStatus, lang: import(".").Language) => string;
export declare const reserveStatusDecoder: (text: string, lang: import(".").Language) => ReserveStatus;
