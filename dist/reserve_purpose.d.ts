export declare enum ReservePurpose {
    RentReduction = "RentReduction",
    LivingAloneTrial = "LivingAloneTrial",
    Temporary = "Temporary",
    AddressHopping = "AddressHopping",
    EasyExamination = "EasyExamination",
    CohabitationTrial = "CohabitationTrial",
    RoomShare = "RoomShare",
    Normal = "Normal",
    BusinessTrip = "BusinessTrip",
    Workation = "Workation",
    RemoteWorkBase = "RemoteWorkBase",
    WorkBase = "WorkBase",
    Interaction = "Interaction",
    Separation = "Separation",
    Other = "Other"
}
export declare const reservePurposeEncoder: (raw: ReservePurpose, lang: import(".").Language) => string;
export declare const reservePurposeDecoder: (text: string, lang: import(".").Language) => ReservePurpose;
