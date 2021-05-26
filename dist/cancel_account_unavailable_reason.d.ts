export declare enum CancelAccountUnavailableReason {
    ReservationExists = "ReservationExists",
    PaymentNotComplete = "PaymentNotComplete"
}
export declare const cancelAccountUnavailableReasonEncoder: (raw: CancelAccountUnavailableReason, lang: import(".").Language) => string;
export declare const cancelAccountUnavailableReasonDecoder: (text: string, lang: import(".").Language) => CancelAccountUnavailableReason;
