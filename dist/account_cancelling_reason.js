"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountCancelReasonDecoder = exports.accountCancelReasonEncoder = exports.AccountCancellingReason = void 0;
var generators_1 = require("./lib/generators");
// NotSubmitted
var AccountCancellingReason;
(function (AccountCancellingReason) {
    AccountCancellingReason["DidntLikeRooms"] = "DidntLikeRooms";
    AccountCancellingReason["DifficultToUse"] = "DifficultToUse";
    AccountCancellingReason["BadApplicationUI"] = "BadApplicationUI";
    AccountCancellingReason["Others"] = "Others";
})(AccountCancellingReason = exports.AccountCancellingReason || (exports.AccountCancellingReason = {}));
var translations = {
    ja: (_a = {},
        _a[AccountCancellingReason.DidntLikeRooms] = '気に入った物件がなかった',
        _a[AccountCancellingReason.DifficultToUse] = '使い方がわからなかった',
        _a[AccountCancellingReason.BadApplicationUI] = 'サイト/アプリの操作感が悪かった',
        _a[AccountCancellingReason.Others] = 'その他',
        _a),
    en: (_b = {},
        _b[AccountCancellingReason.DidntLikeRooms] = 'Did not like any of the rooms',
        _b[AccountCancellingReason.DifficultToUse] = 'Difficult to use',
        _b[AccountCancellingReason.BadApplicationUI] = 'Website/Application UI is bad',
        _b[AccountCancellingReason.Others] = 'Others',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.accountCancelReasonEncoder = generators_1.generateEncoder(translations);
exports.accountCancelReasonDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=account_cancelling_reason.js.map