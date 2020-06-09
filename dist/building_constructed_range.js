"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
var BuildingConstructedRange;
(function (BuildingConstructedRange) {
    BuildingConstructedRange["OneYear"] = "OneYear";
    BuildingConstructedRange["ThreeYear"] = "ThreeYear";
    BuildingConstructedRange["FiveYear"] = "FiveYear";
    BuildingConstructedRange["SevenYear"] = "SevenYear";
    BuildingConstructedRange["TenYear"] = "TenYear";
    BuildingConstructedRange["FifteenYear"] = "FifteenYear";
    BuildingConstructedRange["TwentyYear"] = "TwentyYear";
    BuildingConstructedRange["TwentyFiveYear"] = "TwentyFiveYear";
    BuildingConstructedRange["ThirtyYear"] = "ThirtyYear";
})(BuildingConstructedRange = exports.BuildingConstructedRange || (exports.BuildingConstructedRange = {}));
var translations = {
    ja: (_a = {},
        _a[BuildingConstructedRange.OneYear] = '1年以内',
        _a[BuildingConstructedRange.ThreeYear] = '3年以内',
        _a[BuildingConstructedRange.FiveYear] = '5年以内',
        _a[BuildingConstructedRange.SevenYear] = '7年以内',
        _a[BuildingConstructedRange.TenYear] = '10年以内',
        _a[BuildingConstructedRange.FifteenYear] = '15年以内',
        _a[BuildingConstructedRange.TwentyYear] = '20年以内',
        _a[BuildingConstructedRange.TwentyFiveYear] = '25年以内',
        _a[BuildingConstructedRange.ThirtyYear] = '30年以内',
        _a),
    en: (_b = {},
        _b[BuildingConstructedRange.OneYear] = 'Within a year',
        _b[BuildingConstructedRange.ThreeYear] = 'Within three years',
        _b[BuildingConstructedRange.FiveYear] = 'Within five years',
        _b[BuildingConstructedRange.SevenYear] = 'Within seven years',
        _b[BuildingConstructedRange.TenYear] = 'Within ten years',
        _b[BuildingConstructedRange.FifteenYear] = 'Within fifteen years',
        _b[BuildingConstructedRange.TwentyYear] = 'Within twenty years',
        _b[BuildingConstructedRange.TwentyFiveYear] = 'Within twentyfive years',
        _b[BuildingConstructedRange.ThirtyYear] = 'Within Thirty years',
        _b),
};
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.buildingConstructedRangeEncoder = generators_1.generateEncoder(translations);
exports.buildingConstructedRangeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=building_constructed_range.js.map