"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.floorPlanDecoder = exports.floorPlanEncoder = exports.FloorPlan = void 0;
var generators_1 = require("./lib/generators");
var FloorPlan;
(function (FloorPlan) {
    FloorPlan["JapaneseStyle"] = "Japanese Style";
    FloorPlan["WesternStyle"] = "Western Style";
    FloorPlan["DK"] = "DK";
    FloorPlan["LDK"] = "LDK";
    FloorPlan["L"] = "L";
    FloorPlan["D"] = "D";
    FloorPlan["K"] = "K";
    FloorPlan["Other"] = "Other";
    FloorPlan["LK"] = "LK";
    FloorPlan["LD"] = "LD";
    FloorPlan["S"] = "S";
})(FloorPlan = exports.FloorPlan || (exports.FloorPlan = {}));
// Edit contexts
var translations = {
    // 【改REINS】1:和室 2:洋室 3:DK 4:LDK 5:L 6:D 7:K 9:その他 21:LK 22:LD 23:S
    ja: (_a = {},
        _a[FloorPlan.JapaneseStyle] = '和室',
        _a[FloorPlan.WesternStyle] = '洋室',
        _a[FloorPlan.DK] = 'DK',
        _a[FloorPlan.LDK] = 'LDK',
        _a[FloorPlan.L] = 'L',
        _a[FloorPlan.D] = 'D',
        _a[FloorPlan.K] = 'K',
        _a[FloorPlan.Other] = 'その他',
        _a[FloorPlan.LK] = 'LK',
        _a[FloorPlan.LD] = 'LD',
        _a[FloorPlan.S] = 'S',
        _a),
    en: (_b = {},
        _b[FloorPlan.JapaneseStyle] = 'Japanese-style',
        _b[FloorPlan.WesternStyle] = 'Western-style',
        _b[FloorPlan.DK] = 'DK',
        _b[FloorPlan.LDK] = 'LDK',
        _b[FloorPlan.L] = 'L',
        _b[FloorPlan.D] = 'D',
        _b[FloorPlan.K] = 'K',
        _b[FloorPlan.Other] = 'Other',
        _b[FloorPlan.LK] = 'LK',
        _b[FloorPlan.LD] = 'LD',
        _b[FloorPlan.S] = 'S',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.floorPlanEncoder = generators_1.generateEncoder(translations);
exports.floorPlanDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=floor_plan.js.map