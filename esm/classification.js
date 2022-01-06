var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Classification;
(function (Classification) {
    Classification["User"] = "User";
    Classification["Owner"] = "Owner";
    Classification["Agent"] = "Agent";
    Classification["Admin"] = "Admin";
})(Classification || (Classification = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var classificationEncoder = generateEncoder(translations);
export var classificationDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=classification.js.map