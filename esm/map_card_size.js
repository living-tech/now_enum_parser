var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var MapCardSize;
(function (MapCardSize) {
    MapCardSize["Large"] = "Large";
    MapCardSize["Small"] = "Small";
})(MapCardSize || (MapCardSize = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var mapCardSizeEncoder = generateEncoder(translations);
export var mapCardSizeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=map_card_size.js.map