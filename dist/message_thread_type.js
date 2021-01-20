"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageThreadTypeDecoder = exports.messageThreadTypeEncoder = exports.MessageThreadType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var MessageThreadType;
(function (MessageThreadType) {
    MessageThreadType["Offer"] = "Offer";
    MessageThreadType["Preview"] = "Preview";
    MessageThreadType["Contact"] = "Contact";
    MessageThreadType["Reserve"] = "Reserve";
})(MessageThreadType = exports.MessageThreadType || (exports.MessageThreadType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MessageThreadType.Offer] = '家賃交渉',
        _a[MessageThreadType.Preview] = '内見',
        _a[MessageThreadType.Contact] = '空室確認',
        _a[MessageThreadType.Reserve] = '予約',
        _a),
    en: (_b = {},
        _b[MessageThreadType.Offer] = 'offer',
        _b[MessageThreadType.Preview] = 'room preview',
        _b[MessageThreadType.Contact] = 'vacancy check',
        _b[MessageThreadType.Reserve] = 'reserve',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.messageThreadTypeEncoder = generators_1.generateEncoder(translations);
exports.messageThreadTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=message_thread_type.js.map