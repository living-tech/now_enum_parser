export declare enum BuildingChargeType {
    HOTEL = 0,
    SHARE_HOUSE = 1,
    MINPAKU = 2,
    RENTAL_PROPERTY = 3
}
export declare const buildingChargeTypeEncoder: (raw: BuildingChargeType, lang: string) => string;
export declare const buildingChargeTypeDecoder: (text: string, lang: string) => BuildingChargeType;
