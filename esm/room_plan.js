var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TenancyTerm;
(function (TenancyTerm) {
    TenancyTerm["LessThanOneMonth"] = "LessThanOneMonth";
    TenancyTerm["OneToThreeMonths"] = "OneToThreeMonths";
    TenancyTerm["ThreeToSevenMonths"] = "ThreeToSevenMonths";
    TenancyTerm["SevenMonthsToOneYear"] = "SevenMonthsToOneYear";
    TenancyTerm["MoreThanOneYear"] = "MoreThanOneYear";
    TenancyTerm["MoreThanTwoYear"] = "MoreThanTwoYear";
})(TenancyTerm || (TenancyTerm = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TenancyTerm.LessThanOneMonth] = 'スーパーショート',
        _a[TenancyTerm.OneToThreeMonths] = 'ショート',
        _a[TenancyTerm.ThreeToSevenMonths] = 'ミドル',
        _a[TenancyTerm.SevenMonthsToOneYear] = 'ロング',
        _a[TenancyTerm.MoreThanOneYear] = 'スーパーロング',
        _a[TenancyTerm.MoreThanTwoYear] = 'ウルトラロング',
        _a),
    en: (_b = {},
        _b[TenancyTerm.LessThanOneMonth] = 'super short',
        _b[TenancyTerm.OneToThreeMonths] = 'short',
        _b[TenancyTerm.ThreeToSevenMonths] = 'middle',
        _b[TenancyTerm.SevenMonthsToOneYear] = 'long',
        _b[TenancyTerm.MoreThanOneYear] = 'super long',
        _b[TenancyTerm.MoreThanTwoYear] = 'ultra long',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var roomPlanEncoder = generateEncoder(translations);
export var roomPlanDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=room_plan.js.map