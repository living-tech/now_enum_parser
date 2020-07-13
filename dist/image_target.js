"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageTargetDecoder = exports.imageTargetEncoder = exports.ImageTarget = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ImageTarget;
(function (ImageTarget) {
    ImageTarget["Room"] = "Room";
    ImageTarget["Kitchen"] = "Kitchen";
    ImageTarget["Toilet"] = "Toilet";
    ImageTarget["Entrance"] = "Entrance";
    ImageTarget["Other"] = "Other";
})(ImageTarget = exports.ImageTarget || (exports.ImageTarget = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ImageTarget.Room] = '部屋',
        _a[ImageTarget.Kitchen] = 'キッチン',
        _a[ImageTarget.Toilet] = 'トイレ・風呂・洗面台',
        _a[ImageTarget.Entrance] = '玄関・バルコニー・景色',
        _a[ImageTarget.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[ImageTarget.Room] = 'Room',
        _b[ImageTarget.Kitchen] = 'Kitchen',
        _b[ImageTarget.Toilet] = 'Toilet, Bathroom, WashStand',
        _b[ImageTarget.Entrance] = 'Entrance, Balcony, Scenery',
        _b[ImageTarget.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.imageTargetEncoder = generators_1.generateEncoder(translations);
exports.imageTargetDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=image_target.js.map