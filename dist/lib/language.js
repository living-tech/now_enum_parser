"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageDecoder = exports.languageEncoder = exports.Language = void 0;
var Language;
(function (Language) {
    Language["ja"] = "ja";
    Language["en"] = "en";
})(Language = exports.Language || (exports.Language = {}));
var languageEncoder = function (lang) {
    switch (lang) {
        case Language.ja:
            return '日本語';
        case Language.en:
            return 'English';
        default:
            throw new Error('Invalid language');
    }
};
exports.languageEncoder = languageEncoder;
var languageDecoder = function (lang) {
    switch (lang) {
        case '日本語':
            return Language.ja;
        case 'English':
            return Language.en;
        default:
            throw new Error('Invalid language');
    }
};
exports.languageDecoder = languageDecoder;
//# sourceMappingURL=language.js.map