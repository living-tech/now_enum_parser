"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Prefecture;
(function (Prefecture) {
    Prefecture[Prefecture["HOKKAIDO"] = 0] = "HOKKAIDO";
    Prefecture[Prefecture["AOMORI"] = 1] = "AOMORI";
    Prefecture[Prefecture["IWATE"] = 2] = "IWATE";
    Prefecture[Prefecture["MIYAGI"] = 3] = "MIYAGI";
    Prefecture[Prefecture["AKITA"] = 4] = "AKITA";
    Prefecture[Prefecture["YAMAGATA"] = 5] = "YAMAGATA";
    Prefecture[Prefecture["FUKUSHIMA"] = 6] = "FUKUSHIMA";
    Prefecture[Prefecture["IBARAKI"] = 7] = "IBARAKI";
    Prefecture[Prefecture["TOCHIGI"] = 8] = "TOCHIGI";
    Prefecture[Prefecture["GUNMA"] = 9] = "GUNMA";
    Prefecture[Prefecture["SAITAMA"] = 10] = "SAITAMA";
    Prefecture[Prefecture["CHIBA"] = 11] = "CHIBA";
    Prefecture[Prefecture["TOKYO"] = 12] = "TOKYO";
    Prefecture[Prefecture["KANAGAWA"] = 13] = "KANAGAWA";
    Prefecture[Prefecture["NIIGATA"] = 14] = "NIIGATA";
    Prefecture[Prefecture["TOYAMA"] = 15] = "TOYAMA";
    Prefecture[Prefecture["ISHIKAWA"] = 16] = "ISHIKAWA";
    Prefecture[Prefecture["FUKUI"] = 17] = "FUKUI";
    Prefecture[Prefecture["YAMANASHI"] = 18] = "YAMANASHI";
    Prefecture[Prefecture["NAGANO"] = 19] = "NAGANO";
    Prefecture[Prefecture["GIFU"] = 20] = "GIFU";
    Prefecture[Prefecture["SHIZUOKA"] = 21] = "SHIZUOKA";
    Prefecture[Prefecture["AICHI"] = 22] = "AICHI";
    Prefecture[Prefecture["MIE"] = 23] = "MIE";
    Prefecture[Prefecture["SHIGA"] = 24] = "SHIGA";
    Prefecture[Prefecture["KYOTO"] = 25] = "KYOTO";
    Prefecture[Prefecture["OSAKA"] = 26] = "OSAKA";
    Prefecture[Prefecture["HYOGO"] = 27] = "HYOGO";
    Prefecture[Prefecture["NARA"] = 28] = "NARA";
    Prefecture[Prefecture["WAKAYAMA"] = 29] = "WAKAYAMA";
    Prefecture[Prefecture["TOTTORI"] = 30] = "TOTTORI";
    Prefecture[Prefecture["SHIMANE"] = 31] = "SHIMANE";
    Prefecture[Prefecture["OKAYAMA"] = 32] = "OKAYAMA";
    Prefecture[Prefecture["HIROSHIMA"] = 33] = "HIROSHIMA";
    Prefecture[Prefecture["YAMAGUCHI"] = 34] = "YAMAGUCHI";
    Prefecture[Prefecture["TOKUSHIMA"] = 35] = "TOKUSHIMA";
    Prefecture[Prefecture["KAGAWA"] = 36] = "KAGAWA";
    Prefecture[Prefecture["EHIME"] = 37] = "EHIME";
    Prefecture[Prefecture["KOCHI"] = 38] = "KOCHI";
    Prefecture[Prefecture["FUKUOKA"] = 39] = "FUKUOKA";
    Prefecture[Prefecture["SAGA"] = 40] = "SAGA";
    Prefecture[Prefecture["NAGASAKI"] = 41] = "NAGASAKI";
    Prefecture[Prefecture["KUMAMOTO"] = 42] = "KUMAMOTO";
    Prefecture[Prefecture["OITA"] = 43] = "OITA";
    Prefecture[Prefecture["MIYAZAKI"] = 44] = "MIYAZAKI";
    Prefecture[Prefecture["KAGOSHIMA"] = 45] = "KAGOSHIMA";
    Prefecture[Prefecture["OKINAWA"] = 46] = "OKINAWA";
})(Prefecture = exports.Prefecture || (exports.Prefecture = {}));
// Edit contexts
var translations = {
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.prefectureEncoder = generators_1.generateEncoder(translations);
exports.prefectureDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=prefecture.js.map