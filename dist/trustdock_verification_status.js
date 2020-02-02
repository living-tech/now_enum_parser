"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockVerificationStatus;
(function (TrustdockVerificationStatus) {
    TrustdockVerificationStatus[TrustdockVerificationStatus["ACCEPTED"] = 0] = "ACCEPTED";
    TrustdockVerificationStatus[TrustdockVerificationStatus["PLAN_SELECTED"] = 1] = "PLAN_SELECTED";
    TrustdockVerificationStatus[TrustdockVerificationStatus["DOCUMENT_RECEIVED"] = 2] = "DOCUMENT_RECEIVED";
    TrustdockVerificationStatus[TrustdockVerificationStatus["IN_PROGRESS"] = 3] = "IN_PROGRESS";
    TrustdockVerificationStatus[TrustdockVerificationStatus["CONFIRMED"] = 4] = "CONFIRMED";
})(TrustdockVerificationStatus = exports.TrustdockVerificationStatus || (exports.TrustdockVerificationStatus = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockVerificationStatusEncoder = generators_1.generateEncoder(translations);
exports.trustdockVerificationStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_status.js.map