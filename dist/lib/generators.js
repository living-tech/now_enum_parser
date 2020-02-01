"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReverseTranslations = function (translations) {
    var reverseTranslations = {};
    Object.keys(translations).forEach(function (lang) {
        var translation = translations[lang];
        reverseTranslations[lang] = {};
        Object.keys(translation).forEach(function (enumKey) {
            reverseTranslations[lang][translations[lang][Number(enumKey)]] = enumKey;
        });
    });
    return reverseTranslations;
};
exports.generateEncoder = function (translations) {
    return function (raw, lang) {
        return translations[lang][raw];
    };
};
exports.generateDecoder = function (reverseTranslations) {
    return function (text, lang) {
        return Number(reverseTranslations[lang][text]);
    };
};
//# sourceMappingURL=generators.js.map