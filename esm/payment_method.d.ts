export declare enum PaymentMethod {
    CreditCard = "CreditCard",
    AccountTransfer = "AccountTransfer"
}
export declare const paymentMethodEncoder: (raw: PaymentMethod, lang: import("./index").Language) => string;
export declare const paymentMethodDecoder: (text: string, lang: import("./index").Language) => PaymentMethod;
