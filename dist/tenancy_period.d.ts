export declare enum TenancyPeriod {
    LessThanOneMonth = "LessThanOneMonth",
    OneToThreeMonths = "OneToThreeMonths",
    ThreeToSevenMonths = "ThreeToSevenMonths",
    SevenMonthsToOneYear = "SevenMonthsToOneYear",
    MoreThanOneYear = "MoreThanOneYear"
}
export declare const tenancyPeriodEncoder: (raw: TenancyPeriod, lang: import(".").Language) => string;
export declare const tenancyPeriodDecoder: (text: string, lang: import(".").Language) => TenancyPeriod;
