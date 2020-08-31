"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelReasonDecoder = exports.cancelReasonEncoder = exports.CancelReason = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CancelReason;
(function (CancelReason) {
    CancelReason["InventoryShortage"] = "InventoryShortage";
    CancelReason["BusinessDifficulties"] = "BusinessDifficulties";
    CancelReason["ConditionMismatch"] = "ConditionMismatch";
    CancelReason["PaymentNotPossible"] = "PaymentNotPossible";
    CancelReason["Other"] = "Other";
})(CancelReason = exports.CancelReason || (exports.CancelReason = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CancelReason.InventoryShortage] = '別の予約による在庫不足',
        _a[CancelReason.BusinessDifficulties] = '営業の継続が困難',
        _a[CancelReason.ConditionMismatch] = '募集条件に不一致',
        _a[CancelReason.PaymentNotPossible] = '決済不可',
        _a[CancelReason.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[CancelReason.InventoryShortage] = 'Shortage of stock due to another reservation',
        _b[CancelReason.BusinessDifficulties] = 'It is difficult to continue sales',
        _b[CancelReason.ConditionMismatch] = 'Mismatched recruitment conditions',
        _b[CancelReason.PaymentNotPossible] = 'Payment not possible',
        _b[CancelReason.Other] = 'Other Reasons',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.cancelReasonEncoder = generators_1.generateEncoder(translations);
exports.cancelReasonDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=cancel_reason.js.map