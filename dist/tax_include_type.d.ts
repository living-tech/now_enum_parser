export declare enum TaxIncludeType {
    TaxIncluded = "TaxIncluded",
    TaxFree = "TaxFree"
}
export declare const taxIncludeTypeEncoder: (raw: TaxIncludeType, lang: import(".").Language) => string;
export declare const taxIncludeTypeDecoder: (text: string, lang: import(".").Language) => TaxIncludeType;
