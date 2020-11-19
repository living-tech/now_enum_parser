"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomUsePurposeDecoder = exports.roomUsePurposeEncoder = exports.RoomUsePurpose = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RoomUsePurpose;
(function (RoomUsePurpose) {
    RoomUsePurpose["RentReduction"] = "RentReduction";
    RoomUsePurpose["LivingAloneTrial"] = "LivingAloneTrial";
    RoomUsePurpose["Temporary"] = "Temporary";
    RoomUsePurpose["AddressHopping"] = "AddressHopping";
    RoomUsePurpose["EasyExamination"] = "EasyExamination";
    RoomUsePurpose["CohabitationTrial"] = "CohabitationTrial";
    RoomUsePurpose["RoomShare"] = "RoomShare";
    RoomUsePurpose["Normal"] = "Normal";
    RoomUsePurpose["BusinessTrip"] = "BusinessTrip";
    RoomUsePurpose["Workation"] = "Workation";
    RoomUsePurpose["RemoteWorkBase"] = "RemoteWorkBase";
    RoomUsePurpose["WorkBase"] = "WorkBase";
    RoomUsePurpose["Interaction"] = "Interaction";
    RoomUsePurpose["Separation"] = "Separation";
    RoomUsePurpose["Other"] = "Other";
})(RoomUsePurpose = exports.RoomUsePurpose || (exports.RoomUsePurpose = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RoomUsePurpose.RentReduction] = '今の家賃を安くしたい',
        _a[RoomUsePurpose.LivingAloneTrial] = 'お試し一人暮らし',
        _a[RoomUsePurpose.Temporary] = '上京時の仮住まい',
        _a[RoomUsePurpose.AddressHopping] = 'アドレスホッピング',
        _a[RoomUsePurpose.EasyExamination] = '審査が通過しやすい部屋探し',
        _a[RoomUsePurpose.CohabitationTrial] = 'お試し同棲',
        _a[RoomUsePurpose.RoomShare] = 'ルームシェア',
        _a[RoomUsePurpose.Normal] = '通常の住まい',
        _a[RoomUsePurpose.BusinessTrip] = '出張',
        _a[RoomUsePurpose.Workation] = 'ワーケーション',
        _a[RoomUsePurpose.RemoteWorkBase] = 'リモートワーク拠点',
        _a[RoomUsePurpose.WorkBase] = '職場・学校近くの拠点',
        _a[RoomUsePurpose.Interaction] = '交流',
        _a[RoomUsePurpose.Separation] = '別居',
        _a[RoomUsePurpose.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[RoomUsePurpose.RentReduction] = 'Reduce the current rent.',
        _b[RoomUsePurpose.LivingAloneTrial] = 'Trial living alone.',
        _b[RoomUsePurpose.Temporary] = 'Temporary housing when moving to Tokyo.',
        _b[RoomUsePurpose.AddressHopping] = 'Address hopping.',
        _b[RoomUsePurpose.EasyExamination] = 'Easy to pass the examination.',
        _b[RoomUsePurpose.CohabitationTrial] = 'Trial cohabitation.',
        _b[RoomUsePurpose.RoomShare] = 'Room share.',
        _b[RoomUsePurpose.Normal] = 'Normal housing.',
        _b[RoomUsePurpose.BusinessTrip] = 'Business trip.',
        _b[RoomUsePurpose.Workation] = 'Workation.',
        _b[RoomUsePurpose.RemoteWorkBase] = 'Remote work.',
        _b[RoomUsePurpose.WorkBase] = 'Base near workplace / school.',
        _b[RoomUsePurpose.Interaction] = 'Interaction.',
        _b[RoomUsePurpose.Separation] = 'Separation.',
        _b[RoomUsePurpose.Other] = 'Other.',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.roomUsePurposeEncoder = generators_1.generateEncoder(translations);
exports.roomUsePurposeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=room_use_purpose.js.map