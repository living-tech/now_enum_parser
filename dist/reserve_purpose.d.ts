export declare enum ReservePurpose {
    LivingAloneTrialOrCohabitation = "LivingAloneTrialOrCohabitation",
    AddressHopping = "AddressHopping",
    BusinessTrip = "BusinessTrip",
    RemodelingOrBeforeMovingBase = "RemodelingOrBeforeMovingBase",
    WorkationRemoteWork = "WorkationRemoteWork",
    Normal = "Normal",
    CollegeExam = "CollegeExam",
    LongTrip = "LongTrip",
    ForeignerStay = "ForeignerStay",
    CitizenTemporaryReturn = "CitizenTemporaryReturn",
    Other = "Other",
    LivingAloneTrial = "LivingAloneTrial",
    LivingAlone = "LivingAlone",
    Cohabitation = "Cohabitation",
    MovingToRoomSuitableForRemoteWork = "MovingToRoomSuitableForRemoteWork",
    MovingToNearWorkplace = "MovingToNearWorkplace",
    MovingToReduceRent = "MovingToReduceRent",
    MovingToNewPlace = "MovingToNewPlace",
    BeforeTransferBase = "BeforeTransferBase",
    VoluntaryQuarantineBase = "VoluntaryQuarantineBase",
    RoomShare = "RoomShare",
    CohabitationTrial = "CohabitationTrial",
    WorkBase = "WorkBase",
    RemoteWorkOrProductionBase = "RemoteWorkOrProductionBase",
    MultipleResidence = "MultipleResidence",
    RentReduction = "RentReduction",
    RemoteWorkBase = "RemoteWorkBase",
    Workation = "Workation",
    Temporary = "Temporary",
    EasyExamination = "EasyExamination",
    Interaction = "Interaction",
    Separation = "Separation"
}
export declare const reservePurposeEncoder: (raw: ReservePurpose, lang: import(".").Language) => string;
export declare const reservePurposeDecoder: (text: string, lang: import(".").Language) => ReservePurpose;
