"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReverseTranslations = function (translations) {
    var reverseTranslations = {};
    Object.keys(translations).forEach(function (lang) {
        var translation = translations[lang];
        reverseTranslations[lang] = {};
        Object.keys(translation).forEach(function (enumKey) {
            reverseTranslations[lang][translations[lang][enumKey]] = enumKey;
        });
    });
    return reverseTranslations;
};
exports.generateEncoder = function (translations) {
    return function (raw, lang) {
        if (typeof raw !== 'string') {
            throw new Error('Invalid enum.');
        }
        if (!translations[lang]) {
            throw new Error('No language.');
        }
        if (!translations[lang][raw]) {
            throw new Error('No translation');
        }
        return translations[lang][raw];
    };
};
exports.generateDecoder = function (reverseTranslations) {
    return function (text, lang) {
        if (typeof text !== 'string') {
            throw new Error('Invalid text.');
        }
        if (!reverseTranslations[lang]) {
            throw new Error('No language');
        }
        if (!reverseTranslations[lang][text]) {
            throw new Error('No translation');
        }
        return reverseTranslations[lang][text];
    };
};
//# sourceMappingURL=generators.js.map