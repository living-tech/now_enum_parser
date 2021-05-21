export declare enum ReformOutsideFacility {
    Roof = "Roof",
    ExteriorWall = "ExteriorWall"
}
export declare const reformOutsideFacilityEncoder: (raw: ReformOutsideFacility, lang: import(".").Language) => string;
export declare const reformOutsideFacilityDecoder: (text: string, lang: import(".").Language) => ReformOutsideFacility;
