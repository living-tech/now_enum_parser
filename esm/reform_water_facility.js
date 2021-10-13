var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ReformWaterFacility;
(function (ReformWaterFacility) {
    ReformWaterFacility["Kitchen"] = "Kitchen";
    ReformWaterFacility["Bathroom"] = "Bathroom";
    ReformWaterFacility["Toilet"] = "Toilet";
    ReformWaterFacility["Washroom"] = "Washroom";
    ReformWaterFacility["WaterHeater"] = "WaterHeater";
    ReformWaterFacility["WaterSupply"] = "WaterSupply";
})(ReformWaterFacility || (ReformWaterFacility = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var reformWaterFacilityEncoder = generateEncoder(translations);
export var reformWaterFacilityDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=reform_water_facility.js.map