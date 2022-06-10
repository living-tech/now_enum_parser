"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinanceDesignatedCityDecoder = exports.ordinanceDesignatedCityEncoder = exports.OrdinanceDesignatedCity = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var OrdinanceDesignatedCity;
(function (OrdinanceDesignatedCity) {
    OrdinanceDesignatedCity["Sapporo"] = "Sapporo";
    OrdinanceDesignatedCity["Sendai"] = "Sendai";
    OrdinanceDesignatedCity["Saitama"] = "Saitama";
    OrdinanceDesignatedCity["Chiba"] = "Chiba";
    OrdinanceDesignatedCity["Kawasaki"] = "Kawasaki";
    OrdinanceDesignatedCity["Yokohama"] = "Yokohama";
    OrdinanceDesignatedCity["Sagamihara"] = "Sagamihara";
    OrdinanceDesignatedCity["Niigata"] = "Niigata";
    OrdinanceDesignatedCity["Shizuoka"] = "Shizuoka";
    OrdinanceDesignatedCity["Hamamatsu"] = "Hamamatsu";
    OrdinanceDesignatedCity["Nagoya"] = "Nagoya";
    OrdinanceDesignatedCity["Kyoto"] = "Kyoto";
    OrdinanceDesignatedCity["Osaka"] = "Osaka";
    OrdinanceDesignatedCity["Sakai"] = "Sakai";
    OrdinanceDesignatedCity["Kobe"] = "Kobe";
    OrdinanceDesignatedCity["Okayama"] = "Okayama";
    OrdinanceDesignatedCity["Hiroshima"] = "Hiroshima";
    OrdinanceDesignatedCity["Kitakyushu"] = "Kitakyushu";
    OrdinanceDesignatedCity["Fukuoka"] = "Fukuoka";
    OrdinanceDesignatedCity["Kumamoto"] = "Kumamoto";
})(OrdinanceDesignatedCity = exports.OrdinanceDesignatedCity || (exports.OrdinanceDesignatedCity = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[OrdinanceDesignatedCity.Sapporo] = '札幌市',
        _a[OrdinanceDesignatedCity.Sendai] = '仙台市',
        _a[OrdinanceDesignatedCity.Saitama] = 'さいたま市',
        _a[OrdinanceDesignatedCity.Chiba] = '千葉市',
        _a[OrdinanceDesignatedCity.Kawasaki] = '川崎市',
        _a[OrdinanceDesignatedCity.Yokohama] = '横浜市',
        _a[OrdinanceDesignatedCity.Sagamihara] = '相模原市',
        _a[OrdinanceDesignatedCity.Niigata] = '新潟市',
        _a[OrdinanceDesignatedCity.Shizuoka] = '静岡市',
        _a[OrdinanceDesignatedCity.Hamamatsu] = '浜松市',
        _a[OrdinanceDesignatedCity.Nagoya] = '名古屋市',
        _a[OrdinanceDesignatedCity.Kyoto] = '京都市',
        _a[OrdinanceDesignatedCity.Osaka] = '大阪市',
        _a[OrdinanceDesignatedCity.Sakai] = '堺市',
        _a[OrdinanceDesignatedCity.Kobe] = '神戸市',
        _a[OrdinanceDesignatedCity.Okayama] = '岡山市',
        _a[OrdinanceDesignatedCity.Hiroshima] = '広島市',
        _a[OrdinanceDesignatedCity.Kitakyushu] = '北九州市',
        _a[OrdinanceDesignatedCity.Fukuoka] = '福岡市',
        _a[OrdinanceDesignatedCity.Kumamoto] = '熊本市',
        _a),
    en: (_b = {},
        _b[OrdinanceDesignatedCity.Sapporo] = 'Sapporo',
        _b[OrdinanceDesignatedCity.Sendai] = 'Sendai',
        _b[OrdinanceDesignatedCity.Saitama] = 'Saitama',
        _b[OrdinanceDesignatedCity.Chiba] = 'Chiba',
        _b[OrdinanceDesignatedCity.Kawasaki] = 'Kawasaki',
        _b[OrdinanceDesignatedCity.Yokohama] = 'Yokohama',
        _b[OrdinanceDesignatedCity.Sagamihara] = 'Sagamihara',
        _b[OrdinanceDesignatedCity.Niigata] = 'Niigata',
        _b[OrdinanceDesignatedCity.Shizuoka] = 'Shizuoka',
        _b[OrdinanceDesignatedCity.Hamamatsu] = 'Hamamatsu',
        _b[OrdinanceDesignatedCity.Nagoya] = 'Nagoya',
        _b[OrdinanceDesignatedCity.Kyoto] = 'Kyoto',
        _b[OrdinanceDesignatedCity.Osaka] = 'Osaka',
        _b[OrdinanceDesignatedCity.Sakai] = 'Sakai',
        _b[OrdinanceDesignatedCity.Kobe] = 'Kobe',
        _b[OrdinanceDesignatedCity.Okayama] = 'Okayama',
        _b[OrdinanceDesignatedCity.Hiroshima] = 'Hiroshima',
        _b[OrdinanceDesignatedCity.Kitakyushu] = 'Kitakyushu',
        _b[OrdinanceDesignatedCity.Fukuoka] = 'Fukuoka',
        _b[OrdinanceDesignatedCity.Kumamoto] = 'Kumamoto',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.ordinanceDesignatedCityEncoder = (0, generators_1.generateEncoder)(translations);
exports.ordinanceDesignatedCityDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=ordinance_designated_city.js.map