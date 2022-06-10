"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAccountUnavailableReasonDecoder = exports.cancelAccountUnavailableReasonEncoder = exports.CancelAccountUnavailableReason = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CancelAccountUnavailableReason;
(function (CancelAccountUnavailableReason) {
    CancelAccountUnavailableReason["ReservationExists"] = "ReservationExists";
    CancelAccountUnavailableReason["PaymentNotComplete"] = "PaymentNotComplete";
})(CancelAccountUnavailableReason = exports.CancelAccountUnavailableReason || (exports.CancelAccountUnavailableReason = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CancelAccountUnavailableReason.ReservationExists] = '予約中の物件があります',
        _a[CancelAccountUnavailableReason.PaymentNotComplete] = 'お支払いが完了していない物件があります',
        _a),
    en: (_b = {},
        _b[CancelAccountUnavailableReason.ReservationExists] = 'There exists a future reservation',
        _b[CancelAccountUnavailableReason.PaymentNotComplete] = 'There is a reservation whose payment is not complete',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.cancelAccountUnavailableReasonEncoder = (0, generators_1.generateEncoder)(translations);
exports.cancelAccountUnavailableReasonDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=cancel_account_unavailable_reason.js.map