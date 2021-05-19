"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokuyuchinTypeDecoder = exports.tokuyuchinTypeEncoder = exports.TokuyuchinType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TokuyuchinType;
(function (TokuyuchinType) {
    TokuyuchinType["InclinedType"] = "InclinedType";
    TokuyuchinType["FlatType"] = "FlatType";
})(TokuyuchinType = exports.TokuyuchinType || (exports.TokuyuchinType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.tokuyuchinTypeEncoder = generators_1.generateEncoder(translations);
exports.tokuyuchinTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=tokuyuchin_type.js.map