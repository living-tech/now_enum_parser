"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language["ja"] = "ja";
    Language["en"] = "en";
})(Language = exports.Language || (exports.Language = {}));
exports.languageEncoder = function (lang) {
    switch (lang) {
        case Language.ja:
            return '日本語';
        case Language.en:
            return 'English';
        default:
            throw new Error('Invalid language');
    }
};
exports.languageDecoder = function (lang) {
    switch (lang) {
        case '日本語':
            return Language.ja;
        case 'English':
            return Language.en;
        default:
            throw new Error('Invalid language');
    }
};
//# sourceMappingURL=language.js.map