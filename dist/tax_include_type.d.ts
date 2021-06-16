export declare enum TaxIncludeType {
    TaxIncluded = "Tax Included",
    TaxFree = "Tax Free"
}
export declare const taxIncludeTypeEncoder: (raw: TaxIncludeType, lang: import(".").Language) => string;
export declare const taxIncludeTypeDecoder: (text: string, lang: import(".").Language) => TaxIncludeType;
