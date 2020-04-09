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
        _b[CertificateImageType.Minpaku] = 'A copy of a specimen of the Residential Accommodation Business Act',
        _b[CertificateImageType.RegistrationNumber] = 'A copy of the notification of the notification number',
        _b[CertificateImageType.MunicipalityAcceptedMail] = 'A screenshot of the notification acceptance email from the local government',
        _b[CertificateImageType.MinpakuManagementSystem] = 'A screenshot of the system for managing the private home stay system',
        _b[CertificateImageType.MinpakuAcceptedMail] = 'A screenshot of the notification acceptance email from the private nightclub management system',
        _b[CertificateImageType.HotelBusinessLicense] = 'Hotel business operation permit',
        _b[CertificateImageType.NationalStrategicSpecialZone] = 'Certification of the National Strategic Special Zones Act',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateImageTypeEncoder = generators_1.generateEncoder(translations);
exports.certificateImageTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_image_type.js.map