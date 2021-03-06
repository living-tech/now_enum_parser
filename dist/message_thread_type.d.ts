export declare enum MessageThreadType {
    Offer = "Offer",
    Preview = "Preview",
    Contact = "Contact",
    Reserve = "Reserve"
}
export declare const messageThreadTypeEncoder: (raw: MessageThreadType, lang: import(".").Language) => string;
export declare const messageThreadTypeDecoder: (text: string, lang: import(".").Language) => MessageThreadType;
