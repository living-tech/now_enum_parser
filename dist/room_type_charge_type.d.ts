export declare enum RoomTypeChargeType {
    BY_ROOM = 0,
    BY_PERSON = 1,
    NONE = 2
}
export declare const roomTypeChargeTypeEncoder: (raw: RoomTypeChargeType, lang: string) => string;
export declare const roomTypeChargeTypeDecoder: (text: string, lang: string) => RoomTypeChargeType;
