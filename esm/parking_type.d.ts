export declare enum ParkingType {
    Available = "Available",
    Unavailable = "Unavailable",
    Nearby = "Nearby",
    None = "None"
}
export declare const parkingTypeEncoder: (raw: ParkingType, lang: import("./index").Language) => string;
export declare const parkingTypeDecoder: (text: string, lang: import("./index").Language) => ParkingType;
