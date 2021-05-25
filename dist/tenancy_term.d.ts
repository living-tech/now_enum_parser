export declare enum TenancyTerm {
    LessThanOneMonth = "LessThanOneMonth",
    OneToThreeMonths = "OneToThreeMonths",
    ThreeToSevenMonths = "ThreeToSevenMonths",
    SevenMonthsToOneYear = "SevenMonthsToOneYear",
    MoreThanOneYear = "MoreThanOneYear"
}
export declare const tenancyTermEncoder: (raw: TenancyTerm, lang: import(".").Language) => string;
export declare const tenancyTermDecoder: (text: string, lang: import(".").Language) => TenancyTerm;
