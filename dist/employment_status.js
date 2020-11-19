"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.employmentStatusDecoder = exports.employmentStatusEncoder = exports.EmploymentStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var EmploymentStatus;
(function (EmploymentStatus) {
    EmploymentStatus["SoloProprietorship"] = "SoloProprietorship";
    EmploymentStatus["ListedCompanyOfficeWorker"] = "ListedCompanyOfficeWorker";
    EmploymentStatus["UnlistedCompanyOfficeWorker"] = "UnlistedCompanyOfficeWorker";
    EmploymentStatus["CompanyOwner"] = "CompanyOwner";
    EmploymentStatus["PartTimeJob"] = "PartTimeJob";
    EmploymentStatus["Arbeit"] = "Arbeit";
    EmploymentStatus["Student"] = "Student";
    EmploymentStatus["Unemployed"] = "Unemployed";
    EmploymentStatus["Other"] = "Other";
})(EmploymentStatus = exports.EmploymentStatus || (exports.EmploymentStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[EmploymentStatus.SoloProprietorship] = '個人事業主（フリーランサー）',
        _a[EmploymentStatus.ListedCompanyOfficeWorker] = '会社員（上場企業）',
        _a[EmploymentStatus.UnlistedCompanyOfficeWorker] = '会社員（非上場企業）',
        _a[EmploymentStatus.CompanyOwner] = '経営者',
        _a[EmploymentStatus.PartTimeJob] = 'パート',
        _a[EmploymentStatus.Arbeit] = 'アルバイト',
        _a[EmploymentStatus.Student] = '学生',
        _a[EmploymentStatus.Unemployed] = '無職',
        _a[EmploymentStatus.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[EmploymentStatus.SoloProprietorship] = 'Solo proprietorship',
        _b[EmploymentStatus.ListedCompanyOfficeWorker] = 'Listed company office worker',
        _b[EmploymentStatus.UnlistedCompanyOfficeWorker] = 'Unlisted company office worker',
        _b[EmploymentStatus.CompanyOwner] = 'Company owner',
        _b[EmploymentStatus.PartTimeJob] = 'Part-time job',
        _b[EmploymentStatus.Arbeit] = 'Arbeit',
        _b[EmploymentStatus.Student] = 'Student',
        _b[EmploymentStatus.Unemployed] = 'Unemployed',
        _b[EmploymentStatus.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.employmentStatusEncoder = generators_1.generateEncoder(translations);
exports.employmentStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=employment_status.js.map