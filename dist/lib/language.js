"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language["Ja"] = "ja";
    Language["En"] = "en";
})(Language = exports.Language || (exports.Language = {}));
exports.languageEncoder = function (lang) {
    switch (lang) {
        case Language.Ja:
            return '日本語';
        case Language.En:
            return 'English';
        default:
            throw new Error('Invalid language');
    }
};
exports.languageDecoder = function (lang) {
    switch (lang) {
        case '日本語':
            return Language.Ja;
        case 'English':
            return Language.En;
        default:
            throw new Error('Invalid language');
    }
};
//# sourceMappingURL=language.js.map