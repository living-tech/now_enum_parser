"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.justBeforeDiscountThresholdDayDecoder = exports.justBeforeDiscountThresholdDayEncoder = exports.JustBeforeDiscountThresholdDay = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var JustBeforeDiscountThresholdDay;
(function (JustBeforeDiscountThresholdDay) {
    JustBeforeDiscountThresholdDay["TwoWeeks"] = "TwoWeeks";
    JustBeforeDiscountThresholdDay["OneMonth"] = "OneMonth";
})(JustBeforeDiscountThresholdDay = exports.JustBeforeDiscountThresholdDay || (exports.JustBeforeDiscountThresholdDay = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.justBeforeDiscountThresholdDayEncoder = (0, generators_1.generateEncoder)(translations);
exports.justBeforeDiscountThresholdDayDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=just_before_discount_threshold_day.js.map