"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentsDecoder = exports.equipmentsEncoder = exports.Equipments = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Equipments;
(function (Equipments) {
    Equipments["Internet"] = "Internet";
    Equipments["AutoLock"] = "AutoLock";
    Equipments["AirConditioner"] = "AirConditioner";
    Equipments["Closet"] = "Closet";
    Equipments["SeparateBathroomAndToilet"] = "SeparateBathroomAndToilet";
    Equipments["IndependentWashBasin"] = "IndependentWashBasin";
    Equipments["ParkingLotIncluded"] = "ParkingLotIncluded";
    Equipments["DeliveryBox"] = "DeliveryBox";
    Equipments["Pet"] = "Pet";
})(Equipments = exports.Equipments || (exports.Equipments = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Equipments.Internet] = 'インターネット',
        _a[Equipments.AutoLock] = 'オートロック',
        _a[Equipments.AirConditioner] = 'エアコン',
        _a[Equipments.Closet] = 'クローゼット',
        _a[Equipments.SeparateBathroomAndToilet] = 'バス・トイレ別',
        _a[Equipments.IndependentWashBasin] = '洗面所独立',
        _a[Equipments.ParkingLotIncluded] = '駐車場',
        _a[Equipments.DeliveryBox] = '宅配ボックス',
        _a[Equipments.Pet] = 'ペット',
        _a),
    en: (_b = {},
        _b[Equipments.Internet] = 'Internet',
        _b[Equipments.AutoLock] = 'AutoLock',
        _b[Equipments.AirConditioner] = 'AirConditioner',
        _b[Equipments.Closet] = 'Closet',
        _b[Equipments.SeparateBathroomAndToilet] = 'SeparateBathroomAndToilet',
        _b[Equipments.IndependentWashBasin] = 'IndependentWashBasin',
        _b[Equipments.ParkingLotIncluded] = 'ParkingLotIncluded',
        _b[Equipments.DeliveryBox] = 'DeliveryBox',
        _b[Equipments.Pet] = 'Pet',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.equipmentsEncoder = generators_1.generateEncoder(translations);
exports.equipmentsDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=equipments.js.map