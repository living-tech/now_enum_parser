"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReserveStatus;
(function (ReserveStatus) {
    ReserveStatus["Requested"] = "Requested";
    ReserveStatus["Approved"] = "Approved";
    ReserveStatus["Rejected"] = "Rejected";
    ReserveStatus["Occupied"] = "Occupied";
    ReserveStatus["Exited"] = "Exited";
    ReserveStatus["PreCanceled"] = "PreCanceled";
    ReserveStatus["MidCanceled"] = "MidCanceled";
    ReserveStatus["Displaced"] = "Displaced";
})(ReserveStatus = exports.ReserveStatus || (exports.ReserveStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReserveStatus.Requested] = '予約リクエスト',
        _a[ReserveStatus.Approved] = '予約承認済',
        _a[ReserveStatus.Rejected] = '予約却下済',
        _a[ReserveStatus.Occupied] = '入居中',
        _a[ReserveStatus.Exited] = '退去済',
        _a[ReserveStatus.PreCanceled] = '事前キャンセル済',
        _a[ReserveStatus.MidCanceled] = '中途解約済',
        _a[ReserveStatus.Displaced] = '強制退去済',
        _a),
    en: (_b = {},
        _b[ReserveStatus.Requested] = 'Reserve requested',
        _b[ReserveStatus.Approved] = 'Reserve approved',
        _b[ReserveStatus.Rejected] = 'Reserve rejected',
        _b[ReserveStatus.Occupied] = 'Now ocupied',
        _b[ReserveStatus.Exited] = 'Exited',
        _b[ReserveStatus.PreCanceled] = 'Canceled in advance',
        _b[ReserveStatus.MidCanceled] = 'Canceled at the middle',
        _b[ReserveStatus.Displaced] = 'Displaced',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.reserveStatusEncoder = generators_1.generateEncoder(translations);
exports.reserveStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=reserve_status.js.map