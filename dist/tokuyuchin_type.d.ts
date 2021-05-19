export declare enum TokuyuchinType {
    InclinedType = "InclinedType",
    FlatType = "FlatType"
}
export declare const tokuyuchinTypeEncoder: (raw: TokuyuchinType, lang: import(".").Language) => string;
export declare const tokuyuchinTypeDecoder: (text: string, lang: import(".").Language) => TokuyuchinType;
