"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDecoder = exports.generateEncoder = exports.generateReverseTranslations = void 0;
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
            console.error('No translation');
            return raw;
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
            console.error('No translation');
            return text;
        }
        return reverseTranslations[lang][text];
    };
};
//# sourceMappingURL=generators.js.map