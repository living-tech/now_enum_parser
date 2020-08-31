"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.canselReasonDecoder = exports.canselReasonEncoder = exports.CanselReason = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CanselReason;
(function (CanselReason) {
    CanselReason["InventoryShortage"] = "InventoryShortage";
    CanselReason["BusinessDifficulties"] = "BusinessDifficulties";
    CanselReason["ConditionMismatch"] = "ConditionMismatch";
    CanselReason["PaymentNotPossible"] = "PaymentNotPossible";
    CanselReason["Other"] = "Other";
})(CanselReason = exports.CanselReason || (exports.CanselReason = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CanselReason.InventoryShortage] = '別の予約による在庫不足',
        _a[CanselReason.BusinessDifficulties] = '営業の継続が困難',
        _a[CanselReason.ConditionMismatch] = '募集条件に不一致',
        _a[CanselReason.PaymentNotPossible] = '決済不可',
        _a[CanselReason.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[CanselReason.InventoryShortage] = 'Shortage of stock due to another reservation',
        _b[CanselReason.BusinessDifficulties] = 'It is difficult to continue sales',
        _b[CanselReason.ConditionMismatch] = 'Mismatched recruitment conditions',
        _b[CanselReason.PaymentNotPossible] = 'Payment not possible',
        _b[CanselReason.Other] = 'Other Reasons',
        _b),
};
// DO NOT EDIT
var CanselReasons = generators_1.generateCanselReasons(translations);
// Edit constants name
exports.canselReasonEncoder = generators_1.generateEncoder(translations);
exports.canselReasonDecoder = generators_1.generateDecoder(CanselReasons);
//# sourceMappingURL=cancel_reason.js.map