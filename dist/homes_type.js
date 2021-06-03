"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.homesTypeDecoder = exports.homesTypeEncoder = exports.HomesType = void 0;
var generators_1 = require("./lib/generators");
var HomesType;
(function (HomesType) {
    HomesType["Mansion"] = "Mansion";
    HomesType["Apartment"] = "Apartment";
    HomesType["House"] = "House";
    HomesType["TerracedHouse"] = "TerracedHouse";
    HomesType["TownHouse"] = "TownHouse";
    HomesType["ShareHouse"] = "ShareHouse";
    HomesType["Dormitory"] = "Dormitory";
})(HomesType = exports.HomesType || (exports.HomesType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[HomesType.Mansion] = 'マンション',
        _a[HomesType.Apartment] = 'アパート',
        _a[HomesType.House] = '一戸建',
        _a[HomesType.TerracedHouse] = 'テラスハウス',
        _a[HomesType.TownHouse] = 'タウンハウス',
        _a[HomesType.ShareHouse] = 'シェアハウス',
        _a[HomesType.Dormitory] = '寮・下宿',
        _a),
    en: (_b = {},
        _b[HomesType.Mansion] = 'Mansion',
        _b[HomesType.Apartment] = 'Apartment',
        _b[HomesType.House] = 'House',
        _b[HomesType.TerracedHouse] = 'Terraced House',
        _b[HomesType.TownHouse] = 'Town House',
        _b[HomesType.ShareHouse] = 'Share House',
        _b[HomesType.Dormitory] = 'Dormitory',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.homesTypeEncoder = generators_1.generateEncoder(translations);
exports.homesTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=homes_type.js.map