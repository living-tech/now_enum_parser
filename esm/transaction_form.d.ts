export declare enum TransactionForm {
    SellerLender = "SellerLender",
    Deputy = "Deputy",
    DedicatedExclusiveMedia = "DedicatedExclusiveMedia",
    DedicatedMedia = "DedicatedMedia",
    GeneralMedia = "GeneralMedia",
    Media = "Media"
}
export declare const transactionFormEncoder: (raw: TransactionForm, lang: import("./index").Language) => string;
export declare const transactionFormDecoder: (text: string, lang: import("./index").Language) => TransactionForm;
