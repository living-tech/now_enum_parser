"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.homesproKeyDeliveryTypeDecoder = exports.homesproKeyDeliveryTypeEncoder = exports.HomesproKeyDeliveryType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var HomesproKeyDeliveryType;
(function (HomesproKeyDeliveryType) {
    HomesproKeyDeliveryType["OurCompany"] = "OurCompany";
    HomesproKeyDeliveryType["Deposit"] = "Deposit";
    HomesproKeyDeliveryType["Local"] = "Local";
    HomesproKeyDeliveryType["Presence"] = "Presence";
    HomesproKeyDeliveryType["Other"] = "Other";
})(HomesproKeyDeliveryType = exports.HomesproKeyDeliveryType || (exports.HomesproKeyDeliveryType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[HomesproKeyDeliveryType.OurCompany] = '当社',
        _a[HomesproKeyDeliveryType.Deposit] = '預託',
        _a[HomesproKeyDeliveryType.Local] = '現地',
        _a[HomesproKeyDeliveryType.Presence] = '立会',
        _a[HomesproKeyDeliveryType.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[HomesproKeyDeliveryType.OurCompany] = 'Our company',
        _b[HomesproKeyDeliveryType.Deposit] = 'Deposit',
        _b[HomesproKeyDeliveryType.Local] = 'Local',
        _b[HomesproKeyDeliveryType.Presence] = 'Presence',
        _b[HomesproKeyDeliveryType.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.homesproKeyDeliveryTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.homesproKeyDeliveryTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=homespro_key_delivery_type.js.map