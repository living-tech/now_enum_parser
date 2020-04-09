"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockVerificationType;
(function (TrustdockVerificationType) {
    TrustdockVerificationType["Passport"] = "Passport";
    TrustdockVerificationType["DriverLicense"] = "DriverLicense";
    TrustdockVerificationType["DrivingHistoryCertification"] = "DrivingHistoryCertification";
    TrustdockVerificationType["BasicResidentRegisterCard"] = "BasicResidentRegisterCard";
    TrustdockVerificationType["ResidencyCard"] = "ResidencyCard";
    TrustdockVerificationType["SpecialPermanentResidentCertificate"] = "SpecialPermanentResidentCertificate";
    TrustdockVerificationType["MyNumberCard"] = "MyNumberCard";
})(TrustdockVerificationType = exports.TrustdockVerificationType || (exports.TrustdockVerificationType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockVerificationType.Passport] = 'パスポート',
        _a[TrustdockVerificationType.DriverLicense] = '運転免許証',
        _a[TrustdockVerificationType.DrivingHistoryCertification] = '運転経歴証明書',
        _a[TrustdockVerificationType.BasicResidentRegisterCard] = '住民基本台帳カード',
        _a[TrustdockVerificationType.ResidencyCard] = '在留カード',
        _a[TrustdockVerificationType.SpecialPermanentResidentCertificate] = '特別永住者証明書',
        _a[TrustdockVerificationType.MyNumberCard] = 'マイナンバーカード',
        _a),
    en: (_b = {},
        _b[TrustdockVerificationType.Passport] = 'Passport',
        _b[TrustdockVerificationType.DriverLicense] = "Driver's License",
        _b[TrustdockVerificationType.DrivingHistoryCertification] = 'Driving History Certificate',
        _b[TrustdockVerificationType.BasicResidentRegisterCard] = 'Basic Resident Register Card',
        _b[TrustdockVerificationType.ResidencyCard] = 'Residence Card',
        _b[TrustdockVerificationType.SpecialPermanentResidentCertificate] = 'Special Permanent Resident Certificate',
        _b[TrustdockVerificationType.MyNumberCard] = 'My Number Card',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockVerificationTypeEncoder = generators_1.generateEncoder(translations);
exports.trustdockVerificationTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_type.js.map