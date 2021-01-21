import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReservePurpose {
  LivingAloneTrial = 'LivingAloneTrial', // お試しで初めて一人暮らし
  LivingAlone = 'LivingAlone', // 本格的に一人暮らしを始める
  Cohabitation = 'Cohabitation', // 同棲
  MovingToRoomSuitableForRemoteWork = 'MovingToRoomSuitableForRemoteWork', // リモートワークに適した部屋へ引っ越し
  MovingToNearWorkplace = 'MovingToNearWorkplace', // 職場近くに引っ越し
  MovingToReduceRent = 'MovingToReduceRent', // 今の家賃を下げるために引っ越し
  AddressHopping = 'AddressHopping', // アドレスホッピング
  MovingToNewPlace = 'MovingToNewPlace', // 新しい家・街に引っ越したい
  BusinessTrip = 'BusinessTrip', // 出張/長期赴任
  RemodelingOrBeforeMovingBase = 'RemodelingOrBeforeMovingBase', // リフォーム中/引越し前の拠点
  BeforeTransferBase = 'BeforeTransferBase', // 転勤前の拠点
  VoluntaryQuarantineBase = 'VoluntaryQuarantineBase', // 自主隔離用拠点
  RoomShare = 'RoomShare', // 友人とルームシェア
  CohabitationTrial = 'CohabitationTrial', // お試し同棲
  WorkBase = 'WorkBase', // 職場・学校近くの拠点
  RemoteWorkOrProductionBase = 'RemoteWorkOrProductionBase', // リモートワーク・作業用の拠点
  Workation = 'Workation', // ワーケーション・旅行
  MultipleResidence = 'MultipleResidence', // 多拠点居住（アドレスホッピング以外）
  Temporary = 'Temporary', // 上京時の仮住まい
  EasyExamination = 'EasyExamination', // 審査が通過しやすい部屋探し
  Normal = 'Normal', // 通常の住まい
  RentReduction = 'RentReduction', // 今の家賃を安くしたい
  RemoteWorkBase = 'RemoteWorkBase', // リモートワーク拠点
  Interaction = 'Interaction', // 交流
  Separation = 'Separation', // 別居
  Other = 'Other', // その他
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReservePurpose.LivingAloneTrial]: 'お試しで初めて一人暮らし',
    [ReservePurpose.LivingAlone]: '本格的に一人暮らしを始める',
    [ReservePurpose.Cohabitation]: '同棲',
    [ReservePurpose.MovingToRoomSuitableForRemoteWork]:
      'リモートワークに適した部屋へ引っ越し',
    [ReservePurpose.MovingToNearWorkplace]: '職場近くに引っ越し',
    [ReservePurpose.MovingToReduceRent]: '今の家賃を下げるために引っ越し',
    [ReservePurpose.AddressHopping]: 'アドレスホッピング',
    [ReservePurpose.MovingToNewPlace]: '新しい家・街に引っ越したい',
    [ReservePurpose.BusinessTrip]: '出張/長期赴任',
    [ReservePurpose.RemodelingOrBeforeMovingBase]:
      'リフォーム中/引越し前の拠点',
    [ReservePurpose.BeforeTransferBase]: '転勤前の拠点',
    [ReservePurpose.VoluntaryQuarantineBase]: '自主隔離用拠点',
    [ReservePurpose.RoomShare]: '友人とルームシェア',
    [ReservePurpose.CohabitationTrial]: 'お試し同棲',
    [ReservePurpose.WorkBase]: '職場・学校近くの拠点',
    [ReservePurpose.RemoteWorkOrProductionBase]: 'リモートワーク・作業用の拠点',
    [ReservePurpose.Workation]: 'ワーケーション・旅行',
    [ReservePurpose.MultipleResidence]: '多拠点居住（アドレスホッピング以外）',
    [ReservePurpose.Temporary]: '上京時の仮住まい',
    [ReservePurpose.EasyExamination]: '審査が通過しやすい部屋探し',
    [ReservePurpose.Normal]: '通常の住まい',
    [ReservePurpose.RentReduction]: '今の家賃を安くしたい',
    [ReservePurpose.RemoteWorkBase]: 'リモートワーク拠点',
    [ReservePurpose.Interaction]: '交流',
    [ReservePurpose.Separation]: '別居',
    [ReservePurpose.Other]: 'その他',
  },
  en: {
    [ReservePurpose.LivingAloneTrial]: 'Trial living alone.',
    [ReservePurpose.LivingAlone]: 'Living alone.',
    [ReservePurpose.Cohabitation]: 'Cohabitation.',
    [ReservePurpose.MovingToRoomSuitableForRemoteWork]:
      'Moving to room suitable for remote work.',
    [ReservePurpose.MovingToNearWorkplace]: 'Moving to near the workplace.',
    [ReservePurpose.MovingToReduceRent]: 'Moving to reduce the current rent.',
    [ReservePurpose.AddressHopping]: 'Address hopping.',
    [ReservePurpose.MovingToNewPlace]: 'Move to a new house / city',
    [ReservePurpose.BusinessTrip]: 'Business trip.',
    [ReservePurpose.RemodelingOrBeforeMovingBase]:
      'Base during remodeling / before moving.',
    [ReservePurpose.BeforeTransferBase]: 'Base before transfer.',
    [ReservePurpose.VoluntaryQuarantineBase]: 'Base for voluntary quarantine.',
    [ReservePurpose.RoomShare]: 'Room share.',
    [ReservePurpose.CohabitationTrial]: 'Trial cohabitation.',
    [ReservePurpose.WorkBase]: 'Base near workplace / school.',
    [ReservePurpose.RemoteWorkOrProductionBase]: 'Base for remote work / work.',
    [ReservePurpose.Workation]: 'Workation / travel.',
    [ReservePurpose.MultipleResidence]:
      'Multiple residences (not address hopping).',
    [ReservePurpose.Temporary]: 'Temporary housing when moving to Tokyo.',
    [ReservePurpose.EasyExamination]: 'Easy to pass the examination.',
    [ReservePurpose.Normal]: 'Normal housing.',
    [ReservePurpose.RentReduction]: 'Reduce the current rent.',
    [ReservePurpose.RemoteWorkBase]: 'Remote work.',
    [ReservePurpose.Interaction]: 'Interaction',
    [ReservePurpose.Separation]: 'Separation.',
    [ReservePurpose.Other]: 'Other.',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const reservePurposeEncoder = generateEncoder<ReservePurpose>(
  translations,
);
export const reservePurposeDecoder = generateDecoder<ReservePurpose>(
  reverseTranslations,
);
