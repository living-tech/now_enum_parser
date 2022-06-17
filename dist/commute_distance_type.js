"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.commuteDistanceTypeDecoder = exports.commuteDistanceTypeEncoder = exports.CommuteDistanceType = void 0;
var generators_1 = require("./lib/generators");
var CommuteDistanceType;
(function (CommuteDistanceType) {
    CommuteDistanceType["Way"] = "Way";
    CommuteDistanceType["Straight"] = "Straight";
})(CommuteDistanceType = exports.CommuteDistanceType || (exports.CommuteDistanceType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CommuteDistanceType.Way] = '道のり',
        _a[CommuteDistanceType.Straight] = '直線距離',
        _a),
    en: (_b = {},
        _b[CommuteDistanceType.Way] = 'Way',
        _b[CommuteDistanceType.Straight] = 'Straight',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.commuteDistanceTypeEncoder = generators_1.generateEncoder(translations);
exports.commuteDistanceTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=commute_distance_type.js.map