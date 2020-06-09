"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
// DBにすでに存在する値に合わせる
var BusinessTypeAlias;
(function (BusinessTypeAlias) {
    BusinessTypeAlias["ServiceApartment"] = "service-apartment";
    BusinessTypeAlias["Hotel"] = "hotel";
    BusinessTypeAlias["GuestHouse"] = "guest-house";
    BusinessTypeAlias["ShareHouse"] = "share-house";
})(BusinessTypeAlias = exports.BusinessTypeAlias || (exports.BusinessTypeAlias = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[BusinessTypeAlias.ServiceApartment] = 'マンスリー賃貸',
        _a[BusinessTypeAlias.Hotel] = 'ホテル',
        _a[BusinessTypeAlias.GuestHouse] = 'ゲストハウス',
        _a[BusinessTypeAlias.ShareHouse] = 'シェアハウス',
        _a),
    en: (_b = {},
        _b[BusinessTypeAlias.ServiceApartment] = 'MONTHLY LEASE',
        _b[BusinessTypeAlias.Hotel] = 'HOTEL',
        _b[BusinessTypeAlias.GuestHouse] = 'GUEST HOUSE',
        _b[BusinessTypeAlias.ShareHouse] = 'SHARE HOUSE',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.businessTypeAliasEncoder = generators_1.generateEncoder(translations);
exports.businessTypeAliasDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=business_type_alias.js.map