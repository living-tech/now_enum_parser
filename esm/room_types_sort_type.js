var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var RoomTypesSortType;
(function (RoomTypesSortType) {
    RoomTypesSortType["Default"] = "Default";
    RoomTypesSortType["ManageSourceAsc"] = "ManageSourceAsc";
    RoomTypesSortType["ManageSourceDesc"] = "ManageSourceDesc";
})(RoomTypesSortType || (RoomTypesSortType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomTypesSortType.ManageSourceAsc] = '在庫連携物件を後方にソート',
        _a[RoomTypesSortType.ManageSourceDesc] = '在庫連携物件を前方にソート',
        _a),
    en: (_b = {},
        _b[RoomTypesSortType.ManageSourceAsc] = 'Manage Source Asc',
        _b[RoomTypesSortType.ManageSourceDesc] = 'Manage Source Desc',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var roomTypesSortTypeEncoder = generateEncoder(translations);
export var roomTypesSortTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=room_types_sort_type.js.map