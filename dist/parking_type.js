"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkingTypeDecoder = exports.parkingTypeEncoder = exports.ParkingType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ParkingType;
(function (ParkingType) {
    ParkingType["Available"] = "Available";
    ParkingType["Unavailable"] = "Unavailable";
    ParkingType["Nearby"] = "Nearby";
    ParkingType["None"] = "None";
})(ParkingType = exports.ParkingType || (exports.ParkingType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ParkingType.Available] = '空有',
        _a[ParkingType.Unavailable] = '空無',
        _a[ParkingType.Nearby] = '近隣',
        _a[ParkingType.None] = '無',
        _a),
    en: (_b = {},
        _b[ParkingType.Available] = 'Available',
        _b[ParkingType.Unavailable] = 'Unavailable',
        _b[ParkingType.Nearby] = 'Nearby',
        _b[ParkingType.None] = 'None',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.parkingTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.parkingTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=parking_type.js.map