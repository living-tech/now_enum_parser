"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardBrandDecoder = exports.cardBrandEncoder = exports.CardBrand = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CardBrand;
(function (CardBrand) {
    CardBrand["AmericanExpress"] = "AmericanExpress";
    CardBrand["DinersClub"] = "DinersClub";
    CardBrand["Discover"] = "Discover";
    CardBrand["JCB"] = "JCB";
    CardBrand["MasterCard"] = "MasterCard";
    CardBrand["UnionPay"] = "UnionPay";
    CardBrand["Visa"] = "Visa";
    CardBrand["Unknown"] = "Unknown";
})(CardBrand = exports.CardBrand || (exports.CardBrand = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CardBrand.AmericanExpress] = 'American Express',
        _a[CardBrand.DinersClub] = 'Diners Club',
        _a[CardBrand.Discover] = 'Discover',
        _a[CardBrand.JCB] = 'JCB',
        _a[CardBrand.MasterCard] = 'MasterCard',
        _a[CardBrand.UnionPay] = 'UnionPay',
        _a[CardBrand.Visa] = 'Visa',
        _a[CardBrand.Unknown] = 'Unknown',
        _a),
    en: (_b = {},
        _b[CardBrand.AmericanExpress] = 'American Express',
        _b[CardBrand.DinersClub] = 'Diners Club',
        _b[CardBrand.Discover] = 'Discover',
        _b[CardBrand.JCB] = 'JCB',
        _b[CardBrand.MasterCard] = 'MasterCard',
        _b[CardBrand.UnionPay] = 'UnionPay',
        _b[CardBrand.Visa] = 'Visa',
        _b[CardBrand.Unknown] = 'Unknown',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.cardBrandEncoder = generators_1.generateEncoder(translations);
exports.cardBrandDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=card_brand.js.map