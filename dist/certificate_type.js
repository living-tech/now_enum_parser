"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CertificateType;
(function (CertificateType) {
    CertificateType["Minpaku"] = "Minpaku";
    CertificateType["Hotel"] = "Hotel";
    CertificateType["NationalStrategicSpecialZone"] = "NationalStrategicSpecialZone";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateTypeEncoder = generators_1.generateEncoder(translations);
exports.certificateTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_type.js.map