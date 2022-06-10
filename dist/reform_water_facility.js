"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reformWaterFacilityDecoder = exports.reformWaterFacilityEncoder = exports.ReformWaterFacility = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReformWaterFacility;
(function (ReformWaterFacility) {
    ReformWaterFacility["Kitchen"] = "Kitchen";
    ReformWaterFacility["Bathroom"] = "Bathroom";
    ReformWaterFacility["Toilet"] = "Toilet";
    ReformWaterFacility["Washroom"] = "Washroom";
    ReformWaterFacility["WaterHeater"] = "WaterHeater";
    ReformWaterFacility["WaterSupply"] = "WaterSupply";
})(ReformWaterFacility = exports.ReformWaterFacility || (exports.ReformWaterFacility = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReformWaterFacility.Kitchen] = 'キッチン',
        _a[ReformWaterFacility.Bathroom] = '浴室',
        _a[ReformWaterFacility.Toilet] = 'トイレ',
        _a[ReformWaterFacility.Washroom] = '洗面所',
        _a[ReformWaterFacility.WaterHeater] = '給湯器',
        _a[ReformWaterFacility.WaterSupply] = '給排水管',
        _a),
    en: (_b = {},
        _b[ReformWaterFacility.Kitchen] = 'Kitchen',
        _b[ReformWaterFacility.Bathroom] = 'Bathroom',
        _b[ReformWaterFacility.Toilet] = 'Toilet',
        _b[ReformWaterFacility.Washroom] = 'Washroom',
        _b[ReformWaterFacility.WaterHeater] = 'Water heater',
        _b[ReformWaterFacility.WaterSupply] = 'Water supply and drainage pipe',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.reformWaterFacilityEncoder = (0, generators_1.generateEncoder)(translations);
exports.reformWaterFacilityDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=reform_water_facility.js.map