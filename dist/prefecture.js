"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefectureDecoder = exports.prefectureEncoder = exports.Prefecture = void 0;
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
    ja: (_a = {},
        _a[Prefecture.Hokkaido] = '北海道',
        _a[Prefecture.Aomori] = '青森県',
        _a[Prefecture.Iwate] = '岩手県',
        _a[Prefecture.Miyagi] = '宮城県',
        _a[Prefecture.Akita] = '秋田県',
        _a[Prefecture.Yamagata] = '山形県',
        _a[Prefecture.Fukushima] = '福島県',
        _a[Prefecture.Ibaraki] = '茨城県',
        _a[Prefecture.Tochigi] = '栃木県',
        _a[Prefecture.Gunma] = '群馬県',
        _a[Prefecture.Saitama] = '埼玉県',
        _a[Prefecture.Chiba] = '千葉県',
        _a[Prefecture.Tokyo] = '東京都',
        _a[Prefecture.Kanagawa] = '神奈川県',
        _a[Prefecture.Niigata] = '新潟県',
        _a[Prefecture.Toyama] = '富山県',
        _a[Prefecture.Ishikawa] = '石川県',
        _a[Prefecture.Fukui] = '福井県',
        _a[Prefecture.Yamanashi] = '山梨県',
        _a[Prefecture.Nagano] = '長野県',
        _a[Prefecture.Gifu] = '岐阜県',
        _a[Prefecture.Shizuoka] = '静岡県',
        _a[Prefecture.Aichi] = '愛知県',
        _a[Prefecture.Mie] = '三重県',
        _a[Prefecture.Shiga] = '滋賀県',
        _a[Prefecture.Kyoto] = '京都府',
        _a[Prefecture.Osaka] = '大阪府',
        _a[Prefecture.Hyogo] = '兵庫県',
        _a[Prefecture.Nara] = '奈良県',
        _a[Prefecture.Wakayama] = '和歌山県',
        _a[Prefecture.Tottori] = '鳥取県',
        _a[Prefecture.Shimane] = '島根県',
        _a[Prefecture.Okayama] = '岡山県',
        _a[Prefecture.Hiroshima] = '広島県',
        _a[Prefecture.Yamaguchi] = '山口県',
        _a[Prefecture.Tokushima] = '徳島県',
        _a[Prefecture.Kagawa] = '香川県',
        _a[Prefecture.Ehime] = '愛媛県',
        _a[Prefecture.Kochi] = '高知県',
        _a[Prefecture.Fukuoka] = '福岡県',
        _a[Prefecture.Saga] = '佐賀県',
        _a[Prefecture.Nagasaki] = '長崎県',
        _a[Prefecture.Kumamoto] = '熊本県',
        _a[Prefecture.Oita] = '大分県',
        _a[Prefecture.Miyazaki] = '宮崎県',
        _a[Prefecture.Kagoshima] = '鹿児島県',
        _a[Prefecture.Okinawa] = '沖縄県',
        _a),
    en: (_b = {},
        _b[Prefecture.Hokkaido] = 'Hokkaido',
        _b[Prefecture.Aomori] = 'Aomori',
        _b[Prefecture.Iwate] = 'Iwate',
        _b[Prefecture.Miyagi] = 'Miyagi',
        _b[Prefecture.Akita] = 'Akita',
        _b[Prefecture.Yamagata] = 'Yamagata',
        _b[Prefecture.Fukushima] = 'Fukushima',
        _b[Prefecture.Ibaraki] = 'Ibaraki',
        _b[Prefecture.Tochigi] = 'Tochigi',
        _b[Prefecture.Gunma] = 'Gunma',
        _b[Prefecture.Saitama] = 'Saitama',
        _b[Prefecture.Chiba] = 'Chiba',
        _b[Prefecture.Tokyo] = 'Tokyo',
        _b[Prefecture.Kanagawa] = 'Kanagawa',
        _b[Prefecture.Niigata] = 'Niigata',
        _b[Prefecture.Toyama] = 'Toyama',
        _b[Prefecture.Ishikawa] = 'Ishikawa',
        _b[Prefecture.Fukui] = 'Fukui',
        _b[Prefecture.Yamanashi] = 'Yamanashi',
        _b[Prefecture.Nagano] = 'Nagano',
        _b[Prefecture.Gifu] = 'Gifu',
        _b[Prefecture.Shizuoka] = 'Shizuoka',
        _b[Prefecture.Aichi] = 'Aichi',
        _b[Prefecture.Mie] = 'Mie',
        _b[Prefecture.Shiga] = 'Shiga',
        _b[Prefecture.Kyoto] = 'Kyoto',
        _b[Prefecture.Osaka] = 'Osaka',
        _b[Prefecture.Hyogo] = 'Hyogo',
        _b[Prefecture.Nara] = 'Nara',
        _b[Prefecture.Wakayama] = 'Wakayama',
        _b[Prefecture.Tottori] = 'Tottori',
        _b[Prefecture.Shimane] = 'Shimane',
        _b[Prefecture.Okayama] = 'Okayama',
        _b[Prefecture.Hiroshima] = 'Hiroshima',
        _b[Prefecture.Yamaguchi] = 'Yamaguchi',
        _b[Prefecture.Tokushima] = 'Tokushima',
        _b[Prefecture.Kagawa] = 'Kagawa',
        _b[Prefecture.Ehime] = 'Ehime',
        _b[Prefecture.Kochi] = 'Kochi',
        _b[Prefecture.Fukuoka] = 'Fukuoka',
        _b[Prefecture.Saga] = 'Saga',
        _b[Prefecture.Nagasaki] = 'Nagasaki',
        _b[Prefecture.Kumamoto] = 'Kumamoto',
        _b[Prefecture.Oita] = 'Oita',
        _b[Prefecture.Miyazaki] = 'Miyazaki',
        _b[Prefecture.Kagoshima] = 'Kagoshima',
        _b[Prefecture.Okinawa] = 'Okinawa',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.prefectureEncoder = generators_1.generateEncoder(translations);
exports.prefectureDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=prefecture.js.map