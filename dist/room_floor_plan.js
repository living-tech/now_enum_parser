"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RoomFloorPlan;
(function (RoomFloorPlan) {
    RoomFloorPlan["OneRoom"] = "OneRoom";
    RoomFloorPlan["OneK"] = "OneK";
    RoomFloorPlan["OneDK"] = "OneDK";
    RoomFloorPlan["OneLDK"] = "OneLDK";
    RoomFloorPlan["TwoK"] = "TwoK";
    RoomFloorPlan["TwoDK"] = "TwoDK";
    RoomFloorPlan["TwoLDK"] = "TwoLDK";
    RoomFloorPlan["ThreeK"] = "ThreeK";
    RoomFloorPlan["ThreeDK"] = "ThreeDK";
    RoomFloorPlan["ThreeLDK"] = "ThreeLDK";
    RoomFloorPlan["FourK"] = "FourK";
    RoomFloorPlan["FourDK"] = "FourDK";
    RoomFloorPlan["MoreThanFourLDK"] = "MoreThanFourLDK";
})(RoomFloorPlan = exports.RoomFloorPlan || (exports.RoomFloorPlan = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomFloorPlan.OneRoom] = 'ワンルーム',
        _a[RoomFloorPlan.OneK] = '1K',
        _a[RoomFloorPlan.OneDK] = '1DK',
        _a[RoomFloorPlan.OneLDK] = '1LDK',
        _a[RoomFloorPlan.TwoK] = '2K',
        _a[RoomFloorPlan.TwoDK] = '2DK',
        _a[RoomFloorPlan.TwoLDK] = '2LDK',
        _a[RoomFloorPlan.ThreeK] = '3K',
        _a[RoomFloorPlan.ThreeDK] = '3DK',
        _a[RoomFloorPlan.ThreeLDK] = '3LDK',
        _a[RoomFloorPlan.FourK] = '4K',
        _a[RoomFloorPlan.FourDK] = '4DK',
        _a[RoomFloorPlan.MoreThanFourLDK] = '4LDK以上',
        _a),
    en: (_b = {},
        _b[RoomFloorPlan.OneRoom] = 'One Room',
        _b[RoomFloorPlan.OneK] = '1K',
        _b[RoomFloorPlan.OneDK] = '1DK',
        _b[RoomFloorPlan.OneLDK] = '1LDK',
        _b[RoomFloorPlan.TwoK] = '2K',
        _b[RoomFloorPlan.TwoDK] = '2DK',
        _b[RoomFloorPlan.TwoLDK] = '2LDK',
        _b[RoomFloorPlan.ThreeK] = '3K',
        _b[RoomFloorPlan.ThreeDK] = '3DK',
        _b[RoomFloorPlan.ThreeLDK] = '3LDK',
        _b[RoomFloorPlan.FourK] = '4K',
        _b[RoomFloorPlan.FourDK] = '4DK',
        _b[RoomFloorPlan.MoreThanFourLDK] = '4LDK or More',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomFloorPlanEncoder = generators_1.generateEncoder(translations);
exports.roomFloorPlanDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_floor_plan.js.map