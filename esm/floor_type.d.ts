export declare enum FloorType {
    R = "R",
    K = "K",
    SK = "SK",
    DK = "DK",
    SDK = "SDK",
    LK = "LK",
    SLK = "SLK",
    LDK = "LDK",
    SLDK = "SLDK"
}
export declare const floorTypeEncoder: (raw: FloorType, lang: import("./index").Language) => string;
export declare const floorTypeDecoder: (text: string, lang: import("./index").Language) => FloorType;
