var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TokuyuchinType;
(function (TokuyuchinType) {
    TokuyuchinType["InclinedType"] = "InclinedType";
    TokuyuchinType["FlatType"] = "FlatType";
})(TokuyuchinType || (TokuyuchinType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TokuyuchinType.InclinedType] = '傾斜型',
        _a[TokuyuchinType.FlatType] = 'フラット型',
        _a),
    en: (_b = {},
        _b[TokuyuchinType.InclinedType] = 'Inclined type',
        _b[TokuyuchinType.FlatType] = 'Flat type',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var tokuyuchinTypeEncoder = generateEncoder(translations);
export var tokuyuchinTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=tokuyuchin_type.js.map