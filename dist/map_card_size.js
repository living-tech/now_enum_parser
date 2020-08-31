"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCardSizeDecoder = exports.mapCardSizeEncoder = exports.MapCardSize = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var MapCardSize;
(function (MapCardSize) {
    MapCardSize["Large"] = "Large";
    MapCardSize["Small"] = "Small";
})(MapCardSize = exports.MapCardSize || (exports.MapCardSize = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[MapCardSize.Large] = '大',
        _a[MapCardSize.Small] = '小',
        _a),
    en: (_b = {},
        _b[MapCardSize.Large] = 'large',
        _b[MapCardSize.Small] = 'small',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.mapCardSizeEncoder = generators_1.generateEncoder(translations);
exports.mapCardSizeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=map_card_size.js.map