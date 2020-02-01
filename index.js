define("lib/interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("lib/generators", ["require", "exports"], function (require, exports) {
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
});
define("gender", ["require", "exports", "lib/generators"], function (require, exports, generators_1) {
    "use strict";
    var _a, _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gender;
    (function (Gender) {
        Gender[Gender["MALE"] = 0] = "MALE";
        Gender[Gender["FEMALE"] = 1] = "FEMALE";
        Gender[Gender["OTHER"] = 2] = "OTHER";
    })(Gender = exports.Gender || (exports.Gender = {}));
    var translations = {
        ja: (_a = {},
            _a[Gender.MALE] = "男性",
            _a[Gender.FEMALE] = "女性",
            _a[Gender.OTHER] = "その他",
            _a),
        en: (_b = {},
            _b[Gender.MALE] = "male",
            _b[Gender.FEMALE] = "female",
            _b[Gender.OTHER] = "other",
            _b)
    };
    // DON'T EDIT BELOW
    var reverseTranslations = generators_1.generateReverseTranslations(translations);
    exports.encoder = generators_1.generateEncoder(translations);
    exports.decoder = generators_1.generateDecoder(reverseTranslations);
});
//# sourceMappingURL=index.js.map