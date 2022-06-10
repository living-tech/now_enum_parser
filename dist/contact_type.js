"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactTypeDecoder = exports.contactTypeEncoder = exports.ContactType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ContactType;
(function (ContactType) {
    ContactType["Application"] = "Application";
    ContactType["Payment"] = "Payment";
    ContactType["Account"] = "Account";
    ContactType["BeforeMoveIn"] = "BeforeMoveIn";
    ContactType["MoveIn"] = "MoveIn";
    ContactType["MoveOut"] = "MoveOut";
    ContactType["BeforeMoveOut"] = "BeforeMoveOut";
    ContactType["Other"] = "Other";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ContactType.Application] = 'アプリケーション',
        _a[ContactType.Payment] = '料金・支払い',
        _a[ContactType.Account] = 'アカウント',
        _a[ContactType.BeforeMoveIn] = '入居前',
        _a[ContactType.MoveIn] = '入居時',
        _a[ContactType.BeforeMoveOut] = '退去前',
        _a[ContactType.MoveOut] = '退去時',
        _a[ContactType.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[ContactType.Application] = 'Application',
        _b[ContactType.Payment] = 'Payment',
        _b[ContactType.Account] = 'Account',
        _b[ContactType.BeforeMoveIn] = 'Before move in',
        _b[ContactType.MoveIn] = 'Move in',
        _b[ContactType.BeforeMoveOut] = 'Before move out',
        _b[ContactType.MoveOut] = 'Move out',
        _b[ContactType.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.contactTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.contactTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=contact_type.js.map