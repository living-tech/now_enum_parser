var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TransactionReserveStatus;
(function (TransactionReserveStatus) {
    TransactionReserveStatus["Request"] = "Request";
    TransactionReserveStatus["Reserve"] = "Reserve";
    TransactionReserveStatus["PreCancele"] = "PreCancele";
    TransactionReserveStatus["MidCancele"] = "MidCancele";
    TransactionReserveStatus["Overstay"] = "Overstay";
})(TransactionReserveStatus || (TransactionReserveStatus = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var transactionReserveStatusEncoder = generateEncoder(translations);
export var transactionReserveStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_reserve_status.js.map