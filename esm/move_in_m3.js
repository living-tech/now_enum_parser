var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var MoveInM3;
(function (MoveInM3) {
    MoveInM3["Early"] = "Early";
    MoveInM3["Mid"] = "Mid";
    MoveInM3["Late"] = "Late";
})(MoveInM3 || (MoveInM3 = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MoveInM3.Early] = '上旬',
        _a[MoveInM3.Mid] = '中旬',
        _a[MoveInM3.Late] = '下旬',
        _a),
    en: (_b = {},
        _b[MoveInM3.Early] = 'Early',
        _b[MoveInM3.Mid] = 'Mid',
        _b[MoveInM3.Late] = 'Late',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var moveInM3Encoder = generateEncoder(translations);
export var moveInM3Decoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=move_in_m3.js.map