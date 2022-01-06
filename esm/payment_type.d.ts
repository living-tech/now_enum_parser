export declare enum PaymentType {
    First = "First",
    Monthly = "Monthly"
}
export declare const paymentTypeEncoder: (raw: PaymentType, lang: import("./index").Language) => string;
export declare const paymentTypeDecoder: (text: string, lang: import("./index").Language) => PaymentType;
