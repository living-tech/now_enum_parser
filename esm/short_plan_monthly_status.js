var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ShortPlanMonthlyStatus;
(function (ShortPlanMonthlyStatus) {
    ShortPlanMonthlyStatus["ShortPlanOnly"] = "ShortPlanOnly";
    ShortPlanMonthlyStatus["MonthlyOnly"] = "MonthlyOnly";
    ShortPlanMonthlyStatus["ShortPlanAndMonthly"] = "ShortPlanAndMonthly";
})(ShortPlanMonthlyStatus || (ShortPlanMonthlyStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ShortPlanMonthlyStatus.ShortPlanOnly] = '短期のみ空',
        _a[ShortPlanMonthlyStatus.MonthlyOnly] = 'マンスリーのみ空',
        _a[ShortPlanMonthlyStatus.ShortPlanAndMonthly] = '短期/マンスリーどちらも空',
        _a),
    en: (_b = {},
        _b[ShortPlanMonthlyStatus.ShortPlanOnly] = 'ShortPlan Only',
        _b[ShortPlanMonthlyStatus.MonthlyOnly] = 'Monthly Only',
        _b[ShortPlanMonthlyStatus.ShortPlanAndMonthly] = 'ShortPlan And Monthly',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var shortPlanMonthlyStatusEncoder = generateEncoder(translations);
export var shortPlanMonthlyStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=short_plan_monthly_status.js.map