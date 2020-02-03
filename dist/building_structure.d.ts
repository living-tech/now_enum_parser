export declare enum BuildingStructure {
    WOOD = 0,
    STEEL = 1,
    RC = 2,
    SRC = 3
}
export declare const buildingStructureEncoder: (raw: BuildingStructure, lang: import(".").Language) => string;
export declare const buildingStructureDecoder: (text: string, lang: import(".").Language) => BuildingStructure;
