export declare enum TaxIncludeType {
    TaxIncluded = "TaxIncluded",
    TaxFree = "TaxFree"
}
export declare const taxIncludeTypeEncoder: (raw: TaxIncludeType, lang: import("./index").Language) => string;
export declare const taxIncludeTypeDecoder: (text: string, lang: import("./index").Language) => TaxIncludeType;
