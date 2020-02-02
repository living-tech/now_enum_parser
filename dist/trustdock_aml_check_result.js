"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockAmlCheckResult;
(function (TrustdockAmlCheckResult) {
    TrustdockAmlCheckResult[TrustdockAmlCheckResult["TO_BE_CONFIRMED"] = 0] = "TO_BE_CONFIRMED";
    TrustdockAmlCheckResult[TrustdockAmlCheckResult["APPROVED"] = 1] = "APPROVED";
})(TrustdockAmlCheckResult = exports.TrustdockAmlCheckResult || (exports.TrustdockAmlCheckResult = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockAmlCheckResultEncoder = generators_1.generateEncoder(translations);
exports.trustdockAmlCheckResultDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_aml_check_result.js.map