var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CreditCard";
    PaymentMethod["AccountTransfer"] = "AccountTransfer";
})(PaymentMethod || (PaymentMethod = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var paymentMethodEncoder = generateEncoder(translations);
export var paymentMethodDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=payment_method.js.map