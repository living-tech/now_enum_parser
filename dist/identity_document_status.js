"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var IdentityDocumentStatus;
(function (IdentityDocumentStatus) {
    IdentityDocumentStatus["Accepted"] = "Accepted";
    IdentityDocumentStatus["PlanSelected"] = "PlanSelected";
    IdentityDocumentStatus["DocumentReceived"] = "DocumentReceived";
    IdentityDocumentStatus["InProgress"] = "InProgress";
    IdentityDocumentStatus["Confirmed"] = "Confirmed";
    IdentityDocumentStatus["Rejected"] = "Rejected";
    IdentityDocumentStatus["ToBeConfirmed"] = "ToBeConfirmed";
    IdentityDocumentStatus["Approved"] = "Approved";
})(IdentityDocumentStatus = exports.IdentityDocumentStatus || (exports.IdentityDocumentStatus = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.identityDocumentStatusEncoder = generators_1.generateEncoder(translations);
exports.identityDocumentStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=identity_document_status.js.map