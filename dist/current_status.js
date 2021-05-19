"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentStatusDecoder = exports.currentStatusEncoder = exports.CurrentStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var CurrentStatus;
(function (CurrentStatus) {
    CurrentStatus["Resident"] = "Resident";
    CurrentStatus["Empty"] = "Empty";
    CurrentStatus["Rent"] = "Rent";
    CurrentStatus["Unfinished"] = "Unfinished";
})(CurrentStatus = exports.CurrentStatus || (exports.CurrentStatus = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.currentStatusEncoder = generators_1.generateEncoder(translations);
exports.currentStatusDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=current_status.js.map