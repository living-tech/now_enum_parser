"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Occupation;
(function (Occupation) {
    Occupation[Occupation["SPECIALIST"] = 0] = "SPECIALIST";
    Occupation[Occupation["CLERICAL"] = 1] = "CLERICAL";
    Occupation[Occupation["SALES"] = 2] = "SALES";
    Occupation[Occupation["SERVICE"] = 3] = "SERVICE";
    Occupation[Occupation["SECURITY"] = 4] = "SECURITY";
    Occupation[Occupation["MANUFACTURING"] = 5] = "MANUFACTURING";
    Occupation[Occupation["TRANSPORT"] = 6] = "TRANSPORT";
    Occupation[Occupation["CONSTRUCTION"] = 7] = "CONSTRUCTION";
    Occupation[Occupation["CARRYING"] = 8] = "CARRYING";
    Occupation[Occupation["AGRICULTURE"] = 9] = "AGRICULTURE";
    Occupation[Occupation["ADMINISTRATIVE"] = 10] = "ADMINISTRATIVE";
    Occupation[Occupation["OTHER"] = 11] = "OTHER";
    Occupation[Occupation["NONE"] = 12] = "NONE";
})(Occupation = exports.Occupation || (exports.Occupation = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.occupationEncoder = generators_1.generateEncoder(translations);
exports.occupationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=occupation.js.map