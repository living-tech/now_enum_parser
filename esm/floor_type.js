var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var FloorType;
(function (FloorType) {
    FloorType["R"] = "R";
    FloorType["K"] = "K";
    FloorType["SK"] = "SK";
    FloorType["DK"] = "DK";
    FloorType["SDK"] = "SDK";
    FloorType["LK"] = "LK";
    FloorType["SLK"] = "SLK";
    FloorType["LDK"] = "LDK";
    FloorType["SLDK"] = "SLDK";
})(FloorType || (FloorType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[FloorType.R] = 'R',
        _a[FloorType.K] = 'K',
        _a[FloorType.SK] = 'SK',
        _a[FloorType.DK] = 'DK',
        _a[FloorType.SDK] = 'SDK',
        _a[FloorType.LK] = 'LK',
        _a[FloorType.SLK] = 'SLK',
        _a[FloorType.LDK] = 'LDK',
        _a[FloorType.SLDK] = 'SLDK',
        _a),
    en: (_b = {},
        _b[FloorType.R] = 'R',
        _b[FloorType.K] = 'K',
        _b[FloorType.SK] = 'SK',
        _b[FloorType.DK] = 'DK',
        _b[FloorType.SDK] = 'SDK',
        _b[FloorType.LK] = 'LK',
        _b[FloorType.SLK] = 'SLK',
        _b[FloorType.LDK] = 'LDK',
        _b[FloorType.SLDK] = 'SLDK',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var floorTypeEncoder = generateEncoder(translations);
export var floorTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=floor_type.js.map