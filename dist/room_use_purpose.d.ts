export declare enum RoomUsePurpose {
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
export declare const roomUsePurposeEncoder: (raw: RoomUsePurpose, lang: import(".").Language) => string;
export declare const roomUsePurposeDecoder: (text: string, lang: import(".").Language) => RoomUsePurpose;
