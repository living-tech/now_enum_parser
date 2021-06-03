"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.floorPlanDecoder = exports.floorPlanEncoder = exports.FloorPlan = void 0;
var generators_1 = require("./lib/generators");
var FloorPlan;
(function (FloorPlan) {
    FloorPlan["JapaneseStyle"] = "JapaneseStyle";
    FloorPlan["WesternStyle"] = "WesternStyle";
    FloorPlan["Dk"] = "Dk";
    FloorPlan["Ldk"] = "Ldk";
    FloorPlan["L"] = "L";
    FloorPlan["D"] = "D";
    FloorPlan["K"] = "K";
    FloorPlan["Other"] = "Other";
    FloorPlan["Lk"] = "Lk";
    FloorPlan["Ld"] = "Ld";
    FloorPlan["S"] = "S";
})(FloorPlan = exports.FloorPlan || (exports.FloorPlan = {}));
// Edit contexts
var translations = {
    // 【改REINS】1:和室 2:洋室 3:DK 4:LDK 5:L 6:D 7:K 9:その他 21:LK 22:LD 23:S
    ja: (_a = {},
        _a[FloorPlan.JapaneseStyle] = '和室',
        _a[FloorPlan.WesternStyle] = '洋室',
        _a[FloorPlan.Dk] = 'DK',
        _a[FloorPlan.Ldk] = 'LDK',
        _a[FloorPlan.L] = 'L',
        _a[FloorPlan.D] = 'D',
        _a[FloorPlan.K] = 'K',
        _a[FloorPlan.Other] = 'その他',
        _a[FloorPlan.Lk] = 'LK',
        _a[FloorPlan.Ld] = 'LD',
        _a[FloorPlan.S] = 'S',
        _a),
    en: (_b = {},
        _b[FloorPlan.JapaneseStyle] = 'Japanese-style',
        _b[FloorPlan.WesternStyle] = 'Western-style',
        _b[FloorPlan.Dk] = 'DK',
        _b[FloorPlan.Ldk] = 'LDK',
        _b[FloorPlan.L] = 'L',
        _b[FloorPlan.D] = 'D',
        _b[FloorPlan.K] = 'K',
        _b[FloorPlan.Other] = 'Other',
        _b[FloorPlan.Lk] = 'LK',
        _b[FloorPlan.Ld] = 'LD',
        _b[FloorPlan.S] = 'S',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.floorPlanEncoder = generators_1.generateEncoder(translations);
exports.floorPlanDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=floor_plan.js.map