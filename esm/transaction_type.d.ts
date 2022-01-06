export declare enum TransactionType {
    Credit = "Credit",
    Payment = "Payment",
    Refund = "Refund"
}
export declare const transactionTypeEncoder: (raw: TransactionType, lang: import("./index").Language) => string;
export declare const transactionTypeDecoder: (text: string, lang: import("./index").Language) => TransactionType;
