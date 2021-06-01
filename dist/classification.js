"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.classificationDecoder = exports.classificationEncoder = exports.Classification = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Classification;
(function (Classification) {
    Classification["User"] = "User";
    Classification["Owner"] = "Owner";
    Classification["Agent"] = "Agent";
    Classification["Admin"] = "Admin";
})(Classification = exports.Classification || (exports.Classification = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Classification.User] = 'ユーザー',
        _a[Classification.Owner] = 'オーナー',
        _a[Classification.Agent] = '仲介者',
        _a[Classification.Admin] = '管理者',
        _a),
    en: (_b = {},
        _b[Classification.User] = 'User',
        _b[Classification.Owner] = 'Owner',
        _b[Classification.Agent] = 'Agent',
        _b[Classification.Admin] = 'Admin',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.classificationEncoder = generators_1.generateEncoder(translations);
exports.classificationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=classification.js.map