"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxIncludeTypeDecoder = exports.taxIncludeTypeEncoder = exports.TaxIncludeType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TaxIncludeType;
(function (TaxIncludeType) {
    TaxIncludeType["TaxIncluded"] = "TaxIncluded";
    TaxIncludeType["TaxFree"] = "TaxFree";
})(TaxIncludeType = exports.TaxIncludeType || (exports.TaxIncludeType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.taxIncludeTypeEncoder = generators_1.generateEncoder(translations);
exports.taxIncludeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=tax_include_type.js.map