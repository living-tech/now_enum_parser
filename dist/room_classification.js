"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RoomClassification;
(function (RoomClassification) {
    RoomClassification["Private"] = "Private";
    RoomClassification["Share"] = "Share";
})(RoomClassification = exports.RoomClassification || (exports.RoomClassification = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomClassificationEncoder = generators_1.generateEncoder(translations);
exports.roomClassificationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_classification.js.map