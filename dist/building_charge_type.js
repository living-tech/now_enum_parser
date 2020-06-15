"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildingChargeTypeDecoder = exports.buildingChargeTypeEncoder = exports.BuildingChargeType = void 0;
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
    ja: (_a = {},
        _a[BuildingChargeType.Hotel] = '旅館業',
        _a[BuildingChargeType.ShareHouse] = 'シェアハウス',
        _a[BuildingChargeType.Minpaku] = '住宅宿泊施設',
        _a[BuildingChargeType.RentalProperty] = '賃貸',
        _a),
    en: (_b = {},
        _b[BuildingChargeType.Hotel] = 'Hotel',
        _b[BuildingChargeType.ShareHouse] = 'Share House',
        _b[BuildingChargeType.Minpaku] = 'Guest House',
        _b[BuildingChargeType.RentalProperty] = 'Monthly Rent',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingChargeTypeEncoder = generators_1.generateEncoder(translations);
exports.buildingChargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_charge_type.js.map