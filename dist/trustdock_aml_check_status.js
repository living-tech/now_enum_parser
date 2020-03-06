"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TrustdockAmlCheckStatus;
(function (TrustdockAmlCheckStatus) {
    TrustdockAmlCheckStatus["Accpted"] = "Accepted";
    TrustdockAmlCheckStatus["Confirmed"] = "Confirmed";
})(TrustdockAmlCheckStatus = exports.TrustdockAmlCheckStatus || (exports.TrustdockAmlCheckStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockAmlCheckStatus.Accpted] = '受付済',
        _a[TrustdockAmlCheckStatus.Confirmed] = '確認済',
        _a),
    en: (_b = {},
        _b[TrustdockAmlCheckStatus.Accpted] = 'Accepted',
        _b[TrustdockAmlCheckStatus.Confirmed] = 'Confirmed',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.trustdockAmlCheckStatusEncoder = generators_1.generateEncoder(translations);
exports.trustdockAmlCheckStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_aml_check_status.js.map