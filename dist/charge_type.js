"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var ChargeType;
(function (ChargeType) {
    ChargeType[ChargeType["YET"] = 0] = "YET";
    // 旅館業
    // シェアハウス
    // 住宅宿泊施設
    // 賃貸
})(ChargeType = exports.ChargeType || (exports.ChargeType = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.chargeTypeEncoder = generators_1.generateEncoder(translations);
exports.chargeTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=charge_type.js.map