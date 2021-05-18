export declare enum BuildingStructure {
    Wood = "Wood",
    Stell = "Stell",
    Rc = "Rc",
    Src = "Src",
    Block = "Block",
    PC = "PC",
    HPC = "HPC",
    Other = "Other",
    LightStell = "LightStell",
    Alc = "Alc",
    RBlock = "RBlock",
    CFT = "CFT"
}
export declare const buildingStructureEncoder: (raw: BuildingStructure, lang: import(".").Language) => string;
export declare const buildingStructureDecoder: (text: string, lang: import(".").Language) => BuildingStructure;
