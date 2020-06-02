export declare enum BuildingConstructedRange {
    OneYear = "OneYear",
    ThreeYear = "ThreeYear",
    FiveYear = "FiveYear",
    SevenYear = "SevenYear",
    TenYear = "TenYear",
    FifteenYear = "FifteenYear",
    TwentyYear = "TwentyYear",
    TwentyFiveYear = "TwentyFiveYear",
    ThirtyYear = "ThirtyYear"
}
export declare const BuildingConstructedRangeEncoder: (raw: BuildingConstructedRange, lang: import(".").Language) => string;
export declare const BuildingConstructedRangeDecoder: (text: string, lang: import(".").Language) => BuildingConstructedRange;
