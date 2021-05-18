"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildingStructureDecoder = exports.buildingStructureEncoder = exports.BuildingStructure = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var BuildingStructure;
(function (BuildingStructure) {
    BuildingStructure["Wood"] = "Wood";
    BuildingStructure["Stell"] = "Stell";
    BuildingStructure["Rc"] = "Rc";
    BuildingStructure["Src"] = "Src";
    BuildingStructure["Block"] = "Block";
    BuildingStructure["PC"] = "PC";
    BuildingStructure["HPC"] = "HPC";
    BuildingStructure["Other"] = "Other";
    BuildingStructure["LightStell"] = "LightStell";
    BuildingStructure["Alc"] = "Alc";
    BuildingStructure["RBlock"] = "RBlock";
    BuildingStructure["CFT"] = "CFT";
})(BuildingStructure = exports.BuildingStructure || (exports.BuildingStructure = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[BuildingStructure.Wood] = '木造',
        _a[BuildingStructure.Stell] = '鉄骨造',
        _a[BuildingStructure.Rc] = '鉄筋コンクリート造',
        _a[BuildingStructure.Src] = '鉄筋鉄骨コンクリート造',
        _a[BuildingStructure.Block] = 'ブロック',
        _a[BuildingStructure.PC] = 'PC',
        _a[BuildingStructure.HPC] = 'HPC',
        _a[BuildingStructure.Other] = 'その他',
        _a[BuildingStructure.LightStell] = '軽量鉄骨',
        _a[BuildingStructure.Alc] = 'ALC',
        _a[BuildingStructure.RBlock] = '鉄筋ブロック',
        _a[BuildingStructure.CFT] = 'CFT(コンクリート充填鋼管)',
        _a),
    en: (_b = {},
        _b[BuildingStructure.Wood] = 'Wooden',
        _b[BuildingStructure.Stell] = 'Steel Frame Construction',
        _b[BuildingStructure.Rc] = 'Reinforced Concrete Construction',
        _b[BuildingStructure.Src] = 'Steel-Framed Concrete Construction',
        _b[BuildingStructure.Block] = 'Block',
        _b[BuildingStructure.PC] = 'PC',
        _b[BuildingStructure.HPC] = 'HPC',
        _b[BuildingStructure.Other] = 'Other',
        _b[BuildingStructure.LightStell] = 'Light Stell',
        _b[BuildingStructure.Alc] = 'ALC',
        _b[BuildingStructure.RBlock] = 'Reinforced Block',
        _b[BuildingStructure.CFT] = 'CFT',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingStructureEncoder = generators_1.generateEncoder(translations);
exports.buildingStructureDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_structure.js.map