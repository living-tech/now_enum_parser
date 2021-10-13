export declare enum TokuyuchinType {
    InclinedType = "InclinedType",
    FlatType = "FlatType"
}
export declare const tokuyuchinTypeEncoder: (raw: TokuyuchinType, lang: import("./index").Language) => string;
export declare const tokuyuchinTypeDecoder: (text: string, lang: import("./index").Language) => TokuyuchinType;
