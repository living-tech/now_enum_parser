"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyDeliveryDecoder = exports.keyDeliveryEncoder = exports.KeyDelivery = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var KeyDelivery;
(function (KeyDelivery) {
    KeyDelivery["Direct"] = "Direct";
    KeyDelivery["Noncontact"] = "Noncontact";
    KeyDelivery["SmartLock"] = "SmartLock";
    KeyDelivery["Other"] = "Other";
})(KeyDelivery = exports.KeyDelivery || (exports.KeyDelivery = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[KeyDelivery.Direct] = '直接お渡し',
        _a[KeyDelivery.Noncontact] = '非接触受け渡し',
        _a[KeyDelivery.SmartLock] = 'スマートロック',
        _a[KeyDelivery.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[KeyDelivery.Direct] = 'direct',
        _b[KeyDelivery.Noncontact] = 'noncontact',
        _b[KeyDelivery.SmartLock] = 'smart lock',
        _b[KeyDelivery.Other] = 'other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.keyDeliveryEncoder = generators_1.generateEncoder(translations);
exports.keyDeliveryDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=key_delivery.js.map