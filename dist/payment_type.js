"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentTypeDecoder = exports.paymentTypeEncoder = exports.PaymentType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var PaymentType;
(function (PaymentType) {
    PaymentType["First"] = "First";
    PaymentType["Monthly"] = "Monthly";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PaymentType.First] = '初月支払い',
        _a[PaymentType.Monthly] = '月々定額支払い',
        _a),
    en: (_b = {},
        _b[PaymentType.First] = 'first payment',
        _b[PaymentType.Monthly] = 'monthly payment',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.paymentTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.paymentTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=payment_type.js.map