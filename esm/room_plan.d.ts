export declare enum TenancyTerm {
    LessThanOneMonth = "LessThanOneMonth",
    OneToThreeMonths = "OneToThreeMonths",
    ThreeToSevenMonths = "ThreeToSevenMonths",
    SevenMonthsToOneYear = "SevenMonthsToOneYear",
    MoreThanOneYear = "MoreThanOneYear",
    MoreThanTwoYear = "MoreThanTwoYear"
}
export declare const roomPlanEncoder: (raw: TenancyTerm, lang: import("./index").Language) => string;
export declare const roomPlanDecoder: (text: string, lang: import("./index").Language) => TenancyTerm;
