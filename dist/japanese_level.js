"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.japaneseLevelDecoder = exports.japaneseLevelEncoder = exports.JapaneseLevel = void 0;
var generators_1 = require("./lib/generators");
var JapaneseLevel;
(function (JapaneseLevel) {
    JapaneseLevel["Level1"] = "Level1";
    JapaneseLevel["Level2"] = "Level2";
    JapaneseLevel["Level3"] = "Level3";
})(JapaneseLevel = exports.JapaneseLevel || (exports.JapaneseLevel = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[JapaneseLevel.Level1] = '日常会話ができる',
        _a[JapaneseLevel.Level2] = '片言で会話ができる',
        _a[JapaneseLevel.Level3] = '全く会話ができない',
        _a),
    en: (_b = {},
        _b[JapaneseLevel.Level1] = 'Level1',
        _b[JapaneseLevel.Level2] = 'Level2',
        _b[JapaneseLevel.Level3] = 'Level3',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.japaneseLevelEncoder = generators_1.generateEncoder(translations);
exports.japaneseLevelDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=japanese_level.js.map