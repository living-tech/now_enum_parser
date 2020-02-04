export declare enum BuildingStructure {
    Wood = "Wood",
    Stell = "Stell",
    Rc = "Rc",
    Src = "Src"
}
export declare const buildingStructureEncoder: (raw: BuildingStructure, lang: import(".").Language) => string;
export declare const buildingStructureDecoder: (text: string, lang: import(".").Language) => BuildingStructure;
