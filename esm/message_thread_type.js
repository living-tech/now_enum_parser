var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var MessageThreadType;
(function (MessageThreadType) {
    MessageThreadType["Offer"] = "Offer";
    MessageThreadType["Preview"] = "Preview";
    MessageThreadType["Contact"] = "Contact";
    MessageThreadType["Reserve"] = "Reserve";
})(MessageThreadType || (MessageThreadType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var messageThreadTypeEncoder = generateEncoder(translations);
export var messageThreadTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=message_thread_type.js.map