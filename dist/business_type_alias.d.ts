export declare enum BusinessTypeAlias {
    ServiceApartment = "service-apartment",
    Hotel = "hotel",
    GuestHouse = "guest-house",
    ShareHouse = "share-house"
}
export declare const businessTypeAliasEncoder: (raw: BusinessTypeAlias, lang: import(".").Language) => string;
export declare const businessTypeAliasDecoder: (text: string, lang: import(".").Language) => BusinessTypeAlias;
