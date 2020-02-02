"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var RoomTypeChargeType;
(function (RoomTypeChargeType) {
    RoomTypeChargeType[RoomTypeChargeType["BY_ROOM"] = 0] = "BY_ROOM";
    RoomTypeChargeType[RoomTypeChargeType["BY_PERSON"] = 1] = "BY_PERSON";
    RoomTypeChargeType[RoomTypeChargeType["NONE"] = 2] = "NONE";
})(RoomTypeChargeType = exports.RoomTypeChargeType || (exports.RoomTypeChargeType = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomTypeChargeTypeEncoder = generators_1.generateEncoder(translations);
exports.roomTypeChargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_type_charge_type.js.map