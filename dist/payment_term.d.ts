export declare enum PaymentTerm {
    LastMonthEnd = "LastMonthEnd",
    NextMonthEnd = "NextMonthEnd",
    AfterNextMonthEnd = "AfterNextMonthEnd"
}
export declare const paymentTermEncoder: (raw: PaymentTerm, lang: import(".").Language) => string;
export declare const paymentTermDecoder: (text: string, lang: import(".").Language) => PaymentTerm;
