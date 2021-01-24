export declare enum EmploymentStatus {
    SoloProprietorship = "SoloProprietorship",
    ListedCompanyOfficeWorker = "ListedCompanyOfficeWorker",
    UnlistedCompanyOfficeWorker = "UnlistedCompanyOfficeWorker",
    CompanyOwner = "CompanyOwner",
    PartTimeJob = "PartTimeJob",
    Arbeit = "Arbeit",
    Student = "Student",
    Unemployed = "Unemployed",
    Other = "Other",
    GovernmentOfficial = "GovernmentOfficial",
    CompanyExecutive = "CompanyExecutive",
    StaffMemberOfAssociation = "StaffMemberOfAssociation",
    WelfarePaymentRecipient = "WelfarePaymentRecipient",
    Pensioner = "Pensioner",
    DispatchedEmployee = "DispatchedEmployee"
}
export declare const employmentStatusEncoder: (raw: EmploymentStatus, lang: import(".").Language) => string;
export declare const employmentStatusDecoder: (text: string, lang: import(".").Language) => EmploymentStatus;
