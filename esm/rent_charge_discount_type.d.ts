export declare enum RentChargeDiscountType {
    Coupon = "Amount",
    JustBefore = "Rate",
    None = "None"
}
export declare const rentChargeDiscountTypeEncoder: (raw: RentChargeDiscountType, lang: import("./index").Language) => string;
export declare const rentChargeDiscountTypeDecoder: (text: string, lang: import("./index").Language) => RentChargeDiscountType;
