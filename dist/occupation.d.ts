export declare enum Occupation {
    Specialist = "Specialist",
    Clerical = "Clerical",
    Sales = "Sales",
    Service = "Service",
    Security = "Security",
    Manufacturing = "Manufacturing",
    Transport = "Transport",
    Construction = "Construction",
    Carrying = "Carrying",
    Agriculture = "Agriculture",
    Administrative = "Administrative",
    Other = "Other",
    None = "None"
}
export declare const occupationEncoder: (raw: Occupation, lang: import(".").Language) => string;
export declare const occupationDecoder: (text: string, lang: import(".").Language) => Occupation;
