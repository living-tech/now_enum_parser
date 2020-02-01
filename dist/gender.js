"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Gender.MALE] = "男性",
        _a[Gender.FEMALE] = "女性",
        _a[Gender.OTHER] = "その他",
        _a),
    en: (_b = {},
        _b[Gender.MALE] = "male",
        _b[Gender.FEMALE] = "female",
        _b[Gender.OTHER] = "other",
        _b)
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.genderEncoder = generators_1.generateEncoder(translations);
exports.genderDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=gender.js.map