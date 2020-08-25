export declare enum ContractType {
    FixedTerm = "FixedTerm",
    Standard = "Standard",
    Hotel = "Hotel",
    Temporary = "Temporary"
}
export declare const contractTypeEncoder: (raw: ContractType, lang: import(".").Language) => string;
export declare const contractTypeDecoder: (text: string, lang: import(".").Language) => ContractType;
