"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservePurposeDecoder = exports.reservePurposeEncoder = exports.ReservePurpose = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReservePurpose;
(function (ReservePurpose) {
    ReservePurpose["RentReduction"] = "RentReduction";
    ReservePurpose["LivingAloneTrial"] = "LivingAloneTrial";
    ReservePurpose["Temporary"] = "Temporary";
    ReservePurpose["AddressHopping"] = "AddressHopping";
    ReservePurpose["EasyExamination"] = "EasyExamination";
    ReservePurpose["CohabitationTrial"] = "CohabitationTrial";
    ReservePurpose["RoomShare"] = "RoomShare";
    ReservePurpose["Normal"] = "Normal";
    ReservePurpose["BusinessTrip"] = "BusinessTrip";
    ReservePurpose["Workation"] = "Workation";
    ReservePurpose["RemoteWorkBase"] = "RemoteWorkBase";
    ReservePurpose["WorkBase"] = "WorkBase";
    ReservePurpose["Interaction"] = "Interaction";
    ReservePurpose["Separation"] = "Separation";
    ReservePurpose["Other"] = "Other";
})(ReservePurpose = exports.ReservePurpose || (exports.ReservePurpose = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReservePurpose.RentReduction] = '今の家賃を安くしたい',
        _a[ReservePurpose.LivingAloneTrial] = 'お試し一人暮らし',
        _a[ReservePurpose.Temporary] = '上京時の仮住まい',
        _a[ReservePurpose.AddressHopping] = 'アドレスホッピング',
        _a[ReservePurpose.EasyExamination] = '審査が通過しやすい部屋探し',
        _a[ReservePurpose.CohabitationTrial] = 'お試し同棲',
        _a[ReservePurpose.RoomShare] = 'ルームシェア',
        _a[ReservePurpose.Normal] = '通常の住まい',
        _a[ReservePurpose.BusinessTrip] = '出張',
        _a[ReservePurpose.Workation] = 'ワーケーション',
        _a[ReservePurpose.RemoteWorkBase] = 'リモートワーク拠点',
        _a[ReservePurpose.WorkBase] = '職場・学校近くの拠点',
        _a[ReservePurpose.Interaction] = '交流',
        _a[ReservePurpose.Separation] = '別居',
        _a[ReservePurpose.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[ReservePurpose.RentReduction] = 'Reduce the current rent.',
        _b[ReservePurpose.LivingAloneTrial] = 'Trial living alone.',
        _b[ReservePurpose.Temporary] = 'Temporary housing when moving to Tokyo.',
        _b[ReservePurpose.AddressHopping] = 'Address hopping.',
        _b[ReservePurpose.EasyExamination] = 'Easy to pass the examination.',
        _b[ReservePurpose.CohabitationTrial] = 'Trial cohabitation.',
        _b[ReservePurpose.RoomShare] = 'Room share.',
        _b[ReservePurpose.Normal] = 'Normal housing.',
        _b[ReservePurpose.BusinessTrip] = 'Business trip.',
        _b[ReservePurpose.Workation] = 'Workation.',
        _b[ReservePurpose.RemoteWorkBase] = 'Remote work.',
        _b[ReservePurpose.WorkBase] = 'Base near workplace / school.',
        _b[ReservePurpose.Interaction] = 'Interaction.',
        _b[ReservePurpose.Separation] = 'Separation.',
        _b[ReservePurpose.Other] = 'Other.',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.reservePurposeEncoder = generators_1.generateEncoder(translations);
exports.reservePurposeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=reserve_purpose.js.map