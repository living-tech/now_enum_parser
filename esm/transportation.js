var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Transportation;
(function (Transportation) {
    Transportation["Walk"] = "Walk";
    Transportation["Car"] = "Car";
    Transportation["Bus"] = "Bus";
})(Transportation || (Transportation = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Transportation.Walk] = '徒歩',
        _a[Transportation.Car] = '車',
        _a[Transportation.Bus] = 'バス',
        _a),
    en: (_b = {},
        _b[Transportation.Walk] = 'Walk',
        _b[Transportation.Car] = 'Car',
        _b[Transportation.Bus] = 'Bus',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var transportationEncoder = generateEncoder(translations);
export var transportationDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=transportation.js.map