var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Gender.Male] = '男性',
        _a[Gender.Female] = '女性',
        _a[Gender.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[Gender.Male] = 'male',
        _b[Gender.Female] = 'female',
        _b[Gender.Other] = 'other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var genderEncoder = generateEncoder(translations);
export var genderDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=gender.js.map