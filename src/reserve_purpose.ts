import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReservePurpose {
  LivingAloneTrialOrCohabitation = 'LivingAloneTrialOrCohabitation', // 追加, お試し一人暮らし・お試し同棲
  AddressHopping = 'AddressHopping', // アドレスホッピング
  BusinessTrip = 'BusinessTrip', // 長期出張/派遣/単身赴任の滞在先
  RemodelingOrBeforeMovingBase = 'RemodelingOrBeforeMovingBase', // 家のリフォーム、急な異動/引っ越し、通院や付き添い等による仮住まい
  WorkationRemoteWork = 'WorkationRemoteWork', // 追加, ワーケーション/リモートワーク
  Normal = 'Normal', // 通常の住まい
  CollegeExam = 'CollegeExam', // 大学受験の際の滞在先
  LongTrip = 'LongTrip', // 長期観光の拠点
  ForeignerStay = 'ForeignerStay', // 外国籍留学生・外国籍就労者の滞在先
  CitizenTemporaryReturn = 'CitizenTemporaryReturn', // 日本国籍の一時帰国拠点
  Other = 'Other', // その他

  LivingAloneTrial = 'LivingAloneTrial', // 廃止, お試しで初めて一人暮らし
  LivingAlone = 'LivingAlone', // 廃止, 本格的に一人暮らしを始める
  Cohabitation = 'Cohabitation', // 廃止, 同棲
  MovingToRoomSuitableForRemoteWork = 'MovingToRoomSuitableForRemoteWork', // 廃止, リモートワークに適した部屋へ引っ越し
  MovingToNearWorkplace = 'MovingToNearWorkplace', // 廃止, 職場近くに引っ越し
  MovingToReduceRent = 'MovingToReduceRent', // 廃止, 今の家賃を下げるために引っ越し
  MovingToNewPlace = 'MovingToNewPlace', // 廃止, 新しい家・街に引っ越したい
  BeforeTransferBase = 'BeforeTransferBase', // 廃止, 転勤前の拠点
  VoluntaryQuarantineBase = 'VoluntaryQuarantineBase', // 廃止, 自主隔離用拠点
  RoomShare = 'RoomShare', // 廃止, 友人とルームシェア
  CohabitationTrial = 'CohabitationTrial', // 廃止, お試し同棲
  WorkBase = 'WorkBase', // 廃止, 職場・学校近くの拠点
  RemoteWorkOrProductionBase = 'RemoteWorkOrProductionBase', // 廃止, リモートワーク・作業用の拠点
  MultipleResidence = 'MultipleResidence', // 廃止, 多拠点居住（アドレスホッピング以外）
  RentReduction = 'RentReduction', // 廃止, 今の家賃を安くしたい
  RemoteWorkBase = 'RemoteWorkBase', // 廃止, リモートワーク拠点
  Workation = 'Workation', // 廃止, ワーケーション
  Temporary = 'Temporary', // 廃止, 上京時の仮住まい
  EasyExamination = 'EasyExamination', // 廃止, 審査が通過しやすい部屋探し
  Interaction = 'Interaction', // 廃止, 交流
  Separation = 'Separation', // 廃止, 別居
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReservePurpose.LivingAloneTrialOrCohabitation]: '追加, お試し一人暮らし・お試し同棲',
    [ReservePurpose.AddressHopping]: 'アドレスホッピング',
    [ReservePurpose.BusinessTrip]: '長期出張/派遣/単身赴任の滞在先',
    [ReservePurpose.RemodelingOrBeforeMovingBase]:
      '家のリフォーム、急な異動/引っ越し、通院や付き添い等による仮住まい',
    [ReservePurpose.WorkationRemoteWork]: 'ワーケーション/リモートワーク',
    [ReservePurpose.Normal]: '通常の住まい',
    [ReservePurpose.CollegeExam]: '大学受験の際の滞在先',
    [ReservePurpose.LongTrip]: '長期観光の拠点',
    [ReservePurpose.ForeignerStay]: '外国籍留学生・外国籍就労者の滞在先',
    [ReservePurpose.CitizenTemporaryReturn]: '日本国籍の一時帰国拠点',
    [ReservePurpose.Other]: 'その他',

    [ReservePurpose.LivingAloneTrial]: 'お試しで初めて一人暮らし',
    [ReservePurpose.LivingAlone]: '本格的に一人暮らしを始める',
    [ReservePurpose.Cohabitation]: '同棲',
    [ReservePurpose.MovingToRoomSuitableForRemoteWork]:
      'リモートワークに適した部屋へ引っ越し',
    [ReservePurpose.MovingToNearWorkplace]: '職場近くに引っ越し',
    [ReservePurpose.MovingToReduceRent]: '今の家賃を下げるために引っ越し',
    [ReservePurpose.MovingToNewPlace]: '新しい家・街に引っ越したい',
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
    [ReservePurpose.RentReduction]: '今の家賃を安くしたい',
    [ReservePurpose.RemoteWorkBase]: 'リモートワーク拠点',
    [ReservePurpose.Interaction]: '交流',
    [ReservePurpose.Separation]: '別居',
    
  },
  en: {
    [ReservePurpose.LivingAloneTrialOrCohabitation]: 'Trial living alone・Cohabitation',
    [ReservePurpose.AddressHopping]: 'Address hopping.',
    [ReservePurpose.BusinessTrip]: 'Business trip.',
    [ReservePurpose.RemodelingOrBeforeMovingBase]:
      'Base during remodeling / before moving.',
    [ReservePurpose.WorkationRemoteWork]: 'Workation/Remote work',
    [ReservePurpose.Normal]: 'Normal housing.',
    [ReservePurpose.CollegeExam]: 'College Exam',
    [ReservePurpose.LongTrip]: 'Long Trip',
    [ReservePurpose.ForeignerStay]: 'Foreigner Stay',
    [ReservePurpose.CitizenTemporaryReturn]: 'Citizen Temporary Return',
    [ReservePurpose.Other]: 'Other',

    [ReservePurpose.LivingAloneTrial]: 'Trial living alone.',
    [ReservePurpose.LivingAlone]: 'Living alone.',
    [ReservePurpose.Cohabitation]: 'Cohabitation.',
    [ReservePurpose.MovingToRoomSuitableForRemoteWork]:
      'Moving to room suitable for remote work.',
    [ReservePurpose.MovingToNearWorkplace]: 'Moving to near the workplace.',
    [ReservePurpose.MovingToReduceRent]: 'Moving to reduce the current rent.',
    [ReservePurpose.MovingToNewPlace]: 'Move to a new house / city',
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
    [ReservePurpose.RentReduction]: 'Reduce the current rent.',
    [ReservePurpose.RemoteWorkBase]: 'Remote work.',
    [ReservePurpose.Interaction]: 'Interaction',
    [ReservePurpose.Separation]: 'Separation.',
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
