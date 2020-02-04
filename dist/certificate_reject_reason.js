"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CertificateRejectReason;
(function (CertificateRejectReason) {
    CertificateRejectReason["NotDesignated"] = "NotDesignated";
    CertificateRejectReason["Unclearness"] = "Unclearness";
    CertificateRejectReason["HidenessOrDamage"] = "HidenessOrDamage";
    CertificateRejectReason["NoRegistrationNumber"] = "NoRegistrationNumber";
    CertificateRejectReason["WrongInfo"] = "WrongInfo";
    CertificateRejectReason["Other"] = "Other";
})(CertificateRejectReason = exports.CertificateRejectReason || (exports.CertificateRejectReason = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.certificateRejectReasonEncoder = generators_1.generateEncoder(translations);
exports.certificateRejectReasonDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_reject_reason.js.map