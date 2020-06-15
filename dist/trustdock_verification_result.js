"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.trustdockVerificationResultDecoder = exports.trustdockVerificationResultEncoder = exports.TrustdockVerificationResult = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockVerificationResult;
(function (TrustdockVerificationResult) {
    TrustdockVerificationResult["Rejected"] = "Rejected";
    TrustdockVerificationResult["Approved"] = "Approved";
})(TrustdockVerificationResult = exports.TrustdockVerificationResult || (exports.TrustdockVerificationResult = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockVerificationResult.Rejected] = '却下',
        _a[TrustdockVerificationResult.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[TrustdockVerificationResult.Rejected] = 'Rejected',
        _b[TrustdockVerificationResult.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockVerificationResultEncoder = generators_1.generateEncoder(translations);
exports.trustdockVerificationResultDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_result.js.map