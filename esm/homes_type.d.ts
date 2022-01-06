export declare enum HomesType {
    Mansion = "Mansion",
    Apartment = "Apartment",
    House = "House",
    TerracedHouse = "TerracedHouse",
    TownHouse = "TownHouse",
    ShareHouse = "ShareHouse",
    Dormitory = "Dormitory"
}
export declare const homesTypeEncoder: (raw: HomesType, lang: import("./index").Language) => string;
export declare const homesTypeDecoder: (text: string, lang: import("./index").Language) => HomesType;
