var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var PaymentTerm;
(function (PaymentTerm) {
    PaymentTerm["LastMonthEnd"] = "LastMonthEnd";
    PaymentTerm["NextMonthEnd"] = "NextMonthEnd";
    PaymentTerm["AfterNextMonthEnd"] = "AfterNextMonthEnd";
})(PaymentTerm || (PaymentTerm = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PaymentTerm.LastMonthEnd] = '前月末',
        _a[PaymentTerm.NextMonthEnd] = '翌月末',
        _a[PaymentTerm.AfterNextMonthEnd] = '翌々月末',
        _a),
    en: (_b = {},
        _b[PaymentTerm.LastMonthEnd] = 'payment end of last month',
        _b[PaymentTerm.NextMonthEnd] = 'payment end of next month',
        _b[PaymentTerm.AfterNextMonthEnd] = 'payment end of month after next',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var paymentTermEncoder = generateEncoder(translations);
export var paymentTermDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=payment_term.js.map