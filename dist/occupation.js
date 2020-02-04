"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Occupation;
(function (Occupation) {
    Occupation["Specialist"] = "Specialist";
    Occupation["Clerical"] = "Clerical";
    Occupation["Sales"] = "Sales";
    Occupation["Service"] = "Service";
    Occupation["Security"] = "Security";
    Occupation["Manufacturing"] = "Manufacturing";
    Occupation["Transport"] = "Transport";
    Occupation["Construction"] = "Construction";
    Occupation["Carrying"] = "Carrying";
    Occupation["Agriculture"] = "Agriculture";
    Occupation["Administrative"] = "Administrative";
    Occupation["Other"] = "Other";
    Occupation["None"] = "None";
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