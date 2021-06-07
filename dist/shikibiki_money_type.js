"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.shikibikiMoneyTypeDecoder = exports.shikibikiMoneyTypeEncoder = exports.ShikibikiMoneyType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ShikibikiMoneyType;
(function (ShikibikiMoneyType) {
    ShikibikiMoneyType["WhenMovingOut"] = "WhenMovingOut";
    ShikibikiMoneyType["EveryYear"] = "EveryYear";
    ShikibikiMoneyType["WhenRenewing"] = "WhenRenewing";
})(ShikibikiMoneyType = exports.ShikibikiMoneyType || (exports.ShikibikiMoneyType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ShikibikiMoneyType.WhenMovingOut] = '退去時',
        _a[ShikibikiMoneyType.EveryYear] = '毎年',
        _a[ShikibikiMoneyType.WhenRenewing] = '更新時',
        _a),
    en: (_b = {},
        _b[ShikibikiMoneyType.WhenMovingOut] = 'When moving out ',
        _b[ShikibikiMoneyType.EveryYear] = 'Every year',
        _b[ShikibikiMoneyType.WhenRenewing] = 'When renewing',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.shikibikiMoneyTypeEncoder = generators_1.generateEncoder(translations);
exports.shikibikiMoneyTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=shikibiki_money_type.js.map