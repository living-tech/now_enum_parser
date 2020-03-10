export declare enum TransactionType {
    Credit = "Credit",
    Payment = "Payment",
    Refund = "Refund"
}
export declare const transactionTypeEncoder: (raw: TransactionType, lang: import(".").Language) => string;
export declare const transactionTypeDecoder: (text: string, lang: import(".").Language) => TransactionType;
