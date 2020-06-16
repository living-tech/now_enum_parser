"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.payoutStatusDecoder = exports.payoutStatusEncoder = exports.PayoutStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var PayoutStatus;
(function (PayoutStatus) {
    PayoutStatus["PayoutSchedule"] = "PayoutSchedule";
    PayoutStatus["PayoutDone"] = "PayoutDone";
})(PayoutStatus = exports.PayoutStatus || (exports.PayoutStatus = {}));
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
var payoutTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.payoutStatusEncoder = generators_1.generateEncoder(translations);
exports.payoutStatusDecoder = generators_1.generateDecoder(payoutTranslations);
//# sourceMappingURL=payout_status.js.map