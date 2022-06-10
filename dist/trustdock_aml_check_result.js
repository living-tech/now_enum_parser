"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.trustdockAmlCheckResultDecoder = exports.trustdockAmlCheckResultEncoder = exports.TrustdockAmlCheckResult = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockAmlCheckResult;
(function (TrustdockAmlCheckResult) {
    TrustdockAmlCheckResult["ToBeConfirmed"] = "ToBeConfirmed";
    TrustdockAmlCheckResult["Approved"] = "Approved";
})(TrustdockAmlCheckResult = exports.TrustdockAmlCheckResult || (exports.TrustdockAmlCheckResult = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockAmlCheckResult.ToBeConfirmed] = '要確認',
        _a[TrustdockAmlCheckResult.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[TrustdockAmlCheckResult.ToBeConfirmed] = 'Confirmation Required',
        _b[TrustdockAmlCheckResult.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.trustdockAmlCheckResultEncoder = (0, generators_1.generateEncoder)(translations);
exports.trustdockAmlCheckResultDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=trustdock_aml_check_result.js.map