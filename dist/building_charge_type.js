"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var BuildingChargeType;
(function (BuildingChargeType) {
    BuildingChargeType[BuildingChargeType["HOTEL"] = 0] = "HOTEL";
    BuildingChargeType[BuildingChargeType["SHARE_HOUSE"] = 1] = "SHARE_HOUSE";
    BuildingChargeType[BuildingChargeType["MINPAKU"] = 2] = "MINPAKU";
    BuildingChargeType[BuildingChargeType["RENTAL_PROPERTY"] = 3] = "RENTAL_PROPERTY";
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