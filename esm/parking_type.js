var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ParkingType;
(function (ParkingType) {
    ParkingType["Available"] = "Available";
    ParkingType["Unavailable"] = "Unavailable";
    ParkingType["Nearby"] = "Nearby";
    ParkingType["None"] = "None";
})(ParkingType || (ParkingType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var parkingTypeEncoder = generateEncoder(translations);
export var parkingTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=parking_type.js.map