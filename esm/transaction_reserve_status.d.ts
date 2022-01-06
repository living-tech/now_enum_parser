export declare enum TransactionReserveStatus {
    Request = "Request",
    Reserve = "Reserve",
    PreCancele = "PreCancele",
    MidCancele = "MidCancele",
    Overstay = "Overstay"
}
export declare const transactionReserveStatusEncoder: (raw: TransactionReserveStatus, lang: import("./index").Language) => string;
export declare const transactionReserveStatusDecoder: (text: string, lang: import("./index").Language) => TransactionReserveStatus;
