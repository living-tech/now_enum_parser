"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortPlanMonthlyStatusDecoder = exports.shortPlanMonthlyStatusEncoder = exports.ShortPlanMonthlyStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ShortPlanMonthlyStatus;
(function (ShortPlanMonthlyStatus) {
    ShortPlanMonthlyStatus["ShortPlanOnly"] = "ShortPlanOnly";
    ShortPlanMonthlyStatus["MonthlyOnly"] = "MonthlyOnly";
    ShortPlanMonthlyStatus["ShortPlanAndMonthly"] = "ShortPlanAndMonthly";
})(ShortPlanMonthlyStatus = exports.ShortPlanMonthlyStatus || (exports.ShortPlanMonthlyStatus = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.shortPlanMonthlyStatusEncoder = (0, generators_1.generateEncoder)(translations);
exports.shortPlanMonthlyStatusDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=short_plan_monthly_status.js.map