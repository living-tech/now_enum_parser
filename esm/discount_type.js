var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var DiscountType;
(function (DiscountType) {
    DiscountType["Amount"] = "Amount";
    DiscountType["Rate"] = "Rate";
})(DiscountType || (DiscountType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[DiscountType.Amount] = '金額',
        _a[DiscountType.Rate] = '比率',
        _a),
    en: (_b = {},
        _b[DiscountType.Amount] = 'Amount',
        _b[DiscountType.Rate] = 'Ratio',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var discountTypeEncoder = generateEncoder(translations);
export var discountTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=discount_type.js.map