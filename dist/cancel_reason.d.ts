export declare enum CanselReason {
    InventoryShortage = "InventoryShortage",
    BusinessDifficulties = "BusinessDifficulties",
    ConditionMismatch = "ConditionMismatch",
    PaymentNotPossible = "PaymentNotPossible",
    Other = "Other"
}
export declare const canselReasonEncoder: (raw: CanselReason, lang: import(".").Language) => string;
export declare const canselReasonDecoder: (text: string, lang: import(".").Language) => CanselReason;
