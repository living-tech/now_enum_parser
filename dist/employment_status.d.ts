export declare enum EmploymentStatus {
    SoloProprietorship = "SoloProprietorship",
    ListedCompanyOfficeWorker = "ListedCompanyOfficeWorker",
    UnlistedCompanyOfficeWorker = "UnlistedCompanyOfficeWorker",
    CompanyOwner = "CompanyOwner",
    PartTimeJob = "PartTimeJob",
    Arbeit = "Arbeit",
    Student = "Student",
    Unemployed = "Unemployed",
    Other = "Other"
}
export declare const employmentStatusEncoder: (raw: EmploymentStatus, lang: import(".").Language) => string;
export declare const employmentStatusDecoder: (text: string, lang: import(".").Language) => EmploymentStatus;
