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
})(BuildingStructure = exports.BuildingStructure || (exports.BuildingStructure = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[BuildingStructure.Wood] = '木造',
        _a[BuildingStructure.Stell] = '鉄骨造',
        _a[BuildingStructure.Rc] = '鉄筋コンクリート造',
        _a[BuildingStructure.Src] = '鉄筋鉄骨コンクリート造',
        _a),
    en: (_b = {},
        _b[BuildingStructure.Wood] = 'Wooden',
        _b[BuildingStructure.Stell] = 'Steel Frame Construction',
        _b[BuildingStructure.Rc] = 'Reinforced Concrete Construction',
        _b[BuildingStructure.Src] = 'Steel-Framed Concrete Construction',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingStructureEncoder = generators_1.generateEncoder(translations);
exports.buildingStructureDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_structure.js.map