export declare enum RoomFloorPlan {
    OneRoom = "OneRoom",
    OneK = "OneK",
    OneDk = "OneDk",
    OneLdk = "OneLdk",
    TwoK = "TwoK",
    TwoDk = "TwoDk",
    TwoLdk = "TwoLdk",
    ThreeK = "ThreeK",
    ThreeDk = "ThreeDk",
    ThreeLdk = "ThreeLdk",
    FourK = "FourK",
    FourDk = "FourDk",
    MoreThanFourLdk = "MoreThanFourLdk"
}
export declare const roomFloorPlanEncoder: (raw: RoomFloorPlan, lang: import("./index").Language) => string;
export declare const roomFloorPlanDecoder: (text: string, lang: import("./index").Language) => RoomFloorPlan;
