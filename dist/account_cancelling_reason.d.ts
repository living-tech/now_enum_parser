export declare enum AccountCancellingReason {
    DIDNT_LIKE_ROOMS = "DidntLikeRooms",
    DIFFICULT_TO_USE = "DifficultToUse",
    BAD_APPLICATION_UI = "BadApplicationUI",
    Others = "Others"
}
export declare const accountCancelReasonEncoder: (raw: AccountCancellingReason, lang: import(".").Language) => string;
export declare const accountCancelReasonDecoder: (text: string, lang: import(".").Language) => AccountCancellingReason;
