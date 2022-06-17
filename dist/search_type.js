"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTypeDecoder = exports.searchTypeEncoder = exports.SearchType = void 0;
var generators_1 = require("./lib/generators");
var SearchType;
(function (SearchType) {
    SearchType["SearchByCity"] = "SearchByCity";
    SearchType["SearchByRailway"] = "SearchByRailway";
    SearchType["SearchByTime"] = "SearchByTime";
    SearchType["SearchByDistance"] = "SearchByDistance";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[SearchType.SearchByCity] = '市区町村から探す',
        _a[SearchType.SearchByRailway] = '沿線・駅から探す',
        _a[SearchType.SearchByTime] = '通勤時間から探す',
        _a[SearchType.SearchByDistance] = '通勤距離から探す',
        _a),
    en: (_b = {},
        _b[SearchType.SearchByCity] = 'SearchByCity',
        _b[SearchType.SearchByRailway] = 'SearchByRailway',
        _b[SearchType.SearchByTime] = 'SearchByTime',
        _b[SearchType.SearchByDistance] = 'SearchByDistance',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.searchTypeEncoder = generators_1.generateEncoder(translations);
exports.searchTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=search_type.js.map