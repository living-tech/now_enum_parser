export declare enum CancelReason {
    InventoryShortage = "InventoryShortage",
    BusinessDifficulties = "BusinessDifficulties",
    ConditionMismatch = "ConditionMismatch",
    PaymentNotPossible = "PaymentNotPossible",
    Other = "Other"
}
export declare const cancelReasonEncoder: (raw: CancelReason, lang: import(".").Language) => string;
export declare const cancelReasonDecoder: (text: string, lang: import(".").Language) => CancelReason;
