var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var Placement;
(function (Placement) {
    Placement["PlacementNg"] = "PlacementNg";
    Placement["PlacementOkReprintNg"] = "PlacementOkReprintNg";
    Placement["PlacementOkReprintOk"] = "PlacementOkReprintOk";
    Placement["PlacementOkReprintAllOk"] = "PlacementOkReprintAllOk";
})(Placement || (Placement = {}));
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
        _b[Placement.PlacementOkReprintAllOk] = 'Placement OK/Advertisement Reprint All OK',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var placementEncoder = generateEncoder(translations);
export var placementDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=placement.js.map