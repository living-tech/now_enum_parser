"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentChargeDiscountTypeDecoder = exports.rentChargeDiscountTypeEncoder = exports.RentChargeDiscountType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RentChargeDiscountType;
(function (RentChargeDiscountType) {
    RentChargeDiscountType["Coupon"] = "Amount";
    RentChargeDiscountType["JustBefore"] = "Rate";
    RentChargeDiscountType["None"] = "None";
})(RentChargeDiscountType = exports.RentChargeDiscountType || (exports.RentChargeDiscountType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RentChargeDiscountType.Coupon] = 'クーポン',
        _a[RentChargeDiscountType.JustBefore] = '直前',
        _a[RentChargeDiscountType.None] = 'なし',
        _a),
    en: (_b = {},
        _b[RentChargeDiscountType.Coupon] = 'coupon',
        _b[RentChargeDiscountType.JustBefore] = 'just before',
        _b[RentChargeDiscountType.None] = 'none',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.rentChargeDiscountTypeEncoder = generators_1.generateEncoder(translations);
exports.rentChargeDiscountTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=rent_charge_discount_type.js.map