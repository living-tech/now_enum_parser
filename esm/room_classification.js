var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var RoomClassification;
(function (RoomClassification) {
    RoomClassification["Private"] = "Private";
    RoomClassification["Share"] = "Share";
})(RoomClassification || (RoomClassification = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomClassification.Private] = '個室',
        _a[RoomClassification.Share] = '相部屋',
        _a),
    en: (_b = {},
        _b[RoomClassification.Private] = 'Private Room',
        _b[RoomClassification.Share] = 'Shared Room',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var roomClassificationEncoder = generateEncoder(translations);
export var roomClassificationDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=room_classification.js.map