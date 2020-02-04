"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CertificateImageType;
(function (CertificateImageType) {
    // [住宅宿泊事業法]
    CertificateImageType["Minpaku"] = "Minpaku";
    CertificateImageType["RegistrationNumber"] = "RegistrationNumber";
    CertificateImageType["MunicipalityAcceptedMail"] = "MunicipalityAcceptedMail";
    CertificateImageType["MinpakuManagementSystem"] = "MinpakuManagementSystem";
    CertificateImageType["MinpakuAcceptedMail"] = "MinpakuAcceptedMail";
    // [旅館業]
    CertificateImageType["HotelBusinessLicense"] = "HotelBusinessLicense";
    // [国家戦略特区法]
    CertificateImageType["NationalStrategicSpecialZone"] = "NationalStrategicSpecialZone";
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