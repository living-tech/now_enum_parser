var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var HomesType;
(function (HomesType) {
    HomesType["Mansion"] = "Mansion";
    HomesType["Apartment"] = "Apartment";
    HomesType["House"] = "House";
    HomesType["TerracedHouse"] = "TerracedHouse";
    HomesType["TownHouse"] = "TownHouse";
    HomesType["ShareHouse"] = "ShareHouse";
    HomesType["Dormitory"] = "Dormitory";
})(HomesType || (HomesType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var homesTypeEncoder = generateEncoder(translations);
export var homesTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=homes_type.js.map