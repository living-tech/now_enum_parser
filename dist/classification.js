"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Classification;
(function (Classification) {
    Classification["User"] = "User";
    Classification["Owner"] = "Owner";
    Classification["Admin"] = "Admin";
})(Classification = exports.Classification || (exports.Classification = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.classificationEncoder = generators_1.generateEncoder(translations);
exports.classificationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=classification.js.map