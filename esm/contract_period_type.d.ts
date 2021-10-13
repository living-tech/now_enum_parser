export declare enum ContractPeriodType {
    DateType = "DateType",
    PeriodType = "PeriodType"
}
export declare const contractPeriodTypeEncoder: (raw: ContractPeriodType, lang: import("./index").Language) => string;
export declare const contractPeriodTypeDecoder: (text: string, lang: import("./index").Language) => ContractPeriodType;
