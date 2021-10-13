export declare enum TenancyTerm {
    LessThanOneMonth = "LessThanOneMonth",
    OneToThreeMonths = "OneToThreeMonths",
    ThreeToSevenMonths = "ThreeToSevenMonths",
    SevenMonthsToOneYear = "SevenMonthsToOneYear",
    MoreThanOneYear = "MoreThanOneYear",
    MoreThanTwoYear = "MoreThanTwoYear"
}
export declare const tenancyTermEncoder: (raw: TenancyTerm, lang: import("./index").Language) => string;
export declare const tenancyTermDecoder: (text: string, lang: import("./index").Language) => TenancyTerm;
