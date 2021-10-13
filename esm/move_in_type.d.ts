export declare enum MoveInType {
    Immediate = "Immediate",
    Consultation = "Consultation",
    SpecifyDueDate = "SpecifyDueDate"
}
export declare const moveInTypeEncoder: (raw: MoveInType, lang: import("./index").Language) => string;
export declare const moveInTypeDecoder: (text: string, lang: import("./index").Language) => MoveInType;
