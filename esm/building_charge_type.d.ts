export declare enum BuildingChargeType {
    Hotel = "Hotel",
    ShareHouse = "ShareHouse",
    Minpaku = "Minpaku",
    RentalProperty = "RentalProperty"
}
export declare const buildingChargeTypeEncoder: (raw: BuildingChargeType, lang: import("./index").Language) => string;
export declare const buildingChargeTypeDecoder: (text: string, lang: import("./index").Language) => BuildingChargeType;
