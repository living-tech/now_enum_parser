"use strict";
var _a, _b;
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
    ja: (_a = {},
        _a[CertificateType.Minpaku] = '住宅宿泊事業法',
        _a[CertificateType.Hotel] = '旅館業法',
        _a[CertificateType.NationalStrategicSpecialZone] = '国家戦略特別区域法',
        _a),
    en: (_b = {},
        _b[CertificateType.Minpaku] = 'Residential Accommodation Business',
        _b[CertificateType.Hotel] = 'Ryokan Business Law',
        _b[CertificateType.NationalStrategicSpecialZone] = 'National Strategic Special Zones Act',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateTypeEncoder = generators_1.generateEncoder(translations);
exports.certificateTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_type.js.map