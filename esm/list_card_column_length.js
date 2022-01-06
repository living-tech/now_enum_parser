var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ListCardColumnLength;
(function (ListCardColumnLength) {
    ListCardColumnLength["One"] = "One";
    ListCardColumnLength["Two"] = "Two";
})(ListCardColumnLength || (ListCardColumnLength = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var listCardColumnLengthEncoder = generateEncoder(translations);
export var listCardColumnLengthDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=list_card_column_length.js.map