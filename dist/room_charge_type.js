"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var RoomChargeType;
(function (RoomChargeType) {
    RoomChargeType["ByRoom"] = "ByRoom";
    RoomChargeType["ByPerson"] = "ByPerson";
    RoomChargeType["None"] = "None";
})(RoomChargeType = exports.RoomChargeType || (exports.RoomChargeType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomChargeType.ByRoom] = 'ルームチャージ型',
        _a[RoomChargeType.ByPerson] = '一人単価型',
        _a[RoomChargeType.None] = '区分なし',
        _a),
    en: (_b = {},
        _b[RoomChargeType.ByRoom] = 'Price by Room',
        _b[RoomChargeType.ByPerson] = 'Price by Number of Person',
        _b[RoomChargeType.None] = 'None',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomChargeTypeEncoder = generators_1.generateEncoder(translations);
exports.roomChargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_charge_type.js.map