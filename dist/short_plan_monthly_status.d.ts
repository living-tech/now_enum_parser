export declare enum ShortPlanMonthlyStatus {
    ShortPlanOnly = "ShortPlanOnly",
    MonthlyOnly = "MonthlyOnly",
    ShortPlanAndMonthly = "ShortPlanAndMonthly"
}
export declare const shortPlanMonthlyStatusEncoder: (raw: ShortPlanMonthlyStatus, lang: import(".").Language) => string;
export declare const shortPlanMonthlyStatusDecoder: (text: string, lang: import(".").Language) => ShortPlanMonthlyStatus;
