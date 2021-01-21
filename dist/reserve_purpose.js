"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservePurposeDecoder = exports.reservePurposeEncoder = exports.ReservePurpose = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ReservePurpose;
(function (ReservePurpose) {
    ReservePurpose["LivingAloneTrial"] = "LivingAloneTrial";
    ReservePurpose["LivingAlone"] = "LivingAlone";
    ReservePurpose["Cohabitation"] = "Cohabitation";
    ReservePurpose["MovingToRoomSuitableForRemoteWork"] = "MovingToRoomSuitableForRemoteWork";
    ReservePurpose["MovingToNearWorkplace"] = "MovingToNearWorkplace";
    ReservePurpose["MovingToReduceRent"] = "MovingToReduceRent";
    ReservePurpose["AddressHopping"] = "AddressHopping";
    ReservePurpose["MovingToNewPlace"] = "MovingToNewPlace";
    ReservePurpose["BusinessTrip"] = "BusinessTrip";
    ReservePurpose["RemodelingOrBeforeMovingBase"] = "RemodelingOrBeforeMovingBase";
    ReservePurpose["BeforeTransferBase"] = "BeforeTransferBase";
    ReservePurpose["VoluntaryQuarantineBase"] = "VoluntaryQuarantineBase";
    ReservePurpose["RoomShare"] = "RoomShare";
    ReservePurpose["CohabitationTrial"] = "CohabitationTrial";
    ReservePurpose["WorkBase"] = "WorkBase";
    ReservePurpose["RemoteWorkOrProductionBase"] = "RemoteWorkOrProductionBase";
    ReservePurpose["Workation"] = "Workation";
    ReservePurpose["MultipleResidence"] = "MultipleResidence";
    ReservePurpose["Temporary"] = "Temporary";
    ReservePurpose["EasyExamination"] = "EasyExamination";
    ReservePurpose["Normal"] = "Normal";
    ReservePurpose["RentReduction"] = "RentReduction";
    ReservePurpose["RemoteWorkBase"] = "RemoteWorkBase";
    ReservePurpose["Interaction"] = "Interaction";
    ReservePurpose["Separation"] = "Separation";
    ReservePurpose["Other"] = "Other";
})(ReservePurpose = exports.ReservePurpose || (exports.ReservePurpose = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ReservePurpose.LivingAloneTrial] = 'お試しで初めて一人暮らし',
        _a[ReservePurpose.LivingAlone] = '本格的に一人暮らしを始める',
        _a[ReservePurpose.Cohabitation] = '同棲',
        _a[ReservePurpose.MovingToRoomSuitableForRemoteWork] = 'リモートワークに適した部屋へ引っ越し',
        _a[ReservePurpose.MovingToNearWorkplace] = '職場近くに引っ越し',
        _a[ReservePurpose.MovingToReduceRent] = '今の家賃を下げるために引っ越し',
        _a[ReservePurpose.AddressHopping] = 'アドレスホッピング',
        _a[ReservePurpose.MovingToNewPlace] = '新しい家・街に引っ越したい',
        _a[ReservePurpose.BusinessTrip] = '出張/長期赴任',
        _a[ReservePurpose.RemodelingOrBeforeMovingBase] = 'リフォーム中/引越し前の拠点',
        _a[ReservePurpose.BeforeTransferBase] = '転勤前の拠点',
        _a[ReservePurpose.VoluntaryQuarantineBase] = '自主隔離用拠点',
        _a[ReservePurpose.RoomShare] = '友人とルームシェア',
        _a[ReservePurpose.CohabitationTrial] = 'お試し同棲',
        _a[ReservePurpose.WorkBase] = '職場・学校近くの拠点',
        _a[ReservePurpose.RemoteWorkOrProductionBase] = 'リモートワーク・作業用の拠点',
        _a[ReservePurpose.Workation] = 'ワーケーション',
        _a[ReservePurpose.MultipleResidence] = '多拠点居住（アドレスホッピングではない）',
        _a[ReservePurpose.Temporary] = '上京時の仮住まい',
        _a[ReservePurpose.EasyExamination] = '審査が通過しやすい部屋探し',
        _a[ReservePurpose.Normal] = '通常の住まい',
        _a[ReservePurpose.RentReduction] = '今の家賃を安くしたい',
        _a[ReservePurpose.RemoteWorkBase] = 'リモートワーク拠点',
        _a[ReservePurpose.Interaction] = '交流',
        _a[ReservePurpose.Separation] = '別居',
        _a[ReservePurpose.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[ReservePurpose.LivingAloneTrial] = 'Trial living alone.',
        _b[ReservePurpose.LivingAlone] = 'Living alone.',
        _b[ReservePurpose.Cohabitation] = 'Cohabitation.',
        _b[ReservePurpose.MovingToRoomSuitableForRemoteWork] = 'Moving to room suitable for remote work.',
        _b[ReservePurpose.MovingToNearWorkplace] = 'Moving to near the workplace.',
        _b[ReservePurpose.MovingToReduceRent] = 'Moving to reduce the current rent.',
        _b[ReservePurpose.AddressHopping] = 'Address hopping.',
        _b[ReservePurpose.MovingToNewPlace] = 'Move to a new house / city',
        _b[ReservePurpose.BusinessTrip] = 'Business trip.',
        _b[ReservePurpose.RemodelingOrBeforeMovingBase] = 'Base during remodeling / before moving.',
        _b[ReservePurpose.BeforeTransferBase] = 'Base before transfer.',
        _b[ReservePurpose.VoluntaryQuarantineBase] = 'Base for voluntary quarantine.',
        _b[ReservePurpose.RoomShare] = 'Room share.',
        _b[ReservePurpose.CohabitationTrial] = 'Trial cohabitation.',
        _b[ReservePurpose.WorkBase] = 'Base near workplace / school.',
        _b[ReservePurpose.RemoteWorkOrProductionBase] = 'Base for remote work / work.',
        _b[ReservePurpose.Workation] = 'Workation.',
        _b[ReservePurpose.MultipleResidence] = 'Multiple residences (not address hopping).',
        _b[ReservePurpose.Temporary] = 'Temporary housing when moving to Tokyo.',
        _b[ReservePurpose.EasyExamination] = 'Easy to pass the examination.',
        _b[ReservePurpose.Normal] = 'Normal housing.',
        _b[ReservePurpose.RentReduction] = 'Reduce the current rent.',
        _b[ReservePurpose.RemoteWorkBase] = 'Remote work.',
        _b[ReservePurpose.Interaction] = 'Interaction',
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