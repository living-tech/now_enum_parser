"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.trustdockVerificationStatusDecoder = exports.trustdockVerificationStatusEncoder = exports.TrustdockVerificationStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockVerificationStatus;
(function (TrustdockVerificationStatus) {
    TrustdockVerificationStatus["Accepted"] = "Accepted";
    TrustdockVerificationStatus["PlanSelected"] = "PlanSelected";
    TrustdockVerificationStatus["DocumentReceived"] = "DocumentReceived";
    TrustdockVerificationStatus["InProgress"] = "InProgress";
    TrustdockVerificationStatus["Confirmed"] = "Confirmed";
})(TrustdockVerificationStatus = exports.TrustdockVerificationStatus || (exports.TrustdockVerificationStatus = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.trustdockVerificationStatusEncoder = (0, generators_1.generateEncoder)(translations);
exports.trustdockVerificationStatusDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=trustdock_verification_status.js.map