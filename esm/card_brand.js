var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var CardBrand;
(function (CardBrand) {
    CardBrand["AmericanExpress"] = "AmericanExpress";
    CardBrand["DinersClub"] = "DinersClub";
    CardBrand["Discover"] = "Discover";
    CardBrand["JCB"] = "JCB";
    CardBrand["MasterCard"] = "MasterCard";
    CardBrand["UnionPay"] = "UnionPay";
    CardBrand["Visa"] = "Visa";
    CardBrand["Unknown"] = "Unknown";
})(CardBrand || (CardBrand = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var cardBrandEncoder = generateEncoder(translations);
export var cardBrandDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=card_brand.js.map