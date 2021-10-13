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
        _a[TenancyTerm.LessThanOneMonth] = '1週間以上～1ヶ月未満',
        _a[TenancyTerm.OneToThreeMonths] = '1ヶ月以上～3ヶ月未満',
        _a[TenancyTerm.ThreeToSevenMonths] = '3ヶ月以上～7ヶ月未満',
        _a[TenancyTerm.SevenMonthsToOneYear] = '7ヶ月以上～1年未満',
        _a[TenancyTerm.MoreThanOneYear] = '1年以上',
        _a[TenancyTerm.MoreThanTwoYear] = '2年以上',
        _a),
    en: (_b = {},
        _b[TenancyTerm.LessThanOneMonth] = 'one week to one month',
        _b[TenancyTerm.OneToThreeMonths] = 'one to three months',
        _b[TenancyTerm.ThreeToSevenMonths] = 'three to seven months',
        _b[TenancyTerm.SevenMonthsToOneYear] = 'seven months to one year',
        _b[TenancyTerm.MoreThanOneYear] = 'more than one year',
        _b[TenancyTerm.MoreThanTwoYear] = 'more than two year',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var tenancyTermEncoder = generateEncoder(translations);
export var tenancyTermDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=tenancy_term.js.map