var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var IdentityDocumentStatus;
(function (IdentityDocumentStatus) {
    IdentityDocumentStatus["NotSubmitted"] = "NotSubmitted";
    IdentityDocumentStatus["Accepted"] = "Accepted";
    IdentityDocumentStatus["PlanSelected"] = "PlanSelected";
    IdentityDocumentStatus["DocumentReceived"] = "DocumentReceived";
    IdentityDocumentStatus["InProgress"] = "InProgress";
    IdentityDocumentStatus["Confirmed"] = "Confirmed";
    IdentityDocumentStatus["Rejected"] = "Rejected";
    IdentityDocumentStatus["ToBeConfirmed"] = "ToBeConfirmed";
    IdentityDocumentStatus["Approved"] = "Approved";
})(IdentityDocumentStatus || (IdentityDocumentStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[IdentityDocumentStatus.NotSubmitted] = '未提出',
        _a[IdentityDocumentStatus.Approved] = '受入済',
        _a[IdentityDocumentStatus.PlanSelected] = 'プラン選択済',
        _a[IdentityDocumentStatus.DocumentReceived] = '書類受領済',
        _a[IdentityDocumentStatus.InProgress] = '進捗中',
        _a[IdentityDocumentStatus.Confirmed] = '確認済',
        _a[IdentityDocumentStatus.Rejected] = '非承認',
        _a[IdentityDocumentStatus.ToBeConfirmed] = '要確認',
        _a[IdentityDocumentStatus.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[IdentityDocumentStatus.NotSubmitted] = 'Unsubmitted',
        _b[IdentityDocumentStatus.Approved] = 'Received',
        _b[IdentityDocumentStatus.PlanSelected] = 'Plan Selected',
        _b[IdentityDocumentStatus.DocumentReceived] = 'Documents Received',
        _b[IdentityDocumentStatus.InProgress] = 'In Progress',
        _b[IdentityDocumentStatus.Confirmed] = 'Confirmed',
        _b[IdentityDocumentStatus.Rejected] = 'Not Approved',
        _b[IdentityDocumentStatus.ToBeConfirmed] = 'Confirmation Required',
        _b[IdentityDocumentStatus.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var identityDocumentStatusEncoder = generateEncoder(translations);
export var identityDocumentStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=identity_document_status.js.map