export declare enum CancelAccountUnavailableReason {
    ReservationExists = "ReservationExists",
    PaymentNotComplete = "PaymentNotComplete"
}
export declare const cancelAccountUnavailableReasonEncoder: (raw: CancelAccountUnavailableReason, lang: import("./index").Language) => string;
export declare const cancelAccountUnavailableReasonDecoder: (text: string, lang: import("./index").Language) => CancelAccountUnavailableReason;
