export declare enum SellStatus {
    OnSale = "OnSale",
    SoldOut = "SoldOut",
    ContractSigned = "ContractSigned",
    Deleted = "Deleted"
}
export declare const sellStatusEncoder: (raw: SellStatus, lang: import("./index").Language) => string;
export declare const sellStatusDecoder: (text: string, lang: import("./index").Language) => SellStatus;
