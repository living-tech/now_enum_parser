export declare enum MessageType {
    MoveIn = "MoveIn",
    MoveOut = "MoveOut"
}
export declare const messageTypeEncoder: (raw: MessageType, lang: import("./index").Language) => string;
export declare const messageTypeDecoder: (text: string, lang: import("./index").Language) => MessageType;
