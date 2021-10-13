var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// NotSubmitted
export var AccountCancellingReason;
(function (AccountCancellingReason) {
    AccountCancellingReason["DidntLikeRooms"] = "DidntLikeRooms";
    AccountCancellingReason["DifficultToUse"] = "DifficultToUse";
    AccountCancellingReason["BadApplicationUI"] = "BadApplicationUI";
    AccountCancellingReason["Others"] = "Others";
})(AccountCancellingReason || (AccountCancellingReason = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var accountCancelReasonEncoder = generateEncoder(translations);
export var accountCancelReasonDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=account_cancelling_reason.js.map