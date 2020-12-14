"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentTermDecoder = exports.paymentTermEncoder = exports.PaymentTerm = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var PaymentTerm;
(function (PaymentTerm) {
    PaymentTerm["LastMonthEnd"] = "LastMonthEnd";
    PaymentTerm["NextMonthEnd"] = "NextMonthEnd";
    PaymentTerm["AfterNextMonthEnd"] = "AfterNextMonthEnd";
})(PaymentTerm = exports.PaymentTerm || (exports.PaymentTerm = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.paymentTermEncoder = generators_1.generateEncoder(translations);
exports.paymentTermDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=payment_term.js.map