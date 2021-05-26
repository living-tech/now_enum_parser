export declare enum CancelAccountUnavailableReason {
    ReserationExists = "ReservationExists",
    PaymentNotComplete = "PaymentNotComplete"
}
export declare const cancelReasonEncoder: (raw: CancelAccountUnavailableReason, lang: import(".").Language) => string;
export declare const cancelReasonDecoder: (text: string, lang: import(".").Language) => CancelAccountUnavailableReason;
