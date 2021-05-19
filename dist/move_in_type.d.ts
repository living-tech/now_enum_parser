export declare enum MoveInType {
    Immediate = "Immediate",
    Consultation = "Consultation",
    SpecifyDueDate = "SpecifyDueDate"
}
export declare const moveInTypeEncoder: (raw: MoveInType, lang: import(".").Language) => string;
export declare const moveInTypeDecoder: (text: string, lang: import(".").Language) => MoveInType;
