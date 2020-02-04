"use strict";
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
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomChargeTypeEncoder = generators_1.generateEncoder(translations);
exports.roomChargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_charge_type.js.map