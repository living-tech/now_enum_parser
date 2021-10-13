export declare enum FloorPlan {
    JapaneseStyle = "JapaneseStyle",
    WesternStyle = "WesternStyle",
    Dk = "Dk",
    Ldk = "Ldk",
    L = "L",
    D = "D",
    K = "K",
    Other = "Other",
    Lk = "Lk",
    Ld = "Ld",
    S = "S"
}
export declare const floorPlanEncoder: (raw: FloorPlan, lang: import("./index").Language) => string;
export declare const floorPlanDecoder: (text: string, lang: import("./index").Language) => FloorPlan;
