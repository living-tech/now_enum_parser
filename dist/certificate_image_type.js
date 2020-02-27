"use strict";
var _a, _b;
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
    ja: (_a = {},
        _a[CertificateImageType.Minpaku] = '住宅宿泊事業法の標本の写し',
        _a[CertificateImageType.RegistrationNumber] = '届出番号通知書の写し',
        _a[CertificateImageType.MunicipalityAcceptedMail] = '自治体からの届出受理メールのスクリーンショット',
        _a[CertificateImageType.MinpakuManagementSystem] = '民泊制度運営システムのスクリーンショット',
        _a[CertificateImageType.MinpakuAcceptedMail] = '民泊制度運営システムからの届出受理メールのスクリーンショット',
        _a[CertificateImageType.HotelBusinessLicense] = '旅館業の営業許可証',
        _a[CertificateImageType.NationalStrategicSpecialZone] = '国家戦略特区法の認定書',
        _a),
    en: (_b = {},
        _b[CertificateImageType.Minpaku] = 'Minpaku Business License Copy',
        _b[CertificateImageType.RegistrationNumber] = 'Notificated Registration Number Copy',
        _b[CertificateImageType.MunicipalityAcceptedMail] = 'Screenshot of Accepted Mail from Municipality',
        _b[CertificateImageType.MinpakuManagementSystem] = 'Screenshot of Minpaku Management System',
        _b[CertificateImageType.MinpakuAcceptedMail] = 'Screenshot of Minpaku Management System Notification Mail',
        _b[CertificateImageType.HotelBusinessLicense] = 'Hotel Business License',
        _b[CertificateImageType.NationalStrategicSpecialZone] = 'National Strategic Special Zone Law Certificate',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateImageTypeEncoder = generators_1.generateEncoder(translations);
exports.certificateImageTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_image_type.js.map