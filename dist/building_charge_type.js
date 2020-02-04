"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var BuildingChargeType;
(function (BuildingChargeType) {
    BuildingChargeType["Hotel"] = "Hotel";
    BuildingChargeType["ShareHouse"] = "ShareHouse";
    BuildingChargeType["Minpaku"] = "Minpaku";
    BuildingChargeType["RentalProperty"] = "RentalProperty";
})(BuildingChargeType = exports.BuildingChargeType || (exports.BuildingChargeType = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingChargeTypeEncoder = generators_1.generateEncoder(translations);
exports.buildingChargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_charge_type.js.map