export declare enum HomesproKeyDeliveryType {
    OurCompany = "OurCompany",
    Deposit = "Deposit",
    Local = "Local",
    Presence = "Presence",
    Other = "Other"
}
export declare const homesproKeyDeliveryTypeEncoder: (raw: HomesproKeyDeliveryType, lang: import(".").Language) => string;
export declare const homesproKeyDeliveryTypeDecoder: (text: string, lang: import(".").Language) => HomesproKeyDeliveryType;
