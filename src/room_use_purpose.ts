import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RoomUsePurpose {
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
    [RoomUsePurpose.RentReduction]: '今の家賃を安くしたい',
    [RoomUsePurpose.LivingAloneTrial]: 'お試し一人暮らし',
    [RoomUsePurpose.Temporary]: '上京時の仮住まい',
    [RoomUsePurpose.AddressHopping]: 'アドレスホッピング',
    [RoomUsePurpose.EasyExamination]: '審査が通過しやすい部屋探し',
    [RoomUsePurpose.CohabitationTrial]: 'お試し同棲',
    [RoomUsePurpose.RoomShare]: 'ルームシェア',
    [RoomUsePurpose.Normal]: '通常の住まい',
    [RoomUsePurpose.BusinessTrip]: '出張',
    [RoomUsePurpose.Workation]: 'ワーケーション',
    [RoomUsePurpose.RemoteWorkBase]: 'リモートワーク拠点',
    [RoomUsePurpose.WorkBase]: '職場・学校近くの拠点',
    [RoomUsePurpose.Interaction]: '交流',
    [RoomUsePurpose.Separation]: '別居',
    [RoomUsePurpose.Other]: 'その他',
  },
  en: {
    [RoomUsePurpose.RentReduction]: 'Reduce the current rent.',
    [RoomUsePurpose.LivingAloneTrial]: 'Trial living alone.',
    [RoomUsePurpose.Temporary]: 'Temporary housing when moving to Tokyo.',
    [RoomUsePurpose.AddressHopping]: 'Address hopping.',
    [RoomUsePurpose.EasyExamination]: 'Easy to pass the examination.',
    [RoomUsePurpose.CohabitationTrial]: 'Trial cohabitation.',
    [RoomUsePurpose.RoomShare]: 'Room share.',
    [RoomUsePurpose.Normal]: 'Normal housing.',
    [RoomUsePurpose.BusinessTrip]: 'Business trip.',
    [RoomUsePurpose.Workation]: 'Workation.',
    [RoomUsePurpose.RemoteWorkBase]: 'Remote work.',
    [RoomUsePurpose.WorkBase]: 'Base near workplace / school.',
    [RoomUsePurpose.Interaction]: 'Interaction.',
    [RoomUsePurpose.Separation]: 'Separation.',
    [RoomUsePurpose.Other]: 'Other.',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const roomUsePurposeEncoder = generateEncoder<RoomUsePurpose>(
  translations,
);
export const roomUsePurposeDecoder = generateDecoder<RoomUsePurpose>(
  reverseTranslations,
);
