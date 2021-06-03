export declare enum BuildingStructure {
    Wood = "Wood",
    Stell = "Stell",
    Rc = "Rc",
    Src = "Src",
    Block = "Block",
    Pc = "Pc",
    Hpc = "Hpc",
    Other = "Other",
    LightStell = "LightStell",
    Alc = "Alc",
    RBlock = "RBlock",
    Cft = "Cft"
}
export declare const buildingStructureEncoder: (raw: BuildingStructure, lang: import(".").Language) => string;
export declare const buildingStructureDecoder: (text: string, lang: import(".").Language) => BuildingStructure;
