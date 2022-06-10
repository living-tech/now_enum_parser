"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.nationalityDecoder = exports.nationalityEncoder = exports.Nationality = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Nationality;
(function (Nationality) {
    Nationality["Japan"] = "Japan";
    Nationality["Other"] = "Other";
})(Nationality = exports.Nationality || (exports.Nationality = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Nationality.Japan] = '日本',
        _a[Nationality.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[Nationality.Japan] = 'Japan',
        _b[Nationality.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.nationalityEncoder = (0, generators_1.generateEncoder)(translations);
exports.nationalityDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=nationality.js.map