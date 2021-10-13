export declare enum ReformWaterFacility {
    Kitchen = "Kitchen",
    Bathroom = "Bathroom",
    Toilet = "Toilet",
    Washroom = "Washroom",
    WaterHeater = "WaterHeater",
    WaterSupply = "WaterSupply"
}
export declare const reformWaterFacilityEncoder: (raw: ReformWaterFacility, lang: import("./index").Language) => string;
export declare const reformWaterFacilityDecoder: (text: string, lang: import("./index").Language) => ReformWaterFacility;
