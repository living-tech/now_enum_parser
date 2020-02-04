"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockVerificationResult;
(function (TrustdockVerificationResult) {
    TrustdockVerificationResult["Rejected"] = "Rejected";
    TrustdockVerificationResult["Approved"] = "Approved";
})(TrustdockVerificationResult = exports.TrustdockVerificationResult || (exports.TrustdockVerificationResult = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockVerificationResultEncoder = generators_1.generateEncoder(translations);
exports.trustdockVerificationResultDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_result.js.map