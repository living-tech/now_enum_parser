export declare enum PaymentTerm {
    LastMonthEnd = "LastMonthEnd",
    NextMonthEnd = "NextMonthEnd",
    AfterNextMonthEnd = "AfterNextMonthEnd"
}
export declare const paymentTermEncoder: (raw: PaymentTerm, lang: import("./index").Language) => string;
export declare const paymentTermDecoder: (text: string, lang: import("./index").Language) => PaymentTerm;
