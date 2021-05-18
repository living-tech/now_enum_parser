export declare enum ManagerType {
    Resident = "Resident",
    DayShift = "Day Shift",
    Patrol = "Patrol",
    None = "None",
    NonResident = "Non-resident"
}
export declare const managerTypeEncoder: (raw: ManagerType, lang: import(".").Language) => string;
export declare const managerTypeDecoder: (text: string, lang: import(".").Language) => ManagerType;
