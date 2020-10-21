"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ieloveVerificationTypeDecoder = exports.ieloveVerificationTypeEncoder = exports.IeloveVerificationType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var IeloveVerificationType;
(function (IeloveVerificationType) {
    IeloveVerificationType["DriverLicense"] = "DriverLicense";
    IeloveVerificationType["SealCertificate"] = "SealCertificate";
    IeloveVerificationType["BasicResidentRegisterCard"] = "BasicResidentRegisterCard";
    IeloveVerificationType["HealthInsuranceCard"] = "HealthInsuranceCard";
    IeloveVerificationType["Passport"] = "Passport";
    IeloveVerificationType["MyNumberCard"] = "MyNumberCard";
    IeloveVerificationType["AlienRegistrationCertificate"] = "AlienRegistrationCertificate";
    IeloveVerificationType["ResidencyCard"] = "ResidencyCard";
})(IeloveVerificationType = exports.IeloveVerificationType || (exports.IeloveVerificationType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[IeloveVerificationType.DriverLicense] = '運転免許証',
        _a[IeloveVerificationType.SealCertificate] = '印鑑証明書',
        _a[IeloveVerificationType.BasicResidentRegisterCard] = '住民基本台帳カード',
        _a[IeloveVerificationType.HealthInsuranceCard] = '健康保険証',
        _a[IeloveVerificationType.Passport] = 'パスポート',
        _a[IeloveVerificationType.MyNumberCard] = 'マイナンバーカード',
        _a[IeloveVerificationType.AlienRegistrationCertificate] = '外国人登録証明書',
        _a[IeloveVerificationType.ResidencyCard] = '在留カード',
        _a),
    en: (_b = {},
        _b[IeloveVerificationType.DriverLicense] = "Driver's License",
        _b[IeloveVerificationType.SealCertificate] = 'Seal Certificate',
        _b[IeloveVerificationType.BasicResidentRegisterCard] = 'Basic Resident Register Card',
        _b[IeloveVerificationType.HealthInsuranceCard] = 'Health Insurance Card',
        _b[IeloveVerificationType.Passport] = 'Passport',
        _b[IeloveVerificationType.MyNumberCard] = 'My Number Card',
        _b[IeloveVerificationType.AlienRegistrationCertificate] = 'Alien Registration Certificate',
        _b[IeloveVerificationType.ResidencyCard] = 'Residence Card',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.ieloveVerificationTypeEncoder = generators_1.generateEncoder(translations);
exports.ieloveVerificationTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=ielove_verification_type.js.map