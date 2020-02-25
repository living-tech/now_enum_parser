export declare enum DiscountType {
    Amount = "Amount",
    Rate = "Rate"
}
export declare const discountTypeEncoder: (raw: DiscountType, lang: import(".").Language) => string;
export declare const discountTypeDecoder: (text: string, lang: import(".").Language) => DiscountType;
