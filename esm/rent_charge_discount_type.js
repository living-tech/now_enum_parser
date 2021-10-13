var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var RentChargeDiscountType;
(function (RentChargeDiscountType) {
    RentChargeDiscountType["Coupon"] = "Amount";
    RentChargeDiscountType["JustBefore"] = "Rate";
    RentChargeDiscountType["None"] = "None";
})(RentChargeDiscountType || (RentChargeDiscountType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var rentChargeDiscountTypeEncoder = generateEncoder(translations);
export var rentChargeDiscountTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=rent_charge_discount_type.js.map