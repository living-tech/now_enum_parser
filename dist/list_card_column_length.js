"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCardColumnLengthDecoder = exports.listCardColumnLengthEncoder = exports.ListCardColumnLength = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ListCardColumnLength;
(function (ListCardColumnLength) {
    ListCardColumnLength["One"] = "One";
    ListCardColumnLength["Two"] = "Two";
})(ListCardColumnLength = exports.ListCardColumnLength || (exports.ListCardColumnLength = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ListCardColumnLength.One] = '1列',
        _a[ListCardColumnLength.Two] = '2列',
        _a),
    en: (_b = {},
        _b[ListCardColumnLength.One] = '1 column',
        _b[ListCardColumnLength.Two] = '2 columns',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.listCardColumnLengthEncoder = (0, generators_1.generateEncoder)(translations);
exports.listCardColumnLengthDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=list_card_column_length.js.map