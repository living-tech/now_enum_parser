var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var PreviewGuide;
(function (PreviewGuide) {
    PreviewGuide["Direct"] = "Direct";
    PreviewGuide["Self"] = "Self";
    PreviewGuide["Unsupported"] = "Unsupported";
})(PreviewGuide || (PreviewGuide = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var previewGuideEncoder = generateEncoder(translations);
export var previewGuideDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=preview_guide.js.map