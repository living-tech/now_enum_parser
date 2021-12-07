"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentTypeDecoder = exports.equipmentTypeEncoder = exports.EquipmentType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var EquipmentType;
(function (EquipmentType) {
    EquipmentType["Internet"] = "Internet";
    EquipmentType["AutoLock"] = "AutoLock";
    EquipmentType["AirConditioner"] = "AirConditioner";
    EquipmentType["Closet"] = "Closet";
    EquipmentType["SeparateBathroomAndToilet"] = "SeparateBathroomAndToilet";
    EquipmentType["IndependentWashBasin"] = "IndependentWashBasin";
    EquipmentType["ParkingLotIncluded"] = "ParkingLotIncluded";
    EquipmentType["DeliveryBox"] = "DeliveryBox";
    EquipmentType["Pet"] = "Pet";
})(EquipmentType = exports.EquipmentType || (exports.EquipmentType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[EquipmentType.Internet] = 'インターネット',
        _a[EquipmentType.AutoLock] = 'オートロック',
        _a[EquipmentType.AirConditioner] = 'エアコン',
        _a[EquipmentType.Closet] = 'クローゼット',
        _a[EquipmentType.SeparateBathroomAndToilet] = 'バス・トイレ別',
        _a[EquipmentType.IndependentWashBasin] = '洗面所独立',
        _a[EquipmentType.ParkingLotIncluded] = '駐車場',
        _a[EquipmentType.DeliveryBox] = '宅配ボックス',
        _a[EquipmentType.Pet] = 'ペット',
        _a),
    en: (_b = {},
        _b[EquipmentType.Internet] = 'Internet',
        _b[EquipmentType.AutoLock] = 'AutoLock',
        _b[EquipmentType.AirConditioner] = 'AirConditioner',
        _b[EquipmentType.Closet] = 'Closet',
        _b[EquipmentType.SeparateBathroomAndToilet] = 'SeparateBathroomAndToilet',
        _b[EquipmentType.IndependentWashBasin] = 'IndependentWashBasin',
        _b[EquipmentType.ParkingLotIncluded] = 'ParkingLotIncluded',
        _b[EquipmentType.DeliveryBox] = 'DeliveryBox',
        _b[EquipmentType.Pet] = 'Pet',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.equipmentTypeEncoder = generators_1.generateEncoder(translations);
exports.equipmentTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=equipment_type.js.map