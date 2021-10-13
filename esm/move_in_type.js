var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var MoveInType;
(function (MoveInType) {
    MoveInType["Immediate"] = "Immediate";
    MoveInType["Consultation"] = "Consultation";
    MoveInType["SpecifyDueDate"] = "SpecifyDueDate";
})(MoveInType || (MoveInType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MoveInType.Immediate] = '即時',
        _a[MoveInType.Consultation] = '相談',
        _a[MoveInType.SpecifyDueDate] = '期日指定',
        _a),
    en: (_b = {},
        _b[MoveInType.Immediate] = 'Immediate',
        _b[MoveInType.Consultation] = 'Consultation',
        _b[MoveInType.SpecifyDueDate] = 'SpecifyDueDate',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var moveInTypeEncoder = generateEncoder(translations);
export var moveInTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=move_in_type.js.map