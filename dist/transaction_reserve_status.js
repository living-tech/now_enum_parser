"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionReserveStatusDecoder = exports.transactionReserveStatusEncoder = exports.TransactionReserveStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TransactionReserveStatus;
(function (TransactionReserveStatus) {
    TransactionReserveStatus["Request"] = "Request";
    TransactionReserveStatus["Reserve"] = "Reserve";
    TransactionReserveStatus["PreCancele"] = "PreCancele";
    TransactionReserveStatus["MidCancele"] = "MidCancele";
    TransactionReserveStatus["Overstay"] = "Overstay";
})(TransactionReserveStatus = exports.TransactionReserveStatus || (exports.TransactionReserveStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TransactionReserveStatus.Request] = '予約リクエスト',
        _a[TransactionReserveStatus.Reserve] = '予約',
        _a[TransactionReserveStatus.PreCancele] = '事前キャンセル',
        _a[TransactionReserveStatus.MidCancele] = '中途解約',
        _a[TransactionReserveStatus.Overstay] = 'オーバーステイ',
        _a),
    en: (_b = {},
        _b[TransactionReserveStatus.Request] = 'Booking Request',
        _b[TransactionReserveStatus.Reserve] = 'Reservation',
        _b[TransactionReserveStatus.PreCancele] = 'Advance Cancellation',
        _b[TransactionReserveStatus.MidCancele] = 'Premature Termination of a Contract',
        _b[TransactionReserveStatus.Overstay] = 'Overstay',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.transactionReserveStatusEncoder = (0, generators_1.generateEncoder)(translations);
exports.transactionReserveStatusDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=transaction_reserve_status.js.map