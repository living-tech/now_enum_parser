var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var RoomFloorPlan;
(function (RoomFloorPlan) {
    RoomFloorPlan["OneRoom"] = "OneRoom";
    RoomFloorPlan["OneK"] = "OneK";
    RoomFloorPlan["OneDk"] = "OneDk";
    RoomFloorPlan["OneLdk"] = "OneLdk";
    RoomFloorPlan["TwoK"] = "TwoK";
    RoomFloorPlan["TwoDk"] = "TwoDk";
    RoomFloorPlan["TwoLdk"] = "TwoLdk";
    RoomFloorPlan["ThreeK"] = "ThreeK";
    RoomFloorPlan["ThreeDk"] = "ThreeDk";
    RoomFloorPlan["ThreeLdk"] = "ThreeLdk";
    RoomFloorPlan["FourK"] = "FourK";
    RoomFloorPlan["FourDk"] = "FourDk";
    RoomFloorPlan["MoreThanFourLdk"] = "MoreThanFourLdk";
})(RoomFloorPlan || (RoomFloorPlan = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomFloorPlan.OneRoom] = 'ワンルーム',
        _a[RoomFloorPlan.OneK] = '1K',
        _a[RoomFloorPlan.OneDk] = '1DK',
        _a[RoomFloorPlan.OneLdk] = '1LDK',
        _a[RoomFloorPlan.TwoK] = '2K',
        _a[RoomFloorPlan.TwoDk] = '2DK',
        _a[RoomFloorPlan.TwoLdk] = '2LDK',
        _a[RoomFloorPlan.ThreeK] = '3K',
        _a[RoomFloorPlan.ThreeDk] = '3DK',
        _a[RoomFloorPlan.ThreeLdk] = '3LDK',
        _a[RoomFloorPlan.FourK] = '4K',
        _a[RoomFloorPlan.FourDk] = '4DK',
        _a[RoomFloorPlan.MoreThanFourLdk] = '4LDK以上',
        _a),
    en: (_b = {},
        _b[RoomFloorPlan.OneRoom] = 'Studio Apartment',
        _b[RoomFloorPlan.OneK] = '1K',
        _b[RoomFloorPlan.OneDk] = '1DK',
        _b[RoomFloorPlan.OneLdk] = '1LDK',
        _b[RoomFloorPlan.TwoK] = '2K',
        _b[RoomFloorPlan.TwoDk] = '2DK',
        _b[RoomFloorPlan.TwoLdk] = '2LDK',
        _b[RoomFloorPlan.ThreeK] = '3K',
        _b[RoomFloorPlan.ThreeDk] = '3DK',
        _b[RoomFloorPlan.ThreeLdk] = '3LDK',
        _b[RoomFloorPlan.FourK] = '4K',
        _b[RoomFloorPlan.FourDk] = '4DK',
        _b[RoomFloorPlan.MoreThanFourLdk] = '4LDK or more',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var roomFloorPlanEncoder = generateEncoder(translations);
export var roomFloorPlanDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=room_floor_plan.js.map