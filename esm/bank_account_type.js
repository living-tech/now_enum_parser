var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var BankAccountType;
(function (BankAccountType) {
    BankAccountType["OrdinaryDeposit"] = "OrdinaryDeposit";
    BankAccountType["CurrentAccount"] = "CurrentAccount";
})(BankAccountType || (BankAccountType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[BankAccountType.OrdinaryDeposit] = '普通預金',
        _a[BankAccountType.CurrentAccount] = '当座預金',
        _a),
    en: (_b = {},
        _b[BankAccountType.OrdinaryDeposit] = 'Ordinary Deposit',
        _b[BankAccountType.CurrentAccount] = 'Current Account',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var bankAccountTypeEncoder = generateEncoder(translations);
export var bankAccountTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=bank_account_type.js.map