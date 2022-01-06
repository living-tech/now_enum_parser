export declare enum RoomClassification {
    Private = "Private",
    Share = "Share"
}
export declare const roomClassificationEncoder: (raw: RoomClassification, lang: import("./index").Language) => string;
export declare const roomClassificationDecoder: (text: string, lang: import("./index").Language) => RoomClassification;
