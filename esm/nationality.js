var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Nationality;
(function (Nationality) {
    Nationality["Japan"] = "Japan";
    Nationality["Other"] = "Other";
})(Nationality || (Nationality = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Nationality.Japan] = '日本',
        _a[Nationality.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[Nationality.Japan] = 'Japan',
        _b[Nationality.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var nationalityEncoder = generateEncoder(translations);
export var nationalityDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=nationality.js.map