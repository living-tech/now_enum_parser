export declare enum PayoutStatus {
    PayoutSchedule = "PayoutSchedule",
    PayoutDone = "PayoutDone"
}
export declare const payoutStatusEncoder: (raw: PayoutStatus, lang: import("./index").Language) => string;
export declare const payoutStatusDecoder: (text: string, lang: import("./index").Language) => PayoutStatus;
