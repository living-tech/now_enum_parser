var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ReformInsideFacility;
(function (ReformInsideFacility) {
    ReformInsideFacility["OverallInterior"] = "OverallInterior";
    ReformInsideFacility["WallsCeiling"] = "WallsCeiling";
    ReformInsideFacility["AllRoomsClothReCovered"] = "AllRoomsClothReCovered";
    ReformInsideFacility["Floor"] = "Floor";
    ReformInsideFacility["Joinery"] = "Joinery";
    ReformInsideFacility["Sash"] = "Sash";
})(ReformInsideFacility || (ReformInsideFacility = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReformInsideFacility.OverallInterior] = '内装全面（床、壁、天井、建具すべて）',
        _a[ReformInsideFacility.WallsCeiling] = '壁、天井（クロス、塗装等）',
        _a[ReformInsideFacility.AllRoomsClothReCovered] = '全室クロス張替',
        _a[ReformInsideFacility.Floor] = '床（フローリング等）',
        _a[ReformInsideFacility.Joinery] = '建具（室内ドア等）',
        _a[ReformInsideFacility.Sash] = 'サッシ',
        _a),
    en: (_b = {},
        _b[ReformInsideFacility.OverallInterior] = 'Overall interior',
        _b[ReformInsideFacility.WallsCeiling] = 'Walls ceiling',
        _b[ReformInsideFacility.AllRoomsClothReCovered] = 'All rooms cloth re-covered',
        _b[ReformInsideFacility.Floor] = 'Floor',
        _b[ReformInsideFacility.Joinery] = 'Joinery',
        _b[ReformInsideFacility.Sash] = 'Sash',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var reformInsideFacilityEncoder = generateEncoder(translations);
export var reformInsideFacilityDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=reform_inside_facility.js.map