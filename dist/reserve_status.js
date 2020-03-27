"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReserveStatus;
(function (ReserveStatus) {
    ReserveStatus["Requested"] = "Requested";
    ReserveStatus["Approved"] = "Approved";
    ReserveStatus["Occupied"] = "Occupied";
    ReserveStatus["Exited"] = "Exited";
    ReserveStatus["Canceled"] = "Canceled";
})(ReserveStatus = exports.ReserveStatus || (exports.ReserveStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReserveStatus.Requested] = '予約リクエスト',
        _a[ReserveStatus.Approved] = '入居前',
        _a[ReserveStatus.Occupied] = '入居中',
        _a[ReserveStatus.Exited] = '退去済み',
        _a[ReserveStatus.Canceled] = 'キャンセル',
        _a),
    en: (_b = {},
        _b[ReserveStatus.Requested] = 'Reserve requested',
        _b[ReserveStatus.Approved] = 'Reserve approved',
        _b[ReserveStatus.Occupied] = 'Now ocupied',
        _b[ReserveStatus.Exited] = 'Exited',
        _b[ReserveStatus.Canceled] = 'Canceled',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.reserveStatusEncoder = generators_1.generateEncoder(translations);
exports.reserveStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=reserve_status.js.map