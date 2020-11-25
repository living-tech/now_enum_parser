"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomPlanDecoder = exports.roomPlanEncoder = exports.TenancyTerm = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TenancyTerm;
(function (TenancyTerm) {
    TenancyTerm["LessThanOneMonth"] = "LessThanOneMonth";
    TenancyTerm["OneToThreeMonths"] = "OneToThreeMonths";
    TenancyTerm["ThreeToSevenMonths"] = "ThreeToSevenMonths";
    TenancyTerm["SevenMonthsToOneYear"] = "SevenMonthsToOneYear";
    TenancyTerm["MoreThanOneYear"] = "MoreThanOneYear";
})(TenancyTerm = exports.TenancyTerm || (exports.TenancyTerm = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TenancyTerm.LessThanOneMonth] = 'スーパーショート',
        _a[TenancyTerm.OneToThreeMonths] = 'ショート',
        _a[TenancyTerm.ThreeToSevenMonths] = 'ミドル',
        _a[TenancyTerm.SevenMonthsToOneYear] = 'ロング',
        _a[TenancyTerm.MoreThanOneYear] = 'スーパーロング',
        _a),
    en: (_b = {},
        _b[TenancyTerm.LessThanOneMonth] = 'super short',
        _b[TenancyTerm.OneToThreeMonths] = 'short',
        _b[TenancyTerm.ThreeToSevenMonths] = 'middle',
        _b[TenancyTerm.SevenMonthsToOneYear] = 'long',
        _b[TenancyTerm.MoreThanOneYear] = 'super long',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomPlanEncoder = generators_1.generateEncoder(translations);
exports.roomPlanDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_plan.js.map