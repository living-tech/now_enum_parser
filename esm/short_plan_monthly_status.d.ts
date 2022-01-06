export declare enum ShortPlanMonthlyStatus {
    ShortPlanOnly = "ShortPlanOnly",
    MonthlyOnly = "MonthlyOnly",
    ShortPlanAndMonthly = "ShortPlanAndMonthly"
}
export declare const shortPlanMonthlyStatusEncoder: (raw: ShortPlanMonthlyStatus, lang: import("./index").Language) => string;
export declare const shortPlanMonthlyStatusDecoder: (text: string, lang: import("./index").Language) => ShortPlanMonthlyStatus;
