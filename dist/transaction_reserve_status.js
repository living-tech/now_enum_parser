"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
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
        _b[TransactionReserveStatus.Request] = 'Reserve request',
        _b[TransactionReserveStatus.Reserve] = 'Reserve',
        _b[TransactionReserveStatus.PreCancele] = 'Cancel in advance',
        _b[TransactionReserveStatus.MidCancele] = 'Cancel at the middle',
        _b[TransactionReserveStatus.Overstay] = 'Overstar',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.transactionReserveStatusEncoder = generators_1.generateEncoder(translations);
exports.transactionReserveStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_reserve_status.js.map