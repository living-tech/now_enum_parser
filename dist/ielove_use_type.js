"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ieloveUseTypeDecoder = exports.ieloveUseTypeEncoder = exports.IeloveUseType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var IeloveUseType;
(function (IeloveUseType) {
    IeloveUseType["ResidentialUseWithGuarantee"] = "ResidentialUseWithGuarantee";
    IeloveUseType["Other"] = "Other";
})(IeloveUseType = exports.IeloveUseType || (exports.IeloveUseType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[IeloveUseType.ResidentialUseWithGuarantee] = '住居用（保険付）',
        _a[IeloveUseType.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[IeloveUseType.ResidentialUseWithGuarantee] = 'Residential Use with Guarantee',
        _b[IeloveUseType.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.ieloveUseTypeEncoder = generators_1.generateEncoder(translations);
exports.ieloveUseTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=ielove_use_type.js.map