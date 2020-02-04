"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingStructureEncoder = generators_1.generateEncoder(translations);
exports.buildingStructureDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_structure.js.map