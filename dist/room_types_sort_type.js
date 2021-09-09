"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomTypesSortTypeDecoder = exports.roomTypesSortTypeEncoder = exports.RoomTypesSortType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RoomTypesSortType;
(function (RoomTypesSortType) {
    RoomTypesSortType["Default"] = "Default";
    RoomTypesSortType["ManageSourceAsc"] = "ManageSourceAsc";
    RoomTypesSortType["ManageSourceDesc"] = "ManageSourceDesc";
})(RoomTypesSortType = exports.RoomTypesSortType || (exports.RoomTypesSortType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomTypesSortTypeEncoder = generators_1.generateEncoder(translations);
exports.roomTypesSortTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_types_sort_type.js.map