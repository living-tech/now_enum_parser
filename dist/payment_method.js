"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodDecoder = exports.paymentMethodEncoder = exports.PaymentMethod = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CreditCard";
    PaymentMethod["AccountTransfer"] = "AccountTransfer";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PaymentMethod.CreditCard] = 'クレジットカード',
        _a[PaymentMethod.AccountTransfer] = '口座振替',
        _a),
    en: (_b = {},
        _b[PaymentMethod.CreditCard] = 'Credit card',
        _b[PaymentMethod.AccountTransfer] = 'Account transfer',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.paymentMethodEncoder = (0, generators_1.generateEncoder)(translations);
exports.paymentMethodDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=payment_method.js.map