export declare enum TransactionStatus {
    Unpaid = "Unpaid",
    CreditOK = "CreditOK",
    CreditNG = "CreditNG",
    Paid = "Paid"
}
export declare const transactionStatusEncoder: (raw: TransactionStatus, lang: import(".").Language) => string;
export declare const transactionStatusDecoder: (text: string, lang: import(".").Language) => TransactionStatus;
