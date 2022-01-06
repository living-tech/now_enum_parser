var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var BuildingChargeType;
(function (BuildingChargeType) {
    BuildingChargeType["Hotel"] = "Hotel";
    BuildingChargeType["ShareHouse"] = "ShareHouse";
    BuildingChargeType["Minpaku"] = "Minpaku";
    BuildingChargeType["RentalProperty"] = "RentalProperty";
})(BuildingChargeType || (BuildingChargeType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var buildingChargeTypeEncoder = generateEncoder(translations);
export var buildingChargeTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=building_charge_type.js.map