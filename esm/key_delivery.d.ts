export declare enum KeyDelivery {
    Direct = "Direct",
    Noncontact = "Noncontact",
    SmartLock = "SmartLock",
    Other = "Other"
}
export declare const keyDeliveryEncoder: (raw: KeyDelivery, lang: import("./index").Language) => string;
export declare const keyDeliveryDecoder: (text: string, lang: import("./index").Language) => KeyDelivery;
