"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.placementDecoder = exports.placementEncoder = exports.Placement = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Placement;
(function (Placement) {
    Placement["PlacementNg"] = "PlacementNg";
    Placement["PlacementOkReprintNg"] = "PlacementOkReprintNg";
    Placement["PlacementOkReprintOk"] = "PlacementOkReprintOk";
    Placement["PlacementOkReprintAllOk"] = "PlacementOkReprintAllOk";
})(Placement = exports.Placement || (exports.Placement = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Placement.PlacementNg] = '客付け不可',
        _a[Placement.PlacementOkReprintNg] = '客付け可/広告転載不可(店頭紹介のみ可)',
        _a[Placement.PlacementOkReprintOk] = '客付け可/他社HPへの広告店転載可',
        _a[Placement.PlacementOkReprintAllOk] = "客付け可/LIFULL HOME'S、他社HPへの広告転載可",
        _a),
    en: (_b = {},
        _b[Placement.PlacementNg] = 'Placement Not Allowed',
        _b[Placement.PlacementOkReprintNg] = 'Placement OK/Advertisement Reprint Not Allowed',
        _b[Placement.PlacementOkReprintOk] = 'Placement OK/Advertisement Reprint OK',
        _b[Placement.PlacementOkReprintAllOk] = "Placement OK/Advertisement Reprint All OK",
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.placementEncoder = generators_1.generateEncoder(translations);
exports.placementDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=placement.js.map