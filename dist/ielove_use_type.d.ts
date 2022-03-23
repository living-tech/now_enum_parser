export declare enum IeloveUseType {
    ResidentialUseWithGuarantee = "ResidentialUseWithGuarantee",
    Other = "Other",
    None = "None"
}
export declare const ieloveUseTypeEncoder: (raw: IeloveUseType, lang: import(".").Language) => string;
export declare const ieloveUseTypeDecoder: (text: string, lang: import(".").Language) => IeloveUseType;
