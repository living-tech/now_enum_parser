var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TrustdockAmlCheckStatus;
(function (TrustdockAmlCheckStatus) {
    TrustdockAmlCheckStatus["Accpted"] = "Accepted";
    TrustdockAmlCheckStatus["Confirmed"] = "Confirmed";
})(TrustdockAmlCheckStatus || (TrustdockAmlCheckStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockAmlCheckStatus.Accpted] = '受付済',
        _a[TrustdockAmlCheckStatus.Confirmed] = '確認済',
        _a),
    en: (_b = {},
        _b[TrustdockAmlCheckStatus.Accpted] = 'Received',
        _b[TrustdockAmlCheckStatus.Confirmed] = 'Confirmed',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var trustdockAmlCheckStatusEncoder = generateEncoder(translations);
export var trustdockAmlCheckStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_aml_check_status.js.map