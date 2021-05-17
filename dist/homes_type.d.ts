export declare enum HomesType {
    Mansion = "Mansion",
    Apartment = "Apartment",
    House = "House",
    TerracedHouse = "TerracedHouse",
    Townhouse = "TownHouse",
    ShareHouse = "ShareHouse",
    Dormitory = "Dormitory"
}
export declare const homesTypeEncoder: (raw: HomesType, lang: import(".").Language) => string;
export declare const homesTypeDecoder: (text: string, lang: import(".").Language) => HomesType;
