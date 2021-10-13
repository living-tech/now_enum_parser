var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var SiteControllerChannel;
(function (SiteControllerChannel) {
    SiteControllerChannel["None"] = "None";
    SiteControllerChannel["Temairazu"] = "Temairazu";
})(SiteControllerChannel || (SiteControllerChannel = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[SiteControllerChannel.None] = '利用しない',
        _a[SiteControllerChannel.Temairazu] = '手間いらず',
        _a),
    en: (_b = {},
        _b[SiteControllerChannel.None] = 'None',
        _b[SiteControllerChannel.Temairazu] = 'Temairazu',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var siteControllerChannelEncoder = generateEncoder(translations);
export var siteControllerChannelDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=site_controller_channel.js.map