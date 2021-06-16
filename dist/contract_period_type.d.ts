export declare enum ContractPeriodType {
    DateType = "DateType",
    PeriodType = "PeriodType"
}
export declare const contractPeriodTypeEncoder: (raw: ContractPeriodType, lang: import(".").Language) => string;
export declare const contractPeriodTypeDecoder: (text: string, lang: import(".").Language) => ContractPeriodType;
