"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenancyPeriodDecoder = exports.tenancyPeriodEncoder = exports.TenancyPeriod = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TenancyPeriod;
(function (TenancyPeriod) {
    TenancyPeriod["LessThanOneMonth"] = "LessThanOneMonth";
    TenancyPeriod["OneToThreeMonths"] = "OneToThreeMonths";
    TenancyPeriod["ThreeToSevenMonths"] = "ThreeToSevenMonths";
    TenancyPeriod["SevenMonthsToOneYear"] = "SevenMonthsToOneYear";
    TenancyPeriod["MoreThanOneYear"] = "MoreThanOneYear";
    TenancyPeriod["MoreThanTwoYear"] = "MoreThanTwoYear";
})(TenancyPeriod = exports.TenancyPeriod || (exports.TenancyPeriod = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TenancyPeriod.LessThanOneMonth] = '1ヶ月未満',
        _a[TenancyPeriod.OneToThreeMonths] = '1ヶ月以上～3ヶ月未満',
        _a[TenancyPeriod.ThreeToSevenMonths] = '3ヶ月以上～7ヶ月未満',
        _a[TenancyPeriod.SevenMonthsToOneYear] = '7ヶ月以上～1年未満',
        _a[TenancyPeriod.MoreThanOneYear] = '1年以上',
        _a[TenancyPeriod.MoreThanTwoYear] = '2年以上',
        _a),
    en: (_b = {},
        _b[TenancyPeriod.LessThanOneMonth] = 'less than one month',
        _b[TenancyPeriod.OneToThreeMonths] = 'one to three months',
        _b[TenancyPeriod.ThreeToSevenMonths] = 'three to seven months',
        _b[TenancyPeriod.SevenMonthsToOneYear] = 'seven months to one year',
        _b[TenancyPeriod.MoreThanOneYear] = 'more than one year',
        _b[TenancyPeriod.MoreThanTwoYear] = 'more than two year',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.tenancyPeriodEncoder = generators_1.generateEncoder(translations);
exports.tenancyPeriodDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=tenancy_period.js.map