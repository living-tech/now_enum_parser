var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TrustdockVerificationStatus;
(function (TrustdockVerificationStatus) {
    TrustdockVerificationStatus["Accepted"] = "Accepted";
    TrustdockVerificationStatus["PlanSelected"] = "PlanSelected";
    TrustdockVerificationStatus["DocumentReceived"] = "DocumentReceived";
    TrustdockVerificationStatus["InProgress"] = "InProgress";
    TrustdockVerificationStatus["Confirmed"] = "Confirmed";
})(TrustdockVerificationStatus || (TrustdockVerificationStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockVerificationStatus.Accepted] = '受入済',
        _a[TrustdockVerificationStatus.PlanSelected] = 'プラン選択済',
        _a[TrustdockVerificationStatus.DocumentReceived] = '書類受領済',
        _a[TrustdockVerificationStatus.InProgress] = '進捗中',
        _a[TrustdockVerificationStatus.Confirmed] = '確認済',
        _a),
    en: (_b = {},
        _b[TrustdockVerificationStatus.Accepted] = 'Received',
        _b[TrustdockVerificationStatus.PlanSelected] = 'Plan Selected',
        _b[TrustdockVerificationStatus.DocumentReceived] = 'Documents Received',
        _b[TrustdockVerificationStatus.InProgress] = 'In Progress',
        _b[TrustdockVerificationStatus.Confirmed] = 'Confirmed',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var trustdockVerificationStatusEncoder = generateEncoder(translations);
export var trustdockVerificationStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_status.js.map