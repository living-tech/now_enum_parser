"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reformOutsideFacilityDecoder = exports.reformOutsideFacilityEncoder = exports.ReformOutsideFacility = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReformOutsideFacility;
(function (ReformOutsideFacility) {
    ReformOutsideFacility["Roof"] = "Roof";
    ReformOutsideFacility["ExteriorWall"] = "ExteriorWall";
})(ReformOutsideFacility = exports.ReformOutsideFacility || (exports.ReformOutsideFacility = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReformOutsideFacility.Roof] = '屋根',
        _a[ReformOutsideFacility.ExteriorWall] = '外壁',
        _a),
    en: (_b = {},
        _b[ReformOutsideFacility.Roof] = 'Roof',
        _b[ReformOutsideFacility.ExteriorWall] = 'Exterior wall',
        _b)
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.reformOutsideFacilityEncoder = generators_1.generateEncoder(translations);
exports.reformOutsideFacilityDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=reform_outside_facility.js.map