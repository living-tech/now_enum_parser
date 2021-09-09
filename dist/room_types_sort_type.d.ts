export declare enum RoomTypesSortType {
    Default = "Default",
    ManageSourceAsc = "ManageSourceAsc",
    ManageSourceDesc = "ManageSourceDesc"
}
export declare const roomTypesSortTypeEncoder: (raw: RoomTypesSortType, lang: import(".").Language) => string;
export declare const roomTypesSortTypeDecoder: (text: string, lang: import(".").Language) => RoomTypesSortType;
