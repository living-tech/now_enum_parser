"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.genderDecoder = exports.genderEncoder = exports.Gender = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Gender.Male] = '男性',
        _a[Gender.Female] = '女性',
        _a[Gender.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[Gender.Male] = 'male',
        _b[Gender.Female] = 'female',
        _b[Gender.Other] = 'other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.genderEncoder = generators_1.generateEncoder(translations);
exports.genderDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=gender.js.map