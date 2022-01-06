export declare enum RoomChargeType {
    ByRoom = "ByRoom",
    ByPerson = "ByPerson",
    None = "None"
}
export declare const roomChargeTypeEncoder: (raw: RoomChargeType, lang: import("./index").Language) => string;
export declare const roomChargeTypeDecoder: (text: string, lang: import("./index").Language) => RoomChargeType;
