var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Orientation;
(function (Orientation) {
    Orientation["North"] = "North";
    Orientation["Northeast"] = "Northeast";
    Orientation["East"] = "East";
    Orientation["Southeast"] = "Southeast";
    Orientation["South"] = "South";
    Orientation["Southwest"] = "Southwest";
    Orientation["West"] = "West";
    Orientation["Northwest"] = "Northwest";
})(Orientation || (Orientation = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Orientation.North] = '北',
        _a[Orientation.Northeast] = '北東',
        _a[Orientation.East] = '東',
        _a[Orientation.Southeast] = '南東',
        _a[Orientation.South] = '南',
        _a[Orientation.Southwest] = '南西',
        _a[Orientation.West] = '西',
        _a[Orientation.Northwest] = '北西',
        _a),
    en: (_b = {},
        _b[Orientation.North] = 'North',
        _b[Orientation.Northeast] = 'Northeast',
        _b[Orientation.East] = 'East',
        _b[Orientation.Southeast] = 'Southeast',
        _b[Orientation.South] = 'South',
        _b[Orientation.Southwest] = 'Southwest',
        _b[Orientation.West] = 'West',
        _b[Orientation.Northwest] = 'Northwest',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var orientationEncoder = generateEncoder(translations);
export var orientationDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=orientation.js.map