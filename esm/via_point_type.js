var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ViaPointType;
(function (ViaPointType) {
    ViaPointType["Station"] = "Station";
    ViaPointType["BusStop"] = "BusStop";
})(ViaPointType || (ViaPointType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ViaPointType.Station] = '駅',
        _a[ViaPointType.BusStop] = 'バス停',
        _a),
    en: (_b = {},
        _b[ViaPointType.Station] = 'Station',
        _b[ViaPointType.BusStop] = 'Bus stop',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var viaPointTypeEncoder = generateEncoder(translations);
export var viaPointTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=via_point_type.js.map