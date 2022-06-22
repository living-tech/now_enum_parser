export declare enum CommuteDistanceType {
    Way = "Way",
    Straight = "Straight"
}
export declare const commuteDistanceTypeEncoder: (raw: CommuteDistanceType, lang: import(".").Language) => string;
export declare const commuteDistanceTypeDecoder: (text: string, lang: import(".").Language) => CommuteDistanceType;
