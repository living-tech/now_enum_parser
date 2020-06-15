"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageTypeDecoder = exports.messageTypeEncoder = exports.MessageType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var MessageType;
(function (MessageType) {
    MessageType["MoveIn"] = "MoveIn";
    MessageType["MoveOut"] = "MoveOut";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.messageTypeEncoder = generators_1.generateEncoder(translations);
exports.messageTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=message_type.js.map