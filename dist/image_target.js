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
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.imageTargetEncoder = (0, generators_1.generateEncoder)(translations);
exports.imageTargetDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=image_target.js.map