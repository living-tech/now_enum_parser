"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var AccountType;
(function (AccountType) {
    AccountType["OrdinaryDeposit"] = "OrdinaryDeposit";
    AccountType["CurrentAccount"] = "CurrentAccount";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[AccountType.OrdinaryDeposit] = '普通預金',
        _a[AccountType.CurrentAccount] = '当座預金',
        _a),
    en: (_b = {},
        _b[AccountType.OrdinaryDeposit] = 'Ordinary Deposit',
        _b[AccountType.CurrentAccount] = 'Current Account',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.AccountTypeEncoder = generators_1.generateEncoder(translations);
exports.AccountTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=account_type.js.map