"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportationDecoder = exports.transportationEncoder = exports.Transportation = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Transportation;
(function (Transportation) {
    Transportation["Walk"] = "Walk";
    Transportation["Car"] = "Car";
    Transportation["Bus"] = "Bus";
})(Transportation = exports.Transportation || (exports.Transportation = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Transportation.Walk] = '徒歩',
        _a[Transportation.Car] = '車',
        _a[Transportation.Bus] = 'バス',
        _a),
    en: (_b = {},
        _b[Transportation.Walk] = 'Walk',
        _b[Transportation.Car] = 'Car',
        _b[Transportation.Bus] = 'Bus',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.transportationEncoder = generators_1.generateEncoder(translations);
exports.transportationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=transportation.js.map