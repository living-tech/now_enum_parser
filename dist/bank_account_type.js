"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var BankAccountType;
(function (BankAccountType) {
    BankAccountType["OrdinaryDeposit"] = "OrdinaryDeposit";
    BankAccountType["CurrentAccount"] = "CurrentAccount";
})(BankAccountType = exports.BankAccountType || (exports.BankAccountType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.bankAccountTypeEncoder = generators_1.generateEncoder(translations);
exports.bankAccountTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=bank_account_type.js.map