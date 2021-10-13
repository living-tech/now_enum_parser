var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["NotSubmitted"] = "NotSubmitted";
    ApplicationStatus["InProgress"] = "InProgress";
    ApplicationStatus["Rejected"] = "Rejected";
    ApplicationStatus["Approved"] = "Approved";
})(ApplicationStatus || (ApplicationStatus = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var applicationStatusEncoder = generateEncoder(translations);
export var applicationStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=application_status.js.map