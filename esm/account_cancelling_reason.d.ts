export declare enum AccountCancellingReason {
    DidntLikeRooms = "DidntLikeRooms",
    DifficultToUse = "DifficultToUse",
    BadApplicationUI = "BadApplicationUI",
    Others = "Others"
}
export declare const accountCancelReasonEncoder: (raw: AccountCancellingReason, lang: import("./index").Language) => string;
export declare const accountCancelReasonDecoder: (text: string, lang: import("./index").Language) => AccountCancellingReason;
