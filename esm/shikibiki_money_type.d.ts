export declare enum ShikibikiMoneyType {
    WhenMovingOut = "WhenMovingOut",
    EveryYear = "EveryYear",
    WhenRenewing = "WhenRenewing"
}
export declare const shikibikiMoneyTypeEncoder: (raw: ShikibikiMoneyType, lang: import("./index").Language) => string;
export declare const shikibikiMoneyTypeDecoder: (text: string, lang: import("./index").Language) => ShikibikiMoneyType;
