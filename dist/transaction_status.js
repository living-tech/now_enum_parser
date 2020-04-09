"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Unpaid"] = "Unpaid";
    TransactionStatus["CreditOK"] = "CreditOK";
    TransactionStatus["CreditNG"] = "CreditNG";
    TransactionStatus["Paid"] = "Paid";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TransactionStatus.Unpaid] = '未払い',
        _a[TransactionStatus.CreditOK] = '与信OK',
        _a[TransactionStatus.CreditNG] = '与信NG',
        _a[TransactionStatus.Paid] = '支払い済',
        _a),
    en: (_b = {},
        _b[TransactionStatus.Unpaid] = 'Unpaid',
        _b[TransactionStatus.CreditOK] = 'Pay Later Accepted',
        _b[TransactionStatus.CreditNG] = 'Pay Later Not Accepted',
        _b[TransactionStatus.Paid] = 'Paid',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.transactionStatusEncoder = generators_1.generateEncoder(translations);
exports.transactionStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_status.js.map