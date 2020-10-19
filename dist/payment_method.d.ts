export declare enum PaymentMethod {
    CreditCard = "CreditCard",
    AccountTransfer = "AccountTransfer"
}
export declare const paymentMethodEncoder: (raw: PaymentMethod, lang: import(".").Language) => string;
export declare const paymentMethodDecoder: (text: string, lang: import(".").Language) => PaymentMethod;
