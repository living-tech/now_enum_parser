"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.petTypeDecoder = exports.petTypeEncoder = exports.PetType = void 0;
var generators_1 = require("./lib/generators");
var PetType;
(function (PetType) {
    PetType["SmallDog"] = "SmallDog";
    PetType["MiddleDog"] = "MiddleDog";
    PetType["LargeDog"] = "LargeDog";
    PetType["Cat"] = "Cat";
    PetType["Other"] = "Other";
})(PetType = exports.PetType || (exports.PetType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[PetType.SmallDog] = '小型犬',
        _a[PetType.MiddleDog] = '中型犬',
        _a[PetType.LargeDog] = '大型犬',
        _a[PetType.Cat] = '猫',
        _a[PetType.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[PetType.SmallDog] = 'SmallDog',
        _b[PetType.MiddleDog] = 'MiddleDog',
        _b[PetType.LargeDog] = 'LargeDog',
        _b[PetType.Cat] = 'Cat',
        _b[PetType.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.petTypeEncoder = generators_1.generateEncoder(translations);
exports.petTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=pet_type.js.map