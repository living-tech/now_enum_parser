var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TaxIncludeType;
(function (TaxIncludeType) {
    TaxIncludeType["TaxIncluded"] = "TaxIncluded";
    TaxIncludeType["TaxFree"] = "TaxFree";
})(TaxIncludeType || (TaxIncludeType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TaxIncludeType.TaxIncluded] = '税込み',
        _a[TaxIncludeType.TaxFree] = '税表示無し(税発生せず)',
        _a),
    en: (_b = {},
        _b[TaxIncludeType.TaxIncluded] = 'Tax Included',
        _b[TaxIncludeType.TaxFree] = 'Tax Free',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var taxIncludeTypeEncoder = generateEncoder(translations);
export var taxIncludeTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=tax_include_type.js.map