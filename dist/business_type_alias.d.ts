export declare enum BusinessTypeAlias {
    ServiceApartment = "ServiceApartment",
    Hotel = "Hotel",
    GuestHouse = "GuestHouse",
    ShareHouse = "ShareHouse"
}
export declare const businessTypeAliasEncoder: (raw: BusinessTypeAlias, lang: import(".").Language) => string;
export declare const businessTypeAliasDecoder: (text: string, lang: import(".").Language) => BusinessTypeAlias;
