export declare enum CardBrand {
    AmericanExpress = "AmericanExpress",
    DinersClub = "DinersClub",
    Discover = "Discover",
    JCB = "JCB",
    MasterCard = "MasterCard",
    UnionPay = "UnionPay",
    Visa = "Visa",
    Unknown = "Unknown"
}
export declare const cardBrandEncoder: (raw: CardBrand, lang: import("./index").Language) => string;
export declare const cardBrandDecoder: (text: string, lang: import("./index").Language) => CardBrand;
