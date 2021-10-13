var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var CurrentStatus;
(function (CurrentStatus) {
    CurrentStatus["Resident"] = "Resident";
    CurrentStatus["Empty"] = "Empty";
    CurrentStatus["Rent"] = "Rent";
    CurrentStatus["Unfinished"] = "Unfinished";
})(CurrentStatus || (CurrentStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CurrentStatus.Resident] = '居住中',
        _a[CurrentStatus.Empty] = '空家',
        _a[CurrentStatus.Rent] = '賃貸中',
        _a[CurrentStatus.Unfinished] = '未完成',
        _a),
    en: (_b = {},
        _b[CurrentStatus.Resident] = 'Resident',
        _b[CurrentStatus.Empty] = 'Empty',
        _b[CurrentStatus.Rent] = 'Rent',
        _b[CurrentStatus.Unfinished] = 'Unfinished',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var currentStatusEncoder = generateEncoder(translations);
export var currentStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=current_status.js.map