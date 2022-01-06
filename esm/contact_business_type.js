var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var ContactBusinessType;
(function (ContactBusinessType) {
    ContactBusinessType["Rent"] = "Rent";
    ContactBusinessType["MonthlyRental"] = "MonthlyRental";
    ContactBusinessType["Hotel"] = "Hotel";
    ContactBusinessType["Ryokan"] = "Ryokan";
    ContactBusinessType["GuestHouse"] = "GuestHouse";
    ContactBusinessType["ShareHouse"] = "ShareHouse";
    ContactBusinessType["Minpaku"] = "Minpaku";
    ContactBusinessType["Other"] = "Other";
})(ContactBusinessType || (ContactBusinessType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ContactBusinessType.Rent] = '賃貸',
        _a[ContactBusinessType.MonthlyRental] = 'マンスリー賃貸',
        _a[ContactBusinessType.Hotel] = 'ホテル',
        _a[ContactBusinessType.Ryokan] = '旅館',
        _a[ContactBusinessType.GuestHouse] = 'ゲストハウス',
        _a[ContactBusinessType.ShareHouse] = 'シェアハウス',
        _a[ContactBusinessType.Minpaku] = '民泊',
        _a[ContactBusinessType.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[ContactBusinessType.Rent] = 'Rent',
        _b[ContactBusinessType.MonthlyRental] = 'Monthly Rental',
        _b[ContactBusinessType.Hotel] = 'Hotel',
        _b[ContactBusinessType.Ryokan] = 'Ryokan',
        _b[ContactBusinessType.GuestHouse] = 'Guest House',
        _b[ContactBusinessType.ShareHouse] = 'Share House',
        _b[ContactBusinessType.Minpaku] = 'Minpaku',
        _b[ContactBusinessType.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var contactBussinessTypeEncoder = generateEncoder(translations);
export var contactBussinessTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=contact_business_type.js.map