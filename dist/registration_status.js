"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationStatusDecoder = exports.registrationStatusEncoder = exports.RegistrationStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["NotYet"] = "NotYet";
    RegistrationStatus["InProgress"] = "InProgress";
    RegistrationStatus["Approved"] = "Approved";
    RegistrationStatus["Rejected"] = "Rejected";
})(RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RegistrationStatus.NotYet] = '未承認',
        _a[RegistrationStatus.InProgress] = '承認待',
        _a[RegistrationStatus.Approved] = '承認済',
        _a[RegistrationStatus.Rejected] = '却下',
        _a),
    en: (_b = {},
        _b[RegistrationStatus.NotYet] = 'Yet to be Approved',
        _b[RegistrationStatus.InProgress] = 'Waiting for Approval',
        _b[RegistrationStatus.Approved] = 'Approved',
        _b[RegistrationStatus.Rejected] = 'Not Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.registrationStatusEncoder = generators_1.generateEncoder(translations);
exports.registrationStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=registration_status.js.map