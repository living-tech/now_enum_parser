export declare enum ChargeType {
    YET = 0
}
export declare const chargeTypeEncoder: (raw: ChargeType, lang: string) => string;
export declare const chargeTypeDecoder: (text: string, lang: string) => ChargeType;
