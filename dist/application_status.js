"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationStatusDecoder = exports.applicationStatusEncoder = exports.ApplicationStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["NotSubmitted"] = "NotSubmitted";
    ApplicationStatus["InProgress"] = "InProgress";
    ApplicationStatus["Rejected"] = "Rejected";
    ApplicationStatus["Approved"] = "Approved";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ApplicationStatus.NotSubmitted] = '未提出',
        _a[ApplicationStatus.InProgress] = '進捗中',
        _a[ApplicationStatus.Rejected] = '非承認',
        _a[ApplicationStatus.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[ApplicationStatus.NotSubmitted] = 'Unsubmitted',
        _b[ApplicationStatus.InProgress] = 'In Progress',
        _b[ApplicationStatus.Rejected] = 'Not Approved',
        _b[ApplicationStatus.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.applicationStatusEncoder = generators_1.generateEncoder(translations);
exports.applicationStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=application_status.js.map