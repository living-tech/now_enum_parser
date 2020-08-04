export declare enum JustBeforeDiscountThresholdDay {
    TwoWeeks = "TwoWeeks",
    OneMonth = "OneMonth"
}
export declare const justBeforeDiscountThresholdDayEncoder: (raw: JustBeforeDiscountThresholdDay, lang: import(".").Language) => string;
export declare const justBeforeDiscountThresholdDayDecoder: (text: string, lang: import(".").Language) => JustBeforeDiscountThresholdDay;
