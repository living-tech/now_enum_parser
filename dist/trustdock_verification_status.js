"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockVerificationStatusEncoder = generators_1.generateEncoder(translations);
exports.trustdockVerificationStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_status.js.map