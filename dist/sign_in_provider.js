"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInProviderDecoder = exports.signInProviderEncoder = exports.SignInProvider = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var SignInProvider;
(function (SignInProvider) {
    SignInProvider["Password"] = "Password";
    SignInProvider["Phone"] = "Phone";
})(SignInProvider = exports.SignInProvider || (exports.SignInProvider = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[SignInProvider.Password] = 'パスワード',
        _a[SignInProvider.Phone] = '電話',
        _a),
    en: (_b = {},
        _b[SignInProvider.Password] = 'password',
        _b[SignInProvider.Phone] = 'phone',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.signInProviderEncoder = generators_1.generateEncoder(translations);
exports.signInProviderDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=sign_in_provider.js.map