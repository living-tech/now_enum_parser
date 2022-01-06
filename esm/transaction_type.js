var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TransactionType;
(function (TransactionType) {
    TransactionType["Credit"] = "Credit";
    TransactionType["Payment"] = "Payment";
    TransactionType["Refund"] = "Refund";
})(TransactionType || (TransactionType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var transactionTypeEncoder = generateEncoder(translations);
export var transactionTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_type.js.map