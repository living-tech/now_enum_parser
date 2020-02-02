"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CertificateImageType;
(function (CertificateImageType) {
    // [住宅宿泊事業法]
    CertificateImageType[CertificateImageType["MINPAKU"] = 0] = "MINPAKU";
    CertificateImageType[CertificateImageType["REGISTRATION_NUMBER"] = 1] = "REGISTRATION_NUMBER";
    CertificateImageType[CertificateImageType["MUNICIPALITY_ACCEPTED_MAIL"] = 2] = "MUNICIPALITY_ACCEPTED_MAIL";
    CertificateImageType[CertificateImageType["MINPAKU_MANAGEMENT_SYSTEM"] = 3] = "MINPAKU_MANAGEMENT_SYSTEM";
    CertificateImageType[CertificateImageType["MINPAKU_ACCEPTED_MAIL"] = 4] = "MINPAKU_ACCEPTED_MAIL";
    // [旅館業]
    CertificateImageType[CertificateImageType["HOTEL_BUSINESS_LICENSE"] = 5] = "HOTEL_BUSINESS_LICENSE";
    // [国家戦略特区法]
    CertificateImageType[CertificateImageType["NATIONAL_STRATEGIC_SPECIAL_ZONE"] = 6] = "NATIONAL_STRATEGIC_SPECIAL_ZONE";
})(CertificateImageType = exports.CertificateImageType || (exports.CertificateImageType = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateImageTypeEncoder = generators_1.generateEncoder(translations);
exports.certificateImageTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_image_type.js.map