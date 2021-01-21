export declare enum ReservePurpose {
    LivingAloneTrial = "LivingAloneTrial",
    LivingAlone = "LivingAlone",
    Cohabitation = "Cohabitation",
    MovingToRoomSuitableForRemoteWork = "MovingToRoomSuitableForRemoteWork",
    MovingToNearWorkplace = "MovingToNearWorkplace",
    MovingToReduceRent = "MovingToReduceRent",
    AddressHopping = "AddressHopping",
    MovingToNewPlace = "MovingToNewPlace",
    BusinessTrip = "BusinessTrip",
    RemodelingOrBeforeMovingBase = "RemodelingOrBeforeMovingBase",
    BeforeTransferBase = "BeforeTransferBase",
    VoluntaryQuarantineBase = "VoluntaryQuarantineBase",
    RoomShare = "RoomShare",
    CohabitationTrial = "CohabitationTrial",
    WorkBase = "WorkBase",
    RemoteWorkOrProductionBase = "RemoteWorkOrProductionBase",
    Workation = "Workation",
    MultipleResidence = "MultipleResidence",
    Temporary = "Temporary",
    EasyExamination = "EasyExamination",
    Normal = "Normal",
    RentReduction = "RentReduction",
    RemoteWorkBase = "RemoteWorkBase",
    Interaction = "Interaction",
    Separation = "Separation",
    Other = "Other"
}
export declare const reservePurposeEncoder: (raw: ReservePurpose, lang: import(".").Language) => string;
export declare const reservePurposeDecoder: (text: string, lang: import(".").Language) => ReservePurpose;
