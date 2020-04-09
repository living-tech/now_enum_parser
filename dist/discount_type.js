"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var DiscountType;
(function (DiscountType) {
    DiscountType["Amount"] = "Amount";
    DiscountType["Rate"] = "Rate";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.discountTypeEncoder = generators_1.generateEncoder(translations);
exports.discountTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=discount_type.js.map