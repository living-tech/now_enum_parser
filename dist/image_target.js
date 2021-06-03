"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTargetDecoder = exports.imageTargetEncoder = exports.ImageTarget = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ImageTarget;
(function (ImageTarget) {
    ImageTarget["PrivateRoom"] = "PrivateRoom";
    ImageTarget["ShareRoom"] = "ShareRoom";
    ImageTarget["PrivateKitchen"] = "PrivateKitchen";
    ImageTarget["ShareKitchen"] = "ShareKitchen";
    ImageTarget["PrivateToilet"] = "PrivateToilet";
    ImageTarget["ShareToilet"] = "ShareToilet";
    ImageTarget["PrivateEntrance"] = "PrivateEntrance";
    ImageTarget["ShareEntrance"] = "ShareEntrance";
    ImageTarget["PrivateOther"] = "PrivateOther";
    ImageTarget["ShareOther"] = "ShareOther";
    ImageTarget["PrivateNone"] = "PrivateNone";
    ImageTarget["ShareNone"] = "ShareNone";
    ImageTarget["FloorPlan"] = "FloorPlan";
    ImageTarget["KeyVisual"] = "KeyVisual";
    ImageTarget["ExteriorMapSurroundingsOther"] = "ExteriorMapSurroundingsOther";
    ImageTarget["DoorBalcony"] = "DoorBalcony";
    ImageTarget["ToiletBathWashbasin"] = "ToiletBathWashbasin";
    ImageTarget["EntranceParkingLot"] = "EntranceParkingLot";
})(ImageTarget = exports.ImageTarget || (exports.ImageTarget = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ImageTarget.PrivateRoom] = '専有部 - 部屋',
        _a[ImageTarget.ShareRoom] = '共有部 - 部屋',
        _a[ImageTarget.PrivateKitchen] = '専有部 - キッチン',
        _a[ImageTarget.ShareKitchen] = '共有部 - キッチン',
        _a[ImageTarget.PrivateToilet] = '専有部 - トイレ・風呂・洗面台',
        _a[ImageTarget.ShareToilet] = '共有部 - トイレ・風呂・洗面台',
        _a[ImageTarget.PrivateEntrance] = '専有部 - 玄関・バルコニー・景色',
        _a[ImageTarget.ShareEntrance] = '共有部 - 玄関・バルコニー・景色',
        _a[ImageTarget.PrivateOther] = '専有部 - その他',
        _a[ImageTarget.ShareOther] = '共有部 - その他',
        _a[ImageTarget.PrivateNone] = '専有部 - 区分なし',
        _a[ImageTarget.ShareNone] = '共有部 - 区分なし',
        _a[ImageTarget.FloorPlan] = '間取り',
        _a[ImageTarget.KeyVisual] = 'KV',
        // 1:間取 2:外観 3:地図 4:周辺 5:内装 9:その他画像 10:玄関 11:居間  12:キッチン 13:寝室 14:子供部屋
        // 15:風呂 16:トイレ 17:洗面 18:収納 19:設備 20:バルコニー 21:エントランス 22:駐車場
        _a[ImageTarget.ExteriorMapSurroundingsOther] = '外観・地図・周辺・その他画像',
        _a[ImageTarget.DoorBalcony] = '専有部 - 玄関・バルコニー',
        _a[ImageTarget.ToiletBathWashbasin] = '専有部 - トイレ・風呂・洗面',
        _a[ImageTarget.EntranceParkingLot] = '共有部 - エントランス・駐車場',
        _a),
    en: (_b = {},
        _b[ImageTarget.PrivateRoom] = 'Private - Room',
        _b[ImageTarget.ShareRoom] = 'Public - Room',
        _b[ImageTarget.PrivateKitchen] = 'Private - Kitchen',
        _b[ImageTarget.ShareKitchen] = 'Public - Kitchen',
        _b[ImageTarget.PrivateToilet] = 'Private - Toilet, Bathroom, WashStand',
        _b[ImageTarget.ShareToilet] = 'Public - Toilet, Bathroom, WashStand',
        _b[ImageTarget.PrivateEntrance] = 'Private - Entrance, Balcony, Scenery',
        _b[ImageTarget.ShareEntrance] = 'Public - Entrance, Balcony, Scenery',
        _b[ImageTarget.PrivateOther] = 'Private - Other',
        _b[ImageTarget.ShareOther] = 'Public - Other',
        _b[ImageTarget.PrivateNone] = 'Private - None',
        _b[ImageTarget.ShareNone] = 'Public - None',
        _b[ImageTarget.FloorPlan] = 'Floor Plan',
        _b[ImageTarget.KeyVisual] = 'KV',
        _b[ImageTarget.ExteriorMapSurroundingsOther] = 'Exterior, Map, Surroundings, Other',
        _b[ImageTarget.DoorBalcony] = 'Private - Door, Balcony',
        _b[ImageTarget.ToiletBathWashbasin] = 'Private - Toilet, Bath, Washbasin',
        _b[ImageTarget.EntranceParkingLot] = 'Public - Entrance, Parking Lot',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.imageTargetEncoder = generators_1.generateEncoder(translations);
exports.imageTargetDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=image_target.js.map