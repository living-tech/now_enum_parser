var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var MessageType;
(function (MessageType) {
    MessageType["MoveIn"] = "MoveIn";
    MessageType["MoveOut"] = "MoveOut";
})(MessageType || (MessageType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MessageType.MoveIn] = '入居後メッセージ',
        _a[MessageType.MoveOut] = '退去後メッセージ',
        _a),
    en: (_b = {},
        _b[MessageType.MoveIn] = 'move in message',
        _b[MessageType.MoveOut] = 'move out message',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var messageTypeEncoder = generateEncoder(translations);
export var messageTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=message_type.js.map