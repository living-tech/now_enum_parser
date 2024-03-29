export declare enum ReformInsideFacility {
    OverallInterior = "OverallInterior",
    WallsCeiling = "WallsCeiling",
    AllRoomsClothReCovered = "AllRoomsClothReCovered",
    Floor = "Floor",
    Joinery = "Joinery",
    Sash = "Sash"
}
export declare const reformInsideFacilityEncoder: (raw: ReformInsideFacility, lang: import(".").Language) => string;
export declare const reformInsideFacilityDecoder: (text: string, lang: import(".").Language) => ReformInsideFacility;
