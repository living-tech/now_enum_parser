"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.commuteTypeDecoder = exports.commuteTypeEncoder = exports.CommuteType = void 0;
var generators_1 = require("./lib/generators");
var CommuteType;
(function (CommuteType) {
    CommuteType["Railway"] = "Railway";
    CommuteType["Walk"] = "Walk";
    CommuteType["Car"] = "Car";
    CommuteType["Bicycle"] = "Bicycle";
})(CommuteType = exports.CommuteType || (exports.CommuteType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CommuteType.Railway] = '電車',
        _a[CommuteType.Walk] = '徒歩',
        _a[CommuteType.Car] = '車',
        _a[CommuteType.Bicycle] = '自転車',
        _a),
    en: (_b = {},
        _b[CommuteType.Railway] = 'Railway',
        _b[CommuteType.Walk] = 'Walk',
        _b[CommuteType.Car] = 'Car',
        _b[CommuteType.Bicycle] = 'Bicycle',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.commuteTypeEncoder = generators_1.generateEncoder(translations);
exports.commuteTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=commute_type.js.map