"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveStatusDecoder = exports.reserveStatusEncoder = exports.ReserveStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReserveStatus;
(function (ReserveStatus) {
    ReserveStatus["IeloveRequested"] = "IeloveRequested";
    ReserveStatus["Requested"] = "Requested";
    ReserveStatus["Approved"] = "Approved";
    ReserveStatus["Occupied"] = "Occupied";
    ReserveStatus["Exited"] = "Exited";
    ReserveStatus["Canceled"] = "Canceled";
    ReserveStatus["Rejected"] = "Rejected";
})(ReserveStatus = exports.ReserveStatus || (exports.ReserveStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReserveStatus.IeloveRequested] = '保証リクエスト',
        _a[ReserveStatus.Requested] = '予約リクエスト',
        _a[ReserveStatus.Approved] = '確定済み',
        _a[ReserveStatus.Occupied] = '入居中',
        _a[ReserveStatus.Exited] = '退去済み',
        _a[ReserveStatus.Canceled] = 'キャンセル',
        _a[ReserveStatus.Rejected] = '予約リクエスト却下',
        _a),
    en: (_b = {},
        _b[ReserveStatus.IeloveRequested] = 'Guarantee Request',
        _b[ReserveStatus.Requested] = 'Booking Request',
        _b[ReserveStatus.Approved] = 'Confirmed',
        _b[ReserveStatus.Occupied] = 'Moving In',
        _b[ReserveStatus.Exited] = 'Moved Out',
        _b[ReserveStatus.Canceled] = 'Cancelled',
        _b[ReserveStatus.Rejected] = 'Rejected',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.reserveStatusEncoder = generators_1.generateEncoder(translations);
exports.reserveStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=reserve_status.js.map