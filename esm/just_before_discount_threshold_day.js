var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var JustBeforeDiscountThresholdDay;
(function (JustBeforeDiscountThresholdDay) {
    JustBeforeDiscountThresholdDay["TwoWeeks"] = "TwoWeeks";
    JustBeforeDiscountThresholdDay["OneMonth"] = "OneMonth";
})(JustBeforeDiscountThresholdDay || (JustBeforeDiscountThresholdDay = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[JustBeforeDiscountThresholdDay.TwoWeeks] = '2週間',
        _a[JustBeforeDiscountThresholdDay.OneMonth] = '1ヶ月',
        _a),
    en: (_b = {},
        _b[JustBeforeDiscountThresholdDay.TwoWeeks] = 'two weeks',
        _b[JustBeforeDiscountThresholdDay.OneMonth] = 'one month',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var justBeforeDiscountThresholdDayEncoder = generateEncoder(translations);
export var justBeforeDiscountThresholdDayDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=just_before_discount_threshold_day.js.map