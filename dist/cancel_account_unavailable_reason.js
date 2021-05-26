"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelReasonDecoder = exports.cancelReasonEncoder = exports.CancelAccountUnavailableReason = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CancelAccountUnavailableReason;
(function (CancelAccountUnavailableReason) {
    CancelAccountUnavailableReason["ReserationExists"] = "ReservationExists";
    CancelAccountUnavailableReason["PaymentNotComplete"] = "PaymentNotComplete";
})(CancelAccountUnavailableReason = exports.CancelAccountUnavailableReason || (exports.CancelAccountUnavailableReason = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CancelAccountUnavailableReason.ReserationExists] = '予約中の物件があります',
        _a[CancelAccountUnavailableReason.PaymentNotComplete] = 'お支払いが完了していない物件があります',
        _a),
    en: (_b = {},
        _b[CancelAccountUnavailableReason.ReserationExists] = 'There exists a future reservation',
        _b[CancelAccountUnavailableReason.PaymentNotComplete] = 'There is a reservation whose payment is not complete',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.cancelReasonEncoder = generators_1.generateEncoder(translations);
exports.cancelReasonDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=cancel_account_unavailable_reason.js.map