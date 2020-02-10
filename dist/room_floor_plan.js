"use strict";
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
    ja: {},
    en: {},
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomFloorPlanEncoder = generators_1.generateEncoder(translations);
exports.roomFloorPlanDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_floor_plan.js.map