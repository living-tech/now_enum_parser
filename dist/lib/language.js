"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language["JAPANESE"] = "ja";
    Language["ENGLISH"] = "en";
})(Language = exports.Language || (exports.Language = {}));
exports.languageEncoder = function (lang) {
    switch (lang) {
        case Language.JAPANESE:
            return '日本語';
        case Language.ENGLISH:
            return 'English';
        default:
            throw new Error('Invalid language');
    }
};
exports.languageDecoder = function (lang) {
    switch (lang) {
        case '日本語':
            return Language.JAPANESE;
        case 'English':
            return Language.ENGLISH;
        default:
            throw new Error('Invalid language');
    }
};
//# sourceMappingURL=language.js.map