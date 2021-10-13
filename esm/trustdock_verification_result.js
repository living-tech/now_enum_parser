var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TrustdockVerificationResult;
(function (TrustdockVerificationResult) {
    TrustdockVerificationResult["Rejected"] = "Rejected";
    TrustdockVerificationResult["Approved"] = "Approved";
})(TrustdockVerificationResult || (TrustdockVerificationResult = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TrustdockVerificationResult.Rejected] = '却下',
        _a[TrustdockVerificationResult.Approved] = '承認済',
        _a),
    en: (_b = {},
        _b[TrustdockVerificationResult.Rejected] = 'Rejected',
        _b[TrustdockVerificationResult.Approved] = 'Approved',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var trustdockVerificationResultEncoder = generateEncoder(translations);
export var trustdockVerificationResultDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=trustdock_verification_result.js.map