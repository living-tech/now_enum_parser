var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Unpaid"] = "Unpaid";
    TransactionStatus["CreditOK"] = "CreditOK";
    TransactionStatus["CreditNG"] = "CreditNG";
    TransactionStatus["Paid"] = "Paid";
})(TransactionStatus || (TransactionStatus = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var transactionStatusEncoder = generateEncoder(translations);
export var transactionStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_status.js.map