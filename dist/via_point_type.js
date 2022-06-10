"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.viaPointTypeDecoder = exports.viaPointTypeEncoder = exports.ViaPointType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ViaPointType;
(function (ViaPointType) {
    ViaPointType["Station"] = "Station";
    ViaPointType["BusStop"] = "BusStop";
})(ViaPointType = exports.ViaPointType || (exports.ViaPointType = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.viaPointTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.viaPointTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=via_point_type.js.map