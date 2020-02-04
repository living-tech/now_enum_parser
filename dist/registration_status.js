"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["NotYet"] = "NotYet";
    RegistrationStatus["InProgress"] = "InProgess";
    RegistrationStatus["Approved"] = "Approved";
    RegistrationStatus["Rejected"] = "Rejected";
})(RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.registrationStatusEncoder = generators_1.generateEncoder(translations);
exports.registrationStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=registration_status.js.map