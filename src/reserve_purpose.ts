import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ReservePurpose {
  RentReduction = 'RentReduction', // 今の家賃を安くしたい
  LivingAloneTrial = 'LivingAloneTrial', // お試し一人暮らし
  Temporary = 'Temporary', // 上京時の仮住まい
  AddressHopping = 'AddressHopping', // アドレスホッピング
  EasyExamination = 'EasyExamination', // 審査が通過しやすい部屋探し
  CohabitationTrial = 'CohabitationTrial', // お試し同棲
  RoomShare = 'RoomShare', // ルームシェア
  Normal = 'Normal', // 通常の住まい
  BusinessTrip = 'BusinessTrip', // 出張
  Workation = 'Workation', // ワーケーション
  RemoteWorkBase = 'RemoteWorkBase', // リモートワーク拠点
  WorkBase = 'WorkBase', // 職場・学校近くの拠点
  Interaction = 'Interaction', // 交流
  Separation = 'Separation', // 別居
  Other = 'Other', // その他
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ReservePurpose.RentReduction]: '今の家賃を安くしたい',
    [ReservePurpose.LivingAloneTrial]: 'お試し一人暮らし',
    [ReservePurpose.Temporary]: '上京時の仮住まい',
    [ReservePurpose.AddressHopping]: 'アドレスホッピング',
    [ReservePurpose.EasyExamination]: '審査が通過しやすい部屋探し',
    [ReservePurpose.CohabitationTrial]: 'お試し同棲',
    [ReservePurpose.RoomShare]: 'ルームシェア',
    [ReservePurpose.Normal]: '通常の住まい',
    [ReservePurpose.BusinessTrip]: '出張',
    [ReservePurpose.Workation]: 'ワーケーション',
    [ReservePurpose.RemoteWorkBase]: 'リモートワーク拠点',
    [ReservePurpose.WorkBase]: '職場・学校近くの拠点',
    [ReservePurpose.Interaction]: '交流',
    [ReservePurpose.Separation]: '別居',
    [ReservePurpose.Other]: 'その他',
  },
  en: {
    [ReservePurpose.RentReduction]: 'Reduce the current rent.',
    [ReservePurpose.LivingAloneTrial]: 'Trial living alone.',
    [ReservePurpose.Temporary]: 'Temporary housing when moving to Tokyo.',
    [ReservePurpose.AddressHopping]: 'Address hopping.',
    [ReservePurpose.EasyExamination]: 'Easy to pass the examination.',
    [ReservePurpose.CohabitationTrial]: 'Trial cohabitation.',
    [ReservePurpose.RoomShare]: 'Room share.',
    [ReservePurpose.Normal]: 'Normal housing.',
    [ReservePurpose.BusinessTrip]: 'Business trip.',
    [ReservePurpose.Workation]: 'Workation.',
    [ReservePurpose.RemoteWorkBase]: 'Remote work.',
    [ReservePurpose.WorkBase]: 'Base near workplace / school.',
    [ReservePurpose.Interaction]: 'Interaction.',
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
