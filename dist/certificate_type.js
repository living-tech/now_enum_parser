"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CertificateType;
(function (CertificateType) {
    CertificateType[CertificateType["MINPAKU"] = 0] = "MINPAKU";
    CertificateType[CertificateType["HOTEL"] = 1] = "HOTEL";
    CertificateType[CertificateType["NATIONAL_STRATEGIC_SPECIAL_ZONE"] = 2] = "NATIONAL_STRATEGIC_SPECIAL_ZONE";
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