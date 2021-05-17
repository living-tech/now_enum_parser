export declare enum SellStatus {
    OnSale = "OnSale",
    SoldOut = "SoldOut",
    ContractSigned = "ContractSigned",
    Deleted = "Deleted"
}
export declare const sellStatusEncoder: (raw: SellStatus, lang: import(".").Language) => string;
export declare const sellStatusDecoder: (text: string, lang: import(".").Language) => SellStatus;
