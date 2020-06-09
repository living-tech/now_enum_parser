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
export declare const buildingConstructedRangeEncoder: (raw: BuildingConstructedRange, lang: import(".").Language) => string;
export declare const buildingConstructedRangeDecoder: (text: string, lang: import(".").Language) => BuildingConstructedRange;
