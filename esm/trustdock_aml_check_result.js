var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TrustdockAmlCheckResult;
(function (TrustdockAmlCheckResult) {
    TrustdockAmlCheckResult["ToBeConfirmed"] = "ToBeConfirmed";
    TrustdockAmlCheckResult["Approved"] = "Approved";
})(TrustdockAmlCheckResult || (TrustdockAmlCheckResult = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockAmlCheckResult.ToBeConfirmed] = '要確認',
        _a[TrustdockAmlCheckResult.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[TrustdockAmlCheckResult.ToBeConfirmed] = 'Confirmation Required',
        _b[TrustdockAmlCheckResult.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var trustdockAmlCheckResultEncoder = generateEncoder(translations);
export var trustdockAmlCheckResultDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_aml_check_result.js.map