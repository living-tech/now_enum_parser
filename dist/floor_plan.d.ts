export declare enum FloorPlan {
    JapaneseStyle = "JapaneseStyle",
    WesternStyle = "WesternStyle",
    DK = "DK",
    LDK = "LDK",
    L = "L",
    D = "D",
    K = "K",
    Other = "Other",
    LK = "LK",
    LD = "LD",
    S = "S"
}
export declare const floorPlanEncoder: (raw: FloorPlan, lang: import(".").Language) => string;
export declare const floorPlanDecoder: (text: string, lang: import(".").Language) => FloorPlan;
