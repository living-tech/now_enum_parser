"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var BuildingStructure;
(function (BuildingStructure) {
    BuildingStructure[BuildingStructure["WOOD"] = 0] = "WOOD";
    BuildingStructure[BuildingStructure["STEEL"] = 1] = "STEEL";
    BuildingStructure[BuildingStructure["RC"] = 2] = "RC";
    BuildingStructure[BuildingStructure["SRC"] = 3] = "SRC";
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