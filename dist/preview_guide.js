"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewGuideDecoder = exports.previewGuideEncoder = exports.PreviewGuide = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var PreviewGuide;
(function (PreviewGuide) {
    PreviewGuide["Direct"] = "Direct";
    PreviewGuide["Self"] = "Self";
    PreviewGuide["Unsupported"] = "Unsupported";
})(PreviewGuide = exports.PreviewGuide || (exports.PreviewGuide = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PreviewGuide.Direct] = '接客内見',
        _a[PreviewGuide.Self] = 'セルフ内見',
        _a[PreviewGuide.Unsupported] = '対応不可',
        _a),
    en: (_b = {},
        _b[PreviewGuide.Direct] = 'direct',
        _b[PreviewGuide.Self] = 'self',
        _b[PreviewGuide.Unsupported] = 'unsupported',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.previewGuideEncoder = (0, generators_1.generateEncoder)(translations);
exports.previewGuideDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=preview_guide.js.map