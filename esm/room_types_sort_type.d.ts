export declare enum RoomTypesSortType {
    Default = "Default",
    ManageSourceAsc = "ManageSourceAsc",
    ManageSourceDesc = "ManageSourceDesc"
}
export declare const roomTypesSortTypeEncoder: (raw: RoomTypesSortType, lang: import("./index").Language) => string;
export declare const roomTypesSortTypeDecoder: (text: string, lang: import("./index").Language) => RoomTypesSortType;
