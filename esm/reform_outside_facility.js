var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ReformOutsideFacility;
(function (ReformOutsideFacility) {
    ReformOutsideFacility["Roof"] = "Roof";
    ReformOutsideFacility["ExteriorWall"] = "ExteriorWall";
})(ReformOutsideFacility || (ReformOutsideFacility = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReformOutsideFacility.Roof] = '屋根',
        _a[ReformOutsideFacility.ExteriorWall] = '外壁',
        _a),
    en: (_b = {},
        _b[ReformOutsideFacility.Roof] = 'Roof',
        _b[ReformOutsideFacility.ExteriorWall] = 'Exterior wall',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var reformOutsideFacilityEncoder = generateEncoder(translations);
export var reformOutsideFacilityDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=reform_outside_facility.js.map