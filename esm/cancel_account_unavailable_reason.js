var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var CancelAccountUnavailableReason;
(function (CancelAccountUnavailableReason) {
    CancelAccountUnavailableReason["ReservationExists"] = "ReservationExists";
    CancelAccountUnavailableReason["PaymentNotComplete"] = "PaymentNotComplete";
})(CancelAccountUnavailableReason || (CancelAccountUnavailableReason = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var cancelAccountUnavailableReasonEncoder = generateEncoder(translations);
export var cancelAccountUnavailableReasonDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=cancel_account_unavailable_reason.js.map