var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var PaymentType;
(function (PaymentType) {
    PaymentType["First"] = "First";
    PaymentType["Monthly"] = "Monthly";
})(PaymentType || (PaymentType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var paymentTypeEncoder = generateEncoder(translations);
export var paymentTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=payment_type.js.map