"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveInM3Decoder = exports.moveInM3Encoder = exports.MoveInM3 = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var MoveInM3;
(function (MoveInM3) {
    MoveInM3["Early"] = "Early";
    MoveInM3["Mid"] = "Mid";
    MoveInM3["Late"] = "Late";
})(MoveInM3 = exports.MoveInM3 || (exports.MoveInM3 = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MoveInM3.Early] = '上旬',
        _a[MoveInM3.Mid] = '中旬',
        _a[MoveInM3.Late] = '下旬',
        _a),
    en: (_b = {},
        _b[MoveInM3.Early] = 'Early',
        _b[MoveInM3.Mid] = 'Mid',
        _b[MoveInM3.Late] = 'Late',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.moveInM3Encoder = generators_1.generateEncoder(translations);
exports.moveInM3Decoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=move_in_m3.js.map