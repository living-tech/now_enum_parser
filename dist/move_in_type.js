"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveInTypeDecoder = exports.moveInTypeEncoder = exports.MoveInType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var MoveInType;
(function (MoveInType) {
    MoveInType["Immediate"] = "Immediate";
    MoveInType["Consultation"] = "Consultation";
    MoveInType["SpecifyDueDate"] = "SpecifyDueDate";
})(MoveInType = exports.MoveInType || (exports.MoveInType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.moveInTypeEncoder = generators_1.generateEncoder(translations);
exports.moveInTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=move_in_type.js.map