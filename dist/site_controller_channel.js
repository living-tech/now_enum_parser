"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteControllerChannelDecoder = exports.siteControllerChannelEncoder = exports.SiteControllerChannel = void 0;
var generators_1 = require("./lib/generators");
var SiteControllerChannel;
(function (SiteControllerChannel) {
    SiteControllerChannel["None"] = "None";
    SiteControllerChannel["Temairazu"] = "Temairazu";
    SiteControllerChannel["Tllincoln"] = "Tllincoln";
})(SiteControllerChannel = exports.SiteControllerChannel || (exports.SiteControllerChannel = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[SiteControllerChannel.None] = '利用しない',
        _a[SiteControllerChannel.Temairazu] = '手間いらず',
        _a[SiteControllerChannel.Tllincoln] = 'TLリンカーン',
        _a),
    en: (_b = {},
        _b[SiteControllerChannel.None] = 'None',
        _b[SiteControllerChannel.Temairazu] = 'Temairazu',
        _b[SiteControllerChannel.Tllincoln] = 'TL-Lincoln',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.siteControllerChannelEncoder = generators_1.generateEncoder(translations);
exports.siteControllerChannelDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=site_controller_channel.js.map