export declare enum FloorPlan {
    JapaneseStyle = "JapaneseStyle",
    WesternStyle = "WesternStyle",
    Dk = "DK",
    Ldk = "LDK",
    L = "L",
    D = "D",
    K = "K",
    Other = "Other",
    Lk = "LK",
    Ld = "LD",
    S = "S"
}
export declare const floorPlanEncoder: (raw: FloorPlan, lang: import(".").Language) => string;
export declare const floorPlanDecoder: (text: string, lang: import(".").Language) => FloorPlan;
