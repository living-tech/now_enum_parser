var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ShikibikiMoneyType;
(function (ShikibikiMoneyType) {
    ShikibikiMoneyType["WhenMovingOut"] = "WhenMovingOut";
    ShikibikiMoneyType["EveryYear"] = "EveryYear";
    ShikibikiMoneyType["WhenRenewing"] = "WhenRenewing";
})(ShikibikiMoneyType || (ShikibikiMoneyType = {}));
// Edit contexts
var translations = {
    // 1:退去時 2:毎年 3:更新時
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var shikibikiMoneyTypeEncoder = generateEncoder(translations);
export var shikibikiMoneyTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=shikibiki_money_type.js.map