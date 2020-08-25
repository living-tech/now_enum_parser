"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyDeliveryDecoder = exports.keyDeliveryEncoder = exports.KeyDelivery = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var KeyDelivery;
(function (KeyDelivery) {
    KeyDelivery["Direct"] = "Direct";
    KeyDelivery["Self"] = "Self";
    KeyDelivery["Unsupported"] = "Unsupported";
})(KeyDelivery = exports.KeyDelivery || (exports.KeyDelivery = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[KeyDelivery.Direct] = '接客内見',
        _a[KeyDelivery.Self] = 'セルフ内見',
        _a[KeyDelivery.Unsupported] = '対応不可',
        _a),
    en: (_b = {},
        _b[KeyDelivery.Direct] = 'direct',
        _b[KeyDelivery.Self] = 'self',
        _b[KeyDelivery.Unsupported] = 'unsupported',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.keyDeliveryEncoder = generators_1.generateEncoder(translations);
exports.keyDeliveryDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=key_delivery.js.map