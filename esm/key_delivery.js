var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var KeyDelivery;
(function (KeyDelivery) {
    KeyDelivery["Direct"] = "Direct";
    KeyDelivery["Noncontact"] = "Noncontact";
    KeyDelivery["SmartLock"] = "SmartLock";
    KeyDelivery["Other"] = "Other";
})(KeyDelivery || (KeyDelivery = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var keyDeliveryEncoder = generateEncoder(translations);
export var keyDeliveryDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=key_delivery.js.map