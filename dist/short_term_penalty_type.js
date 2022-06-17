"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortTermPenaltyTypeDecoder = exports.shortTermPenaltyTypeEncoder = exports.ShortTermPenaltyType = void 0;
var generators_1 = require("./lib/generators");
var ShortTermPenaltyType;
(function (ShortTermPenaltyType) {
    ShortTermPenaltyType["LessThanTwoYears"] = "LessThanTwoYears";
    ShortTermPenaltyType["LessThanOneYear"] = "LessThanOneYear";
    ShortTermPenaltyType["LessThanSixMonths"] = "LessThanSixMonths";
})(ShortTermPenaltyType = exports.ShortTermPenaltyType || (exports.ShortTermPenaltyType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ShortTermPenaltyType.LessThanTwoYears] = '2年未満',
        _a[ShortTermPenaltyType.LessThanOneYear] = '1年未満',
        _a[ShortTermPenaltyType.LessThanSixMonths] = '6か月未満',
        _a),
    en: (_b = {},
        _b[ShortTermPenaltyType.LessThanTwoYears] = 'LessThanTwoYears',
        _b[ShortTermPenaltyType.LessThanOneYear] = 'LessThanOneYear',
        _b[ShortTermPenaltyType.LessThanSixMonths] = 'LessThanSixMonths',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.shortTermPenaltyTypeEncoder = generators_1.generateEncoder(translations);
exports.shortTermPenaltyTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=short_term_penalty_type.js.map