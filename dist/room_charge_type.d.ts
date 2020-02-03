export declare enum RoomChargeType {
    BY_ROOM = 0,
    BY_PERSON = 1,
    NONE = 2
}
export declare const roomChargeTypeEncoder: (raw: RoomChargeType, lang: import(".").Language) => string;
export declare const roomChargeTypeDecoder: (text: string, lang: import(".").Language) => RoomChargeType;
