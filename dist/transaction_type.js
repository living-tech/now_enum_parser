"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionTypeDecoder = exports.transactionTypeEncoder = exports.TransactionType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TransactionType;
(function (TransactionType) {
    TransactionType["Credit"] = "Credit";
    TransactionType["Payment"] = "Payment";
    TransactionType["Refund"] = "Refund";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TransactionType.Credit] = '与信',
        _a[TransactionType.Payment] = '支払い',
        _a[TransactionType.Refund] = '払い戻し',
        _a),
    en: (_b = {},
        _b[TransactionType.Credit] = 'Pay Later',
        _b[TransactionType.Payment] = 'Payment',
        _b[TransactionType.Refund] = 'Reimbursement',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.transactionTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.transactionTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=transaction_type.js.map