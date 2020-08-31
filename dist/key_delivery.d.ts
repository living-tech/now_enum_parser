export declare enum KeyDelivery {
    Direct = "Direct",
    Self = "Self",
    Unsupported = "Unsupported"
}
export declare const keyDeliveryEncoder: (raw: KeyDelivery, lang: import(".").Language) => string;
export declare const keyDeliveryDecoder: (text: string, lang: import(".").Language) => KeyDelivery;
