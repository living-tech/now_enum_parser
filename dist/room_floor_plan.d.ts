export declare enum RoomFloorPlan {
    OneRoom = "OneRoom",
    OneK = "OneK",
    OneDK = "OneDK",
    OneLDK = "OneLDK",
    TwoK = "TwoK",
    TwoDK = "TwoDK",
    TwoLDK = "TwoLDK",
    ThreeK = "ThreeK",
    ThreeDK = "ThreeDK",
    ThreeLDK = "ThreeLDK",
    FourK = "FourK",
    FourDK = "FourDK",
    MoreThanFourLDK = "MoreThanFourLDK"
}
export declare const roomFloorPlanEncoder: (raw: RoomFloorPlan, lang: import(".").Language) => string;
export declare const roomFloorPlanDecoder: (text: string, lang: import(".").Language) => RoomFloorPlan;
