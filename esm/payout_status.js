var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var PayoutStatus;
(function (PayoutStatus) {
    PayoutStatus["PayoutSchedule"] = "PayoutSchedule";
    PayoutStatus["PayoutDone"] = "PayoutDone";
})(PayoutStatus || (PayoutStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PayoutStatus.PayoutSchedule] = '入金予定',
        _a[PayoutStatus.PayoutDone] = '入金済',
        _a),
    en: (_b = {},
        _b[PayoutStatus.PayoutSchedule] = 'Payout Schedule',
        _b[PayoutStatus.PayoutDone] = 'Payout Done',
        _b),
};
// DO NOT EDIT
var payoutTranslations = generateReverseTranslations(translations);
// Edit constants name
export var payoutStatusEncoder = generateEncoder(translations);
export var payoutStatusDecoder = generateDecoder(payoutTranslations);
//# sourceMappingURL=payout_status.js.map