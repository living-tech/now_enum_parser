"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Prefecture;
(function (Prefecture) {
    Prefecture["Hokkaido"] = "Hokkaido";
    Prefecture["Aomori"] = "Aomori";
    Prefecture["Iwate"] = "Iwate";
    Prefecture["Miyagi"] = "Miyagi";
    Prefecture["Akita"] = "Akita";
    Prefecture["Yamagata"] = "Yamagata";
    Prefecture["Fukushima"] = "Fukushima";
    Prefecture["Ibaraki"] = "Ibaraki";
    Prefecture["Tochigi"] = "Tochigi";
    Prefecture["Gunma"] = "Gunma";
    Prefecture["Saitama"] = "Saitama";
    Prefecture["Chiba"] = "Chiba";
    Prefecture["Tokyo"] = "Tokyo";
    Prefecture["Kanagawa"] = "Kanagawa";
    Prefecture["Niigata"] = "Niigata";
    Prefecture["Toyama"] = "Toyama";
    Prefecture["Ishikawa"] = "Ishikawa";
    Prefecture["Fukui"] = "Fukui";
    Prefecture["Yamanashi"] = "Yamanashi";
    Prefecture["Nagano"] = "Nagano";
    Prefecture["Gifu"] = "Gifu";
    Prefecture["Shizuoka"] = "Shizuoka";
    Prefecture["Aichi"] = "Aichi";
    Prefecture["Mie"] = "Mie";
    Prefecture["Shiga"] = "Shiga";
    Prefecture["Kyoto"] = "Kyoto";
    Prefecture["Osaka"] = "Osaka";
    Prefecture["Hyogo"] = "Hyogo";
    Prefecture["Nara"] = "Nara";
    Prefecture["Wakayama"] = "Wakayama";
    Prefecture["Tottori"] = "Tottori";
    Prefecture["Shimane"] = "Shimane";
    Prefecture["Okayama"] = "Okayama";
    Prefecture["Hiroshima"] = "Hiroshima";
    Prefecture["Yamaguchi"] = "Yamaguchi";
    Prefecture["Tokushima"] = "Tokushima";
    Prefecture["Kagawa"] = "Kagawa";
    Prefecture["Ehime"] = "Ehime";
    Prefecture["Kochi"] = "Kochi";
    Prefecture["Fukuoka"] = "Fukuoka";
    Prefecture["Saga"] = "Saga";
    Prefecture["Nagasaki"] = "Nagasaki";
    Prefecture["Kumamoto"] = "Kumamoto";
    Prefecture["Oita"] = "Oita";
    Prefecture["Miyazaki"] = "Miyazaki";
    Prefecture["Kagoshima"] = "Kagoshima";
    Prefecture["Okinawa"] = "Okinawa";
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