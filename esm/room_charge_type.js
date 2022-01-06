var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var RoomChargeType;
(function (RoomChargeType) {
    RoomChargeType["ByRoom"] = "ByRoom";
    RoomChargeType["ByPerson"] = "ByPerson";
    RoomChargeType["None"] = "None";
})(RoomChargeType || (RoomChargeType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomChargeType.ByRoom] = 'ルームチャージ型',
        _a[RoomChargeType.ByPerson] = '一人単価型',
        _a[RoomChargeType.None] = '区分なし',
        _a),
    en: (_b = {},
        _b[RoomChargeType.ByRoom] = 'Charge per Room',
        _b[RoomChargeType.ByPerson] = 'Charge per Person',
        _b[RoomChargeType.None] = 'No Classification',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var roomChargeTypeEncoder = generateEncoder(translations);
export var roomChargeTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=room_charge_type.js.map