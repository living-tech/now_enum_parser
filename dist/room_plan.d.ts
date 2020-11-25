export declare enum TenancyTerm {
    LessThanOneMonth = "LessThanOneMonth",
    OneToThreeMonths = "OneToThreeMonths",
    ThreeToSevenMonths = "ThreeToSevenMonths",
    SevenMonthsToOneYear = "SevenMonthsToOneYear",
    MoreThanOneYear = "MoreThanOneYear"
}
export declare const roomPlanEncoder: (raw: TenancyTerm, lang: import(".").Language) => string;
export declare const roomPlanDecoder: (text: string, lang: import(".").Language) => TenancyTerm;
