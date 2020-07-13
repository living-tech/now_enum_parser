"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageClassificationDecoder = exports.imageClassificationEncoder = exports.ImageClassification = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ImageClassification;
(function (ImageClassification) {
    ImageClassification["Private"] = "Private";
    ImageClassification["Share"] = "Share";
})(ImageClassification = exports.ImageClassification || (exports.ImageClassification = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ImageClassification.Private] = '専有部',
        _a[ImageClassification.Share] = '共有部',
        _a),
    en: (_b = {},
        _b[ImageClassification.Private] = 'Private Part',
        _b[ImageClassification.Share] = 'Shared Part',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.imageClassificationEncoder = generators_1.generateEncoder(translations);
exports.imageClassificationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=image_classification.js.map